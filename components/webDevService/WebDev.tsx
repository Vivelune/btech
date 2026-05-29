export default function WebDevCard() {
  const features = ["Custom Websites", "E-commerce", "Web Applications", "SEO Optimization"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800&family=DM+Sans:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }
      `}</style>

      <section
        className="flex min-h-screen w-full flex-col items-center justify-center gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:gap-14 lg:px-16 lg:py-16"
        style={{ background: "#f0faf3", fontFamily: "'DM Sans', sans-serif" }}
      >
        <div className="flex w-full max-w-xl flex-col gap-5 lg:flex-1 lg:max-w-none">
          <h2
            className="m-0 font-extrabold leading-tight tracking-tight"
            style={{ fontSize: "clamp(28px,5vw,48px)", color: "#0d2318", fontFamily: "'Syne', sans-serif" }}
          >
            Web Development
          </h2>

          <p className="m-0 leading-relaxed" style={{ fontSize: "clamp(14px,2vw,17px)", color: "#2e4d38" }}>
            Create stunning websites that drive results. From responsive designs to powerful web
            applications, we build fast, secure, and scalable solutions that convert visitors into customers.
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
            className="overflow-hidden rounded-2xl"
            style={{
              height: "clamp(200px,40vw,340px)",
              boxShadow: "0 16px 48px rgba(0,60,20,.12)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop"
              alt="Web Development"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
