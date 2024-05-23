import React from "react";
import { blog } from "../../dummydata";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import UserIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CommentIcon from "@mui/icons-material/Comment";

const BlogCard = () => {
  return (
    <Grid container spacing={2}>
      {blog.map((val, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            sx={{ maxWidth: 345, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}
          >
            <CardMedia component="img" height="200" image={val.cover} alt="" />
            <CardContent>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <UserIcon sx={{ mr: 0.5 }} />
                  {val.type}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <CalendarTodayIcon sx={{ mr: 0.5 }} />
                  {val.date}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <CommentIcon sx={{ mr: 0.5 }} />
                  {val.com}
                </Typography>
              </Box>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  color: "#1eb2a6",
                  "&:hover": { color: "#17a296", cursor: "pointer" },
                }}
              >
                {val.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {val.desc}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogCard;
