export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-400 p-10">
        <div className="flex justify-between items-start">
          {/* Contact Us Section */}
          <div>
            <h6 className="text-white text-lg font-bold mb-4">CONTACT US</h6>
            <p>123 ABS Street, Unit 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>

          {/* Follow Us Section */}
          <div>
            <h6 className="text-white text-lg font-bold mb-4">Follow US</h6>
            <p>Join us on social media</p>
            <div className="flex gap-4 mt-2">
              {/* Facebook */}
              <a href="#" aria-label="Facebook">
                <img src="/bistro-boss-restaurant-resources/assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png" alt="Facebook" className="h-6 w-6" />
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram">
                <img src="/bistro-boss-restaurant-resources/assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png" alt="Instagram" className="h-6 w-6" />
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn">
                <img src="/bistro-boss-restaurant-resources/assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png" alt="LinkedIn" className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4 text-sm">
          Copyright © CulinaryCloud. All rights reserved.
        </div>
      </footer>
    </div>
  );
}