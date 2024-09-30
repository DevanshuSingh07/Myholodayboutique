import React, { useState } from 'react';
import travelPackages from '../content/Travelpackages'; // Assuming you already have travel package data
import PackageModal from '../components/PackageModal'; // Import the modal component

const TravelPackagesPage = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handlePackageClick = (pkg) => {
    setSelectedPackage(pkg);
  };

  const closeModal = () => {
    setSelectedPackage(null);
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Explore Our Travel Packages
        </h2>
        <p className="text-lg text-center text-gray-600 mb-8">
          Discover the world with our curated travel packages. Choose your next adventure and enjoy the experience of a lifetime.
        </p>

        {/* Travel Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {travelPackages.map((pkg, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              onClick={() => handlePackageClick(pkg)}
            >
              {/* Package Image */}
              <img
                src={pkg.image}
                alt={pkg.destination}
                className="w-full h-48 object-cover"
              />

              {/* Package Details */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {pkg.destination}
                </h3>
                <p className="text-gray-600">{pkg.duration}</p>
                <p className="text-blue-500 font-bold mt-2">{pkg.price}</p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-blue-500 opacity-0 hover:opacity-80 transition-opacity duration-300 flex justify-center items-center">
                <p className="text-white text-lg font-semibold">
                  View Details
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Render Modal */}
        {selectedPackage && (
          <PackageModal pkg={selectedPackage} onClose={closeModal} />
        )}
      </div>
    </div>
  );
};

export default TravelPackagesPage;
