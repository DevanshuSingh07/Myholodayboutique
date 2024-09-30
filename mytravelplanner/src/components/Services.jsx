import { Link } from 'react-router-dom';
import des1 from '../assets/destinations/des1.jpg'
import des2 from '../assets/destinations/des2.jpg'
import des3 from '../assets/destinations/des3.jpg'
import arrow from'../assets/icons/arrow1.png'

import React from 'react';

const servicesData = [
  { title: 'Beach Getaways', description: 'Relax on beautiful beaches', imgSrc: des1, price:'2000' },
  { title: 'Adventure Tours', description: 'Explore mountains and forests', imgSrc: des2, price:'4000' },
  { title: 'Cultural Experiences', description: 'Immerse in local cultures', imgSrc: des3, price:'6000' },
];

const Services = () => {
  return (
    <section className="my-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {servicesData.map((service, index) => (
          <div key={index} className="bg-white rounded-lg transition shadow-lg overflow-hidden max-w-xs shadow-blue-900/30">
            <img src={service.imgSrc} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
              <div className="flex justify-between">
              <span className=''>&#8377;{service.price+'/-'}</span>
              
              <Link to={'#'}>
              <img src={arrow} alt="" className="src" />
                   
              </Link>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
