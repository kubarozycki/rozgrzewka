import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Avatar, Button, CardActions } from '@material-ui/core';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: 'flex',
    flexDirection:'column',
    justifyContent:'space-between'
  },
  media: {
    height: 140,
  },
});

export default function ImageCard({ title, description, imageSrc }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card className={classes.root} style={{ margin: '10px 5px', minWidth: '250px', textAlign: 'center' }}>
      <CardActionArea>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Avatar alt="Image" src={imageSrc} style={{ height: '200px', width: '200px', margin: '5px' }} />
        </div>

        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:'left'}}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=> history.push('/grafik')}>
          Grafik
        </Button>
        <Button size="small" color="primary" onClick={()=> history.push('/kontakt')}>
          Zapisz się
        </Button>
      </CardActions>
    </Card>
  );
}


