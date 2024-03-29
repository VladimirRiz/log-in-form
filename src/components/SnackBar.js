import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';




class SnackBar extends Component {

  render() {
    return (
      <div>

        <Button variant="outlined" className={this.props.margin} onClick={this.props.handleClick}>
          Sign In
      </Button>
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
