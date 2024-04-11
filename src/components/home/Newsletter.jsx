import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Newsletter = () => {
  const handleSubscribe = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    console.log('Subscribing email:', email);
    event.target.reset();
  };

  return (
    <Box component="form" onSubmit={handleSubscribe} sx={{ width: '100%', bgcolor: '#1eb2a6', py: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', px: 2 }}>
        <Box sx={{ flexGrow: 1, textAlign: 'center', mr: 2 }}>
          <Typography variant="h5" component="div" gutterBottom sx={{ color: 'white' }}>
            Newsletter - Stay tuned and get the latest update
          </Typography>
          <Typography variant="body2" sx={{ color: 'white' }}>
            Far far away, behind the word mountains
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', paddingBottom: "60px", paddingTop: "60px" }}>
          <TextField
            variant="outlined"
            placeholder="Enter email address"
            type="email"
            name="email"
            fullWidth
            sx={{ bgcolor: 'white', mr: 1 }}
            required
          />
          <Button type="submit" variant="contained" sx={{ bgcolor: 'white', color: '#1eb2a6', ml: 1 }}>
            Update
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Newsletter;
