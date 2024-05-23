import React from "react";
import Back from "../common/back/Back";
import TeamCard from "./TeamCard";
import Awrapper from "../about/Awrapper";
import { Box, Grid, Typography } from "@mui/material";
import Newsletter from "../home/Newsletter";
import Footer from "../home/Footer";

const Team = () => {
  return (
    <>
      <Back title="Team" />

      <img
        src={`${process.env.PUBLIC_URL}/images/back.webp`}
        alt="Banner"
        style={{ width: "100%", display: "block", marginBottom: -30 }}
      />

      <Typography
        variant="h2"
        component="div"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Our Team
      </Typography>

      <Box
        sx={{
          pt: 8,
          pb: 8,
          px: 2,
          ".teamCard": {
            transition: "0.5s",
            "&:hover": {
              backgroundColor: "#1eb2a6",
              color: "#fff",
              ".overlay": { opacity: 1 },
            },
          },
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          <TeamCard />
        </Grid>
      </Box>

      <Awrapper />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Team;
