import React from "react";
import { faq } from "../../dummydata";
import Heading from "../common/heading/Heading";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "@mui/material/Container";

const Faq = () => {
  return (
    <>
      <Heading subtitle="FAQS" title="Frequently Ask Question" />
      <Container maxWidth="md" sx={{ my: 4 }}>
        {faq.map((val, index) => (
          <Accordion key={index} elevation={3} sx={{ mb: 2, '&:before': { display: 'none' } }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: '#1eb2a6', color: 'white', '.MuiAccordionSummary-expandIconWrapper.Mui-expanded': { color: 'white' }, '&:hover': { backgroundColor: '#17a296' } }}>
              <Typography variant="h6">{val.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{val.desc}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </>
  );
};

export default Faq;
