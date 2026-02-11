"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import React from 'react'
import { Footer } from '../ui/Footer'

const aboutData = {
  hero: {
    title: "About SpaceOne",
    subtitle: "Crafting Excellence in Surface Design"
  },
  content: {
    mission: {
      title: "Our Mission",
      description: "At SpaceOne, we are dedicated to creating exceptional surface solutions that transform spaces and inspire creativity. Our commitment to innovation and quality drives us to push the boundaries of what's possible in surface design."
    },
    vision: {
      title: "Our Vision",
      description: "To be the global leader in premium surface solutions, setting new standards for design excellence, sustainability, and customer satisfaction in every project we undertake."
    },
    values: {
      title: "Our Values",
      items: [
        {
          title: "Innovation",
          description: "Continuously pushing the boundaries of surface technology and design"
        },
        {
          title: "Quality",
          description: "Uncompromising commitment to excellence in every product we create"
        },
        {
          title: "Sustainability",
          description: "Environmentally responsible manufacturing processes and materials"
        },
        {
          title: "Customer Focus",
          description: "Building lasting relationships through exceptional service and support"
        }
      ]
    }
  }
}

const AboutUs = () => {

const titleRef = useRef<HTMLHeadingElement>(null)
const subtitleRef = useRef<HTMLParagraphElement>(null)

    useEffect(()=>{
    // Reset animations when component mounts
    gsap.set(titleRef.current, { y: -100, opacity: 0 })
    gsap.set(subtitleRef.current, { y: 100, opacity: 0 })

    // Animate in
    gsap.to(titleRef.current,{
        y:0,
        opacity:1,
        duration:1.5,
        ease:"power2.out"
    })
    
    gsap.to(subtitleRef.current,{
        y:0,
        opacity:1,
        duration:1.5,
        ease:"power2.out",
        delay:0.3
    })


}, [])


  return (
    <>
      {/* Hero Section - Full Height and Width */}
      <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
        
        {/* Hero Content */}
        <div className="text-center text-white px-6">
          <h1 ref={titleRef} className=" text-5xl md:text-7xl font-gramatika font-light mb-4 tracking-wide">
            {aboutData.hero.title}
          </h1>
          <p ref={subtitleRef} className="text-xl md:text-2xl font-light tracking-wider">
            {aboutData.hero.subtitle}
          </p>
        </div>
      </section>

      {/* About Us Content Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          
          {/* Mission Section */}
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-gramatika font-light text-gray-900 mb-8">
              {aboutData.content.mission.title}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {aboutData.content.mission.description}
            </p>
          </div>

          {/* Vision Section */}
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-gramatika font-light text-gray-900 mb-8">
              {aboutData.content.vision.title}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {aboutData.content.vision.description}
            </p>
          </div>

          {/* Values Grid */}
          <div className="mb-20">
            <h2 className="text-4xl font-gramatika font-light text-gray-900 mb-12 text-center">
              {aboutData.content.values.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aboutData.content.values.items.map((value, index) => (
                <div key={index} className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-gramatika font-medium text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Content */}
          <div className="text-center py-12 border-t border-gray-200">
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              With years of expertise in surface design and manufacturing, SpaceOne has established itself as a trusted partner for architects, designers, and developers who demand excellence. Our state-of-the-art facilities and dedicated team ensure that every product meets the highest standards of quality and aesthetics.
            </p>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-sm text-gray-600">Global Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default AboutUs