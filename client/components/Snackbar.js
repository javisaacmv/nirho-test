import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function CustomSnackbar({text, handleClose}) {
  

  

  return (
    <div>
      
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={text}
        autoHideDuration={4000}
        onClose={handleClose}
        
      >
        <Alert onClose={handleClose} severity="success">
          {text}
        </Alert>
      </Snackbar>
    </div>
  );
}
