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
          className="mb-4 rounded-lg shadow-lg"
          sx={{
            backgroundColor: "#DBEAFE", // Light blue background
            "&:before": { display: "none" }, // Removes default MUI divider line
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            className="hover:bg-blue-200 transition-all rounded-lg"
          >
            <Typography className="text-lg font-semibold text-gray-700">
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="px-5 py-4">
            <Typography className="text-sm text-gray-600 leading-6">
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
      <div className="main-content max-w-full w-full container-xl py-16 lg:py-24 lg:rounded-3xl lg:px-0 bg-blue-100">
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
    question: "How do I book a ride?",
    answer:
      "Download the Careem app on the App Store or Google Playstore. Sign up with your name and mobile number, and enter a strong password. Once you’ve signed up, select the Car or Taxi icon and enter your drop-off and pick-up locations. Select the type of car you want, and you’re on your way!",
  },
  {
    question: "How do I become a Captain?",
    answer:
      "Visit the Captain page on our website, or click on 'Captain sign-up' at the top of our home page. You will find all relevant information there.",
  },
  {
    question: "How do I contact Customer Care?",
    answer:
      "Please check our Help section at the bottom of the page for more information on receiving assistance.",
  },
  {
    question: "Where are our services available?",
    answer:
      "You can book a Careem ride 24/7, in 80 cities across 9 countries: UAE, KSA, Egypt, Pakistan, Jordan, Iraq, Kuwait, Morocco, and Bahrain.",
  },
];
