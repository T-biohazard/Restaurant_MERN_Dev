
export default function Feature() {
  return (
    <div>
      

{/*  about us */}
<div>
   {/* Banner */}
   <div className=" mt-8 relative w-full h-[300px] bg-gray-800">
          <img
            src="/bistro-boss-restaurant-resources/assets/shop/banner2.jpg"
            alt="Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex justify-center mx-24 items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h1 className="text-2xl text-center font-semibold text-gray-800">
                Bistro Boss Shopping
              </h1>
              <h2 className="text-center mt-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
                fugiat, praesentium minima mollitia fuga fugit temporibus
                accusamus, illo laudantium libero omnis, ipsam quo eius adipisci
                quibusdam quasi odit quaerat? Nihil, nemo corrupti.
              </h2>
            </div>
          </div>
        </div>
  
        

{/* ----------- call us ---*/}
<div>
  <h1 className="text-white text-4xl text-center mt-8 bg-black p-12 mx-14">Call Us: +88 01928318</h1>
</div>



{/* about us parralex */}
{/* About Us Parallax */}
<div className="mt-8 relative w-full h-[400px] bg-gray-800">
  {/* Blurred Background Image (Parallax effect) */}
  <div
    className="absolute inset-0 bg-cover bg-center filter blur-md"
    style={{
      backgroundImage: `url('/bistro-boss-restaurant-resources/assets/menu/dessert-bg.jpeg')`,
      backgroundAttachment: 'fixed', // This is the key property for the parallax effect
      backgroundPosition: 'center',  // Ensures the image is centered
    }}
  ></div>

  {/* Content Overlay */}
  <div className="relative z-10 flex w-full h-full items-center justify-between px-8">
    {/* Left Side: Image */}
    <div className="w-1/2 flex justify-center items-center">
      <img
        src="/bistro-boss-restaurant-resources/assets/menu/dessert-bg.jpeg"
        alt="Dessert"
        className="w-3/4 h-auto rounded-lg shadow-lg"
      />
    </div>

    {/* Right Side: About Us Text */}
    <div className="w-1/2 text-white flex flex-col justify-center items-start p-6 bg-black/50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-lg leading-relaxed">
        Welcome to our restaurant! We specialize in serving the finest desserts, crafted with love and the freshest ingredients. 
        Our team is dedicated to creating unforgettable culinary experiences. Join us for a delightful journey!
      </p>
    </div>
  </div>
</div>





</div>


    </div>
  )
}
