"use client";
import { Zap, Quote } from 'lucide-react';
const Testimonial = () => {
  return (
      <div className="w-full bg-slate-50 text-slate-800 py-16 px-6 font-sans antialiased">
      <div className="max-w-7xl mx-auto space-y-20">
        
        <section className="space-y-12">
          
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Zap className="w-8 h-8 text-orange-500 fill-orange-500 shrink-0" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-emerald-800">
                Disruption Rewards the Brave
              </h2>
            </div>
            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
              The most successful companies today didn't just adapt to change—they{' '}
              <span className="text-emerald-700 font-semibold">created it</span>. They saw gaps where others saw impossibilities. They built solutions before people knew they needed them.{' '}
              <span className="text-emerald-800 font-medium">
                Innovation isn't about having all the answers
              </span>
              ; it's about asking better questions and having the courage to experiment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
           
            <div className="bg-emerald-50/50 border border-emerald-100 p-8 rounded-2xl text-center shadow-sm flex flex-col justify-between space-y-4">
              <div>
                <div className="text-5xl sm:text-6xl font-extrabold text-emerald-700 tracking-tight">
                  10X
                </div>
                <h3 className="text-lg font-bold text-slate-700 mt-2 mb-3">
                  Faster Market Entry
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Companies that embrace mobile-first strategies reach customers 10x faster than traditional methods
                </p>
              </div>
            </div>

            <div className="bg-emerald-50/50 border border-emerald-100 p-8 rounded-2xl text-center shadow-sm flex flex-col justify-between space-y-4">
              <div>
                <div className="text-5xl sm:text-6xl font-extrabold text-emerald-700 tracking-tight">
                  85%
                </div>
                <h3 className="text-lg font-bold text-slate-700 mt-2 mb-3">
                  User Retention
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Well-designed mobile apps achieve up to 85% user retention in the first 30 days
                </p>
              </div>
            </div>

            <div className="bg-emerald-50/50 border border-emerald-100 p-8 rounded-2xl text-center shadow-sm flex flex-col justify-between space-y-4 sm:col-span-2 lg:col-span-1">
              <div>
                <div className="text-5xl sm:text-6xl font-extrabold text-emerald-700 tracking-tight">
                  3.5B
                </div>
                <h3 className="text-lg font-bold text-slate-700 mt-2 mb-3">
                  Active Users
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Over 3.5 billion smartphone users worldwide are waiting to discover your solution
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto pt-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-900 via-emerald-950 to-slate-950 px-8 py-12 sm:py-14 text-center shadow-xl border border-emerald-800/40">
            
            
            <div className="relative z-10 max-w-4xl mx-auto space-y-6">
               
              <div className="flex items-center justify-center gap-2">
                <Quote className="w-6 h-6 text-emerald-300 fill-emerald-300 rotate-180 shrink-0 self-start mt-1 opacity-80" />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif italic font-medium text-white tracking-wide leading-snug">
                  "The best way to predict the future is to create it."
                </h2>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed tracking-wide max-w-3xl mx-auto">
                Your mobile app isn't just a product—it's your{' '}
                <span className="text-teal-400 font-medium">ticket to the future</span>. Every tap, swipe, and interaction is a chance to build loyalty, gather insights, and{' '}
                <span className="text-teal-400 font-medium">stay ahead of the curve</span>.
              </p>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
export default Testimonial
