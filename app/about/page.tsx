"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { NumberScrambler } from "@/components/ui/NumberScrambler";
import Link from "next/link";
import { BrandImgs } from "@/lib/ImgData";
import Vision from "@/components/landing/Vision";
import { ArrowBigRightDash } from "lucide-react";

export default function Page() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const secondSectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.0", "end 0.5"],
  });

  const fillWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const brandsRef = useRef<HTMLDivElement>(null);
  const isSecondInView = useInView(secondSectionRef, {
    once: true,
    amount: 0.2,
  });
  const isBrandsInView = useInView(brandsRef, { once: true, amount: 0.2 });

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.08 * i },
    }),
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="relative overflow-hidden min-h-[150vh] px-4 size-full bg-black flex flex-col items-center justify-center">
      {/* studio production images */}
      <img
        src="https://www.pngall.com/wp-content/uploads/19/Boom-Microphone-For-Film-Production-PNG.png"
        className="absolute top-150  -right-40 h-80 md:h-150 rotate-y-180 w-auto z-49"
        alt=""
      />
      <img
        src="/c-lights-Photoroom.png"
        className="absolute top-30 md:-top-20 left-1/2 -translate-x-1/2 h-50 md:h-100  w-auto z-49"
        alt=""
      />
      <img
        src="https://www.pngall.com/wp-content/uploads/19/Boom-Microphone-For-Film-Production-PNG.png"
        className="absolute top-150  -left-40 h-70 md:h-150  w-auto z-49"
        alt=""
      />
      {/* Grid background with faded corners */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />
      <motion.div
        className="relative z-10 min-h-screen flex flex-col items-center justify-center"
        ref={sectionRef}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <h1 className="md:hidden block text-center text-5xl font-mono font-black px-2">
          WE ARE POSTED-PRODUCTIONS
        </h1>
        <motion.h1
          variants={item}
          className="relative text-2xl hidden md:block lg:text-[5.5rem] font-mono font-black posted-text text-center"
        >
          <span className="block  scale-y-150  whitespace-nowrap">
            WE ARE POSTED-PRODUCTIONS
          </span>
          <motion.span
            className="absolute left-0 top-0 h-full scale-y-150 overflow-hidden whitespace-nowrap"
            style={{ width: fillWidth }}
          >
            <span className="block text-black">WE ARE POSTED-PRODUCTIONS</span>
          </motion.span>
        </motion.h1>
        <motion.h2
          variants={item}
          className="text-lg text-center md:text-4xl font-extralight pt-5 text-white/90"
        >
          Where vision meets storytelling — documentary, branded, and beyond.
        </motion.h2>
      </motion.div>
      <motion.div
        ref={secondSectionRef}
        className="relative z-10 flex flex-col items-center justify-center gap-10 min-h-[60vh] size-full md:py-20 max-w-4xl"
        variants={container}
        initial="hidden"
        animate={isSecondInView ? "visible" : "hidden"}
      >
        <motion.h2
          variants={item}
          className="relative uppercase text-base md:text-4xl font-mono font-black posted-text text-center"
        >
          <span className="block text-black scale-y-150 opacity-50  whitespace-nowrap">
            Who are we and what can we do for you?
          </span>
          <motion.span
            className="absolute left-0 top-0 right-0 h-full scale-y-150 overflow-hidden whitespace-nowrap"
            style={{ width: fillWidth }}
          >
            Who are we and what can we do for you?
          </motion.span>
        </motion.h2>
        <motion.p
          variants={item}
          className=" text-base md:text-lg lg:text-2xl text-center font-light"
        >
          Posted Productions is a space{" "}
          <span className="font-bold">“where vision meets storytelling”.</span>
          <br />
          We are a dynamic multimedia production company with over 9 years of
          experience, specialising in documentary filmmaking while also creating
          impactful content for corporate, branded, news, podcast, and music
          videos. Our mission is to craft compelling narratives that resonate
          deeply, whether it's capturing the raw authenticity of real-life
          stories or delivering creative productions for brands. At Posted
          Productions, we believe in the power of visuals to inspire, inform,
          and connect and{" "}
          <span className="font-bold">we are here to help!</span>
        </motion.p>
        <motion.div variants={item}>
          <Link
            className="text-lg flex items-center justify-center gap-4 md:text-4xl font-mono bg-white/20 rounded-2xl p-4 hover:scale-105 hover:posted-bg transition-all duration-300 ease-in-out"
            href="/team"
          >
            Meet the Team{" "}
            <ArrowBigRightDash className="h-5 w-5 md:h-10 md:w-10" />
          </Link>
        </motion.div>
        <motion.div
          variants={container}
          className="flex flex-col md:flex-row gap-5 md:space-x-50 justify-center items-center md:pt-20"
        >
          <motion.div
            variants={item}
            className="flex gap-4 justify-center relative overflow-hidden text-center text-2xl md:text-5xl items-center rounded-full border-blue-400/50 border-2 h-60 w-60 md:h-95 md:w-95"
          >
            <h3 className="font-extralight z-50">
              <NumberScrambler
                value={167}
                className="font-black text-4xl md:text-6xl posted-text"
              />
              <br />
              Completed Works
            </h3>
            <div className="inset-0 absolute size-full bg-black/80 z-10"></div>
            <video
              autoPlay
              preload="true"
              loop
              muted
              src="/videos/video1.mov"
              className="inset-0 absolute top-0 left-0 right-0 size-[200%] -mt-50 object-cover object-center"
            ></video>
          </motion.div>
          <motion.div
            variants={item}
            className="flex gap-4 justify-center relative overflow-hidden text-center text-2xl md:text-5xl items-center rounded-full border-blue-400/50 border-2 h-60 w-60 md:h-95 md:w-95"
          >
            <h3 className="font-extralight z-50">
              <NumberScrambler
                value={48}
                className="font-black text-4xl md:text-6xl posted-text"
              />{" "}
              <br />
              Global Channels & Brand Partners
            </h3>
            <div className="inset-0 absolute size-full bg-black/80 z-10"></div>
            <video
              autoPlay
              preload="true"
              loop
              muted
              src="/videos/video3.mov"
              className="inset-0 absolute top-0 left-0 right-0 size-[200%] -mt-50 object-cover object-center"
            ></video>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        ref={brandsRef}
        className="relative z-10 flex flex-col items-center"
        variants={container}
        initial="hidden"
        animate={isBrandsInView ? "visible" : "hidden"}
      >
        <motion.h1
          variants={item}
          className="text-base md:text-6xl pt-10 font-mono text-center"
        >
          Global Channels & Brand Collaborators so far...
        </motion.h1>
        <motion.div
          variants={item}
          className="w-full grid grid-cols-3 md:grid-cols-6 bg-linear-to-bl from-blue-600/20 to-blue-500/20 via-blue-300/50 py-20"
        >
          {BrandImgs.map((brand) => (
            <div key={brand.id} className="flex items-center justify-center">
              <img
                src={brand.src}
                className="md:w-24 w-20 h-auto object-fill"
                alt={brand.src}
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
      <Vision />
    </div>
  );
}
