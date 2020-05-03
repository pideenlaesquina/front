import React from 'react'
import distance from './Distance'

const initialZoom = 15

class Map extends React.Component {

  constructor(props)
  {
    super(props)
    this.state = {
      map: null,
      userMarker:null,
      storeMarkers:[],
      selectedStore: null
    }
  }

  componentDidMount()
  {
    this.setState({map:null}) 
  }

  componentDidUpdate(prevProps, prevState) 
  {
    if(this.props.pos !== null 
      && (
        (this.props.stores !== null && this.props.stores!== undefined)
        || (this.props.selectedStore !== null && this.props.selectedStore!== undefined)
      )
    )
    {
      if(this.state.map === null)
      {
        let map=this.getMap(this.props.pos)
        let userMarker=this.placeUserMarker(map, this.props.pos)
        let storeMarkers=null 
        let selectedStore=null

        if(this.props.stores!==null && this.props.stores!== undefined)
        {
          storeMarkers = this.placeAllStoreMarkers(map, this.props.stores)
        }
        
        if(this.props.selectedStore!==null && this.props.selectedStore!== undefined)
        {
          selectedStore = this.placeAStoreMarker(map, this.props.selectedStore, true)
        }

        this.setState ({
          userMarker:userMarker,
          map: map,
          storeMarkers: storeMarkers,
          selectedStore: selectedStore
        })
      }
      
      if(this.state.map !== null && prevProps.pos !== this.props.pos)
      {
        let userMarker=this.placeUserMarker(this.state.map, this.props.pos)
        this.removeAllStoreMarkers()

        this.setState ({
          userMarker:userMarker
        })
      }

      if(this.state.map !== null && prevProps.stores !== this.props.stores)
      {
        this.removeAllStoreMarkers()
        let storeMarkers = this.placeAllStoreMarkers(this.state.map, this.props.stores)

        this.setState ({
          storeMarkers: storeMarkers
        })
      }
      
      if(this.state.map !== null && prevProps.selectedStore !== this.props.selectedStore)
      {
        this.removeSelectedStoreMarker()
        let selectedStore = this.placeAStoreMarker(this.state.map, this.props.selectedStore)

        this.setState ({
          selectedStore: selectedStore
        })
      }
    }
  }

  getMap(pos)
  {
    let map = null
    if(this.state.map == null)
    {
      map = new google.maps.Map(document.getElementById(this.props.htmlId), {
        center: pos,
        zoom: initialZoom,
        zoomControl:false,
        mapTypeControl: false,
        fullscreenControl: false,
        clickableIcons: false,
        streetViewControl: false,
        gestureHandling: 'greedy'
      })
    }
    else
    {
      map = this.state.map
    }
    return map
  }

  placeUserMarker(map, pos, pan=true)
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

    if(pan)
    {
      this.panToPos(map, pos)
    }

    return marker
  }

  panToPos(map, pos, zoom=initialZoom)
  {
    map.setZoom(zoom);
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

  removeSelectedStoreMarker()
  {
    this.state.selectedStore.setMap(null)
  }

  placeAStoreMarker(map, store, selected=false)
  {
    let categories=[
      'pharmacy', 
      'bakery', 
      'vegetableStore', 
      'hardwareStore',
      'butchery', 
      'drycleaner',
      'stationeryStore',
      'petStore',
      'liquorStore',
      'fastFood',
      'restaurant',
      'groeceryStore',
      'store'
    ]

    let labels=[
      'Droguería',
      'Panadería',
      'Fruver',
      'Ferretería',
      'Carnicería',
      'Lavandería',
      'Papelería',
      'Mascotas',
      'Licorera',
      'Comida rápida',
      'Restaurante',
      'Tienda',
      'Otro'
    ]

    if(store.type===null)
    {
      store.type="store"
    }

    if(!categories.includes(store.type))
    {
      store.type="store"
    }
    
    let i = categories.indexOf(store.type)
    store.typeLabel = labels[i]

    let icon = '';
    if(selected)
    {
      icon = './map/' + store.type + "_icon_selected.svg";
    }
    else
    {
      icon = './map/' + store.type + "_icon.svg";
    }
    let icon_hover = './map/' + store.type + "_icon_hover.svg";
    
    let marker = new google.maps.Marker({
      position: {lat:store.lat, lng:store.lng},
      icon: icon,
      title:store.name,
      draggable:false,
      //custom data
      selected:selected,
      id:store._id,
      distance:distance(this.props.pos.lat, this.props.pos.lng, store.lat, store.lng),
      onClickFunction: ((id)=>this.handleStoreMarkerClick(id))
    })

    google.maps.event.addListener(marker, 'click', function() {
      if(!marker.selected)
      {
        marker.onClickFunction(marker.id)
      }
    })

    google.maps.event.addListener(marker, 'mouseover', function() {
      marker.setIcon(icon_hover);
    })

    google.maps.event.addListener(marker, 'mouseout', function() {
      marker.setIcon(icon);    
    })

    marker.setMap(map)
    return marker
  }

  findStore(id)
  {
    for (let i = 0; i < this.props.stores.length; i++) {
      const element = this.props.stores[i];

      if(element._id === id)
      {
        return element
      }
    }
    return null
  }

  handleStoreMarkerClick(id)
  {
    let store = this.findStore(id)

    if(store !== null)
    {
      this.props.openSelectedStore(store)
    }
  }

  render () {
    return (
      <div style={{height:"100%", width:'100%'}}>
        <div id={this.props.htmlId} style={{height:"100%", width:'100%'}}></div>
      </div>
    )
  }
}

export default Map
