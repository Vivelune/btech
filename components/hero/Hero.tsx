import { useEffect, useRef } from "react";

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
      { icon: "📣", label: "Social Media Marketing" },
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
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&family=DM+Sans:wght@400;500;700&display=swap');
        @keyframes scrollPills {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .scroll-pills { animation: scrollPills 22s linear infinite; }
        .scroll-pills:hover { animation-play-state: paused; }
      `}</style>

      <section
        className="relative min-h-screen w-full overflow-hidden flex items-center"
        style={{ background: "#0a1f14", fontFamily: "'DM Sans', sans-serif" }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute rounded-full"
            style={{
              left: "50%", top: "50%",
              transform: "translate(-50%,-50%)",
              width: 900, height: 900,
              background: "radial-gradient(ellipse at center,rgba(0,100,40,.18) 0%,rgba(0,60,20,.08) 45%,transparent 75%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,200,80,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,200,80,.04) 1px,transparent 1px)",
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

        <div className="relative z-10 grid w-full min-h-screen" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div className="flex flex-col justify-center gap-7 px-20 py-20">
            <div
              className="flex w-fit items-center gap-2 rounded-full px-[18px] py-2 text-[13px] backdrop-blur-md"
              style={{ border: "1px solid rgba(255,255,255,.2)", background: "rgba(255,255,255,.04)", color: "rgba(255,255,255,.85)" }}
            >
              <span style={{ color: "#f97316" }}>✦</span>
              <span>Future of Digital</span>
            </div>

            <h1 className="m-0 leading-none" style={{ fontFamily: "'Syne', sans-serif" }}>
              <span className="block font-extrabold text-white" style={{ fontSize: "clamp(52px,6vw,80px)" }}>
                Build the
              </span>
              <span
                className="block font-extrabold"
                style={{
                  fontSize: "clamp(60px,7.5vw,96px)",
                  background: "linear-gradient(90deg,#4ade80,#a3e635)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                impossible
              </span>
            </h1>

            <p className="m-0 text-base leading-relaxed max-w-[380px]" style={{ color: "rgba(255,255,255,.6)" }}>
              Transform your vision into reality with our comprehensive suite of digital services.
            </p>

            <button
              className="flex w-fit items-center gap-2.5 rounded-full border-0 px-8 py-4 text-base font-bold cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg,#22c55e,#4ade80)",
                color: "#0a1f14",
                boxShadow: "0 0 30px rgba(74,222,128,.3)",
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 40px rgba(74,222,128,.5)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "0 0 30px rgba(74,222,128,.3)"}
            >
              Get Started <span className="text-lg">→</span>
            </button>
          </div>

          <div
            className="flex items-center overflow-hidden"
            style={{ borderLeft: "1px solid rgba(255,255,255,.07)", background: "rgba(0,0,0,.15)" }}
          >
            <div className="w-full">
              {services.map((row, i) => (
                <div
                  key={i}
                  className="flex items-center min-h-[72px]"
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,.07)",
                    borderTop: i === 0 ? "1px solid rgba(255,255,255,.07)" : undefined,
                  }}
                >
                  <div
                    className="shrink-0 px-6 text-[11px] font-bold uppercase tracking-[.08em]"
                    style={{ width: 190, color: "rgba(255,255,255,.75)" }}
                  >
                    {row.category}
                  </div>
                  <div
                    className="flex-1 overflow-hidden py-3.5"
                    style={{ borderLeft: "1px solid rgba(255,255,255,.07)" }}
                  >
                    <div
                      className="flex gap-2.5 w-max scroll-pills"
                      style={{ animationDelay: `${i * -3}s` }}
                    >
                      {[...row.items, ...row.items].map((item, j) => (
                        <div
                          key={j}
                          className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] whitespace-nowrap cursor-default transition-all duration-200"
                          style={{
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
                          <span className="text-sm">{item.icon}</span>
                          <span>{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
