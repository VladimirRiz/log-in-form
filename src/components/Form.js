import React, { Component } from 'react';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import SnackBar from './SnackBar'

class Form extends Component {
  render() {
    return (
      <div>
        <TextField
          id="outlined-dense"
          label="Login"
          className={clsx(this.props.textField, this.props.dense)}
          margin="dense"
          variant="outlined"
          value={this.props.login}
          onChange={this.props.onLoginChange}
        />
        <br />
        <TextField
          id="outlined-password-input"
          label="Password"
          className={this.props.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          value={this.props.password}
          onChange={this.props.onPasswordChange}
        />
        <SnackBar
          snackbarOpen={this.props.snackbarOpen}
          handleClick={this.props.handleClick}
          handleClose={this.props.handleClose}
        />
      </div>
    );
  }
}


export default Form;
