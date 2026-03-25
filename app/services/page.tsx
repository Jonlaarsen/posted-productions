"use client";

import Vision from "@/components/landing/Vision";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { TickerHover } from "@/components/ui/TickerHover";
import { VideoIframe } from "@/components/ui/VideoIframe";
import Link from "next/link";
import { ArrowBigRightDash, ArrowLeft } from "lucide-react";
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

const Page = () => {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const isSection1InView = useInView(section1Ref, { once: true, amount: 0.2 });
  const isSection2InView = useInView(section2Ref, { once: true, amount: 0.2 });
  const isSection3InView = useInView(section3Ref, { once: true, amount: 0.2 });

  return (
    <div className="min-h-screen overflow-hidden size-full  py-20 flex flex-col items-center justify-center bg-black">
      <motion.div
        className="relative z-10 flex flex-col items-center text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={item}
          className="text-6xl uppercase font-mono pt-40 font-black text-white text-center px-4"
        >
          <TickerHover
            label="Your Vision, Perfectly Crafted By Us."
            tickerText="Your Vision, Perfectly Crafted By Us. ◆ Documentary ◆ Corporate ◆ Branded ◆ Music Video ◆"
            invertOnHover
          />
        </motion.h1>
        <motion.h2
          variants={item}
          className="text-2xl px-2 max-w-6xl text-center pb-10 pt-5 text-white/90"
        >
          We create and refine premium content across genres - news, podcast,
          travel, sports, music, social issues, <br /> true crime,
          entertainment, commercials, music video, brand contents and more...
        </motion.h2>
      </motion.div>

      <motion.div
        ref={section1Ref}
        className="relative z-10 size-full grid grid-cols-1 md:grid-cols-2 mt-20"
        variants={container}
        initial="hidden"
        animate={isSection1InView ? "visible" : "hidden"}
      >
        <motion.div variants={item} className="h-100 relative">
          <h1 className="z-50 bg-blue-600/50 uppercase cursor-pointer text-white font-black text-4xl md:text-5xl px-5 py-2 absolute -top-8 left-1/2 -translate-x-1/2">
            <TickerHover
              label="PREPRODUCTION"
              tickerText="PREPRODUCTION ◆ Creative Development ◆ Scripting ◆ Budgeting ◆ Location Scouting ◆"
            />
          </h1>
          <VideoIframe
            src="https://player.vimeo.com/video/1052204861?h=393f1113fb&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;background=1"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            className="w-[105%] -ml-5 h-[105%]"
            title="POST PRODUCTION"
          />
        </motion.div>
        <motion.div
          variants={item}
          className="size-full flex flex-col items-center text-center justify-center text-lg md:text-2xl font-extralight gap-5 text-white/80 pt-2"
        >
          <p>♦ Creative development & scripting</p>
          <p>♦ Budgeting & Scheduling</p>
          <p>♦ Location Scouting & Fixing</p>
          <p>♦ Crew & Equipment Hire</p>
          <p>♦ Legal / Permit & Logistics Management</p>
        </motion.div>
      </motion.div>

      <motion.div
        ref={section2Ref}
        className="relative z-10 size-full grid grid-cols-1 md:grid-cols-2 mt-20"
        variants={container}
        initial="hidden"
        animate={isSection2InView ? "visible" : "hidden"}
      >
        <motion.div
          variants={item}
          className="size-full order-2 md:order-1 text-center  px-10 flex flex-col items-center justify-center text-lg md:text-2xl font-extralight gap-5 text-white/80 pt-2"
        >
          <p>
            {" "}
            ♦ Full Production Crew i.e. Producer, Director, <br /> DoP, Sound,
            Drone, PA, and more.
          </p>
          <p>
            ♦ Top-Tier Rentals: Cameras, lighting, gear, <br /> and vehicles
            tailored to your project.
          </p>
          <p>
            ♦ Expert Logistics: From setup to wrap-up, <br /> we handle every
            detail.
          </p>
        </motion.div>
        <motion.div
          variants={item}
          className="h-100 order-1 md:order-2  relative"
        >
          <h1 className="z-50 bg-blue-600/50 uppercase cursor-pointer text-white font-black text-4xl md:text-5xl px-5 py-2 absolute -top-8 left-1/2 -translate-x-1/2">
            {" "}
            <TickerHover
              label="Videography"
              tickerText="Videography ◆ Full Production Crew ◆ Cameras ◆ Lighting ◆ Drone ◆"
            />
          </h1>
          <VideoIframe
            src="https://player.vimeo.com/video/1051778908?h=bbd723567f&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;background=1"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            className="w-[105%] -mr-5 h-[105%]"
            title="Filming and Production Service"
          />
        </motion.div>
      </motion.div>

      <motion.div
        ref={section3Ref}
        className="relative z-10 size-full grid grid-cols-1 md:grid-cols-2 mt-20"
        variants={container}
        initial="hidden"
        animate={isSection3InView ? "visible" : "hidden"}
      >
        <motion.div variants={item} className="h-100 relative">
          <h1 className="z-50 bg-blue-600/50 uppercase cursor-pointer text-white font-black text-4xl md:text-5xl px-5 py-2 absolute -top-8 left-1/2 -translate-x-1/2">
            {" "}
            <TickerHover
              label="Postproduction"
              tickerText="Postproduction ◆ Editing ◆ Color Grading ◆ Sound Design ◆ VFX ◆"
            />
          </h1>
          <VideoIframe
            src="https://player.vimeo.com/video/1051779050?h=155e4c030a&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;background=1"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            className="w-[105%] -ml-5 h-[105%]"
            title="Filming and Production Service"
          />
        </motion.div>
        <motion.div
          variants={item}
          className="size-full flex flex-col px-2 text-center md:text-start items-center justify-center text-lg md:text-2xl font-extralight gap-5 text-white/80 pt-2"
        >
          <p>♦ Transcoding & Editing: Precision at every frame.</p>
          <p>♦ Color Grading: Visuals that captivate.</p>
          <p>♦ Sound Design & Mixing: Immersive audio perfection.</p>
          <p>♦ Custom Music & Effects: Tailored for your story.</p>
          <p>
            ♦ Voiceovers, Subtitles & Translation: Multilingual and seamless.
          </p>
          <p>
            ♦ Archival Footage Integration: Bringing the past to the present.
          </p>
          <p>♦ Fact Checking: Ensuring every detail is accurate.</p>
        </motion.div>
      </motion.div>
      <div
        className="absolute inset-0 opacity-20 size-full"
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
      <div className="flex flex-col items-center pt-20 gap-4">
        <Link
          className="flex items-center justify-center gap-3 text-lg md:text-3xl font-mono bg-white/20 rounded-2xl p-4 hover:scale-105 hover:posted-bg transition-all duration-300 ease-in-out"
          href="/work"
        >
          Check our work!
          <ArrowBigRightDash className="h-5 w-5 md:w-10 md:h-10" />
        </Link>
        <Link
          className="flex items-center justify-center gap-3 text-zinc-500 text-xl hover:scale-105 duration-300 pt-4 pb-10 ease-in-out"
          href="/team"
        >
          <ArrowLeft className="w-5 h-5" /> team
        </Link>
      </div>
      <Vision />
    </div>
  );
};

export default Page;
