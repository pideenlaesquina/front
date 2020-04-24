import fetch from 'isomorphic-unfetch'

module.exports = async (req, res) => {
  if (req.query.lat != null && req.query.lng != null) {
    let querry_lat = parseFloat(req.query.lat)
    let querry_lng = parseFloat(req.query.lng)
    
    let url = process.env.GOOGLE_MAPS_API_URL + "/geocode/json?latlng="+querry_lat+","+querry_lng+"&key="+process.env.GOOGLE_MAPS_API_KEY
    let ress= await fetch(url)
    let jres = await ress.json()

    let address = jres.results[0].formatted_address

    res.status(200).json({ address })
  }
  else {
    res.status(400).json({ error: "missing parameters" })
  }
}