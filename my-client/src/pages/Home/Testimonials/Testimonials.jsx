import  { useState, useEffect } from "react";

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Simulating fetching data from a JSON file
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);

  // Handle navigation
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (reviews.length === 0) {
    return <div>Loading testimonials...</div>;
  }

  const { name, details, rating } = reviews[currentIndex];

  return (
    <div className="w-full flex flex-col items-center justify-center py-12 bg-gray-50 relative">
      {/* Section Title */}
      <h3 className="text-sm uppercase tracking-widest text-yellow-600 mb-2">
        ---What Our Clients Say---
      </h3>
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">TESTIMONIALS</h2>

      {/* Rating Stars */}
      <div className="flex items-center mb-6">
        {Array(rating)
          .fill(0)
          .map((_, index) => (
            <span key={index} className="text-yellow-500 text-xl mx-1">
              ★
            </span>
          ))}
        {Array(5 - rating)
          .fill(0)
          .map((_, index) => (
            <span key={index} className="text-gray-400 text-xl mx-1">
              ★
            </span>
          ))}
      </div>

      {/* Quote Icon */}
      <div className="text-6xl text-gray-700 mb-4">“</div>

      {/* Testimonial Text */}
      <p className="text-center text-gray-600 max-w-3xl mb-6">{details}</p>

      {/* Client Name */}
      <p className="text-lg font-semibold text-yellow-600">{name}</p>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer text-gray-800 text-3xl">
        <span onClick={handlePrevious}>&lt;</span>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-gray-800 text-3xl">
        <span onClick={handleNext}>&gt;</span>
      </div>
    </div>
  );
}