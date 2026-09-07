import React, { useEffect, useState } from "react";

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const reveals = document.querySelectorAll(".pf-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("pf-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    reveals.forEach((item) => observer.observe(item));

    const cards = document.querySelectorAll(".pf-tilt");

    const moveCard = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX =
        ((y - rect.height / 2) / rect.height) * -6;

      const rotateY =
        ((x - rect.width / 2) / rect.width) * 6;

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

  const projects = [
    {
      name: "InfinityOmnia",
      company: "Built by Wisebound",
      url: "https://www.infinityomnia.com",
      tags: [
        "Enterprise Operations",
        "AI Platform",
        "Pre-seed",
        "MVP"
      ],
      tagline: "One Platform. Infinite Possibilities.",
      description:
        "A unified operations platform bringing service desk, incident management, IoT and digital twin, executive reporting, command & control, mobile workforce, audit and compliance, and edge computing into one platform.",
      engagement:
        "GTM · Sales · Market Entry — SEA & Gulf",
      stats: [
        ["300+", "Organisations"],
        ["150K+", "Users"],
        ["9", "Modules"],
        ["99.9%", "Uptime"]
      ],
      features: [
        "InfinityCore",
        "InfinityAware",
        "InfinityAIQ",
        "InfinityCXO",
        "InfinityCMD",
        "InfinityStay",
        "InfinityOps",
        "InfinityAssure",
        "InfinityEdge"
      ],
      industries: [
        "Hospitality",
        "Healthcare",
        "Manufacturing",
        "Government",
        "Facilities",
        "Retail"
      ],
      buyers: [
        "COOs",
        "VP Operations",
        "IT Directors",
        "CISOs",
        "CXOs"
      ],
      markets: [
        "Singapore",
        "UAE",
        "KSA",
        "India"
      ]
    },
    {
      name: "Veptr",
      company: "Built by Criuslogic",
      url: "https://veptr.ai",
      tags: [
        "GRC",
        "AI-Powered Compliance",
        "Pre-seed",
        "MVP"
      ],
      tagline: "AI-powered Governance, Risk & Compliance.",
      description:
        "An AI-powered Governance, Risk & Compliance platform with an integrated LLM assistant for audits, controls and evidence.",
      engagement:
        "GTM · Sales · Market Entry — Gulf & SEA",
      stats: [
        ["AI", "Assistant"],
        ["GRC", "Platform"],
        ["ISO", "Ready"],
        ["Global", "Market"]
      ],
      features: [
        "AI chatbot",
        "Policy summarisation",
        "Automated workflow",
        "Risk management",
        "Compliance tracking",
        "Vendor management",
        "Custom framework builder"
      ],
      industries: [
        "FinTech",
        "Financial Services",
        "Healthcare",
        "SaaS Enterprise",
        "Government"
      ],
      buyers: [
        "GRC Teams",
        "CISOs",
        "Compliance Leads",
        "Risk Managers",
        "Auditors"
      ],
      markets: [
        "UAE / Dubai HQ",
        "Singapore",
        "Global"
      ]
    },
    {
      name: "Abhra",
      company: "Built by CrownTrend India",
      url: "https://abhra.world",
      tags: [
        "Cloud Security",
        "Live"
      ],
      tagline: "Sovereign cloud security.",
      description:
        "CodeCap distributes and commercialises Abhra across Southeast Asia, the Gulf and South Asian markets.",
      engagement:
        "Distribution Partner · Commercial Partner",
      stats: [
        ["1,894+", "Checks"],
        ["25", "Frameworks"],
        ["3", "Clouds"],
        ["Live", "Product"]
      ],
      features: [
        "AWS security checks",
        "Azure security checks",
        "GCP security checks",
        "25 compliance frameworks",
        "Desktop-first deployment",
        "Air-gappable architecture"
      ],
      industries: [
        "Enterprise",
        "Regulated Economy",
        "Cybersecurity"
      ],
      buyers: [
        "Security Teams",
        "CISOs",
        "IT Leaders",
        "Compliance Teams"
      ],
      markets: [
        "Singapore",
        "UAE",
        "KSA",
        "India"
      ]
    }
  ];

  const current = projects[activeProject];

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

        button {
          font-family: inherit;
        }

        .pf-page {
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 10% 15%,
              rgba(240,25,101,.12),
              transparent 28%
            ),
            radial-gradient(
              circle at 90% 25%,
              rgba(2,159,231,.11),
              transparent 28%
            ),
            #08090d;
        }

        /* NAVBAR */

        .pf-nav {
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

        .pf-nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .pf-logo {
          font-size: 25px;
          font-weight: 900;
          letter-spacing: -1.5px;
        }

        .pf-logo span {
          color: #f01965;
        }

        .pf-links {
          display: flex;
          align-items: center;
          gap: 21px;
        }

        .pf-links a {
          color: rgba(255,255,255,.7);
          font-size: 13px;
          font-weight: 700;
          transition: .25s ease;
        }

        .pf-links a:hover,
        .pf-active {
          color: #fff !important;
        }

        .pf-talk {
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
          box-shadow: 0 10px 30px rgba(240,25,101,.25);
        }

        .pf-menu {
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

        .pf-hero {
          min-height: 90vh;
          position: relative;
          display: flex;
          align-items: center;
          padding: 155px 7vw 100px;
          overflow: hidden;
        }

        .pf-grid {
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

        .pf-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(110px);
          opacity: .23;
        }

        .pf-glow-one {
          left: -190px;
          top: 60px;
          background: #f01965;
          animation: pfGlow 8s ease-in-out infinite alternate;
        }

        .pf-glow-two {
          right: -190px;
          bottom: -60px;
          background: #029fe7;
          animation: pfGlow 10s ease-in-out infinite alternate-reverse;
        }

        @keyframes pfGlow {
          to {
            transform: translate(80px,-45px) scale(1.2);
          }
        }

        .pf-hero-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1200px;
          margin: auto;
        }

        .pf-label {
          display: inline-flex;
          padding: 8px 13px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,.13);
          background: rgba(255,255,255,.04);
          color: rgba(255,255,255,.68);
          font-size: 11px;
          font-weight: 900;
          letter-spacing: .14em;
          text-transform: uppercase;
        }

        .pf-hero h1 {
          max-width: 1050px;
          margin: 25px 0 0;
          font-size: clamp(58px,8vw,108px);
          line-height: .9;
          letter-spacing: -6px;
          font-weight: 900;
        }

        .pf-gradient {
          background:
            linear-gradient(
              100deg,
              #f01965,
              #ff4d8b,
              #029fe7
            );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: pfGradient 5s linear infinite;
        }

        @keyframes pfGradient {
          to {
            background-position: 200% center;
          }
        }

        .pf-hero-copy {
          max-width: 720px;
          margin-top: 32px;
          color: rgba(255,255,255,.6);
          font-size: 16px;
          line-height: 1.85;
        }

        .pf-badge {
          display: inline-flex;
          margin-top: 32px;
          padding: 9px 13px;
          border-radius: 100px;
          background: rgba(240,25,101,.1);
          border: 1px solid rgba(240,25,101,.2);
          color: #ff4b88;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        /* PROJECT SELECTOR */

        .pf-section {
          padding: 110px 7vw;
        }

        .pf-container {
          max-width: 1180px;
          margin: auto;
        }

        .pf-section-label {
          color: #f01965;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: .15em;
          text-transform: uppercase;
          margin-bottom: 17px;
        }

        .pf-title {
          margin: 0;
          font-size: clamp(42px,5vw,72px);
          line-height: .98;
          letter-spacing: -3px;
        }

        .pf-title span {
          color: rgba(255,255,255,.3);
        }

        .pf-selector {
          margin-top: 60px;
          display: grid;
          grid-template-columns: .55fr 1.45fr;
          gap: 22px;
        }

        .pf-project-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .pf-project-button {
          padding: 21px;
          border-radius: 17px;
          border: 1px solid rgba(255,255,255,.09);
          background: rgba(255,255,255,.035);
          color: rgba(255,255,255,.58);
          text-align: left;
          cursor: pointer;
          transition: .35s ease;
        }

        .pf-project-button:hover {
          transform: translateX(5px);
          color: #fff;
        }

        .pf-project-button.active {
          transform: translateX(8px);
          color: #fff;
          border-color: rgba(240,25,101,.42);
          background:
            linear-gradient(
              100deg,
              rgba(240,25,101,.14),
              rgba(2,159,231,.07)
            );
        }

        .pf-project-number {
          display: block;
          color: #029fe7;
          font-size: 10px;
          font-weight: 900;
          margin-bottom: 10px;
        }

        .pf-project-name {
          font-size: 20px;
          font-weight: 900;
        }

        .pf-project-status {
          display: block;
          margin-top: 7px;
          color: rgba(255,255,255,.38);
          font-size: 10px;
        }

        /* MAIN PROJECT */

        .pf-project-card {
          min-height: 650px;
          padding: 40px;
          border-radius: 32px;
          border: 1px solid rgba(255,255,255,.1);
          background:
            radial-gradient(
              circle at 90% 5%,
              rgba(240,25,101,.15),
              transparent 28%
            ),
            linear-gradient(
              145deg,
              rgba(255,255,255,.07),
              rgba(255,255,255,.025)
            );
          position: relative;
          overflow: hidden;
        }

        .pf-project-card::after {
          content: "";
          position: absolute;
          width: 320px;
          height: 320px;
          right: -160px;
          bottom: -160px;
          border-radius: 50%;
          background: #029fe7;
          filter: blur(100px);
          opacity: .1;
        }

        .pf-project-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 25px;
        }

        .pf-project-top h3 {
          margin: 0;
          font-size: clamp(40px,5vw,68px);
          letter-spacing: -3px;
          line-height: .9;
        }

        .pf-company {
          margin-top: 10px;
          color: rgba(255,255,255,.4);
          font-size: 12px;
        }

        .pf-live {
          padding: 8px 11px;
          border-radius: 100px;
          background: rgba(240,25,101,.1);
          color: #ff4c89;
          font-size: 9px;
          font-weight: 900;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .pf-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 27px;
        }

        .pf-tag {
          padding: 7px 9px;
          border-radius: 100px;
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.08);
          color: rgba(255,255,255,.55);
          font-size: 9px;
          font-weight: 800;
        }

        .pf-tag:first-child {
          color: #029fe7;
        }

        .pf-tagline {
          margin-top: 30px;
          color: #f01965;
          font-size: 14px;
          font-weight: 900;
        }

        .pf-description {
          max-width: 800px;
          color: rgba(255,255,255,.55);
          line-height: 1.8;
          margin-top: 13px;
        }

        .pf-engagement {
          display: inline-flex;
          margin-top: 22px;
          padding: 9px 12px;
          border-radius: 100px;
          background: rgba(2,159,231,.08);
          border: 1px solid rgba(2,159,231,.16);
          color: #52c6f4;
          font-size: 9px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: .06em;
        }

        /* STATS */

        .pf-stats {
          margin-top: 35px;
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 10px;
        }

        .pf-stat {
          padding: 18px;
          border-radius: 15px;
          border: 1px solid rgba(255,255,255,.07);
          background: rgba(255,255,255,.04);
        }

        .pf-stat strong {
          display: block;
          font-size: 23px;
        }

        .pf-stat small {
          display: block;
          margin-top: 5px;
          color: rgba(255,255,255,.38);
          font-size: 9px;
          text-transform: uppercase;
        }

        /* DETAILS */

        .pf-detail-grid {
          margin-top: 35px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .pf-detail-box {
          padding: 20px;
          border-radius: 17px;
          background: rgba(255,255,255,.035);
          border: 1px solid rgba(255,255,255,.07);
        }

        .pf-detail-box h4 {
          margin: 0 0 15px;
          color: #f01965;
          font-size: 10px;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .pf-chip-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .pf-chip {
          padding: 6px 8px;
          border-radius: 8px;
          background: rgba(255,255,255,.05);
          color: rgba(255,255,255,.52);
          font-size: 9px;
        }

        .pf-project-link {
          display: inline-flex;
          margin-top: 27px;
          padding: 13px 17px;
          border-radius: 12px;
          background: #fff;
          color: #08090d;
          font-size: 11px;
          font-weight: 900;
          transition: .3s ease;
        }

        .pf-project-link:hover {
          transform: translateY(-4px);
        }

        /* PORTFOLIO VISUAL */

        .pf-visual-section {
          background: #f4f5f7;
          color: #090a0e;
        }

        .pf-visual-section .pf-title span {
          color: #747983;
        }

        .pf-visual-grid {
          margin-top: 60px;
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 18px;
        }

        .pf-visual-card {
          min-height: 350px;
          padding: 27px;
          border-radius: 27px;
          background: #fff;
          border: 1px solid #e0e3e8;
          position: relative;
          overflow: hidden;
          transition: transform .25s ease, box-shadow .25s ease;
          transform-style: preserve-3d;
        }

        .pf-visual-card:hover {
          box-shadow: 0 35px 80px rgba(0,0,0,.1);
        }

        .pf-visual-card::after {
          content: "";
          position: absolute;
          width: 180px;
          height: 180px;
          right: -80px;
          bottom: -80px;
          border-radius: 50%;
          background: #f01965;
          filter: blur(45px);
          opacity: .1;
        }

        .pf-visual-card:nth-child(2)::after {
          background: #029fe7;
        }

        .pf-visual-card:nth-child(3)::after {
          background: #f01965;
        }

        .pf-visual-number {
          color: #029fe7;
          font-size: 10px;
          font-weight: 900;
        }

        .pf-visual-icon {
          width: 70px;
          height: 70px;
          margin-top: 55px;
          border-radius: 22px;
          display: grid;
          place-items: center;
          background: #101118;
          color: #fff;
          font-size: 27px;
          box-shadow: 10px 10px 0 rgba(240,25,101,.1);
        }

        .pf-visual-card:nth-child(2) .pf-visual-icon {
          box-shadow: 10px 10px 0 rgba(2,159,231,.12);
        }

        .pf-visual-card h3 {
          margin: 27px 0 10px;
          font-size: 27px;
          letter-spacing: -1px;
        }

        .pf-visual-card p {
          color: #737983;
          font-size: 13px;
          line-height: 1.7;
        }

        /* CTA */

        .pf-cta {
          padding: 150px 7vw;
          text-align: center;
          background:
            radial-gradient(
              circle at center,
              rgba(240,25,101,.15),
              transparent 40%
            );
        }

        .pf-cta h2 {
          max-width: 950px;
          margin: auto;
          font-size: clamp(48px,7vw,92px);
          line-height: .94;
          letter-spacing: -5px;
        }

        .pf-cta p {
          max-width: 650px;
          margin: 28px auto 35px;
          color: rgba(255,255,255,.5);
          line-height: 1.8;
        }

        .pf-cta-button {
          display: inline-flex;
          padding: 17px 28px;
          border-radius: 15px;
          background: #fff;
          color: #08090d;
          font-weight: 900;
          transition: .3s ease;
        }

        .pf-cta-button:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(255,255,255,.15);
        }

        /* FOOTER */

        .pf-footer {
          padding: 35px 7vw;
          border-top: 1px solid rgba(255,255,255,.08);
          background: #07080b;
        }

        .pf-footer-inner {
          max-width: 1180px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .pf-footer-logo {
          font-size: 23px;
          font-weight: 900;
        }

        .pf-footer-logo span {
          color: #f01965;
        }

        .pf-footer-text {
          color: rgba(255,255,255,.4);
          font-size: 12px;
          text-align: right;
        }

        /* REVEAL */

        .pf-reveal {
          opacity: 0;
          transform: translateY(45px);
          transition:
            opacity .8s ease,
            transform .8s cubic-bezier(.2,.8,.2,1);
        }

        .pf-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* MOBILE */

        @media (max-width: 1050px) {

          .pf-links,
          .pf-talk {
            display: none;
          }

          .pf-menu {
            display: block;
          }

          .pf-selector {
            grid-template-columns: 1fr;
          }

          .pf-project-list {
            display: grid;
            grid-template-columns: repeat(3,1fr);
          }

          .pf-project-button.active {
            transform: translateY(-5px);
          }

          .pf-visual-grid {
            grid-template-columns: 1fr 1fr;
          }

        }

        @media (max-width: 760px) {

          .pf-nav {
            top: 8px;
            width: calc(100% - 18px);
            border-radius: 18px;
          }

          .pf-mobile-menu {
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

          .pf-mobile-menu a {
            display: block;
            padding: 14px;
            border-radius: 12px;
            color: rgba(255,255,255,.72);
            font-weight: 700;
          }

          .pf-hero {
            min-height: auto;
            padding: 130px 20px 80px;
          }

          .pf-hero h1 {
            font-size: 54px;
            letter-spacing: -3px;
          }

          .pf-hero-copy {
            font-size: 15px;
          }

          .pf-section {
            padding: 85px 20px;
          }

          .pf-title {
            font-size: 43px;
            letter-spacing: -2px;
          }

          .pf-project-list {
            grid-template-columns: 1fr;
          }

          .pf-project-button.active {
            transform: translateX(5px);
          }

          .pf-project-card {
            padding: 27px;
            min-height: auto;
          }

          .pf-project-top {
            flex-direction: column;
          }

          .pf-project-top h3 {
            font-size: 50px;
          }

          .pf-stats {
            grid-template-columns: 1fr 1fr;
          }

          .pf-detail-grid {
            grid-template-columns: 1fr;
          }

          .pf-visual-grid {
            grid-template-columns: 1fr;
          }

          .pf-visual-card {
            min-height: 300px;
          }

          .pf-cta {
            padding: 100px 20px;
          }

          .pf-cta h2 {
            font-size: 52px;
            letter-spacing: -3px;
          }

          .pf-footer {
            padding: 28px 20px;
          }

          .pf-footer-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .pf-footer-text {
            text-align: left;
          }

        }

      `}</style>

      <div className="pf-page">

        {/* NAVBAR */}

        <nav className="pf-nav">

          <div className="pf-nav-inner">

            <a href="/" className="pf-logo">
              Code<span>Cap</span>
            </a>

            <div className="pf-links">

              <a href="/venture-studio">
                Venture Studio
              </a>

              <a href="/services">
                Services
              </a>

              <a href="/products">
                Products
              </a>

              <a
                href="/portfolio"
                className="pf-active"
              >
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

            </div>

            <button
              className="pf-talk"
              onClick={() =>
                (window.location.href =
                  "mailto:hello@codecap.ai")
              }
            >
              Talk to us
            </button>

            <button
              className="pf-menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "×" : "☰"}
            </button>

          </div>

          {menuOpen && (
            <div className="pf-mobile-menu">

              <a
                href="/"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>

              <a
                href="/venture-studio"
                onClick={() => setMenuOpen(false)}
              >
                Venture Studio
              </a>

              <a
                href="/services"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </a>

              <a
                href="/products"
                onClick={() => setMenuOpen(false)}
              >
                Products
              </a>

              <a
                href="/portfolio"
                onClick={() => setMenuOpen(false)}
              >
                Portfolio
              </a>

              <a
                href="/team"
                onClick={() => setMenuOpen(false)}
              >
                Team
              </a>

              <a
                href="/insights"
                onClick={() => setMenuOpen(false)}
              >
                Insights
              </a>

              <a
                href="/podcast"
                onClick={() => setMenuOpen(false)}
              >
                Podcast
              </a>

              <a
                href="mailto:hello@codecap.ai"
                onClick={() => setMenuOpen(false)}
              >
                Talk to us →
              </a>

            </div>
          )}

        </nav>

        {/* HERO */}

        <section className="pf-hero">

          <div className="pf-grid"></div>

          <div className="pf-glow pf-glow-one"></div>
          <div className="pf-glow pf-glow-two"></div>

          <div className="pf-hero-inner pf-reveal">

            <div className="pf-label">
              CodeCap Portfolio
            </div>

            <h1>
              Startups we're
              <br />
              building
              <br />
              <span className="pf-gradient">
                with.
              </span>
            </h1>

            <p className="pf-hero-copy">
              Beyond CodeCap's own products, we actively
              embed with early-stage startups as a venture
              studio partner — providing GTM execution,
              product advisory, sales, and regional market
              entry across Southeast Asia, the Gulf, and
              South Asia.
            </p>

            <div className="pf-badge">
              Active Engagements · Pre-seed / MVP Stage
            </div>

          </div>

        </section>

        {/* PROJECTS */}

        <section className="pf-section">

          <div className="pf-container">

            <div className="pf-reveal">

              <div className="pf-section-label">
                Active Portfolio
              </div>

              <h2 className="pf-title">
                Companies we
                <br />
                <span>work inside.</span>
              </h2>

            </div>

            <div className="pf-selector">

              <div className="pf-project-list pf-reveal">

                {projects.map((project, index) => (
                  <button
                    key={project.name}
                    className={
                      activeProject === index
                        ? "pf-project-button active"
                        : "pf-project-button"
                    }
                    onClick={() =>
                      setActiveProject(index)
                    }
                  >

                    <span className="pf-project-number">
                      PROJECT / 0{index + 1}
                    </span>

                    <span className="pf-project-name">
                      {project.name}
                    </span>

                    <span className="pf-project-status">
                      {project.tags.join(" · ")}
                    </span>

                  </button>
                ))}

              </div>

              <div className="pf-project-card pf-reveal">

                <div className="pf-project-top">

                  <div>

                    <h3>
                      {current.name}
                    </h3>

                    <div className="pf-company">
                      {current.company}
                    </div>

                  </div>

                  <div className="pf-live">
                    Active
                  </div>

                </div>

                <div className="pf-tags">

                  {current.tags.map((tag) => (
                    <span
                      className="pf-tag"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}

                </div>

                <div className="pf-tagline">
                  {current.tagline}
                </div>

                <p className="pf-description">
                  {current.description}
                </p>

                <div className="pf-engagement">
                  CodeCap Engagement: {current.engagement}
                </div>

                <div className="pf-stats">

                  {current.stats.map((stat) => (
                    <div
                      className="pf-stat"
                      key={stat[1]}
                    >
                      <strong>
                        {stat[0]}
                      </strong>

                      <small>
                        {stat[1]}
                      </small>
                    </div>
                  ))}

                </div>

                <div className="pf-detail-grid">

                  <div className="pf-detail-box">

                    <h4>
                      Product / Features
                    </h4>

                    <div className="pf-chip-list">

                      {current.features.map((feature) => (
                        <span
                          className="pf-chip"
                          key={feature}
                        >
                          {feature}
                        </span>
                      ))}

                    </div>

                  </div>

                  <div className="pf-detail-box">

                    <h4>
                      Markets
                    </h4>

                    <div className="pf-chip-list">

                      {current.markets.map((market) => (
                        <span
                          className="pf-chip"
                          key={market}
                        >
                          {market}
                        </span>
                      ))}

                    </div>

                  </div>

                  <div className="pf-detail-box">

                    <h4>
                      Industries
                    </h4>

                    <div className="pf-chip-list">

                      {current.industries.map((industry) => (
                        <span
                          className="pf-chip"
                          key={industry}
                        >
                          {industry}
                        </span>
                      ))}

                    </div>

                  </div>

                  <div className="pf-detail-box">

                    <h4>
                      Buyers
                    </h4>

                    <div className="pf-chip-list">

                      {current.buyers.map((buyer) => (
                        <span
                          className="pf-chip"
                          key={buyer}
                        >
                          {buyer}
                        </span>
                      ))}

                    </div>

                  </div>

                </div>

                <a
                  href={current.url}
                  target="_blank"
                  rel="noreferrer"
                  className="pf-project-link"
                >
                  Visit {current.name} →
                </a>

              </div>

            </div>

          </div>

        </section>

        {/* PORTFOLIO VISUAL */}

        <section className="pf-section pf-visual-section">

          <div className="pf-container">

            <div className="pf-reveal">

              <div className="pf-section-label">
                Portfolio Focus
              </div>

              <h2 className="pf-title">
                We look for
                <br />
                <span>real problems.</span>
              </h2>

            </div>

            <div className="pf-visual-grid">

              <div className="pf-visual-card pf-reveal pf-tilt">

                <div className="pf-visual-number">
                  01 / AI
                </div>

                <div className="pf-visual-icon">
                  ◈
                </div>

                <h3>
                  AI Platforms
                </h3>

                <p>
                  Products applying AI to meaningful
                  enterprise and operational problems.
                </p>

              </div>

              <div className="pf-visual-card pf-reveal pf-tilt">

                <div className="pf-visual-number">
                  02 / CYBER
                </div>

                <div className="pf-visual-icon">
                  ◇
                </div>

                <h3>
                  Cybersecurity
                </h3>

                <p>
                  Security products built for increasingly
                  complex enterprise environments.
                </p>

              </div>

              <div className="pf-visual-card pf-reveal pf-tilt">

                <div className="pf-visual-number">
                  03 / ENTERPRISE
                </div>

                <div className="pf-visual-icon">
                  ◆
                </div>

                <h3>
                  Enterprise SaaS
                </h3>

                <p>
                  Software solving operational problems
                  for organisations at scale.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="pf-cta">

          <div className="pf-reveal">

            <div className="pf-section-label">
              Join the Portfolio
            </div>

            <h2>
              Building something
              <br />
              in AI or cybersecurity?
            </h2>

            <p>
              We work with early-stage founders across
              Southeast Asia, the Gulf and India building
              AI, cybersecurity and enterprise SaaS.
            </p>

            <a
              href="/venture-studio"
              className="pf-cta-button"
            >
              Explore the Studio →
            </a>

          </div>

        </section>

        {/* FOOTER */}

        <footer className="pf-footer">

          <div className="pf-footer-inner">

            <div className="pf-footer-logo">
              Code<span>Cap</span>
            </div>

            <div className="pf-footer-text">
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

export default Portfolio;