"use client";

import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full border-b  border-gray-200">
      {/* Top Bar */}
      <div className="bg-red-200 text-sm text-gray-700 flex justify-between items-center px-6 py-2 border-b border-gray-100">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1">
            <Phone size={15} className="text-orange-500" />
            <span className="hover:text-orange-500 cursor-pointer">
              +966 545132146
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <Mail size={15} className="text-gray-600" />
            <span className="hover:text-orange-500 cursor-pointer">
              info@cargotradeco.com
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin size={15} className="text-gray-600" />
            <span>Al Khobar, KSA</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-3 text-gray-600">
          <Facebook className="hover:text-orange-500 cursor-pointer" size={16} />
          <Twitter className="hover:text-orange-500 cursor-pointer" size={16} />
          <Linkedin className="hover:text-orange-500 cursor-pointer" size={16} />
          <Instagram className="hover:text-orange-500 cursor-pointer" size={16} />
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex justify-between items-center px-10 py-3 bg-white">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/cargo.svg" // replace with your logo path
            alt="Cargo Trade"
            width={140}
            height={60}
          />
        </Link>

        {/* Menu Links */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <li><Link href="/" className="hover:text-orange-600">Home</Link></li>
          <li><Link href="/about" className="hover:text-orange-600">About</Link></li>
          <li><Link href="/services" className="hover:text-orange-600">Services</Link></li>
          <li><Link href="/clients" className="hover:text-orange-600">Clients</Link></li>
          <li><Link href="/company-profile" className="hover:text-orange-600">Company Profile</Link></li>
          <li><Link href="/contact" className="hover:text-orange-600">Contact Us</Link></li>
        </ul>

        {/* Enquire Button */}
        <Link
          href="/enquiry"
          className="hidden md:flex items-center bg-[#001B48] text-white px-5 py-2 rounded-md hover:bg-orange-600 transition"
        >
          Enquire Us <ArrowRight size={18} className="ml-2" />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
