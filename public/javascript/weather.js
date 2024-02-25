// Make a GET request to the API endpoint
fetch('http://api.weatherapi.com/v1/forecast.json?key=b2bd0330a48f4135aca23234242502&q=57.13069126923598, -2.1037042191987134&days=7&aqi=no&alerts=no https://www.weatherapi.com/api-explorer.aspx#forecast')
.then(response => {
        // Check if the request was successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Parse the JSON response
        return response.json();
    })
    .then(data => {
        // Extract values
        var output = "<table><tr><th>Date</th><th>Average Temp (°C)</th><th>Chance of Rain (%)</th><th>Chance of Snow (%)</th></tr>"
        data.forecast.forecastday.forEach(j =>{
            output+= "<tr><td>" + j.date + "</td><td>" + j.day.avgtemp_c + "</td><td>" + j.day.daily_chance_of_rain + "</td><td>" + j.day.daily_chance_of_snow + "</td></tr>"
        })
        output+="</table>"

        // Update the content of the output div with the current temperature
        document.getElementById('output').innerHTML = output;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });