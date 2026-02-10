'use client'

import { useState } from "react"
import { Footer } from "../ui/Footer"

export default function Register() {
  const [form, setForm] = useState({})

  const inputStyle =
    "w-full border-b border-gray-400 bg-transparent py-3 outline-none focus:border-black transition text-sm tracking-wide"

  return (
    <>
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-20">

      {/* ===== FORM CONTAINER ===== */}
      <div className="w-full max-w-3xl">

        {/* ===== TITLE ===== */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-light tracking-wide">
            Reserved area
          </h1>
          <h2 className="text-lg mt-4 font-light tracking-wide text-gray-600">
            Registration
          </h2>
        </div>

        <form>

          {/* ===== GRID ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-2">

            <input placeholder="Name*" className={inputStyle} />
            <input placeholder="Surname*" className={inputStyle} />

            <input placeholder="Company*" className={inputStyle} />
            <input placeholder="Phone*" className={inputStyle} />

            <input placeholder="Jobs*" className={`${inputStyle} md:col-span-2`} />

            <input placeholder="Address*" className={`${inputStyle} md:col-span-2`} />

            <input placeholder="City*" className={inputStyle} />
            <input placeholder="Zip code*" className={inputStyle} />

            <input placeholder="Country*" className={`${inputStyle} md:col-span-2`} />

            <input placeholder="Email*" type="email" className={`${inputStyle} md:col-span-2`} />

            <input placeholder="Password*" type="password" className={inputStyle} />
            <input placeholder="Confirm password*" type="password" className={inputStyle} />
          </div>

          {/* ===== CHECKBOXES ===== */}
          <div className="mt-10 space-y-3 text-sm text-gray-700">

            <label className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4" />
              I declare that I have read the
              <span className="underline cursor-pointer"> Privacy Policy</span>
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4" />
              I declare that I have read the
              <span className="underline cursor-pointer"> Terms & Conditions</span>
            </label>
          </div>

          {/* ===== BUTTON ===== */}
          <div className="mt-16 flex justify-center">
            <button
              type="submit"
              className="
                px-10 py-3
                border border-black
                rounded-full
                text-sm tracking-widest
                hover:bg-black hover:text-white
                transition
              "
            >
              REGISTER
            </button>
          </div>

        </form>
      </div>
    </div>
    <Footer />
    </>
  )
}
