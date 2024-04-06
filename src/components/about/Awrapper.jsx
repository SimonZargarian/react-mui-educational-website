import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { awrapper } from "../../dummydata";

const Awrapper = () => {
  return (
    <Box sx={{
      overflow: 'hidden',
      py: 5,
      backgroundImage: `url(${process.env.PUBLIC_URL + '/images/awrapper.webp'})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
      height: { xs: '50vh', md: '30vh' },
    }}>
      <Grid container spacing={2} justifyContent="center">
        {awrapper.map((val, index) => (
          <Grid item xs={6} sm={4} key={index} sx={{
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            textAlign: 'center',
          }}>
            <CardMedia
              component="img"
              sx={{ 
                width: 220, // Increase size
                height: 220, // Increase size
                borderRadius: '50%',
                mt: '60px', // Move the image up by 60px
              }}
              image={val.cover}
              alt=""
            />
            <Typography variant="h4" sx={{ mt: 2, fontWeight: 'bold' }}>
              {val.data}
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              {val.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Awrapper;
