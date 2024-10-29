"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroImage from "@/assets/asset-8.jpg";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const leftSideRef = useRef(null);
  const rightSideRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Animation for image1
      gsap.fromTo(
        leftSideRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftSideRef.current,
            start: "top 80%", // Start the animation when the top of the image reaches 80% of the viewport height
            toggleActions: "play none none none", // Play on enter, do nothing on leave
          },
        }
      );

      // Animation for image2
      gsap.fromTo(
        rightSideRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightSideRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [leftSideRef, rightSideRef]);

  return (
    <div className="relative min-h-[100vh] w-full grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-0 overflow-x-hidden px-0 lg:px-0 pt-[10.6rem] lg:pt-[6.64rem]">
      <div
        className="col-span-1 lg:flex flex-col items-center justify-center"
        ref={leftSideRef}
      >
        <div className="relative w-full h-80 lg:h-[100%]">
          <Image src={HeroImage} layout="fill" objectFit="cover" />
        </div>
      </div>
      <div
        className="col-span-1 h-full -order-1 lg:order-1 px-4 lg:px-0"
        ref={rightSideRef}
      >
        <div className="h-full flex flex-col items-start lg:items-center justify-center lg:px-14">
          <h1 className="relative text-[#122423] text-3xl md:text-4xl lg:text-5xl font-semibold font-serifDisplay leading-tight md:leading-relaxed w-[90%] lg:w-[100%]">
            The mission & story behind Harmony Farmhouse
          </h1>
          <p className="relative w-full md:max-w-3xl text-[#464e4e] lg:text-xl font-redHat font-semibold leading-7 lg:leading-9 mt-6">
            With a focus on sustainable farming practices and animal welfare, we
            pride ourselves on producing top-quality livestock for human
            consumption
          </p>
          <div className="w-full flex items-start justify-start gap-3 lg:gap-4 mt-8">
            <Link
              target="_blank" href={"https://wa.me/+2348182012345/"}
              className="relative bg-[#c9d935] text-[15px] lg:text-xl font-redHat font-bold rounded-full px-6 lg:px-8 py-3 lg:py-5 ring-[1px] ring-white ring-inset"
            >
              Buy Products
            </Link>
            <Link
              target="_blank" href={"https://wa.me/+2348182012345/"}
              className="relative text-black text-[15px] lg:text-xl font-redHat font-bold border border-gray-300 rounded-full px-6 lg:px-8 py-3 lg:py-5"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
