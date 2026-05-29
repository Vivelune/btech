"use client";
import React from 'react'
import { AlertTriangle, ArrowRight } from "lucide-react";

const Branding = () => {
  return (
     <div className="w-full bg-neutral-50 px-6 py-20 select-none">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* 1. Section Header Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="bg-emerald-100/60 text-emerald-700 text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full flex items-center gap-1.5 mb-4 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 block"></span>
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 tracking-tight">
            What we <span className="text-emerald-600 font-extrabold">create</span>
          </h2>
          <p className="text-neutral-500 text-sm md:text-base mt-4 max-w-md font-medium">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        {/* 2. Main Two-Column Split Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-4">
          
          {/* Left Column: Image Card Showcase */}
          <div className="relative group rounded-3xl overflow-hidden shadow-xl shadow-neutral-200 border border-neutral-200/60 aspect-[4/3] lg:aspect-auto lg:h-[420px] bg-neutral-200">
            {/* Green App Badge floating in top left */}
            <div className="absolute top-6 left-6 z-10 w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center shadow-md shadow-emerald-800/20">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            
            {/* UPDATED: Live placeholder image url from Unsplash */}
            <img 
              src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop" 
              alt="Brand & Logo Design Palette" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Right Column: Information & Text Features */}
          <div className="flex flex-col justify-center lg:pl-6 text-left">
            <h3 className="text-3xl md:text-4xl font-bold text-neutral-800 tracking-tight mb-5">
              Brand & Logo Design
            </h3>
            
            <p className="text-neutral-500 text-base md:text-lg leading-relaxed mb-8 font-normal">
              Transform your brand identity with stunning visual designs that capture your essence. 
              From custom logos to complete brand guidelines, we create memorable identities that 
              resonate with your audience.
            </p>

            {/* 2x2 Core Offerings Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-10">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0"></span>
                <span className="text-neutral-700 font-medium text-base">Custom Logo Design</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0"></span>
                <span className="text-neutral-700 font-medium text-base">Brand Guidelines</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0"></span>
                <span className="text-neutral-700 font-medium text-base">Business Cards</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0"></span>
                <span className="text-neutral-700 font-medium text-base">Visual Identity</span>
              </div>
            </div>

            {/* Bottom Menu Navigation Link */}
            <a 
              href="#services" 
              className="inline-flex items-center gap-2 text-neutral-500 font-semibold text-sm tracking-wide hover:text-emerald-600 transition-colors duration-200 group w-fit"
            >
              Explore services in menu
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

        </div>

      </div>
    </div> 
  );
};

export default Branding
