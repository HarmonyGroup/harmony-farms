"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImLeaf } from "react-icons/im";
import Founder from "@/assets/founder.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
  const leftSideRef = useRef(null);
  const rightSideRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
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
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        rightSideRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          delay: 0.3,
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
    <div className="bg-white mx-auto w-full max-w-7xl px-4 py-20 lg:py-32 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="col-span-1" ref={leftSideRef}>
          <div className="flex items-center gap-3">
            <ImLeaf color="#438A2B" />
            <h4 className="font-redHat text-gray-500 text-xs md:text-sm font-bold">
              ABOUT US
            </h4>
          </div>
          <h1 className="font-serifDisplay text-2xl md:text-4xl font-medium mt-4 lg:mt-7">
            Our mission is to be the leading livestock farm in Nigeria
          </h1>
          <p className="font-redHat text-[#464e4e] text-sm md:text-[15px] leading-[27px] mt-4 lg:mt-7">
            Our commitment goes beyond just farming; it&apos;s about making a
            difference in the agricultural landscape by practicing sustainable
            and humane farming methods. With a deep respect for the land and the
            animals we raise, we are devoted to maintaining the highest
            standards of animal care, hygiene, and quality throughout our
            operations.
          </p>
        </div>
        <div className="col-span-1" ref={rightSideRef}>
          <div className="bg-[#438A2B]/10 border-l-4 border-[#438A2B] p-6 md:p-12">
            <p className="font-redHat text-[#464e4e] text-base md:text-lg font-bold leading-loose">
              &quot;At Harmony Farmhouse, we strive to deliver the best
              livestock products to ensure optimal nutrition for our customers.
              We also aim to support local communities by creating job
              opportunities and fostering partnerships with local
              businesses.&quot;
            </p>
            <div className="flex items-center gap-4 mt-10">
              <div className="relative h-14 w-14 rounded-full overflow-hidden">
                <Image src={Founder} layout="fill" objectFit="cover" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-base md:text-lg font-bold">
                  Olusegun Adebayo
                </p>
                <p className="text-[#438A2B] text-xs mdtext-sm font-semibold">
                  Founder, Harmony Group
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
