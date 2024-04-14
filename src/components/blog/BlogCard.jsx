import React from "react";
import { blog } from "../../dummydata";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import UserIcon from "@mui/icons-material/Person"; // Example for a user icon
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"; // Example for a calendar icon
import CommentIcon from "@mui/icons-material/Comment"; // Example for a comment icon

// BlogCard is a functional React component for rendering multiple blog entries.
const BlogCard = () => {
  return (
    // Grid container to arrange all blog cards with uniform spacing.
    <Grid container spacing={2}>
      {/* Mapping over 'blog' data array to create a grid item for each blog post. */}
      {blog.map((val, index) => (
        // Each Grid item adapts to different screen sizes using responsive breakpoints.
        <Grid item xs={12} sm={6} md={4} key={index}>
          {/* Card component with a maximum width and a shadow for a subtle depth effect. */}
          <Card sx={{ maxWidth: 345, boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}>
            {/* CardMedia displays the blog post image with a specified height.  */}
            <CardMedia component="img" height="200" image={val.cover} alt="" />
            {/* CardContent holds the content of the blog post. */}
            <CardContent>
              {/* Box for laying out meta information horizontally with space between items. */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                {/* Displaying the author or post type with an icon.  */}
                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                  <UserIcon sx={{ mr: 0.5 }} />{val.type}
                </Typography>
                {/* Displaying the post date with an icon. */}
                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                  <CalendarTodayIcon sx={{ mr: 0.5 }} />{val.date}
                </Typography>
                {/* Displaying the number of comments with an icon. */}
                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                  <CommentIcon sx={{ mr: 0.5 }} />{val.com}
                </Typography>
              </Box>
              {/* Title of the blog post styled to change color on hover and behave like a clickable link. */}
              <Typography gutterBottom variant="h5" component="div" sx={{ color: '#1eb2a6', '&:hover': { color: '#17a296', cursor: 'pointer' } }}>
                {val.title}
              </Typography>
              {/* Short description or excerpt of the blog post. */}
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
