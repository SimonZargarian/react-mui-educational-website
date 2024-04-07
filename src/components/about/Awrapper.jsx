import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { awrapper } from '../../dummydata';

const CountUp = ({ start = 0, end }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (count < end) {
      const timerId = setTimeout(() => setCount(count + 1), 20);
      return () => clearTimeout(timerId);
    }
  }, [count, end]);

  return <Typography variant="h4" sx={{ mt: 2, fontWeight: 'bold' }}>{count}</Typography>;
};

const Awrapper = () => {
  return (
    <Box sx={{
      overflow: 'hidden',
      py: 5,
      backgroundImage: `url(${process.env.PUBLIC_URL + '/images/awrapper.webp'})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      color: '#fff',
      height: { xs: '50vh', md: '30vh' },
    }}>
      <Grid container spacing={2} justifyContent="center">
        {awrapper.map((val, index) => (
          <Grid item xs={6} sm={4} key={index} sx={{
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            textAlign: 'center',
          }}>
            <CardMedia
              component="img"
              sx={{ width: 100, height: 100, borderRadius: '50%', mt: '60px' }}
              image={val.cover}
              alt=""
            />
            {/* Using the CountUp component to display counting numbers */}
            <CountUp end={parseInt(val.data.replace(/,/g, ''), 10)} />
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              {val.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Awrapper;
