import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Heading from "../../common/heading/Heading";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/bg.webp"})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          textAlign: "center",
          width: "100%",
          px: 2,
        }}
      >
        <Heading
          subtitle="WELCOME TO ACADEMIA"
          title="Best Online Education Expertise"
        />
        <Typography variant="body1" sx={{ my: 2, color: "common.white" }}>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            marginTop: 4,
          }}
        >
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIosIcon />}
            sx={{
              backgroundColor: "#1eb2a6",
              color: "white",
              "&:hover": {
                backgroundColor: "#16897b",
              },
            }}
          >
            GET STARTED NOW
          </Button>
          <Button
            variant="outlined"
            size="large"
            endIcon={<ArrowForwardIosIcon />}
            sx={{
              borderColor: "#1eb2a6",
              color: "#1eb2a6",
              "&:hover": {
                borderColor: "white",
                color: "white",
              },
            }}
          >
            VIEW COURSE
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
