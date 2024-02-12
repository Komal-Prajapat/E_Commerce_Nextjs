import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Slider() {
  const slides = [
    {
      url: "https://cdn.pixabay.com/photo/2017/01/22/12/07/imac-1999636_1280.png",
    },
    {
      url: "https://cdn.pixabay.com/photo/2016/12/01/18/17/mobile-phone-1875813_640.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2019/04/07/09/41/speakers-4109274_1280.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((currentIndex) =>
        currentIndex === slides.length - 1 ? 0 : currentIndex + 1
      );
    }, 2000);

    return () => clearInterval(timer);
  }, [currentIndex, slides.length]);

  return (
    <div className="max-w-[1400px] h-[450px] w-full m-auto py-3 px-4 relative group overflow-hidden rounded-2xl p-2">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      ></div>

      {/* Left Arrow */}
      <div className="absolute top-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer transform -translate-y-1/2 opacity-75 hover:opacity-100 transition duration-300">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      {/* Right Arrow */}
      <div className="absolute top-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer transform -translate-y-1/2 opacity-75 hover:opacity-100 transition duration-300">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      {/* Slide Navigation Dots */}
      <div className="flex absolute bottom-4 left-1/2 transform -translate-x-1/2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer mx-1 ${
              currentIndex === slideIndex ? "text-blue-500" : "text-gray-300"
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
