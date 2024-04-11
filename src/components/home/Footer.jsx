import React from 'react';
import { Container, Grid, Typography, Link, Box, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#e0e0e0', color: 'text.primary', pt: 6, pb: 2, mt: 4, mt:0 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              ACADEMIA
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              ONLINE EDUCATION & LEARNING
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              A small river named Duden flows by their place and supplies it with the necessary regelialia.
            </Typography>
            <IconButton sx={{ color: '#1eb2a6' }} aria-label="facebook" component="span">
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: '#1eb2a6' }} aria-label="twitter" component="span">
              <TwitterIcon />
            </IconButton>
            <IconButton sx={{ color: '#1eb2a6' }} aria-label="instagram" component="span">
              <InstagramIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Explore
            </Typography>
            <Link href="#" color="inherit" sx={{ display: 'block' }}>About Us</Link>
            <Link href="#" color="inherit" sx={{ display: 'block' }}>Services</Link>
            <Link href="#" color="inherit" sx={{ display: 'block' }}>Courses</Link>
            <Link href="#" color="inherit" sx={{ display: 'block' }}>Blog</Link>
            <Link href="#" color="inherit" sx={{ display: 'block' }}>Contact us</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#" color="inherit" sx={{ display: 'block' }}>Contact Us</Link>
            <Link href="#" color="inherit" sx={{ display: 'block' }}>Pricing</Link>
            <Link href="#" color="inherit" sx={{ display: 'block' }}>Terms & Conditions</Link>
            <Link href="#" color="inherit" sx={{ display: 'block' }}>Privacy</Link>
            <Link href="#" color="inherit" sx={{ display: 'block' }}>Feedbacks</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Have a Questions?
            </Typography>
            <Typography variant="body2">
              203 Fake St. Mountain View, San Francisco, California, USA<br/>
              +2 392 3929 210<br/>
              info@yourdomain.com
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
