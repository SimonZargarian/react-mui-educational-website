import React from "react";
import { team } from "../../dummydata";
import { Box, Card, CardMedia, CardContent, Typography, IconButton } from "@mui/material";

// TeamCard is a React functional component that displays cards for each team member.
const TeamCard = () => {
  return (
    <>
      {/* Mapping over a 'team' array, which contains information about team members */}
      {/* Card component used for each team member with specified maximum width and margins */}
      {team.map((val, index) => (
        <Card 
          sx={{ 
            maxWidth: 345, // Maximum width of the card
            margin: 2, // Margin around the card for spacing
            transition: "0.5s", // Smooth transition for hover effects
            '&:hover': { // Hover effects to enhance user interaction
              backgroundColor: "#1eb2a6", // Changes background color on hover
              color: "#fff", // Changes text color on hover
              '.overlay': { opacity: 1 } // Increases the opacity of an overlay element if present
            }
          }} 
          key={index} // Key for React list rendering performance
        >
          {/* CardMedia for displaying an image of the team member */}
          <CardMedia 
            component="img" // Defines the component as an image
            height="320" // Sets the height of the image
            image={val.cover} // Source URL of the image
            alt={val.name} // Alternative text for the image
          />
          {/* CardContent holds text information about the team member */}
          <CardContent>
            {/* Typography for the team member's name */}
            <Typography gutterBottom variant="h5" component="div">
              {val.name} {/*  Displays the name */}
            </Typography>
            {/* Typography for the team member's role or position */}
            <Typography variant="body2" color="text.secondary">
              {val.work} {/* Displays the work or role */}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default TeamCard;
