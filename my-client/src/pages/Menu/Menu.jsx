import { useEffect, useState } from "react";

export default function Menu() {
  const [menu, setMenu] = useState([]);
  const [visibleItems, setVisibleItems] = useState(6); // Initial number of visible items

  useEffect(() => {
    fetch("menu.json") // Fetch the menu data
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  const handleSeeMore = () => {
    setVisibleItems(menu.length); // Show all items
  };

  return (
    <div>
      {/* Hero Banner */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url('bistro-boss-restaurant-resources/assets/menu/banner3.jpg')",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Our Menu</h1>
            <p className="mb-5">Would You Like To Try A Dish?</p>
            <button
              onClick={() =>
                document.getElementById("xx").scrollIntoView({ behavior: "smooth" })
              }
              className="btn btn-primary"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Today's Offers */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mt-10 text-center">
          <h2 id="xx" className="text-3xl font-bold text-gray-800 mb-6">
            From Our Menu
          </h2>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menu.slice(0, visibleItems).map((item) => (
            <div
              key={item._id}
              className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-600 mt-2">{item.recipe}</p>
                <p className="mt-2 text-gray-500 italic capitalize">
                  Category: {item.category}
                </p>
                <p className="mt-4 text-yellow-500 font-semibold">
                  Price: ${item.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* "See More" Button */}
        {visibleItems < menu.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleSeeMore}
              className="px-6 py-2 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition-colors"
            >
              See More
            </button>
          </div>
        )}
      </div>

      {/* Parallax Section */}
      <div className="mt-8 relative w-full h-[400px] bg-gray-800">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm"
          style={{
            backgroundImage: `url('bistro-boss-restaurant-resources/assets/menu/salad-bg.jpg')`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="relative z-10 flex w-full h-full items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              We Deliver the Best Quality Food
            </h1>
            <p className="text-lg">
              Explore our exclusive menu with delicious desserts, savory dishes,
              and more!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
