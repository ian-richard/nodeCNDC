const request = require('request')
const config = require('../config.json')


//const url = 'http://api.weatherstack.com/current?access_key=aa8608f14bfc9487eafcf22652135b23&query=37.8267,-122.4233'
const baseUrl = 'http://api.weatherstack.com/current?'
const location = '37.8267,-122.4233'
const url = baseUrl + 'access_key=' + config.api_key + '&&query=' + location;


request({ url: url, json: true }, (error, response) => {
    //console.log(response.body.current);
    const temp = response.body.current.temperature;
    const precip = response.body.current.precip;
    const desc = response.body.current.weather_descriptions;
    console.log(`${desc[0]}. It's currently ${temp} degrees out. There is a ${precip}% chance of rain.`);

})