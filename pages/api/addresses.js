import Database from '../../middleware/mongodb.js'
import fetch from 'isomorphic-unfetch'

// The main, exported, function of the endpoint,
// dealing with the request and subsequent response
module.exports = async (req, res) => {
  // Get a database connection, cached or otherwise,
  // using the connection string environment variable as the argument
  const db = await Database()

  // Select the "stores" collection from the database
  const collection = await db.collection('stores')

  // Select the stores collection from the database
  const stores = await collection.find({ $or:[{lat:null}, {lng:null}] }).toArray()
  let counter = 0
  for (let index = 0; index < stores.length; index++) {
    const element = stores[index]
    const googlemaps_address = element.googlemaps_address;

    if(googlemaps_address!=null && googlemaps_address!="")
    {
      
      let url = process.env.GOOGLE_MAPS_API_URL + "/geocode/json?address="+googlemaps_address+"&key="+process.env.GOOGLE_MAPS_API_KEY
      let res = await fetch(url)
      let jres = await res.json()

      let place = jres.results[0]

      if(place!=null)
      {
        collection.update({_id:element._id}, {$set:{lat:place.geometry.location.lat, lng:place.geometry.location.lng, googlemaps_formatted_address:place.formatted_address, googlemaps_place_id:place.place_id}});
        counter++
      }
      else{
        console.log(googlemaps_address)
        console.log(jres)
      }
    } 
  }

  // Respond with a JSON string of all stores in the collection
  res.status(200).json({updated_entities:counter})
}