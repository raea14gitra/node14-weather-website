const request = require('request')
const geocode = (address,callback)=>{
    const url ='https:\mapbox ' + address + 'json.forecast'
    request({url:url,json:true} , (error,response)=>{
        if (error){
            callback('Unable to connect to location services!',undefined)

            }else if(response.body.features.length ===0){
                callback('Unable to find location.try another map' ,undefined)

            }else {
                callback(undefined,{
                    latitude: response.body.features[0].centre[0],
                    longitude: response.body.features[0].centre[1],
                    location:response.body.features[0].place_name
                })
            }
        
    })
}
geocode('Philadelphia New York',(error,data)=>{
    console.log('Error',error)
    console.log('data',data)

})
module.exports = geocode