import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { awrapper } from '../../dummydata';

const CountUp = ({ start = 0, end }) => {
  const [count, setCount] = useState(start); // Initializes the count state with the start value.

  useEffect(() => {
    // useEffect hook to create a side-effect that updates the count over time until it reaches the end value.
    if (count < end) {
      // Only run the timeout if the current count is less than the end value.
      const timerId = setTimeout(() => setCount(count + 1), 20); // Set a timer to increment the count by 1 every 20 milliseconds.
      return () => clearTimeout(timerId); // Cleanup function to clear the timer if the component unmounts or count reaches the end value.
    }
  }, [count, end]); // Depend on count and end to determine when to rerun the effect.

  // Render a Typography component from Material-UI to display the current count.
  return <Typography variant="h4" sx={{ mt: 2, fontWeight: 'bold' }}>{count}</Typography>;
};

// Awrapper is a React functional component that creates a visually appealing section
// with a fixed background and dynamically rendered data elements.
const Awrapper = () => {
  return (
    // Box component acts as the outer container with specific styles for background and layout.
    <Box sx={{
      overflow: 'hidden', // Hides any overflowing content from child elements.
      py: 5, // Adds vertical padding for spacing within the container.
      backgroundImage: `url(${process.env.PUBLIC_URL + '/images/awrapper.webp'})`, // Uses a background image from the public folder.
      backgroundSize: 'cover', // Ensures the background image covers the entire area of the Box.
      backgroundPosition: 'center', // Centers the background image.
      backgroundAttachment: 'fixed', // Fixes the background image, so it doesn't move during scroll.
      color: '#fff', // Sets the text color to white for all child components, unless overridden.
      height: { xs: '50vh', md: '30vh' }, // Sets responsive heights depending on the viewport size.
    }}>
      {/* Grid container to organize the items in a responsive grid layout.*/}
      <Grid container spacing={2} justifyContent="center">
        {/* Maps over 'awrapper' data array to render each item using Grid component. */}
        {awrapper.map((val, index) => (
          // Grid item for each data point with responsive width settings.
          <Grid item xs={6} sm={4} key={index} sx={{
            display: 'flex', // Uses flexbox layout to align children.
            flexDirection: 'column', // Arranges children vertically.
            alignItems: 'center', // Centers children horizontally in the column.
            textAlign: 'center', // Centers the text of each child.
          }}>
            {/* CardMedia used to display an image for each data point.*/}
            <CardMedia
              component="img"
              sx={{ width: 100, height: 100, borderRadius: '50%', mt: '60px' }} // Styles the image as a circular profile picture.
              image={val.cover} // Image source path.
              alt="" // Alternative text should be provided for accessibility.
            />
            {/* CountUp component displays the data dynamically counting up to its end value. */}
            <CountUp end={parseInt(val.data.replace(/,/g, ''), 10)} />
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              {val.title} {/* Shows the title. */}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Awrapper; // Exports the component for use in other parts of the application.

