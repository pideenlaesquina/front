import React, { Component, Fragment} from 'react'
import { withRouter } from 'react-router-dom'
import Map from '../components/map.js'

import Fab from '@material-ui/core/Fab'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

class Search extends Component {
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

  componentDidUpdate(prevProps, prevState)
  {
    if (this.state.pos != null && (prevState.pos != this.state.pos))
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
        let ip = await fetch(process.env.IPIFY_URL).then(response=>response.text())
        let pos = await fetch(process.env.IPGEOLOCATION_API_URL +'/ipgeo?apiKey='+process.env.IPGEOLOCATION_API_KEY+'&ip='+ip).then(response=>response.json())
    
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
      <div style={{height:'100%'}}>
        <Fab size="small" aria-label="menu" onClick={() => this.props.history.goBack()} style={{position:"fixed", top:"15px", left:"15px", zIndex:'3'}}>
          <ArrowBackIcon />
        </Fab>
        <Map/>
      </div>
    );
  }
}

export default withRouter(Search)
