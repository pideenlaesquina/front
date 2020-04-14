import React, { Component, Fragment} from 'react';

import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';

class addressBar extends Component {
  render() {
    return (
      <Paper elevation={3} style={{position: 'fixed', top:"3%", left:"10%", width:"80%", background:"WhiteSmoke"}}>
        <FormControl>
          <InputLabel htmlFor="input-address">Ubicación</InputLabel>
          <Input
            id="input-addres"
            startAdornment={
              <InputAdornment position="start">
                <PersonPinCircleIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </Paper>
    );
  }
}

export default addressBar;
