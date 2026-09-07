import React, { useEffect, useState } from "react";

function Podcast() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".pc-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("pc-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const formats = [
    {
      number: "01",
      title: "Founder Stories",
      text:
        "Direct conversations with founders building ambitious companies from zero."
    },
    {
      number: "02",
      title: "Market Intel",
      text:
        "What is actually happening across Southeast Asia, the Gulf and South Asia."
    },
    {
      number: "03",
      title: "The Operator's Playbook",
      text:
        "Practical lessons from people responsible for building, selling and operating."
    },
    {
      number: "04",
      title: "VC Perspectives",
      text:
        "Conversations around capital, investment decisions and what investors are looking for."
    }
  ];

  const episodes = [
    {
      episode: "EP 05",
      status: "NEW",
      title:
        "Building for the Gulf: What Founders Need to Know Before Entering the Market",
      description:
        "A practical conversation about market entry, relationships, sales and building trust in the Gulf.",
      duration: "42 min",
      date: "May 2025"
    },
    {
      episode: "EP 04",
      status: "",
      title:
        "From Product to Pipeline: The Reality of Enterprise GTM",
      description:
        "Why great products do not automatically create enterprise pipeline — and what operators can do about it.",
      duration: "38 min",
      date: "April 2025"
    },
    {
      episode: "EP 03",
      status: "",
      title:
        "Cybersecurity in the Age of AI",
      description:
        "How AI is changing security teams, products and the threat landscape.",
      duration: "45 min",
      date: "March 2025"
    },
    {
      episode: "EP 02",
      status: "",
      title:
        "The Operator's Guide to Southeast Asia",
      description:
        "What changes when a startup expands across one of the world's most diverse technology markets.",
      duration: "41 min",
      date: "February 2025"
    },
    {
      episode: "EP 01",
      status: "",
      title:
        "Why We Built CodeCap",
      description:
        "The story behind CodeCap Ventures and the venture studio model we are building.",
      duration: "36 min",
      date: "January 2025"
    }
  ];

  const guests = [
    "VC Partners",
    "CISOs",
    "Founders",
    "GTM Operators",
    "AI Engineers",
    "Regulatory Experts",
    "Legal & Structuring",
    "CodeCap Team"
  ];

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

        .pc-nav {
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

        .pc-nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .pc-logo {
          font-size: 25px;
          font-weight: 900;
          letter-spacing: -1.5px;
        }

        .pc-logo span {
          color: #f01965;
        }

        .pc-links {
          display: flex;
          align-items: center;
          gap: 21px;
        }

        .pc-links a {
          color: rgba(255,255,255,.68);
          font-size: 13px;
          font-weight: 700;
          transition: .25s ease;
        }

        .pc-links a:hover,
        .pc-active {
          color: #fff !important;
        }

        .pc-talk {
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

        .pc-menu {
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

        .pc-mobile-menu {
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

        .pc-mobile-menu a {
          display: block;
          padding: 14px;
          border-radius: 12px;
          color: rgba(255,255,255,.7);
          font-size: 13px;
          font-weight: 700;
        }

        /* HERO */

        .pc-hero {
          position: relative;
          min-height: 88vh;
          display: flex;
          align-items: center;
          padding: 150px 7vw 100px;
          overflow: hidden;
        }

        .pc-grid {
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

        .pc-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: .2;
        }

        .pc-glow-one {
          width: 450px;
          height: 450px;
          left: -180px;
          top: 80px;
          background: #f01965;
          animation: pcFloat 8s ease-in-out infinite alternate;
        }

        .pc-glow-two {
          width: 420px;
          height: 420px;
          right: -180px;
          bottom: -40px;
          background: #029fe7;
          animation: pcFloat 10s ease-in-out infinite alternate-reverse;
        }

        @keyframes pcFloat {
          to {
            transform: translate(70px,-45px) scale(1.2);
          }
        }

        .pc-hero-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1180px;
          margin: auto;
        }

        .pc-eyebrow {
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

        .pc-hero h1 {
          margin: 25px 0 0;
          max-width: 950px;
          font-size: clamp(70px,10vw,130px);
          line-height: .8;
          letter-spacing: -7px;
          font-weight: 900;
        }

        .pc-gradient {
          background:
            linear-gradient(
              100deg,
              #f01965,
              #ff5790,
              #029fe7
            );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: pcGradient 5s linear infinite;
        }

        @keyframes pcGradient {
          to {
            background-position: 200% center;
          }
        }

        .pc-hero-copy {
          max-width: 720px;
          margin-top: 35px;
          color: rgba(255,255,255,.56);
          font-size: 16px;
          line-height: 1.85;
        }

        .pc-by {
          margin-top: 25px;
          color: #029fe7;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        /* PLATFORMS */

        .pc-platforms {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-top: 35px;
        }

        .pc-platform {
          padding: 9px 13px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,.1);
          background: rgba(255,255,255,.04);
          color: rgba(255,255,255,.55);
          font-size: 10px;
          font-weight: 800;
        }

        /* SECTIONS */

        .pc-section {
          padding: 110px 7vw;
        }

        .pc-container {
          max-width: 1180px;
          margin: auto;
        }

        .pc-label {
          color: #f01965;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .15em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .pc-title {
          margin: 0;
          font-size: clamp(43px,5vw,72px);
          line-height: .96;
          letter-spacing: -3px;
        }

        .pc-title span {
          color: rgba(255,255,255,.3);
        }

        /* FORMAT */

        .pc-format-grid {
          margin-top: 60px;
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 15px;
        }

        .pc-format {
          min-height: 290px;
          padding: 25px;
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,.08);
          background: rgba(255,255,255,.035);
          transition: .3s ease;
        }

        .pc-format:hover {
          transform: translateY(-8px);
          border-color: rgba(240,25,101,.3);
          background: rgba(255,255,255,.055);
        }

        .pc-format-number {
          color: #029fe7;
          font-size: 10px;
          font-weight: 900;
        }

        .pc-format h3 {
          margin: 75px 0 13px;
          font-size: 20px;
          letter-spacing: -.5px;
        }

        .pc-format p {
          margin: 0;
          color: rgba(255,255,255,.42);
          font-size: 12px;
          line-height: 1.7;
        }

        /* EPISODES */

        .pc-episode-list {
          margin-top: 60px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .pc-episode {
          display: grid;
          grid-template-columns: 90px 1fr 110px;
          gap: 25px;
          align-items: center;
          padding: 25px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,.08);
          background: rgba(255,255,255,.03);
          transition: .3s ease;
        }

        .pc-episode:hover {
          transform: translateX(7px);
          border-color: rgba(2,159,231,.25);
          background: rgba(255,255,255,.05);
        }

        .pc-episode-no {
          color: #029fe7;
          font-size: 11px;
          font-weight: 900;
        }

        .pc-new {
          display: inline-flex;
          margin-left: 7px;
          padding: 4px 6px;
          border-radius: 5px;
          background: #f01965;
          color: #fff;
          font-size: 7px;
          vertical-align: middle;
        }

        .pc-episode h3 {
          margin: 0 0 8px;
          font-size: 18px;
          line-height: 1.3;
        }

        .pc-episode p {
          margin: 0;
          color: rgba(255,255,255,.4);
          font-size: 11px;
          line-height: 1.6;
        }

        .pc-episode-meta {
          color: rgba(255,255,255,.35);
          font-size: 9px;
          font-weight: 800;
          text-align: right;
          line-height: 1.8;
        }

        /* GUEST WALL */

        .pc-guest-section {
          background: #f4f5f7;
          color: #08090d;
        }

        .pc-guest-section .pc-title span {
          color: #747983;
        }

        .pc-guest-grid {
          margin-top: 55px;
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 12px;
        }

        .pc-guest {
          min-height: 150px;
          padding: 20px;
          border-radius: 19px;
          background: #fff;
          border: 1px solid #e0e3e8;
          display: flex;
          align-items: flex-end;
          font-size: 15px;
          font-weight: 900;
          transition: .3s ease;
        }

        .pc-guest:hover {
          transform: translateY(-7px);
          box-shadow: 0 25px 60px rgba(0,0,0,.08);
        }

        .pc-guest-number {
          position: absolute;
          color: #f01965;
          font-size: 9px;
        }

        /* SUBSCRIBE */

        .pc-subscribe {
          padding: 130px 7vw;
          text-align: center;
          background:
            radial-gradient(
              circle at center,
              rgba(240,25,101,.13),
              transparent 42%
            );
        }

        .pc-subscribe-inner {
          max-width: 850px;
          margin: auto;
        }

        .pc-subscribe h2 {
          margin: 0;
          font-size: clamp(48px,6vw,78px);
          line-height: .94;
          letter-spacing: -4px;
        }

        .pc-subscribe p {
          max-width: 600px;
          margin: 25px auto 30px;
          color: rgba(255,255,255,.44);
          font-size: 13px;
          line-height: 1.8;
        }

        .pc-sub-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 9px;
        }

        .pc-sub-link {
          padding: 12px 16px;
          border-radius: 11px;
          border: 1px solid rgba(255,255,255,.1);
          background: rgba(255,255,255,.04);
          color: rgba(255,255,255,.7);
          font-size: 10px;
          font-weight: 900;
          transition: .25s ease;
        }

        .pc-sub-link:hover {
          background: #fff;
          color: #08090d;
        }

        /* GUEST CTA */

        .pc-guest-cta {
          margin-top: 80px;
          padding: 30px;
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,.08);
          background: rgba(255,255,255,.035);
        }

        .pc-guest-cta h3 {
          margin: 0;
          font-size: 24px;
        }

        .pc-guest-cta p {
          margin: 10px auto 20px;
        }

        .pc-guest-button {
          display: inline-flex;
          padding: 13px 18px;
          border-radius: 12px;
          background: #f01965;
          color: #fff;
          font-size: 10px;
          font-weight: 900;
        }

        /* FOOTER */

        .pc-footer {
          padding: 35px 7vw;
          border-top: 1px solid rgba(255,255,255,.08);
          background: #07080b;
        }

        .pc-footer-inner {
          max-width: 1180px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .pc-footer-logo {
          font-size: 23px;
          font-weight: 900;
        }

        .pc-footer-logo span {
          color: #f01965;
        }

        .pc-footer-text {
          color: rgba(255,255,255,.38);
          font-size: 11px;
          line-height: 1.7;
          text-align: right;
        }

        /* REVEAL */

        .pc-reveal {
          opacity: 0;
          transform: translateY(40px);
          transition:
            opacity .8s ease,
            transform .8s cubic-bezier(.2,.8,.2,1);
        }

        .pc-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* MOBILE */

        @media (max-width: 1050px) {

          .pc-links,
          .pc-talk {
            display: none;
          }

          .pc-menu {
            display: block;
          }

          .pc-format-grid {
            grid-template-columns: 1fr 1fr;
          }

          .pc-guest-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 760px) {

          .pc-nav {
            top: 8px;
            width: calc(100% - 18px);
            border-radius: 18px;
          }

          .pc-hero {
            min-height: auto;
            padding: 130px 20px 80px;
          }

          .pc-hero h1 {
            font-size: 64px;
            letter-spacing: -4px;
          }

          .pc-hero-copy {
            font-size: 14px;
          }

          .pc-section {
            padding: 80px 20px;
          }

          .pc-title {
            font-size: 44px;
            letter-spacing: -2px;
          }

          .pc-format-grid {
            grid-template-columns: 1fr;
          }

          .pc-format {
            min-height: 230px;
          }

          .pc-format h3 {
            margin-top: 55px;
          }

          .pc-episode {
            grid-template-columns: 1fr;
            gap: 10px;
            padding: 22px;
          }

          .pc-episode-meta {
            text-align: left;
          }

          .pc-guest-grid {
            grid-template-columns: 1fr;
          }

          .pc-guest {
            min-height: 110px;
          }

          .pc-subscribe {
            padding: 95px 20px;
          }

          .pc-subscribe h2 {
            font-size: 52px;
            letter-spacing: -3px;
          }

          .pc-footer {
            padding: 28px 20px;
          }

          .pc-footer-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .pc-footer-text {
            text-align: left;
          }
        }
      `}</style>

      <div>

        {/* NAVBAR */}

        <nav className="pc-nav">

          <div className="pc-nav-inner">

            <a href="/" className="pc-logo">
              Code<span>Cap</span>
            </a>

            <div className="pc-links">

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

              <a
                href="/podcast"
                className="pc-active"
              >
                Podcast
              </a>

            </div>

            <button
              className="pc-talk"
              onClick={() =>
                (window.location.href =
                  "mailto:hello@codecap.ai")
              }
            >
              Talk to us
            </button>

            <button
              className="pc-menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "×" : "☰"}
            </button>

          </div>

          {menuOpen && (
            <div className="pc-mobile-menu">

              <a href="/">Home</a>

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

        <section className="pc-hero">

          <div className="pc-grid"></div>

          <div className="pc-glow pc-glow-one"></div>
          <div className="pc-glow pc-glow-two"></div>

          <div className="pc-hero-inner pc-reveal">

            <div className="pc-eyebrow">
              By CodeCap Ventures
            </div>

            <h1>
              The
              <br />
              <span className="pc-gradient">
                Build Brief.
              </span>
            </h1>

            <p className="pc-hero-copy">
              A no-fluff podcast for founders and
              operators building in Southeast Asia,
              the Gulf, and South Asia. Every episode
              is a direct conversation with people who
              are in the room — building companies,
              closing deals, raising capital, and
              navigating the chaos of early-stage in
              high-growth markets.
            </p>

            <div className="pc-by">
              Listen wherever you get your podcasts
            </div>

            <div className="pc-platforms">

              <div className="pc-platform">
                Spotify
              </div>

              <div className="pc-platform">
                Apple Podcasts
              </div>

              <div className="pc-platform">
                YouTube
              </div>

              <div className="pc-platform">
                Pocket Casts
              </div>

            </div>

          </div>

        </section>

        {/* FORMAT */}

        <section className="pc-section">

          <div className="pc-container">

            <div className="pc-reveal">

              <div className="pc-label">
                The Format
              </div>

              <h2 className="pc-title">
                Four ways to
                <br />
                <span>get inside the room.</span>
              </h2>

            </div>

            <div className="pc-format-grid">

              {formats.map((format) => (
                <div
                  className="pc-format pc-reveal"
                  key={format.number}
                >

                  <div className="pc-format-number">
                    {format.number}
                  </div>

                  <h3>
                    {format.title}
                  </h3>

                  <p>
                    {format.text}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* EPISODES */}

        <section className="pc-section">

          <div className="pc-container">

            <div className="pc-reveal">

              <div className="pc-label">
                Episodes
              </div>

              <h2 className="pc-title">
                Recent
                <br />
                <span>conversations.</span>
              </h2>

            </div>

            <div className="pc-episode-list">

              {episodes.map((episode) => (
                <article
                  className="pc-episode pc-reveal"
                  key={episode.episode}
                >

                  <div className="pc-episode-no">

                    {episode.episode}

                    {episode.status && (
                      <span className="pc-new">
                        {episode.status}
                      </span>
                    )}

                  </div>

                  <div>

                    <h3>
                      {episode.title}
                    </h3>

                    <p>
                      {episode.description}
                    </p>

                  </div>

                  <div className="pc-episode-meta">
                    {episode.duration}
                    <br />
                    {episode.date}
                  </div>

                </article>
              ))}

            </div>

          </div>

        </section>

        {/* GUEST WALL */}

        <section className="pc-section pc-guest-section">

          <div className="pc-container">

            <div className="pc-reveal">

              <div className="pc-label">
                Guest Wall
              </div>

              <h2 className="pc-title">
                Voices from
                <br />
                <span>the ecosystem.</span>
              </h2>

            </div>

            <div className="pc-guest-grid">

              {guests.map((guest, index) => (
                <div
                  className="pc-guest pc-reveal"
                  key={guest}
                >
                  <div>
                    <div
                      className="pc-guest-number"
                    >
                      0{index + 1}
                    </div>

                    {guest}
                  </div>
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* SUBSCRIBE */}

        <section className="pc-subscribe">

          <div className="pc-subscribe-inner pc-reveal">

            <div className="pc-label">
              Subscribe
            </div>

            <h2>
              Never Miss
              <br />
              an Episode.
            </h2>

            <p>
              Follow The Build Brief wherever you listen
              to podcasts. New conversations with founders,
              operators, investors and technology leaders.
            </p>

            <div className="pc-sub-links">

              <a
                href="#"
                className="pc-sub-link"
              >
                Spotify
              </a>

              <a
                href="#"
                className="pc-sub-link"
              >
                Apple Podcasts
              </a>

              <a
                href="#"
                className="pc-sub-link"
              >
                YouTube
              </a>

              <a
                href="#"
                className="pc-sub-link"
              >
                RSS Feed
              </a>

            </div>

            <div className="pc-guest-cta">

              <h3>
                Want to be a guest?
              </h3>

              <p>
                Building, operating or investing in the
                markets we cover? Pitch a guest.
              </p>

              <a
                href="mailto:podcast@codecap.ai"
                className="pc-guest-button"
              >
                Pitch a Guest →
              </a>

            </div>

          </div>

        </section>

        {/* FOOTER */}

        <footer className="pc-footer">

          <div className="pc-footer-inner">

            <div className="pc-footer-logo">
              Code<span>Cap</span>
            </div>

            <div className="pc-footer-text">
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

export default Podcast;