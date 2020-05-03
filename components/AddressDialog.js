import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';

import AddIcon from '@material-ui/icons/Add';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import HomeIcon from '@material-ui/icons/Home';
import BusinessIcon from '@material-ui/icons/Business';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

function CustomDialog(props) {
  const { onClose, selectedValue, open, addresses } = props;
  const [showForm, setShowForm] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [place, setPlace] = React.useState(null);

  const handleClose = () => {
    onClose(selectedValue);
    setShowForm(false)
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const handleAddClick = () => {
    setShowForm(true)
  };

  const handleAddressConfirmed = () => {
    setShowForm(false)
    handleClose()
    alert(":)")
  };

  const handleInputChange = (event) => {
    getPredictions(event.target.value)
  }

  const handleAutoCompleteValue = async (event, newValue) => {
    if(newValue!==null)
    {
      getPlace(newValue.place_id)
    }
  }

  const getPredictions = async (text) => {
    let url = "/api/addressPrediction?address="+text+"&lat="+props.deviceLocation.lat+"&lng="+props.deviceLocation.lng
    let res = await fetch(url).then(response=>response.json())
    
    setOptions(res.predictions)
  }

  const getPlace = async (id) => {
    let url = "/api/addressPlace?id="+id
    let res = await fetch(url).then(response=>response.json())

    const place = { 
      address: res.place.formatted_address, 
      lat: res.place.geometry.location.lat, 
      lng: res.place.geometry.location.lng,
      google_place_id: res.place.place_id,
      type: "default",
    }

    setPlace(place)
  }

  const savePLace = async () => {

  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Selecciona tu dirección</DialogTitle>
      <List>
        {addresses.map((item) => (
          <ListItem button onClick={() => handleListItemClick(item)} key={item.address}>
            <ListItemAvatar>
              <Avatar>
                {(item.type=="house"?<HomeIcon />:<BusinessIcon />)}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.address} />
          </ListItem>
        ))}

        <ListItem autoFocus button onClick={() => handleListItemClick(props.deviceLocation)}>
          <ListItemAvatar>
            <Avatar>
              <MyLocationIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Ubicación actual" secondary={props.deviceLocation.address} />
        </ListItem>
        <Divider />
        <ListItem autoFocus button onClick={() => handleAddClick()}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Agregar dirección" />
        </ListItem>
        <Collapse in={showForm} timeout="auto" unmountOnExit>
          <div>
          <Autocomplete
            id="combo-box-demo"
            options={options}
            onChange={handleAutoCompleteValue}
            getOptionLabel={(option) => option.description}
            renderInput={(params) => 
                <TextField 
                  {...params} 
                  label="Ingresa tu dirección" 
                  variant="outlined" 
                  size="small"
                  fullWidth
                  onChange={handleInputChange}
                /> 
              }
          />
          </div>
          <Button variant="contained" color="primary" size="small" onClick={handleAddressConfirmed}>
            Confirmar dirección
          </Button>
        </Collapse>
      </List>
    </Dialog>
  );
}

export default function AddressDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(props.selectedLocation);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div style={{width:'100%', textAlign:'center'}}>
      <span>
        <small>Tu dirección: {selectedValue.address}</small>
        <br></br>
        <Button onClick={handleClickOpen}>Cambiar</Button>
        <CustomDialog 
          selectedLocation={props.selectedLocation} 
          deviceLocation={props.deviceLocation} 
          selectedValue={selectedValue} 
          open={open} 
          onClose={handleClose}
          addresses={props.addresses}
        />
      </span>
    </div>
  );
}