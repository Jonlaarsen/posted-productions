"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { ArrowBigLeft, ArrowBigRightDash, ArrowLeft, X } from "lucide-react";
import Vision from "@/components/landing/Vision";

const teamMembers = [
  {
    id: 1,
    url: "/profile-pictures/KeithPP.jpeg",
    name: "Keith Park",
    role: "Director",
    desc: "Keith Park is a seasoned multimedia producer and director with over 9 years of experience across print, radio, television news, documentary, advertisement, and corporate shoots in South Korea. His work for renowned platforms such as VICE, Netflix, Al Jazeera, CNN, PBS, BBC, Sky, CNA and ITV highlights his expertise in delivering compelling and authentic stories. Keith's dedication to storytelling earned him the prestigious 2020 Peabody Award for Global Pandemic Coverage, recognizing his outstanding production on PBS Newshour’s Global Pandemic and Making Sense: The Victims of the Covid Economy.",
  },
  {
    id: 2,
    url: "/profile-pictures/WooPP.jpeg",
    name: "Wooseok Kim",
    role: "Fixer/Production assistant",
    desc: "Wooseok Kim is a versatile fixer, and production assistant with a strong track record in documentary filmmaking. His expertise in facilitating seamless production makes him an invaluable asset to any project. His portfolio working as a fixer and logistics expert has been among big channels such as CNA, Channel Sky, ARD, VICE, VRT, BBC Radio and more.",
  },
  {
    id: 3,
    url: "/profile-pictures/TommyPP.jpeg",
    name: "Tommy Choi",
    role: "Cinematographer/Editor/Director",
    desc: "Tommy Choi is a highly experienced cinematographer, editor, and director collaborating with brands such as Gentle Monster, Maison Margiela, AVE, Converse, Vans, Kasina and more. Whilst owning a strong brand marketing portfolio, Tommy is also highly experienced working as cameraman on documentaries such as ‘The Raincoat Killer’ series on Netflix and shooting music videos with the likes of artists like Kali Uchis, Travis Scott, 21 Savage. Woo Wonjae, The Black Skirts and P1Harmony",
  },

  {
    id: 5,
    url: "/profile-pictures/IkkPP.jpeg",
    name: "Ikk Seung",
    role: "Production Manager/Editor",
    desc: "Ikk is a skilled production manager and editor with a proven track record, having previously worked on the successful YouTube channel Meta Comedy. With expertise in managing complex projects and a keen eye for detail, Ikk brings a wealth of experience to Posted Productions, ensuring smooth operations and seamless execution across all productions. For post-production, Ikk also works as an editor, turning raw content into a polished final product.",
  },
  {
    id: 6,
    url: "/profile-pictures/IdeunPP.jpeg",
    name: "Ideun Jeong",
    role: "On-set Professional",
    desc: "Ideun is a skilled on-set professional who focuses mainly on sound, lighting, editing and script writing. With a background in film, Ideun brings a deep understanding of production equipment, and has a sharp ear for high-quality sound design. Her technical expertise spans both the creative and operational aspects, especially for audio production, allowing her to effectively manage soundscapes. She has had previous experience as a field recorder and a mixer on projects for CNA, BBC Radio, Caper Film (Netflix movie Alienoid), and more!",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 * i },
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
  const [selectedMember, setSelectedMember] = useState<
    (typeof teamMembers)[0] | null
  >(null);

  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedMember]);

  return (
    <div className="flex flex-col overflow-hidden px-4 items-center justify-center min-h-screen size-full pt-60 pb-20 bg-black text-white">
      <motion.div
        className="flex flex-col items-center text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={item}
          className="text-7xl font-black font-mono uppercase"
        >
          Meet our team!
        </motion.h1>
        <motion.h2
          variants={item}
          className="font-extralight text-3xl pt-2 text-white/80"
        >
          Posted productions houses a variety of experts in their fields.
        </motion.h2>
      </motion.div>

      <motion.div
        className="max-w-7xl  flex flex-wrap gap-10 py-20 items-center justify-center "
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            variants={item}
            className="w-82 h-96 md:w-96 md:h-128 relative z-50 bg-white/5 rounded-lg border border-white/10 overflow-hidden cursor-pointer group"
            whileHover={{ scale: 1.03, y: -8 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            onClick={() => setSelectedMember(member)}
          >
            <div className="w-full z-50 h-full bg-linear-to-b from-white/10 absolute to-transparent flex flex-col items-center justify-end p-6 transition-colors duration-300 group-hover:from-blue-400/20 group-hover:to-black/20 ">
              <span className="font-mono font-black text-3xl">
                {member.name}
              </span>
              <span className="font-thin text-xl text-blue-200">
                {member.role}
              </span>
            </div>
            <img
              src={member.url}
              className="inset-0 absolute size-full z-10"
              alt=""
            />
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedMember && (
          <motion.div
            key="modal"
            className="fixed inset-0 z-50 flex flex-col md:flex-row items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedMember(null)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            <motion.div
              className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row overflow-x-scroll bg-black/60 rounded-2xl border border-white/20 p-8 shadow-2xl"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white/60 hover:text-white text-2xl transition-colors z-50 cursor-pointer"
                onClick={() => setSelectedMember(null)}
              >
                <X className="h-10 w-10" />
              </button>
              <img
                src={selectedMember.url}
                className="h-82 rounded-tl-4xl z-50"
                alt=""
              />
              <div className="flex flex-col px-5">
                <div className="flex flex-col md:flex-row items-center gap-4 pt-4 text-center">
                  <h3 className="text-3xl font-mono font-black">
                    {selectedMember.name}
                  </h3>
                  <p className="text-blue-200/80 text-xl font-light  ">
                    {selectedMember.role}
                  </p>
                </div>

                <p className="size-full pb-2 text-white/80 text-xl flex items-end text-center md:text-start font-light">
                  {selectedMember.desc}
                </p>
              </div>
              {/* Grid background with faded corners */}
              <div
                className="absolute inset-0 opacity-20 size-full"
                style={{
                  backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
                  backgroundSize: "30px 30px",
                  maskImage:
                    "radial-gradient(ellipse 90% 90% at 10% 10%, black 40%, transparent 100%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col items-center gap-4">
        <Link
          className="flex items-center justify-center gap-3 text-lg md:text-3xl font-mono bg-white/20 rounded-2xl p-4 hover:scale-105 hover:posted-bg transition-all duration-300 ease-in-out"
          href="/services"
        >
          Check our services{" "}
          <ArrowBigRightDash className="w-5 h-5 md:w-10 md:h-10" />
        </Link>
        <Link
          className="flex items-center justify-center gap-3 text-zinc-500 text-xl hover:scale-105 duration-300 pt-4 pb-10 ease-in-out"
          href="/about"
        >
          <ArrowLeft className="w-5 h-5" /> About
        </Link>
      </div>

      {/* Grid background with faded corners */}
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
      <Vision />
    </div>
  );
};

export default Page;
