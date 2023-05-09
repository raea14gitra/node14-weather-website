/*console.log('Starting')
setTimeOut(() => {
    console.log('2 seond timer')
},2000)
console.log('stopping')

setTimeOut (() =>{
    console.log('0 second timer')

},2000)
console.log('stopping')*/

// const request = require("request")
const geocode = require('./utlis/geocode')
const forecast = require('./utlis/forecast')

// const request = require('request')
//  const url = 'http://api.weatherstack.com//current?access_key=430497c0660195904f8a10855b845797&query=37.8627,-122.42333&units=f'
//  request({ url:url , json:true}, (error,response) =>{
//      console.log(response.body.current)
//     const data = JSON.parse(response.body.currently)
//     console.log(data.currently)
//     console.log(response.body.current.weather_descriptions[0]  +  ".'It is currently ' " +  response.body.current.temperature  + 'degrees out .It feels like' +  response.body.current.feelslike + ' degree out there ') 

// })

/*Geocoding
Address -> Long/Lat -> weather*/
/*const geocodeURL = 'https://www.mapbox.com/pricing'
request({url:geocodeURL,json:true},(error,response) =>{
    const latitude = response.body.features[0].centre[0]
    const longitude = response.body.features[0].centre[1]
    console.log(latitude,longitude)
})*/
// const request = require('request')

// const url ='https://support.apple.com/en-us/HT213526'
// request({url:url,json:true},(error,response) =>{
//     if(error){
//         console.log('unable to connect to weather service')
//     }else{
//         console.log(response.body.daily.data[0].summary + 'It is currently')
//     }
// })

// const geocode = (address,callback)=>{
//     const url ='https:\mapbox ' + address + 'json.forecast'
//     request({url:url,json:true} , (error,response)=>{
//         if (error){
//             callback('Unable to connect to location services!',undefined)

//             }else if(response.body.features.length ===0){
//                 callback('Unable to find location.try another map' ,undefined)

//             }else {
//                 callback(undefined,{
//                     latitude: response.body.features[0].centre[0],
//                     longitude: response.body.features[0].centre[1],
//                     location:response.body.features[0].place_name
//                 })
//             }
        
//     })
// }
const address=process.argv[2]
if(!address){
    console.log('Please provide an address')
    // return console.log(error)
}
else{
    geocode (address,(error,{latitude,longitude,location}) =>{
        if (error){
            return console.log(error)
        }
        forecast(latitude,longitude,(error,forecastData) =>{
            if (error){
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })
}
//  geocode('Boston',(error,data) => {
//     if (error){
//         return console.log(error)
//     }
     
    //   forecast(latitude, longitude, (error, data) => {
    //     if (error){
    //         return console.log(error)
    //     }
        // console.log('Error', error)
        // console.log('Data', data)
    //     console.log(data.location)
    //     console.log(forecastData)
    //   })

 

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

// forecast(-75.7088, 44.1545, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//   })