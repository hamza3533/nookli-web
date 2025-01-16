import React from "react";
import ProfileCard from "../Home/ProfileCard";

export default function index() {
  return (
    <div>
      <section className="w-container lg:mb-8 pb-0 border-0">
        <div className="w-full h-[550px] container-xl px-4 xxl:px-0 rounded-lg lg:rounded-3xl overflow-hidden">
          <img
            src="https://careem-public-web-media.imgix.net/web_cd7d8a3f61.png"
            className="w-full h-full object-cover z-0 rounded-lg lg:rounded-3xl"
          />
        </div>
      </section>
      <section className="w-container">
        <h2 className="benefits-title w-full font-bold mb-4 md:mb-8 text-2xl sm:text-3xl md:text-4xl text-center">
          Captain Benefits
        </h2>

        <div className="card-container w-full m-auto">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card px-4 my-5 text-center w-full bg-[#f4f8fb] py-16 rounded-3xl">
              <div className="card-image flex justify-center items-center rounded-3xl mb-5 overflow-hidden">
                <img
                  src="https://careem-public-web-media.imgix.net/Clock_10_83f67612b4.png"
                  alt="Earnings Icon"
                  loading="lazy"
                />
              </div>
              <div className="card-content">
                <h3 className="card-title text-2xl font-semibold">Earnings</h3>
                <p className="card-description mt-2 text-base font-medium leading-6">
                  Be your own boss by earning at your own convenience. Take
                  advantage of peak hours, bonuses, and guarantees.
                </p>
              </div>
            </div>

            <div className="card px-4 my-5 text-center w-full bg-[#f4f8fb] py-16 rounded-3xl">
              <div className="card-image flex justify-center items-center rounded-3xl mb-5 overflow-hidden">
                <img
                  src="https://careem-public-web-media.imgix.net/Clock_9_206b2839b6.png"
                  alt="Captain Club Icon"
                  loading="lazy"
                />
              </div>
              <div className="card-content">
                <h3 className="card-title text-2xl font-semibold">Captain Club</h3>
                <p className="card-description mt-2 text-base font-medium leading-6">
                  Careem offers benefits and rewards to its loyal captains based
                  on which tier they are in.
                </p>
              </div>
            </div>

            <div className="card px-4 my-5 text-center w-full bg-[#f4f8fb] py-16 rounded-3xl">
              <div className="card-image flex justify-center items-center rounded-3xl mb-5 overflow-hidden">
                <img
                  src="https://careem-public-web-media.imgix.net/Clock_3_bc58e267bd.png"
                  alt="Flexibility Icon"
                  loading="lazy"
                />
              </div>
              <div className="card-content">
                <h3 className="card-title text-2xl font-semibold">Flexibility</h3>
                <p className="card-description mt-2 text-base font-medium leading-6">
                  With Careem, you can enjoy the flexibility of choosing your
                  working hours and days.
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
                Rides
              </h2>
              <span className="text-5xl sm:text-6xl md:text-7xl font-bold">
                1Bn
              </span>
            </div>
            <div
              align="center"
              className="min-w-[350px] flex flex-col-reverse justify-center border-solid border-r sm:border-r-2 lg:border-r-4 last:border-0 sm:h-44 px-4"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Captains
              </h2>
              <span className="text-5xl sm:text-6xl md:text-7xl font-bold">
                2M
              </span>
            </div>
            <div
              align="center"
              className="min-w-[350px] flex flex-col-reverse justify-center border-solid last:border-0 sm:h-44 px-4"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Cities
              </h2>
              <span className="text-5xl sm:text-6xl md:text-7xl font-bold">
                100+
              </span>
            </div>
          </div>
        </section>
      </div>
      <div className="w-full bg-img-2 my-16 py-16">
        <section className="w-container lg:mb-8 pb-0 border-0 contentWithImage scroll-mt-24 w-full py-16">
          <div className="max-w-6xl mx-auto flex items-center justify-center">
            <div className="flex flex-col md:flex-row w-full items-center justify-between space-x-8">
              <div className="flex-1">
                <img
                  src="https://careem-public-web-media.imgix.net/About_us_updt_e1e14ed645.webp"
                  alt="About Us"
                  className="w-full mx-auto max-w-[550px] h-[400px] object-cover rounded-3xl"
                />
              </div>
              <div className="text-left flex-1 space-y-6 mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-4">
                  About Us
                </h2>
                <p className="text-base sm:text-lg font-medium leading-6 px-4">
                  Careem’s purpose is to simplify and improve the lives of
                  people and build an awesome organisation that inspires.
                  <br />
                  Learn more about our purpose, people and services.
                </p>
                <div className="flex w-fit flex-wrap">
                  <span className="mr-2 mb-2">
                    <a
                      href="/about-us"
                      className="btn-secondary btn-small text-yellow-500 bg-white px-4 py-2 border rounded-full hover:text-white hover:bg-yellow-500"
                      title="Read more"
                    >
                      Sign Up{" "}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="w-container lg:mb-8 pb-0 border-0 my-5">
        <div className="max-w-6xl mx-auto flex items-center justify-center">
          <div className="flex flex-col md:flex-row w-full items-center justify-between space-x-8">
            <div className="text-left flex-1 space-y-6 mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-4">
                About Us
              </h2>
              <p className="text-base sm:text-lg font-medium leading-6 px-4">
                Careem’s purpose is to simplify and improve the lives of people
                and build an awesome organisation that inspires.
                <br />
                Learn more about our purpose, people and services.
              </p>
               <div className="flex justify-center">
                <a
                  href="/about-us"
                  className="btn-secondary text-white bg-yellow-500 px-6 py-3 text-lg font-semibold rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-300"
                  title="Read more"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="flex-1">
              <img
                src="https://careem-public-web-media.imgix.net/About_us_updt_e1e14ed645.webp"
                alt="About Us"
                className="w-full mx-auto max-w-[450px] h-[350px] object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-container lg:mb-8 pb-0 border-0 my-5">
        <div className="max-w-6xl mx-auto flex items-center justify-center">
          <div className="flex flex-col md:flex-row w-full items-center justify-between space-x-8">
            <div className="flex-1">
              <img
                src="https://careem-public-web-media.imgix.net/About_us_updt_e1e14ed645.webp"
                alt="About Us"
                className="w-full mx-auto max-w-[450px] h-[350px] object-cover rounded-3xl"
              />
            </div>
            <div className="text-left flex-1 space-y-6 mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-4">
                About Us
              </h2>
              <p className="text-base sm:text-lg font-medium leading-6 px-4">
                Careem’s purpose is to simplify and improve the lives of people
                and build an awesome organisation that inspires.
                <br />
                Learn more about our purpose, people and services.
              </p>
               <div className="flex justify-center">
                <a
                  href="/about-us"
                  className="btn-secondary text-white bg-yellow-500 px-6 py-3 text-lg font-semibold rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-300"
                  title="Read more"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full bg-blogs py-16">
        <section className="w-container lg:mb-8 pb-0 border-0 contentWithImage scroll-mt-24 w-full py-16">
          <ProfileCard />
        </section>
      </div>
    </div>
  );
}
