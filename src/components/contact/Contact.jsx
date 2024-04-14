import React from 'react';
import Back from '../common/back/Back';
import { Box, Grid, Typography, TextField, Button, Paper } from '@mui/material';
import Newsletter from '../home/Newsletter';
import Footer from '../home/Footer';

// Contact is a React functional component designed to display contact information and a contact form.
const Contact = () => {
  // Google Maps embed URL for displaying the location on the map.
  const mapUrl = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!38.020571!2d85.24565535!-0.655188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp';

  return (
    <>
      {/* Back component likely provides navigation to go back to a previous page or home. */}
      <Back title='Contact us' />

      {/* Banner image for visual engagement. */}
      <img src={`${process.env.PUBLIC_URL}/images/back.webp`} alt="Banner" style={{ width: '100%', display: 'block', marginBottom: -30 }} />

      {/* Text overlay positioned absolutely to appear centered over the banner image. */}
      <Typography variant="h2" component="div" sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white', // White text for better visibility against a possibly dark background.
          textAlign: 'center', // Center text alignment.
          fontWeight: 'bold', // Bold text for emphasis.
        }}>
          Contact Us
        </Typography>

      {/* Box component for additional content padding and alignment. */}
      <Box sx={{ pt: '20px', pb: '20px', paddingLeft:"130px", paddingRight: "130px" }}>
        {/* Grid container for layout structure with box shadow for styling. */}
        <Grid container spacing={2} sx={{ boxShadow: 3 }}>
          {/* Grid item for the embedded Google Map. */}
          <Grid item xs={12} md={6} sx={{ mt: 3 }}>
            {/* Iframe for displaying the map, styled to fit the container. */}
            <iframe src={mapUrl} style={{ width: '100%', height: '100%', border: 0 }} loading="lazy"></iframe>
          </Grid>

          {/* Grid item for contact information and form, wrapped in a Paper component for elevated effect. */}
          <Grid item xs={12} md={6} sx={{ mt: 3 }}>
            <Paper elevation={3} sx={{ p: 5 }}>
              <Typography variant="h2" component="div" sx={{ color: '#1eb2a6', fontWeight: 'bold', mt: 13, textAlign: 'left', mt: 2, mb: 2, }}>
                Contact Us
              </Typography>              
              <Typography sx={{ color: 'grey' }}>
                We're open for any suggestion or just to have a chat
              </Typography>

              {/* Displaying the address, email, and phone number in a styled grid format. */}
              <Box sx={{ display: 'grid', gridTemplateColumns: { sm: '1fr 1fr' }, gap: 2, my: 3 }}>
                <Box>
                  <Typography variant='h6'>ADDRESS:</Typography>
                  <Typography>198 West 21th Street, Suite 721 New York NY 10016</Typography>
                </Box>
                <Box>
                  <Typography variant='h6'>EMAIL:</Typography>
                  <Typography>info@yoursite.com</Typography>
                </Box>
                <Box>
                  <Typography variant='h6'>PHONE:</Typography>
                  <Typography>+ 1235 2355 98</Typography>
                </Box>
              </Box>

              {/* Form for sending messages with validation disabled. */}
              <Box component='form' noValidate autoComplete='off'>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label='Name' variant='outlined' />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label='Email' type='email' variant='outlined' />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label='Subject' variant='outlined' />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label='Message' multiline rows={4} variant='outlined' />
                  </Grid>
                </Grid>
                <Button variant='contained' sx={{ mt: 3, bgcolor: '#1eb2a6', '&:hover': { bgcolor: '#169487' } }}>SEND MESSAGE</Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Newsletter sign-up component for user engagement. */}
      <Newsletter />

      {/* Footer component for site-wide navigation and information. */}
      <Footer />
    </>
  );
};

export default Contact;
