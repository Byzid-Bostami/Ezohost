import React, { useState } from 'react';
import { FaQuoteLeft } from "react-icons/fa";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import sorol from '../assets/sorol_ezo.png';
import sayed from '../assets/sayed_pappu.png';

const testimonials = [
  {
    id: 1,
    quote: "As a web developer who prioritizes speed and support, I've consistently been impressed by Ezohost's performance and exceptional customer service. Their dedication to providing a seamless and efficient hosting experience has led me to recommend them to hundreds of my clients. If you're seeking a hosting provider that can meet your high standards for speed, reliability, and responsive support, look no further than Ezohost.",
    name: "A.R. Sorol",
    title: "Full Stack Developer",
    image: sorol,
  },
  {
    id: 2,
    quote: "Ezohost (DotRed Cloud) has been a gamechanger for my online presence over the past four years. Their reliable service and exceptional support have consistently exceeded my expectations, making them an easy recommendation for anyone seeking a top-tier hosting provider.",
    name: "Sayed Pappu",
    title: "Frontend Engineer",
    image: sayed,
  }
];

const SliderApp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto ">
      <div className="flex flex-col items-center justify-center space-y-9">
        <div className="flex flex-col items-center space-y-4">
          <FaQuoteLeft className="text-5xl text-slate-600" />
          <p className="text-lg font-normal text-center lg:text-2xl md:text-xl lg:px-28 text-slate-200">
            {testimonials[currentIndex].quote}
          </p>
        </div>
        <div className="flex flex-row items-center justify-center space-x-4">
          <img className="w-16 lg:w-20 md:w-20" src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
          <div>
            <h3 className="text-xl font-semibold text-slate-200">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-lg text-slate-400">{testimonials[currentIndex].title}</p>
          </div>
        </div>
      </div>

      {/* Previous and Next buttons */}
      <button
        className="absolute left-[-60px] p-2 transform -translate-y-1/2 rounded-full top-1/2 bg-slate-700 hover:bg-slate-600"
        onClick={handlePrev}
      >
        <FiChevronLeft className="text-3xl text-white" />
      </button>
      <button
        className="absolute right-[-60px] p-2 transform -translate-y-1/2 rounded-full top-1/2 bg-slate-700 hover:bg-slate-600"
        onClick={handleNext}
      >
        <FiChevronRight className="text-3xl text-white" />
      </button>
    </div>
  );
};

export default SliderApp;
