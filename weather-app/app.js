const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=aa8608f14bfc9487eafcf22652135b23&&query=37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    //console.log(response.body.current);
    const temp = response.body.current.temperature;
    const precip = response.body.current.precip;
    const desc = response.body.current.weather_descriptions;
    console.log(`${desc[0]}. It's currently ${temp} degrees out. There is a ${precip}% chance of rain.`);
})