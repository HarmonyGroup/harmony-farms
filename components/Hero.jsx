"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import HeroImage from "@/assets/asset-8.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const timeline = gsap.timeline();
      timeline.fromTo(
        heroRef.current,
        { scale: 1.1, opacity: 0 }, // Start with a smaller scale and opacity
        { scale: 1, opacity: 1, duration: 2, ease: "power3.out" } // Animate to full size and opacity
      );
    }
  }, []);

  return (
    <div className="relative min-h-[100vh] w-full flex flex-col items-center justify-center overflow-x-hidden px-4 lg:px-0">
      <Image src={HeroImage} layout="fill" objectFit="cover" />
      <div className="absolute inset-0 bg-black/65"></div>
      <div className="flex flex-col items-center justify-center" ref={heroRef}>
        <h1 className="relative text-white text-5xl text-center font-bold font-serifDisplay leading-normal hidden lg:block">
          Taking on the challenge <br /> of providing food for Nigerians
        </h1>
        <h1 className="relative text-white text-4xl text-center font-bold font-serifDisplay leading-normal hidden md:block lg:hidden">
          Taking on the <br /> challenge of providing food for Nigerians
        </h1>
        <h1 className="relative text-white text-3xl text-center font-extrabold font-serifDisplay leading-normal block md:hidden">
          Taking on the <br /> challenge of providing <br /> food for Nigerians
        </h1>
        <p className="relative w-full max-w-3xl text-white lg:text-xl text-center font-redHat font-semibold leading-7 lg:leading-9 mt-6">
          With a focus on sustainable farming practices and animal welfare, we
          pride ourselves on producing top-quality livestock for human
          consumption
        </p>
        <Link
          target="_blank" href={"https://wa.me/+2348182012345/"}
          className="relative flex items-center gap-1 lg:gap-2 bg-[#c9d935] lg:text-lg font-redHat font-bold rounded-full px-6 lg:px-8 py-3 lg:py-3.5 mt-10"
        >
          Buy Products
          {/* <IoIosArrowRoundForward size={32} className="mt-0.5" /> */}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
