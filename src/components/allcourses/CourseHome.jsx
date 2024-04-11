import React from 'react';
import Back from '../common/back/Back';
import CoursesCard from './CoursesCard';
import OnlineCourses from './OnlineCourses';
import { Container, Typography } from '@mui/material';
import Newsletter from '../home/Newsletter';
import Footer from '../home/Footer';

const CourseHome = () => {
  return (
    <>
      <Back title='Explore Courses' />
      <img src={`${process.env.PUBLIC_URL}/images/back.webp`} alt="Banner" style={{ width: '100%', display: 'block', marginBottom: -30 }} />
      <Typography variant="h2" component="div" sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white', // Assuming the text is white for better visibility
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
          Explore Our Courses
        </Typography>
      <Container maxWidth="lg">
        <CoursesCard />
        <OnlineCourses />
      </Container>
      <Newsletter />
      <Footer />
    </>
  );
};

export default CourseHome;
