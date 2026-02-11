'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { GoDownload } from "react-icons/go";
import bottomImg from '../../../public/data/Materioteca-footer.jpeg'
import { Footer } from '../ui/Footer';
import { getColorByName, getColorsByCategory } from '@/data/products';
import Link from 'next/link';

interface FinishesProps {
  finishName?: string
}

const Finishes = ({ finishName }: FinishesProps) => {
  // Get color data if finishName is provided
  const selectedColor = finishName ? getColorByName(finishName) : null;
  const categoryColors = selectedColor ? getColorsByCategory(selectedColor.category) : [];
  
  // Use category colors if we have a selected color, otherwise use default affinity images
  const displayColors = categoryColors.length > 0 ? categoryColors.slice(0, 3) : [];
  
  // Generate color images using actual image paths from products data
  const colorImages = displayColors.map(color => ({
    src: color.image,
    name: color.name
  }));

  const handleDownload = async (url: string, name: string) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();

    const blobUrl = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = `${name}.jpg`;
    document.body.appendChild(a);
    a.click();

    a.remove();
    window.URL.revokeObjectURL(blobUrl);
  } catch (err) {
    console.error("Download failed", err);
  }
};
useEffect(()=>{
 window.scrollTo({
    top:0,
    behavior:'smooth'
 })
},[])
  
  return (
    <div className="w-full h-screen bg-gray-50">
        
        <div className="flex flex-col items-center justify-center text-center h-100 px-6 space-y-10">
  <h2 className="text-5xl font-gramatika text-gray-500">
    {selectedColor ? selectedColor.name : 'Striped DeLabré'}
  </h2>

  <p className="max-w-3xl text-gray-700 tracking-wider font-gramatika">
    {selectedColor 
      ? `Explore the ${selectedColor.category} color collection. This ${selectedColor.name} finish is part of our premium color palette, offering exceptional quality and aesthetic appeal for your design projects.`
      : 'Handcrafted finishing designed and developed by SpaceOne for indoor and outdoor use. A first oxidation of the material is followed by manual brushing to create the "streaked" effect. Subsequently it is lacquered with a protective, transparent varnish.'
    }
  </p>
</div>


  <div className="grid grid-cols-1 md:grid-cols-3 w-full h-[80vh] py-12 px-12 gap-5">
    {colorImages.map((n: { src: string; name: string }, index: number) => (
<div key={index} className="flex flex-col w-full h-full group cursor-pointer">

  {/* Image */}
  <div className="relative flex-1 overflow-hidden">
    <Image
      src={n.src}
      alt={`Color ${index + 1}`}
      fill
      priority
      className="
        object-cover
        transition-transform duration-700
        group-hover:scale-105
      "
    />
  </div>

  {/* Bottom row (text + icon) */}
  <div className="flex items-center justify-between mt-3">
    <h2 className="text-black font-light font-gramatika text-2xl tracking-wide">
      {n.name}
    </h2>

    <GoDownload
  onClick={(e) => {
    e.stopPropagation(); // prevents parent click issues
    handleDownload(n.src, n.name);
  }}
  className="text-2xl hover:scale-110 transition cursor-pointer"
/>

  </div>

</div>

    ))}
  </div>


 {/* ===== Final Hero Section ===== */}
<div className="w-full bg-gray-200 min-h-auto grid grid-cols-1 md:grid-cols-2">

  {/* Left Content */}
  <div className="flex items-start px-6 md:px-20 py-16">
    <div className="space-y-6 max-w-lg">
      <h2 className="font-gramatika text-3xl md:text-4xl text-black">
        Metal Finishes
      </h2>

      <p className="text-gray-600 text-base md:text-lg leading-relaxed font-gramatika">
        The complete collection of SpaceOne metal finishes.
      </p>

      <Link href="/contact-us" className="
        border border-black
        px-6 py-2
        rounded-full
        text-sm tracking-wide
        hover:bg-black hover:text-white
        transition cursor-pointer
      ">
        CONTACT US
      </Link>
    </div>
  </div>

  {/* Right Image (full height) */}
  <div className="relative w-full h-[40vh] md:h-[70vh]">
    <Image
      src={bottomImg}
      alt="Metal finishes"
      fill
      priority
      className="object-cover"
    />
  </div>

</div>

<Footer/>
    </div>
  )
}

export default Finishes