export default function GetStarted() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&family=DM+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap');
        * { box-sizing: border-box; }
      `}</style>

      <div
        className="relative flex min-h-screen w-full items-center justify-center p-4 sm:p-6"
        style={{ background: "#edf5ef", fontFamily: "'DM Sans', sans-serif" }}
      >
        <div className="flex w-full flex-col items-center gap-6 text-center" style={{ maxWidth: "min(480px,100%)" }}>
          <div
            className="flex items-center justify-center rounded-2xl sm:rounded-[24px] text-4xl sm:text-5xl"
            style={{
              width: "clamp(80px,18vw,100px)", height: "clamp(80px,18vw,100px)",
              background: "linear-gradient(145deg,#3a9e5f,#2d7d4a)",
              boxShadow: "0 12px 40px rgba(58,158,95,.3)",
            }}
          >
            🚀
          </div>

          <h2
            className="m-0 font-extrabold leading-[1.1] tracking-tight"
            style={{
              fontSize: "clamp(32px,8vw,58px)",
              color: "#0d1f14",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            Ready to start<br />your{" "}
            <span style={{ color: "#3a9e5f" }}>journey</span>?
          </h2>

          <p className="m-0 leading-relaxed" style={{ fontSize: "clamp(16px,3.5vw,22px)", color: "#2c4a36" }}>
            Let's create something extraordinary together. Your vision, our expertise.
          </p>

          <p className="m-0 italic leading-relaxed px-2" style={{ fontSize: "clamp(14px,3vw,19px)", color: "#4a6b57" }}>
            "The future belongs to those who believe in the beauty of their dreams." – Let's make yours a reality.{" "}
            <span className="not-italic" style={{ color: "#d4a017" }}>✨</span>
          </p>

          <div className="mt-2 flex w-full flex-col gap-3 sm:gap-3.5">
            <button
              className="flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full border-0 font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{
                padding: "clamp(16px,3vw,22px) clamp(20px,5vw,32px)",
                fontSize: "clamp(15px,3vw,18px)",
                background: "#3a9e5f",
                boxShadow: "0 8px 30px rgba(58,158,95,.35)",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#2d8a4e"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#3a9e5f"; }}
            >
              Get Started Today
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </button>

            <button
              className="flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full font-semibold transition-all duration-200 hover:-translate-y-0.5"
              style={{
                padding: "clamp(16px,3vw,22px) clamp(20px,5vw,32px)",
                fontSize: "clamp(15px,3vw,18px)",
                background: "rgba(255,255,255,.6)",
                border: "1.5px solid rgba(58,158,95,.25)",
                color: "#2c4a36",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,.9)"; e.currentTarget.style.borderColor = "#3a9e5f"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,.6)"; e.currentTarget.style.borderColor = "rgba(58,158,95,.25)"; }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3a9e5f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.44 2 2 0 0 1 3.57 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l1.27-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" />
              </svg>
              +1 215 863 7222
            </button>
          </div>
        </div>

        <button
          className="fixed bottom-6 right-6 flex cursor-pointer items-center justify-center rounded-full border-0 transition-all duration-200 hover:scale-110"
          style={{
            width: "clamp(50px,10vw,60px)", height: "clamp(50px,10vw,60px)",
            background: "#3b5bdb",
            boxShadow: "0 8px 24px rgba(59,91,219,.4)",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      </div>
    </>
  );
}
