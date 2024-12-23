export default function Banner() {
  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="carousel w-full relative">
        {/* Slide Items */}
        <div id="item1" className="carousel-item w-full h-96">
          <img
            src="/bistro-boss-restaurant-resources/assets/home/01.jpg"
            className="w-full h-full object-cover rounded-lg"
            alt="Slide 1"
          />
        </div>
        <div id="item2" className="carousel-item w-full h-96">
          <img
            src="/bistro-boss-restaurant-resources/assets/home/02.jpg"
            className="w-full h-full object-cover rounded-lg"
            alt="Slide 2"
          />
        </div>
        <div id="item3" className="carousel-item w-full h-96">
          <img
            src="/bistro-boss-restaurant-resources/assets/home/03.png"
            className="w-full h-full object-cover rounded-lg"
            alt="Slide 3"
          />
        </div>
        <div id="item4" className="carousel-item w-full h-96">
          <img
            src="/bistro-boss-restaurant-resources/assets/home/04.jpg"
            className="w-full h-full object-cover rounded-lg"
            alt="Slide 4"
          />
        </div>

        {/* Dot Indicators - Positioned inside the image */}
        <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-3 z-50">
          <a
            href="#item1"
            className="w-5 h-5 bg-white rounded-full hover:bg-gray-600 transition-all"
          ></a>
          <a
            href="#item2"
            className="w-5 h-5 bg-white rounded-full hover:bg-gray-600 transition-all"
          ></a>
          <a
            href="#item3"
            className="w-5 h-5 bg-white rounded-full hover:bg-gray-600 transition-all"
          ></a>
          <a
            href="#item4"
            className="w-5 h-5 bg-white rounded-full hover:bg-gray-600 transition-all"
          ></a>
        </div>
      </div>

      {/* Thumbnails Below Slider */}
      <div className="flex w-full justify-center gap-4 py-4">
        <a href="#item1" className="w-16 h-16">
          <img
            src="/bistro-boss-restaurant-resources/assets/home/01.jpg"
            alt="Thumbnail 1"
            className="w-full h-full object-cover rounded-lg border border-gray-300"
          />
        </a>
        <a href="#item2" className="w-16 h-16">
          <img
            src="/bistro-boss-restaurant-resources/assets/home/02.jpg"
            alt="Thumbnail 2"
            className="w-full h-full object-cover rounded-lg border border-gray-300"
          />
        </a>
        <a href="#item3" className="w-16 h-16">
          <img
            src="/bistro-boss-restaurant-resources/assets/home/03.png"
            alt="Thumbnail 3"
            className="w-full h-full object-cover rounded-lg border border-gray-300"
          />
        </a>
        <a href="#item4" className="w-16 h-16">
          <img
            src="/bistro-boss-restaurant-resources/assets/home/04.jpg"
            alt="Thumbnail 4"
            className="w-full h-full object-cover rounded-lg border border-gray-300"
          />
        </a>
      </div>
    </div>
  );
}
