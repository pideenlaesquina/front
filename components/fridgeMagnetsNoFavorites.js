import React, { Component, Fragment} from 'react'
import Button from '@material-ui/core/Button'
import MapIcon from '@material-ui/icons/Map'
import Paper from '@material-ui/core/Paper'

import Carousel, { Dots } from '@brainhubeu/react-carousel'

class fridgeMagnetsNoFavorites extends Component {
  render() {
    
    return (
      <div>
        <style jsx>
          {`
            .root{
              text-align:center;
            }
          `}
        </style>

        <div className="root">
          <Paper elevation={10} style={{width:"80%", marginRight:"auto", marginLeft:"auto", padding:"20px"}}>
            <h3>¡No tienes favoritos!</h3>
            <p>Los favoritos hacen que pedir sea más fácil. Agrega tu primer favorito</p>
            <Button
              variant="contained"
              color="primary"
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

export default fridgeMagnetsNoFavorites;
