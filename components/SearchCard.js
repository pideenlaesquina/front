import React, { Component } from 'react'
import Map from '../components/Map'

import Dialog from '@material-ui/core/Dialog'
import Fab from '@material-ui/core/Fab'
import Chip from '@material-ui/core/Chip'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import FavoriteIcon from '@material-ui/icons/Favorite'
import HistoryIcon from '@material-ui/icons/History'

class SearchCard extends Component {
  
  constructor(props)
  {
    super(props)
    this.state={
      storesToShow:[],
      selectAll:false,
      updateNeeded:false,
      onlyFavorites:false,
      onlyHistory:false,
      categories: [
        {type:'pharmacy', name:"Droguería", selected:true},
        {type:'bakery', name:"Panadería", selected:true},
        {type:'vegetableStore', name:"Fruver", selected:true},
        {type:'hardwareStore', name:"Ferretería", selected:true},
        {type:'butchery', name:"Carnicería", selected:true},
        {type:'drycleaner', name:"Lavandería", selected:true},
        {type:'stationeryStore', name:"Papelería", selected:true},
        {type:'petStore', name:"Mascotas", selected:true},
        {type:'liquorStore', name:"Licores", selected:true},
        {type:'fastFood', name:"Comida Rápida", selected:true},
        {type:'restaurant', name:"Restaurante", selected:true},
        {type:'groeceryStore', name:"Tienda", selected:true},
        {type:'store', name:"Otro", selected:true}
      ]
    }
  }

  handleChipClick(index)
  {
    let newCategories = JSON.parse(JSON.stringify(this.state.categories))
    if(newCategories[index].selected)
    {
      newCategories[index].selected = false
    }
    else
    {
      newCategories[index].selected = true
    }
    this.setState({categories:newCategories})
  }

  handleSelectAllClick()
  {
    let newCategories = JSON.parse(JSON.stringify(this.state.categories))
    let newSelectAll = JSON.parse(JSON.stringify(this.state.selectAll))

    if(this.state.selectAll)
    {
      for (let i = 0; i < newCategories.length; i++) {
        newCategories[i].selected=true 
      }
      newSelectAll=false
    }
    else
    {
      for (let i = 0; i < newCategories.length; i++) {
        newCategories[i].selected=false
      }
      newSelectAll=true
    }

    this.setState({categories:newCategories, selectAll:newSelectAll})
  }

  handleFavoritesOnlyClick(index)
  {
    this.setState({onlyFavorites:!this.state.onlyFavorites})
  }

  handleHistoryOnlyClick(index)
  {
    this.setState({onlyHistory:!this.state.onlyHistory})
  }

  activeCategories()
  {
    let list = []
    for (let i = 0; i < this.state.categories.length; i++) {
      const element = this.state.categories[i];
      
      if(element.selected)
      {
        list.push(element.type)
      }
    }
    return list
  }

  allCategories()
  {
    let list = []
    for (let i = 0; i < this.state.categories.length; i++) {
      const element = this.state.categories[i];

      list.push(element.type)
    }
    return list
  }

  updateStoreList()
  {
    let allCategories = this.allCategories()
    let activeCategories = this.activeCategories()

    let newStoresToShow = []
    for (let i = 0; i < this.props.stores.length; i++) {
      const element = this.props.stores[i];
      let mustBeIncluded = true
      
      if(element.type===null)
      {
        element.type="store"
      }
      else
      {
        if(!allCategories.includes(element.type))
        {
          element.type="store"
        }
      }

      if(!activeCategories.includes(element.type))
      {
        mustBeIncluded = false
      }

      if(!mustBeIncluded && this.state.onlyFavorites)
      {
        if(!this.props.favoriteStores.includes(element.id))
        {
          mustBeIncluded = false
        }
      }

      if(!mustBeIncluded && this.state.onlyHistory)
      {
        if(!this.props.historyStores.includes(element.id))
        {
          mustBeIncluded = false
        }
      }

      if(mustBeIncluded)
      {
        newStoresToShow.push(element)
      }
    }

    this.setState({updateNeeded:false, storesToShow: newStoresToShow})
  }

  componentDidMount()
  {
    this.updateStoreList()
  }

  componentDidUpdate(prevProps, prevState)
  {
    if( (JSON.stringify(prevState.categories) !== JSON.stringify(this.state.categories) )
      || (prevState.onlyHistory !== this.state.onlyHistory)
      || (prevState.onlyFavorites !== this.state.onlyFavorites)
    )
    {
      this.setState({updateNeeded:true})
    }

    if(this.state.updateNeeded)
    {
      this.updateStoreList()
    }
  }

  render() {
    
    return (
      <div>{(this.props.stores && (<div>
        <Dialog 
          aria-labelledby="simple-dialog-title" 
          open={this.props.open}
          fullScreen
          style={{height:"100%", position:"relative", background:'#ffcf02'}}
        >
            <div style={{height:'100%', background:'lightgrey'}}>
              <Map 
                stores={this.state.storesToShow} 
                pos={this.props.location}
                openSelectedStore={(newStore)=>this.props.openSelectedStore(newStore)}  
                htmlId="search-map"
                selectedStore={null}
              />
            </div>

            <div style={{display:'relative'}}>
              <Fab size="small" aria-label="menu" onClick={() => this.props.close()} style={{position:"absolute", top:"10px", left:"15px"}}>
                <ArrowBackIcon />
              </Fab>
              
              <div style={{margin:'10px', textAlign:'center'}}>
                <h3>Selecciona una tienda en el mapa</h3>
                <h4 style={{marginBottom:'0'}}>Filtros</h4>
                <Chip
                  variant={this.state.onlyFavorites?"default":"outlined"}
                  size="small"
                  label="Solo favoritos"
                  color="secondary"
                  clickable
                  icon={<FavoriteIcon />}
                  onClick={()=>this.handleFavoritesOnlyClick()}
                  style={{marginTop:'10px', marginBottom:'10px', marginRight:'2px'}}
                />
                <Chip
                  variant={this.state.onlyHistory?"default":"outlined"}
                  size="small"
                  label="Pedidos anteriores"
                  clickable
                  icon={<HistoryIcon />}
                  onClick={()=>this.handleHistoryOnlyClick()}
                  style={{marginTop:'10px', marginBottom:'10px', marginLeft:'2px'}}
                />
                <br></br>
                {this.state.categories.map( (item, index) => (
                  <Chip
                    key={item.type}
                    variant={item.selected?"default":"outlined"}
                    size="small"
                    label={item.name}
                    clickable
                    color="primary"
                    onClick={()=>this.handleChipClick(index)}
                    style={{margin:'2px'}}
                  />
                ))}
                <br></br>
                <Chip
                  size="small"
                  label="Seleccionar todo/ninguno"
                  clickable
                  color="default"
                  onClick={()=>this.handleSelectAllClick()}
                  style={{margin:'8px'}}
                />
              </div>
            </div>
        </Dialog>
      </div>))}
      </div>
    )
  }
}

export default SearchCard;
