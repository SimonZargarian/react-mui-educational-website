import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

// The Newsletter component collects user email addresses for newsletter subscriptions.
const Newsletter = () => {
  // handleSubscribe function prevents the default form submission behavior,
  // extracts the email from the form, logs it, and resets the form.
  const handleSubscribe = (event) => {
    event.preventDefault(); // Prevents the form from submitting in the traditional way.
    const email = event.target.email.value; // Retrieves the email value from the form input.
    console.log('Subscribing email:', email); // Logs the email to the console for demonstration purposes.
    event.target.reset(); // Resets the form fields after submission.
  };

  return (
    // Main container for the newsletter section, styled as a form to handle subscriptions.
    <Box component="form" onSubmit={handleSubscribe} sx={{ width: '100%', bgcolor: '#1eb2a6', py: 4 }}>
      {/*  Flex container for layout. It aligns items centrally and adds padding on the sides. */}
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', px: 2 }}>
        {/* Box for the text portion of the newsletter sign-up area, with some margin on the right. */}
        <Box sx={{ flexGrow: 1, textAlign: 'center', mr: 2 }}>
          {/* Heading for the newsletter section, inviting users to subscribe. */}
          <Typography variant="h5" component="div" gutterBottom sx={{ color: 'white' }}>
            Newsletter - Stay tuned and get the latest update 
          </Typography>
          {/* Additional descriptive text under the heading. */}
          <Typography variant="body2" sx={{ color: 'white' }}>
            Far far away, behind the word mountains
          </Typography>
        </Box>
        {/* Flex container for the email input and send button. It has internal top and bottom padding. */}
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', paddingBottom: "60px", paddingTop: "60px" }}>
          {/* Email input field where users can enter their email address. */}
          <TextField
            variant="outlined"
            placeholder="Enter email address"
            type="email"
            name="email"
            fullWidth
            sx={{ bgcolor: 'white', mr: 1 }} // Style for the text field with a background color and margin.
            required // Makes the field required for form submission.
          />
          {/* Submit button for the form, styled to contrast with the input field. */}
          <Button type="submit" variant="contained" sx={{ bgcolor: 'white', color: '#1eb2a6', ml: 1 }}>
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Newsletter;
