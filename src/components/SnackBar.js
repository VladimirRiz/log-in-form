import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Snackbar from '@material-ui/core/Snackbar';
// import CheckCircleIcon from '@material-ui/icons/CheckCircle';
// import ErrorIcon from '@material-ui/icons/Error';
// import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';
// import WarningIcon from '@material-ui/icons/Warning';
// import Auth from './Auth'

import { Link, Redirect } from 'react-router-dom'
// const variantIcon = {
//   success: CheckCircleIcon,
//   warning: WarningIcon,
//   error: ErrorIcon,
//   info: InfoIcon,
// };




class SnackBar extends Component {

  render() {
    return (
      <div>

        {/* <Link to='/auth'> */}
        <Button variant="outlined" className={this.props.margin} onClick={this.props.handleClick}>
          Sign In
      </Button>
        {/* </Link> */}
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.props.snackbarOpen}
          autoHideDuration={1500}
        >
          <SnackbarContent
            className={clsx(this.props.success)}
            message={this.props.message}
            action={
              <IconButton key="close" aria-label="Close" color="inherit" onClick={this.props.handleClose}>
                <CloseIcon className={this.props.icon} />
              </IconButton>
            }
          />
        </Snackbar>
      </div>
    );
  }
}


export default SnackBar;
