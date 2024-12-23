import { useEffect, useState } from "react";

export default function PopularMenu() {
  const [menu, setMenu] = useState([]);
  const [visibleItems, setVisibleItems] = useState(6); // Number of items to show initially

  useEffect(() => {
    fetch('menu.json') // Ensure the JSON file is named correctly and accessible
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  const handleSeeMore = () => {
    setVisibleItems(menu.length); // Show all items when "See More" is clicked
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Menu Section */}
      <div className="mt-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">From Our Menu</h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menu.slice(0, visibleItems).map((item) => (
          <div
            key={item._id}
            className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-600 mt-2">{item.recipe}</p>
              <p className="mt-2 text-gray-500 italic capitalize">Category: {item.category}</p>
              <p className="mt-4 text-yellow-500 font-semibold">Price: ${item.price.toFixed(2)}</p>
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
  );
}