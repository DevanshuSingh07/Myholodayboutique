import React, { useRef, useState } from 'react';
import rev1 from '../assets/revimg/rev1.jpg';
import rev2 from '../assets/revimg/rev2.jpg';
import rev3 from '../assets/revimg/rev3.jpg';
import rev4 from '../assets/revimg/1094.jpg';
import rev5 from '../assets/revimg/1110.jpg';

// Dummy testimonial data
const testimonialsData = [
  { name: 'John Doe', review: 'Amazing service, I had a wonderful experience!', image: rev1 },
  { name: 'Jane Smith', review: 'Truly unforgettable trip. Highly recommended!', image: rev2 },
  { name: 'Sam Wilson', review: 'Professional and seamless experience.', image: rev3 },
  { name: 'Lisa Ray', review: 'Top-notch service and beautiful destinations.', image: rev4 },
  { name: 'Alex Brown', review: 'I would highly recommend their travel packages!', image: rev5 },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentnode = useRef(null);
  const cardref = useRef(null);
  const [count, setcount] = useState(null);

  function increasecount() {
    if (currentIndex === testimonialsData.length - 1) {
      setcount(540);
    } else {
      setcount((count) => count + count);
    }
  }

  // Move to the previous testimonial
  const handlePrev = () => {
    let size = cardref.current.clientWidth;
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
    if (currentIndex !== 0) {
      currentnode.current.style.transform = `translateX(${size / currentIndex}px)`;
    } else {
      currentnode.current.style.transform = `translateX(0px)`;
    }
  };

  // Move to the next testimonial
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
    if (currentIndex !== 0) {
      let size = cardref.current.clientWidth;
      currentnode.current.style.transform = `translateX(-${size * currentIndex}px)`;
    } else {
      currentnode.current.style.transform = `translateX(0px)`;
    }
  };

  return (
    <div className="testimonial w-[80%] mx-auto relative mb-5">
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-2xl bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition duration-300 z-10"
        onClick={handlePrev}
      >
        {"<"}
      </button>
      <div className="mob-component relative overflow-hidden px-4 ">
        <div ref={currentnode} className={`flex w-[250%] gap-6 transition-transform duration-500 ease-in-out`}>
          {testimonialsData.map((data, index) => (
            <div ref={cardref} className={'shadow-lg bg-white p-6 rounded-lg text-center'} key={index}>
              <img src={data.image} alt={data.name} className="rounded-full w-24 h-24 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800">{data.name}</h3>
              <p className="text-sm text-gray-600 italic mt-2">{data.review}</p>
              <div className="icons flex justify-center mt-4">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-2xl bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition duration-300 z-10"
        onClick={handleNext}
      >
        {">"}
      </button>
    </div>
  );
};

export default TestimonialsCarousel;
