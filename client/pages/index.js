import  Layout  from "../components/layouts/Layout";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


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
  titleDiv: {
    display:'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center'

  },
  paper:{
    width: '40%',
    height: '40%'
  },
  container: {
    display:'flex',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center'

  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <Layout >
      <div className={classes.container}>
      <Paper elevation={3} className={classes.paper}>
        <div className={classes.titleDiv}>
          <h1>Inicio</h1>
          <Typography paragraph>
            Pagina de Inicio, seleccione puede navegar por el menú
          </Typography>
        </div>

      </Paper>
      </div>
     
    
      
     
    </Layout>
  )
}
