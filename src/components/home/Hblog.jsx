import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { blog } from "../../dummydata";
import { Avatar, CardHeader, IconButton, Container } from "@mui/material";
import { Comment, DateRange, Person } from "@mui/icons-material";

const Hblog = () => {
  return (
    <Box sx={{ py: 8, background: "#f8f8f8" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="div"
          sx={{
            color: "#1eb2a6",
            fontWeight: "bold",
            mt: 6,
            textAlign: "center",
            mb: 2,
          }}
        >
          OUR BLOG
        </Typography>
        <Typography
          variant="h4"
          component="div"
          sx={{ textAlign: "center", mb: 4 }}
        >
          Recent From Blog
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {blog.slice(0, 3).map((val, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  maxWidth: 345,
                  boxShadow: "0 5px 25px -2px rgba(0,0,0,0.1)",
                  transition: "0.3s",
                  "&:hover": { transform: "translateY(-5px)" },
                }}
              >
                <CardMedia
                  component="img"
                  height="194"
                  image={val.cover}
                  alt={val.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {val.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {val.desc}
                  </Typography>
                </CardContent>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: "#1eb2a6" }}>
                      <Person />
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="comments">
                      <Comment />
                    </IconButton>
                  }
                  title={val.type}
                  subheader={val.date}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Hblog;
