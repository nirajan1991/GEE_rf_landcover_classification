//2020, 2016, 2010, 2004, 1998, 1992 

//This script is used to perform classification for land cover mapping in the Koshi river are in Morang, Sunsari and saptari
// This uses vegetation data for 3 years seasonal composite to train the model 
// and then applies the model to the yaer with same landsat mission to respective years
// It was adopted to reduce the impact of difference in band width across different sensors in different landsat missions
//Landsat 7 was discarded to avoid complication related to difference in band width and scan line failure

//written on 20210603
//I found that NDWI has several band combinations with differnt purposes as stated in the link below
//https://www.usna.edu/Users/oceano/pguth/md_help/html/ndwi.htm
//I had been using NDWI used for vegetatation water monitoring

//The major hurdle was separating the urban area from bareland especially the area around Koshi
//The BUI used was not able to separate this and as per the paper mentioned below other variants too can't
//The paper published in 2018 doi:10.3390/rs11030345 had used NDTI and in thier example was able to separate using sentinel images
//For that I will need SWIR2 band to calculate NDTI

//first define the region of interest
var latmax = 26.87;
var lonmin = 86.48;
var lonmax = 87.69;
var latmin = 26.34;
var ROI = ee.Geometry.Rectangle([lonmin-0.05, latmin-0.05, lonmax+0.05, latmax+0.05]);

//list the band number and their names for later use
var l57_bands = ['B1','B2','B3','B4', 'B5', 'B7', 'pixel_qa'];
var l57_bandnames = ['blue', 'green', 'red', 'nir', 'swir1', 'swir2','pixel_qa'];

var l8_bands = ['B2','B3','B4', 'B5','B6','B7','pixel_qa'];
var l8_bandnames = ['blue', 'green', 'red', 'nir', 'swir1', 'swir2','pixel_qa'];

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

//write functions first
//mosaic by date
//https://gis.stackexchange.com/questions/280156/mosaicking-a-image-collection-by-date-day-in-google-earth-engine 

function mosaicByDate(imcol){
  // imcol: An image collection
  // returns: An image collection
  var imlist = imcol.toList(120);//(imcol.size())

  var unique_dates = imlist.map(function(im){
    return ee.Image(im).date().format("YYYY-MM-dd");
  }).distinct();

  var mosaic_imlist = unique_dates.map(function(d){
    d = ee.Date(d);

    var im = imcol
      .filterDate(d, d.advance(1, "day"))
      .mosaic();

    return im.set(
        "system:time_start", d.millis(), 
        "system:id", d.format("YYYY-MM-dd"));
  });

  return ee.ImageCollection(mosaic_imlist);
}

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

// create function to crop with ROI boundaries
//https://gis.stackexchange.com/questions/286135/how-can-i-clip-all-the-images-in-a-collection-of-modis-ndvi-in-google-earth-engi
var ROI_bounds = function(image) {
  // Crop by table extension
  return image.clip(ROI);
};
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

//calculate NDVI and add as band
function addNDVI(im){
    var ndvi = im.normalizedDifference(['nir', 'red']).rename('NDVI'); // nir-red/nir+red
    return im.addBands(ndvi);
}

//Also define a function to add the rescale value of NIR to the image
// I chose to use different functions for 7 and 8
function addNIR(im){
    var nir = im.select('nir').multiply(0.0001).rename('NIR');
    return im.addBands(nir);
}

//calculate NDVI and add as band
function addNDWI(im){
    //var ndwi = im.normalizedDifference(['nir', 'swir1']).rename('NDWI');
    //var ndwi = im.normalizedDifference(['green', 'nir']).rename('NDWI');
    // modified versio of the green-nir was widely used in other papers, as MNDWI, but i kept the name the same for simplicity
    var mndwi = im.normalizedDifference(['green', 'swir1']).rename('NDWI');
    return im.addBands(mndwi);
}

// //Similarly for built up index
// //ndbi = swir-nir/swir+nir
// //https://www.linkedin.com/pulse/ndvi-ndbi-ndwi-calculation-using-landsat-7-8-tek-bahadur-kshetri
// function addBUI(im){
//   var ndbi = im.normalizedDifference(['swir1', 'nir']).rename('NDBI');
//   var bu = ndbi.select('NDBI').subtract(im.select('NDVI')).rename('BUI');
//   return im.addBands(bu);
// }

function addNDTI(im){
  var ndti = im.normalizedDifference(['swir1', 'swir2']).rename('NDTI');
  return im.addBands(ndti);
}


//add sum of rgb to separate sand and buildings based on brightness
function addRGB(im){
  var rgb_add = im.select('red').add(im.select('green')).add(im.select('blue'));
  var rgb_unit = rgb_add.divide(30000).rename("RGB");
  return im.addBands(rgb_unit);
}

//write a function to calculate bare soil index
//BSI = ((Red+SWIR) - (NIR+Blue)) / ((Red+SWIR) + (NIR+Blue))
function addBSI(im){
  var numerator = im.select('red').add(im.select('swir1')).subtract(im.select('nir').add(im.select('blue')));
  var denominator = im.select('red').add(im.select('swir1')).add(im.select('nir').add(im.select('blue')));
  var bsi = numerator.subtract(denominator).divide(numerator.add(denominator)).rename('BSI');
  //var bsi = im.normalizedDifference(numerator, denominator).rename('BSI');
  return im.addBands(bsi);
}

//also calculate the sum of NDVIs in all seasons to make sure that the trees in urban area have higher ndvi
//same function will work for both landsat 7 and 8 as we will have renamed them
function sumNDVI(im){
  var ndvi_sum = im.select('NDVI_1').add(im.select('NDVI_2')).add(im.select('NDVI_3')).add(im.select('NDVI_4')).rename('NDVI_sum');
  return im.addBands(ndvi_sum);
}

//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
// This cloud mask also removes the scan line corrected data for better output
//https://code.earthengine.google.com/8febc106d425bd1d5fa226f712e187ff
//This uses the example function in the google earth engine landsat7 catalog

var cloudMaskL457 = function(image) {
  var qa = image.select('pixel_qa');
  var cloud = qa.bitwiseAnd(1 << 5)
                  .and(qa.bitwiseAnd(1 << 7))
                  .or(qa.bitwiseAnd(1 << 3));
  
    // Remove edge pixels that don't occur in all bands
  var mask2 = image.mask().reduce(ee.Reducer.min());
  return image.updateMask(cloud.not()).updateMask(mask2);
};

function cloudMaskL8 (image) {
  var cloudShadowBitMask = (1 << 3);
  var cloudsBitMask = (1 << 5);
  
    // Get the pixel QA band.
  var qa = image.select('pixel_qa');

    // Both flags should be set to zero, indicating clear conditions.
  var mask = qa.bitwiseAnd(cloudShadowBitMask).eq(0)
                 .and(qa.bitwiseAnd(cloudsBitMask).eq(0));
  return image.updateMask(mask);
}
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
// create a function to calculate the mean ndvi at annual scale
//first rename ndvi bands to use toBands for stacking

function renameNDVI(im){
		var dateString = ee.Date(im.get('system:time_start')).format('yyyy-MM-dd');
		var ndvi = im.select('NDVI').rename(dateString);
		return ndvi;
	}
//now apply renaming and calculate mean
function meanNDVI(imcol){
	//create a new imagecollection with only ndvi values
	var NDVIcollection = imcol.select('NDVI');

	var ndvi_renamed = NDVIcollection.map(renameNDVI);
	var ndvi_stacked = ndvi_renamed.toBands();
	var ndvi_annual_mean = ndvi_stacked.reduce(ee.Reducer.mean()).rename('NDVI_annual');
	return ndvi_annual_mean;
}
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
// you dont use for loop in code editor
// define the function to perform clustering and exporting the images to drive
//function cluster_export(yr, l578_idxs, clusterer){
function stack_vi_data (yr){
  var previous_yr = yr - 1;
  
  var s1_start = previous_yr + '-12-01';
  var s1_end = yr + '-02-28'; //make it 28 for uniformity, it throws error if 29 is used for non-leap year
  var s2_start = yr + '-03-01';
  var s2_end = yr + '-05-31'; 
  var s3_start = yr + '-06-01';
  var s3_end = yr + '-08-31'; 
  var s4_start = yr + '-09-01';
  var s4_end = yr + '-11-30'; 
  
  //----------------------------------------------------------------------------
  //----------------------------------------------------------------------------
  
  //Now read data
  //As per the climatology i have used december as the start of winter season
  var lc8 = ee.ImageCollection('LANDSAT/LC08/C01/T1_SR')
  
    .filterDate(s1_start, s4_end)
    .filterBounds(ROI)
    .select(l8_bands, l8_bandnames)
    .sort('CLOUD_COVER',true);
  
  //print(lc8)
  //mosaic by date
  var lc8_mosaic = mosaicByDate(lc8);
  //print(lc8_mosaic)
  
  //clip to ROI
  var lc8_Clipped = lc8_mosaic.map(ROI_bounds);
  //print(lc8_Clipped)
  
  //add required bands
  var lc8_addNIR = lc8_Clipped.map(addNIR);
  var lc8_addNDWI = lc8_addNIR.map(addNDWI);
  var lc8_addNDVI = lc8_addNDWI.map(addNDVI);
  var lc8_addNDTI = lc8_addNDVI.map(addNDTI);
  //mask cloud and cloud shadow
  var lc8_masked = lc8_addNDTI.map(cloudMaskL8);
  //select only those bands that we are going to use
  var lc8_idxs = lc8_masked.select(['NDVI','NDWI','NIR', 'NDTI']);
  //print('lc8 idxs',lc8_idxs);
  
  //Do that for Landsat 7 as well
  var lc5 = ee.ImageCollection('LANDSAT/LT05/C01/T1_SR')
  
    .filterDate(s1_start, s4_end)
    .filterBounds(ROI)
    .select(l57_bands, l57_bandnames)
    .sort('CLOUD_COVER',true);
    
  //mosaic by date
  var lc5_mosaic = mosaicByDate(lc5);
  
  //clip to ROI
  var lc5_Clipped = lc5_mosaic.map(ROI_bounds);
  
  //add required bands
  var lc5_addNIR = lc5_Clipped.map(addNIR);
  var lc5_addNDWI = lc5_addNIR.map(addNDWI);
  var lc5_addNDVI = lc5_addNDWI.map(addNDVI);
  var lc5_addNDTI = lc5_addNDVI.map(addNDTI);
  //mask cloud and cloud shadow
  var lc5_masked = lc5_addNDTI.map(cloudMaskL8);
  //select only those bands that we are going to use
  var lc5_idxs = lc5_masked.select(['NDVI','NDWI','NIR', 'NDTI']);
  //print('lc5 idxs',lc5_idxs);
  
  //now merge the image collection from 5 and 8
  //It was decided to not to use landsat 7 due to the scan line problem
  var l578_idxs = lc8_idxs.merge(lc5_idxs);
  
  //get the data only for each season from imagecollection 
	
	var l578_yr_idxs_s1 = l578_idxs.filterDate(s1_start, s1_end);
	var l578_yr_idxs_s2 = l578_idxs.filterDate(s2_start, s2_end);
	var l578_yr_idxs_s3 = l578_idxs.filterDate(s3_start, s3_end);
	var l578_yr_idxs_s4 = l578_idxs.filterDate(s4_start, s4_end);
	
	//and calculate max values,rename too for easiness, renamed here itself because it would be easier to understand 
	//max for other VIs
	var l578_yr_idxs_s1_max = l578_yr_idxs_s1.select('NDVI', 'NDWI', 'NDTI').reduce(ee.Reducer.max()).rename(['NDVI_1', 'NDWI_1', 'NDTI_1']);
	var l578_yr_idxs_s2_max = l578_yr_idxs_s2.select('NDVI', 'NDWI', 'NDTI').reduce(ee.Reducer.max()).rename(['NDVI_2', 'NDWI_2', 'NDTI_2']);
	var l578_yr_idxs_s3_max = l578_yr_idxs_s3.select('NDVI', 'NDWI', 'NDTI').reduce(ee.Reducer.max()).rename(['NDVI_3', 'NDWI_3', 'NDTI_3']);
	var l578_yr_idxs_s4_max = l578_yr_idxs_s4.select('NDVI', 'NDWI', 'NDTI').reduce(ee.Reducer.max()).rename(['NDVI_4', 'NDWI_4', 'NDTI_4']);
  //min for NIR	
	var l578_yr_idxs_s1_min = l578_yr_idxs_s1.select('NIR').reduce(ee.Reducer.min()).rename(['NIR_1']);
	var l578_yr_idxs_s2_min = l578_yr_idxs_s2.select('NIR').reduce(ee.Reducer.min()).rename(['NIR_2']);
	var l578_yr_idxs_s3_min = l578_yr_idxs_s3.select('NIR').reduce(ee.Reducer.min()).rename(['NIR_3']);
	var l578_yr_idxs_s4_min = l578_yr_idxs_s4.select('NIR').reduce(ee.Reducer.min()).rename(['NIR_4']);

	//now stack all the images max values of all four seasons and annual mean
	var l578_yr_stacked = l578_yr_idxs_s1_max;
	l578_yr_stacked = l578_yr_stacked.addBands([l578_yr_idxs_s2_max,l578_yr_idxs_s3_max,l578_yr_idxs_s4_max, l578_yr_idxs_s1_min,l578_yr_idxs_s2_min,l578_yr_idxs_s3_min, l578_yr_idxs_s4_min]);
	//Alternatively it can be stacked using ee.Image.cat([im1,im2,...])
	
	//convert to flaot for homogeneity
	l578_yr_stacked = l578_yr_stacked.float();
	
	return [l578_yr_stacked] ;
}

function train_classifier(yr, ntrees, seed_number, samples){
  
  var l578_yr_stacked_list = stack_vi_data(yr);
  var l578_yr_stacked = l578_yr_stacked_list[0];
  //print('l578_yr_stacked',l578_yr_stacked);
  
  var bandnames = l578_yr_stacked.bandNames();
  //print('bandnames',bandnames);
  
  var training_data = l578_yr_stacked.sampleRegions({
    collection : samples,
    properties : ['id'],
    scale : 30
  });
  
  //print('training_data',training_data);
  
  var classifier = ee.Classifier.smileRandomForest({
    numberOfTrees: ntrees, 
    seed : seed_number});
  
  classifier = classifier.train({
    features : training_data,
    classProperty: 'id',
    //inputProperties : bandnames
  });
  
  return classifier;
}


function apply_classifier(yr, classifier, ntrees, seed_number){
  
  var l578_yr_stacked_list = stack_vi_data(yr);
  var l578_yr_stacked = l578_yr_stacked_list[0];
  
  var classes_yr = l578_yr_stacked.classify(classifier);
  
  // //Map.addLayer(clusters_yr.randomVisualizer(), {}, 'clusters_yr');
  var out_file = 'classes_rf_ntrees_' + ntrees + '_seed_' + seed_number + '_singleyear_' + yr; 
  print(out_file);
  
  //export the four band image of maximum ndvi values for each season to google drive
  // Export the image, specifying scale and region.
  Export.image.toDrive({
    folder: 'isodata',
    fileFormat: 'GeoTIFF',
    image: classes_yr,
    description: out_file,
    scale: 30,
    region: ROI
  });
  
  return classes_yr;
}

//Write a function to take the images of winter season and get maximum value composite of RGB
function RGB_reference_winter(yr){
  var previous_yr = yr - 2;
  var s1_start = previous_yr + '-12-01';
  var s1_end = yr + '-02-28'; 
  
  var lc8_winter = ee.ImageCollection('LANDSAT/LC08/C01/T1_SR')
  
    .filterDate(s1_start, s1_end)
    .filterBounds(ROI)
    .select(l8_bands, l8_bandnames);
    
  var lc5_winter = ee.ImageCollection('LANDSAT/LT05/C01/T1_SR')
  
    .filterDate(s1_start, s1_end)
    .filterBounds(ROI)
    .select(l57_bands, l57_bandnames);
    
  var lc58_merge = lc8_winter.merge(lc5_winter);
  
  var lc58_mosaic = mosaicByDate(lc58_merge);
  
  var lc58_Clipped = lc58_mosaic.map(ROI_bounds);
  //calculate median for reference image
  var lc58_median =  lc58_Clipped.median();
  
  return lc58_median.select(['red','green','blue']);
  
}

//Write a function to take the images of winter season and get maximum value composite of RGB
function RGB_reference_summer(yr){
  var s3_start = yr + '-06-01';
  var s3_end = yr + '-08-31'; 
  
  var lc8_summer = ee.ImageCollection('LANDSAT/LC08/C01/T1_SR')
  
    .filterDate(s3_start, s3_end)
    .filterBounds(ROI)
    .select(l8_bands, l8_bandnames);
    
  var lc5_summer = ee.ImageCollection('LANDSAT/LT05/C01/T1_SR')
  
    .filterDate(s3_start, s3_end)
    .filterBounds(ROI)
    .select(l57_bands, l57_bandnames);
    
  var lc58_merge = lc8_summer.merge(lc5_summer);
  
  var lc58_mosaic = mosaicByDate(lc58_merge);
  //print(lc58_mosaic)
  // var lc58_Clipped = lc58_mosaic.map(ROI_bounds);
  // print('lc58_Clipped',lc58_Clipped)
  var lc58_Clipped = lc58_mosaic.map(ROI_bounds);
  //calculate median for reference image
  var lc58_min =  lc58_Clipped.min(); //minimum reflectance means least cloudy, clouds are white
  // //print(lc58_min)
  return lc58_min;
  //return lc58_Clipped;
  
}

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------

//set the parameters to display the ndvi values in the map
//got that from the link but used only the visParam 
//https://gis.stackexchange.com/questions/335545/calculate-the-annual-mean-ndvi-for-a-region-using-the-maximum-value-composite

// var visParams = {
//     min: -1,
//     max: 1,
//     palette: 'FFFFFF, CE7E45, DF923D, F1B555, FCD163, 99B718, 74A901, 66A000, 529400,' +
//       '3E8601, 207401, 056201, 004C00, 023B01, 012E01, 011D01, 011301'
//     //palette : [ '#0b4a8b', '#ffc82d', '#00ff00', '#bf04c2', '#ff0000', '#f6e3ff', '#c2491f', '#fdff86', '#d63000']
//   };
//------------------------------------------------------------------------
//---------------------------------------------------------------------------
//Define the landcover visualization parameters for both landsat5 and landsat8 based results
var lc_viz_lc5 = {
  min: 1,
  max: 9,
  palette : [ '#0b4a8b',//water-1
              '#ffc82d', //urban-2
              '#00ff00', //forest-3
              '#bf04c2', //cropland_plain-4
              '#ff0000', //cropland_hills-5
              '#f6e3ff', //river_sand-6
              '#c2491f', //bareland-7
              '#fdff86', //settlement-8
              //'#ad870c',//urbancore-10
              '#d63000',//river bareland-9
              //'#b8ff1d',//sparse trees-11
              //'#282f2d',//brick factory-12
              ]
}


var lc_viz_lc8 = {
  min: 1,
  max: 13,
  palette : [ '#0b4a8b',//water-1
              '#ffc82d', //urban-2
              '#00ff00', //forest-3
              '#bf04c2', //cropland_plain-4
              '#ff0000', //cropland_hills-5
              '#f6e3ff', //river_sand-6
              '#c2491f', //bareland-7
              '#fdff86', //settlement-8
              '#ad870c',//urbancore-10
              '#d63000',//river bareland-9
              '#b8ff1d',//sparse trees-11
              '#282f2d',//brick factory-12
              '#9cd6d3'//fruits-13
              ]
}

var seed_number = 10;
var ntrees = 30;
Map.setCenter(87,26.5, 10);

//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//PERFORM training of landsat5 based data using 2004 data
// 2002 has no image in the summer season


//combine all the sampling sites to make a single feature collection
var sampling_sites_2004 =  water_2004
                          .merge(urban_2004)
                          .merge(forest_2004)
                          .merge(agriculture1_2004)
                          .merge(agriculture2_2004)
                          .merge(bareland_2004)
                          .merge(river_sand_2004)
                          .merge(suburban_2004)
                          .merge(river_bare_2004)
                          
//combine all the sampling sites to make a single feature collection
var sampling_sites_2021 =  water_2019
                          .merge(urban_2019)
                          .merge(forest_2019)
                          .merge(agriculture1_2019)
                          .merge(agriculture2_2019)
                          .merge(bareland_2019)
                          .merge(river_sand_2019)
                          .merge(suburban_2019)
                          .merge(river_bare_2019)
                          .merge(urban_core_2019)
                          .merge(brick_ciln_2019)
                          .merge(sparse_trees_2021)
                          .merge(fruits_2021)
                          .merge(river_sand_2019)
                          .merge(river_grass_2021); //did not use sparse vegetation for 2004 because images were not that clear


var l578_yr_stacked_list = stack_vi_data(2021);
var l578_yr_stacked = l578_yr_stacked_list[0]

//check number of samples in each land cover type
var training_data = l578_yr_stacked.sampleRegions({
  collection : urban_2019,
  properties : ['id'],
  scale : 30
});
print('urban',training_data.size());

var training_data = l578_yr_stacked.sampleRegions({
  collection : forest_2019,
  properties : ['id'],
  scale : 30
});
print('forest',training_data.size());

var training_data = l578_yr_stacked.sampleRegions({
  collection : agriculture1_2019,
  properties : ['id'],
  scale : 30
});
print('agriculture1',training_data.size());

var training_data = l578_yr_stacked.sampleRegions({
  collection : agriculture2_2019,
  properties : ['id'],
  scale : 30
});
print('agriculture2',training_data.size());

var training_data = l578_yr_stacked.sampleRegions({
  collection : river_sand_2019,
  properties : ['id'],
  scale : 30
});
print('river_sand',training_data.size());

var training_data = l578_yr_stacked.sampleRegions({
  collection : bareland_2019,
  properties : ['id'],
  scale : 30
});
print('bareland',training_data.size());

var training_data = l578_yr_stacked.sampleRegions({
  collection : suburban_2019,
  properties : ['id'],
  scale : 30
});
print('suburban',training_data.size());

var training_data = l578_yr_stacked.sampleRegions({
  collection : river_bare_2019,
  properties : ['id'],
  scale : 30
});
print('river_bare',training_data.size());

var training_data = l578_yr_stacked.sampleRegions({
  collection : urban_core_2019,
  properties : ['id'],
  scale : 30
});
print('urban_core',training_data.size());

var training_data = l578_yr_stacked.sampleRegions({
  collection : brick_ciln_2019,
  properties : ['id'],
  scale : 30
});
print('brick_ciln',training_data.size());

var training_data = l578_yr_stacked.sampleRegions({
  collection : fruits_2021,
  properties : ['id'],
  scale : 30
});
print('fruits',training_data.size());

var training_data = l578_yr_stacked.sampleRegions({
  collection : urban_trees_2021,
  properties : ['id'],
  scale : 30
});
print('urban_trees_2021',training_data.size());

var training_data = l578_yr_stacked.sampleRegions({
  collection : river_grass_2021,
  properties : ['id'],
  scale : 30
});
print('river_grass_2021',training_data.size());

var training_data = l578_yr_stacked.sampleRegions({
  collection : urban_core_2019,
  properties : ['id'],
  scale : 30
});
print('urban_core_2019',training_data.size());

var training_data = l578_yr_stacked.sampleRegions({
  collection : sparse_trees_2021,
  properties : ['id'],
  scale : 30
});
print('sparse_trees_2021',training_data.size());


//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
// since there were clouds in one or more seasons that gave cloudy observations in results as well
// to avoid this we are performing the classification with data from each season to fill the gaps
//separate the seasons and create 
var VIs = ['NDVI', 'NDWI', 'NIR', 'NDTI']

function gen_bandname_season(season){
  var bandname_season = []
  
  for (var i = 0; i < VIs.length; i++) {
    var text = VIs[i] + '_' + season ;
    bandname_season.push(text);
  }
  return bandname_season;
  
}


function train_classifier_season(yr, ntrees, seed_number, samples, season){
  var bandname_season = gen_bandname_season(season);
  
  var l578_yr_stacked_list = stack_vi_data(yr);
  var l578_yr_stacked_season = l578_yr_stacked_list[0];
  l578_yr_stacked_season = l578_yr_stacked_season.select(bandname_season);
  //print('l578_yr_stacked',l578_yr_stacked);
  
  var training_data = l578_yr_stacked_season.sampleRegions({
    collection : samples,
    properties : ['id'],
    scale : 30
  });
  
  //print('training_data',training_data);
  
  var classifier = ee.Classifier.smileRandomForest({
    numberOfTrees: ntrees, 
    seed : seed_number});
  
  classifier = classifier.train({
    features : training_data,
    classProperty: 'id',
    //inputProperties : bandnames
  });
  
  return classifier;
}
//--------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
function apply_classifier_season(yr, classifier, ntrees, seed_number, season){
  
  var bandname_season = gen_bandname_season(season);
  
  var l578_yr_stacked_list = stack_vi_data(yr);
  var l578_yr_stacked_season = l578_yr_stacked_list[0];
  l578_yr_stacked_season = l578_yr_stacked_season.select(bandname_season);
  var classes_yr = l578_yr_stacked_season.classify(classifier);
  
  // //Map.addLayer(clusters_yr.randomVisualizer(), {}, 'clusters_yr');
  var out_file = 'classes_rf_ntrees_' + season + '_' + ntrees + '_seed_' + seed_number + '_singleyear_' + yr; 
  //print(out_file);
  
  //export the four band image of maximum ndvi values for each season to google drive
  // Export the image, specifying scale and region.
  Export.image.toDrive({
    folder: 'isodata',
    fileFormat: 'GeoTIFF',
    image: classes_yr,
    description: out_file,
    scale: 30,
    region: ROI
  });
  
  return classes_yr;
}
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------

var lc_viz_lc8 = {
  min: 1,
  max: 70,
  palette : colornames
}
var lc8_train_year = 2021
var ref_win_2021 = RGB_reference_winter(lc8_train_year)
var ref_sum_2021 = RGB_reference_summer(lc8_train_year)
// Map.addLayer(ref_sum_2021, {bands : ['red', 'green', 'blue'], max : 3000, min : 0}, 'summer_prev');
// Map.addLayer(ref_win_2021, {bands : ['red', 'green', 'blue'], max : 3000, min : 0}, 'winter_prev');

var classifier_winter_lc8 = train_classifier_season(lc8_train_year, ntrees, seed_number,sampling_sites_2021, 1)
var classifier_spring_lc8 = train_classifier_season(lc8_train_year, ntrees, seed_number,sampling_sites_2021, 2)
var classifier_summer_lc8 = train_classifier_season(lc8_train_year, ntrees, seed_number,sampling_sites_2021, 3)
var classifier_autumn_lc8 = train_classifier_season(lc8_train_year, ntrees, seed_number,sampling_sites_2021, 4)
var classifier_yearly = train_classifier(lc8_train_year, ntrees, seed_number, sampling_sites_2021)

var yr = 2020
var classes_winter_2021 = apply_classifier_season(yr, classifier_winter_lc8, ntrees, seed_number, 1)
var classes_spring_2021 = apply_classifier_season(yr, classifier_spring_lc8, ntrees, seed_number, 2)
var classes_summer_2021 = apply_classifier_season(yr, classifier_summer_lc8, ntrees, seed_number, 3)
var classes_autumn_2021 = apply_classifier_season(yr, classifier_autumn_lc8, ntrees, seed_number, 4)
var classes_yearly_2021 = apply_classifier(yr, classifier_yearly, ntrees, seed_number)

var yr = 2019
var classes_winter_2021 = apply_classifier_season(yr, classifier_winter_lc8, ntrees, seed_number, 1)
var classes_spring_2021 = apply_classifier_season(yr, classifier_spring_lc8, ntrees, seed_number, 2)
var classes_summer_2021 = apply_classifier_season(yr, classifier_summer_lc8, ntrees, seed_number, 3)
var classes_autumn_2021 = apply_classifier_season(yr, classifier_autumn_lc8, ntrees, seed_number, 4)
var classes_yearly_2021 = apply_classifier(yr, classifier_yearly, ntrees, seed_number)

var yr = 2018
var classes_winter_2021 = apply_classifier_season(yr, classifier_winter_lc8, ntrees, seed_number, 1)
var classes_spring_2021 = apply_classifier_season(yr, classifier_spring_lc8, ntrees, seed_number, 2)
var classes_summer_2021 = apply_classifier_season(yr, classifier_summer_lc8, ntrees, seed_number, 3)
var classes_autumn_2021 = apply_classifier_season(yr, classifier_autumn_lc8, ntrees, seed_number, 4)
var classes_yearly_2021 = apply_classifier(yr, classifier_yearly, ntrees, seed_number)

var yr = 2017
var classes_winter_2021 = apply_classifier_season(yr, classifier_winter_lc8, ntrees, seed_number, 1)
var classes_spring_2021 = apply_classifier_season(yr, classifier_spring_lc8, ntrees, seed_number, 2)
var classes_summer_2021 = apply_classifier_season(yr, classifier_summer_lc8, ntrees, seed_number, 3)
var classes_autumn_2021 = apply_classifier_season(yr, classifier_autumn_lc8, ntrees, seed_number, 4)
var classes_yearly_2021 = apply_classifier(yr, classifier_yearly, ntrees, seed_number)

var yr = 2016
var classes_winter_2021 = apply_classifier_season(yr, classifier_winter_lc8, ntrees, seed_number, 1)
var classes_spring_2021 = apply_classifier_season(yr, classifier_spring_lc8, ntrees, seed_number, 2)
var classes_summer_2021 = apply_classifier_season(yr, classifier_summer_lc8, ntrees, seed_number, 3)
var classes_autumn_2021 = apply_classifier_season(yr, classifier_autumn_lc8, ntrees, seed_number, 4)
var classes_yearly_2021 = apply_classifier(yr, classifier_yearly, ntrees, seed_number)

var yr = 2015
var classes_winter_2021 = apply_classifier_season(yr, classifier_winter_lc8, ntrees, seed_number, 1)
var classes_spring_2021 = apply_classifier_season(yr, classifier_spring_lc8, ntrees, seed_number, 2)
var classes_summer_2021 = apply_classifier_season(yr, classifier_summer_lc8, ntrees, seed_number, 3)
var classes_autumn_2021 = apply_classifier_season(yr, classifier_autumn_lc8, ntrees, seed_number, 4)
var classes_yearly_2021 = apply_classifier(yr, classifier_yearly, ntrees, seed_number)

var yr = 2014
var classes_winter_2021 = apply_classifier_season(yr, classifier_winter_lc8, ntrees, seed_number, 1)
var classes_spring_2021 = apply_classifier_season(yr, classifier_spring_lc8, ntrees, seed_number, 2)
var classes_summer_2021 = apply_classifier_season(yr, classifier_summer_lc8, ntrees, seed_number, 3)
var classes_autumn_2021 = apply_classifier_season(yr, classifier_autumn_lc8, ntrees, seed_number, 4)
var classes_yearly_2021 = apply_classifier(yr, classifier_yearly, ntrees, seed_number)

//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
