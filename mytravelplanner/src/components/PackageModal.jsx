import React from 'react';

const PackageModal = ({ pkg, onClose }) => {
  if (!pkg) return null; // If no package is selected, don't render the modal.

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg mx-auto relative">
        {/* Close Button */}
        <button
          className="absolute top-0 right-0 p-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Package Title */}
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">
          {pkg.destination}
        </h3>

        {/* Package Image */}
        <img
          src={pkg.image}
          alt={pkg.destination}
          className="w-full h-48 object-cover mb-4 rounded"
        />

        {/* Package Details */}
        <p className="text-lg text-gray-700 mb-4">{pkg.description}</p>

        {/* Package Price */}
        <p className="text-blue-500 text-lg font-bold mb-4">
          Price: {pkg.price}
        </p>

        {/* Package Highlights */}
        <h4 className="text-xl font-semibold text-gray-800 mb-2">Highlights:</h4>
        <ul className="list-disc list-inside text-gray-600">
          {pkg.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>

        {/* Call to Action */}
        <div className="mt-6 text-center">
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            onClick={onClose}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageModal;
