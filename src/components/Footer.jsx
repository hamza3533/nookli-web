import React from "react";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="w-container footer mt-10 mb-8 px-5 lg:px-4 lg:mb-12 lg:mt-24"
    >
      <div className="max-w-full w-full flex flex-col lg:container lg:max-w-7xl">
        <div className="flex flex-col text-center lg:justify-between lg:flex-row lg:text-left">
          {/* Logo Section */}
          <div className="order-1 flex flex-col w-full lg:items-start lg:w-60">
            <div className="lg:mt-1 mb-8 lg:ml-2">
              <img className="h-8 w-[170px]" src={logo} alt="Logo" />
            </div>
            <div className="download-box">
              <div className="flex justify-center lg:justify-start">
                <a
                  href="https://example.com/app-store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/app-store.webp"
                    alt="App Store"
                    className="max-h-10"
                  />
                </a>
              </div>
              <div className="flex justify-center lg:justify-start mt-5">
                <a
                  href="https://example.com/google-play"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/google-play.webp"
                    alt="Google Play"
                    className="max-h-10"
                  />
                </a>
              </div>
            </div>
          </div>
          {/* Services Section */}
          <FooterColumn title="Services" links={servicesLinks} />
          {/* Partners Section */}
          <FooterColumn title="Partners" links={partnersLinks} />
          {/* Join Our Team Section */}
          <FooterColumn title="Join our team" links={teamLinks} />
          {/* About Us Section */}
          <FooterColumn title="About us" links={aboutLinks} />
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, links }) => {
  return (
    <div className="order-3 w-full mt-12 lg:mt-0 lg:w-fit">
      <h2 className="text-xl font-semibold text-green-700 lg:text-lg mb-8">
        {title}
      </h2>
      <ul>
        {links.map((link, index) => (
          <li key={index} className="mt-4">
            <a
              href={link.url}
              className="footer-link font-semibold text-base leading-4 relative hover:text-green-500"
              title={link.text}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const servicesLinks = [
  { text: "Service 1", url: "/" },
  { text: "Service 2", url: "/" },
  { text: "Service 3", url: "/" },
  { text: "Service 4", url: "/" },
  { text: "Service 5", url: "/" },
];

const partnersLinks = [
  { text: "Partner 1", url: "/" },
  { text: "Partner 2", url: "/" },
  { text: "Partner 3", url: "/" },
  { text: "Partner 4", url: "/" },
];

const teamLinks = [
  { text: "About us", url: "/about-us/" },
  { text: "Careers", url: "/careers" },
  { text: "Why Nookli", url: "/about-us" },
];

const aboutLinks = [
  { text: "Our social impact", url: "/" },
  { text: "Privacy Policy", url: "/" },
  { text: "Blog", url: "/" },
];

export default Footer;
