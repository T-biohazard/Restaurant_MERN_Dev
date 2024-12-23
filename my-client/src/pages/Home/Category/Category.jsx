

export default function Category() {
  const slides = [
    "/bistro-boss-restaurant-resources/assets/home/slide1.jpg",
    "/bistro-boss-restaurant-resources/assets/home/slide2.jpg",
    "/bistro-boss-restaurant-resources/assets/home/slide3.jpg",
    "/bistro-boss-restaurant-resources/assets/home/slide4.jpg",
    "/bistro-boss-restaurant-resources/assets/home/slide4.jpg",
  ];
  const labels = ["Salad",  "Pizza", "Soup", "Dessert","replicate"];

  return (
    <div className="mx-52 ">
      <h1 className="text-center text-yellow-700 text-2xl my-2">
        From 11.00 AM to 12.00 PM
      </h1>
      <h1 className="text-center font-mono text-2xl my-4">Order Online</h1>

      {/* Carousel Container */}
      <div className="flex overflow-x-auto gap-4 px-4 py-2">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative w-40 h-40 flex-shrink-0 rounded-lg shadow-lg"
          >
            <img
              src={slide}
              className="w-full h-full object-cover rounded-lg"
              alt={`Slide ${index + 1}`}
            />
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-sm font-bold bg-black bg-opacity-70 px-2 py-1 rounded">
              {labels[index % labels.length]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
