import React from "react";
import Back from "../common/back/Back";
import PriceCard from "./PriceCard";
import Faq from "./Faq";
import { Container, Grid, Typography, Box } from "@mui/material";
import { price } from "../../dummydata"; // Ensure this path is correct
import Newsletter from "../home/Newsletter";
import { FormatQuoteRounded } from "@mui/icons-material";
import Footer from "../home/Footer";

// Pricing is a React functional component for displaying a pricing page.
const Pricing = () => {
  return (
    <>
      {/* Back component might be a custom component for rendering a navigation back button or similar functionality. */}
      <Back title="Choose The Right Plan" />

      {/* Full-width banner image */}
      <img src={`${process.env.PUBLIC_URL}/images/back.webp`} alt="Banner" style={{ width: '100%', display: 'block', marginBottom: -30 }} />

      {/* Overlay text on the banner image. Positioned absolutely to center the text on the image. */}
      <Typography variant="h2" component="div" sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)', // Centers the text horizontally and vertically
          color: 'white', // White text for visibility against potentially dark background
          textAlign: 'center', // Center alignment of the text
          fontWeight: 'bold', // Bold text for emphasis
        }}>
          Choose The Right Plan
        </Typography>

      {/* Container for the pricing plans, spaced with padding for visual separation from other content. */}
      <Box sx={{ pt: 8, pb: 8 }}>{/* Top and bottom padding */}
        <Container> {/* Container to limit the width of the content inside */}
          {/* Heading for the pricing section */}
          <Typography variant="h1" sx={{ fontSize: '50px', color: '#1eb2a6', margin: '40px 0', textAlign: 'center', '& span': { fontSize: '20px', color: '#000' } }}>
            Pricing Plans <span>Choose the right plan</span>
          </Typography>

          {/* Grid layout for pricing cards */}
          <Grid container spacing={2} justifyContent="center"> {/* Ensures the cards are centrally aligned and spaced appropriately */}
            {/* Mapping over price data to render PriceCard components for each plan */}
            {price.map((plan, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}> {/* Responsive settings for grid items */}
                <PriceCard plan={plan} /> {/* Renders a card for each pricing plan */}
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FAQ section included at the bottom of the pricing page */}
      <Faq />

      {/* Newsletter sign-up section */}
      <Newsletter />

      {/* Footer of the page, contains links and copyright information */}
      <Footer />
    </>
  );
};

export default Pricing;
