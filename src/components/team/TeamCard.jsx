import React from "react";
import { team } from "../../dummydata";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";

const TeamCard = () => {
  return (
    <>
      {team.map((val, index) => (
        <Card
          sx={{
            maxWidth: 345,
            margin: 2,
            transition: "0.5s",
            "&:hover": {
              backgroundColor: "#1eb2a6",
              color: "#fff",
              ".overlay": { opacity: 1 },
            },
          }}
          key={index}
        >
          <CardMedia
            component="img"
            height="320"
            image={val.cover}
            alt={val.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {val.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {val.work}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default TeamCard;
