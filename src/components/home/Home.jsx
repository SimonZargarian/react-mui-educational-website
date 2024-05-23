import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AboutCard from "../about/AboutCard";
import Hblog from "./Hblog";
import HAbout from "./HAbout";
import Hero from "./hero/Hero";
import Hprice from "./Hprice";
import Testimonal from "./testimonal/Testimonal";
import Awrapper from "../about/Awrapper";
import OnlineCourses from "../allcourses/OnlineCourses";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Hero />

      <Container maxWidth="xl">
        <AboutCard sx={{ my: 4 }} />

        <HAbout sx={{ my: 4 }} />

        <Testimonal sx={{ my: 4 }} />
      </Container>

      <Awrapper />

      <Container maxWidth="xl">
        <OnlineCourses sx={{ my: 4 }} />

        <Hblog sx={{ my: 4 }} />

        <Hprice sx={{ my: 4 }} />
      </Container>

      <Newsletter />

      <Footer />
    </>
  );
};

export default Home;
