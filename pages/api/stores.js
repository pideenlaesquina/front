import Database from '../../middleware/mongodb.js'

module.exports = async (req, res) => {
  if (req.query.lat != null && req.query.lng != null) {
    let querry_lat = parseFloat(req.query.lat)
    let querry_lng = parseFloat(req.query.lng)
    let delta = (req.query.delta != null? req.query.delta : 0.02)

    const db = await Database()
    const collection = await db.collection('stores2')

    const stores = await collection.find({
      lat: { $gt: querry_lat - delta, $lt: querry_lat + delta },
      lng: { $gt: querry_lng - delta, $lt: querry_lng + delta }
    }).toArray()

    res.status(200).json({ stores })
  }
  else {
    res.status(400).json({ error: "missing parameters" })
  }
}