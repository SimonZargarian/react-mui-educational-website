import React from "react";
import Back from "../common/back/Back";
import PriceCard from "./PriceCard";
import Faq from "./Faq";
import { Container, Grid, Typography, Box } from "@mui/material";
import { price } from "../../dummydata";
import Newsletter from "../home/Newsletter";
import { FormatQuoteRounded } from "@mui/icons-material";
import Footer from "../home/Footer";

const Pricing = () => {
  return (
    <>
      <Back title="Choose The Right Plan" />

      <img
        src={`${process.env.PUBLIC_URL}/images/back.webp`}
        alt="Banner"
        style={{ width: "100%", display: "block", marginBottom: -30 }}
      />

      <Typography
        variant="h2"
        component="div"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Choose The Right Plan
      </Typography>

      <Box sx={{ pt: 8, pb: 8 }}>
        <Container>
          <Typography
            variant="h1"
            sx={{
              fontSize: "50px",
              color: "#1eb2a6",
              margin: "40px 0",
              textAlign: "center",
              "& span": { fontSize: "20px", color: "#000" },
            }}
          >
            Pricing Plans <span>Choose the right plan</span>
          </Typography>

          <Grid container spacing={2} justifyContent="center">
            {price.map((plan, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <PriceCard plan={plan} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Faq />

      <Newsletter />

      <Footer />
    </>
  );
};

export default Pricing;
