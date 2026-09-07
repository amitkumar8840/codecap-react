import React, { useEffect, useState } from "react";

function Services() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const reveals = document.querySelectorAll(".sv-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sv-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    reveals.forEach((item) => observer.observe(item));

    const cards = document.querySelectorAll(".sv-tilt");

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
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)
      `;
    };

    const resetCard = (e) => {
      e.currentTarget.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
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

  const services = [
    {
      number: "01",
      title: "Venture Building & Co-founding",
      short: "Build from the beginning.",
      best: "Pre-idea founders",
      text:
        "We're not your advisor. We're your co-founder, with equity on the line.",
      detail:
        "At the pre-idea stage, we function as operational co-founders — shaping the problem space, validating the market thesis, and building the foundational product. Not a workshop. A real company, built from the inside.",
      points: [
        "Problem space definition & market validation",
        "Co-founder-level commitment with milestone-vested equity",
        "Technical architecture & product roadmap ownership",
        "First-hire strategy and cap table structuring",
        "Investor narrative development from day one"
      ]
    },
    {
      number: "02",
      title: "Product Development & Tech Execution",
      short: "Turn product vision into reality.",
      best: "Pre-seed to Seed",
      text:
        "Code that survives enterprise procurement, not a demo that survives a pitch.",
      detail:
        "We take technical execution seriously — from architecture and product roadmap through the engineering work required to create something customers can actually use.",
      points: [
        "Product architecture",
        "Technical roadmap",
        "Engineering execution",
        "Enterprise-ready product thinking",
        "Technology delivery"
      ]
    },
    {
      number: "03",
      title: "Go-to-Market Strategy & Sales",
      short: "Build the commercial engine.",
      best: "MVP to Seed stage",
      text:
        "From positioning to pipeline, we help turn a product into a business.",
      detail:
        "We work with founders on positioning, customer conversations, sales execution and the first repeatable commercial motion.",
      points: [
        "Market positioning",
        "Sales strategy",
        "Pipeline development",
        "Enterprise customer engagement",
        "Regional GTM execution"
      ]
    },
    {
      number: "04",
      title: "Fundraising Support & VC Introductions",
      short: "Prepare for the next round.",
      best: "Pre-seed to Series A",
      text:
        "Investor narrative, preparation and introductions when the company is ready.",
      detail:
        "Fundraising works best when the business already has a clear story. We help founders prepare the narrative, sharpen the opportunity and approach relevant investors.",
      points: [
        "Investor narrative",
        "Fundraising preparation",
        "Pitch positioning",
        "Investor conversations",
        "VC introductions"
      ]
    },
    {
      number: "05",
      title: "Cyber & Deep Tech Advisory",
      short: "Experience where complexity matters.",
      best: "Cyber & deep tech startups",
      text:
        "Enterprise cybersecurity and deep-tech experience applied to difficult problems.",
      detail:
        "Our team brings enterprise cybersecurity and deep-tech operating experience to startups building in technically demanding markets.",
      points: [
        "Cybersecurity strategy",
        "Enterprise security positioning",
        "Deep-tech product thinking",
        "Technical market assessment",
        "Enterprise readiness"
      ]
    },
    {
      number: "06",
      title: "Regional Market Entry",
      short: "Enter the right market.",
      best: "SG · UAE · India",
      text:
        "Practical support for entering and building across Singapore, UAE and India.",
      detail:
        "We help founders understand and execute regional expansion across the markets where CodeCap operates.",
      points: [
        "Market-entry strategy",
        "Regional positioning",
        "Enterprise introductions",
        "Sales execution",
        "Singapore · UAE · India"
      ]
    }
  ];

  const models = [
    {
      title: "Cash-Light Build",
      text:
        "Lower upfront cash commitment with milestone-based equity."
    },
    {
      title: "Funded Founder GTM",
      text:
        "For founders with an existing product who need GTM and sales execution."
    },
    {
      title: "Venture Co-Founder",
      text:
        "We join from the earliest stage and operate as a true venture partner."
    },
    {
      title: "Capability Gap",
      text:
        "Targeted operating support where a startup needs a specific capability."
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

        button {
          font-family: inherit;
        }

        .sv-page {
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 12% 15%,
              rgba(240,25,101,.12),
              transparent 28%
            ),
            radial-gradient(
              circle at 88% 25%,
              rgba(2,159,231,.11),
              transparent 28%
            ),
            #08090d;
        }

        /* NAVBAR */

        .sv-nav {
          position: fixed;
          z-index: 1000;
          top: 14px;
          left: 50%;
          transform: translateX(-50%);
          width: min(1180px, calc(100% - 32px));
          padding: 14px 18px;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 22px;
          background: rgba(10,11,17,.75);
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 60px rgba(0,0,0,.3);
        }

        .sv-nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .sv-logo {
          font-size: 25px;
          font-weight: 900;
          letter-spacing: -1.5px;
        }

        .sv-logo span {
          color: #f01965;
        }

        .sv-links {
          display: flex;
          gap: 21px;
          align-items: center;
        }

        .sv-links a {
          color: rgba(255,255,255,.7);
          font-size: 13px;
          font-weight: 700;
          transition: .25s ease;
        }

        .sv-links a:hover,
        .sv-active {
          color: #fff !important;
        }

        .sv-talk {
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

        .sv-menu {
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

        .sv-hero {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          padding: 155px 7vw 100px;
          overflow: hidden;
        }

        .sv-grid {
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

        .sv-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(110px);
          opacity: .23;
        }

        .sv-glow-one {
          left: -190px;
          top: 70px;
          background: #f01965;
          animation: svGlow 8s ease-in-out infinite alternate;
        }

        .sv-glow-two {
          right: -180px;
          bottom: -50px;
          background: #029fe7;
          animation: svGlow 10s ease-in-out infinite alternate-reverse;
        }

        @keyframes svGlow {
          to {
            transform: translate(80px,-40px) scale(1.2);
          }
        }

        .sv-hero-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1240px;
          margin: auto;
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          gap: 70px;
          align-items: center;
        }

        .sv-label {
          display: inline-flex;
          padding: 8px 13px;
          border: 1px solid rgba(255,255,255,.13);
          border-radius: 100px;
          background: rgba(255,255,255,.04);
          color: rgba(255,255,255,.68);
          font-size: 11px;
          font-weight: 900;
          letter-spacing: .14em;
          text-transform: uppercase;
        }

        .sv-hero h1 {
          margin: 25px 0 0;
          font-size: clamp(52px, 7vw, 96px);
          line-height: .92;
          letter-spacing: -5px;
          font-weight: 900;
        }

        .sv-gradient {
          background:
            linear-gradient(
              100deg,
              #f01965,
              #ff4e8b,
              #029fe7
            );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: svGradient 5s linear infinite;
        }

        @keyframes svGradient {
          to {
            background-position: 200% center;
          }
        }

        .sv-hero-copy {
          max-width: 670px;
          margin-top: 30px;
          color: rgba(255,255,255,.61);
          line-height: 1.85;
          font-size: 16px;
        }

        .sv-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 33px;
        }

        .sv-primary,
        .sv-secondary {
          padding: 15px 22px;
          border-radius: 14px;
          font-weight: 800;
          transition: .3s ease;
        }

        .sv-primary {
          color: #08090d;
          background: #fff;
        }

        .sv-secondary {
          color: #fff;
          border: 1px solid rgba(255,255,255,.15);
          background: rgba(255,255,255,.04);
        }

        .sv-primary:hover,
        .sv-secondary:hover {
          transform: translateY(-4px);
        }

        /* HERO 3D */

        .sv-visual {
          min-height: 520px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1200px;
        }

        .sv-ring {
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,.1);
          transform: rotateX(65deg);
          animation: svRing 12s linear infinite;
        }

        .sv-ring::before,
        .sv-ring::after {
          content: "";
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .sv-ring::before {
          left: 55px;
          top: 35px;
          background: #f01965;
          box-shadow: 0 0 25px #f01965;
        }

        .sv-ring::after {
          right: 55px;
          bottom: 35px;
          background: #029fe7;
          box-shadow: 0 0 25px #029fe7;
        }

        @keyframes svRing {
          to {
            transform:
              rotateX(65deg)
              rotateZ(360deg);
          }
        }

        .sv-dashboard {
          width: 350px;
          min-height: 330px;
          padding: 25px;
          border-radius: 28px;
          border: 1px solid rgba(255,255,255,.15);
          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,.1),
              rgba(255,255,255,.025)
            );
          backdrop-filter: blur(18px);
          box-shadow:
            0 50px 100px rgba(0,0,0,.55),
            inset 0 1px 0 rgba(255,255,255,.1);
          transform:
            rotateX(10deg)
            rotateY(-12deg);
          animation: svDashboard 5s ease-in-out infinite;
        }

        @keyframes svDashboard {
          50% {
            transform:
              translateY(-16px)
              rotateX(13deg)
              rotateY(-17deg);
          }
        }

        .sv-dots {
          display: flex;
          gap: 6px;
        }

        .sv-dots span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,.25);
        }

        .sv-dash-title {
          margin-top: 28px;
          font-size: 12px;
          color: rgba(255,255,255,.45);
          text-transform: uppercase;
          letter-spacing: .12em;
        }

        .sv-dash-main {
          margin-top: 10px;
          font-size: 42px;
          font-weight: 900;
        }

        .sv-dash-chart {
          height: 100px;
          margin-top: 25px;
          display: flex;
          align-items: end;
          gap: 8px;
        }

        .sv-dash-chart span {
          flex: 1;
          border-radius: 8px 8px 2px 2px;
          background:
            linear-gradient(
              to top,
              #f01965,
              #029fe7
            );
          animation: svBars 2.5s ease-in-out infinite alternate;
        }

        .sv-dash-chart span:nth-child(1) {
          height: 35%;
        }

        .sv-dash-chart span:nth-child(2) {
          height: 55%;
          animation-delay: .2s;
        }

        .sv-dash-chart span:nth-child(3) {
          height: 43%;
          animation-delay: .4s;
        }

        .sv-dash-chart span:nth-child(4) {
          height: 75%;
          animation-delay: .6s;
        }

        .sv-dash-chart span:nth-child(5) {
          height: 90%;
          animation-delay: .8s;
        }

        .sv-dash-chart span:nth-child(6) {
          height: 70%;
          animation-delay: 1s;
        }

        @keyframes svBars {
          to {
            transform: scaleY(.7);
          }
        }

        .sv-floating {
          position: absolute;
          padding: 14px 17px;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 17px;
          background: rgba(255,255,255,.07);
          backdrop-filter: blur(15px);
          box-shadow: 0 25px 55px rgba(0,0,0,.35);
          animation: svFloat 5s ease-in-out infinite;
        }

        .sv-floating strong {
          display: block;
          font-size: 18px;
        }

        .sv-floating small {
          color: rgba(255,255,255,.45);
        }

        .sv-floating-one {
          top: 55px;
          right: 0;
        }

        .sv-floating-two {
          left: 0;
          bottom: 70px;
          animation-delay: -2s;
        }

        .sv-floating-three {
          right: 25px;
          bottom: 15px;
          animation-delay: -3.5s;
        }

        @keyframes svFloat {
          50% {
            transform: translateY(-17px) rotateZ(2deg);
          }
        }

        /* COMMON */

        .sv-section {
          padding: 125px 7vw;
        }

        .sv-container {
          max-width: 1180px;
          margin: auto;
        }

        .sv-section-label {
          color: #f01965;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: .15em;
          text-transform: uppercase;
          margin-bottom: 17px;
        }

        .sv-title {
          margin: 0;
          font-size: clamp(42px,5vw,73px);
          line-height: .98;
          letter-spacing: -3px;
        }

        .sv-title span {
          color: rgba(255,255,255,.3);
        }

        /* SERVICE SELECTOR */

        .sv-service-area {
          margin-top: 65px;
          display: grid;
          grid-template-columns: .7fr 1.3fr;
          gap: 22px;
        }

        .sv-service-list {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .sv-service-button {
          width: 100%;
          border: 1px solid rgba(255,255,255,.08);
          background: rgba(255,255,255,.035);
          color: rgba(255,255,255,.65);
          padding: 18px;
          border-radius: 15px;
          text-align: left;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 15px;
          transition: .3s ease;
        }

        .sv-service-button:hover {
          transform: translateX(5px);
          color: #fff;
        }

        .sv-service-button.active {
          background:
            linear-gradient(
              100deg,
              rgba(240,25,101,.15),
              rgba(2,159,231,.07)
            );
          border-color: rgba(240,25,101,.4);
          color: #fff;
          transform: translateX(8px);
        }

        .sv-service-button-number {
          color: #f01965;
          font-size: 11px;
          font-weight: 900;
        }

        .sv-service-button-title {
          font-size: 13px;
          font-weight: 800;
        }

        .sv-detail {
          min-height: 490px;
          padding: 38px;
          border-radius: 30px;
          border: 1px solid rgba(255,255,255,.1);
          background:
            radial-gradient(
              circle at 90% 10%,
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

        .sv-detail::before {
          content: "";
          position: absolute;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          right: -100px;
          bottom: -100px;
          background: #029fe7;
          filter: blur(70px);
          opacity: .13;
        }

        .sv-detail-number {
          color: #029fe7;
          font-size: 12px;
          font-weight: 900;
        }

        .sv-detail h3 {
          max-width: 700px;
          margin: 25px 0 13px;
          font-size: clamp(30px,4vw,52px);
          line-height: 1;
          letter-spacing: -2px;
        }

        .sv-detail-short {
          color: #f01965;
          font-weight: 800;
          font-size: 14px;
        }

        .sv-detail-text {
          max-width: 700px;
          color: rgba(255,255,255,.55);
          line-height: 1.8;
          margin-top: 24px;
        }

        .sv-best {
          display: inline-block;
          margin-top: 20px;
          padding: 7px 10px;
          border-radius: 100px;
          background: rgba(255,255,255,.06);
          color: rgba(255,255,255,.6);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .sv-points {
          margin: 30px 0 0;
          padding: 0;
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .sv-points li {
          color: rgba(255,255,255,.62);
          font-size: 12px;
          line-height: 1.5;
          padding: 12px;
          border-radius: 12px;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.07);
        }

        .sv-points li::before {
          content: "✦";
          color: #f01965;
          margin-right: 8px;
        }

        /* MODELS */

        .sv-models {
          background: #f4f5f7;
          color: #0a0b10;
        }

        .sv-models .sv-title span {
          color: #737983;
        }

        .sv-model-grid {
          margin-top: 60px;
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 15px;
        }

        .sv-model {
          min-height: 280px;
          padding: 27px;
          border-radius: 24px;
          background: #fff;
          border: 1px solid #e0e3e8;
          transition: .4s ease;
        }

        .sv-model:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 70px rgba(0,0,0,.1);
        }

        .sv-model-number {
          color: #f01965;
          font-size: 11px;
          font-weight: 900;
        }

        .sv-model h3 {
          margin: 60px 0 15px;
          font-size: 22px;
          letter-spacing: -.5px;
        }

        .sv-model p {
          color: #707681;
          font-size: 13px;
          line-height: 1.7;
        }

        /* VESTING */

        .sv-vesting {
          margin-top: 70px;
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          gap: 45px;
          align-items: center;
        }

        .sv-vesting p {
          color: #737983;
          line-height: 1.8;
        }

        .sv-bars {
          display: flex;
          flex-direction: column;
          gap: 13px;
        }

        .sv-bar {
          display: grid;
          grid-template-columns: 80px 1fr 55px;
          gap: 15px;
          align-items: center;
          padding: 15px;
          border-radius: 15px;
          background: #fff;
          border: 1px solid #e1e3e7;
        }

        .sv-bar-name {
          font-size: 12px;
          font-weight: 800;
        }

        .sv-bar-track {
          height: 8px;
          background: #e7e8eb;
          border-radius: 20px;
          overflow: hidden;
        }

        .sv-bar-fill {
          height: 100%;
          border-radius: inherit;
          background:
            linear-gradient(
              90deg,
              #f01965,
              #029fe7
            );
        }

        .sv-bar-percent {
          font-size: 12px;
          font-weight: 900;
          text-align: right;
        }

        .sv-note {
          margin-top: 20px;
          color: #858a92;
          font-size: 11px;
          line-height: 1.7;
        }

        /* STAGE */

        .sv-stage {
          background:
            radial-gradient(
              circle at 85% 35%,
              rgba(2,159,231,.1),
              transparent 30%
            ),
            #0c0e14;
        }

        .sv-stage-grid {
          margin-top: 60px;
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 18px;
        }

        .sv-stage-card {
          min-height: 250px;
          padding: 28px;
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 25px;
          background: rgba(255,255,255,.04);
          transition: .4s ease;
        }

        .sv-stage-card:hover {
          transform: translateY(-10px);
          border-color: rgba(2,159,231,.4);
        }

        .sv-stage-number {
          color: #029fe7;
          font-size: 11px;
          font-weight: 900;
        }

        .sv-stage-card h3 {
          margin: 65px 0 10px;
          font-size: 25px;
        }

        .sv-stage-card p {
          margin: 0;
          color: rgba(255,255,255,.45);
          line-height: 1.7;
          font-size: 13px;
        }

        /* CTA */

        .sv-cta {
          padding: 150px 7vw;
          text-align: center;
          background:
            radial-gradient(
              circle at center,
              rgba(240,25,101,.15),
              transparent 40%
            );
        }

        .sv-cta h2 {
          max-width: 900px;
          margin: auto;
          font-size: clamp(48px,7vw,92px);
          line-height: .94;
          letter-spacing: -5px;
        }

        .sv-cta p {
          max-width: 650px;
          margin: 28px auto 35px;
          color: rgba(255,255,255,.5);
          line-height: 1.8;
        }

        .sv-cta-button {
          display: inline-flex;
          padding: 17px 28px;
          border-radius: 15px;
          background: #fff;
          color: #08090d;
          font-weight: 900;
          transition: .3s ease;
        }

        .sv-cta-button:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(255,255,255,.15);
        }

        /* FOOTER */

        .sv-footer {
          padding: 35px 7vw;
          border-top: 1px solid rgba(255,255,255,.08);
          background: #07080b;
        }

        .sv-footer-inner {
          max-width: 1180px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .sv-footer-logo {
          font-size: 23px;
          font-weight: 900;
        }

        .sv-footer-logo span {
          color: #f01965;
        }

        .sv-footer-text {
          color: rgba(255,255,255,.4);
          font-size: 12px;
          text-align: right;
        }

        /* REVEAL */

        .sv-reveal {
          opacity: 0;
          transform: translateY(45px);
          transition:
            opacity .8s ease,
            transform .8s cubic-bezier(.2,.8,.2,1);
        }

        .sv-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* MOBILE */

        @media (max-width: 1050px) {

          .sv-links,
          .sv-talk {
            display: none;
          }

          .sv-menu {
            display: block;
          }

          .sv-hero-inner {
            grid-template-columns: 1fr;
          }

          .sv-visual {
            min-height: 440px;
          }

          .sv-model-grid {
            grid-template-columns: repeat(2,1fr);
          }

        }

        @media (max-width: 760px) {

          .sv-nav {
            top: 8px;
            width: calc(100% - 18px);
            border-radius: 18px;
          }

          .sv-mobile-menu {
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

          .sv-mobile-menu a {
            display: block;
            padding: 14px;
            border-radius: 12px;
            color: rgba(255,255,255,.72);
            font-weight: 700;
          }

          .sv-hero {
            padding: 130px 20px 70px;
          }

          .sv-hero h1 {
            font-size: 53px;
            letter-spacing: -3px;
          }

          .sv-hero-copy {
            font-size: 15px;
          }

          .sv-visual {
            min-height: 380px;
          }

          .sv-dashboard {
            width: 290px;
            min-height: 285px;
          }

          .sv-ring {
            width: 300px;
            height: 300px;
          }

          .sv-floating {
            padding: 11px 13px;
          }

          .sv-floating-one {
            top: 25px;
            right: 0;
          }

          .sv-floating-two {
            left: 0;
            bottom: 45px;
          }

          .sv-floating-three {
            right: 0;
            bottom: 0;
          }

          .sv-section {
            padding: 85px 20px;
          }

          .sv-title {
            font-size: 43px;
            letter-spacing: -2px;
          }

          .sv-service-area {
            grid-template-columns: 1fr;
          }

          .sv-detail {
            min-height: auto;
            padding: 27px;
          }

          .sv-points {
            grid-template-columns: 1fr;
          }

          .sv-model-grid {
            grid-template-columns: 1fr;
          }

          .sv-model {
            min-height: 230px;
          }

          .sv-vesting {
            grid-template-columns: 1fr;
          }

          .sv-stage-grid {
            grid-template-columns: 1fr;
          }

          .sv-cta {
            padding: 100px 20px;
          }

          .sv-cta h2 {
            font-size: 52px;
            letter-spacing: -3px;
          }

          .sv-footer {
            padding: 28px 20px;
          }

          .sv-footer-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .sv-footer-text {
            text-align: left;
          }

        }

      `}</style>

      <div className="sv-page">

        {/* NAVBAR */}

        <nav className="sv-nav">

          <div className="sv-nav-inner">

            <a href="/" className="sv-logo">
              Code<span>Cap</span>
            </a>

            <div className="sv-links">

              <a href="/venture-studio">
                Venture Studio
              </a>

              <a
                href="/services"
                className="sv-active"
              >
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

            </div>

            <button
              className="sv-talk"
              onClick={() =>
                (window.location.href =
                  "mailto:hello@codecap.ai")
              }
            >
              Talk to us
            </button>

            <button
              className="sv-menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "×" : "☰"}
            </button>

          </div>

          {menuOpen && (
            <div className="sv-mobile-menu">

              <a href="/" onClick={() => setMenuOpen(false)}>
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

        <section className="sv-hero">

          <div className="sv-grid"></div>

          <div className="sv-glow sv-glow-one"></div>
          <div className="sv-glow sv-glow-two"></div>

          <div className="sv-hero-inner">

            <div className="sv-reveal">

              <div className="sv-label">
                CodeCap Services
              </div>

              <h1>
                Everything a
                <br />
                founder needs.
                <br />
                <span className="sv-gradient">
                  Nothing they don't.
                </span>
              </h1>

              <p className="sv-hero-copy">
                Our engagement model is calibrated to startup
                stage — highest support at the earliest stages,
                structured to de-risk on both sides as you grow.
                We are operators, not advisors.
              </p>

              <div className="sv-actions">

                <a
                  href="#services"
                  className="sv-primary"
                >
                  Explore Services →
                </a>

                <a
                  href="mailto:hello@codecap.ai"
                  className="sv-secondary"
                >
                  Talk to us
                </a>

              </div>

            </div>

            <div className="sv-visual sv-reveal">

              <div className="sv-ring"></div>

              <div className="sv-dashboard">

                <div className="sv-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="sv-dash-title">
                  Founder Operating System
                </div>

                <div className="sv-dash-main">
                  BUILD → SELL → SCALE
                </div>

                <div className="sv-dash-chart">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

              </div>

              <div className="sv-floating sv-floating-one">
                <strong>BUILD</strong>
                <small>Product</small>
              </div>

              <div className="sv-floating sv-floating-two">
                <strong>GTM</strong>
                <small>Sales</small>
              </div>

              <div className="sv-floating sv-floating-three">
                <strong>GROW</strong>
                <small>Markets</small>
              </div>

            </div>

          </div>

        </section>

        {/* SERVICES */}

        <section
          className="sv-section"
          id="services"
        >

          <div className="sv-container">

            <div className="sv-reveal">

              <div className="sv-section-label">
                Six Capabilities
              </div>

              <h2 className="sv-title">
                Pick the gap.
                <br />
                <span>We'll help close it.</span>
              </h2>

            </div>

            <div className="sv-service-area">

              <div className="sv-service-list sv-reveal">

                {services.map((service, index) => (
                  <button
                    key={service.number}
                    className={
                      activeService === index
                        ? "sv-service-button active"
                        : "sv-service-button"
                    }
                    onClick={() =>
                      setActiveService(index)
                    }
                  >

                    <span className="sv-service-button-number">
                      {service.number}
                    </span>

                    <span className="sv-service-button-title">
                      {service.title}
                    </span>

                  </button>
                ))}

              </div>

              <div className="sv-detail sv-reveal">

                <div className="sv-detail-number">
                  SERVICE / {services[activeService].number}
                </div>

                <h3>
                  {services[activeService].title}
                </h3>

                <div className="sv-detail-short">
                  {services[activeService].short}
                </div>

                <p className="sv-detail-text">
                  {services[activeService].detail}
                </p>

                <div className="sv-best">
                  Best for: {services[activeService].best}
                </div>

                <ul className="sv-points">

                  {services[activeService].points.map(
                    (point, index) => (
                      <li key={index}>
                        {point}
                      </li>
                    )
                  )}

                </ul>

              </div>

            </div>

          </div>

        </section>

        {/* ENGAGEMENT MODELS */}

        <section className="sv-section sv-models">

          <div className="sv-container">

            <div className="sv-reveal">

              <div className="sv-section-label">
                Engagement Models
              </div>

              <h2 className="sv-title">
                One studio.
                <br />
                <span>Different ways to work.</span>
              </h2>

            </div>

            <div className="sv-model-grid">

              {models.map((model, index) => (
                <div
                  className="sv-model sv-reveal"
                  key={model.title}
                >

                  <div className="sv-model-number">
                    0{index + 1}
                  </div>

                  <h3>
                    {model.title}
                  </h3>

                  <p>
                    {model.text}
                  </p>

                </div>
              ))}

            </div>

            {/* VESTING */}

            <div className="sv-vesting">

              <div className="sv-reveal">

                <div className="sv-section-label">
                  Milestone Vesting
                </div>

                <h2 className="sv-title">
                  Equity follows
                  <br />
                  <span>execution.</span>
                </h2>

                <p>
                  Our milestone structure aligns incentives
                  around measurable progress and actual
                  company-building work.
                </p>

                <div className="sv-note">
                  12-month clawback on unvested tranches.
                  Singapore/DIFC-seated legal structuring.
                </div>

              </div>

              <div className="sv-bars sv-reveal">

                <div className="sv-bar">

                  <div className="sv-bar-name">
                    Strategy
                  </div>

                  <div className="sv-bar-track">
                    <div
                      className="sv-bar-fill"
                      style={{ width: "30%" }}
                    ></div>
                  </div>

                  <div className="sv-bar-percent">
                    30%
                  </div>

                </div>

                <div className="sv-bar">

                  <div className="sv-bar-name">
                    Product
                  </div>

                  <div className="sv-bar-track">
                    <div
                      className="sv-bar-fill"
                      style={{ width: "40%" }}
                    ></div>
                  </div>

                  <div className="sv-bar-percent">
                    40%
                  </div>

                </div>

                <div className="sv-bar">

                  <div className="sv-bar-name">
                    Traction
                  </div>

                  <div className="sv-bar-track">
                    <div
                      className="sv-bar-fill"
                      style={{ width: "30%" }}
                    ></div>
                  </div>

                  <div className="sv-bar-percent">
                    30%
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* STAGES */}

        <section className="sv-section sv-stage">

          <div className="sv-container">

            <div className="sv-reveal">

              <div className="sv-section-label">
                Startup Stage
              </div>

              <h2 className="sv-title">
                The earlier we join,
                <br />
                <span>the deeper we operate.</span>
              </h2>

            </div>

            <div className="sv-stage-grid">

              <div className="sv-stage-card sv-reveal">

                <div className="sv-stage-number">
                  PRE-IDEA
                </div>

                <h3>
                  Find the problem.
                </h3>

                <p>
                  Shape the problem space, validate the market
                  thesis and establish the foundation.
                </p>

              </div>

              <div className="sv-stage-card sv-reveal">

                <div className="sv-stage-number">
                  MVP
                </div>

                <h3>
                  Build the product.
                </h3>

                <p>
                  Turn the idea into something real that
                  customers can actually use.
                </p>

              </div>

              <div className="sv-stage-card sv-reveal">

                <div className="sv-stage-number">
                  GROWTH
                </div>

                <h3>
                  Build traction.
                </h3>

                <p>
                  Strengthen GTM, sales, funding and regional
                  expansion capabilities.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* FINAL CTA */}

        <section className="sv-cta">

          <div className="sv-reveal">

            <div className="sv-section-label">
              Let's Work
            </div>

            <h2>
              Not sure which
              <br />
              model fits?
            </h2>

            <p>
              Tell us where you are, what you're building and
              where you need help. We'll tell you which model
              makes sense.
            </p>

            <a
              href="mailto:hello@codecap.ai"
              className="sv-cta-button"
            >
              Talk to CodeCap →
            </a>

          </div>

        </section>

        {/* FOOTER */}

        <footer className="sv-footer">

          <div className="sv-footer-inner">

            <div className="sv-footer-logo">
              Code<span>Cap</span>
            </div>

            <div className="sv-footer-text">
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

export default Services;