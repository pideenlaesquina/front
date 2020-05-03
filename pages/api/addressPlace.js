import fetch from 'isomorphic-unfetch'

module.exports = async (req, res) => {
  if (req.query.id != null) {
    let query_id = req.query.id
    
    let url = process.env.GOOGLE_MAPS_API_URL + "/place/details/json?place_id="+query_id+"&fields=formatted_address,geometry&key="+process.env.GOOGLE_MAPS_API_KEY
    
    let ress= await fetch(url)
    let jres = await ress.json()

    let place = jres.result

    res.status(200).json({ place })
  }
  else {
    res.status(400).json({ error: "missing parameters" })
  }
}