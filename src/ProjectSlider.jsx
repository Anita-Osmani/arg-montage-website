import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/assets/cuisine.jpg",
  "/assets/cuisine3.jpg",
  "/assets/furniture.jpg",
  "/assets/room.jpg",
  "/assets/stairs.jpg",
  "/assets/stairs2.jpg",
];

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer text-3xl text-[#724935] bg-white rounded-full shadow p-2 hover:scale-110 transition"
    onClick={onClick}
  >
    <FaArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer text-3xl text-[#724935] bg-white rounded-full shadow p-2 hover:scale-110 transition"
    onClick={onClick}
  >
    <FaArrowLeft />
  </div>
);

const ProjectSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    swipe: true,
    touchMove: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 relative">
      <h2 className="text-3xl font-bold text-center mb-10 mt-10" style={{ color: "#492D25" }}>
        Nos Réalisations
      </h2>

      {/* Slider me foto */}
      <Slider {...sliderSettings}>
        {images.map((img, i) => (
          <div key={i} className="px-2">
            <img
              src={img}
              alt={`Project ${i + 1}`}
              className="rounded-lg shadow-lg h-[300px] w-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectSlider;
