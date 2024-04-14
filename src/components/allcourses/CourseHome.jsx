import React from 'react';
import Back from '../common/back/Back';
import CoursesCard from './CoursesCard';
import OnlineCourses from './OnlineCourses';
import { Container, Typography } from '@mui/material';
import Newsletter from '../home/Newsletter';
import Footer from '../home/Footer';

// CourseHome is a React functional component that aggregates various elements to form the course home page.
const CourseHome = () => {
  return (
    // React fragment used to return multiple elements without adding an extra node to the DOM.
    <>
      {/* Back component likely provides navigation to return to a previous page or a home page. */}
      <Back title='Explore Courses' />

      {/* Full-width banner image at the top of the page. */}
      <img src={`${process.env.PUBLIC_URL}/images/back.webp`} alt="Banner" style={{ width: '100%', display: 'block', marginBottom: -30 }} />

      {/* Overlay text positioned absolutely to appear centered on the banner image. */}
      <Typography variant="h2" component="div" sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)', // Centering the text horizontally and vertically.
          color: 'white', // White text for better visibility against a likely dark background.
          textAlign: 'center', // Center-aligning the text for aesthetic focus.
          fontWeight: 'bold', // Bold text to make the overlay more prominent.
        }}>
          Explore Our Courses 
        </Typography>

      {/* Container to limit the width of the content, providing alignment and padding. */}
      <Container maxWidth="lg">
        {/* CoursesCard component to display a grid or list of course cards. */}
        <CoursesCard />
        {/* OnlineCourses component to display additional online course options. */}
        <OnlineCourses />
      </Container>

      {/* Newsletter component to allow users to subscribe to updates. */}
      <Newsletter />

      {/* Footer component for adding site-wide footer content and navigation links. */}
      <Footer />
    </>
  );
};

export default CourseHome;

