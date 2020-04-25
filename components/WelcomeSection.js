import React, { Component, Fragment} from 'react'
import Button from '@material-ui/core/Button';
import StorefrontIcon from '@material-ui/icons/Storefront'
import AddressDialog from '../components/AddressDialog'


class WellcomeSection extends Component {

  constructor(props)
  {
    super(props)
    this.state= {
      stores:null
    }
  }

  handleAddressClickOpen = () => {
    this.addressDialogOpen(true);
  };

  handleAddressClose = (value) => {
    this.addressDialogOpen(true);
    this.setSelectedValue(value);
  };
  
  render() {

    const conTiendas = (
      <div>
        <p>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/search"
          >
            Hacer pedido  
          </Button>
        </p>
      </div>
    )

    const sinTiendas = (
      <div>
        <h3>pero te tenemos cubiert@...</h3>
        <span><small>Puedes hacer un pedido en cualquier tienda o establecimiento incluso si no está listado, nosotros nos encargamos.</small></span>
        <p><small>(también puedes cambiar de úbicación ingresando una nueva dirección)</small></p>
        <p><Button variant="contained" color="primary" href="/agregarTienda"><small>Hacer pedido</small></Button></p>
      </div>
    )

    return (
      <div>

        <style jsx>
          {`
            .root{
              padding-left:15px;
              padding-right:15px;
              padding-top:10px;
              padding-bottom:10px;
              text-align:center;
            }
          `}
        </style>

        <div className="root">
            <h1>¡Hola {this.props.name}!</h1>
            <AddressDialog currentLocation={this.props.currentLocation} addresses={this.props.addresses}/>
            <div style={{display: 'flex', flexDirection:"column", justifyContent: 'center', alignItems: 'center', width:'100%', marginTop:'10px'}}>
              <StorefrontIcon fontSize="large"/>
              <h2 style={{marginBottom:'0', marginTop:'5px'}}>&nbsp;{this.props.numStores}&nbsp;Tiendas</h2>
              <span> a  menos de 1 km</span>
            </div>
            {(this.props.numStores>0?conTiendas:sinTiendas)}
        </div>
      </div>
    )
  }
}

export default WellcomeSection;
