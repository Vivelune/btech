"use client";
export default function JourneySection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&family=DM+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap');
      `}</style>

      <div
        className="relative flex min-h-screen items-center justify-center p-6"
        style={{ background: "#edf5ef", fontFamily: "'DM Sans', sans-serif" }}
      >
        <div className="flex w-full max-w-[480px] flex-col items-center gap-7 text-center">
          <div
            className="flex h-[100px] w-[100px] items-center justify-center rounded-[24px] text-5xl"
            style={{
              background: "linear-gradient(145deg,#3a9e5f,#2d7d4a)",
              boxShadow: "0 12px 40px rgba(58,158,95,.3)",
            }}
          >
            🚀
          </div>

          <h2
            className="m-0 font-extrabold leading-[1.1] tracking-[-0.02em]"
            style={{
              fontSize: "clamp(40px,10vw,58px)",
              color: "#0d1f14",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            Ready to start<br />
            your <span style={{ color: "#3a9e5f" }}>journey</span>?
          </h2>

          <p className="m-0 text-[clamp(18px,4vw,22px)] leading-[1.55]" style={{ color: "#2c4a36" }}>
            Let's create something extraordinary together. Your vision, our expertise.
          </p>

          <p className="m-0 italic leading-[1.65]" style={{ fontSize: "clamp(16px,3.5vw,19px)", color: "#4a6b57" }}>
            "The future belongs to those who believe in the beauty of their dreams." – Let's make yours a reality.{" "}
            <span className="not-italic" style={{ color: "#d4a017" }}>✨</span>
          </p>

          <div className="mt-3 flex w-full flex-col gap-3.5">
            <button
              className="flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full border-0 px-8 py-[22px] text-lg font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "#3a9e5f",
                boxShadow: "0 8px 30px rgba(58,158,95,.35)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#2d8a4e";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(58,158,95,.45)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "#3a9e5f";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(58,158,95,.35)";
              }}
            >
              Get Started Today
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </button>

            <button
              className="flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full px-8 py-[22px] text-lg font-semibold transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,.6)",
                border: "1.5px solid rgba(58,158,95,.25)",
                color: "#2c4a36",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(255,255,255,.9)";
                e.currentTarget.style.borderColor = "#3a9e5f";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(255,255,255,.6)";
                e.currentTarget.style.borderColor = "rgba(58,158,95,.25)";
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3a9e5f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.44 2 2 0 0 1 3.57 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l1.27-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" />
              </svg>
              +1 215 863 7222
            </button>
          </div>
        </div>

        <button
          className="fixed bottom-8 right-8 flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full border-0 transition-all duration-200 hover:scale-[1.08]"
          style={{
            background: "#3b5bdb",
            boxShadow: "0 8px 24px rgba(59,91,219,.4)",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      </div>
    </>
  );
}
