import React, { Component, createContext } from 'react';
import Context from "./Context"
import createAuth0Client from '@auth0/auth0-spa-js';

// create a provider
class LocationContextProvider extends Component {
   
  constructor(props)
  {
    super(props)
    this. state = {
      location_lat:null,
      location_lng: null,
      selectedLocationLat: null,
      selectedLocationLng: null,

      featuredStores:null,
      stores:null,

      authClient: null,
      isAuthenticated: false,
      user:null,

      isReady:false,
      isLoading:true
    }

    this.config = {
      domain: process.env.AUTH0_DOMAIN,
      client_id: process.env.AUTH0_CLIENT_ID,
      redirect_uri: window.location.origin
    }

    this.startedAt = new Date()
  }

  componentDidMount() {
    this.initialLocation();
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.selectedLocationLat != null 
      && this.state.selectedLocationLng != null 
      && (
        (prevState.selectedLocationLat != this.state.selectedLocationLat)) 
        || (prevState.selectedLocationLng != this.state.selectedLocationLng)
      )
    {
      console.log("Location change")
      this.featuredStores(this.state.selectedLocationLat, this.state.selectedLocationLng)
      this.stores(this.state.selectedLocationLat, this.state.selectedLocationLng)
    }

    if(
        !this.state.isReady 
        && this.state.selectedLocationLat !=null
        && this.state.selectedLocationLng !=null)
    {
      console.log("Initial location -> isReady=true")
      let now = new Date()
      let towait = now.getTime() + 2000 - this.startedAt.getTime()
      
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

    if(this.state.isLoading 
      && this.state.stores != null 
      && this.state.featuredStores != null)
    {
      console.log("Stores loaded")
      this.setState({ isLoading:false })
    }
  }
  
  initialLocation = async () => {
    await navigator.geolocation.getCurrentPosition(
      position => this.setState({ 
        locationLat:position.coords.latitude, 
        locationLng:position.coords.longitude,
        selectedLocationLat:position.coords.latitude, 
        selectedLocationLng: position.coords.longitude
      }), 
      err => async function()
      {
        let ip = await fetch(process.env.IPIFY_URL).then(response=>response.text())
        let pos = await fetch(process.env.IPGEOLOCATION_API_URL +'/ipgeo?apiKey='+process.env.IPGEOLOCATION_API_KEY+'&ip='+ip).then(response=>response.json())
    
        this.setState({ 
          locationLat:parseFloat(pos.latitude),
          locationLng:parseFloat(pos.longitude),
          selectedLocationLat:parseFloat(pos.latitude),
          selectedLocationLng:parseFloat(pos.longitude)
        })
      }
    )
  }

  updateLocation(newLat, newLng)
  {
    this.setState({ 
      selected_location_lat:parseFloat(newLat), 
      selected_location_lng:parseFloat(newLng),
      isLoading: true
    })
  }

  initializeAuth0 = async () => {
    const auth0Client = await createAuth0Client(this.config)
    const isAuthenticated = await auth0Client.isAuthenticated()
    const user = isAuthenticated ? await auth0Client.getUser() : null

    this.setState({ auth0Client, isLoading:false, isAuthenticated, user })
  };

  async featuredStores(lat, lng)
  {
    let url = '/api/featuredStores?lat='+ lat +'&lng='+lng
    let res = await fetch(url).then(response=>response.json())
    
    this.setState({ featuredStores:res.stores })
  }

  async stores(lat, lng)
  {
    let url = '/api/stores?lat='+ lat +'&lng='+lng
    let res = await fetch(url).then(response=>response.json())
    
    this.setState({ stores:res.stores })
  }

  render() {
    const { 
      location_lat,
      location_lng,
      selectedLocationLat,
      selectedLocationLng,

      featuredStores,
      stores,

      authClient,
      isAuthenticated,
      user,

      isReady,
      isLoading
    } = this.state;

    const values = { 
      location_lat,
      location_lng,
      selectedLocationLat,
      selectedLocationLng,

      featuredStores,
      stores,

      isAuthenticated,
      user,

      isReady,
      isLoading,

      loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
      getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
      getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
      logout: (...p) => auth0Client.logout(...p)
    }
  
    return (<LocationContext.Provider value={values}>{this.props.children}</LocationContext.Provider>);
  }
}

export default LocationContextProvider