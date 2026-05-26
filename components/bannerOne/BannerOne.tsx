"use client";

export default function BannerOne() {
  return (
    <div className="wrapper">
      <div className="card">
        <div className="card-bg" />
        <div className="card-bg-glow" />

        <div className="content">
          <div className="icon-circle">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>

          <h2 className="headline">
            💡 The Digital Revolution Waits for No One
          </h2>

          <p className="body">
            While you&apos;re reading this, your competitors are innovating. The
            question isn&apos;t whether to go digital—it&apos;s{" "}
            <strong className="highlight">how fast you can move</strong> and{" "}
            <strong className="highlight">how bold you can be</strong>.
          </p>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:ital,wght@0,400;0,500;0,700&display=swap");

        .wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0d1f15;
          padding: 24px;
          font-family: "DM Sans", sans-serif;
        }

        .card {
          position: relative;
          width: 100%;
          max-width: 420px;
          border-radius: 28px;
          overflow: hidden;
          padding: 56px 36px 60px;
          box-shadow: 0 32px 80px rgba(0, 0, 0, 0.5);
        }

        .card-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(160deg, #1a4030 0%, #0f2a1e 40%, #0a1f14 100%);
          z-index: 0;
        }

        .card-bg-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse at 30% 110%,
            rgba(34, 197, 94, 0.18) 0%,
            transparent 65%
          );
          z-index: 0;
        }

        .content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 32px;
        }

        .icon-circle {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: linear-gradient(135deg, #22c55e, #16a34a);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 32px rgba(34, 197, 94, 0.35);
          flex-shrink: 0;
        }

        .headline {
          margin: 0;
          font-family: "Syne", sans-serif;
          font-size: clamp(32px, 8vw, 44px);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.15;
          letter-spacing: -0.01em;
        }

        .body {
          margin: 0;
          font-size: clamp(17px, 4vw, 20px);
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 400;
        }

        .highlight {
          color: #4ade80;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
}
