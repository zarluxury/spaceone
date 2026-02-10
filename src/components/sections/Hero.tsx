"use client";

import { useEffect, useRef, useState } from "react";
import { useLayoutEffect } from "react";

import Image from "next/image";
import gsap from "@/lib/gsap";

import hero1 from "../../../public/images/row-one/1.jpg";
import hero3 from "../../../public/images/row-one/3.jpg";
import "@/app/globals.css";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const col1 = useRef<HTMLDivElement>(null);
  const col2 = useRef<HTMLDivElement>(null);
  const col3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const columns = isMobile
      ? [
          { ref: col1, speed: 1.2 },
          { ref: col2, speed: 1.5 },
        ]
      : [
          { ref: col1, speed: 2 },
          { ref: col2, speed: 3 },
          { ref: col3, speed: 1.5 },
        ];

    columns.forEach(({ ref, speed }) => {
      if (!ref.current) return;

      const el = ref.current;

      let isUserScrolling = false;
      let timeout: any;

      /* wheel */
      const onWheel = (e: WheelEvent) => {
        e.preventDefault(); // 🔥 important
        isUserScrolling = true;

        clearTimeout(timeout);

        el.scrollTop += e.deltaY * 0.5;

        timeout = setTimeout(() => {
          isUserScrolling = false;
        }, 300);
      };

      el.addEventListener("wheel", onWheel, { passive: false });

      /* auto scroll */
      const half = el.scrollHeight / 2;

      const auto = () => {
        if (isUserScrolling) return;

        let pos = el.scrollTop + speed;

        if (pos >= half) pos = 0;

        el.scrollTop = pos;
      };

      gsap.ticker.add(auto);

      return () => {
        el.removeEventListener("wheel", onWheel);
        gsap.ticker.remove(auto);
      };
    });
  });

  return () => ctx.revert(); // 🔥 cleans everything perfectly
}, [isMobile]);


  const items = [
    { type: "image", src: hero1 },
    { type: "video", src: "/images/row-one/2.mp4" },
    { type: "image", src: hero3 },
  ];

  const loopItems = [...items, ...items];

  const renderItems = () =>
    loopItems.map((item, i) => (
      <div key={i} className="relative h-screen shrink-0">
        {item.type === "image" ? (
          <Image
            src={item.src as any}
            alt="Product showcase"
            fill
            priority={i === 0}
            sizes="33vw"
            className="object-cover"
          />
        ) : (
          <video
            src={item.src as string}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        )}
      </div>
    ));

  return (
    <section className="h-screen w-full bg-black flex gap-3 p-3 overflow-hidden">
      {(isMobile ? [col1, col2] : [col1, col2, col3]).map((ref, i) => (
        <div
          key={i}
          ref={ref}
          className={`
            flex flex-col overflow-y-scroll scrollbar-hide will-change-scroll
            ${isMobile ? 'w-1/2' : 'w-1/3'}
            ${!isMobile && i === 1 ? 'scale-105 z-10 shadow-2xl ' : ''}
          `}
        >
          {renderItems()}
        </div>
      ))}
    </section>
  );
}
