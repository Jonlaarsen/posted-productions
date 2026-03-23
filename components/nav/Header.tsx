"use client";

import { InstagramIcon, LinkedinIcon, MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "About", path: "/about" },
  { name: "Our team", path: "/team" },
  { name: "Services", path: "/services" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleOnclickMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <Link href="/">
        <img
          src="/postedlogo.png"
          className=" z-50 absolute invert top-5 left-5 h-25 w-fit "
          alt="posted productions logo"
        />
      </Link>
      <div className="absolute top-8 right-20 flex items-center justify-center gap-4 z-55 ">
        <Link href="/">
          {" "}
          <LinkedinIcon className="h-8 w-8 text-white hover:posted-text ease-in-out duration-300" />
        </Link>
        <Link href="/">
          <InstagramIcon className="h-8 w-8 text-white hover:posted-text ease-in-out duration-300" />
        </Link>
      </div>
      <button
        className="absolute top-5 right-5 z-100  cursor-pointer"
        onClick={handleOnclickMenu}
      >
        {menuOpen ? (
          <X className="h-12  w-auto text-white hover:posted-text ease-in-out duration-300" />
        ) : (
          <MenuIcon className="h-12 w-12  text-white hover:posted-text ease-in-out duration-300" />
        )}
      </button>
      <div
        className={`fixed inset-0 z-99 bg-black h-screen overflow-hidden w-screen size-full constrast-125 bg-[url('/MENU2.png')] bg-center bg-cover backdrop-blur-lg  transition-opacity  duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="size-full text-white flex flex-col items-center justify-center gap-4">
          <Link href="/">
            <img
              src="/posted3.png"
              className="h-30 w-auto invert mb-10"
              alt="posted productions logo"
              onClick={() => setMenuOpen(false)}
            />
          </Link>
          {navLinks.map((links) => (
            <Link
              key={links.name}
              className="text-5xl md:text-6xl font-mono hover:posted-text duration-200 ease-in transition-colors  font-black uppercase"
              href={links.path}
              onClick={() => setMenuOpen(false)}
            >
              {links.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
