"use client";

export default function WebDevCard() {
  return (
    <div className="wrapper">
      <div className="card">
        <div className="image-container">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop"
            alt="Web Development Dashboard"
            className="card-image"
          />
        </div>

        <div className="content">
          <h2 className="headline">Web Development</h2>

          <p className="body">
            Create stunning websites that drive results. From responsive designs
            to powerful web applications, we build fast, secure, and scalable
            solutions that convert visitors into customers.
          </p>

          <div className="features">
            <div className="feature-item">
              <span className="dot" />
              Custom Websites
            </div>
            <div className="feature-item">
              <span className="dot" />
              E-commerce
            </div>
            <div className="feature-item">
              <span className="dot" />
              Web Applications
            </div>
            <div className="feature-item">
              <span className="dot" />
              SEO Optimization
            </div>
          </div>

          <a href="#" className="explore-link">
            Explore services in menu <span className="arrow">→</span>
          </a>
        </div>
      </div>

      <div className="fab-group">
        <button className="fab fab-chat">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
        <button className="fab fab-up">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap");

        .wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #dff0e4;
          padding: 32px 20px;
          font-family: "DM Sans", sans-serif;
          position: relative;
        }

        .card {
          width: 100%;
          max-width: 480px;
          background: #eaf5ee;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 80, 30, 0.1);
        }

        .image-container {
          margin: 12px;
          width: calc(100% - 24px);
          height: 260px;
          overflow: hidden;
          border-radius: 20px;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .content {
          padding: 28px 32px 36px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .headline {
          margin: 0;
          font-family: "Syne", sans-serif;
          font-size: clamp(36px, 8vw, 48px);
          font-weight: 800;
          color: #0d2318;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .body {
          margin: 0;
          font-size: clamp(16px, 3.5vw, 18px);
          color: #2e4d38;
          line-height: 1.7;
          font-weight: 400;
        }

        .features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px 8px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 16px;
          font-weight: 500;
          color: #1a3a24;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #3a9e5f;
          flex-shrink: 0;
        }

        .explore-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 16px;
          font-weight: 600;
          color: #3a9e5f;
          text-decoration: none;
          margin-top: 4px;
          transition: gap 0.2s;
        }

        .explore-link:hover {
          gap: 10px;
        }

        .arrow {
          font-size: 18px;
        }

        .fab-group {
          position: fixed;
          bottom: 32px;
          right: 28px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .fab {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .fab-chat {
          background: #3b5bdb;
          box-shadow: 0 8px 24px rgba(59, 91, 219, 0.4);
        }

        .fab-up {
          background: #1a3a24;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
        }

        .fab:hover {
          transform: scale(1.08);
        }
      `}</style>
    </div>
  );
}
