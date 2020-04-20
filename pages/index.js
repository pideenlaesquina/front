import React, { Component, Fragment} from 'react'
import SideMenu from '../components/sideMenu.js'
import Loading from '../components/loading.js'
import WelcomeSection from '../components/welcomeSection.js'
import FridgeMagnetsSection from '../components/fridgeMagnetsSection.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      location:null,
      user:null,
      featuredStores:null,
      isReady:false
    }

    this.startedAt = new Date()
  }

  componentDidMount() {
    this.position()
    this.user()
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.location != null && (prevState.location != this.state.location))
    {
      this.featuredStores(this.state.location)
    }

    if(!this.state.isReady && this.state.location !=null && this.state.featuredStores != null)
    {
      let now = new Date()
      let towait = 2000 - now.getTime() - this.startedAt.getTime()
      
      if(towait>0)
      {
        setTimeout(() => {
          this.setState({ isReady:true })
        }, towait)
      }
      else
      {
        this.setState({ isReady:true })
      }
    }
  }

  position = async () => {
    await navigator.geolocation.getCurrentPosition(
      position => this.setState({ location:{
        lat: position.coords.latitude, 
        lng: position.coords.longitude
      }}), 
      err => async function()
      {
        let ip = await fetch(process.env.IPIFY_URL).then(response=>response.text())
        let pos = await fetch(process.env.IPGEOLOCATION_API_URL +'/ipgeo?apiKey='+process.env.IPGEOLOCATION_API_KEY+'&ip='+ip).then(response=>response.json())
    
        this.setState({ location:{lat:parseFloat(pos.latitude), lng:parseFloat(pos.longitude)}})
      }
    )
  }

  async featuredStores(location)
  {
    let url = '/api/featuredStores?lat='+ location.lat +'&lng='+location.lng
    let res = await fetch(url).then(response=>response.json())
    
    this.setState({ featuredStores:res.stores })
  }

  async user()
  {
    let email="ca.rm@outlook.com"
    let url = '/api/user?email='+ email
    let res = await fetch(url).then(response=>response.json())
    
    this.setState({ user:res.user })
  }
  
  render() {
    if(this.state.isReady == false)
    {
      return (<Loading/>)
    }
    else
    {
      const hasUser = (this.state.user!=null?true:false)
      
      return (
        <div>
          <SideMenu user={(hasUser?this.state.user:null)} />
          <WelcomeSection currentLocation={this.state.currentLocation} user={(hasUser?this.state.user:null)}/>
          <FridgeMagnetsSection favoriteStores={(hasUser?this.state.user.favoriteStores:null)} featuredStores={this.state.featuredStores}/>
        </div>
      )
    }
  }
}

export default App;
