import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';
import { Link } from 'react-router';

export default function Cardd() {
    const cardProduct = styled.div
  return (
    <Card sx={{ maxWidth: 345,backgroundColor:"black",color:"white"  }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://assetsio.gnwcdn.com/Ori-and-the-Will-of-the-Wisps1-scaled-4035452908.jpg?width=720&quality=70&format=jpg&auto=webp"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.white' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{backgroundColor:"white"}}>Share</Button>
       <Link to={"/"}><Button size="small"sx={{backgroundColor:"white"}}>Learn More</Button></Link>
      </CardActions>
    </Card>
  );
}