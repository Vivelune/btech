"use client";
import React from 'react'
import { Sparkles } from 'lucide-react'; 
const BannerTwo = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-8">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-800 via-emerald-900 to-teal-950 px-8 py-16 text-center shadow-2xl border border-emerald-700/20">
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          
       <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="bg-amber-400 p-2 rounded-xl text-emerald-950 shadow-md shadow-amber-400/20 shrink-0">
              <Sparkles className="w-6 h-6 fill-current" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
              Innovation Isn’t Optional Anymore
            </h2>
          </div>

          <p className="text-emerald-100/80 text-base sm:text-lg leading-relaxed font-normal pt-2">
            The average person checks their phone{' '}
            <span className="text-teal-300 font-semibold underline decoration-teal-400/40 underline-offset-4">
              96 times a day
            </span>
            . That’s 96 opportunities to connect, engage, and convert. Are you there when they’re looking?
          </p>
          
        </div>
      </div>
    </div>

  )
}

export default BannerTwo
