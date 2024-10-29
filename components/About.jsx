"use client"

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImLeaf } from "react-icons/im";
import { BsFillPatchCheckFill } from "react-icons/bs";
import Image1 from "@/assets/asset-1.jpg";
import Image2 from "@/assets/asset-2.jpg";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Animation for image1
      gsap.fromTo(
        image1Ref.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: image1Ref.current,
            start: "top 80%", // Start the animation when the top of the image reaches 80% of the viewport height
            toggleActions: "play none none none", // Play on enter, do nothing on leave
          },
        }
      );

      // Animation for image2
      gsap.fromTo(
        image2Ref.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: image2Ref.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animation for text
      gsap.fromTo(
        textRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [image1Ref, image2Ref, textRef]);

  return (
    <div className="bg-white mx-auto w-full max-w-7xl px-4 py-20 lg:py-32 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="col-span-1 hidden lg:block">
          <Image src={Image2} height={400} width={400} ref={image1Ref} />
          <Image src={Image1} height={280} width={280} className="-mt-44 ml-52" ref={image2Ref} />
        </div>
        <div className="col-span-1 -order-1 lg:order-1" ref={textRef}>
          <div className="flex items-center gap-3">
            <ImLeaf color="#438A2B" />
            <h4 className="font-redHat text-gray-500 text-xs md:text-sm font-bold">ABOUT US</h4>
          </div>
          <h1 className="font-serifDisplay text-2xl md:text-3xl mt-5">
            Committed to Sustainable <br className="blcok md:hidden" /> Livestock Farming and Food <br className="block lg:hidden" /> Security in
            Nigeria
          </h1>
          <p className="font-redHat text-gray-500 text-sm md:text-lg mt-5">
            Founded on the principles of sustainability, animal welfare, and
            community empowerment, we take pride in our modern farming practices
            that prioritize both the health of our animals and the environment.
            Our farm is equipped with the latest technology to maintain clean,
            safe, and humane living conditions for our livestock, all while
            adhering to strict food safety standards.
          </p>
          <div className="flex flex-col gap-5 mt-8">
            <div className="flex items-center gap-3">
              <BsFillPatchCheckFill size={18} color="#438A2B" />
              <p className="font-redHat text-gray-500 text-sm md:text-lg">
                100% Organic Farming </p>
            </div>
            <div className="flex items-center gap-3">
              <BsFillPatchCheckFill size={18} color="#438A2B" />
              <p className="font-redHat text-gray-500 text-sm md:text-lg">
                Cruelty Free
              </p>
            </div>
            <div className="flex items-center gap-3">
              <BsFillPatchCheckFill size={18} color="#438A2B" />
              <p className="font-redHat text-gray-500 text-sm md:text-lg">
                Support Local Community
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;