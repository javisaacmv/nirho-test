import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Snackbar from './Snackbar'
import axiosInstance from '../config/axiosConfig'

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



export default function NewProduct({open, handleClose, refetch, doRefetch}) {

    const classes = useStyles();

    const [name, setName] = React.useState('')
    const [category, setCategory] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [quantity, setQuantity] = React.useState(0)
    const [status, setStatus] = React.useState(true)

    const [snack, setSnack] = React.useState('')

    const disabled = !name || !category || !description

    async function addProduct(){
        const product = {
            NameProduct: name,
            Category: category,
            Description: description,
            ProductQuantity: quantity,
            Status: status
        }
        const response = await axiosInstance.post('/product/create', product)
        console.log(response.data)
        if(response.data.message === 'Created'){
            doRefetch(!refetch)
            setSnack('Producto creado')
            handleClose();
        }
    }
  
  return (
    <div style={{width:'40%',}}>
        <Snackbar text={snack} handleClose={() => setSnack(null)}/>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
        <DialogTitle id="form-dialog-title">Nuevo Producto</DialogTitle>
        <DialogContent className={classes.container}>
        <FormControl className={classes.formControl}>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Nombre"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                fullWidth
            />
        </FormControl>
        
        <FormControl className={classes.formControl}>
            <InputLabel id="category-label">Categoría</InputLabel>
            <Select
                className={classes.select}
                labelId="category-label"
                id="category-select"
                value={category}
                onChange={e => setCategory(e.target.value)}
            >
                <MenuItem value={'Bebidas'}>Bebidas</MenuItem>
                <MenuItem value={'Limpieza'}>Limpieza</MenuItem>
                <MenuItem value={'Botanas'}>Botanas</MenuItem>
                <MenuItem value={'Cremeria'}>Cremeria</MenuItem>
            </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Descripción"
                type="text"
                value={description}
                onChange={e => setDescription(e.target.value)}
                fullWidth
            />
        </FormControl>

        <FormControl className={classes.formControl}>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Cantidad"
                type="number"
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
                fullWidth
            />
        </FormControl>

        <FormControl className={classes.formControl}>
            <Checkbox
            checked={status}
            onChange={e => setStatus(e.target.checked)}
            inputProps={{ 'aria-label': 'primary checkbox' }}
            />
        </FormControl>

        </DialogContent>
        <DialogActions>
          <Button onClick={addProduct} color="primary" disabled={disabled}>
            Aceptar
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
