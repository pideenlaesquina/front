import React, { Component } from 'react'
import distance from '../components/Distance'
import Map from '../components/Map'

import Dialog from '@material-ui/core/Dialog'
import Fab from '@material-ui/core/Fab'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import FavoriteIcon from '@material-ui/icons/Favorite'

class StoreCard extends Component {
  
  constructor(props)
  {
    super(props)
  }

  handleClick()
  {
    window.open("https://wa.me/573125533860?text=¡Hola!%20Quiero%20hacer%20un%20pedido.");
  }

  handleFavorite()
  {
    alert("Esta funcionalidad todavía está en desarollo :)")
  }

  render() {
    
    return (
      <div>{(this.props.store && (<div>

        <style jsx>
          {`
            .root{
                height:90%;
                width:90%;
            }
          `}
        </style>
        <Dialog 
          aria-labelledby="simple-dialog-title" 
          open={this.props.open}
          fullScreen
          style={{height:"100%", position:"relative", background:'#ffcf02'}}
        >
            <div style={{height:'100%', background:'lightgrey'}}>
              <Map 
                stores={null}
                pos={this.props.location}
                htmlId="store-map"
                selectedStore={this.props.store}
              />
            </div>

            <div style={{display:'relative'}}>
              <Fab size="small" aria-label="menu" onClick={() => this.props.close()} style={{position:"absolute", top:"10px", left:"15px"}}>
                <ArrowBackIcon />
              </Fab>
              <Fab size="small" aria-label="menu" onClick={() => this.handleFavorite()} style={{position:"absolute", top:"10px", right:"15px"}}>
                <FavoriteIcon />
              </Fab>
              <div style={{display:'flex', alignItems:'center', padding:'20px'}}>
                <Avatar alt="Tienda" src="/static/images/avatar/1.jpg" style={{width:'75px', height:'75px'}}/>
                <div style={{marginLeft:'20px'}}>
                  <h2 style={{marginTop:'0', marginBottom:'0'}}>
                    {this.props.store.name}
                  </h2>
                  <small>{this.props.store.address}</small>
                  <br></br>
                  <Chip label={this.props.store.type!=null?this.props.store.type:"Tienda"} style={{marginTop:'5px', marginBottom:'5px'}}></Chip>
                  <Chip 
                    label={Math.round(distance(
                      this.props.store.lat,
                      this.props.store.lng,
                      this.props.location.lat,
                      this.props.location.lng,
                    )*100)/100 + " km"} 
                    style={{margin:'5px'}}></Chip>
                </div>
              </div>
              <div style={{margin:'20px', textAlign:'center'}}>
                <span>
                  <Button variant="contained" color="primary" onClick={()=>this.handleClick()}><small>Hacer pedido</small></Button>
                </span>
              </div>
            </div>
        </Dialog>
      </div>))}
      </div>
    )
  }
}

export default StoreCard;
