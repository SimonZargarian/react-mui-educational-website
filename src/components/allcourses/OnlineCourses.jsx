import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { online } from '../../dummydata'; // Ensure the correct path
import Heading from '../common/heading/Heading'; // Ensure the correct path

const OnlineCourses = () => {
  return (
    <Box sx={{ py: 8, mt: -6 }}>
      <Typography variant="h2" component="div" sx={{ color: '#1eb2a6', fontWeight: 'bold', mt: 13, textAlign: 'center', mt: 6, mb: 2, }}>
        COURSES
          </Typography>
          <Typography variant="h4" component="div" sx={{ textAlign: 'center', mb: 4, }}>
          Browse Our Online Courses
          </Typography>
      <Grid container spacing={4} sx={{ mt: 3 }}>
        {online.map((val, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ textAlign: 'center', p: 3, boxShadow: '0 5px 25px -2px rgba(0,0,0,0.06)', transition: '0.5s', '&:hover': { bgcolor: '#1eb2a6', color: 'white', '.MuiCardMedia-root': { opacity: 0 }, '.MuiCardMedia-root:hover': { opacity: 1 } } }}>
              <Box sx={{ position: 'relative', display: 'inline-block', width: '80px', height: '80px', margin: 'auto' }}>
                <CardMedia
                  component="img"
                  image={val.cover}
                  alt=""
                  sx={{ width: '100%', height: '100%', borderRadius: '50%' }}
                />
                <CardMedia
                  component="img"
                  image={val.hoverCover}
                  alt=""
                  sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '50%', opacity: 0, transition: 'opacity 0.5s', '&:hover': { opacity: 1 } }}
                />
              </Box>
              <Typography variant="h5" component="div" sx={{ mt: 2, fontWeight: 'medium' }}>
                {val.courseName}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, bgcolor: '#f8f8f8', p: '5px 20px', borderRadius: '5px', display: 'inline-block', fontWeight: '500', color: '#1eb2a6' }}>
                {val.course}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OnlineCourses;
