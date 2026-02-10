"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "../ui/Footer";

interface AchievementItem {
  id: number;
  title: string;
  category: string;
  year: string;
  img: string;
  description: string;
}

const items: AchievementItem[] = [
  {
    id: 1,
    title: "Luxury Hotel Lobby",
    category: "Tiles",
    year: "2024",
    img: "https://images.unsplash.com/photo-1618220179428-22790b461013",
    description: "Large format marble finish tiles for premium hotel lobby.",
  },
  {
    id: 2,
    title: "Art Mosaic Wall",
    category: "Mosaics",
    year: "2023",
    img: "https://images.unsplash.com/photo-1600607688066-890987f18a86",
    description: "Handcrafted mosaic feature wall installation.",
  },
  {
    id: 3,
    title: "Outdoor Stone Surface",
    category: "Surfaces",
    year: "2024",
    img: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e",
    description: "Weather-resistant architectural surface solution.",
  },
];
export default function Achievements() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<AchievementItem | null>(null);

  const categories = ["All", "Tiles", "Mosaics", "Surfaces"];

  const filtered =
    filter === "All" ? items : items.filter((i) => i.category === filter);

  return (
    <>
    <div className="min-h-screen bg-white font-gramatika">
      {/* ===== CONTAINER ===== */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">

        {/* ===== HEADER ===== */}
        <h1 className="text-4xl mb-10 tracking-wide">Achievements</h1>

        {/* ===== FILTER TABS ===== */}
        <div className="flex gap-6 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 border rounded-full transition ${
                filter === cat
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ===== GRID ===== */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              whileHover={{ y: -6 }}
              className="cursor-pointer group"
              onClick={() => setActive(item)}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={item.img}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition duration-700"
                  unoptimized={true}
                />
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-500">{item.category} • {item.year}</p>
                <h3 className="text-lg">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ===== MODAL ===== */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center p-6 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-3xl w-full rounded-2xl overflow-hidden"
            >
              <div className="relative aspect-[16/9]">
                <Image src={active.img} alt="" fill sizes="(max-width: 768px) 100vw, 80vw" className="object-cover" unoptimized={true} />
              </div>

              <div className="p-6">
                <h2 className="text-2xl mb-2">{active.title}</h2>
                <p className="text-gray-500 mb-4">
                  {active.category} • {active.year}
                </p>
                <p className="text-gray-700">{active.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
      <Footer/>
    </>
  );
}
