import React from "react";
import { Box, Typography } from "@mui/material";

const Heading = ({ subtitle, title }) => {
  return (
    <Box sx={{ textAlign: 'center', color: 'common.white' }}>
      <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
        {subtitle}
      </Typography>
      <Typography variant="h4" component="h1" sx={{ mt: 1, mb: 2, fontWeight: 'bold' }}>
        {title}
      </Typography>
    </Box>
  );
};

export default Heading;
