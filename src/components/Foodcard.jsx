import React, { useState } from "react";
import { Link } from "react-router-dom"; // React Router
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

const FoodCard = ({ item }) => {
  const [hover, setHover] = useState(false);

  return (
    <Card
      sx={{
        maxWidth: 300,
        position: "relative", // For positioning droplets
        overflow: "hidden", // Ensure content doesn't overflow
        transition: "all 0.3s ease-in-out",
        backgroundImage: hover
          ? "url('/images/booking-shape.png')" // Texture image path
          : "none", // No texture when not hovering
        backgroundSize: "cover", // Cover the card area with texture
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        "&:hover": {
          backgroundColor: "rgba(255, 215, 0, 0.8)", // Semi-transparent golden overlay
        },
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Droplet Animation */}
      {hover && (
        <Box
          sx={{
            position: "absolute",
            top: "-28px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            height: "100%",
            backgroundImage: "url('/images/hover droplets.png')", // Replace with your droplet image
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            opacity: hover ? 1 : 0,
            transition: "all 0.5s ease-in-out",
          }}
        ></Box>
      )}

      <Link
        to={`/${item.name.toLowerCase()}-details`}
        style={{ textDecoration: "none" }}
      >
        <CardActionArea>
          {/* Food Image */}
          <CardMedia
            component="img"
            height="140"
            image={item.image} // Dynamic image path
            alt={`${item.name} image`}
            sx={{
              height: "250px", // Set a consistent height
              objectFit: "contain", // Ensure the image fits inside the container without cropping
              margin: "auto", // Center the image
              padding: "10px", // Add some space around the image
              transition: "transform 0.3s ease-in-out",
             
            }}
          />

          {/* Food Details */}
          <CardContent
            sx={{
              boxShadow: 6,
              transition: "all 0.3s ease-in-out", // Smooth transition for text
            }}
          >
            <Typography
              gutterBottom
              variant="h4"
              textAlign="center"
              sx={{
                fontWeight: "550", // Make the font bold
                fontFamily: "Barlow Condensed, sans-serif", // Apply the font
                color: hover ? "white" : "black",
                transition: "color 0.3s ease-in-out",
              }}
            >
              {hover ? `Best ${item.name}` : item.name}
            </Typography>

            <Typography
              variant="body1"
              textAlign="center"
              sx={{
                color: hover ? "white" : "red",
                transition: "color 0.3s ease-in-out",
              }}
            >
              {hover ? item.description : item.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
    );
};

export default FoodCard;
