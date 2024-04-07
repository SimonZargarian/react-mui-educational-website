import React from "react";
import { Box, Grid, Typography, Card, CardContent, CardMedia, Button } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { coursesCard } from "../../dummydata";

const CoursesCard = () => {
  return (
    <Box sx={{ padding: '50px 0' }}>
      <Grid container spacing={3}>
        {coursesCard.map((val) => (
          <Grid item xs={12} sm={6} md={4} key={val.id}>
            <Card sx={{ padding: '30px', textAlign: 'center' }}>
              <Box sx={{
                width: '80px', height: '80px', borderRadius: '50%', bgcolor: '#1eb2a6', padding: '15px',
                margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center'
              }}>
                <CardMedia component="img" image={val.cover} alt="" sx={{ width: '100%', height: '100%', borderRadius: '50%' }} />
              </Box>
              <Typography variant="h5" sx={{ marginTop: '15px' }}>{val.coursesName}</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0', color: '#1eb2a6' }}>
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                <Typography component="label">(5.0)</Typography>
              </Box>
              {val.courTeacher.map((details, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', color: 'grey', marginBottom: '10px' }}>
                  <CardMedia component="img" image={details.dcover} alt="" sx={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '20px' }} />
                  <Typography variant="subtitle1">{details.name}</Typography>
                </Box>
              ))}
              <Typography sx={{ color: '#1eb2a6', fontWeight: '500' }}>{val.priceAll} / {val.pricePer}</Typography>
              <Button variant="outlined" sx={{ marginTop: '20px', borderColor: '#1eb2a6', color: '#1eb2a6' }}>ENROLL NOW !</Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CoursesCard;
