"use client";

import React, { useRef } from 'react';
import { motion, useInView, Variants } from "framer-motion";
import { Rocket } from "lucide-react"; 

const Slogan = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.15 
      }
    }
  };

  return (
    <div className="w-full bg-neutral-50 flex flex-col items-center justify-center px-6 py-20 text-center select-none">
      <div 
        ref={sectionRef} 
        className="max-w-4xl mx-auto flex flex-col items-center"
      >
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Rocket Icon Container */}
          <motion.div 
            variants={fadeInUpVariants}
            className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-600/20 mb-8 mx-auto"
          >
            <Rocket className="w-8 h-8 text-white transform -rotate-45" />
          </motion.div>

          {/* Main Heading */}
          <motion.h2 
            variants={fadeInUpVariants}
            className="text-4xl md:text-6xl font-bold text-neutral-800 tracking-tight leading-tight max-w-3xl mb-8"
          >
            Every Great Brand Started <br className="hidden md:inline" />
            with a <span className="text-emerald-600 font-extrabold">Bold Vision</span>
          </motion.h2>

          {/* Description Paragraph */}
          <motion.p 
            variants={fadeInUpVariants}
            className="text-neutral-500 text-base md:text-xl font-normal leading-relaxed max-w-3xl px-2 md:px-6"
          >
            In a world where <span className="text-emerald-600 font-medium bg-emerald-50 px-1 rounded">attention is currency</span>, 
            your digital presence isn't just nice to have—it's your most powerful business asset. The companies 
            winning today aren't just selling products; they're <span className="text-emerald-600 font-medium">creating experiences</span>,{" "}
            <span className="text-emerald-600 font-medium">building communities</span>,{" "}
            and <span className="text-emerald-600 font-medium">telling stories</span> that resonate.
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}

export default Slogan;