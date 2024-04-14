import React from "react";
import Back from "../common/back/Back";
import BlogCard from "./BlogCard";
import { Container, Grid, Typography, Box } from "@mui/material";
import Newsletter from "../home/Newsletter";
import Footer from "../home/Footer";

// Blog is a React functional component that serves as a page for displaying blog posts.
const Blog = () => {
  return (
    // React Fragment allows for grouping multiple elements without adding extra nodes to the DOM.
    <>
      {/* Back component provides a navigation link to go back to a previous page or a home page, enhancing user navigation. */}
      <Back title="Blog Posts" />

      {/* Full-width banner image at the top of the blog page. */}
      <img src={`${process.env.PUBLIC_URL}/images/back.webp`} alt="Banner" style={{ width: '100%', display: 'block', marginBottom: -30 }} />

      {/* Typography component acts as a text overlay positioned absolutely to appear centered over the banner image. */}
      <Typography variant="h2" component="div" sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)', // Centers the text both vertically and horizontally.
          color: 'white', // White color for text ensures visibility against potentially dark background images.
          textAlign: 'center', // Center-aligns the text for better presentation.
          fontWeight: 'bold', // Bold font weight for making the heading stand out.
        }}>
          Blog Posts 
        </Typography>

      {/* Box component provides padding around the content and a margin top to space it from the banner. */}
      <Box sx={{ pt: 8, pb: 8, mt: 6 }}>
        {/* Container limits the width of the content and centers it, making the layout more manageable on large screens. */}
        <Container>
          {/* Grid container organizes the blog cards into a responsive grid. */}
          <Grid container spacing={4}>
            {/* BlogCard component displays individual blog entries. If multiple blog posts exist, they should be rendered here, potentially using a map function. */}
            <BlogCard />
            {/* Additional BlogCard components would be included here if static. For dynamic content, a map over blog data would be used. */}
          </Grid>
        </Container>
      </Box>

      {/* Newsletter component to allow users to subscribe to updates, fostering engagement. */}
      <Newsletter />

      {/* Footer component adds a site-wide footer with links and information, providing consistency across pages. */}
      <Footer />
    </>
  );
};

export default Blog;
