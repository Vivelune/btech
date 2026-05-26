
"use client";
import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Target, Lightbulb, Zap } from "lucide-react";



const Promise = () => {
   const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  
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
        ref={containerRef} 
        className="max-w-5xl mx-auto flex flex-col items-center"
      >
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          
          
          <motion.div 
            variants={fadeInUpVariants}
            className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-600/20 mb-8 mx-auto"
          >
            <Target className="w-8 h-8 text-white" />
          </motion.div>

          
          <motion.h2 
            variants={fadeInUpVariants}
            className="text-4xl md:text-6xl font-bold text-neutral-800 tracking-tight leading-tight max-w-4xl mb-8"
          >
            Your Brand is Your <span className="text-emerald-600 font-extrabold">Promise</span> to Your Customer
          </motion.h2>

          
          <motion.p 
            variants={fadeInUpVariants}
            className="text-neutral-500 text-base md:text-xl font-normal leading-relaxed max-w-4xl px-2 md:px-6 mb-12"
          >
            In today's digital-first world, <span className="text-emerald-600 font-medium bg-emerald-50 px-1 rounded">first impressions happen in milliseconds</span>. A powerful brand identity doesn't just look good—it builds trust, communicates values, and creates lasting emotional connections that turn casual browsers into loyal advocates.
          </motion.p>

         
          <motion.div 
            variants={fadeInUpVariants}
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-4"
          >
            
            <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center backdrop-blur-sm">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-base md:text-lg mb-2">
                <Lightbulb className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                Did You Know?
              </div>
              <p className="text-neutral-600 text-sm md:text-base font-normal max-w-sm leading-relaxed">
                Consistent branding across all platforms increases revenue by up to 23%
              </p>
            </div>

            
            <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center backdrop-blur-sm">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-base md:text-lg mb-2">
                <Zap className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                Fast Fact
              </div>
              <p className="text-neutral-600 text-sm md:text-base font-normal max-w-sm leading-relaxed">
                It takes 5-7 impressions for people to remember your brand
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div> 
  )
}

export default Promise
