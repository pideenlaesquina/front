import React, { Component, Fragment} from 'react';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class addressBar extends Component {
  render() {
    var imageStyle = {
      width: "40%",
      display: 'block',
      marginLeft:"auto",
      marginRight: "auto",
      marginTop:"5%",
      marginBottom:"5%"
    }

    return (
      <Paper elevation={3} style={{position: 'fixed', bottom:"5%", left:"5%", width:"80%", background:"WhiteSmoke", padding:"5%", textAlign:"center"
      }}>
          <h3><small> No encontramos establecimientos cerca de ti pero te tenemos cubierto...</small></h3>
          <p>Puedes hacer un pedido en cualquier establecimiento incluso si no está listado, nosotros nos encargamos.</p>
          <p><small>(también puedes cambiar de úbicación ingresando una nueva dirección)</small></p>
          <Button variant="contained" color="primary"><small>Hacer pedido en establecimiento no registrado</small></Button>
      </Paper>
    );
  }
}

export default addressBar;
