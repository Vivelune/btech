export default function WebDevCard() {
  const features = ["Custom Websites", "E-commerce", "Web Applications", "SEO Optimization"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&family=DM+Sans:wght@400;500;600&display=swap');
      `}</style>

      <div
        className="flex min-h-screen items-center justify-center p-5"
        style={{ background: "#dff0e4", fontFamily: "'DM Sans', sans-serif" }}
      >
        <div
          className="w-full max-w-[480px] overflow-hidden rounded-[28px]"
          style={{ background: "#eaf5ee", boxShadow: "0 20px 60px rgba(0,80,30,.1)" }}
        >
          <div className="m-3 h-[260px] overflow-hidden rounded-[20px]">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop"
              alt="Web Development Dashboard"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-5 px-8 pb-9 pt-7">
            <h2
              className="m-0 font-extrabold leading-[1.1] tracking-[-0.02em]"
              style={{
                fontSize: "clamp(36px,8vw,48px)",
                color: "#0d2318",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              Web Development
            </h2>

            <p className="m-0 leading-[1.7]" style={{ fontSize: "clamp(16px,3.5vw,18px)", color: "#2e4d38" }}>
              Create stunning websites that drive results. From responsive designs to powerful web
              applications, we build fast, secure, and scalable solutions that convert visitors into customers.
            </p>

            <div className="grid grid-cols-2 gap-x-2 gap-y-3.5">
              {features.map(item => (
                <div key={item} className="flex items-center gap-2.5 text-base font-medium" style={{ color: "#1a3a24" }}>
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: "#3a9e5f" }} />
                  {item}
                </div>
              ))}
            </div>

            <a
              href="#"
              className="mt-1 inline-flex items-center gap-1.5 text-base font-semibold no-underline transition-[gap] duration-200 hover:gap-3"
              style={{ color: "#3a9e5f" }}
            >
              Explore services in menu <span className="text-lg">→</span>
            </a>
          </div>
        </div>

        <div className="fixed bottom-8 right-7 flex flex-col gap-3">
          <button
            className="flex h-[58px] w-[58px] cursor-pointer items-center justify-center rounded-full border-0 transition-transform duration-200 hover:scale-[1.08]"
            style={{ background: "#3b5bdb", boxShadow: "0 8px 24px rgba(59,91,219,.4)" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </button>
          <button
            className="flex h-[58px] w-[58px] cursor-pointer items-center justify-center rounded-full border-0 transition-transform duration-200 hover:scale-[1.08]"
            style={{ background: "#1a3a24", boxShadow: "0 8px 24px rgba(0,0,0,.25)" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
