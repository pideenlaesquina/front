import React, { Component, Fragment} from 'react'
import Map from '../components/map.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      pos:null,
      stores:null
    }
  }

  componentDidMount() {
    this.position()
  }

  componentDidUpdate()
  {
    if (this.state.pos != null)
    {
      this.getStores(this.state.pos)
    }
  }

  position = async () => {
    await navigator.geolocation.getCurrentPosition(
      position => this.setState({ pos:{
        lat: position.coords.latitude, 
        lng: position.coords.longitude
      }}), 
      err => async function()
      {
        let ip = await fetch('https://api.ipify.org').then(response=>response.text())
        let pos = await fetch('https://api.ipgeolocation.io/ipgeo?apiKey=02ff42e6f29c453e8d60df6139f5f9ed&ip='+ip).then(response=>response.json())
    
        this.setState({ pos:{lat:parseFloat(pos.latitude), lng:parseFloat(pos.longitude)}, stores:null})
      }
    )
  }

  async getStores(pos)
  {
    let url = '/api/stores?lat='+ pos.lat +'&lng='+pos.lng
    let res = await fetch(url).then(response=>response.json())
    
    this.setState({ stores:res.stores })
  }
  
  render() {
    return (
      <div>
        <Map pos={this.state.pos} stores={this.state.stores}/>
      </div>
    );
  }
}

export default App;
