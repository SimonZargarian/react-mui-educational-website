import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const PriceCard = ({ plan }) => {
  return (
    <Card
      sx={{
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        padding: 4,
        textAlign: "center",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {plan.name}
        </Typography>

        <Typography
          variant="h3"
          component="h2"
          sx={{ color: "#1eb2a6", mt: 2 }}
        >
          <Box component="span" sx={{ fontSize: "20px", mr: 1, color: "#000" }}>
            $
          </Box>
          {plan.price}
        </Typography>

        <Typography variant="body1" sx={{ mt: 2, color: "text.secondary" }}>
          {plan.desc}
        </Typography>

        <Button
          variant="outlined"
          sx={{
            mt: 3,
            borderColor: "#1eb2a6",
            color: "#1eb2a6",
            "&:hover": {
              borderColor: "#1a806b",
              color: "#1a806b",
            },
          }}
        >
          GET STARTED
        </Button>
      </CardContent>
    </Card>
  );
};

export default PriceCard;
