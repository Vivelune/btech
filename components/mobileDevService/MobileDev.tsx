"use client";
export default function MobileAppSection() {
  const features = ["iOS Development", "Android Apps", "Cross-Platform", "App Store Optimization"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&family=DM+Sans:wght@400;500;600&display=swap');
      `}</style>

      <section
        className="relative flex min-h-[340px] flex-col items-center gap-9 px-6 py-10 lg:flex-row lg:gap-16 lg:px-16 lg:py-12"
        style={{ background: "#f0faf3", fontFamily: "'DM Sans', sans-serif" }}
      >
        <div className="flex w-full max-w-[520px] flex-1 flex-col gap-5">
          <h2
            className="m-0 font-extrabold leading-[1.1] tracking-[-0.02em]"
            style={{
              fontSize: "clamp(28px,4vw,44px)",
              color: "#0d2318",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            Mobile App Development
          </h2>

          <p className="m-0 leading-[1.7]" style={{ fontSize: "clamp(14px,1.5vw,16px)", color: "#2e4d38" }}>
            Build powerful mobile experiences with native iOS and Android applications. Our expert
            developers create high-performance apps that users love, with seamless functionality and
            beautiful interfaces.
          </p>

          <div className="grid grid-cols-2 gap-x-4 gap-y-3">
            {features.map(item => (
              <div key={item} className="flex items-center gap-2.5 text-[15px] font-medium" style={{ color: "#1a3a24" }}>
                <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: "#3a9e5f" }} />
                {item}
              </div>
            ))}
          </div>

          <a
            href="#"
            className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold no-underline transition-[gap] duration-200 hover:gap-3"
            style={{ color: "#3a9e5f" }}
          >
            Explore services in menu <span className="text-base">→</span>
          </a>
        </div>

        <div className="relative flex w-full flex-1 items-center justify-center lg:min-h-[320px]">
          <div
            className="absolute left-0 top-0 z-10 flex h-14 w-14 items-center justify-center rounded-[14px]"
            style={{ background: "#3a9e5f", boxShadow: "0 6px 20px rgba(58,158,95,.35)" }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
              <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
          </div>

          <div
            className="h-[240px] w-full max-w-[560px] overflow-hidden rounded-[20px] lg:h-[300px]"
            style={{ boxShadow: "0 16px 48px rgba(0,60,20,.12)" }}
          >
            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop"
              alt="Mobile App Development"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
