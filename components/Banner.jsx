"use client"

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import BannerImage from "@/assets/home-banner.jpg";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const backgroundRef = useRef(null);
  const leftSideRef = useRef(null);
  const rightSideRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.fromTo(
        backgroundRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: backgroundRef.current,
            start: "top 80%", // Start the animation when the top of the image reaches 80% of the viewport height
            toggleActions: "play none none none", // Play on enter, do nothing on leave
          },
        }
      );

      gsap.fromTo(
        leftSideRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftSideRef.current,
            start: "top 80%", // Start the animation when the top of the image reaches 80% of the viewport height
            toggleActions: "play none none none", // Play on enter, do nothing on leave
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
            start: "top 80%", // Start the animation when the top of the image reaches 80% of the viewport height
            toggleActions: "play none none none", // Play on enter, do nothing on leave
          },
        }
      );
    }
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden">
      <Image
        src={BannerImage}
        layout="fill"
        objectFit="cover"
        ref={backgroundRef}
      />
      <div class="absolute inset-0 bg-black/75"></div>
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto w-full max-w-7xl px-4 py-16 md:py-32">
        <h1
          className="col-span-1 font-redHat text-white text-2xl sm:text-4xl lg:text-[40px] text-center lg:text-left font-bold w-full max-w-[100%] lg:max-w-[75%] leading-tight"
          ref={leftSideRef}
        >
          Cultivating healthy food for you and your family.
        </h1>
        <div
          className="flex items-center justify-center lg:justify-end gap-3.5 lg:gap-7 col-span-1"
          ref={rightSideRef}
        >
          <Link
            target="_blank" href={"https://wa.me/+2348182012345/"}
            className="relative bg-[#c9d935] lg:text-xl font-redHat font-bold rounded-full px-6 lg:px-8 py-3 lg:py-3 hidden md:block"
          >
            Learn More
          </Link>
          <Link
            target="_blank" href={"https://wa.me/+2348182012345/"}
            className="relative text-white lg:text-xl font-redHat font-bold border border-white rounded-full px-6 lg:px-8 py-3 lg:py-3"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
