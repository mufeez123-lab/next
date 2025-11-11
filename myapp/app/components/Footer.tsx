// components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: 'About',
      links: ['About Us', 'Why Choose Us', 'Our Team', 'Solutions', 'Partners', 'Core Values'],
    },
    {
      title: 'Services',
      links: ['Our Projects', 'News & Updates', 'Terms & Conditions', 'Support Center', 'Contact'],
    },
  ];

  return (
    // The main container for the footer content, positioned within the larger layout
    <footer className="w-full bg-gray-300 text-gray-800 py-12 px-6 md:px-12 lg:px-24   rounded-t-3xl shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start">
        
        {/* Left Section: Logo and Description */}
        <div className="mb-8 lg:mb-0 lg:w-1/3">
          <div className="flex items-center space-x-2 mb-4">
            {/* Placeholder for 'spaciaz' logo text/image */}
            <span className="text-3xl font-bold text-gray-900">spaciaz</span>
          </div>
          <p className="text-sm text-gray-600 max-w-xs">
            We are creators of transformative spaces that inspire, innovate, and endure.
          </p>
        </div>

        {/* Center Section: Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-10 lg:gap-20 mb-8 lg:mb-0 lg:w-1/3">
          {footerLinks.map((section, index) => (
            <div key={index}>
              {/* Note: The image uses a combined list, but we'll structure for better organization */}
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" // Replace with actual paths
                      className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right Section: Contact Info and Socials */}
        <div className="lg:w-1/3 flex flex-col items-start lg:items-end text-left lg:text-right">
          <div className="mb-4">
            <p className="text-xl font-semibold text-gray-900 mb-1">(084) 123-45688</p>
            <a 
              href="mailto:spaciaz@example.com"
              className="text-lg text-yellow-600 font-medium hover:text-yellow-700 transition-colors border-b border-yellow-600"
            >
              spaciaz@example.com
            </a>
          </div>

          <div className="flex space-x-3 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-700">Facebook</a>
            <span className="mx-1">·</span>
            <a href="#" className="hover:text-gray-700">Instagram</a>
            <span className="mx-1">·</span>
            <a href="#" className="hover:text-gray-700">YouTube</a>
            <span className="mx-1">·</span>
            <a href="#" className="hover:text-gray-700">Twitter</a>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="mt-8 pt-4 border-t border-gray-100 text-center text-sm text-gray-500">
        &copy; 2025 <span className="font-semibold">spaciaz</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;