import React from 'react';
import  Layout  from "../components/layouts/Layout";
import ProductTable from '../components/ProductTable'
import axiosInstance from '../config/axiosConfig'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import NewProduct from '../components/NewProduct'



function store(props) {
    const [data, setData] = React.useState(null)
    const [open, setOpen] = React.useState(false);
    const [refetch, setRefetch] = React.useState(false);

    const handleRefetch = () =>{
        setRefetch(!refetch)
    }
   

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async(productId) => {
    const response = await axiosInstance.delete(`/product/${productId}`)
    if(response.data.message === 'deleted') setRefetch(!refetch)
  }
   
    
    React.useEffect(() => {
        fetchData()
    },[refetch])

    async function fetchData(){
        
        const response = await axiosInstance.post('/product')
        
        setData(response.data)
    }

    return (
        <Layout>
            <NewProduct open={open} handleClose={handleClose} refetch={refetch} doRefetch={setRefetch}/>
            <h1>store</h1>
            <Button onClick={handleClickOpen} variant="contained" color="secondary" style={{marginLeft:'2rem', marginTop: '2rem'}}>
                <AddIcon/> Nuevo
            </Button>
            {data && <ProductTable data={data}  doRefetch={handleRefetch} handleDelete={handleDelete}/>}
        </Layout>
    );
}

export default store;