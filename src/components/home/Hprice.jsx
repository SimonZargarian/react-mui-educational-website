import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { price } from "../../dummydata";
import PriceCard from "../pricing/PriceCard";
import Typography from "@mui/material/Typography";

const Hprice = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Typography
        variant="h2"
        component="div"
        sx={{
          color: "#1eb2a6",
          fontWeight: "bold",
          mt: 6,
          textAlign: "center",
          mb: 2,
        }}
      >
        OUR PRICING
      </Typography>
      <Typography
        variant="h4"
        component="div"
        sx={{ textAlign: "center", mb: 4 }}
      >
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
