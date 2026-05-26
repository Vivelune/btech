"use client";

export default function GetStarted() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="rocket-icon">🚀</div>

        <h2 className="headline">
          Ready to start<br />
          your <span className="green">journey</span>?
        </h2>

        <p className="subtext">
          Let&apos;s create something extraordinary together. Your vision, our expertise.
        </p>

        <p className="quote">
          &ldquo;The future belongs to those who believe in the beauty of their dreams.&rdquo; – Let&apos;s make yours a reality. <span className="sparkle">✨</span>
        </p>

        <div className="actions">
          <button className="btn-primary">
            Get Started Today
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </button>

          <button className="btn-secondary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3a9e5f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.44 2 2 0 0 1 3.57 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l1.27-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" />
            </svg>
            +1 215 863 7222
          </button>
        </div>
      </div>

      <div className="chat-fab">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap");

        .wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #edf5ef;
          padding: 48px 24px;
          font-family: "DM Sans", sans-serif;
          position: relative;
        }

        .container {
          width: 100%;
          max-width: 480px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 28px;
        }

        .rocket-icon {
          width: 100px;
          height: 100px;
          background: linear-gradient(145deg, #3a9e5f, #2d7d4a);
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 48px;
          box-shadow: 0 12px 40px rgba(58, 158, 95, 0.3);
        }

        .headline {
          margin: 0;
          font-family: "Syne", sans-serif;
          font-size: clamp(40px, 10vw, 58px);
          font-weight: 800;
          color: #0d1f14;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .green {
          color: #3a9e5f;
        }

        .subtext {
          margin: 0;
          font-size: clamp(18px, 4vw, 22px);
          color: #2c4a36;
          line-height: 1.55;
          font-weight: 400;
        }

        .quote {
          margin: 0;
          font-size: clamp(16px, 3.5vw, 19px);
          font-style: italic;
          color: #4a6b57;
          line-height: 1.65;
        }

        .sparkle {
          font-style: normal;
          color: #d4a017;
        }

        .actions {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 12px;
        }

        .btn-primary {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #3a9e5f;
          color: #ffffff;
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          font-weight: 700;
          padding: 22px 32px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 8px 30px rgba(58, 158, 95, 0.35);
        }

        .btn-primary:hover {
          background: #2d8a4e;
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(58, 158, 95, 0.45);
        }

        .btn-secondary {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: transparent;
          color: #2c4a36;
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          font-weight: 600;
          padding: 22px 32px;
          border-radius: 999px;
          border: 1.5px solid rgba(58, 158, 95, 0.25);
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
          background: rgba(255, 255, 255, 0.6);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.9);
          border-color: #3a9e5f;
          transform: translateY(-2px);
        }

        .chat-fab {
          position: fixed;
          bottom: 32px;
          right: 32px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #3b5bdb;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(59, 91, 219, 0.4);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .chat-fab:hover {
          transform: scale(1.08);
          box-shadow: 0 12px 32px rgba(59, 91, 219, 0.5);
        }
      `}</style>
    </div>
  );
}
