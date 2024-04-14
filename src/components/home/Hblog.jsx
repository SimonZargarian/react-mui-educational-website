import React from 'react'; // Importing React for component creation
import Box from '@mui/material/Box'; // Importing Box for layout and styling
import Grid from '@mui/material/Grid'; // Importing Grid for responsive layouts
import Card from '@mui/material/Card'; // Importing Card for encapsulating content in a styled container
import CardMedia from '@mui/material/CardMedia'; // Importing CardMedia for media display within a card
import CardContent from '@mui/material/CardContent'; // Importing CardContent for content section in cards
import Typography from '@mui/material/Typography'; // Importing Typography for styled text elements
import { blog } from '../../dummydata'; // Importing sample blog data from a local source
import Heading from '../common/heading/Heading'; // Import Heading component, not used but presumably for future use or oversight
import { Avatar, CardHeader, IconButton, Container } from '@mui/material'; // Importing additional UI components for use within the card
import { Comment, DateRange, Person } from '@mui/icons-material'; // Importing icons for use within the card

const Hblog = () => {
  return (
    <Box sx={{ py: 8, background: '#f8f8f8' }}> {/* Sets padding on the Y-axis and a light background color */}
      <Container maxWidth="lg"> {/* Container limits content width and centers it */}
        <Typography variant="h3" component="div" sx={{ color: '#1eb2a6', fontWeight: 'bold', mt: 6, textAlign: 'center', mb: 2 }}>
          OUR BLOG {/* Main heading for the blog section */}
        </Typography>
        <Typography variant="h4" component="div" sx={{ textAlign: 'center', mb: 4 }}>
          Recent From Blog {/* Subheading for the blog section */}
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}> {/*  Grid container for layout of blog cards */}
          {blog.slice(0, 3).map((val, index) => ( // Mapping through the first three blog entries
            <Grid item xs={12} sm={6} md={4} key={index}> {/* Responsive grid items for each blog card */}
              <Card sx={{ maxWidth: 345, boxShadow: '0 5px 25px -2px rgba(0,0,0,0.1)', transition: '0.3s', '&:hover': { transform: 'translateY(-5px)' } }}>
                {/*  Styled Card with hover effect */}
                <CardMedia
                  component="img"
                  height="194"
                  image={val.cover}
                  alt={val.title} // Provides text alternative for the image
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {val.title} {/* Title of the blog post */}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {val.desc} {/*  Description or excerpt of the blog post */}
                  </Typography>
                </CardContent>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: '#1eb2a6' }}> {/* Avatar with a custom background color */}
                      <Person /> {/* Icon representing the author or type of post */}
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="comments">
                      <Comment /> {/* Icon button for comments */}
                    </IconButton>
                  }
                  title={val.type} // Displays the type of blog post
                  subheader={val.date} // Displays the posting date
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Hblog; // Exports the Hblog component for use in other parts of the application
