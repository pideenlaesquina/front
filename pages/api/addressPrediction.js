import fetch from 'isomorphic-unfetch'

module.exports = async (req, res) => {
  if (req.query.address != null && req.query.lat != null && req.query.lng != null) {
    let query_lat = parseFloat(req.query.lat)
    let query_lng = parseFloat(req.query.lng)
    let query_address = req.query.address
    
    let url = process.env.GOOGLE_MAPS_API_URL + "/place/autocomplete/json?input="+query_address+"&location="+query_lat+","+query_lng+"&radius=20000&strictbounds&language=es&key="+process.env.GOOGLE_MAPS_API_KEY
    
    let ress= await fetch(url)
    let jres = await ress.json()

    let predictions = jres.predictions

    res.status(200).json({ predictions })
  }
  else {
    res.status(400).json({ error: "missing parameters" })
  }
}