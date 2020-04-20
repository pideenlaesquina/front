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

  async stores(location)
  {
    let stores= [
      {_id:"1", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"butchery", acceptsCards:true},
      {_id:"2", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"pharmacy", acceptsCards:true},
      {_id:"3", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"bakery", acceptsCards:true},
      {_id:"4", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"vegetableStore", acceptsCards:true},
      {_id:"5", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"liquorStore", acceptsCards:true},
      {_id:"6", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"petStore", acceptsCards:true},
      {_id:"7", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"hardwareStore", acceptsCards:true},
      {_id:"8", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"restaurant", acceptsCards:true},
      {_id:"9", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"fastFoodRestaurant", acceptsCards:true},
      {_id:"10", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"groceryStore", acceptsCards:true},
      {_id:"11", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"stationeryStore", acceptsCards:true},
      {_id:"12", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"store", acceptsCards:true},
      {_id:"13", name:"Carnes Y Mas Carnes", address:"KR 6 166 -18", type:"drycleaner", acceptsCards:true}
    ]
    
    this.setState({ favoriteStores:stores })
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
