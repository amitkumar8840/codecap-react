import React, { useEffect, useState } from "react";

function VentureStudio() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const reveals = document.querySelectorAll(".vs-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("vs-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    reveals.forEach((item) => observer.observe(item));

    const cards = document.querySelectorAll(".vs-tilt");

    const moveCard = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX =
        ((y - rect.height / 2) / rect.height) * -7;

      const rotateY =
        ((x - rect.width / 2) / rect.width) * 7;

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

  const closeMenu = () => setMenuOpen(false);

  const services = [
    {
      number: "01",
      title: "Venture Building & Co-founding",
      text:
        "We're not your advisor. We're your co-founder, with equity on the line.",
      best: "Pre-idea founders"
    },
    {
      number: "02",
      title: "Product Development & Tech Execution",
      text:
        "Code that survives enterprise procurement, not a demo that survives a pitch.",
      best: "Pre-seed to Seed"
    },
    {
      number: "03",
      title: "Go-to-Market Strategy & Sales",
      text:
        "From positioning to pipeline, we help turn a product into a business.",
      best: "MVP to Seed stage"
    },
    {
      number: "04",
      title: "Fundraising Support & VC Introductions",
      text:
        "Investor narrative, preparation and introductions when the company is ready.",
      best: "Pre-seed to Series A"
    },
    {
      number: "05",
      title: "Cyber & Deep Tech Advisory",
      text:
        "Enterprise cybersecurity and deep-tech experience applied to difficult problems.",
      best: "Cyber & deep tech startups"
    },
    {
      number: "06",
      title: "Regional Market Entry",
      text:
        "Practical support for entering and building across Singapore, UAE and India.",
      best: "SG · UAE · India"
    }
  ];

  const models = [
    {
      number: "01",
      title: "Cash-Light Build",
      text:
        "Lower upfront cash commitment with a greater focus on milestone-based equity."
    },
    {
      number: "02",
      title: "Funded Founder GTM",
      text:
        "For founders with an existing product who need experienced GTM and sales execution."
    },
    {
      number: "03",
      title: "Venture Co-Founder",
      text:
        "We join from the earliest stage and operate as a true venture partner."
    },
    {
      number: "04",
      title: "Capability Gap",
      text:
        "Targeted operating support where a startup needs a specific capability to move forward."
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

        .vs-page {
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 10% 15%,
              rgba(240,25,101,.12),
              transparent 28%
            ),
            radial-gradient(
              circle at 90% 20%,
              rgba(2,159,231,.12),
              transparent 28%
            ),
            #08090d;
        }

        /* NAV */

        .vs-nav {
          position: fixed;
          z-index: 1000;
          top: 14px;
          left: 50%;
          transform: translateX(-50%);
          width: min(1180px, calc(100% - 32px));
          padding: 14px 18px;
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(10,11,17,.75);
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 60px rgba(0,0,0,.3);
        }

        .vs-nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .vs-logo {
          font-size: 25px;
          font-weight: 900;
          letter-spacing: -1.5px;
        }

        .vs-logo span {
          color: #f01965;
        }

        .vs-links {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .vs-links a {
          color: rgba(255,255,255,.7);
          font-size: 13px;
          font-weight: 700;
          transition: .25s ease;
        }

        .vs-links a:hover,
        .vs-active {
          color: #fff !important;
        }

        .vs-talk {
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

        .vs-menu {
          display: none;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,.14);
          background: rgba(255,255,255,.05);
          color: #fff;
          font-size: 20px;
        }

        /* HERO */

        .vs-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 155px 7vw 100px;
          overflow: hidden;
        }

        .vs-grid {
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

        .vs-glow {
          position: absolute;
          width: 480px;
          height: 480px;
          border-radius: 50%;
          filter: blur(110px);
          opacity: .23;
        }

        .vs-glow-one {
          left: -180px;
          top: 80px;
          background: #f01965;
          animation: vsGlow 8s ease-in-out infinite alternate;
        }

        .vs-glow-two {
          right: -180px;
          bottom: 20px;
          background: #029fe7;
          animation: vsGlow 9s ease-in-out infinite alternate-reverse;
        }

        @keyframes vsGlow {
          to {
            transform: translate(70px,-40px) scale(1.2);
          }
        }

        .vs-hero-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1250px;
          margin: auto;
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          gap: 70px;
          align-items: center;
        }

        .vs-label {
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

        .vs-hero h1 {
          margin: 25px 0 0;
          font-size: clamp(52px, 7vw, 98px);
          line-height: .92;
          letter-spacing: -5px;
          font-weight: 900;
        }

        .vs-gradient {
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
          animation: vsGradient 5s linear infinite;
        }

        @keyframes vsGradient {
          to {
            background-position: 200% center;
          }
        }

        .vs-hero-copy {
          max-width: 650px;
          margin-top: 30px;
          color: rgba(255,255,255,.62);
          line-height: 1.85;
          font-size: 16px;
        }

        .vs-actions {
          display: flex;
          gap: 12px;
          margin-top: 34px;
          flex-wrap: wrap;
        }

        .vs-primary,
        .vs-secondary {
          padding: 15px 22px;
          border-radius: 14px;
          font-weight: 800;
          transition: .3s ease;
        }

        .vs-primary {
          background: #fff;
          color: #08090d;
        }

        .vs-secondary {
          border: 1px solid rgba(255,255,255,.15);
          background: rgba(255,255,255,.04);
        }

        .vs-primary:hover,
        .vs-secondary:hover {
          transform: translateY(-4px);
        }

        /* 3D HERO */

        .vs-visual {
          min-height: 530px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          perspective: 1200px;
        }

        .vs-orbit {
          position: absolute;
          width: 420px;
          height: 420px;
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 50%;
          transform: rotateX(65deg);
          animation: vsOrbit 13s linear infinite;
        }

        .vs-orbit::before,
        .vs-orbit::after {
          content: "";
          position: absolute;
          width: 11px;
          height: 11px;
          border-radius: 50%;
        }

        .vs-orbit::before {
          top: 40px;
          left: 65px;
          background: #f01965;
          box-shadow: 0 0 25px #f01965;
        }

        .vs-orbit::after {
          bottom: 40px;
          right: 65px;
          background: #029fe7;
          box-shadow: 0 0 25px #029fe7;
        }

        @keyframes vsOrbit {
          to {
            transform:
              rotateX(65deg)
              rotateZ(360deg);
          }
        }

        .vs-core {
          position: relative;
          width: 310px;
          height: 310px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background:
            radial-gradient(
              circle at 35% 30%,
              rgba(255,255,255,.15),
              transparent 30%
            ),
            linear-gradient(
              145deg,
              #171a25,
              #090a0e
            );
          border: 1px solid rgba(255,255,255,.15);
          box-shadow:
            0 50px 100px rgba(0,0,0,.55),
            inset 0 0 60px rgba(240,25,101,.1);
          transform: rotateX(12deg) rotateY(-12deg);
          animation: vsCoreFloat 5s ease-in-out infinite;
        }

        @keyframes vsCoreFloat {
          50% {
            transform:
              translateY(-16px)
              rotateX(15deg)
              rotateY(-17deg);
          }
        }

        .vs-core-inner {
          width: 170px;
          height: 170px;
          border-radius: 50%;
          background:
            linear-gradient(
              135deg,
              #f01965,
              #029fe7
            );
          display: grid;
          place-items: center;
          box-shadow:
            0 0 80px rgba(240,25,101,.28);
        }

        .vs-core-inner div {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          background: #0b0d12;
          display: grid;
          place-items: center;
          font-size: 42px;
          font-weight: 900;
        }

        .vs-float {
          position: absolute;
          padding: 14px 17px;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 17px;
          background: rgba(255,255,255,.07);
          backdrop-filter: blur(16px);
          box-shadow: 0 25px 55px rgba(0,0,0,.35);
          animation: vsFloat 5s ease-in-out infinite;
        }

        .vs-float strong {
          display: block;
          font-size: 18px;
        }

        .vs-float small {
          color: rgba(255,255,255,.45);
        }

        .vs-float-one {
          top: 55px;
          right: 0;
        }

        .vs-float-two {
          bottom: 70px;
          left: 0;
          animation-delay: -2s;
        }

        .vs-float-three {
          right: 25px;
          bottom: 20px;
          animation-delay: -3s;
        }

        @keyframes vsFloat {
          50% {
            transform: translateY(-18px) rotateZ(2deg);
          }
        }

        /* COMMON */

        .vs-section {
          padding: 125px 7vw;
        }

        .vs-container {
          max-width: 1180px;
          margin: auto;
        }

        .vs-section-label {
          color: #f01965;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: .15em;
          text-transform: uppercase;
          margin-bottom: 17px;
        }

        .vs-title {
          margin: 0;
          font-size: clamp(42px, 5vw, 73px);
          line-height: .98;
          letter-spacing: -3px;
        }

        .vs-title span {
          color: rgba(255,255,255,.3);
        }

        /* ENGINES */

        .vs-engines {
          background: #f4f5f7;
          color: #0a0b10;
        }

        .vs-engines .vs-section-label {
          color: #f01965;
        }

        .vs-engines .vs-title span {
          color: #737783;
        }

        .vs-engine-grid {
          margin-top: 65px;
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 22px;
        }

        .vs-engine {
          min-height: 420px;
          padding: 38px;
          border-radius: 30px;
          background: #fff;
          border: 1px solid #e0e3e8;
          transition: transform .25s ease, box-shadow .25s ease;
          transform-style: preserve-3d;
          position: relative;
          overflow: hidden;
        }

        .vs-engine::after {
          content: "";
          position: absolute;
          width: 250px;
          height: 250px;
          border-radius: 50%;
          right: -110px;
          top: -110px;
          background: #f01965;
          filter: blur(55px);
          opacity: .11;
        }

        .vs-engine.blue::after {
          background: #029fe7;
        }

        .vs-engine-number {
          font-size: 11px;
          color: #f01965;
          font-weight: 900;
          letter-spacing: .14em;
        }

        .vs-engine-icon {
          margin-top: 55px;
          width: 65px;
          height: 65px;
          display: grid;
          place-items: center;
          border-radius: 20px;
          background: #101118;
          color: #fff;
          font-size: 25px;
          box-shadow: 10px 10px 0 rgba(240,25,101,.12);
        }

        .vs-engine.blue .vs-engine-icon {
          box-shadow: 10px 10px 0 rgba(2,159,231,.15);
        }

        .vs-engine h3 {
          font-size: 35px;
          line-height: 1;
          letter-spacing: -1.5px;
          margin: 25px 0 18px;
        }

        .vs-engine p {
          margin: 0;
          color: #687080;
          line-height: 1.75;
        }

        /* SERVICES */

        .vs-service-grid {
          margin-top: 60px;
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 16px;
        }

        .vs-service {
          padding: 25px;
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,.1);
          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,.06),
              rgba(255,255,255,.02)
            );
          transition: .4s ease;
        }

        .vs-service:hover {
          transform: translateY(-8px);
          border-color: rgba(240,25,101,.35);
          box-shadow: 0 25px 60px rgba(0,0,0,.25);
        }

        .vs-service-top {
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }

        .vs-service-number {
          color: #029fe7;
          font-size: 12px;
          font-weight: 900;
        }

        .vs-service h3 {
          margin: 30px 0 13px;
          font-size: 23px;
          line-height: 1.15;
        }

        .vs-service p {
          color: rgba(255,255,255,.52);
          line-height: 1.7;
          margin: 0 0 20px;
        }

        .vs-best {
          display: inline-block;
          padding: 7px 10px;
          border-radius: 100px;
          background: rgba(240,25,101,.08);
          color: #ff4d89;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        /* MODELS */

        .vs-models {
          background:
            radial-gradient(
              circle at 85% 40%,
              rgba(240,25,101,.1),
              transparent 30%
            ),
            #0c0e14;
        }

        .vs-model-grid {
          margin-top: 60px;
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 15px;
        }

        .vs-model {
          min-height: 300px;
          padding: 25px;
          border-radius: 23px;
          border: 1px solid rgba(255,255,255,.1);
          background: rgba(255,255,255,.035);
          transition: .4s ease;
        }

        .vs-model:hover {
          transform: translateY(-10px) rotateX(3deg);
          background: rgba(255,255,255,.055);
          border-color: rgba(2,159,231,.4);
        }

        .vs-model-number {
          color: #f01965;
          font-size: 12px;
          font-weight: 900;
        }

        .vs-model h3 {
          margin: 65px 0 15px;
          font-size: 22px;
        }

        .vs-model p {
          color: rgba(255,255,255,.48);
          line-height: 1.7;
          font-size: 14px;
        }

        /* VESTING */

        .vs-vesting {
          margin-top: 70px;
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          gap: 40px;
          align-items: center;
        }

        .vs-vesting-copy p {
          color: rgba(255,255,255,.5);
          line-height: 1.8;
          max-width: 500px;
        }

        .vs-bars {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .vs-bar {
          display: grid;
          grid-template-columns: 75px 1fr 60px;
          gap: 15px;
          align-items: center;
          padding: 15px;
          border-radius: 15px;
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.08);
        }

        .vs-bar-name {
          font-size: 12px;
          font-weight: 800;
        }

        .vs-bar-line {
          height: 8px;
          border-radius: 20px;
          background: rgba(255,255,255,.08);
          overflow: hidden;
        }

        .vs-bar-fill {
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(
            90deg,
            #f01965,
            #029fe7
          );
        }

        .vs-bar-percent {
          text-align: right;
          font-weight: 900;
          font-size: 12px;
        }

        .vs-note {
          margin-top: 20px;
          color: rgba(255,255,255,.38);
          font-size: 12px;
          line-height: 1.7;
        }

        /* MARKETS */

        .vs-markets {
          background: #f4f5f7;
          color: #090a0e;
        }

        .vs-markets .vs-title span {
          color: #747983;
        }

        .vs-market-grid {
          margin-top: 60px;
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 18px;
        }

        .vs-market {
          min-height: 270px;
          padding: 30px;
          border-radius: 27px;
          background: #fff;
          border: 1px solid #e0e3e8;
          transition: .4s ease;
        }

        .vs-market:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 70px rgba(0,0,0,.1);
        }

        .vs-market-code {
          color: #f01965;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: .15em;
        }

        .vs-market h3 {
          margin: 70px 0 10px;
          font-size: 32px;
          letter-spacing: -1px;
        }

        .vs-market p {
          color: #737983;
          margin: 0;
        }

        /* PRODUCTS */

        .vs-product-grid {
          margin-top: 60px;
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 20px;
        }

        .vs-product {
          padding: 35px;
          min-height: 350px;
          border-radius: 30px;
          border: 1px solid rgba(255,255,255,.1);
          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,.07),
              rgba(255,255,255,.025)
            );
          transition: .4s ease;
        }

        .vs-product:hover {
          transform: translateY(-10px);
          border-color: rgba(240,25,101,.35);
          box-shadow: 0 30px 70px rgba(0,0,0,.3);
        }

        .vs-product-tag {
          display: inline-block;
          padding: 7px 10px;
          border-radius: 100px;
          background: rgba(240,25,101,.1);
          color: #ff4b88;
          font-size: 10px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .vs-product h3 {
          margin: 55px 0 15px;
          font-size: 35px;
        }

        .vs-product p {
          color: rgba(255,255,255,.52);
          line-height: 1.75;
        }

        /* PRINCIPLES */

        .vs-principles {
          background:
            linear-gradient(
              135deg,
              rgba(240,25,101,.12),
              rgba(2,159,231,.08)
            );
        }

        .vs-principle-list {
          margin-top: 60px;
        }

        .vs-principle {
          display: grid;
          grid-template-columns: 70px 1fr;
          gap: 25px;
          padding: 30px 0;
          border-top: 1px solid rgba(255,255,255,.1);
          transition: .3s ease;
        }

        .vs-principle:last-child {
          border-bottom: 1px solid rgba(255,255,255,.1);
        }

        .vs-principle:hover {
          padding-left: 20px;
        }

        .vs-principle span {
          color: #029fe7;
          font-size: 12px;
          font-weight: 900;
        }

        .vs-principle h3 {
          margin: 0;
          font-size: clamp(25px,3vw,40px);
          letter-spacing: -1.5px;
        }

        /* PROCESS */

        .vs-process-grid {
          margin-top: 60px;
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 14px;
        }

        .vs-process {
          padding: 25px;
          min-height: 220px;
          border-radius: 22px;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.09);
        }

        .vs-process strong {
          color: #f01965;
          font-size: 12px;
        }

        .vs-process h3 {
          margin: 50px 0 10px;
        }

        .vs-process p {
          margin: 0;
          color: rgba(255,255,255,.46);
          font-size: 13px;
          line-height: 1.7;
        }

        /* CTA */

        .vs-cta {
          padding: 150px 7vw;
          text-align: center;
          background:
            radial-gradient(
              circle at center,
              rgba(240,25,101,.15),
              transparent 40%
            );
        }

        .vs-cta h2 {
          max-width: 950px;
          margin: auto;
          font-size: clamp(48px,7vw,92px);
          line-height: .94;
          letter-spacing: -5px;
        }

        .vs-cta p {
          max-width: 620px;
          margin: 28px auto 35px;
          color: rgba(255,255,255,.5);
          line-height: 1.8;
        }

        .vs-cta-button {
          display: inline-flex;
          padding: 17px 27px;
          border-radius: 15px;
          background: #fff;
          color: #08090d;
          font-weight: 900;
          transition: .35s ease;
        }

        .vs-cta-button:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 20px 60px rgba(255,255,255,.15);
        }

        /* FOOTER */

        .vs-footer {
          padding: 35px 7vw;
          border-top: 1px solid rgba(255,255,255,.08);
          background: #07080b;
        }

        .vs-footer-inner {
          max-width: 1180px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .vs-footer-logo {
          font-size: 23px;
          font-weight: 900;
        }

        .vs-footer-logo span {
          color: #f01965;
        }

        .vs-footer-text {
          color: rgba(255,255,255,.4);
          font-size: 12px;
          text-align: right;
        }

        /* REVEAL */

        .vs-reveal {
          opacity: 0;
          transform: translateY(45px);
          transition:
            opacity .8s ease,
            transform .8s cubic-bezier(.2,.8,.2,1);
        }

        .vs-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* MOBILE */

        @media (max-width: 1000px) {

          .vs-links,
          .vs-talk {
            display: none;
          }

          .vs-menu {
            display: block;
          }

          .vs-hero-inner {
            grid-template-columns: 1fr;
          }

          .vs-visual {
            min-height: 450px;
          }

          .vs-model-grid,
          .vs-process-grid {
            grid-template-columns: repeat(2,1fr);
          }

        }

        @media (max-width: 760px) {

          .vs-nav {
            top: 8px;
            width: calc(100% - 18px);
            border-radius: 18px;
          }

          .vs-mobile-menu {
            position: absolute;
            top: calc(100% + 8px);
            left: 0;
            right: 0;
            padding: 10px;
            border-radius: 18px;
            border: 1px solid rgba(255,255,255,.1);
            background: rgba(10,11,17,.96);
            backdrop-filter: blur(20px);
          }

          .vs-mobile-menu a {
            display: block;
            padding: 14px;
            border-radius: 12px;
            color: rgba(255,255,255,.72);
            font-weight: 700;
          }

          .vs-hero {
            padding: 130px 20px 70px;
          }

          .vs-hero h1 {
            font-size: 52px;
            letter-spacing: -3px;
          }

          .vs-hero-copy {
            font-size: 15px;
          }

          .vs-visual {
            min-height: 380px;
          }

          .vs-core {
            width: 245px;
            height: 245px;
          }

          .vs-core-inner {
            width: 135px;
            height: 135px;
          }

          .vs-core-inner div {
            width: 105px;
            height: 105px;
            font-size: 32px;
          }

          .vs-orbit {
            width: 300px;
            height: 300px;
          }

          .vs-float {
            padding: 11px 13px;
          }

          .vs-float-one {
            top: 25px;
            right: 0;
          }

          .vs-float-two {
            left: 0;
            bottom: 40px;
          }

          .vs-float-three {
            right: 0;
            bottom: 0;
          }

          .vs-section {
            padding: 85px 20px;
          }

          .vs-title {
            font-size: 43px;
            letter-spacing: -2px;
          }

          .vs-engine-grid,
          .vs-service-grid,
          .vs-product-grid,
          .vs-market-grid,
          .vs-model-grid,
          .vs-process-grid {
            grid-template-columns: 1fr;
          }

          .vs-engine {
            min-height: 350px;
            padding: 28px;
          }

          .vs-engine-icon {
            margin-top: 40px;
          }

          .vs-engine h3 {
            font-size: 30px;
          }

          .vs-model {
            min-height: 240px;
          }

          .vs-vesting {
            grid-template-columns: 1fr;
          }

          .vs-bar {
            grid-template-columns: 60px 1fr 45px;
          }

          .vs-market h3 {
            margin-top: 50px;
          }

          .vs-product {
            min-height: 300px;
            padding: 28px;
          }

          .vs-product h3 {
            font-size: 30px;
          }

          .vs-principle {
            grid-template-columns: 45px 1fr;
            gap: 15px;
          }

          .vs-principle h3 {
            font-size: 27px;
          }

          .vs-cta {
            padding: 100px 20px;
          }

          .vs-cta h2 {
            font-size: 52px;
            letter-spacing: -3px;
          }

          .vs-footer {
            padding: 28px 20px;
          }

          .vs-footer-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .vs-footer-text {
            text-align: left;
          }

        }

      `}</style>

      <div className="vs-page">

        {/* NAVBAR */}

        <nav className="vs-nav">

          <div className="vs-nav-inner">

            <a href="/" className="vs-logo">
              Code<span>Cap</span>
            </a>

            <div className="vs-links">

              <a
                href="/venture-studio"
                className="vs-active"
              >
                Venture Studio
              </a>

              <a href="/services">Services</a>
              <a href="/products">Products</a>
              <a href="/portfolio">Portfolio</a>
              <a href="/team">Team</a>
              <a href="/insights">Insights</a>
              <a href="/podcast">Podcast</a>

            </div>

            <button
              className="vs-talk"
              onClick={() =>
                (window.location.href =
                  "mailto:hello@codecap.ai")
              }
            >
              Talk to us
            </button>

            <button
              className="vs-menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "×" : "☰"}
            </button>

          </div>

          {menuOpen && (
            <div className="vs-mobile-menu">

              <a href="/" onClick={closeMenu}>
                Home
              </a>

              <a
                href="/venture-studio"
                onClick={closeMenu}
              >
                Venture Studio
              </a>

              <a href="/services" onClick={closeMenu}>
                Services
              </a>

              <a href="/products" onClick={closeMenu}>
                Products
              </a>

              <a href="/portfolio" onClick={closeMenu}>
                Portfolio
              </a>

              <a href="/team" onClick={closeMenu}>
                Team
              </a>

              <a href="/insights" onClick={closeMenu}>
                Insights
              </a>

              <a href="/podcast" onClick={closeMenu}>
                Podcast
              </a>

              <a
                href="mailto:hello@codecap.ai"
                onClick={closeMenu}
              >
                Talk to us →
              </a>

            </div>
          )}

        </nav>

        {/* HERO */}

        <section className="vs-hero">

          <div className="vs-grid"></div>

          <div className="vs-glow vs-glow-one"></div>
          <div className="vs-glow vs-glow-two"></div>

          <div className="vs-hero-inner">

            <div className="vs-reveal">

              <div className="vs-label">
                CodeCap Venture Studio
              </div>

              <h1>
                We embed.
                <br />
                We don't
                <br />
                <span className="vs-gradient">
                  observe.
                </span>
              </h1>

              <p className="vs-hero-copy">
                We work alongside founders from pre-idea
                through Series A — equity-first when all
                you have is conviction, retainer-based once
                you have revenue. Either way, we're inside
                your company with accountability on the line,
                not outside giving notes at a comfortable
                distance.
              </p>

              <div className="vs-actions">

                <a
                  href="mailto:hello@codecap.ai"
                  className="vs-primary"
                >
                  Start a Conversation →
                </a>

                <a
                  href="#services"
                  className="vs-secondary"
                >
                  What We Do
                </a>

              </div>

            </div>

            <div className="vs-visual vs-reveal">

              <div className="vs-orbit"></div>

              <div className="vs-core">

                <div className="vs-core-inner">
                  <div>CC</div>
                </div>

              </div>

              <div className="vs-float vs-float-one">
                <strong>BUILD</strong>
                <small>From zero</small>
              </div>

              <div className="vs-float vs-float-two">
                <strong>GTM</strong>
                <small>To market</small>
              </div>

              <div className="vs-float vs-float-three">
                <strong>GROW</strong>
                <small>With accountability</small>
              </div>

            </div>

          </div>

        </section>

        {/* ENGINES */}

        <section className="vs-section vs-engines">

          <div className="vs-container">

            <div className="vs-reveal">

              <div className="vs-section-label">
                Two Engines
              </div>

              <h2 className="vs-title">
                Two engines.
                <br />
                <span>One standard.</span>
              </h2>

            </div>

            <div className="vs-engine-grid">

              <div className="vs-engine vs-reveal vs-tilt">

                <div className="vs-engine-number">
                  ENGINE / 01
                </div>

                <div className="vs-engine-icon">
                  ◈
                </div>

                <h3>
                  Venture
                  <br />
                  Studio
                </h3>

                <p>
                  We work alongside founders from pre-idea
                  through Series A — building companies,
                  products, teams and markets with
                  accountability on the line.
                </p>

              </div>

              <div className="vs-engine blue vs-reveal vs-tilt">

                <div className="vs-engine-number">
                  ENGINE / 02
                </div>

                <div className="vs-engine-icon">
                  ◇
                </div>

                <h3>
                  Products
                  <br />
                  We Build
                </h3>

                <p>
                  We also build our own products in
                  cybersecurity, AI and sovereign cloud
                  security — products designed for
                  enterprise environments.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* SERVICES */}

        <section
          className="vs-section"
          id="services"
        >

          <div className="vs-container">

            <div className="vs-reveal">

              <div className="vs-section-label">
                What We Do
              </div>

              <h2 className="vs-title">
                Everything a founder
                <br />
                needs.
                <br />
                <span>Nothing they don't.</span>
              </h2>

            </div>

            <div className="vs-service-grid">

              {services.map((service) => (
                <div
                  className="vs-service vs-reveal"
                  key={service.number}
                >

                  <div className="vs-service-top">

                    <div className="vs-service-number">
                      {service.number}
                    </div>

                    <div className="vs-best">
                      {service.best}
                    </div>

                  </div>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.text}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* ENGAGEMENT MODELS */}

        <section className="vs-section vs-models">

          <div className="vs-container">

            <div className="vs-reveal">

              <div className="vs-section-label">
                Engagement Models
              </div>

              <h2 className="vs-title">
                Flexible structure.
                <br />
                <span>Real accountability.</span>
              </h2>

            </div>

            <div className="vs-model-grid">

              {models.map((model) => (
                <div
                  className="vs-model vs-reveal vs-tilt"
                  key={model.number}
                >

                  <div className="vs-model-number">
                    {model.number}
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

            <div className="vs-vesting">

              <div className="vs-vesting-copy vs-reveal">

                <div className="vs-section-label">
                  Milestone Vesting
                </div>

                <h2 className="vs-title">
                  Execution has
                  <br />
                  <span>milestones.</span>
                </h2>

                <p>
                  Our equity structure is milestone-based,
                  so value is earned through actual progress,
                  not simply time spent.
                </p>

                <div className="vs-note">
                  12-month clawback on unvested tranches.
                  Singapore/DIFC-seated legal structuring.
                </div>

              </div>

              <div className="vs-bars vs-reveal">

                <div className="vs-bar">

                  <div className="vs-bar-name">
                    Setup
                  </div>

                  <div className="vs-bar-line">
                    <div
                      className="vs-bar-fill"
                      style={{ width: "30%" }}
                    ></div>
                  </div>

                  <div className="vs-bar-percent">
                    30%
                  </div>

                </div>

                <div className="vs-bar">

                  <div className="vs-bar-name">
                    Product
                  </div>

                  <div className="vs-bar-line">
                    <div
                      className="vs-bar-fill"
                      style={{ width: "40%" }}
                    ></div>
                  </div>

                  <div className="vs-bar-percent">
                    40%
                  </div>

                </div>

                <div className="vs-bar">

                  <div className="vs-bar-name">
                    Traction
                  </div>

                  <div className="vs-bar-line">
                    <div
                      className="vs-bar-fill"
                      style={{ width: "30%" }}
                    ></div>
                  </div>

                  <div className="vs-bar-percent">
                    30%
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* MARKETS */}

        <section className="vs-section vs-markets">

          <div className="vs-container">

            <div className="vs-reveal">

              <div className="vs-section-label">
                Our Markets
              </div>

              <h2 className="vs-title">
                Singapore.
                <br />
                UAE & Saudi Arabia.
                <br />
                <span>India.</span>
              </h2>

            </div>

            <div className="vs-market-grid">

              <div className="vs-market vs-reveal vs-tilt">

                <div className="vs-market-code">
                  SEA / 01
                </div>

                <h3>
                  Singapore
                </h3>

                <p>
                  Southeast Asia
                </p>

              </div>

              <div className="vs-market vs-reveal vs-tilt">

                <div className="vs-market-code">
                  GCC / 02
                </div>

                <h3>
                  UAE & Saudi Arabia
                </h3>

                <p>
                  Gulf Markets
                </p>

              </div>

              <div className="vs-market vs-reveal vs-tilt">

                <div className="vs-market-code">
                  SOUTH ASIA / 03
                </div>

                <h3>
                  India
                </h3>

                <p>
                  South Asia
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* PRODUCTS */}

        <section className="vs-section">

          <div className="vs-container">

            <div className="vs-reveal">

              <div className="vs-section-label">
                Our Products
              </div>

              <h2 className="vs-title">
                We also build
                <br />
                <span>our own.</span>
              </h2>

            </div>

            <div className="vs-product-grid">

              <div className="vs-product vs-reveal vs-tilt">

                <div className="vs-product-tag">
                  Sovereign Cloud Security
                </div>

                <h3>
                  Abhra
                </h3>

                <p>
                  Sovereign cloud security for the regulated
                  economy — designed for enterprise buyers
                  who need visibility, compliance and control.
                </p>

                <a
                  href="/products"
                  style={{
                    color: "#f01965",
                    fontWeight: 900,
                    fontSize: "13px"
                  }}
                >
                  Explore Products →
                </a>

              </div>

              <div className="vs-product vs-reveal vs-tilt">

                <div
                  className="vs-product-tag"
                  style={{
                    color: "#029fe7",
                    background:
                      "rgba(2,159,231,.1)"
                  }}
                >
                  In Development
                </div>

                <h3>
                  ILCM
                </h3>

                <p>
                  A CodeCap product in development,
                  focused on intelligent automation and
                  enterprise security operations.
                </p>

                <a
                  href="/products"
                  style={{
                    color: "#029fe7",
                    fontWeight: 900,
                    fontSize: "13px"
                  }}
                >
                  See Product Roadmap →
                </a>

              </div>

            </div>

          </div>

        </section>

        {/* PRINCIPLES */}

        <section className="vs-section vs-principles">

          <div className="vs-container">

            <div className="vs-reveal">

              <div className="vs-section-label">
                Principles
              </div>

              <h2 className="vs-title">
                How we
                <br />
                <span>operate.</span>
              </h2>

            </div>

            <div className="vs-principle-list">

              <div className="vs-principle vs-reveal">
                <span>01</span>
                <h3>
                  Execution over advice.
                </h3>
              </div>

              <div className="vs-principle vs-reveal">
                <span>02</span>
                <h3>
                  Practitioners who sell.
                </h3>
              </div>

              <div className="vs-principle vs-reveal">
                <span>03</span>
                <h3>
                  Compliant by design.
                </h3>
              </div>

              <div className="vs-principle vs-reveal">
                <span>04</span>
                <h3>
                  Selective, not scalable.
                </h3>
              </div>

            </div>

          </div>

        </section>

        {/* PROCESS */}

        <section className="vs-section">

          <div className="vs-container">

            <div className="vs-reveal">

              <div className="vs-section-label">
                The Process
              </div>

              <h2 className="vs-title">
                From conviction
                <br />
                to <span>traction.</span>
              </h2>

            </div>

            <div className="vs-process-grid">

              <div className="vs-process vs-reveal">
                <strong>01 / DISCOVER</strong>
                <h3>Find the problem.</h3>
                <p>
                  Understand the founder, problem space,
                  market and opportunity.
                </p>
              </div>

              <div className="vs-process vs-reveal">
                <strong>02 / BUILD</strong>
                <h3>Ship the product.</h3>
                <p>
                  Move quickly from concept to something
                  real that customers can use.
                </p>
              </div>

              <div className="vs-process vs-reveal">
                <strong>03 / SELL</strong>
                <h3>Find the market.</h3>
                <p>
                  Position, sell and establish the first
                  repeatable commercial motion.
                </p>
              </div>

              <div className="vs-process vs-reveal">
                <strong>04 / SCALE</strong>
                <h3>Build traction.</h3>
                <p>
                  Strengthen the company for growth,
                  funding and regional expansion.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* COMPLIANCE */}

        <section className="vs-section vs-models">

          <div className="vs-container">

            <div className="vs-reveal">

              <div className="vs-section-label">
                Compliance
              </div>

              <h2 className="vs-title">
                Built for
                <br />
                <span>enterprise reality.</span>
              </h2>

              <p
                style={{
                  maxWidth: "680px",
                  marginTop: "30px",
                  color: "rgba(255,255,255,.5)",
                  lineHeight: "1.8"
                }}
              >
                We understand that enterprise technology
                has to survive procurement, security review,
                regulatory requirements and real-world
                operational constraints.
              </p>

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="vs-cta">

          <div className="vs-reveal">

            <div className="vs-section-label">
              Start Something
            </div>

            <h2>
              Got conviction?
              <br />
              Let's build.
            </h2>

            <p>
              Tell us what you're building, where you are
              today and where you want to go. If there's a
              fit, we'll figure out the model together.
            </p>

            <a
              href="mailto:hello@codecap.ai"
              className="vs-cta-button"
            >
              Talk to CodeCap →
            </a>

          </div>

        </section>

        {/* FOOTER */}

        <footer className="vs-footer">

          <div className="vs-footer-inner">

            <div className="vs-footer-logo">
              Code<span>Cap</span>
            </div>

            <div className="vs-footer-text">
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

export default VentureStudio;