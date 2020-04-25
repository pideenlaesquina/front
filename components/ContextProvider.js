import React, { Component, createContext } from 'react';

import Context from "./Context"
import createAuth0Client from '@auth0/auth0-spa-js';

// create a provider
class ContextProvider extends Component {
   
  constructor(props)
  {
    super(props)
    this. state = {
      deviceLocation:null,
      selectedLocation:null,

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
    this.deviceLocation()
    this.initializeAuth0()
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.authClient!==null
      && this.state.deviceLocation!==null
      && this.state.selectedLocation===null)
    {
      if(this.state.user!==null
        && this.state.user.addresses!==null
        && this.state.user.addresses!==[])
      {
        let location = this.state.user.addresses[0]
      }
      else
      {
        let location = this.state.deviceLocation
      }
      this.state.updateSelectedLocation(location.lat, location.lng, location.address, location.type)
    }
    
    if(this.state.selectedLocation !== null  
      && (prevState.selectedLocation !== this.state.selectedLocation))
    {
      this.featuredStores(this.state.selectedLocation.lat, this.state.selectedLocation.lng)
      this.stores(this.state.selectedLocation.lat, this.state.selectedLocation.lng)
    }

    if(
        !this.state.isReady 
        && this.state.selectedLocation !== null
        && this.state.stores !== null
        && this.state.featuredStores !== null)
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
  
  deviceLocation = async () => {
    await navigator.geolocation.getCurrentPosition(
      position => this.locationFromBrowser(position), 
      err => this.locationFromIp()
    )
  }

  updateSelectedLocation(newLat, newLng, address, type)
  {
    let location = {
      lat:parseFloat(newLat), 
      lng:parseFloat(newLng),
      address: address,
      type: type
    }

    this.setState({ 
      selectedLocation:location
    })

    //localStorage.setItem('_selectedLocationL', location)  
  }

  updateDeviceLocation(newLat, newLng, address)
  {
    let location = {
      lat:parseFloat(newLat), 
      lng:parseFloat(newLng),
      address: address,
      type: "device"
    }

    this.setState({ 
      deviceLocation:location
    })

    //localStorage.setItem('_deviceLocation', location)  
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
    let address = await this.addressFromLocation(lat,lng)

    this.updateDeviceLocation(res.location.lat, res.location.lng, address)
  }

  async locationFromBrowser(position)
  {
    let lat = position.coords.latitude
    let lng = position.coords.longitude
    let address = await this.addressFromLocation(lat,lng)

    this.updateDeviceLocation(lat, lng, address)
  }

  async addressFromLocation(lat, lng)
  {
    let url = '/api/addressFromLocation?lat='+ lat +'&lng='+lng
    let res = await fetch(url).then(response=>response.json())

    return res.address
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