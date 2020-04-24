import React, { Component, Fragment} from 'react'
import Button from '@material-ui/core/Button'
import MapIcon from '@material-ui/icons/Map'
import Paper from '@material-ui/core/Paper'

class FridgeMagnetsNoFavorites extends Component {
  render() {
    
    return (
      <div>
        <style jsx>
          {`
            .root{
              text-align:center;
              padding-bottom:20px;
            }
          `}
        </style>

        <div className="root">
          <Paper elevation={10} style={{width:"220px", marginRight:"auto", marginLeft:"auto", padding:"20px"}}>
            <h3>¡No tienes favoritos!</h3>
            <p>Los favoritos hacen que pedir sea más fácil. Agrega tu primer favorito</p>
            <Button
              variant="outlined"
              size="large"
              startIcon={<MapIcon />}
              href="/search"
            >
              Buscar tiendas
            </Button>
          </Paper>
        </div>
      </div>
    )
  }
}

export default FridgeMagnetsNoFavorites;
