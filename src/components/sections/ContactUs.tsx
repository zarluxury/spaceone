"use client";
import React, { useState } from "react";
import { Footer } from "../ui/Footer";

const contactData = {
  title: "Headquarters",
  address: "120/A, Bombay Talkies compound, Dadiseth Lane,\nOff S.V. Road, Opp. Malad Sahakari Bank,\nMalad West, Mumbai 400064. India",
  phone: "+91 9653318434",
  email: "info@spaceonesurfaces.com",
  openingHours: {
    title: "Opening hours",
    days: "Monday – Saturday",
    hours: "10am – 8pm"
  }
};

const ContactUs = () => {
  const [form, setForm] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      {/* Main Container - Takes full height */}
      <div className="flex-grow flex flex-col">
        {/* Details Section - 75% of viewport height */}
        <section className="min-h-[75vh] flex items-center justify-center px-6 py-20">
          <div className="max-w-3xl w-full">
            
            {/* Header Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-light tracking-tight text-neutral-900 mb-4">
                Get in Touch
              </h1>
              <div className="h-px w-12 bg-neutral-300 mx-auto"></div>
            </div>

            {/* Contact Card */}
            <div className="bg-white border border-neutral-100 shadow-sm rounded-2xl p-8 md:p-16 text-center">
              <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-medium mb-8">
                {contactData.title}
              </h2>

              <div className="space-y-10">
                {/* Address */}
                <p className="text-lg md:text-xl text-neutral-800 leading-relaxed font-light whitespace-pre-line">
                  {contactData.address}
                </p>

                {/* Contact Details */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 pt-4">
                  <div className="group">
                    <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">Phone</p>
                    <a href={`tel:${contactData.phone}`} className="text-neutral-900 hover:text-neutral-500 transition-colors">
                      {contactData.phone}
                    </a>
                  </div>
                  <div className="group">
                    <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">Email</p>
                    <a href={`mailto:${contactData.email}`} className="text-neutral-900 hover:text-neutral-500 transition-colors">
                      {contactData.email}
                    </a>
                  </div>
                </div>

                {/* Divider */}
                <div className="pt-10 border-t border-neutral-50">
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-medium mb-4">
                    {contactData.openingHours.title}
                  </p>
                  <div className="text-neutral-700 font-light">
                    <p>{contactData.openingHours.days}</p>
                    <p className="text-neutral-500 mt-1">{contactData.openingHours.hours}</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* Contact Form Section - Takes remaining space */}
        <section className="flex-grow bg-white px-6 md:px-16 py-10 font-light flex items-center">
          <div className="w-full max-w-6xl mx-auto">
            {/* Heading */}
            <h1 className="text-3xl mb-3 tracking-wide">
              Fill out the form for more information
            </h1>

            <p className="text-sm text-gray-600 mb-12 max-w-2xl">
              Those interested in having further information on our solutions are
              invited to fill out the request form to be contacted directly by our office.
            </p>

            {/* Form */}
            <form className="space-y-10">
              {/* ===== 2 column grid ===== */}
              <div className="grid md:grid-cols-2 gap-x-16 gap-y-3">
                {[
                  "Name",
                  "Surname",
                  "Company",
                  "Phone",
                  "Jobs",
                  "",
                  "Address",
                  "",
                  "City",
                  "Zip code",
                  "Country",
                  "Email",
                ].map((label, i) =>
                  label ? (
                    <Input key={i} label={label} onChange={handleChange} />
                  ) : (
                    <div key={i}></div>
                  )
                )}
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message*"
                  rows={5}
                  onChange={handleChange}
                  className="w-full border border-black p-4 outline-none resize-none text-sm"
                />
              </div>

              {/* Attachment */}
              <div className="flex items-center justify-between border-b border-black pb-3">
                <label className="text-sm text-gray-500">
                  Attachment (doc, pdf, png, jpg) Max 5MB
                </label>

                <label className="cursor-pointer border border-black rounded-full w-8 h-8 flex items-center justify-center text-lg">
                  +
                  <input type="file" className="hidden" />
                </label>
              </div>

              {/* Checkboxes */}
              <div className="space-y-4 text-sm text-gray-600">
                <Checkbox text="I declare that I have read the Privacy Policy." />
                <Checkbox text="I declare that I give my consent for newsletter subscription and for receiving marketing communications in accordance with the Privacy Policy." />
                <Checkbox text="I declare that I give my consent for profiling activities, analysis of my preferences, and for the provision of a personalized service in accordance with the Privacy Policy." />
              </div>

              {/* Submit */}
              <div className="flex justify-center pt-8">
                <button
                  type="submit"
                  className="px-10 py-3 border border-black rounded-full text-sm hover:bg-black hover:text-white transition-all"
                >
                  SEND REQUEST
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

/* ---------- Small reusable components ---------- */

interface InputProps {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function Input({ label, onChange }: InputProps) {
  return (
    <div className="flex flex-col">
      <input
        name={label.toLowerCase()}
        placeholder={`${label}*`}
        onChange={onChange}
        className="border-b border-black outline-none py-2 text-sm bg-transparent"
      />
    </div>
  );
}

interface CheckboxProps {
  text: string;
}

function Checkbox({ text }: CheckboxProps) {
  return (
    <label className="flex items-start gap-3 cursor-pointer">
      <input type="checkbox" className="mt-1" />
      <span>{text}</span>
    </label>
  );
}

export default ContactUs;