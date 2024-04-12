import React from 'react';
import Back from '../common/back/Back';
import { Box, Grid, Typography, TextField, Button, Paper } from '@mui/material';
import Newsletter from '../home/Newsletter';
import Footer from '../home/Footer';

const Contact = () => {

  
  const mapUrl = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!38.020571!2d85.24565535!-0.655188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp';
  return (
    <>
      <Back title='Contact us' />
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
          Contact Us
        </Typography>
      <Box sx={{ pt: '20px', pb: '20px', paddingLeft:"130px", paddingRight: "130px" }}>
        <Grid container spacing={2} sx={{ boxShadow: 3 }}>
          <Grid item xs={12} md={6} sx={{ mt: 3 }}>
            <iframe src={mapUrl} style={{ width: '100%', height: '100%', border: 0 }} loading="lazy"></iframe>
          </Grid>
          {/* Paper component added here */}
          <Grid item xs={12} md={6} sx={{ mt: 3 }}>
            <Paper elevation={3} sx={{ p: 5 }}>
            <Typography variant="h2" component="div" sx={{ color: '#1eb2a6', fontWeight: 'bold', mt: 13, textAlign: 'left', mt: 2, mb: 2, }}>
             Contact Us
          </Typography>              
          <Typography sx={{ color: 'grey' }}>We're open for any suggestion or just to have a chat</Typography>
              
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
      <Newsletter />
      <Footer />
    </>
  );
};

export default Contact;
