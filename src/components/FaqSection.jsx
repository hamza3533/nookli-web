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
            backgroundColor: "#2B2B2B", // Using backgroundSecondary from theme
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore sx={{ color: "#FFFFFF" }} />}
            className="hover:bg-primaryHover transition-all rounded-lg"
          >
            <Typography className="text-lg font-bold text-textPrimary">
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="px-5 py-4">
            <Typography className="text-sm text-textSecondary">
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
      <div className="main-content max-w-full w-full container-xl py-16 lg:py-24 lg:rounded-3xl lg:px-0 bg-backgroundSecondary">
        <div className="max-w-full w-full overflow-hidden px-5 lg:px-0 lg:container">
          <div>
            <h2 className="w-full font-bold text-xl text-center mb-8 lg:mb-16 lg:text-4xl lg:leading-10 text-textPrimary">
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
    question: "What is NOOKLI?",
    answer:
      "NOOKLI is an AI-powered platform designed to personalize and enhance your learning journey, making education more effective and tailored to your individual needs.",
  },
  {
    question: "How do I get started with NOOKLI?",
    answer:
      "To get started, simply sign up on our website with your email and create a secure password. Once registered, you'll be guided through our onboarding process to customize your learning experience.",
  },
  {
    question: "Can NOOKLI adapt to my learning style?",
    answer:
      "Yes, NOOKLI is designed to be adaptive and personalized. Our AI technology learns from your interactions and adjusts to your unique learning style and pace.",
  },
  {
    question: "Is my data secure with NOOKLI?",
    answer:
      "Absolutely! NOOKLI prioritizes your privacy and data security. We use advanced encryption and follow strict security protocols to protect your information.",
  },
  {
    question: "What support options are available for NOOKLI users?",
    answer:
      "We provide comprehensive support through multiple channels including live chat, email support, and detailed documentation to ensure you have the best learning experience.",
  },
];
