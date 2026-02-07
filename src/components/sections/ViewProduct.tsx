'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { CiCirclePlus } from "react-icons/ci";

import { Footer } from '../ui/Footer'


const ViewProduct = () => {
  const [selectedColor, setSelectedColor] = useState(0)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [openSection, setOpenSection] = useState("")


  
  // Sample data
  const product = {
    name: "Celato | Iridium Edition",
    description: "Celesto is a reference to what is concealed to keep a memory intact; it's an archetype in which beauty is revealed in stages. A monolithic appearance makes Celato a contemporary memoir, like a legend that tells of magnificent treasures safeguarded below sacred stones. Celesto reveals its dual soul: with many internal hidden, almost secret spaces, it combines several tessellate to form a whole aesthetic function and an incredible ability to make a unique piece of design, a combination of tradition and modernity.",
    details: "At Milan Design Week 2023, De Castelli presents Iridium Edition: a selection of the brand's iconic furniture which fully expresses its aesthetic. The unique cobalt blue lacquer on the inside combined with the new Delirium finish transforms each piece into a presence with intense, vibrant character.",
    designer: "DESIGN | R&D De Castelli"
  }

  // Online image URLs for slider
  const sliderImages = [
    'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
  ]

  const colors = [
    { id: 0, name: "Iridium Stainless steel #0", code: "#E5E7EB" },
    { id: 1, name: "Gold Stainless steel #1", code: "#FBBF24" },
    { id: 2, name: "Copper Stainless steel #2", code: "#B45309" },
    { id: 3, name: "Bronze Stainless steel #3", code: "#92400E" }
  ]

  // Online URLs for color images
  const colorImages = [
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=60',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=40',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=20'
  ]

  // Online URLs for affinity products
  const affinityImages = [
    'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length)
  }

  return (
    <>
    <div className="min-h-screen bg-white text-black">
      {/* Main Hero Image */}
      <div className='relative h-[100vh] w-full'>
        <Image 
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt='Product Hero Image'
          fill
          className='object-cover'
          priority
        />
      </div>

      {/* Product Info Section */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-15 py-16 md:py-15">
        {/* Product Name */}
        <h1 className="text-1xl text-gray-900 md:text-2xl lg:text-4xl mb-8 tracking-tight font-gramatika font-[300] ">
          Celato | Iridium Edition
        </h1>

        {/* Description in two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 lg:gap-0 mb-36">

  {/* DESCRIPTION */}
  <div className="max-w-5xl space-y-0 font-gramatika tracking-wide leading-5">
    <p className="text-[19px] text-gray-700 ">
      Celato is a reference to what is concealed to keep a memory intact; it’s an archetype in which beauty is revealed in stages. A monolithic appearance makes Celato a contemporary menhir; like a legend that tells of magnificent treasures safeguarded below sacred stones, Celato reveals its dual soul, with many internal, hidden, almost secret spaces. It combines several tesserae to form a whole: aesthetics, function and an incredible ability to make a unique piece of design, a combination of tradition and modernity.
    </p>
    <p className="text-[19px] text-gray-700">
      At Milan Design Week 2025, De Castelli presents Iridium Edition: a selection of the brand’s iconic furniture which fully expresses its aesthetic. The unique cobalt blue lacquer on the inside combined with the new DeIridium finish transforms each piece into a presence with intense, vibrant character.
    </p>
  </div>


  {/* SIDE META */}
  <div className="flex items-start lg:justify-center font-gramatika">
    <p className="text-[16px] text-gray-900 uppercase tracking-wider">
      <span className="text-[12px] relative -top-2 mr-2 text-gray-600">DESIGN</span>
      R&D De Castelli
    </p>
  </div>

</div>


{/* ===== Premium Center Slider ===== */}
<div className="mb-32">
  <div
    className="relative w-full h-[95vh] overflow-hidden"
    onClick={(e) => {
      const imgBox = document.getElementById("product-image-box");
      if (!imgBox) return;

      const rect = imgBox.getBoundingClientRect();

      const clickX = e.clientX;

      // 👉 if click is INSIDE image → do nothing
      if (clickX >= rect.left && clickX <= rect.right) return;

      // 👉 outside → slide based on side
      const center = window.innerWidth / 2;

      if (clickX < center) prevSlide();
      else nextSlide();
    }}
  >
    {/* SLIDE TRACK */}
    <div
      className="flex h-full transition-transform duration-700 ease-out"
      style={{
        transform: `translateX(-${currentSlide * 100}%)`,
      }}
    >
      {sliderImages.map((img, index) => (
        <div
          key={index}
          className="min-w-full flex items-center justify-center"
        >
          {/* 👇 image box we detect clicks against */}
          <div
            id="product-image-box"
            className="relative w-[55%] h-[85%]"
          >
            <Image
              src={img}
              alt={`Product view ${index + 1}`}
              fill
              className="object-contain select-none"
              draggable={false}
              priority
            />
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* fraction */}
  <div className="text-center mt-0 text-sm text-gray-500 tracking-wide font-light">
    {currentSlide + 1} / {sliderImages.length}
  </div>
</div>


{/* ===== FULL SCREEN METAL DETAILS SECTION ===== */}
<div className="min-h-auto bg-white px-8 md:px-16 lg:px-18 font-gramatika">

  {[
    { id: "finishes", title: "Metal finishes" },
    { id: "materials", title: "Other materials" },
    { id: "dimensions", title: "Dimensions" },
    { id: "downloads", title: "Downloads" },
  ].map((section) => (
    <div key={section.id} className="w-full">

      <hr className="border-gray-300" />

      {/* HEADER */}
      <button
        onClick={() =>
          setOpenSection(openSection === section.id ? "" : section.id)
        }
        className="w-full flex items-center justify-between py-2 text-left"
      >
        <h2 className="text-[18px] tracking-wide">
          {section.title}
        </h2>

        <CiCirclePlus
          className={`text-3xl transition-all duration-300 ${
            openSection === section.id ? "rotate-45 text-blue-600" : ""
          }`}
        />
      </button>

      {/* CONTENT */}
      <div
        className={`overflow-hidden transition-all duration-700 ${
          openSection === section.id
            ? "max-h-[1200px] opacity-100 pb-16"
            : "max-h-0 opacity-0"
        }`}
      >

        {/* FINISHES GRID */}
        {section.id === "finishes" && (
          <>
            <p className="text-gray-400 mb-10">Stainless steel</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-16">
              {colorImages.map((img, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative w-full aspect-square overflow-hidden">
                    <Image
                      src={img}
                      alt=""
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <p className="mt-3 text-sm">{colors[index].name}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {section.id === "materials" && (
          <p className="text-gray-700 text-lg">
            Brass, copper, patinated metals and custom finishes available.
          </p>
        )}

        {section.id === "dimensions" && (
          <p className="text-gray-700 text-lg">
            W.160 D.40 H.162 cm — Custom sizes available.
          </p>
        )}

        {section.id === "downloads" && (
          <div className="flex flex-col gap-4 text-lg">
            <a className="underline hover:text-blue-600">Product Sheet PDF</a>
            <a className="underline hover:text-blue-600">3D Model</a>
            <a className="underline hover:text-blue-600">Technical Drawings</a>
          </div>
        )}
      </div>

    </div>
  ))}

  <hr className="border-gray-300" />
</div>



        {/* Affinities with this product */}
<div className="w-full min-h-screen flex flex-col">

  <h2 className="text-4xl font-gramatika font-[100] text-center py-16">
    Affinities with this product
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 w-full h-[70vh]">
    {affinityImages.map((src, index) => (
      <div key={index} className="relative w-full h-full overflow-hidden group">
        <Image
          src={src}
          alt={`Affinity ${index + 1}`}
          fill
          priority
          className="
            object-cover
            transition-transform duration-700
            group-hover:scale-105
          "
        />
      </div>
    ))}
  </div>
</div>


      </div>
    </div>
    <Footer />
    </>
  )
}

export default ViewProduct