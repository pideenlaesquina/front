import Database from '../../middleware/mongodb.js'

// The main, exported, function of the endpoint,
// dealing with the request and subsequent response
module.exports = async (req, res) => {
  if (req.query.lat != null && req.query.lng != null) {
    // Get a database connection, cached or otherwise,
    // using the connection string environment variable as the argument
    let querry_lat = parseFloat(req.query.lat)
    let querry_lng = parseFloat(req.query.lng)
    /* hola */
    const db = await Database()

    // Select the "stores" collection from the database
    const collection = await db.collection('stores')

    // Select the stores collection from the database
    const stores = await collection.find({
      lat: { $gt: querry_lat - 0.02, $lt: querry_lat + 0.02 },
      lng: { $gt: querry_lng - 0.02, $lt: querry_lng + 0.02 }
    }).toArray()

    // Respond with a JSON string of all stores in the collection
    res.status(200).json({ stores })
  }
  else {
    res.status(400).json({ error: "missing parameters" })
  }
}