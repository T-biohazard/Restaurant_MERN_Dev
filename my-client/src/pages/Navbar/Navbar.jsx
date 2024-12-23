import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    
    <div className="">
      <div className=" fixed z-10 navbar bg-black bg-opacity-70 text-white">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black bg-opacity-90 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white">
              <li> <li><Link to="/">Home</Link></li></li>
              <li><Link to="/menu">Our Menu</Link></li>
              <li><a href="#contact-us">About Us</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss Restaurant</a>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Our Menu</Link></li>
            <li><a href="#about-us">About Us</a></li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <button className="btn btn-outline mr-2">Sign In</button>
          <button className="btn btn-primary flex items-center">
  <img
    src="/bistro-boss-restaurant-resources/assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png"
    alt="Icon"
    className="h-8 w-8 mr-2"
  />
  Our Shop
</button>

        </div>
      </div>
    </div>


// home



  );
}
