import React, { Component, Fragment} from 'react'
import Link from 'next/link'

import Paper from '@material-ui/core/Paper'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import StorefrontIcon from '@material-ui/icons/Storefront'
import CreditCardIcon from '@material-ui/icons/CreditCard'
import LocalShippingIcon from '@material-ui/icons/LocalShipping'


class fridgeMagnets extends Component {

  constructor(props)
  {
    super(props)
  }
  
  render() {
    const storeTypes = [
      "dryCleaner", 
      "stationeryStore", 
      "groceryStore", 
      "fastFoodRestaurant", 
      "restaurant", 
      "hardwareStore", 
      "petStore", 
      "liquorStore", 
      "vegetableStore", 
      "bakery", 
      "pharmacy",  
      "butchery"
    ]

    return (
      <div className="root">

        <style jsx>
          {`
            .center{
              text-align: center;
            }
            
            .sideButton{
              position: absolute;
              display: flex;
              align-items: center;
              justify-content: center;
              z-index:2;
            }

            .bottom{
              botom: 0;
              left: 0;
              background: gainsboro;
              height: 40px;
              width: 100%; 
              border-bottom-left-radius: 15px;
              border-bottom-right-radius: 15px;
            }

            .top{
              left: 35px;
              top: -40px;
              height: 80px;
              width: 80px; 
              border-radius: 40px;
            }

            .butchery{
              background: lightpink;
            }

            .pharmacy{
              background: lightcyan;
            }

            .bakery{
              background: lavender;
            }

            .vegetableStore{
              background: green;
            }

            .liquorStore{
              background: deeppink;
            }

            .petStore{
              background: peru;
            }

            .hardwareStore{
              background: slategrey;
            }

            .restaurant{
              background: olivedrab;
            }

            .fastFoodRestaurant{
              background: tomato;
            }

            .groceryStore{
              background: gold;
            }

            .stationeryStore{
              background: steelblue;
            }

            .store{
              background: gainsboro;
            }

            .dryCleaner{
              background: skyblue;
            }
          `}
        </style>
          <Paper elevation={10} style={{width:"140px", marginTop:"50px", marginBottom:"5px", marginLeft:"5px", marginRight:"5px", paddingLeft:"5px", paddingRight:"5px", paddingTop:"45px", paddingBottom:"40px", position:'relative', borderRadius:'15px'}}>
          <div className={"sideButton top "+(this.props.store.type!=null && storeTypes.includes(this.props.store.type) ?this.props.store.type:"store")}>
              <StorefrontIcon fontSize="large"/> 
          </div>
          <div className="center">
              <p style={{height:"70px"}}>
              <strong>{this.props.store.name}</strong>
              <br></br>
              <small>{(this.props.store.type!=null?this.props.store.type:"Tienda")}</small>
              <br></br>
              <small>{(this.props.store.acceptsCards?<span><CreditCardIcon/> Acepta Tarjetas</span>:"")} </small>
              <br></br>
              <small>{this.props.store.address}</small>
              </p>
              <p>
              
              </p>
          </div>
          <Link href="/about">
              <div className="sideButton bottom center">
              Hacer pedido
              </div>
          </Link>
        </Paper>
      </div>
    )
  }
}

export default fridgeMagnets;
