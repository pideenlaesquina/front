import fetch from 'isomorphic-unfetch'

module.exports = async (req, res) => {
    let ip = await fetch(process.env.IPIFY_URL).then(response=>response.text())
    let pos = await fetch(process.env.IPGEOLOCATION_API_URL +'/ipgeo?apiKey='+process.env.IPGEOLOCATION_API_KEY+'&ip='+ip).then(response=>response.json())
    let location = {
        lat:parseFloat(pos.latitude),
        lng:parseFloat(pos.longitude)
    }
    
    res.status(200).json({ location })
}