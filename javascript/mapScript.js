var mymap = L.map('map').setView([57.13042616406666, -2.10522329808364], 16);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);
var marker = L.marker([57.13042616406666, -2.10522329808364]).addTo(mymap);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

var gardens = L.marker([57.13168523036756, -2.1042621700640685]).addTo(mymap);
gardens.bindPopup("winter gardens").openPopup();

