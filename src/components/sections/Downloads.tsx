'use client'

import Image from "next/image"
import { useState } from "react"
import img_1 from "../../../public//images/product/Classic/camelcoat-03.jpg"
import img_2 from "../../../public//images/product/Classic/dove-01.jpg"
import img_3 from "../../../public//images/product/Classic/verona-02.jpg"
import { Footer } from "../ui/Footer"
type DownloadItem = {
  title: string
  image: string
  pdf: string
  category: string
}

const downloads: DownloadItem[] = [
  {
    title: "Iridium Brochure",
    image: img_1.src,
    pdf: "https://decastelli.com/wp-content/uploads/2025/04/DC-IridiumCollection.1.4_DEF.pdf",
    category: "Cataloghi",
  },
  {
    title: "Metal Affinities Catalogue",
    image: img_2.src,
    pdf: "https://decastelli.com/wp-content/uploads/2024/08/De-Castelli-Catalogue-Metal-Affinities-2024.pdf",
    category: "Cataloghi",
  },
  {
    title: "Scenari 01",
    image: img_3.src,
    pdf: "https://decastelli.com/wp-content/uploads/2024/08/De-Castelli_Metal-affinities_Scenari-1.pdf",
    category: "Cataloghi",
  },
]

export default function Downloads() {
  const [active, setActive] = useState("Cataloghi")

  const categories = [
    "Cataloghi",
    "Quaderni",
    "Dispense",
    "Schede Tecniche",
    "2D / 3D",
    "Assembly instructions",
  ]

  const filtered = downloads.filter(d => d.category === active)

  return (
    <>
    <div className="min-h-screen bg-white px-8 lg:px-16 py-25">

      {/* Title */}
      <h1 className="text-4xl text-center font-light mb-16 tracking-wide">
        Downloads
      </h1>

      <div className="flex gap-16">

        {/* ===== Sidebar ===== */}
        <aside className="w-56 shrink-0 border-t pt-6">
          <ul className="space-y-4 text-gray-700">
            {categories.map(cat => (
              <li
                key={cat}
                onClick={() => setActive(cat)}
                className={`cursor-pointer transition hover:text-blue-600 ${
                  active === cat ? "text-blue-600 font-medium" : ""
                }`}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>

        {/* ===== Grid ===== */}
        <section className="flex-1 border-t pt-6">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

            {filtered.map(item => (
              <a
                key={item.title}
                href={item.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
              >
                {/* Cover */}
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 flex items-center justify-center transition">
                    <span className="text-white opacity-0 group-hover:opacity-100 text-sm tracking-wide">
                      Open PDF ↗
                    </span>
                  </div>
                </div>

                {/* Title */}
                <p className="mt-4 text-sm tracking-wide">
                  {item.title}
                </p>
              </a>
            ))}

          </div>
        </section>
      </div>
    </div>
    <Footer />
    </>
  )
}
