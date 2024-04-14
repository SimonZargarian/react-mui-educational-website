import React from "react"; // Importing React library
import { Box, Typography, Button } from "@mui/material"; // Importing Box, Typography, and Button components from Material-UI
import Heading from "../../common/heading/Heading"; // Ensure this component is correctly imported from the path
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; // Importing the icon for use in the buttons

const Hero = () => { // Defining the Hero functional component
  return (
    <Box sx={{
      position: 'relative', // Sets the position context for absolutely positioned children
      width: '100%', // Makes the Box take the full width of its parent
      height: '100vh', // Sets the height of the Box to be 100% of the viewport height
      backgroundImage: `url(${process.env.PUBLIC_URL + '/images/bg.webp'})`, // Background image pulled from the public directory
      backgroundSize: 'cover', // Ensures the background image covers the entire Box
      backgroundAttachment: 'fixed', // Keeps the background image fixed during scroll
      '&::before': { // Pseudo-element to create an overlay
        content: '""', // Necessary for pseudo-elements to display
        position: 'absolute', // Positioning it absolutely within the parent Box
        top: 0, left: 0, // Positioning at the top left corner of the parent
        width: '100%', height: '100%', // Full width and height
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black overlay with 50% opacity
        zIndex: 1, // Ensures the overlay is above the background image but below other content
      },
    }}>
      <Box sx={{
        position: 'absolute', // Positioning this Box absolutely
        top: '50%', left: '50%', // Centers the Box in the middle of the parent
        transform: 'translate(-50%, -50%)', // Shifts the Box to perfectly center it
        zIndex: 2, // Ensures this content is above the overlay
        textAlign: 'center', // Centers the text inside this Box
        width: '100%', // Box takes full width of its parent
        px: 2, // Horizontal padding
      }}>
        <Heading subtitle='WELCOME TO ACADEMIA' title='Best Online Education Expertise' /> 
        <Typography variant="body1" sx={{ my: 2, color: 'common.white' }}> 
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 2, marginTop: 4 }}>
          <Button variant="contained" size="large" endIcon={<ArrowForwardIosIcon />}
            sx={{
              backgroundColor: '#1eb2a6', // Custom background color for the button
              color: 'white', // Text color set to white
              '&:hover': {
                backgroundColor: '#16897b', // Background color on hover
              },
            }}>
            GET STARTED NOW 
          </Button>
          <Button variant="outlined" size="large" endIcon={<ArrowForwardIosIcon />}
            sx={{ 
              borderColor: '#1eb2a6', color: '#1eb2a6', // Button styling with colors
              '&:hover': { 
                borderColor: 'white', color: 'white' // Button styles on hover
              } 
            }}>
            VIEW COURSE 
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero; // Exports the Hero component for use in other parts of the application
