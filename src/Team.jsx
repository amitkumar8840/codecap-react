import React, { useEffect, useState } from "react";

function Team() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".tm-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("tm-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    const cards = document.querySelectorAll(".tm-tilt");

    const moveCard = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX =
        ((y - rect.height / 2) / rect.height) * -5;

      const rotateY =
        ((x - rect.width / 2) / rect.width) * 5;

      card.style.transform = `
        perspective(1100px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)
      `;
    };

    const resetCard = (e) => {
      e.currentTarget.style.transform =
        "perspective(1100px) rotateX(0deg) rotateY(0deg) translateY(0)";
    };

    cards.forEach((card) => {
      card.addEventListener("mousemove", moveCard);
      card.addEventListener("mouseleave", resetCard);
    });

    return () => {
      observer.disconnect();

      cards.forEach((card) => {
        card.removeEventListener("mousemove", moveCard);
        card.removeEventListener("mouseleave", resetCard);
      });
    };
  }, []);

  const team = [
    {
      name: "Baburaj Varma",
      role: "Co-Founder & Managing Partner",
      location:
        "Singapore · Cybersecurity · Enterprise GTM · AMEA",
      description:
        "25+ year enterprise cybersecurity veteran. Trend Micro VP Technical Leader AMEA and Netskope Channel Sales Director India. At CodeCap, he leads the firm, partnership strategy, enterprise relationships and product commercialization.",
      linkedin:
        "https://www.linkedin.com/in/baburajvarma/",
      number: "01"
    },
    {
      name: "Tarun Gupta",
      role: "Co-Founder & Partner",
      location:
        "India / SEA · Security Operations · Managed Security · Deep Tech",
      description:
        "Trend Micro Director Security Operations as a Service AMEA and Chief Delivery Officer at TRUGlobal. At CodeCap, he leads technical engagements across the cybersecurity portfolio.",
      linkedin:
        "https://www.linkedin.com/in/tarun-gupta-66b924a/",
      number: "02"
    },
    {
      name: "Atin Verma",
      role: "Consulting Partner",
      location: "Marketing & Brand",
      description:
        "Senior marketing and GTM professional with experience including Tenable India/South Asia.",
      linkedin:
        "https://www.linkedin.com/in/atinverma9/",
      number: "03"
    },
    {
      name: "Naveena Chowdary Koyyalamudi",
      role: "Consulting Partner",
      location: "Operations",
      description:
        "University of Colorado Denver background with experience across Plantillegence and Optum Global Solutions International B.V.",
      linkedin:
        "https://www.linkedin.com/in/naveenack/",
      number: "04"
    }
  ];

  const principles = [
    {
      number: "01",
      title: "Execution over advice",
      text:
        "We get involved in the work, not just the strategy."
    },
    {
      number: "02",
      title: "Practitioners who sell",
      text:
        "Our experience comes from operating inside real markets."
    },
    {
      number: "03",
      title: "Compliant by design",
      text:
        "Strong execution needs the right governance and structure."
    },
    {
      number: "04",
      title: "Selective, not scalable",
      text:
        "We choose the companies and founders we work with carefully."
    }
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

        /* NAV */

        .tm-nav {
          position: fixed;
          z-index: 1000;
          top: 14px;
          left: 50%;
          transform: translateX(-50%);
          width: min(1180px, calc(100% - 32px));
          padding: 14px 18px;
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(10,11,17,.76);
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 60px rgba(0,0,0,.3);
        }

        .tm-nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .tm-logo {
          font-size: 25px;
          font-weight: 900;
          letter-spacing: -1.5px;
        }

        .tm-logo span {
          color: #f01965;
        }

        .tm-links {
          display: flex;
          align-items: center;
          gap: 21px;
        }

        .tm-links a {
          color: rgba(255,255,255,.7);
          font-size: 13px;
          font-weight: 700;
          transition: .25s ease;
        }

        .tm-links a:hover,
        .tm-active {
          color: #fff !important;
        }

        .tm-talk {
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

        .tm-menu {
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

        .tm-mobile-menu {
          display: none;
        }

        /* HERO */

        .tm-hero {
          position: relative;
          min-height: 88vh;
          display: flex;
          align-items: center;
          padding: 155px 7vw 100px;
          overflow: hidden;
        }

        .tm-grid {
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

        .tm-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: .22;
        }

        .tm-orb-one {
          width: 420px;
          height: 420px;
          left: -170px;
          top: 100px;
          background: #f01965;
          animation: tmFloat 8s ease-in-out infinite alternate;
        }

        .tm-orb-two {
          width: 400px;
          height: 400px;
          right: -170px;
          top: 180px;
          background: #029fe7;
          animation: tmFloat 10s ease-in-out infinite alternate-reverse;
        }

        @keyframes tmFloat {
          to {
            transform: translate(70px,-50px) scale(1.18);
          }
        }

        .tm-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          width: 100%;
          margin: auto;
        }

        .tm-eyebrow {
          display: inline-flex;
          padding: 8px 13px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,.13);
          background: rgba(255,255,255,.04);
          color: rgba(255,255,255,.65);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .15em;
          text-transform: uppercase;
        }

        .tm-hero h1 {
          max-width: 1000px;
          margin: 25px 0 0;
          font-size: clamp(60px,8vw,110px);
          line-height: .88;
          letter-spacing: -6px;
          font-weight: 900;
        }

        .tm-gradient {
          background:
            linear-gradient(
              100deg,
              #f01965,
              #ff5791,
              #029fe7
            );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: tmGradient 5s linear infinite;
        }

        @keyframes tmGradient {
          to {
            background-position: 200% center;
          }
        }

        .tm-hero-copy {
          max-width: 700px;
          margin-top: 32px;
          color: rgba(255,255,255,.58);
          font-size: 16px;
          line-height: 1.85;
        }

        /* COMMON */

        .tm-section {
          padding: 110px 7vw;
        }

        .tm-container {
          max-width: 1180px;
          margin: auto;
        }

        .tm-label {
          margin-bottom: 16px;
          color: #f01965;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .16em;
          text-transform: uppercase;
        }

        .tm-title {
          margin: 0;
          font-size: clamp(43px,5vw,72px);
          line-height: .97;
          letter-spacing: -3px;
        }

        .tm-title span {
          color: rgba(255,255,255,.3);
        }

        /* TEAM GRID */

        .tm-team-grid {
          margin-top: 60px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .tm-card {
          position: relative;
          padding: 32px;
          min-height: 430px;
          border-radius: 28px;
          border: 1px solid rgba(255,255,255,.09);
          background:
            radial-gradient(
              circle at 90% 10%,
              rgba(240,25,101,.12),
              transparent 30%
            ),
            linear-gradient(
              145deg,
              rgba(255,255,255,.07),
              rgba(255,255,255,.025)
            );
          overflow: hidden;
          transform-style: preserve-3d;
          transition: transform .25s ease, border .3s ease;
        }

        .tm-card:hover {
          border-color: rgba(240,25,101,.3);
        }

        .tm-card::before {
          content: "";
          position: absolute;
          width: 210px;
          height: 210px;
          right: -90px;
          bottom: -90px;
          border-radius: 50%;
          background: #029fe7;
          filter: blur(65px);
          opacity: .09;
        }

        .tm-card-number {
          color: #029fe7;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .12em;
        }

        .tm-avatar {
          width: 80px;
          height: 80px;
          margin-top: 45px;
          border-radius: 24px;
          display: grid;
          place-items: center;
          background:
            linear-gradient(
              135deg,
              #f01965,
              #029fe7
            );
          font-size: 27px;
          font-weight: 900;
          box-shadow:
            12px 12px 0 rgba(240,25,101,.1);
        }

        .tm-card h3 {
          margin: 27px 0 5px;
          font-size: 28px;
          letter-spacing: -1px;
        }

        .tm-role {
          color: #f01965;
          font-size: 11px;
          font-weight: 900;
        }

        .tm-location {
          margin-top: 13px;
          color: rgba(255,255,255,.38);
          font-size: 10px;
          line-height: 1.6;
        }

        .tm-description {
          margin-top: 22px;
          color: rgba(255,255,255,.52);
          font-size: 13px;
          line-height: 1.75;
        }

        .tm-linkedin {
          display: inline-flex;
          margin-top: 22px;
          padding: 9px 12px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,.1);
          background: rgba(255,255,255,.04);
          color: rgba(255,255,255,.72);
          font-size: 10px;
          font-weight: 900;
          transition: .25s ease;
        }

        .tm-linkedin:hover {
          background: #fff;
          color: #08090d;
          transform: translateY(-3px);
        }

        /* PRINCIPLES */

        .tm-principles {
          background: #f4f5f7;
          color: #090a0e;
        }

        .tm-principles .tm-title span {
          color: #737983;
        }

        .tm-principles-grid {
          margin-top: 60px;
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 15px;
        }

        .tm-principle {
          min-height: 280px;
          padding: 25px;
          border-radius: 24px;
          background: #fff;
          border: 1px solid #e1e4e8;
          transition: .3s ease;
        }

        .tm-principle:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 60px rgba(0,0,0,.08);
        }

        .tm-principle-number {
          color: #f01965;
          font-size: 10px;
          font-weight: 900;
        }

        .tm-principle h3 {
          margin: 70px 0 12px;
          font-size: 21px;
          letter-spacing: -.5px;
        }

        .tm-principle p {
          margin: 0;
          color: #737983;
          font-size: 12px;
          line-height: 1.7;
        }

        /* QUOTE */

        .tm-statement {
          padding: 140px 7vw;
          text-align: center;
          background:
            radial-gradient(
              circle at center,
              rgba(2,159,231,.1),
              transparent 38%
            );
        }

        .tm-statement-inner {
          max-width: 950px;
          margin: auto;
        }

        .tm-statement-mark {
          color: #f01965;
          font-size: 60px;
          line-height: .5;
          font-weight: 900;
        }

        .tm-statement h2 {
          margin: 30px 0;
          font-size: clamp(40px,5vw,68px);
          line-height: 1;
          letter-spacing: -3px;
        }

        .tm-statement p {
          max-width: 620px;
          margin: auto;
          color: rgba(255,255,255,.43);
          line-height: 1.8;
          font-size: 14px;
        }

        /* CTA */

        .tm-cta {
          padding: 120px 7vw;
          border-top: 1px solid rgba(255,255,255,.07);
          text-align: center;
        }

        .tm-cta h2 {
          margin: 0;
          font-size: clamp(45px,6vw,82px);
          line-height: .95;
          letter-spacing: -4px;
        }

        .tm-cta p {
          max-width: 600px;
          margin: 25px auto 32px;
          color: rgba(255,255,255,.48);
          line-height: 1.8;
        }

        .tm-cta-button {
          display: inline-flex;
          padding: 16px 25px;
          border-radius: 14px;
          background: #fff;
          color: #08090d;
          font-size: 11px;
          font-weight: 900;
          transition: .3s ease;
        }

        .tm-cta-button:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(255,255,255,.12);
        }

        /* FOOTER */

        .tm-footer {
          padding: 35px 7vw;
          border-top: 1px solid rgba(255,255,255,.08);
          background: #07080b;
        }

        .tm-footer-inner {
          max-width: 1180px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .tm-footer-logo {
          font-size: 23px;
          font-weight: 900;
        }

        .tm-footer-logo span {
          color: #f01965;
        }

        .tm-footer-text {
          color: rgba(255,255,255,.38);
          font-size: 11px;
          text-align: right;
          line-height: 1.7;
        }

        /* REVEAL */

        .tm-reveal {
          opacity: 0;
          transform: translateY(40px);
          transition:
            opacity .8s ease,
            transform .8s cubic-bezier(.2,.8,.2,1);
        }

        .tm-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* MOBILE */

        @media (max-width: 1050px) {

          .tm-links,
          .tm-talk {
            display: none;
          }

          .tm-menu {
            display: block;
          }

          .tm-mobile-menu {
            position: absolute;
            display: block;
            top: calc(100% + 8px);
            left: 0;
            right: 0;
            padding: 10px;
            border-radius: 18px;
            border: 1px solid rgba(255,255,255,.1);
            background: rgba(10,11,17,.97);
            backdrop-filter: blur(20px);
          }

          .tm-mobile-menu a {
            display: block;
            padding: 14px;
            border-radius: 12px;
            color: rgba(255,255,255,.7);
            font-size: 13px;
            font-weight: 700;
          }

          .tm-principles-grid {
            grid-template-columns: 1fr 1fr;
          }

        }

        @media (max-width: 760px) {

          .tm-nav {
            top: 8px;
            width: calc(100% - 18px);
            border-radius: 18px;
          }

          .tm-hero {
            min-height: auto;
            padding: 130px 20px 85px;
          }

          .tm-hero h1 {
            font-size: 55px;
            letter-spacing: -3px;
          }

          .tm-hero-copy {
            font-size: 14px;
          }

          .tm-section {
            padding: 85px 20px;
          }

          .tm-title {
            font-size: 44px;
            letter-spacing: -2px;
          }

          .tm-team-grid {
            grid-template-columns: 1fr;
          }

          .tm-card {
            min-height: auto;
            padding: 27px;
          }

          .tm-principles-grid {
            grid-template-columns: 1fr;
          }

          .tm-principle {
            min-height: 230px;
          }

          .tm-principle h3 {
            margin-top: 55px;
          }

          .tm-statement {
            padding: 100px 20px;
          }

          .tm-statement h2 {
            font-size: 43px;
          }

          .tm-cta {
            padding: 90px 20px;
          }

          .tm-cta h2 {
            font-size: 50px;
          }

          .tm-footer {
            padding: 28px 20px;
          }

          .tm-footer-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .tm-footer-text {
            text-align: left;
          }

        }

      `}</style>

      <div>

        {/* NAVBAR */}

        <nav className="tm-nav">

          <div className="tm-nav-inner">

            <a href="/" className="tm-logo">
              Code<span>Cap</span>
            </a>

            <div className="tm-links">

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

              <a
                href="/team"
                className="tm-active"
              >
                Team
              </a>

              <a href="/insights">
                Insights
              </a>

              <a href="/podcast">
                Podcast
              </a>

            </div>

            <button
              className="tm-talk"
              onClick={() =>
                (window.location.href =
                  "mailto:hello@codecap.ai")
              }
            >
              Talk to us
            </button>

            <button
              className="tm-menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "×" : "☰"}
            </button>

          </div>

          {menuOpen && (
            <div className="tm-mobile-menu">

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

        <section className="tm-hero">

          <div className="tm-grid"></div>

          <div className="tm-orb tm-orb-one"></div>
          <div className="tm-orb tm-orb-two"></div>

          <div className="tm-hero-inner tm-reveal">

            <div className="tm-eyebrow">
              The People Behind CodeCap
            </div>

            <h1>
              Operators.
              <br />
              <span className="tm-gradient">
                Practitioners.
              </span>
              <br />
              Builders.
            </h1>

            <p className="tm-hero-copy">
              CodeCap is built by people who have spent
              years inside cybersecurity, enterprise
              technology, marketing, operations and
              high-growth markets.
            </p>

          </div>

        </section>

        {/* TEAM */}

        <section className="tm-section">

          <div className="tm-container">

            <div className="tm-reveal">

              <div className="tm-label">
                Our Team
              </div>

              <h2 className="tm-title">
                Experience that
                <br />
                <span>gets involved.</span>
              </h2>

            </div>

            <div className="tm-team-grid">

              {team.map((person) => (
                <article
                  className="tm-card tm-tilt tm-reveal"
                  key={person.name}
                >

                  <div className="tm-card-number">
                    TEAM / {person.number}
                  </div>

                  <div className="tm-avatar">
                    {person.name
                      .split(" ")
                      .map((word) => word[0])
                      .slice(0, 2)
                      .join("")}
                  </div>

                  <h3>
                    {person.name}
                  </h3>

                  <div className="tm-role">
                    {person.role}
                  </div>

                  <div className="tm-location">
                    {person.location}
                  </div>

                  <p className="tm-description">
                    {person.description}
                  </p>

                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="tm-linkedin"
                  >
                    LinkedIn ↗
                  </a>

                </article>
              ))}

            </div>

          </div>

        </section>

        {/* PRINCIPLES */}

        <section className="tm-section tm-principles">

          <div className="tm-container">

            <div className="tm-reveal">

              <div className="tm-label">
                How We Work
              </div>

              <h2 className="tm-title">
                Our operating
                <br />
                <span>principles.</span>
              </h2>

            </div>

            <div className="tm-principles-grid">

              {principles.map((principle) => (
                <div
                  className="tm-principle tm-reveal"
                  key={principle.number}
                >

                  <div className="tm-principle-number">
                    {principle.number}
                  </div>

                  <h3>
                    {principle.title}
                  </h3>

                  <p>
                    {principle.text}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* STATEMENT */}

        <section className="tm-statement">

          <div className="tm-statement-inner tm-reveal">

            <div className="tm-statement-mark">
              “
            </div>

            <h2>
              We don't just advise
              <br />
              founders.
            </h2>

            <p>
              We embed with them — bringing the
              experience, relationships and execution
              required to turn ambitious ideas into
              operating businesses.
            </p>

          </div>

        </section>

        {/* CTA */}

        <section className="tm-cta">

          <div className="tm-reveal">

            <div className="tm-label">
              Work With Us
            </div>

            <h2>
              Let's build
              <br />
              something real.
            </h2>

            <p>
              Building an early-stage company in AI,
              cybersecurity or enterprise SaaS?
              Let's talk.
            </p>

            <a
              href="mailto:hello@codecap.ai"
              className="tm-cta-button"
            >
              Start a Conversation →
            </a>

          </div>

        </section>

        {/* FOOTER */}

        <footer className="tm-footer">

          <div className="tm-footer-inner">

            <div className="tm-footer-logo">
              Code<span>Cap</span>
            </div>

            <div className="tm-footer-text">
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

export default Team;