import React, { Component } from 'react';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';

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
        />
      </div>
    );
  }
}


export default Form;
