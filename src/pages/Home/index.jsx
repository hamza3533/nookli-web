import React from "react";
import Slider from "react-slick";
import Cards from "./Cards";
import ProfileCard from "./ProfileCard.jsx";
import img1 from "../../assets/image1.png";
import img3 from "../../assets/image3.png";
import img4 from "../../assets/image4.png";
import img5 from "../../assets/image5.png";
import img6 from "../../assets/image6.png";
import img7 from "../../assets/image7.png";
import img8 from "../../assets/image8.png";
import img9 from "../../assets/image9.png";
import logo1 from "../../assets/logo2.svg";

export default function Index() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <div className="">
      <section className="w-container py-16">
        <div className="w-full h-[550px] container-xl px-16 xxl:px-0 rounded-lg lg:rounded-3xl overflow-hidden bg-gray-700 bg-gif relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30"></div>
          <img
            src={logo1}
            alt="logo"
            className="w-full h-full z-10 relative rounded-lg lg:rounded-3xl shadow-lg three-d-effect"
          />
        </div>
      </section>

      <section className="w-container py-20">
        <div className="w-full container-xl px-4 xxl:px-0 rounded-lg overflow-hidden">
          <div className="relative">
            <img
              src={img9}
              alt="Background"
              className="w-full h-[450px] object-cover rounded-lg lg:rounded-3xl"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/70 via-black/50 to-black/70 rounded-lg lg:rounded-3xl">
              <div className="text-center p-6 lg:p-10">
                <p className="text-textPrimary text-2xl sm:text-4xl font-bold italic leading-relaxed drop-shadow-lg">
                  "You can't really know where you are going until you know
                  where you have been."
                </p>
                <p className="text-textSecondary text-lg sm:text-xl font-medium mt-4 drop-shadow-lg">
                  - Maya Angelou
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-container py-24">
        <div className="max-w-6xl mx-auto flex items-center justify-center">
          <div className="flex flex-col md:flex-row w-full items-center justify-between space-x-8">
            <div className="text-left flex-1 space-y-8 mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-4 text-textPrimary">
                The Problem
              </h2>
              <p className="text-base sm:text-lg font-medium leading-6 px-4 text-textSecondary">
                Learners are overwhelmed by information and lack a way to
                organize and act on what we learn.
              </p>
              <div className="flex w-fit flex-wrap pt-4">
                <span className="mr-2 mb-2">
                  <a
                    href="/about-us"
                    className="bg-secondary text-textPrimary px-4 py-2 text-sm font-medium rounded-full hover:bg-secondaryHover hover:scale-105 transition-all duration-300 shadow-md"
                    title="Read more"
                  >
                    Read more
                  </a>
                </span>
              </div>
            </div>

            <div className="flex-1 mt-8 md:mt-0">
              <img
                src={img1}
                alt="About Us"
                className="w-full mx-auto max-w-[450px] h-[350px] object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="w-full bg-img py-24">
        <section className="w-container bg-transparent">
          <div className="max-w-6xl mx-auto flex items-center justify-center">
            <div className="flex flex-col w-full items-center space-y-12 px-6">
              <h2 className="text-4xl sm:text-5xl md:text-8xl font-extrabold text-textPrimary drop-shadow-xl leading-tight">
                Nookli's mission
              </h2>
              <p className="text-xl sm:text-2xl md:text-5xl leading-loose text-textSecondary max-w-3xl text-center">
                To
                <span className="font-bold text-primary mx-2 drop-shadow-lg">
                  organize
                </span>
                ,
                <span className="font-bold text-secondary mx-2 drop-shadow-lg">
                  connect
                </span>
                , and
                <span className="font-bold text-primary mx-2 drop-shadow-lg">
                  amplify
                </span>
                human thoughts, helping turn ideas into impact.
              </p>
              <div className="flex justify-center pt-6">
                <a
                  href="/about-us"
                  className="bg-secondary text-textPrimary px-4 py-2 text-sm font-medium rounded-full hover:bg-secondaryHover hover:scale-105 transition-all duration-300 shadow-md"
                  title="Read more"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="w-container py-24">
        <div className="max-w-6xl mx-auto flex items-center justify-center">
          <div className="flex flex-col md:flex-row w-full items-center justify-between space-x-8">
            <div className="flex-1 mb-8 md:mb-0">
              <img
                src={img5}
                alt="About Us"
                className="w-full mx-auto max-w-[450px] h-[350px] object-cover rounded-3xl"
              />
            </div>
            <div className="text-left flex-1 space-y-8 mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-4 text-textPrimary">
                Impact for Students and Learners
              </h2>
              <p className="text-base sm:text-lg font-medium leading-6 px-4 text-textSecondary">
                Unlock opportunities for every learner, no matter their starting
                point.
              </p>
              <div className="flex w-fit flex-wrap pt-4">
                <span className="mr-2 mb-2">
                  <a
                    href="/about-us"
                    className="bg-secondary text-textPrimary px-4 py-2 text-sm font-medium rounded-full hover:bg-secondaryHover hover:scale-105 transition-all duration-300 shadow-md"
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
 
      <section className="w-container py-24">
        <div className="max-w-6xl mx-auto flex items-center justify-center">
          <div className="flex flex-col md:flex-row w-full items-center justify-between space-x-8">
            <div className="text-left flex-1 space-y-8 mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-4 text-textPrimary">
                The Power of Human + AI Coaching
              </h2>
              <p className="text-base sm:text-lg font-medium leading-6 px-4 text-textSecondary">
                AI-powered insights, amplified by human mentorship.
              </p>
              <div className="flex w-fit flex-wrap pt-4">
                <span className="mr-2 mb-2">
                  <a
                    href="/about-us"
                    className="bg-secondary text-textPrimary px-4 py-2 text-sm font-medium rounded-full hover:bg-secondaryHover hover:scale-105 transition-all duration-300 shadow-md"
                    title="Read more"
                  >
                    Read more
                  </a>
                </span>
              </div>
            </div>
            <div className="flex-1 mt-8 md:mt-0">
              <img
                src={img4}
                alt="About Us"
                className="w-full mx-auto max-w-[450px] h-[350px] object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
      {/* <div className="w-full bg-blogs py-16">
        <section className="w-container lg:mb-8 pb-0 border-0 contentWithImage scroll-mt-24 w-full py-16">
          <ProfileCard />
        </section>
      </div> */}
