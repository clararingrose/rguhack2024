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
var mymap = L.map('map').setView([57.13042616406666, -2.10522329808364], 16);
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
// var  = L.marker([]).addTo(mymap);
// .bindPopup("")
// var  = L.marker([]).addTo(mymap);
// .bindPopup("")
// var  = L.marker([]).addTo(mymap);
// .bindPopup("")
// var  = L.marker([]).addTo(mymap);
// .bindPopup("")
// var  = L.marker([]).addTo(mymap);
// .bindPopup("")
// var  = L.marker([]).addTo(mymap);
// .bindPopup("")
// var  = L.marker([]).addTo(mymap);
// .bindPopup("")
// var  = L.marker([]).addTo(mymap);
// .bindPopup("")
