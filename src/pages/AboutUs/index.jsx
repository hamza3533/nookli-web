import React from "react";
import ProfileCard from "../Home/ProfileCard";
import FAQSection from "../../components/FaqSection";
import FormComponent from "../../components/FormComponent";
import img2 from "../../assets/image2.png";
import img8 from "../../assets/image8.png";
import img7 from "../../assets/image7.png";
import img3 from "../../assets/image3.png";
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

      {/* <section className="w-container lg:mb-8 pb-0 border-0">
        <div className="w-full h-[550px] container-xl px-4 xxl:px-0 rounded-lg lg:rounded-3xl overflow-hidden">
          <img
            src="https://careem-public-web-media.imgix.net/web_cd7d8a3f61.png"
            className="w-full h-full object-cover z-0 rounded-lg lg:rounded-3xl"
          />
        </div>
      </section> */}
      <section className="w-container">
        <h2 className="benefits-title w-full font-bold mb-4 md:mb-8 text-2xl sm:text-3xl md:text-4xl text-center">
          Community Benefits
        </h2>

        <div className="card-container w-full m-auto">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card px-4 my-5 text-center w-full bg-[#e2d35c] py-16 rounded-3xl">
              <div className="card-image flex justify-center items-center rounded-3xl mb-5 overflow-hidden">
                <img
                  src="https://careem-public-web-media.imgix.net/Clock_10_83f67612b4.png"
                  alt="Earnings Icon"
                  loading="lazy"
                />
              </div>
              <div className="card-content">
                <h3 className="card-title text-2xl font-semibold">
                  Networking and Collaboration
                </h3>
                <p className="card-description mt-2 text-base font-medium leading-6">
                  Connect with professionals, gain mentorship, and explore
                  collaboration opportunities to grow your career and knowledge.
                </p>
              </div>
            </div>

            <div className="card px-4 my-5 text-center w-full bg-[#e2d35c] py-16 rounded-3xl">
              <div className="card-image flex justify-center items-center rounded-3xl mb-5 overflow-hidden">
                <img
                  src="https://careem-public-web-media.imgix.net/Clock_9_206b2839b6.png"
                  alt="Captain Club Icon"
                  loading="lazy"
                />
              </div>
              <div className="card-content">
                <h3 className="card-title text-2xl font-semibold">
                  Access to Resources and Opportunities{" "}
                </h3>
                <p className="card-description mt-2 text-base font-medium leading-6">
                  Access workshops, webinars, tools, and exclusive opportunities
                  like job postings and hackathons to boost your career.
                </p>
              </div>
            </div>

            <div className="card px-4 my-5 text-center w-full bg-[#e2d35c] py-16 rounded-3xl">
              <div className="card-image flex justify-center items-center rounded-3xl mb-5 overflow-hidden">
                <img
                  src="https://careem-public-web-media.imgix.net/Clock_3_bc58e267bd.png"
                  alt="Flexibility Icon"
                  loading="lazy"
                />
              </div>
              <div className="card-content">
                <h3 className="card-title text-2xl font-semibold">
                  Skill Development and Knowledge Sharing
                </h3>
                <p className="card-description mt-2 text-base font-medium leading-6">
                  Learn from experts, enhance your skills, and share knowledge
                  to stay updated and build your expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full bg-stats-count mb-16 py-16">
        <section className="w-container lg:mb-8 pb-0 border-0">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              align="center"
              className="min-w-[350px] flex flex-col-reverse justify-center border-solid border-r sm:border-r-2 lg:border-r-4 last:border-0 sm:h-44 px-4"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Community Members
              </h2>
              <span className="text-5xl sm:text-6xl md:text-7xl font-bold">
                300k+
              </span>
            </div>
            <div
              align="center"
              className="min-w-[350px] flex flex-col-reverse justify-center border-solid border-r sm:border-r-2 lg:border-r-4 last:border-0 sm:h-44 px-4"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Workshops
              </h2>
              <span className="text-5xl sm:text-6xl md:text-7xl font-bold">
                40+
              </span>
            </div>
            <div
              align="center"
              className="min-w-[350px] flex flex-col-reverse justify-center border-solid last:border-0 sm:h-44 px-4"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Universities
              </h2>
              <span className="text-5xl sm:text-6xl md:text-7xl font-bold">
                10+
              </span>
            </div>
          </div>
        </section>
      </div>
      <div className="w-full bg-img-2 my-16 py-16">
        <section className="w-container lg:mb-8 pb-0 border-0 my-4">
          <div className="max-w-6xl mx-auto flex items-center justify-center">
            <div className="flex flex-col md:flex-row w-full items-center justify-between space-x-8">
              <div className="text-left flex-1 space-y-6 mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-4">
                  Changing Education Forever
                </h2>
                <p className="text-base sm:text-lg font-medium leading-6 px-4">
                  Level the playing field for every learner by connecting them
                  with opportunities and mentorship.
                </p>
                <div className="flex w-fit flex-wrap">
                  <span className="mr-2 mb-2">
                    <a
                      href="/en-AE/about-us/"
                      className="btn-secondary btn-small text-yellow-500 bg-white px-4 py-2 border rounded-full hover:text-white hover:bg-yellow-500"
                      title="Read more"
                    >
                      Read more
                    </a>
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <img
                  src={img7}
                  alt="About Us"
                  className="w-full mx-auto max-w-[450px] h-[350px] object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="w-container lg:mb-8 pb-0 border-0 my-4">
        <div className="max-w-6xl mx-auto flex items-center justify-center">
          <div className="flex flex-col md:flex-row w-full items-center justify-between space-x-8">
            <div className="flex-1">
              <img
                src={img2}
                alt="About Us"
                className="w-full mx-auto max-w-[450px] h-[350px] object-cover rounded-3xl"
              />
            </div>
            <div className="text-left flex-1 space-y-6 mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-4">
                Our Vision
              </h2>
              <p className="text-base sm:text-lg font-medium leading-6 px-4">
                Turn learning into an enjoyable journey for everyone, revealing
                their maximum potential.
              </p>
              <div className="flex w-fit flex-wrap">
                <span className="mr-2 mb-2">
                  <a
                    href="/en-AE/about-us/"
                    className="btn-secondary btn-small text-yellow-500 bg-white px-4 py-2 border rounded-full hover:text-white hover:bg-yellow-500"
                    title="Read more"
                  >
                    Read more
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-container lg:mb-8 pb-0 border-0 pt-4">
        <div className="max-w-6xl mx-auto flex items-center justify-center">
          <div className="flex flex-col md:flex-row w-full items-center justify-between space-x-8">
            <div className="text-left flex-1 space-y-6 mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-4">
                Every Person’s Learning Journey is Unique
              </h2>
              <p className="text-base sm:text-lg font-medium leading-6 px-4">
                Your learning... is one of a kind.
                <br />
                NOOKLI captures your unique path, building on your distinct
                experiences to maximize your learning potential.
              </p>
              <div className="flex w-fit flex-wrap">
                <span className="mr-2 mb-2">
                  <a
                    href="/en-AE/about-us/"
                    className="btn-secondary btn-small text-yellow-500 bg-white px-4 py-2 border rounded-full hover:text-white hover:bg-yellow-500"
                    title="Read more"
                  >
                    Read more
                  </a>
                </span>
              </div>
            </div>
            <div className="flex-1">
              <img
                src={img8}
                alt="About Us"
                className="w-full mx-auto max-w-[450px] h-[350px] object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="w-full bg-img-2 my-16 py-16">
        <section className="w-container lg:mb-8 pb-0 border-0 my-4">
          <div className="max-w-6xl mx-auto flex items-center justify-center">
            <div className="flex flex-col md:flex-row w-full items-center justify-between space-x-8">
              <div className="text-left flex-1 space-y-6 mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-4">
                  Your Learning Journey
                </h2>
                <p className="text-base sm:text-lg font-medium leading-6 px-4">
                  Turn learning into a journey that reveals your true potential.
                </p>
                <div className="flex w-fit flex-wrap">
                  <span className="mr-2 mb-2">
                    <a
                      href="/en-AE/about-us/"
                      className="btn-secondary btn-small text-yellow-500 bg-white px-4 py-2 border rounded-full hover:text-white hover:bg-yellow-500"
                      title="Read more"
                    >
                      Read more
                    </a>
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <img
                  src={img3}
                  alt="About Us"
                  className="w-full mx-auto max-w-[450px] h-[350px] object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <div className="w-full bg-img-2 my-16 py-16">
        <section className="w-container lg:mb-8 pb-0 border-0 my-4">
          <div className="max-w-6xl mx-auto flex items-center justify-center">
            <div className="flex flex-col md:flex-row w-full items-center justify-between space-x-8">
              <div className="text-left flex-1 space-y-6 mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-4">
                  Your Learning Journey
                </h2>
                <p className="text-base sm:text-lg font-medium leading-6 px-4">
                  Turn learning into a journey that reveals your true potential.
                </p>
                <div className="flex w-fit flex-wrap">
                  <span className="mr-2 mb-2">
                    <a
                      href="/en-AE/about-us/"
                      className="btn-secondary btn-small text-yellow-500 bg-white px-4 py-2 border rounded-full hover:text-white hover:bg-yellow-500"
                      title="Read more"
                    >
                      Read more
                    </a>
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <img
                  src={img3}
                  alt="About Us"
                  className="w-full mx-auto max-w-[450px] h-[350px] object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </section>
      </div> */}
      {/* <section className="w-container lg:mb-8 pb-0 border-0 my-5">
        <FAQSection />
      </section> */}
    </div>
  );
}
