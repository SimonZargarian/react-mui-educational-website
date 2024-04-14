import React from "react";
import { faq } from "../../dummydata";
import Heading from "../common/heading/Heading";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "@mui/material/Container";

// Faq is a functional component that renders a frequently asked questions section.
const Faq = () => {
  return (
    <>
      {/* Heading component displays a page section title and subtitle. */}
      <Heading subtitle="FAQS" title="Frequently Ask Question" />

      {/* Container component restricts content width to 'md' and adds vertical margins. */}
      <Container maxWidth="md" sx={{ my: 4 }}>
        {/* Iterating over an array 'faq' to generate multiple Accordion components. */}
        {faq.map((val, index) => (
          <Accordion key={index} elevation={3} sx={{ mb: 2, '&:before': { display: 'none' } }}>
           {/* Accordion component used for collapsible content panels for presenting information in a limited space. */}
            {/* AccordionSummary acts as a clickable header for each accordion panel. */}
            <AccordionSummary 
              expandIcon={<ExpandMoreIcon />} // Icon indicating expandable panel
              sx={{ 
                backgroundColor: '#1eb2a6', // Custom background color
                color: 'white', // Text color for readability
                '.MuiAccordionSummary-expandIconWrapper.Mui-expanded': { color: 'white' }, // Ensures the icon color remains white even when expanded
                '&:hover': { backgroundColor: '#17a296' } // Darker background color on hover for visual feedback
              }}>
              {/* Title of the FAQ displayed within the summary header. */}
              <Typography variant="h6">{val.title}</Typography>
            </AccordionSummary>
            {/* AccordionDetails holds the content or answer to the question. */}
            <AccordionDetails>
              {/* Description or answer text displayed here. */}
              <Typography>{val.desc}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </>
  );
};

export default Faq;
