import React from "react";
import { testimonal } from "../../../dummydata"; // Ensure the correct path
import Heading from "../../common/heading/Heading"; // Ensure the correct path
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"; // Correct icon import

const Testimonal = () => {
  return (
    <Box sx={{ py: 8, mt: -8 }}>
      <Typography variant="h2" component="div" sx={{ color: '#1eb2a6', fontWeight: 'bold', mt: 13, textAlign: 'center', mt: 6, mb: 2, }}>
        TESTIMONIAL
          </Typography>
          <Typography variant="h4" component="div" sx={{ textAlign: 'center', mb: 4, }}>
          Our Successful Students
          </Typography>
      <Grid container spacing={4} sx={{ mt: 3 }}>
        {testimonal.map((val, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3, transition: '0.5s', ':hover': { bgcolor: '#1eb2a6', color: 'white', '.MuiTypography-root, .MuiSvgIcon-root': { color: 'white' }, } }}>
              <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                <CardMedia component="img" image={val.cover} alt="" sx={{ width: 100, height: 100, borderRadius: '50%' }} />
                <FormatQuoteIcon sx={{ position: 'absolute', bottom: -10, bgcolor: '#1eb2a6', color: 'white', p: 1, borderRadius: '50%' }} />
              </Box>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography gutterBottom variant="h5" component="div">
                  {val.name}
                </Typography>
                <Typography variant="body2" color="#1eb2a6" sx={{ fontWeight: 'medium' }}>
                  {val.post}
                </Typography>
                <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary', transition: '0.5s' }}>
                  {val.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonal;
