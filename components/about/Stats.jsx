"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiCheckBadge } from "react-icons/hi2";
import { PiBowlFoodFill } from "react-icons/pi";
import { TbStarsFilled } from "react-icons/tb";
import { BsFillPeopleFill } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const experienceYearsRef = useRef(null);
  const teamMembersRef = useRef(null);
  const productsRef = useRef(null);
  const clientsRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.fromTo(
        experienceYearsRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: experienceYearsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        teamMembersRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          delay: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: teamMembersRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        productsRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          delay: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: productsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        clientsRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          delay: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: clientsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [experienceYearsRef, teamMembersRef, productsRef, clientsRef]);

  return (
    <div className="bg-[#438A2B]">
      <div className="mx-auto w-full max-w-6xl grid grid-cols-2 lg:grid-cols-4 px-4 gap-14 py-16">
        <div className="col-span-1" ref={experienceYearsRef}>
          <div className="flex flex-col items-center">
            <div className="bg-black/10 rounded-full p-3">
              <TbStarsFilled size={50} color="white" />
            </div>
            <h2 className="text-white text-4xl md:text-5xl font-serifDisplay font-bold mt-6">
              4+
            </h2>
            <p className="text-white text-sm md:text-base text-center font-redHat font-bold mt-2">
              YEARS OF EXPERIENCE
            </p>
          </div>
        </div>
        <div className="col-span-1" ref={teamMembersRef}>
          <div className="flex flex-col items-center">
            <div className="bg-black/10 rounded-full p-3">
              <BsFillPeopleFill size={50} color="white" />
            </div>
            <h2 className="text-white text-4xl md:text-5xl font-serifDisplay font-extrabold mt-6">
              25+
            </h2>
            <p className="text-white text-sm md:text-base text-center font-redHat font-bold mt-2">
              TEAM MEMBERS
            </p>
          </div>
        </div>
        <div className="col-span-1" ref={productsRef}>
          <div className="flex flex-col items-center">
            <div className="bg-black/10 rounded-full p-3">
              <PiBowlFoodFill size={50} color="white" />
            </div>
            <h2 className="text-white text-4xl md:text-5xl font-serifDisplay font-extrabold mt-6">
              10+
            </h2>
            <p className="text-white text-sm md:text-base text-center font-redHat font-bold mt-2">
              PRODUCTS
            </p>
          </div>
        </div>
        <div className="col-span-1" ref={clientsRef}>
          <div className="flex flex-col items-center">
            <div className="bg-black/10 rounded-full p-3">
              <HiCheckBadge size={50} color="white" />
            </div>
            <h2 className="text-white text-4xl md:text-5xl font-serifDisplay font-extrabold mt-6">
              2,500+
            </h2>
            <p className="text-white text-sm md:text-base text-center font-redHat font-bold mt-2">
              SATISFIED CLIENTS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
