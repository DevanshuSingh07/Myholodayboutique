import React from 'react';
import img from '../assets/maldives1.jpg'
const AboutUs = () => {
  return (
    <>
<div className="bg-gray-100 py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Hero Section */}
    <div className="text-center mb-12">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-4">About Us</h1>
      <p className="text-lg text-gray-600">
        Your gateway to unforgettable travel experiences.
      </p>
    </div>

    {/* Mission Statement */}
    <section className="my-12 text-center">
      <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Mission</h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        At <span className="font-bold">[Company Name]</span>, we are dedicated to crafting personalized journeys that blend relaxation, adventure, and cultural immersion. Our goal is to create experiences that leave lasting memories and bring the world closer to you. Whether it’s an exotic getaway or a local retreat, we bring destinations to life with comfort and style.
      </p>
    </section>

    {/* Our Story Section */}
    <section className="my-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Image Section */}
      <div className="flex items-center justify-center">
        <img 
          src="https://via.placeholder.com/500" 
          alt="Our Story"
          className="rounded-lg shadow-lg w-full object-cover"
        />
      </div>
      {/* Text Section */}
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Story</h2>
        <p className="text-gray-600 mb-4">
          Founded in 2010, <span className="font-bold">[Company Name]</span> started with a simple idea: to make travel more meaningful, immersive, and hassle-free. What began as a small team with a shared passion for exploring the world has grown into a trusted travel brand, helping thousands of travelers find their dream vacation each year.
        </p>
        <p className="text-gray-600">
          Our team consists of experienced travel enthusiasts who meticulously curate every package to ensure our clients receive the best service, comfort, and unforgettable experiences.
        </p>
      </div>
    </section>

    {/* Why Choose Us Section */}
    <section className="my-12 text-center">
      <h2 className="text-3xl font-semibold text-gray-700 mb-4">Why Choose Us?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Expert Guides</h3>
          <p className="text-gray-600 mt-2">
            Our tours are led by knowledgeable and passionate guides who are experts in their fields.
          </p>
        </div>
        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Custom Experiences</h3>
          <p className="text-gray-600 mt-2">
            We offer personalized trips tailored to your preferences, ensuring each journey is unique.
          </p>
        </div>
        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Best Deals</h3>
          <p className="text-gray-600 mt-2">
            We provide exclusive offers and the best deals for your travel needs.
          </p>
        </div>
        {/* Card 4 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">24/7 Support</h3>
          <p className="text-gray-600 mt-2">
            Our customer support team is available around the clock to assist you with any queries.
          </p>
        </div>
      </div>
    </section>

    {/* Team Section */}
    <section className="my-12 text-center">
      <h2 className="text-3xl font-semibold text-gray-700 mb-4">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Team Member 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img 
            src="https://via.placeholder.com/150"
            alt="Team Member"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
          <p className="text-gray-600">CEO & Founder</p>
        </div>
        {/* Team Member 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img 
            src="https://via.placeholder.com/150"
            alt="Team Member"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
          <p className="text-gray-600">Travel Expert</p>
        </div>
        {/* Team Member 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img 
            src="https://via.placeholder.com/150"
            alt="Team Member"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800">Alex Brown</h3>
          <p className="text-gray-600">Marketing Manager</p>
        </div>
        {/* Team Member 4 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img 
            src="https://via.placeholder.com/150"
            alt="Team Member"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800">Lisa Ray</h3>
          <p className="text-gray-600">Customer Support</p>
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <section className="text-center my-12">
      <h2 className="text-3xl font-semibold text-gray-700 mb-4">Ready for Your Next Adventure?</h2>
      <p className="text-gray-600 mb-8">
        Let us help you plan your next vacation. Get in touch with our travel experts today!
      </p>
      <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
        Contact Us
      </button>
    </section>
  </div>
</div>
</>
  );
};

export default AboutUs;
