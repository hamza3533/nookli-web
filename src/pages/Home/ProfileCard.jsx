import React from "react";
import { NavLink } from "react-router-dom";

export default function ProfileCard() {
  const cards = [1, 2, 3];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="rounded-lg flex flex-col justify-between transform transition-all duration-300 hover:scale-105 p-4"
        >
          <NavLink
            to="/about-us"
            title="About Us"
            className="card-link block"
          >
            {/* Image Section */}
            <picture className="image card-image flex rounded-3xl mb-5 overflow-hidden transition-transform hover:scale-105 h-full max-h-56 md:max-h-72 lg:max-h-80">
              <img
                src="https://careem-public-web-media.imgix.net/Frame_26897_3_2d3be98c80.png"
                alt="Person using Careem everything app"
                loading="lazy"
                className="object-cover w-full h-full"
              />
            </picture>

            {/* Content Section */}
            <div className="w-full flex flex-col px-2 lg:px-4">
              <h3 className="text-2xl font-semibold mb-2">Nookli: Chapter 3</h3>
              <div className="card-description w-full leading-6 text-base font-medium text-gray-700 mb-6">
                <p>
                  Our mission is to provide an accessible, intuitive platform
                  where learners, mentors, and educators unite, exchange
                  knowledge, and support one another—making continuous growth
                  and meaningful connections an everyday reality.
                </p>
              </div>
              <button
                to="/"
                title="Read more"
                className="btn max-w-max rtl:ml-auto text-yellow-500 hover:text-white font-medium px-4 py-2 rounded-full bg-white hover:bg-red-500"
              >
                Read more
              </button>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
}
