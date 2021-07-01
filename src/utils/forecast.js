const request = require("request");

const forecast = (latitude, longitude, callback) =>{
    const api_key = "5054da65e4be5a2f73c9ccba453307ab";
    const api_url = "http://api.weatherstack.com/";
    const url = "http://api.weatherstack.com/current?access_key=5054da65e4be5a2f73c9ccba453307ab&query=" + latitude + "," + longitude ;

    request({url: url, json: true},(error, response) => {
        if(error){
            callback("Unable to connect to weather service",undefined);
        }
        else if(response.body.error){
            callback("Unable to find location",undefined);
        }
        else{
            const {temperature, feelslike} = response.body.current;
            callback(undefined, "It is " + temperature + " degrees outside.\n" + "It feels like " + feelslike + "!")
        }
    });
}

module.exports = forecast;
// module.exports = {forecast: forecast};
// forecast(49.2827, -123.1207, (error, data) => {
//     console.log('Error', error);
//     console.log('Data', data);
//   });