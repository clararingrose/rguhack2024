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
var mymap = L.map('map').setView([57.13042616406666, -2.10522329808364], 17);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);
var restrooms = L.marker([57.13042616406666, -2.10522329808364]).addTo(mymap);
restrooms.bindPopup("<b>Hello world!</b><br>I am a popup.")

var gardens = L.marker([57.13168523036756, -2.1042621700640685]).addTo(mymap);
gardens.bindPopup("winter gardens")

var eastlodge = L.marker([57.132390099084596, -2.1023536265629867]).addTo(mymap);
eastlodge.bindPopup("eastlodge")

var steamroller = L.marker([57.132093148549885, -2.1023858130691213]).addTo(mymap);
steamroller.bindPopup("steam roller")

var gordonhighlandermemorial = L.marker([57.13165718009148, -2.102922254839016]).addTo(mymap);
gordonhighlandermemorial.bindPopup("gordon highlander memorial")

var hygela = L.marker([57.13131073069427, -2.10154091724707]).addTo(mymap);
hygela.bindPopup("hygela ")

var bowlingPavilion = L.marker([57.130967189440675, -2.1005565464818496]).addTo(mymap);
bowlingPavilion.bindPopup("bowling pavilion and green")
var rockery = L.marker([57.130472251537086, -2.100822085158178]).addTo(mymap);
rockery.bindPopup("1920s rockery")
var granite = L.marker([57.13023497012523, -2.1010152042202965]).addTo(mymap);
granite.bindPopup("granite quarrying")
L.marker([57.12985502557506, -2.1011010349035537]).addTo(mymap).bindPopup("The duthie fountain");
L.marker([57.12932493230379, -2.1010729901555747]).addTo(mymap).bindPopup("boating pond");
L.marker([57.12884073167376, -2.102772561673131]).addTo(mymap).bindPopup("circular pond");
L.marker([57.12870731627651, -2.1040931385242514]).addTo(mymap).bindPopup("fountainhall well");
L.marker([57.12912166766582, -2.1037199266485644]).addTo(mymap).bindPopup("McGrigor Obelisk");
L.marker([57.1290514492722, -2.1070371714654166]).addTo(mymap).bindPopup("World war 2 loopholes");
L.marker([57.1290438070619, -2.1053869289357716]).addTo(mymap).bindPopup("The iron bridge");
L.marker([57.1294323784225, -2.10541811439311]).addTo(mymap).bindPopup("linked lakes");
L.marker([57.12956005087811, -2.105419733469095]).addTo(mymap).bindPopup("Union Bridge Ballustrade");
L.marker([57.13042404801926, -2.103739223842638]).addTo(mymap).bindPopup("Duthie park bandstand");
L.marker([57.130561591306915, -2.1065761602582707]).addTo(mymap).bindPopup("The West lodge");
L.marker([57.13130538445143, -2.10597334205015]).addTo(mymap).bindPopup("The temperance fountain");
L.marker([57.13137657525016, -2.106927623285655]).addTo(mymap).bindPopup("The gordon highlanders memorial");
L.marker([57.13196278476369, -2.106219004331692]).addTo(mymap).bindPopup("The mound/ flagpole hill");
L.marker([57.1313098081993, -2.1046615188901976]).addTo(mymap).bindPopup("The taylor well");
L.marker([57.13150877365045, -2.103482947724631]).addTo(mymap).bindPopup("Gas lamp pedestal");
L.marker([57.13136384280768, -2.09871501573324]).addTo(mymap).bindPopup("The old deeside line");
