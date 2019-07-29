import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


class Loggined extends Component {
  render() {
    return (
      <div>
        <h2>You r logined</h2>
        <Link to='/'>
          <Button variant="outlined">
            Log Out
        </Button>
        </Link>
      </div>
    );
  }
}

export default Loggined;