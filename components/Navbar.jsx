"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import MobileNav from "./MobileNav";

const Navbar = ({ classNames }) => {
  const [mobileNav, setMobileNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <>
      <div
        ref={navbarRef}
        className={`w-full fixed z-10 ${classNames} ${
          isScrolled ? "glassmorphism" : "bg-transparent"
        }`}
      >
        <div className="mx-auto w-full max-w-7xl flex items-center justify-between px-4 py-2 lg:py-4">
          <Link href={"/"}>
            <Image
              src={Logo}
              height={80}
              width={80}
              className="scale-90 lg:scale-110"
            />
          </Link>
          {/* <div className="lg:flex items-center gap-14 font-redHat hidden">
            <Link href={"/"} className="text-white font-bold">
              Home
            </Link>
            <Link href={"/about"} className="text-white font-bold">
              About
            </Link>
            <Link href={"/"} className="text-white font-bold">
              Products
            </Link>
          </div> */}
          <div className="lg:flex items-center gap-14 font-redHat hidden">
            <Link href={"/"} className="text-white font-bold">
              Home
            </Link>
            <Link href={"/about"} className="text-white font-bold">
              About
            </Link>
            <Link
              target="_blank" href={"https://wa.me/+2348182012345/"}
              className="relative bg-[#c9d935] font-redHat font-bold rounded-full px-6 lg:px-8 py-3 lg:py-3 hidden lg:block"
            >
              Buy Products
              {/* <IoIosArrowRoundForward size={28} className="mt-0.5" /> */}
            </Link>
          </div>
          <button
            onClick={() => setMobileNav(true)}
            className="block lg:hidden"
          >
            <IoMenu size={28} color="white" />
          </button>
        </div>
      </div>
      {mobileNav && (
        <MobileNav mobileNav={mobileNav} setMobileNav={setMobileNav} />
      )}
    </>
  );
};

export default Navbar;
