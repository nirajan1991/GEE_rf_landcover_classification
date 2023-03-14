// Based on https://code.earthengine.google.com/2530f17708e876ed73cb7945fe2a1b37

// Goal: The purpose is to classify water from SAR imagery

// Topics addressed:
//  - loading and filtering image collections
//  - prepairing and classify SAR data
//  - water body classification in a region
//  - exporting water maps to drive

//---------------------------------------------------------------------
//---------------------------------------------------------------------

// Load region defined by polygon and add it to the map
//first define the region of interest
var latmax = 26.87;
var lonmin = 86.48;
var lonmax = 87.69;
var latmin = 26.34;
var roi = ee.Geometry.Rectangle([lonmin-0.05, latmin-0.05, lonmax+0.05, latmax+0.05]);
Map.setCenter(87,26.5,10)

//---------------------------------------------------------------------
//---------------------------------------------------------------------
// define functions 

// Filter speckle noise
var filterSpeckles = function(img) {
  var vv = img.select('VV') //select the VV polarization band
  var vv_smoothed = vv.focal_median(100,'circle','meters').rename('VV_Filtered') //Apply a focal median filter
  return img.addBands(vv_smoothed) // Add filtered VV band to original image
}


//Classify water pixels using a set threshhold 
//Here we are using -16. This is only an approximation and will result in some errors. Try adjusting the 
var classifyWater = function(img, thres) {
  var vv = img.select('VV_Filtered')
  var water = vv.lt(thres).rename('Water')  //Identify all pixels below threshold and set them equal to 1. All other pixels set to 0
  water = water.updateMask(water) //Remove all pixels equal to 0
  return img.addBands(water)  //Return image with added classified water band
}

//---------------------------------------------------------------------
//---------------------------------------------------------------------

//Load Sentinel-1 SAR collection and filter according to data collection type
var S1_dry = ee.ImageCollection('COPERNICUS/S1_GRD')
  .filterBounds(roi)
  .filterDate('2019-03-01','2019-03-10')
  .filter(ee.Filter.listContains('transmitterReceiverPolarisation', 'VV'))

//mosaic all the images within the time period
var S1_dry_mosaic = S1_dry.mosaic()
//clip to the extent of roi
var S1_dry_clip = S1_dry_mosaic.clip(roi)
// Map speckle noise filter across collection. Result is same collection, with smoothed VV band added to each image
var S1_dry_filter = filterSpeckles(S1_dry_clip)
//Add speckle filtered image to map to sompare with raw SAR image
//Map.addLayer(S1_filter,{bands: 'VV_Filtered',min: -18, max: 0}, 'Filtered SAR image')
var water = classifyWater(S1_dry_filter, -18)
print(water)
Map.addLayer(water.select('Water'), {max : 20, min : -20, palette : '999999, 0000ff'}, 'water_dry')


//Load Sentinel-1 SAR collection and filter according to data collection type
var S1_wet = ee.ImageCollection('COPERNICUS/S1_GRD')
  .filterBounds(roi)
  .filterDate('2019-08-01','2019-08-10')
  .filter(ee.Filter.listContains('transmitterReceiverPolarisation', 'VV'))

//mosaic all the images within the time period
var S1_wet_mosaic = S1_wet.mosaic()
//clip to the extent of roi
var S1_wet_clip = S1_wet_mosaic.clip(roi)
// Map speckle noise filter across collection. Result is same collection, with smoothed VV band added to each image
var S1_wet_filter = filterSpeckles(S1_wet_clip)
//Add speckle filtered image to map to sompare with raw SAR image
//Map.addLayer(S1_filter,{bands: 'VV_Filtered',min: -18, max: 0}, 'Filtered SAR image')
var water = classifyWater(S1_wet_filter, -18)
print(water)
Map.addLayer(water.select('Water'), {max : 20, min : -20, palette : '999999, 0000ff'}, 'water_wet')

//---------------------------------------------------------------------
//---------------------------------------------------------------------

var S1_wet_vv_filter = S1_wet_filter.select('VV_Filtered').multiply(1000).int16()

Export.image.toDrive({
    folder: 'isodata',
    fileFormat: 'GeoTIFF',
    image: S1_wet_vv_filter,
    description: 'S1_wet_filter30',
    scale: 30,
    region: roi,
    maxPixels: 102540105 // use this value based on your output image size 
  });
  
var S1_dry_vv_filter = S1_dry_filter.select('VV_Filtered').multiply(1000).int16()
Export.image.toDrive({
    folder: 'isodata',
    fileFormat: 'GeoTIFF',
    image: S1_dry_vv_filter,
    description: 'S1_dry_filter30',
    scale: 30,
    region: roi,
    maxPixels: 102540105
  });
  
