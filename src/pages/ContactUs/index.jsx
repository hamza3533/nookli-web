import React from "react";
import FormComponent from "../../components/FormComponent";
import img6 from "../../assets/image6.png";

export default function index() {
  return (
    <div>
      <section
        className="w-container relative py-16"
        style={{
          background: `linear-gradient(to bottom, rgba(180, 179, 171, 0.64), rgba(175, 170, 112, 0.92)), url(${img6})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "550px",
        }}
      >
        <div className="max-w-6xl mx-auto text-center text-white px-6">
          <div className="space-y-8 p-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg">
              Custom Career Paths
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed drop-shadow-md">
              Achieve your goals with tailored learning paths and skill-building
              recommendations.{" "}
            </p>
            <div className="flex justify-center">
              <a
                href="/some-link"
                className="btn-secondary btn-large text-yellow-500 bg-white px-6 py-3 text-lg font-semibold rounded-full shadow-md hover:text-white hover:bg-yellow-500 transition-all duration-300"
                title="Read more"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="w-container lg:mb-8 pb-0 border-0 my-5">
        <FormComponent />
      </section>
    </div>
  );
}
