"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImLeaf } from "react-icons/im";
import FirstImage from "@/assets/asset-6.jpg";
import SecondImage from "@/assets/asset-10.jpg";
import ThirdImage from "@/assets/asset-11.jpg";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const headerRef = useRef(null);
  const nutritionRef = useRef(null);
  const healthMeasuresRef = useRef(null);
  const qualityControlRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.fromTo(
        headerRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        nutritionRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          delay: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: nutritionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        healthMeasuresRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          delay: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: healthMeasuresRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        qualityControlRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          delay: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: qualityControlRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [headerRef, nutritionRef, healthMeasuresRef, qualityControlRef]);

  return (
    <div className="bg-white mx-auto w-full max-w-7xl px-4 py-20 lg:py-32 overflow-hidden">
      <div ref={headerRef}>
        <div className="flex items-center gap-3">
          <ImLeaf color="#438A2B" />
          <h4 className="font-redHat text-gray-500 text-xs md:text-sm font-bold">
            OUR PROCESS
          </h4>
        </div>
        <h1 className="font-serifDisplay text-2xl md:text-4xl font-medium mt-4 lg:mt-7">
          From FarmHouse to Kitchen
        </h1>
        <p className="lg:max-w-[50%] font-redHat text-[#464e4e] text-[15px] leading-[27px] mt-4 lg:mt-7">
          From raising our livestock with care and ethical practices to
          maintaining rigorous health standards and sustainable methods, we
          ensure that only the best reaches your table.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-14 mt-16">
        <div className="col-span-1" ref={nutritionRef}>
          <div className="relative w-full h-80">
            <Image src={FirstImage} layout="fill" objectFit="cover" />
          </div>
          <div className="flex flex-col items-center border-gray-300 border-b-2 border-dashed pb-8 md:pb-16 mt-10">
            <div className="h-14 w-14 flex items-center justify-center rounded-full bg-[#438A2B]/10 text-[#438A2B] text-2xl font-bold">
              1.
            </div>
            <h4 className="text-xl text-center font-redHat font-bold mt-6">
              Responsible Rearing <br /> and Superior Nutrition
            </h4>
            <p className="font-redHat text-[#464e4e] text-[15px] text-center font-normal leading-[27px] mt-3">
              We raise our livestock in a clean, natural setting and provide
              them with high-quality, nutrient-rich feed to ensure optimal
              health and premium meat production.
            </p>
          </div>
        </div>
        <div className="col-span-1" ref={healthMeasuresRef}>
          <div className="relative w-full h-80">
            <Image src={SecondImage} layout="fill" objectFit="cover" />
          </div>
          <div className="flex flex-col items-center border-gray-300 border-b-2 border-dashed pb-8 md:pb-16 mt-10">
            <div className="h-14 w-14 flex items-center justify-center rounded-full bg-[#438A2B]/10 text-[#438A2B] text-2xl font-bold">
              2.
            </div>
            <h4 className="text-xl text-center font-redHat font-bold mt-6">
              Comprehensive Health <br /> and Safety Measures
            </h4>
            <p className="font-redHat text-[#464e4e] text-[15px] text-center font-normal leading-[27px] mt-3">
              Our dedicated team conducts regular veterinary check-ups and
              follows strict hygiene protocols throughout all facilities to
              guarantee the safety of our products.
            </p>
          </div>
        </div>
        <div className="col-span-1" ref={qualityControlRef}>
          <div className="relative w-full h-80">
            <Image src={ThirdImage} layout="fill" objectFit="cover" />
          </div>
          <div className="flex flex-col items-center border-gray-300 border-b-2 border-dashed pb-8 md:pb-16 mt-10">
            <div className="h-14 w-14 flex items-center justify-center rounded-full bg-[#438A2B]/10 text-[#438A2B] text-2xl font-bold">
              3.
            </div>
            <h4 className="text-xl text-center font-redHat font-bold mt-6">
              Sustainable Farming <br /> and Quality Control
            </h4>
            <p className="font-redHat text-[#464e4e] text-sm md:text-[15px] text-center font-normal leading-[27px] mt-3">
              We employ eco-conscious waste management practices and use
              transparent, traceable packaging methods to bring you fresh,
              high-quality meat with full confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
