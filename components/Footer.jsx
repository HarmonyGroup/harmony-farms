"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import Image1 from "@/assets/footer-image.jpg";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.fromTo(
        footerRef.current,
        { scale: 1.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 30%", // Start the animation when the top of the image reaches 80% of the viewport height
            toggleActions: "play none none none", // Play on enter, do nothing on leave
          },
        }
      );
    }
  }, [footerRef]);

  return (
    <div className="relative" ref={footerRef}>
      <div className="mx-auto w-full max-w-7xl px-4 pt-16 lg:pt-24 pb-16 lg:pb-24">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-24">
          <div className="">
            <Image
              src={Logo}
              height={80}
              width={80}
              className="scale-75 lg:scale-100"
            />
            <p className="font-redHat text-[#464e4e] text-sm md:text-base mt-6 md:mt-10">
              By choosing Harmony farmhouse, you&apos;re not just buying
              meat—you&apos;re supporting ethical farming and contributing to a
              healthier lifestyle.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="col-span-1">
              <h1 className="font-serifDisplay text-xl">QUICK LINKS</h1>
              <hr className="my-7" />
              <div className="flex flex-col gap-4 text-[#464e4e] text-sm md:text-base font-redHat">
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                {/* <Link href={"/"}>Products</Link> */}
                <Link target="_blank" href={"https://wa.me/+2348182012345/"}>Contact</Link>
              </div>
            </div>
            <div className="col-span-1">
              <h1 className="font-serifDisplay text-xl">SOCIALS</h1>
              <hr className="my-7" />
              <div className="flex flex-col gap-4 text-[#464e4e] text-sm md:text-base font-redHat">
                <Link target="_blank" href={"https://www.instagram.com/harmonyfarmhouse/"}>Instagram</Link>
                <Link target="_blank" href={"https://www.facebook.com/profile.php?id=61559193565711&mibextid=LQQJ4d"}>Facebook</Link>
                <Link target="_blank" href={"https://wa.me/+2348182012345/"}>WhatsApp</Link>
                {/* <Link href={"/"}>TikTok</Link> */}
              </div>
            </div>
            <div className="col-span-1">
              <h1 className="font-serifDisplay text-xl">
                JOIN OUR MAILING LIST
              </h1>
              <hr className="my-7" />
              <p className="text-[#464e4e] text-sm md:text-base font-redHat">
                Join our weekly newsletter to discover about the special process
                behind Farm&apos;s products.
              </p>
              <form>
                <input
                  type="text"
                  className="bg-gray-100 w-full rounded-full px-5 py-3 mt-7 outline-none placeholder:text-sm border border-white focus:border focus:border-[#c9d935]"
                  placeholder="Enter email address"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Image src={Image1} className=" bottom-0" />
    </div>
  );
};

export default Footer;
