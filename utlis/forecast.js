const request = require('request')
const forecast = (latitude,longitude,callback) =>{
    console.log("in forecsy")
    const url = 'http://api.weatherstack.com//current?access_key=430497c0660195904f8a10855b845797&query=37.8627,-122.42333' + latitude + ',' + longitude + ',' + '&unitf'
    // console.log(error,response.body)
    
    request({url:url,json:true},(error,response)=>{
    console.log(error,response.body)
        
        if (error){
            callback('unable to connect with weather services',undefined)
        }else if(response.body.error){
            callback(undefined,response.body.currently.data[0].summary + 'It is currently')
        }
        
    })
}
module.exports=forecast