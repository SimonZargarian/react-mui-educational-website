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
import OnlineCourses from "../allcourses/OnlineCourses";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      {/* The Hero component, typically a large banner or image at the top of the page, spanning full width */}
      <Hero />

      {/* Container component confines its children's width to 'xl' (extra-large). This helps maintain consistent alignment and padding */}
      <Container maxWidth="xl">
        {/* AboutCard displays a card with about us information. 'my: 4' adds vertical margin for spacing */}
        <AboutCard sx={{ my: 4 }} />

        {/* HAbout is likely a component related to additional about information with vertical margins */}
        <HAbout sx={{ my: 4 }} />

        {/* Testimonal component for displaying testimonials, with vertical margin for spacing */}
        <Testimonal sx={{ my: 4 }} />
      </Container>

      {/* Awrapper might be a wrapper component for a specific section or functionality that does not need width constraints */}
      <Awrapper/>

      {/* Another Container to hold different sections ensuring they align with the first set but can be styled or managed separately */}
      <Container maxWidth="xl">
        {/* OnlineCourses component likely displays a list or grid of online courses with vertical spacing */}
        <OnlineCourses sx={{ my: 4 }} />

        {/* Hblog component displays blog entries or articles with vertical margin */}
        <Hblog sx={{ my: 4 }} />

        {/* Hprice displays pricing plans or similar content with added vertical spacing */}
        <Hprice sx={{ my: 4 }} />
      </Container>
      
      {/* Newsletter component, typically for signing up to a mailing list, placed full-width */}
      <Newsletter />

      {/* Footer contains site-wide links, copyright information, etc., also full-width to close off the page */}
      <Footer />
    </>
  );
};

export default Home;
