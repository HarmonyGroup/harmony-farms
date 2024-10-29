"use client";

import Image from "next/image";
import { ImLeaf } from "react-icons/im";
import Image1 from "@/assets/asset-3.jpg";
import Image2 from "@/assets/asset-6.jpg";
import { BsFillPatchCheckFill } from "react-icons/bs";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%", // Start the animation when the top of the image reaches 80% of the viewport height
            toggleActions: "play none none none", // Play on enter, do nothing on leave
          },
        }
      );

      gsap.fromTo(
        textRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [imageRef, textRef]);

  return (
    <div className="bg-[#F8F9F9]">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="col-span-1" ref={textRef}>
            <div className="flex items-center gap-3">
              <ImLeaf color="#438A2B" />
              <h4 className="font-redHat text-gray-500 text-xs md:text-sm font-bold">
                OUR PRODUCTS
              </h4>
            </div>
            <h1 className="font-serifDisplay text-2xl md:text-3xl max-w-lg mt-5">
              High Quality Organic Farming
            </h1>
            <p className="font-redHat text-gray-500 text-sm md:text-lg mt-5 w-full">
              Our animals are nurtured in a natural, chemical-free environment,
              ensuring that the meat we provide is not only nutritious but also
              free from harmful additives. Our commitment to organic farming
              means you can trust that every product from our farm is wholesome,
              fresh, and responsibly sourced.
            </p>
            <div className="w-full max-w-[100%] flex gap-3 mt-8 flex-wrap">
              <div className="bg-[#438A2B]/10 text-[#438A2B] text-sm lg:text-[16px] md:font-bold border border-[#438A2B]/60 rounded-full px-4 md:px-6 py-1 md:py-2">
                Cows
              </div>
              <div className="bg-[#438A2B]/10 text-[#438A2B] text-sm lg:text-[16px] md:font-bold border border-[#438A2B]/60 rounded-full px-4 md:px-6 py-1 md:py-2">
                Goats
              </div>
              <div className="bg-[#438A2B]/10 text-[#438A2B] text-sm lg:text-[16px] md:font-bold border border-[#438A2B]/60 rounded-full px-4 md:px-6 py-1 md:py-2">
                Rams
              </div>
              <div className="bg-[#438A2B]/10 text-[#438A2B] text-sm lg:text-[16px] md:font-bold border border-[#438A2B]/60 rounded-full px-4 md:px-6 py-1 md:py-2">
                Chicken
              </div>
              <div className="bg-[#438A2B]/10 text-[#438A2B] text-sm lg:text-[16px] md:font-bold border border-[#438A2B]/60 rounded-full px-4 md:px-6 py-1 md:py-2">
                Turkey
              </div>
              <div className="bg-[#438A2B]/10 text-[#438A2B] text-sm lg:text-[16px] md:font-bold border border-[#438A2B]/60 rounded-full px-4 md:px-6 py-1 md:py-2">
                Eggs
              </div>
            </div>
          </div>
          <div className="col-span-1 hidden lg:block">
            <div className="flex flex-col items-center justify-center lg:items-end lg:justify-end gap-10 relative">
              {/* <Link
                href={"/"}
                className="relative flex items-center gap-2 bg-[#c9d935] text-xl font-redHat font-bold rounded-full px-8 py-4"
              >
                Buy Products
                <IoIosArrowRoundForward size={32} className="mt-0.5" />
              </Link> */}
              <Image
                src={Image1}
                height={400}
                width={400}
                className=""
                ref={imageRef}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
