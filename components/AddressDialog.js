import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';

import AddIcon from '@material-ui/icons/Add';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import HomeIcon from '@material-ui/icons/Home';
import BusinessIcon from '@material-ui/icons/Business';
import { blue } from '@material-ui/core/colors';

function CustomDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Selecciona tu dirección</DialogTitle>
      <List>
        {this.props.addresses.map((item) => (
          <ListItem button onClick={() => handleListItemClick(item)} key={item.address}>
            <ListItemAvatar>
              <Avatar>
                {(item.type=="house"?<HomeIcon />:<BusinessIcon />)}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.address} />
          </ListItem>
        ))}

        <ListItem autoFocus button onClick={() => handleListItemClick(this.props.currentLocation)}>
          <ListItemAvatar>
            <Avatar>
              <MyLocationIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Ubicación actual" secondary={this.props.deviceLocation} />
        </ListItem>
        <Divider />
        <ListItem autoFocus button onClick={() => handleListItemClick('add')}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Agregar dirección" />
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function AddressDialog() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState((this.props.addresses[0]!=null?this.props.addresses[0]:this.props.currentLocation));

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
        <small>Tu dirección: {selectedValue}</small>
        <br></br>
        <Button onClick={handleClickOpen}>Cambiar</Button>
        <CustomDialog 
          currentLocation={this.props.currentLocation} 
          selectedValue={selectedValue} 
          open={open} 
          onClose={handleClose}
        />
      </span>
    </div>
  );
}