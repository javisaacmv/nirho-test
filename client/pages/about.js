import React from 'react';
import  Layout  from "../components/layouts/Layout";
import MediaCard from '../components/MediaCard'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
    mainDiv: {
      
      flexDirection: 'row',
      justifyContent:'center',
      alignItems: 'center'
  
    }
  });


function about(props) {

    const classes = useStyles();

    return (
        <Layout>

                <MediaCard 
                    name='Javier Isaac Montaño Valdez' 
                    email='javisaacmv@gmail.com' 
                    phone='6624737775'
                    school={`
                        Actualmente cursando 5to Semestre en la Universidad Abierta y a Distancia de México
                        de manera virtual.
                    `}
                    />
     
        </Layout>
    );
}

export default about;