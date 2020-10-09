import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '600px',
    marginTop:'5%',
    marginLeft:'5%'
  },
  info:{
      marginBottom: '2rem'
  }

});

export default function MediaCard({name, email, phone, school}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="h2">
            Email:
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p" className={classes.info}>
           {email}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="h2">
            Telefono:
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p" className={classes.info}>
           {phone}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="h2">
            Escuela:
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p" className={classes.info}>
           {school}
          </Typography>
        </CardContent>
     
    </Card>
  );
}
