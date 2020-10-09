import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { makeStyles } from '@material-ui/core/styles';

import Snackbar from './Snackbar'


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    select: {
      marginTop: theme.spacing(2),
      width:'100%'
    },
    container:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center'
    }
  }));



export default function EditProduct({product, setProduct, onDone}) {

    const classes = useStyles();

    

    const [snack, setSnack] = React.useState('')

  return (
    <div style={{width:'40%',}}>
        <Snackbar text={snack} handleClose={() => setSnack(null)}/>
      <Dialog open={product} onClose={() => setProduct(null)} aria-labelledby="form-dialog-title" fullWidth>
        <DialogTitle id="form-dialog-title">Eliminar Producto</DialogTitle>
        <DialogContent className={classes.container}>
        <DialogContentText id="alert-dialog-description">
            {`
                Estas seguro que deseas eliminar el elemento ${product && product.NameProduct}
            `}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {
              onDone(product._id)
              setProduct(null)
              setSnack('Producto eliminado')
          }} color="primary" >
            Aceptar
          </Button>
          <Button onClick={() => setProduct(null)} color="primary">
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
