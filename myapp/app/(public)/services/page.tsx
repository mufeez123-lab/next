"use client";

import { Truck, Ship, Plane, Package } from "lucide-react";
import Navbar from "../../components/Navbar";

export default function ServicesPage() {
  const services = [
    {
      icon: <Truck className="w-10 h-10 text-blue-600" />,
      title: "Road Freight",
      description:
        "Reliable and cost-effective road transportation across the GCC and beyond with a focus on safety and punctuality.",
    },
    {
      icon: <Ship className="w-10 h-10 text-blue-600" />,
      title: "Sea Freight",
      description:
        "Comprehensive sea cargo solutions for full-container and less-than-container loads worldwide.",
    },
    {
      icon: <Plane className="w-10 h-10 text-blue-600" />,
      title: "Air Freight",
      description:
        "Fast and secure air freight services ensuring your shipments reach destinations on time.",
    },
    {
      icon: <Package className="w-10 h-10 text-blue-600" />,
      title: "Customs Clearance",
      description:
        "Expert handling of customs documentation and procedures for smooth import and export operations.",
    },
  ];

  return (
    <>
      {/* <Navbar /> */}

      <section className="min-h-screen bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            We offer a complete range of logistics and cargo solutions designed to meet your business needs — from local deliveries to international freight management.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 flex flex-col items-center text-center"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
