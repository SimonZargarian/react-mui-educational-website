import React from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography, Paper } from '@mui/material';
import Newsletter from '../home/Newsletter';
import Footer from '../home/Footer';
import Awrapper from './Awrapper';

const About = () => {
  return (
    <>
          {/* Banner image with full width and a slight upward margin to overlap the following content */}
      <img src={`${process.env.PUBLIC_URL}/images/back.webp`} alt="Banner" style={{ width: '100%', display: 'block', marginBottom: -30 }} />
           {/* Typography component absolutely positioned to overlay the center of the banner image */}
      <Typography variant="h2" component="div" sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white', // Assuming the text is white for better visibility
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
          About Us
        </Typography>

      {/* Paper component used as a container for the main content with a shadow effect for depth */}
      <Paper elevation={3} sx={{ margin: 'auto', maxWidth: 1260, overflow: 'hidden', mt: 15 }}>
        <Grid container>
          {/* Grid item for the image on the left or right depending on the screen size */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="100%"
                image={`${process.env.PUBLIC_URL}/images/back.webp`} // Replace with your image path
                alt="About Image"
              />
            </Card>
          </Grid>
          {/* Grid item for textual content, using a flex layout to align content vertically */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent>
              {/* Typography for section headings */}
              <Typography variant="h4" gutterBottom  sx={{ mt: 4}}>
                Our Mission
              </Typography>
              {/* Detailed paragraph about the organization's mission */}
              <Typography variant="body1" paragraph>
              At Academia, we are dedicated to making high-quality education accessible to everyone, everywhere. We believe that learning should be engaging, affordable, and adaptable to the needs of the modern student. Our mission is to empower learners of all ages with the tools and resources they need to succeed in their academic and personal growth journeys.
              <br /><br />
              Our platform offers a wide range of courses and resources designed by experienced educators and industry experts. Whether you're a student looking to supplement your studies, a professional aiming to enhance your skills, or a lifelong learner curious about new subjects, our comprehensive and flexible learning options are tailored to meet your needs.
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Paper>

      {/* Reversed Paper */}
      <Paper elevation={3} sx={{ margin: 'auto', maxWidth: 1260, overflow: 'hidden', mt: 0, mb: 5}}>
        <Grid container>
          {/* For reverse layout, the order of these Grid items are swapped */}
          <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
            <CardContent>
              <Typography variant="h4" gutterBottom sx={{ mt: 4}}>
               Who We Are
              </Typography>
              <Typography variant="body1" paragraph>
              Academia was founded by a group of passionate educators, technologists, and entrepreneurs who recognized the transformative potential of online education. Our team comprises people from diverse backgrounds and experiences, all united by a common goal: to democratize education and make it universally available.
              <br /><br />
              Our educators are seasoned professionals with deep expertise in their respective fields. They bring their real-world experience and a passion for teaching to each course they design. Meanwhile, our technology team works tirelessly to ensure that our platform is user-friendly, secure, and equipped with the latest advancements in educational technology.
                {/* Insert additional text here */}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
            <Card>
              <CardMedia
                component="img"
                height="100%"
                image={`${process.env.PUBLIC_URL}/images/back.webp`} // Replace with your image path
                alt="Another Image"
              />
            </Card>
          </Grid>
        </Grid>
      </Paper>
      <Awrapper />
      <Newsletter />
      <Footer />
    </>
  );
};

export default About;



