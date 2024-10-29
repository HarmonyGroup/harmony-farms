import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

const MobileNav = ({ mobileNav, setMobileNav }) => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.fromTo(
        backgroundRef.current,
        { x: "100%", opacity: 0 }, // Start off-screen to the right
        {
          x: "0%", // Slide in to its original position
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: backgroundRef.current,
            start: "top 80%", // Start the animation when the top of the image reaches 80% of the viewport height
            toggleActions: "play none none none", // Play on enter, do nothing on leave
          },
        }
      );
    }
  }, []);

  return (
    <div
      className="fixed inset-0 bg-[#c9d935] flex flex-col items-center justify-center gap-10 z-50 px-4 overflow-hidden"
      ref={backgroundRef}
    >
      <div className="absolute w-full flex items-center justify-between top-6 px-6">
        <Link href={"/"}>
          <Image
            src={Logo}
            height={70}
            width={70}
            className="scale-90 lg:scale-110"
          />
        </Link>
        <button onClick={() => setMobileNav(false)}>
          <IoClose size={25} />
        </button>
      </div>
      <Link href={"/"} className="text-[26px] font-bold">
        Home
      </Link>
      <Link href={"/about"} className="text-[26px] font-bold">
        About
      </Link>
      <Link target="_blank" href={"https://wa.me/+2348182012345/"} className="bg-white text-[26px] font-bold rounded-full px-7 py-4">
        Buy Products
      </Link>
    </div>
  );
};

export default MobileNav;