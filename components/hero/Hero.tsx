"use client";

import { useEffect, useRef, useState } from "react";

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll the service panel horizontally per row — handled via CSS animation

  return (
    <section className="hero-section">
      {/* Background */}
      <div className="hero-bg">
        <div className="hero-bg-globe" />
        <div className="hero-bg-grid" />
        <div className="hero-bg-glow" />
      </div>

      <div className="hero-inner">
        {/* LEFT: Hero Copy */}
        <div className="hero-left">
          <div className="hero-badge">
            <span className="hero-badge-icon">✦</span>
            <span>Future of Digital</span>
          </div>

          <h1 className="hero-headline">
            <span className="hero-headline-white">Build the</span>
            <br />
            <span className="hero-headline-green">impossible</span>
          </h1>

          <p className="hero-subtext">
            Transform your vision into reality with our
            <br />
            comprehensive suite of digital services.
          </p>

          <button className="hero-cta">
            Get Started <span className="hero-cta-arrow">→</span>
          </button>
        </div>

        {/* RIGHT: Services Grid */}
        <div className="hero-right">
          <div className="services-table">
            {services.map((row, i) => (
              <div key={i} className="service-row">
                <div className="service-category">{row.category}</div>
                <div className="service-pills-track">
                  <div
                    className="service-pills-inner"
                    style={{ animationDelay: `${i * -3}s` }}
                  >
                    {[...row.items, ...row.items].map((item, j) => (
                      <div key={j} className="service-pill">
                        <span className="pill-icon">{item.icon}</span>
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

      <style jsx>{`
        /* ── Reset / Fonts ── */
        @import url("https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap");

        /* ── Root ── */
        .hero-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #0a1f14;
          font-family: "DM Sans", sans-serif;
        }

        /* ── Background ── */
        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        .hero-bg-globe {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 900px;
          height: 900px;
          border-radius: 50%;
          background: radial-gradient(
            ellipse at center,
            rgba(0, 100, 40, 0.18) 0%,
            rgba(0, 60, 20, 0.08) 45%,
            transparent 75%
          );
        }

        .hero-bg-grid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(
              rgba(0, 200, 80, 0.04) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(0, 200, 80, 0.04) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .hero-bg-glow {
          position: absolute;
          bottom: -120px;
          left: 10%;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(0, 230, 80, 0.12) 0%,
            transparent 70%
          );
          filter: blur(40px);
        }

        /* ── Layout ── */
        .hero-inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
          min-height: 100vh;
        }

        /* ── LEFT ── */
        .hero-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 80px 64px 80px 80px;
          gap: 28px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 999px;
          padding: 8px 18px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.85);
          width: fit-content;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(6px);
        }

        .hero-badge-icon {
          color: #f97316;
          font-size: 14px;
        }

        .hero-headline {
          margin: 0;
          line-height: 1.0;
          font-family: "Syne", sans-serif;
        }

        .hero-headline-white {
          font-size: clamp(52px, 6vw, 80px);
          font-weight: 800;
          color: #ffffff;
          display: block;
        }

        .hero-headline-green {
          font-size: clamp(60px, 7.5vw, 96px);
          font-weight: 800;
          background: linear-gradient(90deg, #4ade80 0%, #a3e635 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: block;
        }

        .hero-subtext {
          margin: 0;
          font-size: 16px;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.6);
          max-width: 380px;
        }

        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #22c55e, #4ade80);
          color: #0a1f14;
          font-family: "DM Sans", sans-serif;
          font-weight: 700;
          font-size: 16px;
          padding: 16px 32px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          width: fit-content;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 0 30px rgba(74, 222, 128, 0.3);
        }

        .hero-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 40px rgba(74, 222, 128, 0.5);
        }

        .hero-cta-arrow {
          font-size: 18px;
        }

        /* ── RIGHT ── */
        .hero-right {
          display: flex;
          align-items: center;
          overflow: hidden;
          border-left: 1px solid rgba(255, 255, 255, 0.07);
          background: rgba(0, 0, 0, 0.15);
        }

        .services-table {
          width: 100%;
        }

        .service-row {
          display: flex;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          min-height: 72px;
        }

        .service-row:first-child {
          border-top: 1px solid rgba(255, 255, 255, 0.07);
        }

        .service-category {
          flex-shrink: 0;
          width: 190px;
          padding: 0 24px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: rgba(255, 255, 255, 0.75);
          text-transform: uppercase;
        }

        /* scrolling pills track */
        .service-pills-track {
          flex: 1;
          overflow: hidden;
          padding: 14px 0;
          border-left: 1px solid rgba(255, 255, 255, 0.07);
        }

        .service-pills-inner {
          display: flex;
          gap: 10px;
          width: max-content;
          animation: scrollPills 22s linear infinite;
        }

        .service-pills-inner:hover {
          animation-play-state: paused;
        }

        @keyframes scrollPills {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .service-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 999px;
          padding: 8px 16px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.82);
          white-space: nowrap;
          background: rgba(255, 255, 255, 0.04);
          cursor: default;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }

        .service-pill:hover {
          background: rgba(74, 222, 128, 0.12);
          border-color: rgba(74, 222, 128, 0.4);
          color: #4ade80;
        }

        .pill-icon {
          font-size: 14px;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .hero-inner {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .hero-left {
            padding: 64px 32px 40px;
          }

          .hero-right {
            border-left: none;
            border-top: 1px solid rgba(255, 255, 255, 0.07);
          }

          .service-category {
            width: 140px;
            font-size: 10px;
            padding: 0 12px;
          }
        }
      `}</style>
    </section>
  );
}
