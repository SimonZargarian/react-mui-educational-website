import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { useTheme, alpha } from "@mui/material/styles";

const MenuBar = () => {
  const theme = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled more than 0 pixels
      setIsScrolled(window.pageYOffset > 0);
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar position="fixed" sx={{
      top: "110px",
      backgroundColor: isScrolled ? alpha("#000", 0.4) : alpha(theme.palette.background.default, 0.2), // Change color on scroll
      width: 'calc(100% - 240px)',
      left: '50%',
      transform: 'translateX(-50%)',
      borderRadius: theme.shape.borderRadius,
      transition: 'background-color 0.3s', // Smooth transition for backgroundColor change
    }}>
      <Container maxWidth="1x">
        <Toolbar sx={{ justifyContent: 'left' }}>
          {/* Buttons */}
          <Button component={Link} to="/" sx={{ color: '#f0f0f0', marginRight: '20px' }}>Home</Button>
          <Button component={Link} to="/about" sx={{ color: '#f0f0f0', marginRight: '20px' }}>About</Button>
          <Button component={Link} to="/courses" sx={{ color: '#f0f0f0', marginRight: '20px' }}>Courses</Button>
          <Button component={Link} to="/team" sx={{ color: '#f0f0f0', marginRight: '20px' }}>Team</Button>
          <Button component={Link} to="/pricing" sx={{ color: '#f0f0f0', marginRight: '20px' }}>Pricing</Button>
          <Button component={Link} to="/journal" sx={{ color: '#f0f0f0', marginRight: '20px' }}>Journal</Button>
          <Button component={Link} to="/contact" sx={{ color: '#f0f0f0' }}>Contact</Button>
          <Button size="large"
            component={Link} to="/"
            sx={{
              backgroundColor: '#1eb2a6',
              color: 'white',
              ml: 'auto',
              height: '100%',
              borderRadius: "60px",
              paddingLeft: "30px",
              paddingRight: "30px",
              paddingTop: "12px",
              paddingBottom: "10px",
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
