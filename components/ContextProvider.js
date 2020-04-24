import React, { Component, createContext } from 'react';

import Context from "./Context"
import createAuth0Client from '@auth0/auth0-spa-js';

// create a provider
class ContextProvider extends Component {
   
  constructor(props)
  {
    super(props)
    this. state = {
      location:null,
      address:null,

      featuredStores:null,
      stores:null,
      orders:null,

      authClient: null,
      isAuthenticated: false,
      user:null,

      isReady:false
    }
    
    this.startedAt = new Date()
  }

  componentDidMount() {
    this.initialLocation()
    this.initializeAuth0()
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.location !== null  
      && (prevState.location !== this.state.location))
    {
      this.featuredStores(this.state.location.lat, this.state.location.lng)
      this.stores(this.state.location.lat, this.state.location.lng)
      this.addressFromLocation(this.state.location.lat, this.state.location.lng)
    }

    if(
        !this.state.isReady 
        && this.state.location !== null
        && this.state.address !== null
        && this.state.stores !== null
        && this.state.featuredStores !== null
        && this.state.authClient !== null)
    {
      let now = new Date()
      let towait = 2000 - (now.getTime() - this.startedAt.getTime())
      
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
  
  initialLocation = async () => {
    await navigator.geolocation.getCurrentPosition(
      position => this.setState({ 
        location:{
          lat:position.coords.latitude, 
          lng:position.coords.longitude
        }
      }), 
      err => this.locationFromIp()
    )
  }

  updateLocation(newLat, newLng)
  {
    this.setState({ 
      location:{
        lat:parseFloat(newLat), 
        lng:parseFloat(newLng)
      }
    })

    localStorage.setItem('_selectedLocationLat', newLat)  
  }

  initializeAuth0 = async () => {
    const config = {
      domain: 'acacerca.auth0.com',//process.env.AUTH0_DOMAIN,
      client_id: 'd8Pv88MjaYWNSUKUHnO9JcudrUPZ6THl',//process.env.AUTH0_CLIENT_ID,
      redirect_uri: window.location.origin,
      cacheLocation: 'localstorage'
    }

    const auth0Client = await createAuth0Client(config)
    const isAuthenticated = await auth0Client.isAuthenticated()
    const user = isAuthenticated ? await auth0Client.getUser() : null

    this.setState({ authClient:auth0Client, isAuthenticated, user })
  }

  async locationFromIp()
  {
    let url = '/api/locationFromIp'
    let res = await fetch(url).then(response=>response.json())

    this.setState({ location:res.location })
  }

  async addressFromLocation(lat, lng)
  {
    let url = '/api/addressFromLocation?lat='+ lat +'&lng='+lng
    let res = await fetch(url).then(response=>response.json())

    this.setState({ address:res.address })
  }

  async featuredStores(lat, lng)
  {
    let url = '/api/featuredStores?lat='+ lat +'&lng='+lng
    let res = await fetch(url).then(response=>response.json())
    
    this.setState({ featuredStores:res.stores })
    //localStorage.setItem('_featuredStores', JSON.stringify(res.stores))  
  }

  async stores(lat, lng)
  {
    let url = '/api/stores?lat='+ lat +'&lng='+lng
    let res = await fetch(url).then(response=>response.json())
    
    this.setState({ stores:res.stores })
    //localStorage.setItem('_stores', JSON.stringify(res.stores))  
  }

  render() {
    const { 
      location,
      address,
      featuredStores,
      stores,
      orders,

      authClient,
      isAuthenticated,
      user,

      isReady
    } = this.state;

    const values = { 
      location,
      address,
      featuredStores,
      stores,
      orders,

      isAuthenticated,
      user,

      isReady,

      loginWithRedirect: (...p) => authClient.loginWithRedirect(...p),
      getTokenSilently: (...p) => authClient.getTokenSilently(...p),
      getIdTokenClaims: (...p) => authClient.getIdTokenClaims(...p),
      logout: (...p) => authClient.logout(...p)
    }
  
    return (<Context.Provider value={values}>{this.props.children}</Context.Provider>);
  }
}

export default ContextProvider