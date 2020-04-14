import React from 'react'
import ReactDOM from 'react-dom'
import Head from 'next/head'
import AddressBar from '../components/addressBar.js'
import NoStores from '../components/noStores.js'

class Map extends React.Component {

  constructor(props)
  {
    super(props)
    this.state = {
      map: null,
      userMarker:null,
      storeMarkers:[]
    }
  }

  shouldComponentUpdate() {
    if(this.props.pos == null)
    {
      return false
    }
    return true
  }

  componentDidUpdate(prevProps, prevState) 
  {
    if(this.props.pos != null && this.props.stores != null)
    {
      if(this.state.map == null)
      {
        let map=this.getMap(this.props.pos)
        let userMarker=this.placeUserMarker(map, this.props.pos)
        let storeMarkers = this.placeAllStoreMarkers(map, this.props.stores)

        this.setState ({
          userMarker:userMarker,
          map: map,
          storeMarkers: storeMarkers
        })
      }
      else if(prevProps.pos != this.props.pos)
      {
        let userMarker=this.placeUserMarker(this.state.map, this.props.pos)
        this.removeAllStoreMarkers()
        let storeMarkers = this.placeAllStoreMarkers(this.state.map, this.props.stores)

        this.setState ({
          userMarker:userMarker,
          storeMarkers: storeMarkers
        })
      }
    }
  }

  getMap(pos)
  {
    let map = null
    if(this.state.map == null)
    {
      map = new google.maps.Map(document.getElementById('map'), {
        center: pos,
        zoom: 15,
        mapTypeControl: false,
        fullscreenControl: false,
        clickableIcons: false,
        streetViewControl: false
      })
    }
    else
    {
      map = this.state.map
    }
    return map
  }

  placeUserMarker(map, pos)
  {
    if(this.state.userMarker != null)
    {
      this.state.userMarker.setMap(null);
    }

    let marker = new google.maps.Marker({
      position: pos,
      icon: './map/user_icon.svg',
      title: "Tu ubicación",
      draggable:false,
    })

    marker.setMap(map);
    this.panToPos(map, pos)

    return marker
  }

  panToPos(map, pos)
  {
    map.panTo(pos);
  }

  placeAllStoreMarkers(map, stores)
  {
    let list = []
    
    for (let i = 0; i < stores.length; i++) {
      let store = stores[i]
      if(store._id == null || store.lat == null || store.lng == null || store.name == null)
      {
        console.log("Skiped store: "+store.name)
        continue
      }

      let marker = this.placeAStoreMarker(map, store)
      list.push(marker)
    }

    return list
  }

  removeAllStoreMarkers()
  {
    for (let i = 0; i < this.state.storeMarkers.length; i++)
    {
      this.state.storeMarkers[i].setMap(null)
    }
  }

  placeAStoreMarker(map, store)
  {
    store.type = (store.type==null?"store":store.type.toLowerCase())
    let icon_normal = './map/' + store.type + "_icon.svg";
    let icon_hover = './map/' + store.type + "_icon_hover.svg";
    
    let marker = new google.maps.Marker({
      position: {lat:store.lat, lng:store.lng},
      icon: icon_normal,
      title:store.name,
      draggable:false,
      id:store.id, //custom data
    })

    google.maps.event.addListener(marker, 'click', function() {
      console.log("click " +marker.id)       
    })

    google.maps.event.addListener(marker, 'mouseover', function() {
      marker.setIcon(icon_hover);
    })

    google.maps.event.addListener(marker, 'mouseout', function() {
      marker.setIcon(icon_normal);    
    })

    marker.setMap(map)
    return marker
  }

  render () {
    let customStyle = {
      padding:"0",
      margin:"0",
      display: 'flex',
      height: '97vh',

      alignItems:'center', 
      justifyContent: 'center',
      
      background:'WhiteSmoke'
    }

    let imageStyle = {
      width: "50%",
      marginLeft:"auto",
      marginRight: "auto"
    }

    let google_url = process.env.GOOGLE_MAPS_API_URL + "/js?key="+process.env.GOOGLE_MAPS_API_KEY

    return (
      <div>
        <Head>
          <script src= {google_url}></script>
        </Head>
        <div>
          <div id="map" style={customStyle}>
            <img src="/loading.svg" alt="Pajarito escuchando música feliz" style={imageStyle}></img>
          </div>
          {this.state.map
            ?<AddressBar/>
            :""
          }
          {this.state.map && this.props.stores.length==0
            ?<NoStores/>
            :""
          }
        </div>
      </div>
    )
  }
}

export default Map
