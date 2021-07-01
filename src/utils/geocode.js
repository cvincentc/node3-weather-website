const request = require("request");

const geocode = (address,callback) =>{
    const url2 = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoiY3ZpbmNlbnRjIiwiYSI6ImNrcTJ6NHlxYTB0NHAydnFwMXNrZndqcjUifQ.qxEvGYPftYTB_HL79nd3LQ&limit=1";

    request({url:url2,json:true},(error, {body})=>{
        if(error){
            callback("Error",undefined);
        }
        else if(!body.features || body.features.length == 0){
            callback("No result",undefined);
        }
        else{
            const {features} = body;
            callback(undefined,{
                latitude : features[0].center[1],
                longitude : features[0].center[0],
                location: features[0].text
            });
        }
    
    });
}


module.exports = geocode;