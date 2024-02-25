// navigator.geolocation.getCurrentPosition((position) => {
//     var mymap = L.map('map').setView([position.coords.latitude, position.coords.longitude], 16);
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     }).addTo(mymap);
//     var marker = L.marker([57.13042616406666, -2.10522329808364]).addTo(mymap);
//     marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

//     var gardens = L.marker([57.13168523036756, -2.1042621700640685]).addTo(mymap);
//     gardens.bindPopup("winter gardens").openPopup();

//   });
navigator.geolocation.getCurrentPosition(function(position){
    lat = position.coords.latitude;
    lon = position.coords.longitude;
});
var mymap = L.map('map').setView([57.13042616406666, -2.10522329808364], 17);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);
var restrooms = L.marker([57.13042616406666, -2.10522329808364]).addTo(mymap);
restrooms.bindPopup("restrooms").on('click', function(){changeText("public bathrooms");addRoutingControl(lat, lon, 57.13042616406666, -2.10522329808364, mymap)});

var gardens = L.marker([57.13168523036756, -2.1042621700640685]).addTo(mymap);
gardens.bindPopup("winter gardens").on('click', function(){changeText("These are one of Europe’s largest indoor botanical gardens containing many rare and exotic plants on show from all around the world. Free admission, see first page for opening times. On entering, the visitor is greeted by a host of tropical wonders, colourful display beds and important economic crop plants including banana, coffee, cocoa and tea. The hibiscus with its large colourful trumpet shaped flowers has a truly stunning appearance. The Tropical House contains plants mainly from the moist forests of tropical South America, giving the feeling of being in a tropical jungle. It contains plants such as bromeliads and orchids plus gingers and aroids from Asia. The character of the vegetation is dominated by the versatile Bromeliaceae pineapple family. Plants from dry lands throughout the world – from Central America to Southern Africa, from Arabia to Madagascar can be found in the Arid House. This has one of the largest collections of cacti and succulents in Britain. The oldest specimen is the Echinocactus grusonnii or barrel cactus at more than 100 years old. The sight of more than 30 hanging baskets in their full glory in the Victorian Corridor is a must for any visitor over summer months. The magnificent Temperate House with its cascading water feature contains plants from warm temperate regions of the world, especially Australia, New Zealand, South Africa and the Mediterranean. Ferns were among the first land plants 400 million years ago and the Fern House display is captivating with the natural setting beside water and the exhibitions of foliage and leaf texture The Winter Gardens feature three open courtyards. The Japanese Garden is a place of peace and tranquillity The Memorial Courtyard to David Welch remains a quiet place for Aberdonians and visitors alike. He was a celebrated Director of Aberdeen Parks who died in 2000. The Floral Courtyard features the Burma Star Association Memorial Rose Garden with ‘Burma Star’ the commemorative rose. It is dedicated to those who served in the 1941-45 WWII campaign. The Caithness stone slabs here were previously trodden on by prisoners at the old police HQ at Lodge Walk, off Castle Street."); addRoutingControl(lat, lon, 57.13168523036756, -2.1042621700640685, mymap); });

var eastlodge = L.marker([57.132390099084596, -2.1023536265629867]).addTo(mymap);
eastlodge.bindPopup("eastlodge").on('click', function(){changeText("Nineteenth century baronial lodge in tooled coursed grey granite, built 1882/83. This is the base for the Outdoor Nursery Project in the park. It is left of the mound in this early photograph. "); addRoutingControl(lat, lon, 57.132390099084596, -2.1023536265629867, mymap)});

var steamroller = L.marker([57.132093148549885, -2.1023858130691213]).addTo(mymap);
steamroller.bindPopup("steam roller").on('click', function(){changeText("Colourful former working steam roller, now part of this children’s play area. A companion piece to Seaton Park’s former rail engine Mr Therm."); addRoutingControl(lat, lon, 57.132093148549885, -2.1023858130691213, mymap)});

var gordonhighlandermemorial = L.marker([57.13165718009148, -2.102922254839016]).addTo(mymap);
gordonhighlandermemorial.bindPopup("gordon highlander memorial").on('click', function(){changeText("One of two memorials to the regiment in the park (see also 20). Grey granite Celtic cross memorial, dated 1882, to Gordon Highlanders. Large roughly cut granite blocks form plinth, surmounted by cross, with inscription, Gordon Highlanders crest bearing their motto ‘Bydand’ (stand fast), and decorative Celtic motifs to South side; inscription to North side."); addRoutingControl(lat, lon, 57.13165718009148, -2.102922254839016, mymap)})

var hygela = L.marker([57.13131073069427, -2.10154091724707]).addTo(mymap);
hygela.bindPopup("hygela ").on('click', function(){changeText("Designed by John Cassidy of Manchester and carved by Arthur Taylor in 1883. The monument comprises a standing figure of the Greek Goddess Hygeia (Health) in classical dress, carved in pale granite. She stands on a decorative corinthian column. Four recumbant lions in pink granite lie at the base. She represents a virgin holding a cup from which the symbol of health, a snake, drinks. It is inscribed: ‘This park was presented by Elizabeth Crombie Duthie to the City of Aberdeen’, and opened by H.R.H. Princess Beatrice on 27th September 1883."); addRoutingControl(lat, lon, 57.13131073069427, -2.10154091724707, mymap)})

var bowlingPavilion = L.marker([57.130967189440675, -2.1005565464818496]).addTo(mymap);
bowlingPavilion.bindPopup("bowling pavilion and green").on('click', function(){changeText("Early 20th century. The former Bowling Pavilion has been converted to provide park ranger facilities, whilst the green itself is used to hold community events."); addRoutingControl(lat, lon, 57.130967189440675, -2.1005565464818496, mymap)});
var rockery = L.marker([57.130472251537086, -2.100822085158178]).addTo(mymap);
rockery.bindPopup("1920s rockery").on('click', function(){changeText("Originally formed in 1922, the Rockery was restored in 2012-13 when Aberdeen Rock Garden Club selected plants and designed the new layout. It was planted by the group and the Friends of Duthie Park and completed in June 2016. Parkforce, the park’s gardening volunteer group, now maintains the rockery."); addRoutingControl(lat, lon, 57.130472251537086, -2.100822085158178, mymap)});
var granite = L.marker([57.13023497012523, -2.1010152042202965]).addTo(mymap);
granite.bindPopup("granite quarrying").on('click', function(){changeText("Commercial quarrying of granite in the North-east really began in 1730 when James Emslie opened a quarry at Loanhead in the Rosemount area. By the end of the 18th Century, the city was ringed with quarries including two represented here – Rubislaw and Sclattie. In the second half of the 19th Century, granite became one of Aberdeen’s main industries being exported all over the world. Further information is available in the Aberdeen Granite Trail."); addRoutingControl(lat, lon, 57.13023497012523, -2.1010152042202965, mymap); });
L.marker([57.12985502557506, -2.1011010349035537]).addTo(mymap).bindPopup("The duthie fountain").on('click', function(){changeText("The Duthie Fountain was made by A Macdonald & Co. Aberdeen City Granite Works c.1883 of pink Peterhead granite. A two-tiered granite fountain set in large roll moulded basin. Water jets spout from carved swans with folded wings on a lower stage which supports upper basin and tazza – the middle bowl. Presented in 1883 by Elizabeth Crombie Duthie"); addRoutingControl(lat, lon, 57.12985502557506, -2.1011010349035537, mymap); });
L.marker([57.12932493230379, -2.1010729901555747]).addTo(mymap).bindPopup("boating pond").on('click', function(){changeText("The large pond has been used by the model yacht club since 1907. In 1926, the former hour-glass shape with two fountains was developed into the large rectangular pond we see today to conform to international model yacht standards allowing competitions to be held. The club still uses the pond today making it the oldestcontinuous user of Duthie Park."); addRoutingControl(lat, lon, 57.12932493230379, -2.1010729901555747, mymap)});
L.marker([57.12884073167376, -2.102772561673131]).addTo(mymap).bindPopup("circular pond").on('click', function(){changeText("This part of the park, including the terraces and steps above, has been resored to match its original layout. The area had been redeveloped, and pond removed, sometime after 1961. The site was surveyed by a team of archaeologists and park staff in June 2010 and the footprint of the pond and relics of pipework were discovered. The pond was recreated in August 2012 using reclaimed granite from the park and the city’s reclamation store at Sclattie Quarry"); addRoutingControl(lat, lon, 57.12884073167376, -2.102772561673131, mymap);});
L.marker([57.12870731627651, -2.1040931385242514]).addTo(mymap).bindPopup("fountainhall well").on('click', function(){changeText("James Mackie and John Burnet, 1706. Small granite rubble cistern house built into hillside. Flat-arched opening with a large lintel, and a metal plaque above which reads ‘Old Well from Lands of Fountainhall, erected in connection with the first city water supply 1706, Re-erected 1903’. Rectangular pool in front, with four stone steps on each side leading down to water; brick and stone lined vaulted inner chamber. Moved from near Fountainhall House, now 130 Blenheim Place. The photo above shows its previous location at Fountainhall."); addRoutingControl(lat, lon, 57.12870731627651, -2.1040931385242514, mymap);});
L.marker([57.12912166766582, -2.1037199266485644]).addTo(mymap).bindPopup("McGrigor Obelisk").on('click', function(){changeText("Alexander Ellis 1830-1917, Aberdeen. This tall obelisk is of red Peterhead granite, from the Stirlinghill quarry and built of large polished square blocks. The shaft supported on a large base and plinth. Originally sited in what is now the quadrangle of Marischal College (right, before Mitchell Tower and the Broad Street frontage were built). The obelisk was moved in 1906 when the college was redeveloped. The obelisk was built to honour the memory of Sir James McGrigor, who was DirectorGeneral of the Army medical department for 36 years and Lord Rector of Marischal College"); addRoutingControl(lat, lon, 57.12912166766582, -2.1037199266485644, mymap)});
L.marker([57.1290514492722, -2.1070371714654166]).addTo(mymap).bindPopup("World war 2 loopholes").on('click', function(){changeText("Defensive loopholes dating from World War II. An inexpensive alternative to building pillboxes was to adapt existing walls with loophole firing positions. This example is within the boundary wall at Duthie Park to allow defensive fire along King George VI bridge, a possible entry point into the city following an invasion."); addRoutingControl(lat, lon, 57.1290514492722, -2.1070371714654166, mymap); });
L.marker([57.1290438070619, -2.1053869289357716]).addTo(mymap).bindPopup("The iron bridge").on('click', function(){ changeText("Circa 1883, three-span,flat-arched bridge. Rough-faced battered grey Aberdeen-bond piers rising through parapet, supporting castiron arches; decorative ironwork brackets and parapet railings with a lion rampant centre of both parapets; gently-spayed wing walls. It is part of the old Rosemount Footbridge which crossed the Denburn Valley near Triple Kirks before Rosemount Viaduct was built. Seen behind the bandstand in the photo above, it now spans the lower of the linked lakes (below)."); addRoutingControl(lat, lon, 57.1290438070619, -2.1053869289357716, mymap)});
L.marker([57.1294323784225, -2.10541811439311]).addTo(mymap).bindPopup("linked lakes").on('click', function(){changeText("The three linked lakes were an important feature of the original design by William McKelvie. They were excavated between 1881 and 1883 and the excavated material was used to build the mound (see entry 21). Water for the lakes was taken from Ruthrieston Burn three quarters of a mile away. In later years, the upper lake was converted to a boating pond with island, now with a large copper beech tree. The lakes were restored in 2012 reinstating much of McKelvie’s original design. The original Victorian stone shelter was also restored and is of historical interest as shelters of this period are increasingly rare in Scotland. The middle lake has been formed into a Scottish lochan to attract a diverse range of insects and pond life. The lower lake was completely rebuilt at this time"); addRoutingControl(lat, lon, 57.1294323784225, -2.10541811439311, mymap)});
L.marker([57.12956005087811, -2.105419733469095]).addTo(mymap).bindPopup("Union Bridge Ballustrade").on('click', function(){ changeText("When the south side of Union Bridge was developed in 1962, this was moved to the park, originally standing in front of the Winter Gardens. During the restoration of the lakes, the upper dam was widened to form a bridge and the ballustrade or parapet was relocated here. Trade and Finance (32) was originally mounted on it with Kelly’s Cats ranged along the top rail."); addRoutingControl(lat, lon, 57.12956005087811, -2.105419733469095, mymap);});
L.marker([57.13042404801926, -2.103739223842638]).addTo(mymap).bindPopup("Duthie park bandstand").on('click', function(){changeText("A handsome, late Victorian, octagonal bandstand erected in c.1893 to a design by McDowall, Steven & Co. Glasgow and costing £400. It has a railed granite base with cast-iron columns supporting an ogee canopy roof, with finials and cresting a weather vane apex. It is a fine and complete example of its type, with an unusual central column and wrought-iron roof ribs, of great cultural value and a rare survival in Scotland by this particular manufacturer."); addRoutingControl(lat, lon, 57.13042404801926, -2.103739223842638, mymap);});
L.marker([57.130561591306915, -2.1065761602582707]).addTo(mymap).bindPopup("The West lodge").on('click', function(){changeText("The original West Lodge was removed due to the widening of Great Southern Road in 1938. It can be seen in its old location in the picture above. It was rebuilt at 72 Rubislaw Den South where it remains and replaced by the present Arts and Crafts type building which has a big swept roof with windows stuck under the eaves and a prominent gabled porch. Please note the current and former lodges are private residences"); addRoutingControl(lat, lon, 57.130561591306915, -2.1065761602582707, mymap)});
L.marker([57.13130538445143, -2.10597334205015]).addTo(mymap).bindPopup("The temperance fountain").on('click', function(){changeText("Polished granite temperance drinking fountain by James Hunter, 1883. Circular plinth set on flagstones, inscribed ‘In commemoration of the advance of temperance under the auspices of the Aberdeen Temperance Society in the year 1882’ and ‘Thou givest them water for their thirst, NEH.9.20’, polished pink granite basin, with three columns supporting grey granite canopy, spherical finial. Three square pink granite plinths supporting pink granite urns to sides of fountain. Presented in 1883 by Elizabeth Crombie Duthie."); addRoutingControl(lat, lon, 57.13130538445143, -2.10597334205015, mymap)});
L.marker([57.13137657525016, -2.106927623285655]).addTo(mymap).bindPopup("The gordon highlanders memorial").on('click', function(){changeText("One of two memorials to the regiment in the park (see also 3). Grey granite triangular obelisk memorial, dated 1898, in memory of the officers and men of the 1A Battalion Gordon Highlanders who fell in India during 1892- 1898. Gordon Highlanders crest to each elevation, including their motto ‘Bydand’ (stand fast), surmounted by grotesque masks."); addRoutingControl(lat, lon, 57.13137657525016, -2.106927623285655, mymap)});
L.marker([57.13196278476369, -2.106219004331692]).addTo(mymap).bindPopup("The mound/ flagpole hill").on('click', function(){changeText("The mound is one of the original and most striking features in the park and unique within public parks in Scotland. It was constructed between 1881 and 1883 using material excavated from the linked lakes. The mound has taken different forms throughout the years but the restoration project returned it to its original state in July 2012. Visitors to the top are rewarded with panoramic views"); addRoutingControl(lat, lon, 57.13196278476369, -2.106219004331692, mymap)});
L.marker([57.1313098081993, -2.1046615188901976]).addTo(mymap).bindPopup("The taylor well").on('click', function(){changeText("Sculpted by Alexander Taylor in grey granite, the Taylor Well dates from the late 19th century and was originally located at the junction of Great Northern Road and Clifton Road, near the Northern Hotel. It incorporates a drinking fountain, dog basin and a horse trough. A scrolled pediment divides the drinking fountain and trough. The inscription to the east reads ‘Erected to the memory of Alexander Taylor, Merchant in Aberdeen by his daughter, Jane Forbes Taylor, Morkeu, Cults’ and to the west ‘He prayeth best who loveth best all things both great and small’. The well is surmounted by an urn with carved masks"); addRoutingControl(lat, lon, 57.1313098081993, -2.1046615188901976, mymap)});
L.marker([57.13150877365045, -2.103482947724631]).addTo(mymap).bindPopup("Gas lamp pedestal").on('click', function(){changeText("Made of red Peterhead granite this stood in Aberdeen’s New Market beside the indoor fountain"); addRoutingControl(lat, lon, 57.13150877365045, -2.103482947724631, mymap)});
L.marker([57.13136384280768, -2.09871501573324]).addTo(mymap).bindPopup("The old deeside line").on('click', function(){changeText("TThis former railway line, 1853-1966, is now a popular walking, cycling and horse riding route from the heart of Aberdeen to the countryside of Aberdeenshire. The railway ran from Aberdeen to Banchory, extending to Ballater in 1856, a total distance of 43¼ miles. It was planned to end at Braemar but Queen Victoria was afraid her privacy would be disturbed by ‘hordes of tourists’ at Balmoral. So she bought land along the route to prevent it. This photograph shows the final train at Culter Station in 1966. Ferryhill Junction, next to the park, was temporarily the city’s first station when the railway came to Aberdeen. The Illustrated London News lithograph below shows the opening in 1850. The Deeside line originally began from here and the engine sheds are still visible at the edge of the park. The Ferryhill Railway Heritage Trust was established in 2007 to restore the remaining building and turntable, and transform the location into a working railway heritage site for the north east of Scotland. See Ferryhill on Facebook for details"); addRoutingControl(lat, lon, 57.13136384280768, -2.09871501573324, mymap)});

function changeText(text){
    document.getElementById("sidePanel").textContent=text;
}

function addRoutingControl(lat, lon, destLat, destLon, map) {
    
    dir = getDir(lat, lon, destLat, destLon);
    dist = getDist(lat, lon, destLat, destLon);
    var element = document.getElementById("sidePanel");
    directions = "To get here travel " + dist + " meters at " + dir + " degrees. "
    element.innerHTML = directions + "<br>" + element.innerHTML;
    // element.insertBefore(directions, element.firstChild);
    console.log(dist)
    if(dist>400){

        var routingControl = L.Routing.control({
            waypoints: [
                L.latLng(lat, lon), // Start point
                L.latLng(destLat, destLon) // Destination point
            ],
            router: L.Routing.osrmv1({
                language: 'en', // Language for the route instructions
                profile: 'foot' // Type of routing, e.g., 'car', 'foot', 'bike'
            }),
            routeWhileDragging: true, // Recalculate route while dragging waypoints
            lineOptions: {
                styles: [{ color: '#0073e6', weight: 6 }] // Define style for the route line
            }
        }).addTo(map);
        console.log("here")
    }
    
}

function getDir(lat, lon, destLat, destLon){
    const vector1 = [lat, lon];
    const vector2 = [destLat, destLon];

// Calculate the direction vector
    const directionVector = [
        vector2[1] - vector1[1],
        vector2[0] - vector1[0]
    ];

// Calculate the angle (in radians) of the direction vector from the positive x-axis
    const angleRadians = Math.atan2(directionVector[1], directionVector[0]);

// Convert the angle from radians to degrees
    let angleDegrees = angleRadians * (180 / Math.PI);

// Ensure the angle is positive
    if (angleDegrees < 0) {
        angleDegrees += 360;
    }

// Calculate the direction from north
    const directionFromNorth = (90 - angleDegrees + 360) % 360;
    const formattedDirection = directionFromNorth.toFixed(0).padStart(3, '0');

    console.log("Direction Vector:", directionVector);
    console.log("Direction from North (degrees):", formattedDirection);
    return(formattedDirection)
}
function getDist(lat1, lon1, lat2, lon2){
    const earthRadius = 6371000; // Radius of the earth in meters

    // Convert latitude and longitude from degrees to radians
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;

    // Calculate the distance using the Haversine formula
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = earthRadius * c;

    return Math.round(distance);
}