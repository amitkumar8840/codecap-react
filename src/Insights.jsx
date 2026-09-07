import React, { useEffect, useState } from "react";

function Insights() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const elements = document.querySelectorAll(".in-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [activeFilter]);

  const posts = [
    {
      category: "GTM · Southeast Asia",
      filter: "GTM & Sales",
      title:
        "Why Most AI Startups in SEA Fail at GTM (And What the Survivors Do Differently)",
      time: "8 min",
      date: "March 2025",
    },
    {
      category: "Legal · Gulf Markets",
      filter: "Markets",
      title:
        "The DIFC vs ADGM Decision: A Founder's Practical Guide to Gulf Entity Setup",
      time: "10 min",
      date: "March 2025",
    },
    {
      category: "Cybersecurity · Venture Build",
      filter: "AI & Cybersecurity",
      title:
        "Building a Threat Intelligence Product from Zero: What We Learned in 12 Months",
      time: "14 min",
      date: "February 2025",
    },
    {
      category: "Deal Structure · South Asia",
      filter: "Fundraising",
      title:
        "Why Indian Founders Push Back on Equity — and Why We Changed Our Approach",
      time: "7 min",
      date: "February 2025",
    },
    {
      category: "Venture Building · Opinion",
      filter: "Venture Building",
      title:
        "The Venture Studio Model Is Broken. Here's What We're Doing Instead.",
      time: "9 min",
      date: "January 2025",
    },
    {
      category: "AI · GTM",
      filter: "GTM & Sales",
      title:
        "AI-Powered Sales Intelligence: The Tools That Are Actually Moving Pipeline in 2025",
      time: "11 min",
      date: "January 2025",
    },
    {
      category: "Fundraising · VC",
      filter: "Fundraising",
      title:
        "What SEA and Gulf VCs Are Actually Funding in 2025 — and What They're Passing On",
      time: "13 min",
      date: "December 2024",
    },
    {
      category: "Markets · Singapore",
      filter: "Markets",
      title:
        "Building a Startup in Singapore as a Foreign Founder: What Nobody Tells You",
      time: "10 min",
      date: "December 2024",
    },
    {
      category: "Cybersecurity · Enterprise",
      filter: "AI & Cybersecurity",
      title:
        "Zero-Trust in Practice: Why Most Implementations Fail Before They Start",
      time: "11 min",
      date: "November 2024",
    },
  ];

  const filters = [
    "All",
    "AI & Cybersecurity",
    "Venture Building",
    "GTM & Sales",
    "Fundraising",
    "Markets",
    "Deep Tech",
  ];

  const filteredPosts =
    activeFilter === "All"
      ? posts
      : posts.filter((post) => post.filter === activeFilter);

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #08090d;
          color: #fff;
          font-family: "Open Sans", Arial, sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button,
        input {
          font-family: inherit;
        }

        /* NAVBAR */

        .in-nav {
          position: fixed;
          z-index: 1000;
          top: 14px;
          left: 50%;
          transform: translateX(-50%);
          width: min(1180px, calc(100% - 32px));
          padding: 14px 18px;
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(10,11,17,.78);
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 60px rgba(0,0,0,.3);
        }

        .in-nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .in-logo {
          font-size: 25px;
          font-weight: 900;
          letter-spacing: -1.5px;
        }

        .in-logo span {
          color: #f01965;
        }

        .in-links {
          display: flex;
          align-items: center;
          gap: 21px;
        }

        .in-links a {
          color: rgba(255,255,255,.68);
          font-size: 13px;
          font-weight: 700;
          transition: .25s ease;
        }

        .in-links a:hover,
        .in-active {
          color: #fff !important;
        }

        .in-talk {
          border: 0;
          padding: 13px 20px;
          border-radius: 13px;
          background: linear-gradient(
            135deg,
            #f01965,
            #b70b6d
          );
          color: #fff;
          font-weight: 800;
          cursor: pointer;
        }

        .in-menu {
          display: none;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,.14);
          background: rgba(255,255,255,.05);
          color: #fff;
          font-size: 20px;
          cursor: pointer;
        }

        /* HERO */

        .in-hero {
          position: relative;
          min-height: 78vh;
          display: flex;
          align-items: center;
          padding: 150px 7vw 90px;
          overflow: hidden;
        }

        .in-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(
              rgba(255,255,255,.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,.035) 1px,
              transparent 1px
            );
          background-size: 60px 60px;
          mask-image: linear-gradient(
            to bottom,
            black,
            transparent
          );
        }

        .in-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: .2;
        }

        .in-orb-one {
          width: 420px;
          height: 420px;
          left: -180px;
          top: 80px;
          background: #f01965;
          animation: inFloat 8s ease-in-out infinite alternate;
        }

        .in-orb-two {
          width: 400px;
          height: 400px;
          right: -180px;
          bottom: -50px;
          background: #029fe7;
          animation: inFloat 10s ease-in-out infinite alternate-reverse;
        }

        @keyframes inFloat {
          to {
            transform: translate(70px,-45px) scale(1.2);
          }
        }

        .in-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          width: 100%;
          margin: auto;
        }

        .in-eyebrow {
          display: inline-flex;
          padding: 8px 13px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,.13);
          background: rgba(255,255,255,.04);
          color: rgba(255,255,255,.62);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .15em;
          text-transform: uppercase;
        }

        .in-hero h1 {
          margin: 25px 0 0;
          max-width: 1000px;
          font-size: clamp(58px,8vw,105px);
          line-height: .9;
          letter-spacing: -6px;
          font-weight: 900;
        }

        .in-gradient {
          background:
            linear-gradient(
              100deg,
              #f01965,
              #ff5890,
              #029fe7
            );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: inGradient 5s linear infinite;
        }

        @keyframes inGradient {
          to {
            background-position: 200% center;
          }
        }

        .in-hero-copy {
          max-width: 700px;
          margin-top: 30px;
          color: rgba(255,255,255,.56);
          font-size: 16px;
          line-height: 1.85;
        }

        /* FEATURED */

        .in-section {
          padding: 100px 7vw;
        }

        .in-container {
          max-width: 1180px;
          margin: auto;
        }

        .in-label {
          color: #f01965;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .15em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .in-feature {
          position: relative;
          padding: 45px;
          border-radius: 32px;
          border: 1px solid rgba(255,255,255,.1);
          background:
            radial-gradient(
              circle at 90% 10%,
              rgba(240,25,101,.16),
              transparent 30%
            ),
            linear-gradient(
              145deg,
              rgba(255,255,255,.07),
              rgba(255,255,255,.025)
            );
          overflow: hidden;
        }

        .in-feature::before {
          content: "";
          position: absolute;
          width: 300px;
          height: 300px;
          right: -130px;
          bottom: -150px;
          border-radius: 50%;
          background: #029fe7;
          filter: blur(90px);
          opacity: .1;
        }

        .in-feature-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .in-feature-category {
          color: #029fe7;
          font-size: 10px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: .1em;
        }

        .in-feature-mark {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border-radius: 15px;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.08);
          font-weight: 900;
        }

        .in-feature h2 {
          position: relative;
          z-index: 1;
          max-width: 900px;
          margin: 30px 0 18px;
          font-size: clamp(34px,4vw,58px);
          line-height: 1;
          letter-spacing: -2.5px;
        }

        .in-feature p {
          position: relative;
          z-index: 1;
          max-width: 820px;
          margin: 0;
          color: rgba(255,255,255,.52);
          font-size: 14px;
          line-height: 1.8;
        }

        .in-feature-meta {
          position: relative;
          z-index: 1;
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 30px;
          color: rgba(255,255,255,.4);
          font-size: 10px;
          font-weight: 800;
        }

        .in-read {
          display: inline-flex;
          position: relative;
          z-index: 1;
          margin-top: 30px;
          padding: 13px 17px;
          border-radius: 12px;
          background: #fff;
          color: #08090d;
          font-size: 10px;
          font-weight: 900;
          transition: .3s ease;
        }

        .in-read:hover {
          transform: translateY(-4px);
        }

        /* FILTER */

        .in-filter-wrap {
          margin-top: 80px;
        }

        .in-filter {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 25px;
        }

        .in-filter button {
          padding: 10px 14px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,.09);
          background: rgba(255,255,255,.035);
          color: rgba(255,255,255,.52);
          font-size: 10px;
          font-weight: 800;
          cursor: pointer;
          transition: .25s ease;
        }

        .in-filter button:hover,
        .in-filter button.active {
          background: #f01965;
          border-color: #f01965;
          color: #fff;
        }

        /* POSTS */

        .in-post-grid {
          margin-top: 35px;
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 16px;
        }

        .in-post {
          min-height: 330px;
          padding: 25px;
          display: flex;
          flex-direction: column;
          border-radius: 23px;
          border: 1px solid rgba(255,255,255,.08);
          background: rgba(255,255,255,.035);
          transition:
            transform .3s ease,
            border .3s ease,
            background .3s ease;
        }

        .in-post:hover {
          transform: translateY(-8px);
          border-color: rgba(240,25,101,.3);
          background: rgba(255,255,255,.055);
        }

        .in-post-category {
          color: #029fe7;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .in-post h3 {
          margin: 25px 0 15px;
          font-size: 21px;
          line-height: 1.18;
          letter-spacing: -.7px;
        }

        .in-post-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-top: auto;
          padding-top: 25px;
          color: rgba(255,255,255,.34);
          font-size: 9px;
          font-weight: 800;
        }

        .in-post-arrow {
          color: #f01965;
          font-size: 18px;
        }

        /* NEWSLETTER */

        .in-newsletter {
          padding: 120px 7vw;
          background:
            radial-gradient(
              circle at center,
              rgba(240,25,101,.12),
              transparent 42%
            );
        }

        .in-newsletter-box {
          max-width: 900px;
          margin: auto;
          text-align: center;
        }

        .in-newsletter h2 {
          margin: 0;
          font-size: clamp(45px,6vw,75px);
          line-height: .95;
          letter-spacing: -4px;
        }

        .in-newsletter p {
          max-width: 580px;
          margin: 25px auto 30px;
          color: rgba(255,255,255,.45);
          line-height: 1.8;
          font-size: 13px;
        }

        .in-form {
          display: flex;
          max-width: 550px;
          margin: auto;
          padding: 5px;
          border-radius: 15px;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.1);
        }

        .in-form input {
          min-width: 0;
          flex: 1;
          border: 0;
          outline: 0;
          padding: 14px;
          background: transparent;
          color: #fff;
          font-size: 12px;
        }

        .in-form input::placeholder {
          color: rgba(255,255,255,.32);
        }

        .in-form button {
          border: 0;
          padding: 13px 18px;
          border-radius: 11px;
          background: #fff;
          color: #08090d;
          font-size: 10px;
          font-weight: 900;
          cursor: pointer;
        }

        /* FOOTER */

        .in-footer {
          padding: 35px 7vw;
          border-top: 1px solid rgba(255,255,255,.08);
          background: #07080b;
        }

        .in-footer-inner {
          max-width: 1180px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .in-footer-logo {
          font-size: 23px;
          font-weight: 900;
        }

        .in-footer-logo span {
          color: #f01965;
        }

        .in-footer-text {
          color: rgba(255,255,255,.38);
          font-size: 11px;
          line-height: 1.7;
          text-align: right;
        }

        /* REVEAL */

        .in-reveal {
          opacity: 0;
          transform: translateY(40px);
          transition:
            opacity .8s ease,
            transform .8s cubic-bezier(.2,.8,.2,1);
        }

        .in-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* MOBILE */

        @media (max-width: 1050px) {

          .in-links,
          .in-talk {
            display: none;
          }

          .in-menu {
            display: block;
          }

          .in-mobile-menu {
            position: absolute;
            top: calc(100% + 8px);
            left: 0;
            right: 0;
            padding: 10px;
            border-radius: 18px;
            border: 1px solid rgba(255,255,255,.1);
            background: rgba(10,11,17,.97);
            backdrop-filter: blur(20px);
          }

          .in-mobile-menu a {
            display: block;
            padding: 14px;
            border-radius: 12px;
            color: rgba(255,255,255,.7);
            font-size: 13px;
            font-weight: 700;
          }

          .in-post-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 760px) {

          .in-nav {
            top: 8px;
            width: calc(100% - 18px);
            border-radius: 18px;
          }

          .in-hero {
            min-height: auto;
            padding: 130px 20px 75px;
          }

          .in-hero h1 {
            font-size: 53px;
            letter-spacing: -3px;
          }

          .in-hero-copy {
            font-size: 14px;
          }

          .in-section {
            padding: 75px 20px;
          }

          .in-feature {
            padding: 27px;
            border-radius: 25px;
          }

          .in-feature h2 {
            font-size: 35px;
          }

          .in-post-grid {
            grid-template-columns: 1fr;
          }

          .in-post {
            min-height: 290px;
          }

          .in-filter-wrap {
            margin-top: 60px;
          }

          .in-newsletter {
            padding: 90px 20px;
          }

          .in-newsletter h2 {
            font-size: 50px;
            letter-spacing: -3px;
          }

          .in-form {
            flex-direction: column;
            padding: 7px;
          }

          .in-form button {
            width: 100%;
          }

          .in-footer {
            padding: 28px 20px;
          }

          .in-footer-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .in-footer-text {
            text-align: left;
          }
        }
      `}</style>

      <div>

        {/* NAVBAR */}

        <nav className="in-nav">

          <div className="in-nav-inner">

            <a href="/" className="in-logo">
              Code<span>Cap</span>
            </a>

            <div className="in-links">

              <a href="/venture-studio">
                Venture Studio
              </a>

              <a href="/services">
                Services
              </a>

              <a href="/products">
                Products
              </a>

              <a href="/portfolio">
                Portfolio
              </a>

              <a href="/team">
                Team
              </a>

              <a
                href="/insights"
                className="in-active"
              >
                Insights
              </a>

              <a href="/podcast">
                Podcast
              </a>

            </div>

            <button
              className="in-talk"
              onClick={() =>
                (window.location.href =
                  "mailto:hello@codecap.ai")
              }
            >
              Talk to us
            </button>

            <button
              className="in-menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "×" : "☰"}
            </button>

          </div>

          {menuOpen && (
            <div className="in-mobile-menu">

              <a href="/">
                Home
              </a>

              <a href="/venture-studio">
                Venture Studio
              </a>

              <a href="/services">
                Services
              </a>

              <a href="/products">
                Products
              </a>

              <a href="/portfolio">
                Portfolio
              </a>

              <a href="/team">
                Team
              </a>

              <a href="/insights">
                Insights
              </a>

              <a href="/podcast">
                Podcast
              </a>

              <a href="mailto:hello@codecap.ai">
                Talk to us →
              </a>

            </div>
          )}

        </nav>

        {/* HERO */}

        <section className="in-hero">

          <div className="in-grid"></div>

          <div className="in-orb in-orb-one"></div>
          <div className="in-orb in-orb-two"></div>

          <div className="in-hero-inner in-reveal">

            <div className="in-eyebrow">
              Insights
            </div>

            <h1>
              Thinking from
              <br />
              the{" "}
              <span className="in-gradient">
                studio floor.
              </span>
            </h1>

            <p className="in-hero-copy">
              Not keynote wisdom. Not recycled LinkedIn
              takes. What we're seeing from inside
              early-stage companies across Southeast Asia,
              the Gulf, and South Asia — raw, operational,
              and direct.
            </p>

          </div>

        </section>

        {/* FEATURED */}

        <section className="in-section">

          <div className="in-container">

            <div className="in-label in-reveal">
              Featured
            </div>

            <article className="in-feature in-reveal">

              <div className="in-feature-top">

                <div className="in-feature-category">
                  Cybersecurity · AI
                </div>

                <div className="in-feature-mark">
                  01
                </div>

              </div>

              <h2>
                AI Security in 2025:
                <br />
                The Threat Landscape Is
                Changing Faster Than the
                Products
              </h2>

              <p>
                The security landscape around AI is
                changing faster than most products can
                adapt. Here's what we're seeing from
                inside enterprise cybersecurity and
                early-stage product building.
              </p>

              <div className="in-feature-meta">
                <span>CodeCap Team</span>
                <span>12 min read</span>
                <span>April 2025</span>
              </div>

              <a
                href="#posts"
                className="in-read"
              >
                Read article →
              </a>

            </article>

            {/* FILTERS */}

            <div
              className="in-filter-wrap in-reveal"
              id="posts"
            >

              <div className="in-label">
                Explore Insights
              </div>

              <div className="in-filter">

                {filters.map((filter) => (
                  <button
                    key={filter}
                    className={
                      activeFilter === filter
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      setActiveFilter(filter)
                    }
                  >
                    {filter}
                  </button>
                ))}

              </div>

            </div>

            {/* POSTS */}

            <div className="in-post-grid">

              {filteredPosts.map((post, index) => (
                <article
                  className="in-post in-reveal"
                  key={post.title}
                >

                  <div className="in-post-category">
                    {post.category}
                  </div>

                  <h3>
                    {post.title}
                  </h3>

                  <div className="in-post-bottom">

                    <span>
                      {post.time} · {post.date}
                    </span>

                    <span className="in-post-arrow">
                      →
                    </span>

                  </div>

                </article>
              ))}

            </div>

          </div>

        </section>

        {/* NEWSLETTER */}

        <section className="in-newsletter">

          <div className="in-newsletter-box in-reveal">

            <div className="in-label">
              Stay in the Loop
            </div>

            <h2>
              Get Insights
              <br />
              in your inbox.
            </h2>

            <p>
              Practical thinking from the studio on AI,
              cybersecurity, venture building, GTM,
              fundraising and high-growth markets.
            </p>

            <form
              className="in-form"
              onSubmit={(e) => e.preventDefault()}
            >

              <input
                type="email"
                placeholder="Your email address"
              />

              <button type="submit">
                Subscribe
              </button>

            </form>

          </div>

        </section>

        {/* FOOTER */}

        <footer className="in-footer">

          <div className="in-footer-inner">

            <div className="in-footer-logo">
              Code<span>Cap</span>
            </div>

            <div className="in-footer-text">
              © 2025 CodeCap Ventures · Singapore · UAE · India
              <br />
              hello@codecap.ai
            </div>

          </div>

        </footer>

      </div>
    </>
  );
}

export default Insights;