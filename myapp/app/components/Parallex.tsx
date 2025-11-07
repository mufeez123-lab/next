"use client";

import React from "react";
import Image from "next/image";

export default function SimpleBackgroundPage() {
  return (
    <div className="relative h-[400px] w-screen">
      {/* Background Image */}
      <Image
        src="/images/buildings.webp" // ✅ change to your image path
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={85}
      />

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered Title */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-6xl md:text-8xl font-extrabold text-white text-center">
          The Parallax Journey
        </h1>
      </div>
    </div>
  );
}
