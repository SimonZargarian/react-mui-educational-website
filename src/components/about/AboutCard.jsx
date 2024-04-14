import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { homeAbout } from "../../dummydata";

// AboutCard is a functional React component designed for displaying information about the benefits of online learning.
const AboutCard = () => {
  return (
    // Box is used as an outer container with specific styles to manage layout and positioning.
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: -30, mt: -12, position: 'relative', zIndex: 2 }}>
      // Grid container to organize content into two halves.
      <Grid container spacing={6} sx={{ justifyContent: 'space-between', alignItems: 'stretch' }}>
        
        {/* Left side Grid item displaying a full-height background image */}
        <Grid item xs={12} md={6} sx={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/images/about.webp'})`, // URL for the background image
          backgroundSize: 'cover', // Ensures the background image covers the entire Grid item
          backgroundRepeat: 'no-repeat', // Prevents the background image from repeating
          backgroundPosition: 'center top', // Centers the background image at the top
          height: '100vh', // Sets the height of the Grid item to be full viewport height
        }}>
        </Grid>
        
        {/* Right side Grid item containing text and additional content */}
        <Grid item xs={12} md={6} sx={{ p: 5 }}> {/*  Padding is added for spacing inside the Grid item */}
          <Typography variant="h2" component="div" sx={{ color: '#1eb2a6', fontWeight: 'bold', mt: 13 }}>
            LEARN ANYTHING 
          </Typography>
          <Typography variant="h4" component="div">
            Benefits About Online Learning Expertise 
          </Typography>
          {/*  Box container for cards that contain dynamic content */}
          <Box sx={{ mt: 5 }}>
            {/* Mapping over homeAbout array to create cards for each entry */}
            {homeAbout.map((val, index) => (
              // Card component for each benefit item
              <Card key={index} sx={{ mt: 5, paddingTop: "20px", paddingBottom: "20px", display: 'flex', mb: 3, transition: '0.5s', '&:hover': { bgcolor: '#1eb2a6', color: '#fff', boxShadow: '0 5px 25px -2px rgb(0 0 0 / 6%)' } }}>
                {/* CardMedia to display an icon or image for each benefit */}
                <CardMedia
                  component="img"
                  sx={{ width: 70, height: 70, m: 2 }} // Specific size and margin for the media
                  image={val.cover} // Image URL
                  alt="" // Alt text should be added for accessibility
                />
                {/* CardContent for textual information */}
                <CardContent>
                  <Typography variant="h5" component="div">
                    {val.title} {/* Displays the title of the benefit */}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {val.desc} {/* Description text */}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutCard;

