import React from "react";
import FormComponent from "../../components/FormComponent";
import img6 from "../../assets/image6.png";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <div>
      <section
        className="w-container relative py-16 rounded-3xl"
        style={{
          background: `linear-gradient(to bottom, rgba(43, 43, 43, 0.8), rgba(43, 43, 43, 0.9)), url(${img6})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "550px",
        }}
      >
        <div className="max-w-6xl mx-auto text-center text-textPrimary px-6">
          <div className="space-y-8 p-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg">
              Get in Touch
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed drop-shadow-md">
              Have questions? We're here to help you on your learning journey.{" "}
            </p>
            <div className="flex justify-center">
              <Link
                to="/contact-us"
                className="bg-primary text-textPrimary px-6 py-3 text-lg font-semibold rounded-full shadow-md hover:bg-primaryHover transition-all duration-300"
                title="Contact Us"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        id="contact-form"
        className="w-container lg:mb-8 pb-0 border-0 my-5"
      >
        <FormComponent />
      </section>
    </div>
  );
}
