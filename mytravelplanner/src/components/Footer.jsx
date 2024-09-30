import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        <div className="w-full md:w-1/3">
          <h4 className="text-lg font-bold mb-4">About Us</h4>
          <p className="text-gray-300">We offer the best travel experiences for unforgettable adventures.</p>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <ul>
            <li><a href="#" className="text-gray-300 hover:underline">Home</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Services</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Contact</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="text-lg font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
            <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
            <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-500">&copy; 2024 Travel Website. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
