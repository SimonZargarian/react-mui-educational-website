import React from 'react';
import Heading from '../common/heading/Heading'; // Check this path
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { price } from '../../dummydata'; // Ensure correct path
import PriceCard from '../pricing/PriceCard'; // Ensure correct path
import Typography from "@mui/material/Typography";



const Hprice = () => {
  return (
    <Box sx={{ py: 8 }}>
<Typography variant="h2" component="div" sx={{ color: '#1eb2a6', fontWeight: 'bold', mt: 13, textAlign: 'center', mt: 6, mb: 2, }}>
        OUR PRICING
          </Typography>
          <Typography variant="h4" component="div" sx={{ textAlign: 'center', mb: 4, }}>
          Pricing & Packages
          </Typography>      
          <Grid container spacing={3} justifyContent="center">
        {price.map((plan, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <PriceCard plan={plan} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Hprice;


