import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary-container text-white py-10 px-4 w-full mt-auto">
      <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <span className="text-2xl font-bold">Hao Chang</span>
          <p className="text-base text-on-primary-container leading-relaxed">
            The most trusted home repair service.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-sm text-secondary-fixed">Links</h4>
          <nav className="flex flex-col gap-2 text-on-primary-container text-sm">
            <Link to="/dashboard" className="hover:text-white transition">Home</Link>
            <Link to="/about" className="hover:text-white transition">About Us</Link>
            <Link to="/how-it-works" className="hover:text-white transition">How It Works</Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-sm text-secondary-fixed">Services</h4>
          <nav className="flex flex-col gap-2 text-on-primary-container text-sm">
            <Link to="/service/plumber" className="hover:text-white transition">Plumber</Link>
            <Link to="/service/electrician" className="hover:text-white transition">Electrician</Link>
            <Link to="/service/ac" className="hover:text-white transition">Air Conditioner</Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-sm text-secondary-fixed">Contact</h4>
          <p className="text-on-primary-container text-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">call</span> +855 12 345 678
          </p>
          <p className="text-on-primary-container text-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">mail</span> info@haochang.com
          </p>
        </div>
      </div>
      <div className="container-custom mt-8 pt-4 border-t border-white/10 text-center text-sm text-on-primary-container">
        © 2026 Hao Chang. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;