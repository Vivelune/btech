"use client";
import { 
  Zap, 
  Shield, 
  Users, 
  Target, 
  Award, 
  Clock, 
  Activity, 
  UserCheck,
  Star
} from 'lucide-react';

  export const Promotion = () => {
  const features = [
    {
      icon: <Zap className="w-5 h-5 text-emerald-400" />,
      title: "Lightning Fast",
      description: "Optimized for speed and performance with cutting-edge technology"
    },
    {
      icon: <Shield className="w-5 h-5 text-emerald-400" />,
      title: "Enterprise Security",
      description: "Bank-level security protocols protecting your data 24/7"
    },
    {
      icon: <Users className="w-5 h-5 text-emerald-400" />,
      title: "Expert Team",
      description: "World-class professionals with years of experience"
    },
    {
      icon: <Target className="w-5 h-5 text-emerald-400" />,
      title: "Results Driven",
      description: "Data-backed decisions delivering measurable outcomes"
    },
    {
      icon: <Award className="w-5 h-5 text-emerald-400" />,
      title: "25+ Awards",
      subtitle: "Award-Winning Quality",
      description: "Recognized for excellence in design and development"
    },
    {
      icon: <Clock className="w-5 h-5 text-emerald-400" />,
      title: "2-4 Weeks",
      subtitle: "Fast Turnaround",
      description: "Quick delivery without compromising on quality"
    },
    {
      icon: <Shield className="w-5 h-5 text-emerald-400" />, 
      title: "99.9% Uptime",
      subtitle: "Guaranteed Support",
      description: "24/7 technical support and maintenance"
    },
    {
      icon: <UserCheck className="w-5 h-5 text-emerald-400" />,
      title: "500+ Clients",
      subtitle: "Client Success",
      description: "Dedicated account managers for your project"
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-emerald-950 to-emerald-900 text-slate-100 py-20 px-6 font-sans antialiased">
      <div className="max-w-7xl mx-auto space-y-16">
        
       
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          
          <div className="inline-flex items-center justify-center bg-emerald-500/20 p-3 rounded-2xl border border-emerald-400/30 shadow-lg shadow-emerald-500/10 mb-2">
            <Star className="w-6 h-6 text-amber-400 fill-amber-400 animate-pulse" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Why choose <span className="bg-gradient-to-r from-teal-300 to-emerald-400 bg-clip-text text-transparent">BTech</span>
          </h2>
          
          <p className="text-emerald-100/70 text-base sm:text-lg font-medium leading-relaxed max-w-xl mx-auto">
            Experience the difference of working with industry leaders who care about your success
          </p>
        </div>

        {/* 8-CARD ARCHITECTURE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="bg-emerald-900/40 border border-emerald-800/60 rounded-2xl p-6 hover:bg-emerald-900/60 transition-all duration-300 group flex flex-col items-start space-y-4 shadow-lg backdrop-blur-sm"
            >
             
              <div className="bg-emerald-950 border border-emerald-800 p-2.5 rounded-xl shadow-inner group-hover:scale-105 transition-transform duration-200">
                {item.icon}
              </div>

              <div className="space-y-1 w-full">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                
                {item.subtitle && (
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-400/90">
                    {item.subtitle}
                  </p>
                )}
                
                <p className="text-emerald-100/60 text-sm leading-relaxed pt-1 font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Promotion
