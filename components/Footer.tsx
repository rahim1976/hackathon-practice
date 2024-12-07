import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div>
          <h2 className="font-bold text-lg mb-4">Exclusive</h2>
          <p className="mb-2">Subscribe</p>
          <p className="mb-4">Get 10% off your first order</p>
          <div className="flex items-center border border-white p-2">
            <input type="email" placeholder="Enter your email" className="bg-black text-white outline-none flex-grow" />
            <button className="text-white">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-4">Support</h2>
          <p>111 Bijoy sarani, Dhaka,</p>
          <p>DH 1515, Bangladesh.</p>
          <p className="mt-4">exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-4">Account</h2>
          <ul>
            <li className="mb-2">My Account</li>
            <li className="mb-2">Login / Register</li>
            <li className="mb-2">Cart</li>
            <li className="mb-2">Wishlist</li>
            <li className="mb-2">Shop</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-4">Quick Link</h2>
          <ul>
            <li className="mb-2">Privacy Policy</li>
            <li className="mb-2">Terms Of Use</li>
            <li className="mb-2">FAQ</li>
            <li className="mb-2">Contact</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-4">Download App</h2>
          <p className="mb-4">Save $3 with App New User Only</p>
          <div className="flex mb-4">
            <img src="https://placehold.co/60x60" alt="QR Code" className="mr-2" />
            <div>
              <img src="https://placehold.co/100x30" alt="Google Play Store" className="mb-2" />
              <img src="https://placehold.co/100x30" alt="Apple App Store" />
            </div>
          </div>
          <div className="flex space-x-4">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <p>© Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;