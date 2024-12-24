
export default function OrderFood() {
  return (
    <div>
           {/* Hero Banner */}
           <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url('bistro-boss-restaurant-resources/assets/shop/banner2.jpg')",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Order Food !</h1>
            <p className="mb-5">Would You Like To Order A Dish?</p>
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

    </div>
  )
}
