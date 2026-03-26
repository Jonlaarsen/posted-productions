"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import Vision from "@/components/landing/Vision";
import { ArrowLeft, ChevronDown, Mail, MapPin, Send } from "lucide-react";

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

export default function ContactPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const isFormInView = useInView(formRef, { once: true, amount: 0.2 });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const projectTypes = [
    "Documentary",
    "Corporate",
    "Branded Content",
    "Music Video",
    "Podcast",
    "Other",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Grid background */}
      <div
        className="absolute h-screen inset-0 z-0 opacity-20"
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

      <div className="relative z-10 flex flex-col items-center px-4 py-20 md:py-32">
        {/* Hero */}
        <motion.div
          className="flex flex-col z-50 items-center text-center max-w-3xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={item}
            className="text-sm md:text-base uppercase tracking-[0.3em] text-white/60 font-mono mb-4"
          >
            Get in touch
          </motion.p>
          <motion.h1
            variants={item}
            className="text-4xl md:text-7xl font-mono font-black uppercase posted-text"
          >
            Let&apos;s create together
          </motion.h1>
          <motion.p
            variants={item}
            className="text-lg md:text-xl font-extralight text-white/80 mt-6 max-w-xl"
          >
            Whether you have a story to tell or a vision to bring to life,
            we&apos;re here to listen.
          </motion.p>
        </motion.div>

        {/* Contact section */}
        <motion.div
          ref={formRef}
          className="w-full max-w-4xl mt-20 md:mt-12 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20"
          variants={container}
          initial="hidden"
          animate={isFormInView ? "visible" : "hidden"}
        >
          {/* Info column */}
          <motion.div variants={item} className="z-50 lg:col-span-2 space-y-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/50 font-mono mb-2">
                Email
              </p>
              <a
                href="mailto:contact@posted-productions.com"
                className="text-xl md:text-2xl font-light hover:posted-text transition-colors duration-300 flex items-center gap-3"
              >
                <Mail className="w-5 h-5 text-white/40" />
                contact@posted-productions.com
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/50 font-mono mb-2">
                Location
              </p>
              <p className="text-lg font-light text-white/80 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-white/40 shrink-0" />
                Seoul, South Korea & Worldwide
              </p>
            </div>
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 font-mono text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to about
              </Link>
            </div>
          </motion.div>

          {/* Form column */}
          <motion.form
            variants={item}
            className="lg:col-span-3 space-y-6 z-50 bg-black/60 border-white/50 border-2 backdrop-blur-lg p-10 rounded-2xl"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs uppercase tracking-widest text-white/50 font-mono mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, name: e.target.value }))
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-widest text-white/50 font-mono mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, email: e.target.value }))
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="project"
                className="block text-xs uppercase tracking-widest text-white/50 font-mono mb-2"
              >
                Project type
              </label>
              <div className="relative">
                <select
                  id="project"
                  value={formState.project}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, project: e.target.value }))
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 pr-12 text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-colors appearance-none cursor-pointer [&>option]:bg-black"
                >
                  <option value="" className="bg-black text-white">
                    Select a project type
                  </option>
                  {projectTypes.map((type) => (
                    <option
                      key={type}
                      value={type}
                      className="bg-black text-white"
                    >
                      {type}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-xs uppercase tracking-widest text-white/50 font-mono mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formState.message}
                onChange={(e) =>
                  setFormState((s) => ({ ...s, message: e.target.value }))
                }
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <motion.button
              type="submit"
              className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:posted-bg rounded-xl font-mono font-medium transition-all duration-300 hover:scale-[1.02]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-5 h-5" />
              Send message
            </motion.button>
          </motion.form>
          <div className="w-screen absolute inset-0 mt-40  h-screen col-span-5 size-full">
            <iframe
              src="https://player.vimeo.com/video/1051779255?h=e8c1e1223f&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;background=1"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              loading="lazy"
              className=" w-screen  h-full object-fill hidden md:flex "
              title="Contact us Video"
            ></iframe>
            <div className="absolute inset-0 size-full bg-black/50 z-10"></div>
          </div>
        </motion.div>
      </div>
      <div className="size-full bg-black">
        <Vision />
      </div>
    </div>
  );
}
