import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Snackbar from '@material-ui/core/Snackbar';
import PropTypes from 'prop-types';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};


function MySnackbarContentWrapper(props) {
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(this.props[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={this.props.message}>
          <Icon className={clsx(this.props.icon, this.props.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton key="close" aria-label="Close" color="inherit" onClick={onClose}>
          <CloseIcon className={this.props.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};

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
          open={this.props.open}
          autoHideDuration={6000}
        >
          <MySnackbarContentWrapper
            variant="success"
            message="This is a success message!"
          />
        </Snackbar>
      </div>
    );
  }
}





export default SnackBar;
