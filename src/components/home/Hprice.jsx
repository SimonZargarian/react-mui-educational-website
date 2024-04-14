import React from 'react';
import Heading from '../common/heading/Heading'; // Check this path
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { price } from '../../dummydata'; // Ensure correct path
import PriceCard from '../pricing/PriceCard'; // Ensure correct path
import Typography from "@mui/material/Typography";



// Hprice is a React functional component.
const Hprice = () => {
  return (
    <Box sx={{ py: 8 }}> {/*  Box component from Material-UI used as the outer container with vertical padding of 8 for spacing */}
      <Typography variant="h2" component="div" sx={{ color: '#1eb2a6', fontWeight: 'bold', mt: 6, textAlign: 'center', mb: 2 }}>
        {/*  Typography for the main heading of the pricing section. Text is centered, bold, with specific color. */}
        OUR PRICING
      </Typography>
      <Typography variant="h4" component="div" sx={{ textAlign: 'center', mb: 4 }}>
        {/* Subheading with smaller font size (h4), also centered, describing the section */}
        Pricing & Packages
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {/* Grid container to hold the pricing cards. It's centered and has a spacing of 3 between grid items. */}
        {price.map((plan, index) => ( // Mapping through an array 'price' which contains different pricing plans.
          <Grid item xs={12} sm={6} md={3} key={index}> {/* Grid items are responsive, taking full width on extra small screens, half on small, and a quarter on medium. */}
            <PriceCard plan={plan} /> {/* PriceCard component, which presumably displays the details of each pricing plan. */}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Hprice; // Export the Hprice component to be used in other parts of the application.


