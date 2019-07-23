import React, { Component } from 'react';

class Preview extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.login}</h1>
        <h1>{this.props.password}</h1>
        <h1>{this.props.message}</h1>
      </div>
    );
  }
}


export default Preview;
