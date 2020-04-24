import Database from '../../middleware/mongodb.js'
import fetch from 'isomorphic-unfetch'

const fs = require('fs');

// The main, exported, function of the endpoint,
// dealing with the request and subsequent response
module.exports = async (req, res) => {
  // Get a database connection, cached or otherwise,
  // using the connection string environment variable as the argument
  const db = await Database()

  // Select the "stores" collection from the database
  const collection = await db.collection('stores2')

  let rawdata = fs.readFileSync('./../bavaria-fixed.json');
  let stores = JSON.parse(rawdata);

  let counter = 0
  for (let index = 0; index < stores.length; index++) {
    const element = stores[index]  
    const store = await collection.findOne({name: element.name })
    if(!store)
    {
        let url = process.env.GOOGLE_MAPS_API_URL + "/geocode/json?latlng="+element.lat+","+element.lng+"&key="+process.env.GOOGLE_MAPS_API_KEY

        let res = await fetch(url)
        let jres = await res.json()

        let place = jres.results[0]

        collection.insert({
            lat:element.lat, 
            lng:element.lng, 
            googlemaps_lat:place.geometry.location.lat, 
            googlemaps_lng:place.geometry.location.lng, 
            googlemaps_formatted_address:place.formatted_address, 
            googlemaps_place_id:place.place_id,
            googlemaps_compound_code:(place.plus_code?place.plus_code.compound_code:null),
            name:element.name,
            country_code:"CO",
            cellphone:(element.cellphone.length==10?element.cellphone:""),
            telephone:(element.cellphone.length!=10?element.cellphone:""),
            address:element.address
        });
        counter++
    }
    else{
        console.log(element.name)
    }
  }

  // Respond with a JSON string of all stores in the collection
  res.status(200).json({uploaded_entities:counter})
}