export default function MobileAppSection() {
  const features = ["iOS Development", "Android Apps", "Cross-Platform", "App Store Optimization"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&family=DM+Sans:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }
      `}</style>

      <section
        className="flex min-h-screen w-full flex-col items-center justify-center gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:gap-14 lg:px-16 lg:py-16"
        style={{ background: "#eaf5ee", fontFamily: "'DM Sans', sans-serif" }}
      >
        <div className="flex w-full max-w-xl flex-col gap-5 lg:flex-1 lg:max-w-none">
          <h2
            className="m-0 font-extrabold leading-tight tracking-tight"
            style={{ fontSize: "clamp(28px,5vw,48px)", color: "#0d2318", fontFamily: "'Syne', sans-serif" }}
          >
            Mobile App Development
          </h2>

          <p className="m-0 leading-relaxed" style={{ fontSize: "clamp(14px,2vw,17px)", color: "#2e4d38" }}>
            Build powerful mobile experiences with native iOS and Android applications. Our expert
            developers create high-performance apps that users love, with seamless functionality and
            beautiful interfaces.
          </p>

          <div className="grid grid-cols-2 gap-x-4 gap-y-3">
            {features.map((item) => (
              <div key={item} className="flex items-center gap-2.5 font-medium" style={{ fontSize: "clamp(13px,1.8vw,15px)", color: "#1a3a24" }}>
                <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: "#3a9e5f" }} />
                {item}
              </div>
            ))}
          </div>

          <a
            href="#"
            className="mt-1 inline-flex items-center gap-1.5 font-semibold no-underline transition-[gap] duration-200 hover:gap-3"
            style={{ fontSize: "clamp(13px,1.8vw,15px)", color: "#3a9e5f" }}
          >
            Explore services in menu <span>→</span>
          </a>
        </div>

        <div className="relative w-full max-w-xl lg:flex-1 lg:max-w-none">
          <div
            className="absolute left-3 top-3 z-10 flex items-center justify-center rounded-[14px]"
            style={{
              width: "clamp(44px,8vw,56px)", height: "clamp(44px,8vw,56px)",
              background: "#3a9e5f",
              boxShadow: "0 6px 20px rgba(58,158,95,.35)",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
              <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
          </div>

          <div
            className="overflow-hidden rounded-2xl"
            style={{
              height: "clamp(200px,40vw,340px)",
              boxShadow: "0 16px 48px rgba(0,60,20,.12)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&auto=format&fit=crop"
              alt="Mobile App Development"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
