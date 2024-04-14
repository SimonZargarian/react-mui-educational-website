import React from "react";
import Back from "../common/back/Back";
import TeamCard from "./TeamCard";
import Awrapper from "../about/Awrapper";
import { Box, Grid, Typography } from "@mui/material";
import Newsletter from "../home/Newsletter";
import Footer from "../home/Footer";

// Team is a React functional component designed to display the team section of a website.
const Team = () => {
  return (
    <>
      {/* Back component likely provides a UI element for navigating to a previous page or home, with a title prop. */}
      <Back title="Team" />

      {/* Full-width banner image with an alt tag describing it as a "Banner" */}
      <img src={`${process.env.PUBLIC_URL}/images/back.webp`} alt="Banner" style={{ width: '100%', display: 'block', marginBottom: -30 }} />

      {/* Typography component to display the page title over the banner image, positioned absolutely to be centered on the page */}
      <Typography variant="h2" component="div" sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)', // Centering the text on the screen
          color: 'white', // White text for contrast against a likely darker background
          textAlign: 'center', // Center-aligned text
          fontWeight: 'bold', // Bold text to make the title stand out
        }}>
          Our Team 
        </Typography>

      {/* Box container with padding and dynamic styling for child components, particularly for hover effects on team cards */}
      <Box sx={{ pt: 8, pb: 8, px: 2, '.teamCard': { transition: "0.5s", '&:hover': { backgroundColor: "#1eb2a6", color: "#fff", '.overlay': { opacity: 1 } } } }}>
        {/* Grid container to layout TeamCard components */}
        <Grid container spacing={2} justifyContent="center">
          {/* TeamCard component, which likely displays individual team member details. */}
          <TeamCard/> {/*  Placeholder for multiple TeamCard components or needs mapping if multiple team members are involved. */}
        </Grid>
      </Box>

      {/* Additional components that might be related to wider site functionality, not directly related to the team page */}
      <Awrapper /> 
      <Newsletter /> 
      <Footer /> 
    </>
  );
};

export default Team;
