import React, { Component, Fragment} from 'react'
import Link from 'next/link'

import Drawer from '@material-ui/core/Drawer'
import Fab from '@material-ui/core/Fab'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List'
import Badge from '@material-ui/core/Badge';
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'

import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import DirectionsBikeSharpIcon from '@material-ui/icons/DirectionsBikeSharp';
import EditIcon from '@material-ui/icons/Edit';
import InfoIcon from '@material-ui/icons/Info';

class SideMenu extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      drawerIsOpen:false,
    }
  }

  render() {
    let menu = null
    
    if(this.props.user == null)
    {
      menu = (
        <div>
          <Avatar alt="Remy Sharp" src="/brand/logo_fondo_naranja.svg" style={{width:'150px', height:'150px', marginLeft:'auto', marginRight:'auto', marginTop:'20px', marginBottom:"20px"}}/>
          <Button
            onClick={this.props.auth0Login} 
            size="large"
            color="primary" 
            variant="contained"
            style={{widht:'70%', marginRight:'20%', marginLeft:'20%', marginTop:'20px', marginBottom:'10px'}}
          >
            Registrarse
          </Button>
          <Button 
            onClick={this.props.auth0Login} 
            size='small'
            style={{widht:'70%', marginRight:'27%', marginLeft:'26%', marginTop:'20px', marginBottom:'10px'}}
          >
            Iniciar sesión
          </Button>
        </div>
      )
    }
    else
    {
      menu = (
        <div>
          <Avatar alt="Remy Sharp" src="/noProfilePicture.svg" style={{width:'100px', height:'100px', marginLeft:'auto', marginRight:'auto', marginTop:'20px', marginBottom:"20px"}}/>
          <p style={{textAlign:'center'}}>
            {this.props.user.name}
            <br></br>
            <small>
              {this.props.user.cellphone}
              <br></br>
              {this.props.user.email}
              <br></br>
              <Button 
                href="/account" 
                size='small'
                startIcon={<EditIcon />}
              >
                Cambiar
              </Button>
            </small>
          </p>
          <Button
            size="small" 
            variant="contained"
            startIcon={<ExitToAppIcon />}
            style={{widht:'70%', marginRight:'18%', marginLeft:'18%', marginTop:'0px', marginBottom:'10px'}}
          >
            Cerrar sesión
          </Button>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <Badge badgeContent={4} max={10} color="primary">
                  <DirectionsBikeSharpIcon />
                </Badge>
              </ListItemIcon>
              <ListItemText primary='Pedidos' />
            </ListItem>
          </List>
          
          
        </div>
      )
    }

    return (
      <div>
        <Fab size="small" aria-label="menu" onClick={() => this.setState({drawerIsOpen:true})} style={{position:"fixed", top:"15px", left:"15px", zIndex:'3'}}>
          <MenuIcon />
        </Fab>
        <Drawer anchor='left' open={this.state.drawerIsOpen} onClose={()=>this.setState({drawerIsOpen:false})}>
          <div style={{width:"250px", height:"100%", position:"relative"}}>
            {menu}
            <Divider />
            <Button 
              href="/aboutus" 
              size='large'
              startIcon={<InfoIcon />}
              style={{
                position:'absolute', 
                bottom:'0', 
                left:'10%', 
                width:'80%'
              }}
            >
              Acerca de nosotros
            </Button>
          </div>
        </Drawer>
      </div>
    )
  }
}

export default SideMenu;
