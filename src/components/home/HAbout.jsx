import React from "react"; // Importing React library for building components
import { Box, Container, Typography } from "@mui/material"; // Importing Box, Container, and Typography components from Material-UI for layout and text
import Heading from "../common/heading/Heading"; // Import Heading component, though it's imported and not used
import CoursesCard from "../allcourses/CoursesCard"; // Import CoursesCard component which presumably displays course details

const HAbout = () => {
  return (
    <Box sx={{ py: 4 }}> {/* Box component acts as a wrapper with padding on Y-axis for top and bottom spacing */}
      <Container maxWidth="xl"> {/* Container limits the content width to 'xl' size and centers it */}
        <Typography variant="h2" component="div" 
          sx={{ 
            color: '#1eb2a6', // Sets the text color
            fontWeight: 'bold', // Makes the font weight bold
            mt: 6, // Margin top for spacing above the text
            textAlign: 'center', // Centers the text horizontally
            mb: 2, // Margin bottom for spacing below the text
          }}>
          Our Courses 
        </Typography>
        <Typography variant="h4" component="div" 
          sx={{ 
            textAlign: 'center', // Centers the subheading text
            mb: 4, // Margin bottom for spacing below the subheading
          }}>
          Explore Our Popular Online Courses 
        </Typography>
        <CoursesCard /> 
      </Container>
    </Box>
  );
};

export default HAbout; // Exports the HAbout component to be used in other parts of the application
