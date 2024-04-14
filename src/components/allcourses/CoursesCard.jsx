import React from "react";
import { Box, Grid, Typography, Card, CardContent, CardMedia, Button } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { coursesCard } from "../../dummydata";

// CoursesCard is a functional React component designed to display a collection of course cards.
const CoursesCard = () => {
  return (
    // Box is used as an outer container with padding and margin styling.
    <Box sx={{ padding: '50px 0', mt: 4 }}>
      {/* Grid container from Material-UI for responsive layout of course cards.*/} 
      <Grid container spacing={3}>
        {/* Mapping over coursesCard data array to generate a card for each course. */} 
        {coursesCard.map((val) => (
          // Grid item for each course card with responsive settings for different screen sizes.
          <Grid item xs={12} sm={6} md={4} key={val.id}>
            {/* Card component with padding and centered text.*/} 
            <Card sx={{ padding: '30px', textAlign: 'center' }}>
              {/* Box for the course image, styled as a circular frame. */} 
              <Box sx={{
                width: '80px', height: '80px', borderRadius: '50%', bgcolor: '#1eb2a6', padding: '15px',
                margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center'
              }}>
                {/* CardMedia component for displaying course image. */} 
                <CardMedia component="img" image={val.cover} alt="" sx={{ width: '100%', height: '100%', borderRadius: '50%' }} />
              </Box>
              {/* Typography for the course name. */} 
              <Typography variant="h5" sx={{ marginTop: '15px' }}>{val.coursesName}</Typography>
              {/* Box for displaying ratings, styled with flex layout to center content. */} 
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0', color: '#1eb2a6' }}>
                {/* Star icons generated for ratings. */} 
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                {/* Label component for the numerical rating. */} 
                <Typography component="label">(5.0)</Typography>
              </Box>
              {/* Mapping over courTeacher to display each instructor's details. */} 
              {val.courTeacher.map((details, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', color: 'grey', marginBottom: '10px' }}>
                  {/* CardMedia for instructor's image. */} 
                  <CardMedia component="img" image={details.dcover} alt="" sx={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '20px' }} />
                  {/* Typography for the instructor's name. */} 
                  <Typography variant="subtitle1">{details.name}</Typography>
                </Box>
              ))}
              {/* Typography for displaying the price. */} 
              <Typography sx={{ color: '#1eb2a6', fontWeight: '500' }}>{val.priceAll} / {val.pricePer}</Typography>
              {/* Button for enrolling in the course. */} 
              <Button variant="outlined" sx={{ marginTop: '20px', borderColor: '#1eb2a6', color: '#1eb2a6' }}>ENROLL NOW !</Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CoursesCard;
