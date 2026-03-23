"use client";
import { motion } from "framer-motion";
import { BwImages } from "@/lib/ImgData";

// const logos = [
//     "/postedlogo.png",
//     "/Posted.png",
//     "/Posted3.png",
//     "/postedlogo.png",
//     "/Posted.png",
//     "/Posted3.png",
//     "/postedlogo.png",
//     "/Posted.png",
//     "/Posted3.png",
//     "/postedlogo.png",
//     "/Posted.png",
//     "/Posted3.png",
//   ];

const InfiniteCarousel = () => {
  return (
    <div className="relative overflow-hidden pt-12 mb-4">
      <motion.div
        className="flex whitespace-nowrap"
        initial={{ x: 0 }}
        animate={{ x: `-${100}%` }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ gap: "7px" }} // Ensures consistent gap
      >
        {/* Combine logos and duplicates dynamically */}
        {[...BwImages, ...BwImages].map((image, index) => (
          <img
            key={index}
            src={image.src}
            className="h-[10rem] md:mx-10 invert object-fill"
            alt="Brand Logos"
          />
        ))}
      </motion.div>
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 h-full w-64 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-64 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
    </div>
  );
};

export default InfiniteCarousel;
