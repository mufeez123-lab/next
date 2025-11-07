"use client";

import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full border-b  border-gray-200">
    


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
          className="hidden md:flex items-center bg-[#001B48] mr-14 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition"
        >
          Enquire Us <ArrowRight size={18} className="ml-2" />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
