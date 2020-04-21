import React, { Component, Fragment} from 'react'
import Button from '@material-ui/core/Button';
import MapIcon from '@material-ui/icons/Map';

class searchSection extends Component {

  constructor(props)
  {
    super(props)
    this.state= {
      stores:null
    }
  }
  
  render() {
    
    return (
      <div>

        <style jsx>
          {`
            .root{
              height:250px;
              background:white;
              padding-left:15px;
              padding-right:15px;
              padding-top:50px;
              padding-bottom:10px;
              text-align:center;
            }
          `}
        </style>
        <div className="root">
            <h1 style={{margin:'0'}}>Hola Camilo!</h1>
            <p><small>Tu dirección: Cra 13 # 152 - 80 AP 715</small><br></br><Button><small>Cambiar</small></Button></p>
            <p>Haz tu pedido en alguna de las 250 tiendas y negocios cerca de tí.</p>
            <p>Serás atendido por su dueño.</p>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<MapIcon />}
              href="/search"
            >
              Ver el mapa
            </Button>
        </div>
      </div>
    )
  }
}

export default searchSection;
