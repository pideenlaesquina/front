import Database from '../../middleware/mongodb.js'

module.exports = async (req, res) => {
  if (req.query.email != null) {
    let user_email = req.query.email

    const db = await Database()
    const collection = await db.collection('users')

    // const user = await collection.findOne({
    //     email: user_email,
    // })

    const user = { 
        _id:"1",
        name:"Camilo Andrés Ramírez",
        cellphone:"3125533860",
        cellphoen_contry_code:"57",
        email:user_email,
        locations: [
          {_name:"Casa", address_line_1: "Cra 13 #152-80", address_line_2:"AP 715", lat:4, lng:-74 },
          {_name:"Trabajo", address_line_1: "Cl 93 #13-80", address_line_2:"AP 715", lat:4, lng:-74 },
        ],
        favoriteStores:[
          {_id:"1", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"butchery", acceptsCards:true},
          {_id:"13", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"drycleaner", acceptsCards:true},
        ]
      }

    res.status(200).json({ user })
  }
  else {
    res.status(400).json({ error: "missing parameters" })
  }
}