import { useState } from "react";

const services = [
  {
    category: "DIGITAL SOLUTIONS",
    items: [
      { icon: "⚡", label: "Cloud Services" },
      { icon: "🤖", label: "AI Integration" },
      { icon: "🔒", label: "Cybersecurity" },
      { icon: "📊", label: "Data Analytics" },
      { icon: "🔗", label: "API Solutions" },
    ],
  },
  {
    category: "WEB DEVELOPMENT",
    items: [
      { icon: "💻", label: "Web Applications" },
      { icon: "🛒", label: "E-commerce" },
      { icon: "✏️", label: "CMS Development" },
      { icon: "📱", label: "Responsive Design" },
      { icon: "⚙️", label: "Web Hosting" },
    ],
  },
  {
    category: "APP DEVELOPMENT",
    items: [
      { icon: "🍎", label: "iOS Apps" },
      { icon: "🤖", label: "Android Apps" },
      { icon: "🔄", label: "Cross-Platform" },
      { icon: "🎨", label: "App Design" },
      { icon: "🔧", label: "Maintenance" },
    ],
  },
  {
    category: "DIGITAL MARKETING",
    items: [
      { icon: "📣", label: "Social Media" },
      { icon: "🎯", label: "Paid Advertising" },
      { icon: "📄", label: "Content Marketing" },
      { icon: "🔍", label: "SEO Services" },
      { icon: "📧", label: "Email Campaigns" },
    ],
  },
  {
    category: "LOGO DESIGN",
    items: [
      { icon: "🏢", label: "Brand Identity" },
      { icon: "⚠️", label: "Logo Design" },
      { icon: "📋", label: "Brand Guidelines" },
      { icon: "💼", label: "Business Cards" },
      { icon: "🎨", label: "Visual Assets" },
    ],
  },
  {
    category: "FORM BUILDER",
    items: [
      { icon: "📝", label: "Contact Forms" },
      { icon: "✅", label: "Quiz Forms" },
      { icon: "👤", label: "Registration Forms" },
      { icon: "📊", label: "Poll Forms" },
      { icon: "🔗", label: "Survey Builder" },
    ],
  },
];

export default function HeroSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;700&display=swap');
        @keyframes scrollPills {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .scroll-track { animation: scrollPills 22s linear infinite; }
        .scroll-track:hover { animation-play-state: paused; }
        * { box-sizing: border-box; }
      `}</style>

      <section
        className="relative w-full min-h-screen overflow-hidden flex flex-col lg:flex-row"
        style={{ background: "#0a1f14", fontFamily: "'DM Sans', sans-serif" }}
      >
        <div className="pointer-events-none absolute inset-0 z-0">
          <div
            className="absolute rounded-full"
            style={{
              left: "50%", top: "50%",
              transform: "translate(-50%,-50%)",
              width: "min(900px,150vw)", height: "min(900px,150vw)",
              background: "radial-gradient(ellipse at center,rgba(0,100,40,.18) 0%,rgba(0,60,20,.08) 45%,transparent 75%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "linear-gradient(rgba(0,200,80,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,200,80,.04) 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              bottom: -120, left: "10%",
              width: 500, height: 500,
              background: "radial-gradient(circle,rgba(0,230,80,.12) 0%,transparent 70%)",
              filter: "blur(40px)",
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col justify-center gap-6 px-6 py-16 sm:px-10 lg:flex-1 lg:px-16 lg:py-20 xl:px-20">
          <div
            className="flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm backdrop-blur-md"
            style={{ border: "1px solid rgba(255,255,255,.2)", background: "rgba(255,255,255,.04)", color: "rgba(255,255,255,.85)" }}
          >
            <span style={{ color: "#f97316" }}>✦</span>
            Future of Digital
          </div>

          <h1 className="m-0 leading-[1.05]" style={{ fontFamily: "'Syne', sans-serif" }}>
            <span className="block font-extrabold text-white" style={{ fontSize: "clamp(40px,7vw,80px)" }}>
              Build the
            </span>
            <span
              className="block font-extrabold"
              style={{
                fontSize: "clamp(44px,8.5vw,96px)",
                background: "linear-gradient(90deg,#4ade80,#a3e635)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              impossible
            </span>
          </h1>

          <p className="m-0 max-w-sm leading-relaxed" style={{ fontSize: "clamp(14px,2vw,16px)", color: "rgba(255,255,255,.6)" }}>
            Transform your vision into reality with our comprehensive suite of digital services.
          </p>

          <button
            className="flex w-fit items-center gap-2 rounded-full border-0 font-bold cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
            style={{
              padding: "clamp(12px,2vw,16px) clamp(24px,4vw,32px)",
              fontSize: "clamp(14px,1.8vw,16px)",
              background: "linear-gradient(135deg,#22c55e,#4ade80)",
              color: "#0a1f14",
              boxShadow: "0 0 30px rgba(74,222,128,.3)",
            }}
          >
            Get Started <span>→</span>
          </button>
        </div>

        <div
          className="relative z-10 flex flex-col justify-center overflow-hidden lg:flex-1"
          style={{ borderTop: "1px solid rgba(255,255,255,.07)" }}
        >
          <div className="w-full">
            {services.map((row, i) => (
              <div
                key={i}
                className="flex items-center"
                style={{
                  minHeight: "clamp(56px,8vw,72px)",
                  borderBottom: "1px solid rgba(255,255,255,.07)",
                  borderTop: i === 0 ? "1px solid rgba(255,255,255,.07)" : undefined,
                }}
              >
                <div
                  className="shrink-0 px-3 sm:px-5 font-bold uppercase tracking-widest hidden sm:block"
                  style={{ width: "clamp(130px,16vw,190px)", fontSize: "clamp(9px,1.1vw,11px)", color: "rgba(255,255,255,.7)" }}
                >
                  {row.category}
                </div>
                <div
                  className="flex-1 overflow-hidden py-2.5 sm:py-3"
                  style={{ borderLeft: "1px solid rgba(255,255,255,.07)" }}
                >
                  <div className="flex gap-2 w-max scroll-track" style={{ animationDelay: `${i * -3}s` }}>
                    {[...row.items, ...row.items].map((item, j) => (
                      <div
                        key={j}
                        className="inline-flex items-center gap-1.5 rounded-full whitespace-nowrap cursor-default transition-all duration-200"
                        style={{
                          padding: "6px 14px",
                          fontSize: "clamp(11px,1.3vw,13px)",
                          border: "1px solid rgba(255,255,255,.15)",
                          background: "rgba(255,255,255,.04)",
                          color: "rgba(255,255,255,.82)",
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = "rgba(74,222,128,.12)";
                          e.currentTarget.style.borderColor = "rgba(74,222,128,.4)";
                          e.currentTarget.style.color = "#4ade80";
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = "rgba(255,255,255,.04)";
                          e.currentTarget.style.borderColor = "rgba(255,255,255,.15)";
                          e.currentTarget.style.color = "rgba(255,255,255,.82)";
                        }}
                      >
                        <span style={{ fontSize: "clamp(10px,1.2vw,13px)" }}>{item.icon}</span>
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
