export default function RevolutionCard() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&family=DM+Sans:wght@400;700&display=swap');
      `}</style>

      <div
        className="flex min-h-screen items-center justify-center p-6"
        style={{ background: "#0d1f15", fontFamily: "'DM Sans', sans-serif" }}
      >
        <div
          className="relative w-full max-w-[420px] overflow-hidden rounded-[28px] px-9 pb-[60px] pt-14"
          style={{ boxShadow: "0 32px 80px rgba(0,0,0,.5)" }}
        >
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(160deg,#1a4030 0%,#0f2a1e 40%,#0a1f14 100%)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at 30% 110%,rgba(34,197,94,.18) 0%,transparent 65%)" }}
          />

          <div className="relative z-10 flex flex-col items-center gap-8 text-center">
            <div
              className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full"
              style={{
                background: "linear-gradient(135deg,#22c55e,#16a34a)",
                boxShadow: "0 8px 32px rgba(34,197,94,.35)",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>

            <h2
              className="m-0 font-extrabold leading-[1.15] tracking-[-0.01em] text-white"
              style={{ fontSize: "clamp(32px,8vw,44px)", fontFamily: "'Syne', sans-serif" }}
            >
              💡 The Digital Revolution Waits for No One
            </h2>

            <p
              className="m-0 leading-[1.65]"
              style={{ fontSize: "clamp(17px,4vw,20px)", color: "rgba(255,255,255,.7)" }}
            >
              While you're reading this, your competitors are innovating. The question isn't whether to go digital—it's{" "}
              <strong className="font-bold text-green-400">how fast you can move</strong> and{" "}
              <strong className="font-bold text-green-400">how bold you can be</strong>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
