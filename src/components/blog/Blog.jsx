import React from "react";
import Back from "../common/back/Back";
import BlogCard from "./BlogCard";
import { Container, Grid, Typography, Box } from "@mui/material";
import Newsletter from "../home/Newsletter";
import Footer from "../home/Footer";

const Blog = () => {
  return (
    <>
      <Back title="Blog Posts" />
      <img src={`${process.env.PUBLIC_URL}/images/back.webp`} alt="Banner" style={{ width: '100%', display: 'block', marginBottom: -30 }} />
      {/* Text overlay */}
      <Typography variant="h2" component="div" sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white', // Assuming the text is white for better visibility
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
          Blog Posts
        </Typography>
      <Box sx={{ pt: 8, pb: 8, mt: 6 }}>
        <Container>
          <Grid container spacing={4}>
            <BlogCard />
            {/* Duplicate <BlogCard /> as needed, or map over your blog data */}
          </Grid>
        </Container>
      </Box>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Blog;
