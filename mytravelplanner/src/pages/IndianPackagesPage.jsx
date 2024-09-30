import React from 'react';
import IndianPackages from '../content/IndianPackages';
 // Assuming Indian packages are filtered in the data

const indianPackages = IndianPackages.filter(pkg => pkg.destination.includes('India'));
  console.log(indianPackages)
const IndianPackagesPage = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Explore Indian Travel Packages
        </h2>
        <p className="text-lg text-center text-gray-600 mb-8">
          Dive into the culture, heritage, and beauty of India with our curated packages.
        </p>

        {/* Indian Travel Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {indianPackages.map((pkg, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-md hover:scale-90  overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Package Image */}
              <img
                src={pkg.image}
                alt={pkg.destination}
                className="w-full h-52 object-cover "
              />

              {/* Package Details */}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {pkg.destination}
                </h3>
                <p className="text-gray-500">{pkg.duration}</p>
                <p className="text-blue-500 font-bold mt-2">{pkg.price}</p>

                {/* Highlights */}
                <ul className="mt-2 text-gray-600 list-disc list-inside">
                  {pkg.highlights.slice(0, 3).map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-blue-500 opacity-0 hover:opacity-80 transition-opacity duration-300 flex justify-center items-center">
                <p className="text-white text-lg font-semibold">View Details</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndianPackagesPage;
