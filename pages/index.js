import React, { Component, Fragment} from 'react'
import FridgeMagnetsSection from '../components/fridgeMagnetsSection.js'
import SearchSection from '../components/searchSection.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      pos:null,
      favoriteStores:null,
      featuredStores:null,
      ready:false
    }
  }

  componentDidMount() {
    this.position()
    this.favoriteStores()
    this.featuredStores()
  }

  position = async () => {
    await navigator.geolocation.getCurrentPosition(
      position => this.setState({ pos:{
        lat: position.coords.latitude, 
        lng: position.coords.longitude
      }}), 
      err => async function()
      {
        let ip = await fetch(process.env.IPIFY_URL).then(response=>response.text())
        let pos = await fetch(process.env.IPGEOLOCATION_API_URL +'/ipgeo?apiKey='+process.env.IPGEOLOCATION_API_KEY+'&ip='+ip).then(response=>response.json())
    
        this.setState({ pos:{lat:parseFloat(pos.latitude), lng:parseFloat(pos.longitude)}, stores:null})
      }
    )
  }

  async favoriteStores(pos)
  {
    let stores= [
      {_id:"1", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"butchery", acceptsCards:true},
      {_id:"2", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"pharmacy", acceptsCards:true},
      {_id:"3", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"bakery", acceptsCards:true},
      {_id:"4", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"vegetableStore", acceptsCards:true},
      {_id:"5", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"liquorStore", acceptsCards:true},
      {_id:"6", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"petStore", acceptsCards:true},
      {_id:"7", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"hardwareStore", acceptsCards:true},
      {_id:"8", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"restaurant", acceptsCards:true},
      {_id:"9", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"fastFoodRestaurant", acceptsCards:true},
      {_id:"10", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"groceryStore", acceptsCards:true},
      {_id:"11", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"stationeryStore", acceptsCards:true},
      {_id:"12", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"store", acceptsCards:true},
      {_id:"13", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"drycleaner", acceptsCards:true}
    ]
    
    this.setState({ favoriteStores:stores })
  }

  async featuredStores(pos)
  {
    let stores= [
      {_id:"1", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"butchery", acceptsCards:true},
      {_id:"2", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"pharmacy", acceptsCards:true},
      {_id:"3", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"bakery", acceptsCards:true},
      {_id:"4", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"vegetableStore", acceptsCards:true},
      {_id:"5", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"liquorStore", acceptsCards:true},
      {_id:"6", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"petStore", acceptsCards:true},
      {_id:"7", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"hardwareStore", acceptsCards:true},
      {_id:"8", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"restaurant", acceptsCards:true},
      {_id:"9", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"fastFoodRestaurant", acceptsCards:true},
      {_id:"10", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"groceryStore", acceptsCards:true},
      {_id:"11", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"stationeryStore", acceptsCards:true},
      {_id:"12", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"store", acceptsCards:true},
      {_id:"13", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"drycleaner", acceptsCards:true}
    ]
    
    this.setState({ featuredStores:stores })
  }

  async user(id)
  {

  }
  
  render() {
    return (
      <div style={{height:'100vh'}}>
        <SearchSection />
        <FridgeMagnetsSection favoriteStores={this.state.favoriteStores} featuredStores={this.state.featuredStores}/>
      </div>
    );
  }
}

export default App;
