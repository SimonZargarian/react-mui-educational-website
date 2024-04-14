import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

// PriceCard is a functional component that takes a single prop called 'plan'.
// This prop is an object containing details about a pricing plan.
const PriceCard = ({ plan }) => {
  return (
    // Card component from Material-UI used as the main container for the pricing card.
    <Card sx={{ 
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Adds shadow for depth
        padding: 4, // Uniform padding inside the card
        textAlign: 'center' // Centers the text within the card
      }}>
      <CardContent>
        {/* Typography for the plan's name. */}
        <Typography variant="h5" component="div">
          {plan.name} {/* Displaying the plan name */}
        </Typography>

        {/* Typography for the plan's price, styled distinctively. */}
        <Typography variant="h3" component="h2" sx={{ color: '#1eb2a6', mt: 2 }}>
          {/* Box component used to wrap the dollar sign for additional styling. */}
          <Box component="span" sx={{ fontSize: '20px', mr: 1, color: '#000' }}>$</Box>
          {plan.price} {/* Displaying the price of the plan */}
        </Typography>

        {/* Description of the plan. */}
        <Typography variant="body1" sx={{ mt: 2, color: 'text.secondary' }}>
          {plan.desc} {/* Displaying the plan description */}
        </Typography>

        {/* Button for taking action, like subscribing to the plan. */}
        <Button variant="outlined" sx={{ 
            mt: 3, // Margin top for spacing
            borderColor: '#1eb2a6', // Border color
            color: '#1eb2a6', // Text color
            '&:hover': { // Styles for hover state
              borderColor: '#1a806b', // Darker shade on hover for border
              color: '#1a806b' // Darker text color on hover
            } 
          }}>
          GET STARTED 
        </Button>
      </CardContent>
    </Card>
  );
};

export default PriceCard;
