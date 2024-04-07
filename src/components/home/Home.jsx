import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AboutCard from "../about/AboutCard";
import Hblog from "./Hblog";
import HAbout from "./HAbout";
import Hero from "./hero/Hero";
import Hprice from "./Hprice";
import Testimonal from "./testimonal/Testimonal";
import Awrapper from "../about/Awrapper"; // Make sure this path is correct

const Home = () => {
  return (
    <>
      {/* Hero is full-width */}
      <Hero />

      <Box sx={{ mt: 4 }}>
        {/* Container confines these components to its maxWidth except for Awrapper */}
        <Container maxWidth="xl">
          {/* AboutCard is inside the Container to adhere to the maxWidth */}
          <AboutCard sx={{ my: 4 }} />
        </Container>

        {/* Awrapper placed here to ensure it's full-width and directly under AboutCard */}
        <Awrapper />

        <Container maxWidth="xl">
          {/* Other components remain within Container for consistent maxWidth */}
          <HAbout sx={{ my: 4 }} />
          <Testimonal sx={{ my: 4 }} />
          <Hblog sx={{ my: 4 }} />
          <Hprice sx={{ my: 4 }} />
        </Container>
      </Box>
    </>
  );
};

export default Home;
