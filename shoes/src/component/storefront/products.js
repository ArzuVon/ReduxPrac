import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CurrentCategory from './current-category';

export default function Products() {
  return (
    <>
    <CurrentCategory/>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Nike"
        height="140"
        image="https://images.pexels.com/photos/6050925/pexels-photo-6050925.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
      />
      <CardMedia
        component="img"
        alt="Jordan"
        height="140"
        image="https://images.pexels.com/photos/6050920/pexels-photo-6050920.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
      />
      <CardMedia
        component="img"
        alt="Converse"
        height="140"
        image="https://images.pexels.com/photos/298866/pexels-photo-298866.jpeg?auto=compress&cs=tinysrgb&w=800"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Shoes
        </Typography>
        <Typography variant="body2" color="text.secondary">
         See all things here
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">ADD TO CART</Button>
        <Button size="small">VIEW DETAILS</Button>
      </CardActions>
    </Card>
    </>
  );
}
