/* 
This is the script that creates features in the GEE for training random forest classifier
The sample points are located in the viscinity of Koshi river near Nepal India border
Created by Nirajan Luintel on 20210601
*/

// -------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
var water_2004 = 
    /* color: #0b4a8b */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[86.92314828283203, 26.52917236709971],
                  [86.92556227094543, 26.52799166368334],
                  [86.92623818761719, 26.528711606236005],
                  [86.9249024551805, 26.529311559252125],
                  [86.92356670743835, 26.53002668963993]]]),
            {
              "name": "water",
              "id": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.92617381460083, 26.529220362916632],
                  [86.9279333437146, 26.530525841439243],
                  [86.92690337545288, 26.53135135695839],
                  [86.92537988073242, 26.529873104034174]]]),
            {
              "name": "water",
              "id": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.92301593138336, 26.528279890072444],
                  [86.92257604910492, 26.52797271398025],
                  [86.92357383085846, 26.527195170822765],
                  [86.92515096975922, 26.526196836082764],
                  [86.9255801232016, 26.52660001077302],
                  [86.92402444197296, 26.527607941303]]]),
            {
              "name": "water",
              "id": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.93037591292023, 26.524574523611278],
                  [86.93187794996857, 26.523883353936796],
                  [86.93265042616486, 26.524555324509855],
                  [86.93078360869049, 26.525323286062534]]]),
            {
              "name": "water",
              "id": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([86.86386864209268, 26.773129257367067]),
            {
              "name": "water",
              "id": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([86.86466257596109, 26.772420433240693]),
            {
              "name": "water",
              "id": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([86.86496298337076, 26.77176907744003]),
            {
              "name": "water",
              "id": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([86.86517756009195, 26.771117717903483]),
            {
              "name": "water",
              "id": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([86.86438362622354, 26.772458748171456]),
            {
              "name": "water",
              "id": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([86.86391155743692, 26.772975998471377]),
            {
              "name": "water",
              "id": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([86.86425488019083, 26.772209700890485]),
            {
              "name": "water",
              "id": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([86.86393301510904, 26.772726952324767]),
            {
              "name": "water",
              "id": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([86.86457674527261, 26.771711604690022]),
            {
              "name": "water",
              "id": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([86.86532776379678, 26.77084950994964]),
            {
              "name": "water",
              "id": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([86.8660144093046, 26.770159829445564]),
            {
              "name": "water",
              "id": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([86.86689417386148, 26.76968088218699]),
            {
              "name": "water",
              "id": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([86.8674735310087, 26.76933603891018]),
            {
              "name": "water",
              "id": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([86.86813871884439, 26.768991194586356]),
            {
              "name": "water",
              "id": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([86.86869661831949, 26.768627191108695]),
            {
              "name": "water",
              "id": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([86.86991970563028, 26.76849308427023]),
            {
              "name": "water",
              "id": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([86.87054197812174, 26.76849308427023]),
            {
              "name": "water",
              "id": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([86.87135736966226, 26.768473926137506]),
            {
              "name": "water",
              "id": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([86.87131445431802, 26.769010352631827]),
            {
              "name": "water",
              "id": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([86.87204401517008, 26.76895287848576]),
            {
              "name": "water",
              "id": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([86.8728594067106, 26.7691253008367]),
            {
              "name": "water",
              "id": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([86.87354605221842, 26.769201932908658]),
            {
              "name": "water",
              "id": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([86.87423269772623, 26.769048668713037]),
            {
              "name": "water",
              "id": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([86.87504808926676, 26.768933720430613]),
            {
              "name": "water",
              "id": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([86.87564890408609, 26.768703823516724]),
            {
              "name": "water",
              "id": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([86.8760995152006, 26.768205711940315]),
            {
              "name": "water",
              "id": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([86.87382500195596, 26.768914562372213]),
            {
              "name": "water",
              "id": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([86.87275211835001, 26.76883793010637]),
            {
              "name": "water",
              "id": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([86.87217276120279, 26.768722981610647]),
            {
              "name": "water",
              "id": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.1162621366209, 26.776356898279793],
                  [87.11720627419415, 26.777736179825933],
                  [87.11913746468487, 26.780341443695995],
                  [87.11960953347149, 26.78160574137979],
                  [87.1188370572752, 26.782716779235276],
                  [87.11789291970196, 26.78145249392564],
                  [87.11634796730938, 26.77942194562739],
                  [87.11506050698223, 26.77689328753875]]]),
            {
              "name": "water",
              "id": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.13814896218243, 26.79527661190448],
                  [87.13952225319805, 26.795889525811734],
                  [87.14076679818096, 26.79661735677574],
                  [87.1419255124754, 26.79738348958789],
                  [87.14308422676983, 26.798264535925213],
                  [87.14368504158917, 26.7991838813293],
                  [87.14458626381817, 26.799949996807502],
                  [87.14467209450665, 26.800677801718873],
                  [87.1433846341795, 26.799720162707356],
                  [87.14111012093487, 26.798187923471882],
                  [87.13913601509991, 26.796808890463847],
                  [87.13724773995342, 26.795583069272027]]]),
            {
              "name": "water",
              "id": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.9879978709051, 26.58763705291824],
                  [86.98778329418391, 26.586792753995564],
                  [86.98889909313411, 26.586408979699563],
                  [86.99052987621516, 26.586562489572344],
                  [86.99151692913264, 26.586907886033487],
                  [86.9937056116888, 26.587214904235235],
                  [86.99456391857356, 26.58763705291824],
                  [86.99563680217952, 26.587982446137357],
                  [86.99670968578548, 26.588749982893344],
                  [86.99598012493342, 26.589517514503036],
                  [86.99525056408137, 26.589095372754556],
                  [86.99439225719661, 26.58825108458734],
                  [86.9934910349676, 26.587560298728018],
                  [86.9925898127386, 26.58725328145255],
                  [86.9911306910345, 26.58759867582957],
                  [86.98988614605159, 26.587982446137357],
                  [86.9887703471014, 26.587982446137357]]]),
            {
              "name": "water",
              "id": 1,
              "system:index": "35"
            })]),
    urban_2004 = 
    /* color: #ffc82d */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[87.27842052423351, 26.45805835105613],
                  [87.27910716974132, 26.45805835105613],
                  [87.27917154275768, 26.45842334449759],
                  [87.27878530465954, 26.458711496397132],
                  [87.27880676233166, 26.45957594776841],
                  [87.27796991311901, 26.459249378013265],
                  [87.27747638666027, 26.458365714031125],
                  [87.27721889459484, 26.457309150366832]]]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.27842052423351, 26.456387050518018],
                  [87.27904279672497, 26.456079682260658],
                  [87.27987964593761, 26.455695470785074],
                  [87.28028734170788, 26.456175734929214],
                  [87.27966506921642, 26.456675207514085],
                  [87.27891405069225, 26.457059415720313]]]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.28071649515026, 26.459460687960604],
                  [87.28114564859264, 26.45986409678301],
                  [87.28138168298595, 26.460498022076347],
                  [87.28193958246105, 26.46132404070548],
                  [87.28236873590343, 26.46193874839664],
                  [87.28189666711681, 26.462188472458507],
                  [87.28151042901867, 26.46132404070548],
                  [87.28093107187145, 26.460517231879244],
                  [87.2802015110194, 26.45959515772514]]]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.2831197544276, 26.466913917961353],
                  [87.28421409570568, 26.46702917030597],
                  [87.28432138406627, 26.467663056138193],
                  [87.2833343311488, 26.467682264745253]]]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.28273351632946, 26.4660303128181],
                  [87.28421409570568, 26.466145566047597],
                  [87.28417118036144, 26.466529742645697],
                  [87.28269060098522, 26.46649132504358]]]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.28245456659191, 26.464532010331602],
                  [87.28281934701793, 26.464128617868035],
                  [87.28354890786999, 26.463725223990643],
                  [87.2836776539027, 26.464224663820936],
                  [87.28320558511608, 26.464704892383196],
                  [87.28320558511608, 26.465108282827035],
                  [87.28254039728039, 26.46514670089082]]]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27335288193535, 26.456453235397333]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27362110283684, 26.45641481443212]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27394296791863, 26.45642441967461]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27425410416436, 26.45642441967461]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27393223908257, 26.455367838195276]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27061702874016, 26.4567029713587]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27153970864128, 26.45669336613941]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27029516365837, 26.456712576577143]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([87.26703359749627, 26.456750997442995]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([87.26737692025017, 26.456779813083966]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([87.26764514115166, 26.456750997442995]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2676344123156, 26.45648205111283]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2671838012011, 26.45648205111283]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([87.26855709221672, 26.456722181794806]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([87.26883604195427, 26.45669336613941]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([87.26910426285576, 26.456722181794806]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([87.26940467026543, 26.456712576577143]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([87.26998402741265, 26.455079677927284]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27033807900261, 26.45482993844499]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27069213059258, 26.45648205111283]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27426194973502, 26.4583269112379]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27428340740714, 26.458043560929397]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27459454365287, 26.458038758375768]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27602147884879, 26.458653483609776]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27672421761069, 26.45835092394388]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27727138824973, 26.458581445666212]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27758252449546, 26.458864794650896]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27451944180045, 26.456967783916706]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27486812897239, 26.45696298131822]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27272236176047, 26.458043560929397]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27301204033408, 26.458019548159324]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27301740475211, 26.457765012488714]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27273309059653, 26.457765012488714]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27277600594077, 26.45744804275372]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27607512302909, 26.458278885810987]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27606439419303, 26.458009943049905]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27637553043876, 26.457769815053766]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2808870060018, 26.45750087110349]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([87.285425303655, 26.458768744225747]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28569352455649, 26.458816769448347]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28569352455649, 26.458576643135054]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28541457481894, 26.458586248197197]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28028339633828, 26.453996325858498]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27996153125649, 26.453996325858498]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2781805444706, 26.461046506381805]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27845949420815, 26.462103035745695]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2781805444706, 26.462112640513624]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27937144527321, 26.4610561112379]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27792305240517, 26.462660110960257]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27760118732338, 26.462660110960257]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.27631846131334, 26.475201615857305],
                  [87.27606096924791, 26.475196814019657],
                  [87.2759697741414, 26.475014344040282],
                  [87.2760234183217, 26.474774251521247],
                  [87.27606096924791, 26.474481337969447],
                  [87.27637210549364, 26.4744717342338],
                  [87.27680662335405, 26.474486139836966],
                  [87.27679053009996, 26.474817468211636],
                  [87.27680125893602, 26.475062362483975],
                  [87.27674761475572, 26.475456112966153],
                  [87.27636137665758, 26.47544170748446]]]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27960214082468, 26.569368343983854]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27993473474253, 26.56938753558454]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28059992257822, 26.569090065412755]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2799669212507, 26.568591081454795]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27992400590647, 26.568303205105888]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28026732866037, 26.567976944369416]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2802351421522, 26.567439571719387]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28056773607004, 26.566115321217048]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28055700723398, 26.566892600541042]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28020295564401, 26.567218864365167]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2811363643812, 26.56938753558454]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28022441331613, 26.56667189213322]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28053554956186, 26.566652700077665]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28083595697153, 26.566384010962384]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28115782205332, 26.5680153280337]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27997765008676, 26.569109257060052]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2802351421522, 26.568830977859687]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28087887231577, 26.569090065412755]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27472666625253, 26.660946379599757]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27499488715402, 26.660936791480584]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27509144667856, 26.660677911958206]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27472666625253, 26.660649147530606]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27443698767892, 26.660946379599757]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2729027641224, 26.661723014577767]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2732246292042, 26.661723014577767]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27533820990793, 26.660687500099158]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27173332099191, 26.66255717218513]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27172259215585, 26.662854399284328]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27449063185922, 26.664752799265514]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27447990302316, 26.664503516220982]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2744691741871, 26.663880306226904]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.27240923766367, 26.66333379619995],
                  [87.2732246292042, 26.66333379619995],
                  [87.27431897048227, 26.66295027882857],
                  [87.27556351546518, 26.662451704318663],
                  [87.27702263716928, 26.66224076829326],
                  [87.27712992552988, 26.662854399284328],
                  [87.27584246520273, 26.663257092828815],
                  [87.27466229323618, 26.66373648805254],
                  [87.2735679519581, 26.663813191101422],
                  [87.27262381438486, 26.66390906984]]]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.28697910860616, 26.812198077599604],
                  [87.287129312311, 26.811374592201037],
                  [87.28725805834371, 26.810934120811527],
                  [87.2866787011965, 26.810666006953966],
                  [87.28592768267232, 26.81030213713311],
                  [87.28526249483663, 26.810263834978766],
                  [87.28530541018087, 26.810742610977982],
                  [87.28569164827901, 26.81108732844546],
                  [87.28575602129537, 26.811776760236015],
                  [87.28573456362325, 26.81286835199647],
                  [87.28449001864034, 26.812676845430317],
                  [87.28464022234517, 26.811700156910774],
                  [87.28474751070577, 26.810531949787414],
                  [87.28515520647603, 26.80980420811738],
                  [87.2865714128359, 26.810129777336687],
                  [87.28796616152364, 26.81030213713311],
                  [87.28796616152364, 26.81068515796482],
                  [87.28794470385152, 26.81185336350947]]]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.28790178850728, 26.813442869753803],
                  [87.28873863771993, 26.813634375025874],
                  [87.28856697634298, 26.81440039287894],
                  [87.28766575411397, 26.814285490530953]]]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27625807523803, 26.81371179726359]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27662285566406, 26.81371179726359]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2753949938044, 26.814253041792067]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2744776783213, 26.814770101588714]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27419872858376, 26.814779676747893]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27237482645363, 26.813463084770856]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27269132711739, 26.813439146593367]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27269132711739, 26.813156675717263]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2724070129618, 26.813147100420988]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27209051229805, 26.812912505409706]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27448304273933, 26.813151888069214]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2750892219767, 26.813132737475065]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27691312410683, 26.81341520841081]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27720816709846, 26.813410420773703]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([87.26935465910286, 26.812630033221357]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([87.26938684561104, 26.812065086733075]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([87.26975162603706, 26.812074662120743]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([87.26970871069283, 26.812400224820035]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2700091181025, 26.81209381289364]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([87.26997693159431, 26.812323621916082]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([87.26999838926643, 26.81263960856129]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2699554739222, 26.812936443698412]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([87.26999838926643, 26.813204552186463]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([87.26877530195564, 26.812878991797064]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([87.26936538793892, 26.813108799227805]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2723694620356, 26.812926868383542]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "116"
            })]),
    forest_2004 = 
    /* color: #00ff00 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[87.4486314499994, 26.688026476121],
                  [87.4500905717035, 26.68710623153886],
                  [87.4518930161615, 26.687259606151784],
                  [87.45232216960389, 26.688409909170755],
                  [87.45086304789979, 26.689176771400607]]]),
            {
              "name": "forest",
              "id": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.8082266496683, 26.855096811136484],
                  [86.80762583484896, 26.853871620407467],
                  [86.81020075550326, 26.85279956763798],
                  [86.81268984546908, 26.853182444792935],
                  [86.81414896717318, 26.854407642983663],
                  [86.81251818409213, 26.856551707897488],
                  [86.80994326343783, 26.85724086299177]]]),
            {
              "name": "forest",
              "id": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.99490758021751, 26.873881308300337],
                  [87.00134488185326, 26.874723479355957],
                  [87.0008298977224, 26.87885768263896],
                  [86.99550839503685, 26.87862800864518]]]),
            {
              "name": "forest",
              "id": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.78346119818647, 26.682737284531356],
                  [86.78783856329878, 26.68427108015844],
                  [86.78904019293745, 26.686648422597603],
                  [86.78457699713667, 26.686111607670938]]]),
            {
              "name": "forest",
              "id": 3,
              "system:index": "3"
            })]),
    agriculture1_2004 = 
    /* color: #bf04c2 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[87.21252730481078, 26.60936641762287],
                  [87.20995238415648, 26.606296792825752],
                  [87.20935156933714, 26.604531721265275],
                  [87.21115401379515, 26.604148006452572],
                  [87.21252730481078, 26.60445497840567],
                  [87.2127847968762, 26.605682857980756],
                  [87.2139005958264, 26.606757241797066]]]),
            {
              "name": "cropland_plain",
              "id": 4,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.18251122405997, 26.623529271939315],
                  [87.18148125579825, 26.622301583987966],
                  [87.18332661560049, 26.62130407781829],
                  [87.18482865264883, 26.622071391029117],
                  [87.18384159973135, 26.623682732006063]]]),
            {
              "name": "cropland_plain",
              "id": 4,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.17932285708609, 26.626675162124915],
                  [87.17893661898795, 26.62552423673592],
                  [87.1802240793151, 26.62460348807976],
                  [87.181468624298, 26.62498713425462],
                  [87.18206943911734, 26.626329885725205],
                  [87.18082489413443, 26.62728898425983]]]),
            {
              "name": "cropland_plain",
              "id": 4,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.05289085705024, 26.635388057620993],
                  [87.05417831737739, 26.634620833821028],
                  [87.05490787822944, 26.635579862765912],
                  [87.05619533855659, 26.636078554635592],
                  [87.0543070634101, 26.636884129210916]]]),
            {
              "name": "cropland_plain",
              "id": 4,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.74028757961007, 26.482223969323318],
                  [86.73909667880746, 26.482291190925345],
                  [86.73814181239815, 26.48148452910766],
                  [86.73810962588998, 26.480485797113605],
                  [86.73871044070931, 26.479679122633396],
                  [86.73944000156136, 26.479448643171295],
                  [86.74068454654427, 26.4798615852133],
                  [86.74100641162606, 26.48115802152534],
                  [86.74097422511788, 26.48184944824981]]]),
            {
              "name": "cropland_plain",
              "id": 4,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.35452857402012, 26.435546208917287],
                  [87.35525813487217, 26.43375929618446],
                  [87.3571893253629, 26.434335722673882],
                  [87.35699620631382, 26.43589205979438],
                  [87.35579457667515, 26.436987247390874]]]),
            {
              "name": "cropland_plain",
              "id": 4,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.60993676710805, 26.606922905491466],
                  [86.61158900453556, 26.60726824981159],
                  [86.61306958723745, 26.60738335194235],
                  [86.61276917982778, 26.60899489992369],
                  [86.60974121889063, 26.60854314751653]]]),
            {
              "name": "cropland_plain",
              "id": 4,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.58023934889516, 26.611757500776783],
                  [86.58242803145131, 26.61206445230774],
                  [86.58491712141713, 26.611757500776783],
                  [86.58508878279409, 26.613330618663948],
                  [86.58126931715688, 26.61340735556829]]]),
            {
              "name": "cropland_plain",
              "id": 4,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.87063674359396, 26.77801546660073],
                  [86.87183837323263, 26.777919683937018],
                  [86.87175254254416, 26.77970122825521],
                  [86.87081913380698, 26.779605447013758]]]),
            {
              "name": "cropland_plain",
              "id": 4,
              "system:index": "8"
            })]),
    agriculture2_2004 = 
    /* color: #ff0000 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[87.57880901505695, 26.914266880836507],
                  [87.57986044099079, 26.91315713348207],
                  [87.58097623994098, 26.913750275666867],
                  [87.57938837220416, 26.914726083446677]]]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.57825111558185, 26.9104592538926],
                  [87.57878755738483, 26.90998089971778],
                  [87.5790879647945, 26.910420985633195],
                  [87.57900213410602, 26.911186348356143],
                  [87.57795070817218, 26.911071544278517]]]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([87.5847793188508, 26.919704644177312]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([87.58507972626047, 26.91946548693511]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([87.58387273220377, 26.919183280737364]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([87.58387273220377, 26.918915423354463]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([87.58422141937571, 26.91920241338326]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([87.58469885258036, 26.919455920634874]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([87.58267646698313, 26.919738126150786]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([87.5829232302125, 26.919752475564923]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([87.57810258692787, 26.920287004763118]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([87.57844054526375, 26.920287004763118]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([87.57781827277229, 26.920306137221843]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([87.51610576336213, 26.886710839139276]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([87.51633106891938, 26.886729977287843]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([87.51632034008333, 26.88697877292427]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([87.51658856098481, 26.887514638588307]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([87.51663147632905, 26.887246706073935]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([87.51666366283723, 26.886959634817842]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([87.51664220516511, 26.88783998435881]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([87.51692115490266, 26.887763432497106]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([87.51697479908296, 26.88797394999205]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30795922311904, 26.885405541221864]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([87.3078787568486, 26.885142388310772]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30763735803725, 26.885118465288475]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30821135076644, 26.88488880401669]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30817916425826, 26.884558665120814]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30791094335677, 26.884577803633867]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30763199361922, 26.8845730190059]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30763735803725, 26.884300294877406]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30731549295547, 26.8842907255978]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30731549295547, 26.884022785439516]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30729403528335, 26.883793121941114]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30756225618484, 26.88378833727991]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30788412126662, 26.883840968541747]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30790557893874, 26.884037139392657]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30788948568465, 26.884305079516928]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30790021452071, 26.884860096324893]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30821671518447, 26.884324218072905]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30725648435714, 26.88510411147265]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.3067410528866, 26.887032688368034],
                  [87.30698781611596, 26.886736047495635],
                  [87.30749207141076, 26.88699441217017],
                  [87.3077495634762, 26.88738674258339],
                  [87.30821090342675, 26.887731226701128],
                  [87.30879026057397, 26.88774079568939],
                  [87.30926232936059, 26.887807778584662],
                  [87.30927305819665, 26.888066140808718],
                  [87.30885463382886, 26.88805178784091],
                  [87.30852203967248, 26.888152261418824],
                  [87.30817871709027, 26.888180968549772],
                  [87.30794268252527, 26.888343640317327],
                  [87.30720239283716, 26.88783648552763],
                  [87.30661230685388, 26.887329328461664]]]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24903284994113, 26.912630450091413]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24934398618686, 26.912711768535406]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2493869015311, 26.912400844756856]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24939763036716, 26.912027735092096]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24941908803928, 26.91174072681841]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2496765801047, 26.911798128531522]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24912940946567, 26.911530253620583]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24904357877719, 26.911807695480874]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2487753578757, 26.91212340435448]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24918305364596, 26.91243911234506]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24819600072848, 26.91176942767863]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24815308538425, 26.911463284793523]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24968194452273, 26.90979383476454]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([87.250631446514, 26.90909064928237]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24903284994113, 26.908526184297628]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24861442533481, 26.90855488597512]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24838911977756, 26.90855488597512]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24811017004001, 26.90855488597512]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24784194913852, 26.908535751524273]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24856078115451, 26.908880171143487]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24873244253146, 26.908880171143487]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24910795179355, 26.908870603946028]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24667250600803, 26.90940636575493]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24578201261508, 26.90989428947584]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24609314886081, 26.909875155252003]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24627553907382, 26.90982731967822]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24635064092624, 26.90960727577776]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24721967664706, 26.90878449913244]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24757372823703, 26.908851469548686]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23967730489719, 26.901551460352447]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23970949140536, 26.901245289759796]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23970949140536, 26.90099652554206]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23972022024142, 26.900719057114287]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23998844114291, 26.9007094892253]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24002062765109, 26.900929550466735]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23999916997897, 26.901293128969638]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23994552579867, 26.901532324714744]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24033176389682, 26.901675841918614]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24035322156894, 26.901455782131407]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24035322156894, 26.901312264647878]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2402566620444, 26.901101772008772]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24056779829013, 26.901513189073782]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23032443390238, 26.902601803070908]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23031906948435, 26.902372177340013]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23064629898417, 26.902367393465656]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23153142795908, 26.903137594627083]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23122565613139, 26.902898402282194]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23093597755778, 26.903395921790466]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23062484131205, 26.90311367541539]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23001329765665, 26.902348257966196]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23001866207468, 26.902094712292207]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23098425732005, 26.90102790067265]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23123102054942, 26.900980061350474]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23184792862284, 26.901243177371658]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23269014225352, 26.901563699696464]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23242192135203, 26.90152542842192]),
            {
              "name": "cropland_hills",
              "id": 5,
              "system:index": "96"
            })]),
    river_sand_2004 = 
    /* color: #f6e3ff */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([87.1038996746904, 26.773288145868495]),
            {
              "name": "river_sand",
              "id": 6,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([87.10410352257553, 26.773288145868495]),
            {
              "name": "river_sand",
              "id": 6,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([87.10275168923202, 26.772435641829446]),
            {
              "name": "river_sand",
              "id": 6,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([87.10241909531418, 26.7723781694168]),
            {
              "name": "river_sand",
              "id": 6,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([87.10207577256027, 26.771956704168435]),
            {
              "name": "river_sand",
              "id": 6,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([87.10262294319931, 26.771956704168435]),
            {
              "name": "river_sand",
              "id": 6,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([87.10235472229782, 26.771927967844547]),
            {
              "name": "river_sand",
              "id": 6,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([87.10206504372421, 26.7717268133737]),
            {
              "name": "river_sand",
              "id": 6,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.10659324734239, 26.766611567783716],
                  [87.10691511242418, 26.766266715188284],
                  [87.10710823147325, 26.76697557772085],
                  [87.10751592724351, 26.76680315210659],
                  [87.10768758862046, 26.766649884674106],
                  [87.10725843517808, 26.767052211243193],
                  [87.10644304363755, 26.767071369615703]]]),
            {
              "name": "river_sand",
              "id": 6,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.88315732190502, 26.5317841857085],
                  [86.8825779647578, 26.531246643421092],
                  [86.88193423459423, 26.530152353127463],
                  [86.88189131924999, 26.528981258974397],
                  [86.88204152295482, 26.52782935142882],
                  [86.88253504941356, 26.52796374123818],
                  [86.88296420285594, 26.528654886343567],
                  [86.88294274518383, 26.5294036221778],
                  [86.88408000180614, 26.529614803196623],
                  [86.88547475049388, 26.530382730898502],
                  [86.88495976636302, 26.531227445435686],
                  [86.88367230603588, 26.53207215375532]]]),
            {
              "name": "river_sand",
              "id": 6,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.89214808652294, 26.523624790783735],
                  [86.89751250455272, 26.525851883185318],
                  [86.89656836697948, 26.527464578295984],
                  [86.8909893722285, 26.525083925169007]]]),
            {
              "name": "river_sand",
              "id": 6,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.950512954687, 26.54865789352634],
                  [86.9501696319331, 26.544626857931675],
                  [86.95570571133983, 26.545893770100296],
                  [86.95828063199413, 26.55015509923059],
                  [86.95514781186473, 26.55242006557457]]]),
            {
              "name": "river_sand",
              "id": 6,
              "system:index": "11"
            })]),
    bareland_2004 = 
    /* color: #c2491f */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([86.65977434477986, 26.55621709914367]),
            {
              "name": "bareland",
              "id": 7,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([86.65978507361592, 26.555938788637054]),
            {
              "name": "bareland",
              "id": 7,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([86.66001037917317, 26.555948385562345]),
            {
              "name": "bareland",
              "id": 7,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([86.65973142943562, 26.555622089652474]),
            {
              "name": "bareland",
              "id": 7,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([86.65967778525533, 26.555420553479472]),
            {
              "name": "bareland",
              "id": 7,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.20872638596136, 26.755634102866217],
                  [87.20870492828924, 26.75525089622872],
                  [87.20861909760076, 26.754618602451895],
                  [87.20898387802679, 26.754695244309172],
                  [87.20939157379705, 26.755040132027315],
                  [87.20949886215764, 26.755404179038777],
                  [87.2094559468134, 26.755864026228505],
                  [87.20934865845281, 26.756438832599017],
                  [87.20879075897771, 26.756438832599017]]]),
            {
              "name": "bareland",
              "id": 7,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([87.10533825185541, 26.65075157394337]),
            {
              "name": "bareland",
              "id": 7,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([87.10558501508478, 26.650775546378895]),
            {
              "name": "bareland",
              "id": 7,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([87.105622566011, 26.650521438306153]),
            {
              "name": "bareland",
              "id": 7,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([87.10589078691248, 26.650550205286187]),
            {
              "name": "bareland",
              "id": 7,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.11367505959086, 26.6578466121008],
                  [87.11405593324695, 26.657839421323523],
                  [87.11443680695109, 26.657822641150243],
                  [87.11442607811503, 26.658057556248526],
                  [87.11468893459849, 26.658095909688072],
                  [87.11470234570946, 26.658316441515495],
                  [87.11471039227061, 26.658527384994464],
                  [87.11370724609904, 26.65852259083338]]]),
            {
              "name": "bareland",
              "id": 7,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.11530483388853, 26.658708853974865],
                  [87.11530483388853, 26.65966768062412],
                  [87.11575544500303, 26.65985944498726],
                  [87.1161631407733, 26.65955262185155],
                  [87.11657083654356, 26.65959097478864],
                  [87.11654937887144, 26.66010873817762],
                  [87.1161631407733, 26.659974503450478],
                  [87.11564815664244, 26.660377207158188],
                  [87.11530483388853, 26.660127914554316],
                  [87.11530483388853, 26.659821092140415],
                  [87.11496151113462, 26.659878621405856],
                  [87.11500442647886, 26.65953344537819],
                  [87.1145967307086, 26.659629327712807],
                  [87.11463964605284, 26.658766383800998]]]),
            {
              "name": "bareland",
              "id": 7,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.11760080480528, 26.66102920062435],
                  [87.11813724660826, 26.66133601979003],
                  [87.11856640005064, 26.661700366477785],
                  [87.11871660375547, 26.662045535950984],
                  [87.11813724660826, 26.662179768241927],
                  [87.11764372014952, 26.66212224013655],
                  [87.1171716513629, 26.661968831713818],
                  [87.11680687093687, 26.661719542587004],
                  [87.11680687093687, 26.661259315075938]]]),
            {
              "name": "bareland",
              "id": 7,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.11939293910092, 26.663820437140156],
                  [87.12010641023178, 26.66418957165114],
                  [87.1198650111662, 26.6642087475065],
                  [87.11954851075669, 26.664151220259615],
                  [87.11916227265854, 26.66394987524283],
                  [87.11910862847824, 26.66274179768079]]]),
            {
              "name": "bareland",
              "id": 7,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.12014932557602, 26.663758117753694],
                  [87.1207394115593, 26.663508832535964],
                  [87.12104518311654, 26.663700590274992],
                  [87.12100763246079, 26.66396905097403],
                  [87.12070186095427, 26.664175190410944],
                  [87.12020296975632, 26.664151220259615]]]),
            {
              "name": "bareland",
              "id": 7,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.12273102645221, 26.66378357546709],
                  [87.12319236640278, 26.663524702403276],
                  [87.1232138240749, 26.66379316334706],
                  [87.12373953704181, 26.663764399704725],
                  [87.12397557143512, 26.66391780571339],
                  [87.12388974074665, 26.664032860084614],
                  [87.12382536773029, 26.664147914339686],
                  [87.12372880820575, 26.664205441423746],
                  [87.1235035026485, 26.664243792797],
                  [87.12338548545185, 26.66429173199544],
                  [87.12314945105854, 26.664339671173753],
                  [87.12289195899311, 26.664243792797],
                  [87.12252717856708, 26.664119150786785],
                  [87.12211948279682, 26.66382192698214]]]),
            {
              "name": "bareland",
              "id": 7,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([87.13275390482887, 26.676821137611476]),
            {
              "name": "bareland",
              "id": 7,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([87.1330650410746, 26.676840311179003]),
            {
              "name": "bareland",
              "id": 7,
              "system:index": "17"
            })]),
    suburban_2004 = 
    /* color: #fdff86 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([87.15991833035113, 26.69548003008579]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([87.16020800892474, 26.69548003008579]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([87.16020800892474, 26.69523081421206]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([87.16473173312957, 26.69440797585742]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([87.16472636871154, 26.694158757638935]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([87.16506432704742, 26.694139586984164]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([87.1653325479489, 26.694139586984164]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([87.16418992690856, 26.693377550844986]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([87.16838490180785, 26.693818478037347]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([87.16652881316955, 26.693617185400303]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([87.20485581164078, 26.69649597347787]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([87.20486654047684, 26.696831452532713]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([87.20516694788651, 26.69707107982428]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([87.20513476137833, 26.69735863190887]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([87.20517767672257, 26.69767493836371]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2054888129683, 26.697607843128477]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([87.20545662646012, 26.697933733900843]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([87.20518840555863, 26.697885808845715]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14806930497885, 26.599904192284022]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14809076265097, 26.600172802751764]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14802638963461, 26.600422226192894]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14830533937216, 26.600422226192894]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14836971238852, 26.599904192284022]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14832679704428, 26.600316700957258]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14865939096212, 26.60067164909028]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14867011979818, 26.601228052055806]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14864866212606, 26.601611776662352]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14863793329, 26.601813231565618]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14895979837179, 26.601496659415535]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14928166345358, 26.60153503184401]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14927093461752, 26.60124723831669]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14953915551901, 26.60154462494912]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14958207086325, 26.601237645186668]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14981810525656, 26.601237645186668]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14835898355246, 26.601228052055806]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14803711847067, 26.601228052055806]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14777962640524, 26.60125683144593]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14770452455282, 26.60150625252385]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14805857614279, 26.60154462494912]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14836971238852, 26.60154462494912]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14894906953573, 26.602053058368856]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14865939096212, 26.60229288466938]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14893834069967, 26.602340849869137]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14889542535543, 26.60186119696649]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([87.1492494769454, 26.602849279750412]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([87.1495927996993, 26.6028588727453]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14743630365133, 26.601803638483023]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14713589624166, 26.602053058368856]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14674965814352, 26.602340849869137]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14628831819296, 26.602398408082333]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14711443856955, 26.602350442906697]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.26642550519252, 26.705560125844592],
                  [87.2677558808639, 26.705253425677704],
                  [87.26769150784754, 26.70661440136909],
                  [87.26631821683192, 26.706346041252427]]]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.24250141148433, 26.700254611488536],
                  [87.24290910725459, 26.70021627222709],
                  [87.24295202259883, 26.700868037916504],
                  [87.24249068264827, 26.70087762267823]]]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24312368397578, 26.700705096843723]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([87.25938379685952, 26.702531738912164]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([87.25908338944986, 26.70341352073634]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2590726606138, 26.703959838659166]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([87.25929796617105, 26.70230170774841]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([87.25863277833535, 26.699790503995864]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([87.25906193177774, 26.700193067101832]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([87.26730167787149, 26.700480611306585]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2675377122648, 26.70097901954214]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([87.26770937364175, 26.700288915250727]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([87.26678669374063, 26.699598806778745]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2700053445585, 26.703566873400284]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([87.26946890275552, 26.704122775076197]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2689968339689, 26.704391140431465]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27238714616372, 26.705997498537283]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2720223657377, 26.70565246211648]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27322399537637, 26.705077399092254]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27361023347451, 26.70463651547403]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27369606416299, 26.70367806693801]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27373897950723, 26.70264293346039]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27373897950723, 26.702087024562154]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2738248101957, 26.701741976295263]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27346002976968, 26.70139692698316]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23263825558995, 26.69578215517082]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23272408627842, 26.695494599107537]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23273481511448, 26.695245383265664]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23277773045872, 26.69489072901244]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2327026286063, 26.69467985298723]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23254169606541, 26.694526488360125]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23221983098362, 26.696079295673837]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23233784818028, 26.6965106272832]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23288501881932, 26.69655855291678]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23276700162266, 26.696711914808763]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23260606908177, 26.696616063650453]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([87.20832671307896, 26.67425178496159]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([87.20832671307896, 26.674846177447623]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([87.20877732419346, 26.674711960060247]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([87.20875586652134, 26.674328480940307]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([87.20397080563878, 26.671126379955137]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([87.20397080563878, 26.670762063368844]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([87.20302666806553, 26.669669106628383]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23261507008858, 26.69998288180222]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23170311902352, 26.69917775268223]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23354847882577, 26.7011234716483]),
            {
              "name": "suburban",
              "id": 8,
              "system:index": "96"
            })]),
    river_bare_2004 = 
    /* color: #d63000 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[87.08302272622082, 26.762757114066627],
                  [87.08302272622082, 26.76153092514573],
                  [87.0845676786134, 26.76122437584772],
                  [87.08576930825207, 26.76210570285016],
                  [87.08465350930187, 26.7631019773162],
                  [87.08336604897472, 26.763638429179164]]]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.0760636161706, 26.747314621411586],
                  [87.07687900771113, 26.746203237262318],
                  [87.07971142043085, 26.746318208540202],
                  [87.0795397590539, 26.748081086908492],
                  [87.07760856856318, 26.748694255585345]]]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.24747235663176, 26.82293965758546],
                  [87.24871690161467, 26.82276731700541],
                  [87.24909240987051, 26.822958806712332],
                  [87.24985415823699, 26.823150295716246],
                  [87.24882418997527, 26.82376305896123],
                  [87.24730069525481, 26.823858802918917]]]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.30431832554424, 26.78173756456834],
                  [87.30534829380596, 26.781929123372652],
                  [87.30534829380596, 26.783040158062956],
                  [87.30440415623272, 26.78388300471188]]]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.10778438681001, 26.75166803915349],
                  [87.10842811697358, 26.75139978528218],
                  [87.10868560903901, 26.75243447529728],
                  [87.10769855612153, 26.752434475297203]]]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.09395925408207, 26.774111818710715],
                  [87.09393779640995, 26.772885752362445],
                  [87.09447423821292, 26.7714680966456],
                  [87.09543983345829, 26.772157769204856],
                  [87.09589044457279, 26.77315395550729],
                  [87.09696332817875, 26.77347962990298],
                  [87.0970277011951, 26.77501220275475],
                  [87.09468881493412, 26.774954731646105]]]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.11214548469096, 26.794482106665754],
                  [87.11244589210062, 26.793103028610048],
                  [87.11369043708353, 26.792758256476954],
                  [87.11424833655863, 26.79367764650374],
                  [87.11424833655863, 26.79513333214289],
                  [87.1121884000352, 26.795209946659153]]]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.29563810884454, 26.6711337430464],
                  [87.29623892366388, 26.671210441121865],
                  [87.29638912736871, 26.67178567504396],
                  [87.29563810884454, 26.67178567504396]]]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.29321339189508, 26.66950389675064],
                  [87.2937927490423, 26.66906287551444],
                  [87.29400732576349, 26.66950389675064],
                  [87.29372837602594, 26.670079139278908],
                  [87.29310610353448, 26.670079139278908]]]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.89549761104844, 26.463876292741855],
                  [86.89725714016221, 26.464414150224904],
                  [86.89755754757188, 26.465566693510617],
                  [86.89541178035996, 26.465681947204402]]]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.92306864082944, 26.483939973000794],
                  [86.92510711968076, 26.484304884351655],
                  [86.92521440804136, 26.485610873382303],
                  [86.92311155617368, 26.485591667768706]]]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.90218231695317, 26.4558024611904],
                  [86.90359852331304, 26.455821671776786],
                  [86.90372726934575, 26.457396928952306],
                  [86.90216085928105, 26.45735850830202]]]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.8896510364356, 26.451931489907388],
                  [86.89177534597539, 26.452085179675166],
                  [86.89205429571294, 26.453679698912392],
                  [86.88975832479619, 26.453852597261857]]]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2986747922159, 26.819912870213695]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([87.29949018375643, 26.81968307657771]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2994472684122, 26.818725598079144]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([87.29863187687167, 26.819491581525146]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([87.29940435306796, 26.818419203251178]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([87.29901811496981, 26.81822770606306]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([87.29943410938421, 26.81793902870812]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([87.29901568477788, 26.81940397769833]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([87.29991690700689, 26.812769781570186]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30053917949834, 26.812779356898318]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30077521389165, 26.812511247404654]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30058209484258, 26.812223986529233]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30022804325262, 26.812405918501526]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30021731441656, 26.812798507552184]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([87.29984180515447, 26.812348466331308]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([87.29989544933477, 26.811936724925925]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30021731441656, 26.812176109645897]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30043189113775, 26.811917574126486]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([87.3002602297608, 26.811936724925925]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30066792553106, 26.811630311746743]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30093614643255, 26.812099506590496]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([87.3007108408753, 26.81213780812468]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30095760410467, 26.81163988717113]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([87.3007644850556, 26.81203247887457]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30062501018682, 26.81138135042886]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30023877208868, 26.811572859183457]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30042116230169, 26.811821820080798]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2303607525265, 26.801405857841722]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2300388874447, 26.80155907834973]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23083282131311, 26.802286872935973]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23051095623133, 26.802459244653928]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23061824459192, 26.801980433679425]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23008180278894, 26.801329247510104]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23044658321497, 26.80115687407477]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23094010967371, 26.802918901287722]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27540948236815, 26.82805706266783]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27588155115477, 26.828286839321716]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27626778925291, 26.82811450687501]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27596738184324, 26.82807621074013]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([87.40585567511187, 26.780003179435703]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([87.40598442114458, 26.77885380226162]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([87.40718605078325, 26.77962005500394]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([87.4066710666524, 26.77858561257996]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([87.40627397896067, 26.77938025523387]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([87.40646709800974, 26.779887895899837]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([87.40661730171458, 26.780376378171155]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([87.40691770912424, 26.780845702295096]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([87.40734686256663, 26.78120008861318]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([87.40701426864878, 26.780443424593376]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([87.40691770912424, 26.780021989281657]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([87.40681042076365, 26.77951434921531]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([87.40639199615732, 26.779150379468657]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([87.40633835197703, 26.778748095759504]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([87.40616669060007, 26.778317075917904]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([87.40578045250193, 26.778039306708465]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([87.40515818001047, 26.778029728447738]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([87.40525473953501, 26.77869062654184]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([87.40532984138743, 26.779667599285858]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([87.40570535064951, 26.779543083619288]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([87.40555514694468, 26.779159957634835]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([87.40569462181345, 26.77880556494808]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([87.40560879112498, 26.778575688019217]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([87.40525473953501, 26.7784894840509]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([87.40572680832163, 26.778470327604605]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([87.4054693162562, 26.778355388858962]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([87.40551223160044, 26.778068041485763]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23006844071222, 26.800776003631253]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23022937325311, 26.800776003631253]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23005771187616, 26.800440831187096]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23005771187616, 26.80009608135412]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23003625420404, 26.799770483327464]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([87.22991823700738, 26.799521495970584]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2296500161059, 26.79923420218734]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([87.22928523567987, 26.798966060666455]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([87.22926377800775, 26.799444884366206]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([87.22924232033563, 26.798870295683955]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23978970653873, 26.80257136082907]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2394249261127, 26.80212606712876]),
            {
              "name": "river_side_bareland",
              "id": 10,
              "system:index": "90"
            })]),
    NDTI_summer_2004 = {"opacity":1,"bands":["NDTI_3"],"min":0.10562767945230007,"max":0.5007053639739751,"palette":["ffffff","ce7e45","df923d","f1b555","fcd163","99b718","74a901","66a000","529400","3e8601","207401","056201","004c00","023b01","012e01","011d01","011301"]},
    NDTI_winter_2004 = {"opacity":1,"bands":["NDTI_1"],"min":0.07041512615978718,"max":0.45621618814766407,"palette":["ffffff","ce7e45","df923d","f1b555","fcd163","99b718","74a901","66a000","529400","3e8601","207401","056201","004c00","023b01","012e01","011d01","011301"]},
    water_2019 = 
    /* color: #070e84 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[86.9207053077043, 26.52609455640747],
                  [86.92362359992026, 26.525556978481802],
                  [86.92392401235564, 26.527054510729286],
                  [86.92203570562593, 26.527476888087996]]]),
            {
              "name": "water",
              "id": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.92614301206939, 26.528133857926235],
                  [86.92635759159035, 26.528940202802797],
                  [86.92584260074045, 26.529592954030242],
                  [86.92489845084883, 26.529189784592656]]]),
            {
              "name": "water",
              "id": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.97330367839086, 26.589110257741126],
                  [86.9748057154392, 26.589973727722562],
                  [86.97426927363622, 26.590683687050095],
                  [86.97274577891577, 26.58987778693518]]]),
            {
              "name": "water",
              "id": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.12218525893915, 26.783855875193627],
                  [87.12428811080683, 26.785139289058407],
                  [87.12362292297114, 26.78575225772379],
                  [87.12130549438227, 26.78446885079016]]]),
            {
              "name": "water",
              "id": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([86.89569163322781, 26.765499122809285]),
            {
              "name": "water",
              "id": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([86.89600276947354, 26.765824819155487]),
            {
              "name": "water",
              "id": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([86.89639973640774, 26.765978087701185]),
            {
              "name": "water",
              "id": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([86.89687180519437, 26.766255886413123]),
            {
              "name": "water",
              "id": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([86.90137791633938, 26.766504946749688]),
            {
              "name": "water",
              "id": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([86.901849985126, 26.766255886413123]),
            {
              "name": "water",
              "id": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([86.88808488846158, 26.766207990131942]),
            {
              "name": "water",
              "id": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([86.88851404190396, 26.76590145345419]),
            {
              "name": "water",
              "id": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([86.88902902603482, 26.765575757327703]),
            {
              "name": "water",
              "id": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([86.92354853991355, 26.58662941682887]),
            {
              "name": "water",
              "id": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([86.923269590176, 26.586418340824128]),
            {
              "name": "water",
              "id": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([86.92296918276634, 26.58612091488419]),
            {
              "name": "water",
              "id": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([86.92270096186485, 26.585794704900312]),
            {
              "name": "water",
              "id": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([86.92402060870018, 26.587109133574156]),
            {
              "name": "water",
              "id": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([86.92432101610984, 26.588068561034166]),
            {
              "name": "water",
              "id": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([86.92440684679832, 26.58897041551491]),
            {
              "name": "water",
              "id": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.15020650737623, 26.855744198928353],
                  [87.1511935602937, 26.855820772470366],
                  [87.1511935602937, 26.8563376425235],
                  [87.1501850497041, 26.856299355933896]]]),
            {
              "name": "water",
              "id": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.15022796504834, 26.854174429897586],
                  [87.1509575259004, 26.854251004501883],
                  [87.1509575259004, 26.8550550347184],
                  [87.1502923380647, 26.854978460658206]]]),
            {
              "name": "water",
              "id": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.16505775530084, 26.878926208320944],
                  [87.16505775530084, 26.878600836889273],
                  [87.1653581627105, 26.87863911592984],
                  [87.16534743387444, 26.879060184520597],
                  [87.16532597620233, 26.879452542477544]]]),
            {
              "name": "water",
              "id": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([86.7711930938937, 26.88684916601207]),
            {
              "name": "water",
              "id": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([86.77112872087734, 26.886504679205288]),
            {
              "name": "water",
              "id": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([86.7711394497134, 26.886265451638277]),
            {
              "name": "water",
              "id": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([86.77117163622158, 26.886016654431344]),
            {
              "name": "water",
              "id": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([86.77120382272976, 26.88569130341117]),
            {
              "name": "water",
              "id": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([86.7713540264346, 26.885519058374197]),
            {
              "name": "water",
              "id": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([86.97384340267952, 26.59150838790379]),
            {
              "name": "water",
              "id": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([86.9245145303795, 26.52552348753365]),
            {
              "name": "water",
              "id": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([87.12236332373355, 26.78607943831876]),
            {
              "name": "water",
              "id": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([87.15105390048096, 26.85711498937644]),
            {
              "name": "water",
              "id": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([87.16519011714792, 26.87950998169787]),
            {
              "name": "water",
              "id": 1,
              "system:index": "33"
            })]),
    river_sand_2019 = 
    /* color: #bf04c2 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[86.92948690734515, 26.51286170898282],
                  [86.93111766752472, 26.5127081025702],
                  [86.93131078386106, 26.514032951122392],
                  [86.93057050615793, 26.5143305620935],
                  [86.92965856631218, 26.514474563909953]]]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.9250157861011, 26.503419260214955],
                  [86.92612085621523, 26.503428861532925],
                  [86.92609939854312, 26.504456197917257],
                  [86.92502651493716, 26.504427394218563]]]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.92413590260564, 26.50538243419244],
                  [86.92506931134282, 26.505372833037754],
                  [86.9252463371378, 26.505646465632125],
                  [86.92493520089208, 26.505972903664166],
                  [86.92493520089208, 26.506164925602658],
                  [86.92493520089208, 26.506544167988327],
                  [86.92461870022832, 26.50685620192384],
                  [86.92417881794988, 26.506851401408184]]]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.00990027681125, 26.58910199772584],
                  [87.01159543290866, 26.588986867894555],
                  [87.01157397523654, 26.59059867499538],
                  [87.00998610749973, 26.59059867499538]]]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.11173976083509, 26.763640472983226],
                  [87.1132203509809, 26.764828327753456],
                  [87.11229766390007, 26.765613839865154],
                  [87.11085998965933, 26.764540945150326]]]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([87.02352071063225, 26.56812794361503]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([87.023654821083, 26.56775370270768]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([87.0238533045501, 26.56722592499163]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([87.02428782241051, 26.56751860202535]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([87.02496373908227, 26.567676935190985]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([87.02565574900811, 26.56770572301576]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([87.02550554530328, 26.568319861554908]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([87.02548408763116, 26.567326682743353]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([87.02472770468896, 26.566760518988602]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([87.0256718422622, 26.566472638040434]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([87.0196744229049, 26.567537793935866]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([87.02491009490197, 26.566319101239014]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([86.84926423544881, 26.627883027516276]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([86.84962901587484, 26.627307572352656]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([86.85053023810384, 26.62688557005773]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([86.85136708731649, 26.625734646787652]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([86.85284766669271, 26.62529345646108]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([86.85449990744588, 26.62433434117997]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([86.84731158728597, 26.62761448213385]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([86.84870633597372, 26.62719248097222]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([86.8495861005306, 26.6264827482316]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([86.8551865529537, 26.623816415581576]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([87.01048310603517, 26.588272089708017]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([87.1137248052494, 26.766138226844323]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([86.92666977400985, 26.509677736702237]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([86.85479956785386, 26.473915231499287]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([86.83175010895549, 26.452798462888186]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([87.4910213293527, 26.714838930936004]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([87.4907852949594, 26.713918902929183]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([87.49016302246794, 26.712730522416667]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([87.48954074997648, 26.711235445443876]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([87.48934763092741, 26.709682844732406]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([87.4892188848947, 26.708130222851548]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([87.48941200394377, 26.706903444913326]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.37015396207556, 26.71625697017154],
                  [87.3710444554685, 26.717033228349795],
                  [87.37236410230383, 26.718231147249803],
                  [87.3735657319425, 26.71978363138809],
                  [87.37286835759863, 26.720301121395345],
                  [87.37191349118933, 26.71944821994151],
                  [87.37055092900977, 26.71808739764741],
                  [87.36947804540381, 26.716496556593764]]]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([87.37350135892615, 26.72036820326105]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([87.11826414551835, 26.661677126331618]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([87.11855918850999, 26.66166753827384]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([87.11888910021882, 26.661943194613606]),
            {
              "name": "river_sand",
              "id": 7,
              "system:index": "43"
            })]),
    urban_2019 = 
    /* color: #98ff00 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[87.272134882642, 26.4613177732476],
                  [87.27297173185465, 26.461144886108595],
                  [87.27443085355875, 26.460952788982958],
                  [87.27440939588664, 26.46243192858139],
                  [87.2723494593632, 26.462451138061546]]]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.2763835017216, 26.462662442131627],
                  [87.27715597791789, 26.462720070447045],
                  [87.27698431654093, 26.463738165928856],
                  [87.27623329801676, 26.463622910288596]]]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.26870165510294, 26.463661328848165],
                  [87.26964579267619, 26.464045513738633],
                  [87.26964579267619, 26.46469862510941],
                  [87.26780043287394, 26.46446811563702]]]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.27340733778325, 26.663101869513646],
                  [87.27439439070073, 26.66244988789012],
                  [87.27555310499517, 26.66214307171939],
                  [87.27701222669927, 26.66244988789012],
                  [87.27679764997808, 26.663485386375523],
                  [87.27439439070073, 26.664252416232006]]]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.27379641161461, 26.658453486434528],
                  [87.27400025949974, 26.657763124714236],
                  [87.27461180315514, 26.657379588620714],
                  [87.27537355051537, 26.65737000020188],
                  [87.27575978861351, 26.658089129380333],
                  [87.27574905977745, 26.659383550482666],
                  [87.27428993807335, 26.659412315229293]]]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.28583646923092, 26.809535491594016],
                  [87.28798223644283, 26.809669549938796],
                  [87.28796077877071, 26.811220784970487],
                  [87.28598667293575, 26.811105879399708]]]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.2891838660815, 26.81066540696619],
                  [87.29137254863765, 26.810722859989355],
                  [87.29137254863765, 26.812044271486247],
                  [87.28937698513057, 26.81198681913275]]]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.26850907570491, 26.814187310424252],
                  [87.27009694344173, 26.814129859156825],
                  [87.27009694344173, 26.814666069853697],
                  [87.27050463921199, 26.815087376479],
                  [87.26840178734432, 26.815087376479]]]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.27219586995996, 26.704350523817556],
                  [87.27277522710718, 26.704293016988434],
                  [87.2732472958938, 26.704101327348365],
                  [87.27346187261499, 26.703660439951864],
                  [87.27356916097558, 26.703986313409448],
                  [87.27408414510644, 26.704024651401976],
                  [87.27421289113916, 26.70339207287498],
                  [87.27517848638452, 26.703487918332154],
                  [87.27511411336816, 26.70492559051181],
                  [87.27363353399194, 26.704868083973036],
                  [87.27363353399194, 26.70519395397546],
                  [87.27221732763208, 26.705117278764646]]]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.27395539907373, 26.706478256082956],
                  [87.27453475622094, 26.706554930377514],
                  [87.27455621389306, 26.707244996705622],
                  [87.2738051953689, 26.707110817469285]]]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.74737479892532, 26.53903215438521],
                  [86.75012138095657, 26.539118539418133],
                  [86.75002482143204, 26.540529485747577],
                  [86.7473533412532, 26.540414307105873]]]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2747214761473, 26.660849831994273]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([87.273919661788, 26.705390086514303]),
            {
              "name": "urban",
              "id": 2,
              "system:index": "12"
            })]),
    urban_core_2019 = 
    /* color: #ad870c */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([87.27912776178499, 26.571516536039685]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27940671152254, 26.571478153548394]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27975003427645, 26.571382197263926]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27966420358797, 26.571075136613477]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2794710845389, 26.570998371322258]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27938525385042, 26.57132462345464]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27927796548983, 26.571343814727623]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27912776178499, 26.571343814727623]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27897755808016, 26.57132462345464]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27884881204744, 26.57126704961645]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27929942316194, 26.570998371322258]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27932088083406, 26.570576161301158]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2793637961783, 26.570345864270156]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([87.27934233850618, 26.57019233265897]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28024356073519, 26.566373167618245]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28054396814485, 26.56664185675897]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.278799768818, 26.45634684752046],
                  [87.27958833826838, 26.45637566326259],
                  [87.27955078734217, 26.456745464646332],
                  [87.278799768818, 26.456697438559768]]]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.27812921656428, 26.45827268375312],
                  [87.27886950625239, 26.458368734592124],
                  [87.27878367556391, 26.458945037943366],
                  [87.27808630122004, 26.458916222844312]]]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.28047883166133, 26.458426365057086],
                  [87.28047883166133, 26.458070976730337],
                  [87.28095090044795, 26.45808058183467],
                  [87.28090798510371, 26.4588297775039],
                  [87.28045737398921, 26.458800962375996]]]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28033863961927, 26.4569422435993]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28027426660292, 26.4572400043803]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28058540284864, 26.457235201793157]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2805585807585, 26.457446515437443]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2808482593321, 26.457235201793157]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28116475999586, 26.4572400043803]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28148126065962, 26.457230399205844]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28114866674177, 26.457499343787926]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28086971700422, 26.45698066438851]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([87.280649775865, 26.4569422435993]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28048347890608, 26.45694704619865]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28184067666761, 26.457206386266154]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28122913301222, 26.45716316296214]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28235029638044, 26.45665888988294]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28273653447859, 26.45670691598564]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28237711847059, 26.45639954858219]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2827204412245, 26.45813328210279]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28269898355238, 26.45791236460146]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28237711847059, 26.45802762595939]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28240930497877, 26.458296568679142]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28384734987429, 26.45861470409211]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28420676588229, 26.458585888910388]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28444816469363, 26.458552271189237]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28481294511965, 26.458561876253416]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28418530821017, 26.458340959574503]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28380443453005, 26.458302539239245]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([87.28451253770999, 26.458840422766098]),
            {
              "name": "urban_core",
              "id": 8,
              "system:index": "45"
            })]),
    urban_trees_2021 = 
    /* color: #31746c */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[87.0070735866137, 26.550968066968068],
                  [87.00703067126946, 26.548347962732866],
                  [87.00678390804009, 26.545679809720284],
                  [87.00777096095757, 26.545564636250212],
                  [87.00811428371148, 26.547445788444747],
                  [87.00815719905572, 26.54877025464185],
                  [87.00781387630181, 26.55115041631654]]]),
            {
              "name": "urban_trees",
              "id": 9,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.83395243424083, 26.59336124170621],
                  [86.83412409561778, 26.5891398959203],
                  [86.8336949421754, 26.585148662188356],
                  [86.83383441704417, 26.58507190632982],
                  [86.83562613860629, 26.58495679451722],
                  [86.83841563004161, 26.58445785760918],
                  [86.83888769882823, 26.58476488238117],
                  [86.83832979935313, 26.59378336772199]]]),
            {
              "name": "urban_trees",
              "id": 9,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.29764723602025, 26.479388838954787],
                  [87.29665182763482, 26.477126680663222],
                  [87.29841135674859, 26.476492846966728],
                  [87.2996559017315, 26.479412294382445],
                  [87.29937695199395, 26.48007492180049],
                  [87.29878686601067, 26.48032460650401]]]),
            {
              "name": "urban_trees",
              "id": 9,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.25676722544378, 26.814756582985634],
                  [87.25733585375494, 26.813846939067222],
                  [87.25909538286871, 26.81500553689107],
                  [87.25871987360662, 26.815838570983345]]]),
            {
              "name": "urban_trees",
              "id": 9,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.29280621897578, 26.81191624297235],
                  [87.29287059167112, 26.811016156224614],
                  [87.29384691088735, 26.810843798372495],
                  [87.29544549949416, 26.810767194798736],
                  [87.29522019505943, 26.81166728352306],
                  [87.29428679097371, 26.81180133867899],
                  [87.2936001488877, 26.81186836619755]]]),
            {
              "name": "urban_trees",
              "id": 9,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([87.29898516043683, 26.476220195970942]),
            {
              "name": "urban_trees",
              "id": 9,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([86.81962075102948, 26.585235431220354]),
            {
              "name": "urban_trees",
              "id": 9,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([87.29151382508135, 26.812175947601215]),
            {
              "name": "urban_trees",
              "id": 9,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([87.25859629404636, 26.814055544608763]),
            {
              "name": "urban_trees",
              "id": 9,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([87.01355925086955, 26.550166862993205]),
            {
              "name": "urban_trees",
              "id": 9,
              "system:index": "9"
            })]),
    suburban_2019 = 
    /* color: #ff2f1f */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[87.12253541518028, 26.499663181789483],
                  [87.12282509375389, 26.499672783421286],
                  [87.12284655142601, 26.49911588745136],
                  [87.12307185698326, 26.499087082414007],
                  [87.12310404349144, 26.498578192230088],
                  [87.12330789137657, 26.498558988782804],
                  [87.12330789137657, 26.50058493478316],
                  [87.12303967047508, 26.500594536337942],
                  [87.1230074839669, 26.500882582608163],
                  [87.12256760168846, 26.500844176480516]]]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.12489575911339, 26.49987441750357],
                  [87.12496013212974, 26.4996343768893],
                  [87.12520689535911, 26.499643978523494],
                  [87.12524981070335, 26.499355929148617],
                  [87.1258720831948, 26.499355929148617],
                  [87.12534637022789, 26.50001844163144],
                  [87.1246275382119, 26.500037644834865]]]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.11451204560295, 26.525660931256407],
                  [87.11552055619255, 26.525660931256407],
                  [87.11545618317619, 26.5265248793207],
                  [87.11457641861931, 26.526505680545473]]]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([87.12779213712973, 26.52997326774085]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([87.12808718012137, 26.530304436158048]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([87.1280925445394, 26.530021263222817]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([87.12837149427695, 26.530285238015015]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([87.12873091028494, 26.52950291095508]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([87.12869335935873, 26.529776486054793]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([87.12867726610465, 26.53002606276993]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([87.12837149427695, 26.53001646367553]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([87.12839295194907, 26.529733290029785]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([87.12867190168662, 26.52919573813613]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14573994532645, 26.655947802276142]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14576140299857, 26.655727265672237]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14599743739188, 26.655660145751675]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([87.146018895064, 26.655497140066007]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([87.1457292164904, 26.655391665674767]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14543953791679, 26.65540125425983]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14539662257255, 26.655151950786756]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14604035273612, 26.6562162810449]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14575067416251, 26.656235458075642]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14474216357291, 26.654308150375996]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14505329981864, 26.654298561699132]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14509621516288, 26.654068433212466]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14479580775321, 26.654097199298658]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14754775420249, 26.65894418129741]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14719906703056, 26.65894418129741]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14719370261253, 26.658666120635655]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([87.14694157496513, 26.65865653232488]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([87.146920117293, 26.658364088459585]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([87.146920117293, 26.658095614743175]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.16437706189859, 26.694344637727262],
                  [87.16436633306253, 26.693807859050246],
                  [87.16514953809488, 26.69378868833642],
                  [87.16514953809488, 26.69425836989613],
                  [87.16512808042276, 26.694526758489623],
                  [87.16489204602945, 26.694526758489623],
                  [87.16478475766885, 26.694756805352316],
                  [87.16439851957071, 26.69469929368018]]]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.16379770475137, 26.6929547591644],
                  [87.16420540052164, 26.69301227171705],
                  [87.16418394284952, 26.693424444161376],
                  [87.16373333173502, 26.693395687992716]]]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([87.19277259694624, 26.698951324902687]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([87.19338414060164, 26.699492871787413]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([87.19340559827376, 26.699770832905468]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2051586898196, 26.6975937360624]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([87.20512650331142, 26.697866909306846]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([87.20545373281124, 26.69787649432109]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([87.20549128373744, 26.697569773465833]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([87.20572195371273, 26.69763207620639]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([87.20573804696681, 26.697344524811932]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([87.20543227513912, 26.69730618457115]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2051586898196, 26.697056972691716]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([87.20482609590175, 26.696510621663926]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([87.25913256811742, 26.7043082570892]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([87.25946516203527, 26.704001553551254]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2592183988059, 26.70404947603349]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([87.25913256811742, 26.703704433711284]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([87.25920766996984, 26.703503158540652]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([87.25943297552709, 26.703503158540652]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([87.25942224669103, 26.7032060374006]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([87.25910997436556, 26.702164175857245]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([87.25910997436556, 26.701857466546006]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([87.25913143203768, 26.701579510519387]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2591528897098, 26.701004426931704]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([87.25974297569307, 26.70242296119625]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([87.25187873886141, 26.703506019383816]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([87.25192165420565, 26.703755217155457]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([87.25196456954988, 26.704052336862937]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2519323830417, 26.704330286855363]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([87.25190019653353, 26.70461782061652]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([87.25223279045137, 26.704569898373386]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([87.26035451934847, 26.707512286711463]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([87.26035451934847, 26.70783814914811]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2603974346927, 26.70809692159533]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([87.26037597702059, 26.708355693454532]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2606656555942, 26.70838444584704]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([87.26070857093843, 26.708643217052906]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([87.26068711326631, 26.70889240358426]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2610089783481, 26.709438695225703]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([87.26132011459383, 26.710080824155256]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([87.26130938575777, 26.7102533357879]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([87.26152396247896, 26.710531270646328]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([87.26159906433138, 26.71021499989214]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([87.26185655639681, 26.711039218807155]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([87.26221060798677, 26.711039218807155]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([87.09743742099775, 26.618597832753334]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([87.09743742099775, 26.618904765921727]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([87.09807042232526, 26.61998861707982]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([87.09802750698103, 26.6202763634487]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([87.09829572788252, 26.621351051620806]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([87.09837082973493, 26.621610020298863]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([87.09834937206281, 26.621926536775298]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([87.09799532047285, 26.62184021418682]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([87.09862832180036, 26.62323095906575]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([87.09886435619367, 26.62319259391673]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([87.09892872921003, 26.62349951474826]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([87.09898237339033, 26.624036624220324]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([87.09864977947248, 26.624046215437968]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([87.09891894743804, 26.625161706051408]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([87.09896186278228, 26.62541107499358]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([87.10201958105925, 26.627031959855337]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([87.10222342894438, 26.627338870376708]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([87.10257748053435, 26.62753068903402]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([87.10257748053435, 26.627818416416282]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([87.10250237868193, 26.62730050660662]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([87.10225561545256, 26.628652821728142]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([87.10225561545256, 26.628930955478207]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([87.10193375037078, 26.62918031619582]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.7518680586601, 26.543063289204074],
                  [86.75264589927441, 26.543106480210852],
                  [86.75298385761029, 26.54253539780732],
                  [86.75391726634747, 26.542521000735192],
                  [86.75444834373242, 26.54323605313356],
                  [86.753831435659, 26.543216857154242],
                  [86.753831435659, 26.54351439447255],
                  [86.751851965406, 26.543490399556124]]]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([87.115763640497, 26.526130843238626]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([87.10793206706627, 26.524501883216132]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([87.12409159497258, 26.50001367625967]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([86.75234451606646, 26.54277556731308]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([87.16439047087331, 26.693574315164526]),
            {
              "name": "suburban",
              "id": 10,
              "previous": 8,
              "system:index": "106"
            })]),
    forest_2019 = 
    /* color: #0b4a8b */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[87.45353873671486, 26.68696511376483],
                  [87.4560492843528, 26.687080144886327],
                  [87.45602782668068, 26.688786426222702],
                  [87.45340999068215, 26.68867139682321]]]),
            {
              "name": "forest",
              "id": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.8035842346823, 26.693294382601813],
                  [86.8076182770407, 26.693524431952515],
                  [86.80736078497527, 26.69766524084493],
                  [86.80392755743621, 26.697358519420998]]]),
            {
              "name": "forest",
              "id": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.83319521767326, 26.848427584086625],
                  [86.83624220711418, 26.84835100554208],
                  [86.83632803780266, 26.850533473758638],
                  [86.83328104836174, 26.850610050826564]]]),
            {
              "name": "forest",
              "id": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.78832022222747, 26.899867235481107],
                  [86.78982225927581, 26.89983853159524],
                  [86.78976861509551, 26.900986681339656],
                  [86.78827730688323, 26.900986681339656]]]),
            {
              "name": "forest",
              "id": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.99731984894652, 26.87570179443735],
                  [87.00186887543578, 26.875472114031783],
                  [87.00204053681273, 26.879070386775215],
                  [86.99723401825804, 26.879223502223695]]]),
            {
              "name": "forest",
              "id": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([86.80805770147914, 26.696315732436503]),
            {
              "name": "forest",
              "id": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([87.45444435845825, 26.686404146027918]),
            {
              "name": "forest",
              "id": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([86.8353030309736, 26.850853720840757]),
            {
              "name": "forest",
              "id": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([86.78755294031103, 26.900269710793644]),
            {
              "name": "forest",
              "id": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([86.99878226465185, 26.880404948620484]),
            {
              "name": "forest",
              "id": 3,
              "system:index": "9"
            })]),
    agriculture1_2019 = 
    /* color: #ff13bc */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[87.2157010710471, 26.60504438627625],
                  [87.21735331180028, 26.605025200652133],
                  [87.21718165042333, 26.60659841114077],
                  [87.21574398639135, 26.606790264598107]]]),
            {
              "name": "cropland_plain",
              "id": 4,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.18234337915946, 26.62102647024072],
                  [87.184059992929, 26.62112238490669],
                  [87.18410290827323, 26.62282965249498],
                  [87.18242920984794, 26.62282965249498]]]),
            {
              "name": "cropland_plain",
              "id": 4,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.18076348844505, 26.625523639729597],
                  [87.18298435750938, 26.625657914956246],
                  [87.18283415380455, 26.627278796317178],
                  [87.18068838659264, 26.627230841577326]]]),
            {
              "name": "cropland_plain",
              "id": 4,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.35668881797899, 26.434428375177276],
                  [87.35893114471544, 26.434437982253293],
                  [87.35889895820726, 26.436445843563963],
                  [87.35653861427416, 26.436445843563963]]]),
            {
              "name": "cropland_plain",
              "id": 4,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.05401376078343, 26.634571941941427],
                  [87.05575183222508, 26.634696616212867],
                  [87.05566600153661, 26.63630777917287],
                  [87.0538635570786, 26.636183106659715]]]),
            {
              "name": "cropland_plain",
              "id": 4,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.7423504458166, 26.478349569355768],
                  [86.74432455165156, 26.478426396628546],
                  [86.74430309397944, 26.48011658364688],
                  [86.74232898814448, 26.480058964043813]]]),
            {
              "name": "cropland_plain",
              "id": 4,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.58195439954417, 26.67674881764347],
                  [87.58564511914867, 26.67701724746576],
                  [87.58410016675609, 26.680161664042334],
                  [87.58092443128245, 26.679586472368282]]]),
            {
              "name": "cropland_plain",
              "id": 4,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.64422924710672, 26.6320886104958],
                  [87.64766247464578, 26.63170498816131],
                  [87.64684708310526, 26.635886402110163],
                  [87.64405758572977, 26.635963123872113]]]),
            {
              "name": "cropland_plain",
              "id": 4,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.17092138582956, 26.766796429394113],
                  [87.1735392218281, 26.766796429394113],
                  [87.17362505251657, 26.770359839108014],
                  [87.17049223238718, 26.770398154733943]]]),
            {
              "name": "cropland_plain",
              "id": 4,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.18448061458307, 26.76070966459224],
                  [87.1839656304522, 26.756686110164203],
                  [87.18722719661432, 26.75653282908322],
                  [87.18774218074518, 26.76055638893871]]]),
            {
              "name": "cropland_plain",
              "id": 4,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([87.3597695190255, 26.435515618852417]),
            {
              "name": "cropland_plain",
              "id": 4,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([87.63590069383133, 26.62942089763051]),
            {
              "name": "cropland_plain",
              "id": 4,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([87.58425016559903, 26.676260555641875]),
            {
              "name": "cropland_plain",
              "id": 4,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([87.21432695071951, 26.6066304136588]),
            {
              "name": "cropland_plain",
              "id": 4,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([87.18317041080252, 26.62420284996667]),
            {
              "name": "cropland_plain",
              "id": 4,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([87.05536520942843, 26.633565898634785]),
            {
              "name": "cropland_plain",
              "id": 4,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([87.17447806945414, 26.768679261346538]),
            {
              "name": "cropland_plain",
              "id": 4,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([87.18987177330995, 26.75965457855994]),
            {
              "name": "cropland_plain",
              "id": 4,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([86.7434274730592, 26.477492627409738]),
            {
              "name": "cropland_plain",
              "id": 4,
              "system:index": "18"
            })]),
    agriculture2_2019 = 
    /* color: #ffc82d */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([87.30763562135445, 26.88809187060478]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30789311341988, 26.888314348662586]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30834381477783, 26.88806919473211]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30875687496612, 26.888105078326653]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30914311306427, 26.88814335414827]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([87.3079253901715, 26.887530939446528]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30818824665496, 26.887535723949263]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30821506874511, 26.887291714052168]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30700807468841, 26.88725073151821]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([87.3070241679425, 26.88752823302932]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30697588818023, 26.887853578760694]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30729238884399, 26.887312930192035]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30635361568878, 26.88700672100569]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30608003036926, 26.88701629005533]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30577425854156, 26.887011505530612]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30576889412353, 26.886743571823253]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30550067322204, 26.88725073151821]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30548994438598, 26.88751866402304]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30395355080499, 26.88809168497936]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30398573731317, 26.887876383215648]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30435856436624, 26.88820172794461]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30942223624301, 26.88892492915099]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30973873690677, 26.888901006929476]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30972264365268, 26.88918807325342]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([87.31005523757052, 26.88917850438772]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([87.31031809405398, 26.889197642118326]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([87.31092427329135, 26.888915360262995]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([87.31091890887332, 26.888656999980675]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([87.3109258045557, 26.890796314033793]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([87.31124766963748, 26.89055231117809]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([87.3082272026524, 26.88485606153114]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([87.3081735584721, 26.884607261221277]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30761565899701, 26.88485606153114]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30784096455426, 26.884875199993832]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([87.3078838798985, 26.884583338085697]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([87.3076317522511, 26.884592907340544]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30733134484143, 26.884607261221277]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30733670925946, 26.88488955383872]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30725624298901, 26.88538715266773]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30761565899701, 26.885368014291746]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30850615238995, 26.88485127691497]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30729379391522, 26.884028319918517]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30728842949719, 26.884324967898696]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([87.30760493016095, 26.88432975253715]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([87.3079214308247, 26.884339321813474]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([87.59653712614279, 26.91452871471837]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([87.59678388937216, 26.91452871471837]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([87.59709502561789, 26.914557414869652]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([87.59714866979819, 26.91426084628772]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([87.59678388937216, 26.91426084628772]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([87.59740616186362, 26.914012110747162]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([87.59834368322912, 26.91293696109448]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([87.598322225557, 26.912678655761685]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([87.59856898878637, 26.912669088886172]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([87.59956677053991, 26.914008443570484]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([87.59954531286779, 26.91373100711956]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([87.59954531286779, 26.913472703603926]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([87.59921271894994, 26.913998876807668]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([87.5829252862311, 26.918411305362824]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([87.58320960038668, 26.918406522168137]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([87.58326324456698, 26.918650464839246]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([87.58297356599337, 26.918674380759015]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([87.58323642247683, 26.918927889196897]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([87.58355292314059, 26.918923106024092]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([87.58356901639468, 26.918650464839246]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([87.58382114404208, 26.91915748125294]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([87.58382114404208, 26.918918322851084]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([87.58417519563204, 26.91894223871408]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([87.58414300912386, 26.919176613903215]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([87.58419128888613, 26.919468386417584]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([87.58443268769747, 26.919454036967316]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([87.58478387609775, 26.919512920946588]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([87.5850467325812, 26.919730553966275]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([87.58267693411199, 26.919729834721668]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([87.58293979059545, 26.919717876874248]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([87.51603905755502, 26.886414041459293]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([87.51633410054666, 26.88667240687007]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([87.5166291435383, 26.886940340746175]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([87.51632605391961, 26.886964263382765]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([87.5172245939396, 26.885902093437505]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([87.51760010320169, 26.88583510941261]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([87.5172245939396, 26.885605449597236]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([87.51695637303811, 26.885615018765524]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([87.51694027978402, 26.885849463135585]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([87.51694027978402, 26.886117398962924]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([87.51670099741295, 26.887480974813617]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([87.51667953974084, 26.88780392843546]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([87.5169799471505, 26.8877584757593]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([87.51696653610543, 26.887976169989674]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([87.51667149311379, 26.888012053613753]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24876898103352, 26.91205897788993]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24876898103352, 26.912345985354403]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24875825219746, 26.91259472456662]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24873143010731, 26.91290564781112]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24875825219746, 26.913140035536927]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24898355775471, 26.91311611844435]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24938052468892, 26.913101768186372]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2490532951891, 26.91340312322082]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24872606568928, 26.91340312322082]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24576473538211, 26.909615245383517]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24599272314838, 26.909615245383517]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24631458823016, 26.909627204301334]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2460141808205, 26.90990704261642]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24571645561984, 26.909909434393928]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24661231343082, 26.909323447396364]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24695027176669, 26.909034555470342]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24693954293063, 26.908797767418843]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24725604359439, 26.909027380082136]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24759400193027, 26.908792983816717]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24728286568454, 26.90878341661188]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2478352103844, 26.908472880737772]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24813830000308, 26.90846092169767]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24840920311358, 26.90846092169767]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24875789028552, 26.90846809712188]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24906902653125, 26.90844417903941]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24844407183078, 26.9087598973199]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24870424610522, 26.908774248129873]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24816038860415, 26.911785103540605]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24877729667757, 26.91178988701592]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24902405990694, 26.911785103540605]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24933519615267, 26.91178988701592]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2496463323984, 26.911780320065063]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24905624641512, 26.911488527674415]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2481872106943, 26.9115411460301]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24902405990694, 26.911263703514688]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24934592498873, 26.912316068064357]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24959805263613, 26.912583941110473]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23971612541206, 26.900743214084706]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23996154753692, 26.90071929436583]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23999909846313, 26.90093576763691]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23969869105346, 26.90099676279304]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2402495224265, 26.901122890245183]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24035412857808, 26.901342950681045]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2399973947791, 26.90130946325109]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23969430516041, 26.9012496642443]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23968357632435, 26.90156587313512]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24034608195103, 26.901484546662793]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([87.24058479855336, 26.90154434554521]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([87.240340717533, 26.901704606393945]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23994643280781, 26.90156587313512]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23271581201055, 26.90146331415434]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23245563773611, 26.90147288197944]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23096151654242, 26.900998802098293]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23124314848899, 26.900962922599316]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23063841102264, 26.902345815405642]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([87.22999199865005, 26.90230993633464]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23000272748611, 26.902065958349496]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2312070393338, 26.90284333734856]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23031351005987, 26.902593625131363]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23063537514166, 26.903129416726337]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([87.23095187580542, 26.90340209540122]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([87.43870874297411, 26.72847336850007]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([87.43898501050265, 26.728494928984265]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([87.43931492221148, 26.728514093855665]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([87.43957777869494, 26.728511698246948]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([87.43987282168658, 26.728758445683283]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([87.43931492221148, 26.728794379731287]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([87.43804623734744, 26.729067478125447]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([87.4380408729294, 26.72928787284277]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([87.43844856869967, 26.729335784681346]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([87.43809719931872, 26.729575343571575]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([87.4383815134743, 26.72981969311998]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([87.43844052207263, 26.730145491701496]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([87.43780752074511, 26.729858022413282]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([87.43778069865496, 26.729354949411125]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([87.44051118743212, 26.729024357369973]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([87.44050045859606, 26.728808753347337]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([87.43898232829363, 26.728238598518736]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([87.43870337855608, 26.728200268679878]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([87.43840297114642, 26.728190686218145]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([87.43780752074511, 26.727979871855805]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([87.43873020064623, 26.730356302051224]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([87.44172354590685, 26.730365884330542]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([87.44202931773455, 26.730389840025385]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([87.44203468215258, 26.73066772571671]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([87.44228680979998, 26.73068689022215]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([87.44143386733325, 26.729302246396458]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([87.44082232367785, 26.7298436489298]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([87.44080623042376, 26.73008799790196]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([87.44080623042376, 26.730365884330542]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([87.43900915038378, 26.730634187824457]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([87.43864973437579, 26.73065814346281]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([87.33379322496151, 26.813745488899457]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([87.33455497232174, 26.81411892288342]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([87.33493048158383, 26.81474131012289]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([87.33583706823086, 26.816776013788555]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([87.33579951730465, 26.816560576305818]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([87.33579415288662, 26.81711592542857]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([87.57832088190125, 26.914290614851012]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([87.57852472978638, 26.913769226398777]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([87.57801511007355, 26.91274557600926]),
            {
              "name": "cropland_hill",
              "id": 11,
              "system:index": "190"
            })]),
    bareland_2019 = 
    /* color: #ff0000 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([87.25148620100583, 26.91232207013202]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([87.25147010775174, 26.912561242512286]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2511750647601, 26.91260429348693]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([87.25180270166959, 26.91260429348693]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2517866084155, 26.912341203941082]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([87.25177051516141, 26.912092464170183]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([87.2514808365878, 26.912092464170183]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([87.25120188685025, 26.91208289724495]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([87.25120725126828, 26.912355554295775]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([86.71641037608681, 26.65521943950362]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([86.71670005466042, 26.655209850903315]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([86.71703264857827, 26.655229028103165]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([86.71702191974221, 26.65548312569687]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([86.71705410625039, 26.655742017003018]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([86.717343784824, 26.656044056118013]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([86.7167322411686, 26.654855072125088]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([86.716718848227, 26.65452139223105]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([86.8496560579194, 26.654079626329732]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([86.85149605330362, 26.651912560538666]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([86.84757814992373, 26.652149201259924]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([86.60195938756671, 26.731056943720823]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([86.60277477910724, 26.73088925473441]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([86.59644476583209, 26.72887696761857]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([86.59649841001239, 26.72917402176533]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([86.59134113440828, 26.731841713084197]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([86.57618450969694, 26.764287075627706]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([86.5767531380081, 26.76402364126567]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([86.57643663734434, 26.763726678161472]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([86.57643663734434, 26.763434504027163]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([86.57428014129637, 26.767002808803547]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([86.57462346405028, 26.76701238799437]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([86.57463419288634, 26.767299763343424]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([86.57613622993468, 26.766140678321392]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([86.57312142700194, 26.767002808803547]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([86.57315361351012, 26.767299763343424]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([86.5746449217224, 26.766725011918265]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([86.57282101959227, 26.765632976198457]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([86.57642657894208, 26.767999552018942]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([86.57734389442517, 26.768071395299994]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([86.58188852584388, 26.761045570319332]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([86.58187243258979, 26.76079170815631]),
            {
              "name": "bareland",
              "id": 5,
              "system:index": "40"
            })]),
    river_bare_2019 = 
    /* color: #3f6b76 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[87.39834608824741, 26.761175111945192],
                  [87.39710154410372, 26.7563085322303],
                  [87.39950480176033, 26.75600196904969],
                  [87.40053476932721, 26.760983518260126]]]),
            {
              "name": "river_bareland",
              "id": 12,
              "change": "10_to_7",
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.87113867966659, 26.470404054784368],
                  [86.87435734445377, 26.470173555739418],
                  [86.87452900657637, 26.472017535170934],
                  [86.87118159519663, 26.471902287322262]]]),
            {
              "name": "river_bareland",
              "id": 12,
              "change": "10_to_7",
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([87.13862480238957, 26.790906585235554]),
            {
              "name": "river_bareland",
              "id": 12,
              "change": "10_to_7",
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([87.13748754576726, 26.79044687992658]),
            {
              "name": "river_bareland",
              "id": 12,
              "change": "10_to_7",
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([87.13696183280034, 26.7883494508222]),
            {
              "name": "river_bareland",
              "id": 12,
              "change": "10_to_7",
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.01420223927694, 26.569947775226865],
                  [87.01521074986654, 26.569784647316272],
                  [87.01509273266988, 26.571319959632785],
                  [87.01379454350668, 26.57087855944915]]]),
            {
              "name": "river_bareland",
              "id": 12,
              "change": "10_to_7",
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([87.39956767689468, 26.76174925092201]),
            {
              "name": "river_bareland",
              "id": 12,
              "change": "10_to_7",
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([87.01369116250048, 26.570416732071443]),
            {
              "name": "river_bareland",
              "id": 12,
              "change": "10_to_7",
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.01910125682296, 26.577100907290507],
                  [87.02056038097187, 26.576371672087618],
                  [87.02141868929482, 26.57767661601307],
                  [87.01953041098436, 26.578213941543222]]]),
            {
              "name": "river_bareland",
              "id": 12,
              "change": "10_to_7",
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([87.02166545060065, 26.5769569801722]),
            {
              "name": "river_bareland",
              "id": 12,
              "change": "10_to_7",
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([86.87035237309713, 26.471211498741674]),
            {
              "name": "river_bareland",
              "id": 12,
              "change": "10_to_7",
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.11106074883158, 26.786999768536692],
                  [87.1119834287327, 26.785658910019865],
                  [87.11363566948587, 26.78671244304525],
                  [87.11462272240335, 26.787478642739227],
                  [87.11460126473123, 26.788570468365435],
                  [87.11316360069925, 26.788378920769723],
                  [87.11196197106058, 26.787536107507748]]]),
            {
              "name": "river_bareland",
              "id": 12,
              "change": "10_to_7",
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([87.09134008399097, 26.77212949244618]),
            {
              "name": "river_bareland",
              "id": 12,
              "change": "10_to_7",
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([87.09131862631885, 26.771602659487723]),
            {
              "name": "river_bareland",
              "id": 12,
              "change": "10_to_7",
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([87.09137227049915, 26.770366987142154]),
            {
              "name": "river_bareland",
              "id": 12,
              "change": "10_to_7",
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([87.09245588294117, 26.77086508923998]),
            {
              "name": "river_bareland",
              "id": 12,
              "change": "10_to_7",
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([87.09351803771106, 26.77105666638823]),
            {
              "name": "river_bareland",
              "id": 12,
              "change": "10_to_7",
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([87.09146883002369, 26.773068206933207]),
            {
              "name": "river_bareland",
              "id": 12,
              "change": "10_to_7",
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([87.09331418982593, 26.77304904957226]),
            {
              "name": "river_bareland",
              "id": 12,
              "change": "10_to_7",
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([87.11873430694664, 26.789512518825813]),
            {
              "name": "river_bareland",
              "id": 12,
              "change": "10_to_7",
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([87.11535948827382, 26.660375511961142]),
            {
              "name": "river_bareland",
              "id": 12,
              "change": "10_to_7",
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([87.11596030309316, 26.660581657359895]),
            {
              "name": "river_bareland",
              "id": 12,
              "change": "10_to_7",
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([87.11581009938833, 26.660150189820264]),
            {
              "name": "river_bareland",
              "id": 12,
              "change": "10_to_7",
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([87.11534339501974, 26.659263279199074]),
            {
              "name": "river_bareland",
              "id": 12,
              "change": "10_to_7",
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([87.11561161592122, 26.65889892473021]),
            {
              "name": "river_bareland",
              "id": 12,
              "change": "10_to_7",
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([87.11521464898702, 26.65855374573931]),
            {
              "name": "river_bareland",
              "id": 12,
              "change": "10_to_7",
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([87.11495179250356, 26.658927689598986]),
            {
              "name": "river_bareland",
              "id": 12,
              "change": "10_to_7",
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([87.11529511525747, 26.65899960173922]),
            {
              "name": "river_bareland",
              "id": 12,
              "change": "10_to_7",
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([87.1138118166258, 26.65824380189991]),
            {
              "name": "river_bareland",
              "id": 12,
              "change": "10_to_7",
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([87.1140827197363, 26.658239007726895]),
            {
              "name": "river_bareland",
              "id": 12,
              "change": "10_to_7",
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([87.11392715161344, 26.657999298819014]),
            {
              "name": "river_bareland",
              "id": 12,
              "change": "10_to_7",
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([87.11981150820775, 26.663037059956505]),
            {
              "name": "river_bareland",
              "id": 12,
              "change": "10_to_7",
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([87.12013605549855, 26.663046647899197]),
            {
              "name": "river_bareland",
              "id": 12,
              "change": "10_to_7",
              "system:index": "32"
            })]),
    brick_ciln_2019 = 
    /* color: #da5325 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[87.31582037194427, 26.441350052834764],
                  [87.3163514380814, 26.441350052834764],
                  [87.31633534516804, 26.44179194159801],
                  [87.31584182916204, 26.441806350985683]]]),
            {
              "name": "brick_factory",
              "id": 13,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.33969849676441, 26.480674230154403],
                  [87.34182281446314, 26.480558991035526],
                  [87.34186572997241, 26.481672964348125],
                  [87.33976287002784, 26.48168256751945]]]),
            {
              "name": "brick_factory",
              "id": 13,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.33896893937536, 26.47910889525456],
                  [87.33954829837677, 26.47913770540833],
                  [87.33965558649017, 26.479973195843176],
                  [87.33879727795717, 26.47989636945601]]]),
            {
              "name": "brick_factory",
              "id": 13,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.34070921469173, 26.47161409652549],
                  [87.34120274115047, 26.47161889851267],
                  [87.34147632646999, 26.47161889851272],
                  [87.34150851297817, 26.472075086381516],
                  [87.3407038502737, 26.472084690317235]]]),
            {
              "name": "brick_factory",
              "id": 13,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.33781779513087, 26.47039918899383],
                  [87.33828986187581, 26.470159087966152],
                  [87.33875656452501, 26.47053844733794],
                  [87.33843470076856, 26.471052261373117],
                  [87.33784998137047, 26.470951419825028]]]),
            {
              "name": "brick_factory",
              "id": 13,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([87.31484395765706, 26.44415464330474]),
            {
              "name": "brick_factory",
              "id": 13,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([87.34108597864041, 26.475515629646708]),
            {
              "name": "brick_factory",
              "id": 13,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([87.34144003023037, 26.475510827822166]),
            {
              "name": "brick_factory",
              "id": 13,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([87.34173507322201, 26.47547241321857]),
            {
              "name": "brick_factory",
              "id": 13,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([87.34168679345974, 26.475208312471626]),
            {
              "name": "brick_factory",
              "id": 13,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([87.3414078437222, 26.475213114308815]),
            {
              "name": "brick_factory",
              "id": 13,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([87.34111816514859, 26.475213114308815]),
            {
              "name": "brick_factory",
              "id": 13,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([87.34109134305844, 26.4749586166624]),
            {
              "name": "brick_factory",
              "id": 13,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([87.34139711488614, 26.4749586166624]),
            {
              "name": "brick_factory",
              "id": 13,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([87.34175653089413, 26.474949012966597]),
            {
              "name": "brick_factory",
              "id": 13,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([87.34110602537676, 26.476057451910243]),
            {
              "name": "brick_factory",
              "id": 13,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([87.34112480083986, 26.47658084711913]),
            {
              "name": "brick_factory",
              "id": 13,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([87.34143057266756, 26.476057451910243]),
            {
              "name": "brick_factory",
              "id": 13,
              "system:index": "17"
            })]),
    sparse_trees_2021 = 
    /* color: #b8ff1d */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "polygon"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "polygon"
      },
      {
        "type": "marker"
      },
      {
        "type": "polygon"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      }
    ] */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[86.72262979604446, 26.668921796934033],
                  [86.72182513333999, 26.66997641140152],
                  [86.72062350370132, 26.670321555836885],
                  [86.71975550479564, 26.6697626912633],
                  [86.71981941399922, 26.66861221854299],
                  [86.72080110249867, 26.66748089093192],
                  [86.72320436177601, 26.667313108339343],
                  [86.72351013360371, 26.668578662376994],
                  [86.7227161997353, 26.668813555331653]]]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([86.72339154340469, 26.67073381032154]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([87.13298861523967, 26.67687550077254]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([87.13319514533381, 26.676822773470338]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([87.13302080174785, 26.676738889075686]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([87.13347409507136, 26.67685153382001]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.73309092884428, 26.66881987676494],
                  [86.73309092884428, 26.66651886384653],
                  [86.73761849766142, 26.66651886384653],
                  [86.73761849766142, 26.66881987676494]]], null, false),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([86.83432829067652, 26.65187950742007]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([86.83460187599604, 26.651615812902396]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([86.83426391766017, 26.651582251738276]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([86.83458578274195, 26.651342528850428]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([86.83428537533229, 26.65133773438752]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([86.83432829067652, 26.651059655195315]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([86.8340171544308, 26.65106444966988]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([86.83490764782374, 26.651342528850428]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([86.83462333366816, 26.65107883309239]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([86.83492750040452, 26.651760105847874]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([86.60886285014114, 26.729978963720338]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([86.60907742686233, 26.7299933371867]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([86.60915789313277, 26.729729823347835]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([86.6088574857231, 26.72971544984817]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([86.61400196261367, 26.730534736431398]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([86.61398586935958, 26.73029038841872]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([86.61400196261367, 26.730007710651275]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([86.73985260044131, 26.676254745639817]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([86.739616566048, 26.676676565475884]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([86.74021738086734, 26.67664780508207]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([86.74164968048129, 26.676336233684292]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([86.7428942254642, 26.675813750506563]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([86.74083965335879, 26.674970102891177]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([86.73592584644351, 26.675593252300427]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([86.73570054088626, 26.67417438408028]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.82159122798768, 26.677614406940574],
                  [86.8222081360611, 26.676914574387776],
                  [86.82266142937523, 26.676763583256953],
                  [86.82317373130647, 26.67681391318787],
                  [86.82342317649201, 26.676912177707102],
                  [86.82354387615052, 26.6771254832805],
                  [86.82352778289643, 26.678448448346018],
                  [86.82277139995423, 26.678726460792166],
                  [86.82165023658601, 26.67835258182807]]]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([87.37646112597061, 26.679899105584266]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.37648258364273, 26.683024270162566],
                  [87.37642893946243, 26.682247780213242],
                  [87.3760105148561, 26.682046467140882],
                  [87.37596759951187, 26.680378430866526],
                  [87.37713704264236, 26.6803400849181],
                  [87.3771263138063, 26.68085775413374],
                  [87.37784514582229, 26.68092485923034],
                  [87.37793097651077, 26.682966752569914]]]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([86.90753644597751, 26.68033299964613]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([86.90788513314945, 26.680347379379203]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([86.90849131238681, 26.680347379379224]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([86.90905994069797, 26.6808794282277]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([86.90905994069797, 26.681713445750486]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([86.90904384744388, 26.682533077716762]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([86.90782254755183, 26.68335213689343]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([86.9072592836587, 26.682781754456983]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([86.90661555349513, 26.682776961315177]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([86.90995701735834, 26.68332360160495]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([86.90810965829813, 26.68822668970667]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([86.90601579389894, 26.68605287430062]),
            {
              "name": "thin_trees_river_hills",
              "id": 6,
              "system:index": "46"
            })]),
    fruits_2021 = 
    /* color: #4dd6c6 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[86.69745167490154, 26.651280650958626],
                  [86.69725855585247, 26.650532711907818],
                  [86.6976233362785, 26.65041764392662],
                  [86.69809517233564, 26.650430218177416],
                  [86.69878181784345, 26.65037268414967],
                  [86.69877645352479, 26.650363094747586],
                  [86.69879254667951, 26.650363095142204],
                  [86.69878181800384, 26.650363094351235],
                  [86.69878718226148, 26.650367889646052],
                  [86.69887569530681, 26.650576451132583],
                  [86.69893202154829, 26.650756243787004],
                  [86.69899103014662, 26.650976789994964],
                  [86.69880327551557, 26.65100555686024],
                  [86.69808444349958, 26.651226102586563]]]),
            {
              "id": 14,
              "name": "fruits",
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.68834138258252, 26.649683279018294],
                  [86.68910849436078, 26.64948190847688],
                  [86.6892211471394, 26.649544237491945],
                  [86.68970394476209, 26.649409990340278],
                  [86.69009018286023, 26.65039286761908],
                  [86.68940353735242, 26.65053670260868],
                  [86.68858814581189, 26.65066135945305],
                  [86.68850767954144, 26.65012437515368]]]),
            {
              "id": 14,
              "name": "fruits",
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.67988085514553, 26.65366333224899],
                  [86.67974138027675, 26.652704455157835],
                  [86.68090009457119, 26.652589389365623],
                  [86.68125414616115, 26.653078418181472],
                  [86.68123268848903, 26.653778396958668],
                  [86.68109321362026, 26.654209888586927],
                  [86.68044948345668, 26.654142767774104],
                  [86.68022417789943, 26.65387428412813]]]),
            {
              "id": 14,
              "name": "fruits",
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([86.68240008283378, 26.652854343531136]),
            {
              "id": 14,
              "name": "fruits",
              "system:index": "3"
            })]),
    river_grass_2021 = 
    /* color: #31d632 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "polygon"
      },
      {
        "type": "polygon"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      },
      {
        "type": "marker"
      }
    ] */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[86.9792485472254, 26.662564488835894],
                  [86.980257057815, 26.660704405009323],
                  [86.98208095994512, 26.661548158131385],
                  [86.98148014512579, 26.663158942221934]]]),
            {
              "name": "river_wetland",
              "id": 15,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[86.99821331804922, 26.693296777094062],
                  [86.99720480745962, 26.691897300234096],
                  [86.99855664080313, 26.69126465436908],
                  [87.00010159319571, 26.692395746017773]]]),
            {
              "name": "river_wetland",
              "id": 15,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([87.11808050137127, 26.662173279078193]),
            {
              "name": "river_wetland",
              "id": 15,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([86.99667550966522, 26.68977843832548]),
            {
              "name": "river_wetland",
              "id": 15,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([86.98622952470407, 26.66438441110713]),
            {
              "name": "river_wetland",
              "id": 15,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.00465132992127, 26.70213682774202],
                  [87.00465132992127, 26.700545763838463],
                  [87.00746228496888, 26.700545763838463],
                  [87.00746228496888, 26.70213682774202]]], null, false),
            {
              "name": "river_wetland",
              "id": 15,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[87.05434337346766, 26.667653869825248],
                  [87.05434337346766, 26.6665033574082],
                  [87.05633893697474, 26.6665033574082],
                  [87.05633893697474, 26.667653869825248]]], null, false),
            {
              "name": "river_wetland",
              "id": 15,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([87.05705931778674, 26.66734642523012]),
            {
              "name": "river_wetland",
              "id": 15,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([87.11788321975091, 26.662083169815627]),
            {
              "name": "river_wetland",
              "id": 15,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([87.11777593139031, 26.66195612843672]),
            {
              "name": "river_wetland",
              "id": 15,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([87.11762304547646, 26.661845865993225]),
            {
              "name": "river_wetland",
              "id": 15,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([87.11733068469384, 26.661690060184885]),
            {
              "name": "river_wetland",
              "id": 15,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([87.11707587483743, 26.661663693027073]),
            {
              "name": "river_wetland",
              "id": 15,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([87.11708660367349, 26.661431182371434]),
            {
              "name": "river_wetland",
              "id": 15,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([87.11730118039468, 26.66149829889799]),
            {
              "name": "river_wetland",
              "id": 15,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([87.11792077067712, 26.66169725122689]),
            {
              "name": "river_wetland",
              "id": 15,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([87.11825068238595, 26.66191058526648]),
            {
              "name": "river_wetland",
              "id": 15,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([87.118258729013, 26.66210953687655]),
            {
              "name": "river_wetland",
              "id": 15,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([87.11796100381234, 26.661905791247474]),
            {
              "name": "river_wetland",
              "id": 15,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([87.11765254977563, 26.661730809416834]),
            {
              "name": "river_wetland",
              "id": 15,
              "system:index": "19"
            })]);