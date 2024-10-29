"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImLeaf } from "react-icons/im";
import { TbStarsFilled } from "react-icons/tb";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { MdRecycling } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const Quality = () => {

  const headerRef = useRef(null);
  const ethicalRef = useRef(null);
  const healthMeasuresRef = useRef(null);
  const nutritionRef = useRef(null);
  const practicesRef = useRef(null);

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
        ethicalRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          delay: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ethicalRef.current,
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
        nutritionRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          delay: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: nutritionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        practicesRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          delay: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: practicesRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [headerRef, ethicalRef, healthMeasuresRef, nutritionRef, practicesRef]);

  return (
    <div className="bg-gray-50">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 lg:py-32 overflow-hidden">
        <div ref={headerRef}>
          <div className="flex items-center justify-center gap-3">
            <ImLeaf color="#438A2B" />
            <h4 className="font-redHat text-gray-500 text-xs md:text-sm font-bold">
              BEST QUALITY
            </h4>
          </div>
          <h1 className="font-serifDisplay text-2xl md:text-4xl text-center font-medium mt-4 lg:mt-7">
            Quality You Can Trust
          </h1>
          <p className="mx-auto w-full max-w-xl font-redHat text-[#464e4e] text-sm md:text-[15px] text-center leading-[27px] mt-4 lg:mt-7">
            From our livestock rearing methods to the final delivery of our
            products, we are committed to upholding the highest standards to
            provide you with fresh, nutritious, and premium-grade meat.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
          <div className="col-span-1" ref={ethicalRef}>
            <div className="flex flex-col items-center">
              <div className="bg-[#438A2B] rounded-full p-3">
                <MdRecycling size={50} color="white" />
              </div>
              <h4 className="text-xl font-redHat font-bold mt-8">
                Ethical Practices
              </h4>
              <p className="font-redHat text-[#464e4e] text-sm md:text-[15px] text-center font-normal leading-[27px] mt-3">
                We prioritize the well-being of our livestock by providing
                spacious, clean, and natural environments where our animals can
                thrive.
              </p>
            </div>
          </div>
          <div className="col-span-1" ref={healthMeasuresRef}>
            <div className="flex flex-col items-center">
              <div className="bg-[#438A2B] rounded-full p-3">
                <MdEnergySavingsLeaf size={50} color="white" />
              </div>
              <h4 className="text-xl font-redHat font-bold mt-8">
                Health Measures
              </h4>
              <p className="font-redHat text-[#464e4e] text-sm md:text-[15px] text-center font-normal leading-[27px] mt-3">
                We adhere to strict hygiene protocols and comprehensive
                veterinary care to ensure that all our livestock meet the best
                health and safety standards.
              </p>
            </div>
          </div>
          <div className="col-span-1" ref={nutritionRef}>
            <div className="flex flex-col items-center">
              <div className="bg-[#438A2B] rounded-full p-3">
                <MdRecycling size={50} color="white" />
              </div>
              <h4 className="text-xl font-redHat font-bold mt-8">
                Quality Nutrition
              </h4>
              <p className="font-redHat text-[#464e4e] text-sm md:text-[15px] text-center font-normal leading-[27px] mt-3">
                We use carefully selected, nutrient-rich feed to promote healthy
                growth, reproduction and natural development in our livestock.
              </p>
            </div>
          </div>
          <div className="col-span-1" ref={practicesRef}>
            <div className="flex flex-col items-center">
              <div className="bg-[#438A2B] rounded-full p-3">
                <MdRecycling size={50} color="white" />
              </div>
              <h4 className="text-xl font-redHat font-bold mt-8">
                Sustainable Practices
              </h4>
              <p className="font-redHat text-[#464e4e] text-sm md:text-[15px] text-center font-normal leading-[27px] mt-3">
                We integrate sustainable farming practices to protect the
                environment and preserve the land and ecosystem for future
                generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
