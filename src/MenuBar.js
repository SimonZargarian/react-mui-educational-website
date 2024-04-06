import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container"; // Import Container for inner content alignment
import { Link } from "react-router-dom"; // Import Link component for navigation
import { useTheme, alpha } from "@mui/material/styles";

const MenuBar = () => {
  const theme = useTheme();

  return (
    <AppBar position="fixed" sx={{
      top: "110px",
      backgroundColor: alpha(theme.palette.background.default, 0.2), // Applying transparency
      width: 'calc(100% - 240px)', // Adjust the AppBar's width directly
      left: '50%', // Center the AppBar
      transform: 'translateX(-50%)', // Ensure it's centered by moving it left by half its width
      borderRadius: theme.shape.borderRadius,
    }}>
      <Container maxWidth="1x"> {/* Use Container to align and wrap Toolbar content */}
        <Toolbar sx={{ justifyContent: 'left' }}>
          <Button component={Link} to="/" sx={{ color: '#f0f0f0', marginRight: '20px' }}>Home</Button>
          <Button component={Link} to="/about" sx={{ color: '#f0f0f0', marginRight: '20px' }}>About</Button>
          <Button component={Link} to="/services" sx={{ color: '#f0f0f0', marginRight: '20px' }}>Services</Button>
          <Button component={Link} to="/contact" sx={{ color: '#f0f0f0' }}>Contact</Button>
          <Button size="large"
          component={Link} to="/"
          sx={{
            backgroundColor: '#1eb2a6',
            color: 'white',
            ml: 'auto', // Automatically margins to push it to the far right
            height: '100%', // Make it cover the full AppBar height
            borderRadius: 0, // Remove border radius if desired
            '&:hover': {
              backgroundColor: alpha('#1eb2a6', 0.85),
            },
          }}
        >
          GET CERTIFICATE
        </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MenuBar;
