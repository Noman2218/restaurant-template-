import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // React Router
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

const FoodCard = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="container mx-auto px-4 pt-6">
      {/* React Router Link */}
      <Link to="/pizza-details" style={{ textDecoration: 'none' }}>
        <Card
          sx={{
            maxWidth: 300,
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: '#FFD700', // Golden hover background
            },
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/images/pizza-2.png" // Replace with your image path
              alt="pizza image"
            />
            <CardContent
              sx={{
                transition: 'all 0.3s ease-in-out', // Smooth transition for text
              }}
            >
              <Typography
                gutterBottom
                variant="h4"
                textAlign="center"
                sx={{
                  color: hover ? 'white' : 'black',
                  transition: 'color 0.3s ease-in-out',
                }}
              >
                {hover ? 'Best Pizza' : 'Pro Pizza'}
              </Typography>

              <Typography
                variant="body1"
                textAlign="center"
                sx={{
                  color: hover ? 'white' : 'red',
                  transition: 'color 0.3s ease-in-out',
                }}
              >
                {hover ? 'Delicious & Cheesy' : '5 Products'}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
};

export default FoodCard;
