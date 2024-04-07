import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Heading from "../common/heading/Heading";
import CoursesCard from "../allcourses/CoursesCard";

const HAbout = () => {
  return (
    <Box sx={{ py: 4,  }}>
      <Container maxWidth="xl">
        <Typography variant="h2" component="div" sx={{ color: '#1eb2a6', fontWeight: 'bold', mt: 13, textAlign: 'center', mt: 6, mb: 2, }}>
        Our Courses
          </Typography>
          <Typography variant="h4" component="div" sx={{ textAlign: 'center', mb: 4, }}>
          Explore Our Popular Online Courses
          </Typography>
        <CoursesCard />
      </Container>
    </Box>
  );
};

export default HAbout;
