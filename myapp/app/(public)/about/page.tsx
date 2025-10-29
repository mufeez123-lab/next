"use client";

import Head from "next/head";
import Navbar from "../../components/Navbar";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* <Navbar /> */}
      <Head>
        <title>About Us Page</title>
      <meta
          name="description"
          content="Learn more about our team and how we build high-quality Next.js web applications with modern design and SEO optimization."
        />
      </Head>
      <section className="min-h-screen bg-gray-50 text-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src=""
              alt="About Cargo Trade"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Cargo Trade</span>
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Cargo Trade, we specialize in delivering reliable and efficient
              logistics and transportation services across the globe. With years
              of industry experience, we have built a strong network and
              reputation for excellence in freight management.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our mission is to simplify logistics and provide seamless
              end-to-end supply chain solutions tailored to your business needs.
              From road freight to international shipping, our team ensures your
              cargo is handled with utmost care and precision.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
              Learn More →
            </button>
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-5xl mx-auto mt-24 text-center">
          <h3 className="text-3xl font-semibold mb-6">Our Mission & Vision</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We strive to be the most trusted logistics partner by offering
            efficient, transparent, and innovative transport solutions — helping
            our clients expand globally with confidence and reliability.
          </p>
        </div>

        {/* Team Section */}
        <div className="max-w-6xl mx-auto mt-24 text-center">
          <h3 className="text-3xl font-semibold mb-12">Our Leadership Team</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { name: "John Mathews", role: "CEO & Founder" },
              { name: "Sarah Williams", role: "Operations Head" },
              { name: "Ali Khan", role: "Logistics Manager" },
            ].map((person, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition"
              >
                <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4"></div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {person.name}
                </h4>
                <p className="text-blue-600 text-sm">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
