const request = require('request')
const config = require('../config.json')


const baseUrl = 'http://api.weatherstack.com/current?'
//to test error handing 1, remove network connection. 2, remove location to run with an empty string
const location = '37.8267,-122.4233'
//const location = ''
const url = baseUrl + 'access_key=' + config.apiKey + '&&query=' + location;


request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!')
    } else if (response.body.error) {
        console.log('Unable to find location')
    } else {
        //console.log(response.body.current);
        const temp = response.body.current.temperature;
        const precip = response.body.current.precip;
        const desc = response.body.current.weather_descriptions;
        console.log(`${desc[0]}. It's currently ${temp} degrees out. There is a ${precip}% chance of rain.`);
    }
})
//MapBox API
    // const mapBoxBaseURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
    // const mapBoxLocation = 'Los Angeles'
    // const mapBoxURL = mapBoxBaseURL + mapBoxLocation + '.json?access_token=' + config.mapBoxKey

    // request({ url: mapBoxURL, json:true}, (error, response) => {
    //     const lat = response.body.features[0].center[1];
    //     const lon = response.body.features[0].center[0];
    //     console.log("For LA, the lat is: " + lat, " and the long is " + lon);
    // })

// console.log(mapBoxURL)