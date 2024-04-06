import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { homeAbout } from "../../dummydata";
import { awrapper } from "../../dummydata";

const AboutCard = () => {
  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: -30,  mt: -12, position: 'relative', zIndex: 2}}>
      <Grid container spacing={6} sx={{ justifyContent: 'space-between', alignItems: 'stretch' }}>
        
        {/* Left side with background image */}
        <Grid item xs={12} md={6} sx={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/images/about.webp'})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat', // Ensure the background image doesn't repeat
          backgroundPosition: 'center top', // Adjusted background position
          height: '100vh', // Adjust the height as needed
          
        }}>
        </Grid>
        
        {/* Right side with content */}
        <Grid item xs={12} md={6} sx={{ p: 5 }}>
          <Typography variant="h2" component="div" sx={{ color: '#1eb2a6', fontWeight: 'bold', mt: 13 }}>
            LEARN ANYTHING
          </Typography>
          <Typography variant="h4" component="div">
            Benefits About Online Learning Expertise
          </Typography>
          <Box sx={{ mt: 5 }}>
            {homeAbout.map((val, index) => (
              <Card key={index} sx={{ mt: 5, paddingTop: "20px", paddingBottom: "20px", display: 'flex', mb: 3, transition: '0.5s', '&:hover': { bgcolor: '#1eb2a6', color: '#fff', boxShadow: '0 5px 25px -2px rgb(0 0 0 / 6%)' } }}>
                <CardMedia
                  component="img"
                  sx={{ width: 70, height: 70, m: 2 }}
                  image={val.cover}
                  alt=""
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {val.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {val.desc}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutCard;
