"use client";

import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full ">
      
      {/* Main Navbar */}
      <nav className="flex justify-between items-center px-10 py-3 bg-white">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png" // replace with your logo path
            alt="Cargo Trade"
            width={100}
            height={60}
          />
        </Link>

        {/* Menu Links */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <li><Link href="/" className="hover:text-orange-600">Ho</Link></li>
          <li><Link href="/about" className="hover:text-orange-600">About</Link></li>
          <li><Link href="/services" className="hover:text-orange-600">Services</Link></li>
          <li><Link href="/clients" className="hover:text-orange-600">Clients</Link></li>
          <li><Link href="/company-profile" className="hover:text-orange-600">Company Profile</Link></li>
          <li><Link href="/contact" className="hover:text-orange-600">Contact Us</Link></li>
        </ul>

     {/* Phone Number */}
<div className="hidden md:flex items-center space-x-2 -mr-62 text-gray-700 hover:text-[#cf081f] transition">
  {/* Wrapper for Icon Styling */}
  <div className="bg-gray-300 p-2 flex items-center justify-center rounded-full">
    <Phone size={18} className="text-[#cf081f]" />
  </div>
  <span className="font-semibold text-lg">
    +91-6362514956
  </span>
</div>
        
        {/* Enquire Button */}
        <Link
          href="/enquiry"
          className="hidden md:flex items-center bg-[#cf081f] mr-14 text-white px-8 py-4 rounded-full hover:bg-orange-600 group transition"
        >
          Enquire Us <ArrowRight size={24} className="ml-2 group-hover:rotate-[-40deg] transition duration-300" />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;