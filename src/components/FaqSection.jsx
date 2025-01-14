import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMore from "@mui/icons-material/ExpandMore";

export default function FaqSection() {
  const AccordionSec = () => (
    <>
      {faqData.map((item, index) => (
        <Accordion
          key={index}
          className="mb-4 p-2 rounded-lg shadow-lg"
          sx={{
            // bg yellow-300
            backgroundColor: "#FEEBC8", // Light yellow background
            // backgroundColor: "#DBEAFE", // Light blue background
            "&:before": { display: "none" }, // Removes default MUI divider line
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            className="hover:bg-[#FEEBC8] transition-all rounded-lg"
          >
            <Typography className="text-lg font-bold text-dark">
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="px-5 py-4">
            <Typography className="text-sm text-gray-600">
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );

  return (
    <section
      id="accordian-top-questions"
      className="faq mb-12 lg:mb-20 lg:mt-28 sm:mt-10"
    >
      <div className="main-content max-w-full w-full container-xl py-16 lg:py-24 lg:rounded-3xl lg:px-0 bg-[#FEEBC8]">
        <div className="max-w-full w-full overflow-hidden px-5 lg:px-0 lg:container">
          <div>
            <h2 className="w-full font-bold text-xl text-center mb-8 lg:mb-16 lg:text-4xl lg:leading-10">
              Top Questions
            </h2>
          </div>
          <AccordionSec />
        </div>
      </div>
    </section>
  );
}


const faqData = [
  {
    question: "What is ATOM?",
    answer:
      "ATOM is an AI-powered platform designed to streamline workflows, enhance productivity, and enable smarter decision-making for businesses and individuals.",
  },
  {
    question: "How do I get started with ATOM?",
    answer:
      "To get started, sign up on our website or app with your email and create a secure password. Once registered, follow the onboarding guide to set up your preferences and explore the platform’s features.",
  },
  {
    question: "Can ATOM be customized for my business?",
    answer:
      "Yes, ATOM is designed to be flexible and customizable. You can configure it to meet your business's unique needs and integrate it with your existing tools.",
  },
  {
    question: "Is my data secure with ATOM?",
    answer:
      "Absolutely! ATOM uses advanced encryption and follows industry-standard security practices to ensure your data is safe and private.",
  },
  {
    question: "What support options are available for ATOM users?",
    answer:
      "We offer 24/7 customer support through live chat, email, and a detailed Help Center to assist you with any questions or issues.",
  },
];
