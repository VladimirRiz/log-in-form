import React, { Component } from 'react';
import Form from './Form'
import Preview from './Preview';
import { makeStyles } from '@material-ui/core/styles';


class FormView extends Component {

  state = {
    login: '',
  }

  onLoginChange = e => {
    this.setState({
      login: e.target.value
    })
  }

  //Styles for Inputs
  useStyle = makeStyles(theme => ({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    login: {
      marginTop: theme.spacing(2),
    }
  }))

  //Put function in the const
  StyleUi = () => {
    const classes = this.useStyle()
    return classes;
  }

  render() {
    return (
      <div>
        <Form
          login={this.state.login}
          onLoginChange={this.onLoginChange}
        />
        <Preview
          login={this.state.login}
        />
      </div>
    );
  }
}


export default FormView;

