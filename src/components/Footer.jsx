import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="w-container footer mt-10 mb-8 px-5 lg:px-4 lg:mb-12 lg:mt-24">
      <div className="max-w-full w-full flex flex-col lg:container lg:max-w-7xl">
        <div className="flex flex-col text-center lg:justify-between lg:flex-row lg:text-left">
          {/* Logo Section */}
          <div className="order-1 flex flex-col w-full lg:items-start lg:w-60">
            <div className="lg:mt-1 mb-8 lg:ml-2">
              <a href="/" title="YourBrand" aria-current="page">
                <img
                  src="https://careem-public-web-media.imgix.net/careem_logo_new_346308a18e.webp"
                  alt="YourBrand Logo"
                  width="111.44"
                  height="22"
                  loading="lazy"
                />
              </a>
            </div>
            {/* Download Links */}
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
      <h2 className="text-xl font-semibold text-green-700 lg:text-lg mb-8">{title}</h2>
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
  { text: 'Go', url: '/ride/' },
  { text: 'Eat', url: '/food/' },
  { text: 'Get', url: '/quik-grocery/' },
  { text: 'Pay', url: '/pay/' },
  { text: 'Careem Plus', url: '/cplus/' },
];

const partnersLinks = [
  { text: 'Corporate packages', url: '/careem-for-business/' },
  { text: 'Restaurant delivery', url: '/restaurant-partner-signup/' },
  { text: 'B2B delivery', url: '/express/' },
  { text: 'Pay merchant solutions', url: 'https://www.checkout.careem.com' },
  { text: 'Become a supplier', url: 'https://suppliers.careem.com/' },
];

const teamLinks = [
  { text: 'About us', url: '/about-us/' },
  { text: 'Engineering at Careem', url: '/engineering-at-careem/' },
  { text: 'Careers', url: '/careers/' },
  { text: 'Explore open roles', url: 'https://jobs.careem.com/' },
  { text: 'Why Careem', url: 'https://why.careem.com' },
];

const aboutLinks = [
  { text: 'Our social impact', url: '/our-social-impact/' },
  { text: 'Information security', url: '/security/' },
  { text: 'Blog', url: 'https://blog.careem.com' },
];

export default Footer;
