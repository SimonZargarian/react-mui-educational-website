  import React from "react";
  import Box from "@mui/material/Box"; // Import Box for additional layout control
  import Container from "@mui/material/Container";
  import AboutCard from "../about/AboutCard";
  import Hblog from "./Hblog";
  import HAbout from "./HAbout";
  import Hero from "./hero/Hero";
  import Hprice from "./Hprice";
  import Testimonal from "./testimonal/Testimonal";

  const Home = () => {
    return (
      <>
        {/* Hero is placed outside Container to be full-width */}
        <Hero />
        <Box sx={{ mt: 4 }}>
          <Container maxWidth="xl">
            {/* Container confines these components to its maxWidth */}
            <AboutCard sx={{ my: 4 }} />
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
