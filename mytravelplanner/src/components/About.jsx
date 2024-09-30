import React from 'react';
import img from '../assets/maldives1.jpg'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const About = () => {
  return (
    <>

    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Discover the world with us! We offer tailor-made travel experiences to help you create lasting memories.
          </p>
        </div>

        <div className="lg:flex lg:space-x-12 items-center">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src={img}
              alt="Travel"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Text Section */}
          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <h3 className="text-3xl font-semibold text-gray-700 mb-4">Why Travel With Us?</h3>
            <p className="text-gray-600 text-lg mb-6">
              We specialize in providing world-class travel experiences to some of the most exotic locations on earth. 
              Our dedicated team ensures every aspect of your trip is seamless and unforgettable.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block bg-blue-500 text-white rounded-full p-2 mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7 12l2-2 4 4"
                    ></path>
                  </svg>
                </span>
                <p className="text-lg text-gray-700">
                  Expertly curated destinations for every traveler.
                </p>
              </li>
              <li className="flex items-start">
                <span className="inline-block bg-blue-500 text-white rounded-full p-2 mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7 12l2-2 4 4"
                    ></path>
                  </svg>
                </span>
                <p className="text-lg text-gray-700">
                  Personalized travel itineraries designed just for you.
                </p>
              </li>
              <li className="flex items-start">
                <span className="inline-block bg-blue-500 text-white rounded-full p-2 mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7 12l2-2 4 4"
                    ></path>
                  </svg>
                </span>
                <p className="text-lg text-gray-700">
                  24/7 customer support for a stress-free experience.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
};

export default About;