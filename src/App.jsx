import React, { useEffect, useRef, useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const reveals = document.querySelectorAll(".cc-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("cc-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    reveals.forEach((item) => observer.observe(item));

    const cards = document.querySelectorAll(".cc-tilt");

    const moveCard = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = ((y - rect.height / 2) / rect.height) * -8;
      const rotateY = ((x - rect.width / 2) / rect.width) * 8;

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

    const handleMouseMove = (e) => {
      if (!heroRef.current) return;

      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      heroRef.current.style.setProperty("--mx", `${x * 20}px`);
      heroRef.current.style.setProperty("--my", `${y * 20}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);

      cards.forEach((card) => {
        card.removeEventListener("mousemove", moveCard);
        card.removeEventListener("mouseleave", resetCard);
      });
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

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

        .cc-page {
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(circle at 15% 20%, rgba(240,25,101,.12), transparent 25%),
            radial-gradient(circle at 85% 25%, rgba(2,159,231,.12), transparent 25%),
            #08090d;
        }

        /* =========================
           NAVBAR
        ========================= */

        .cc-nav {
          position: fixed;
          top: 14px;
          left: 50%;
          transform: translateX(-50%);
          width: min(1180px, calc(100% - 32px));
          z-index: 1000;
          padding: 14px 18px;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 22px;
          background: rgba(10,11,17,.72);
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 60px rgba(0,0,0,.25);
        }

        .cc-nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .cc-logo {
          font-size: 25px;
          font-weight: 900;
          letter-spacing: -1.5px;
          white-space: nowrap;
        }

        .cc-logo span {
          color: #f01965;
        }

        .cc-links {
          display: flex;
          align-items: center;
          gap: 24px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .cc-links a {
          color: rgba(255,255,255,.72);
          font-size: 14px;
          font-weight: 700;
          transition: .25s ease;
        }

        .cc-links a:hover {
          color: #fff;
          transform: translateY(-2px);
        }

        .cc-talk {
          border: 0;
          cursor: pointer;
          padding: 13px 20px;
          border-radius: 13px;
          background: linear-gradient(135deg, #f01965, #b90c70);
          color: white;
          font-weight: 800;
          box-shadow: 0 10px 30px rgba(240,25,101,.25);
          transition: .3s ease;
        }

        .cc-talk:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 15px 40px rgba(240,25,101,.4);
        }

        .cc-menu-btn {
          display: none;
          border: 1px solid rgba(255,255,255,.14);
          background: rgba(255,255,255,.06);
          color: white;
          border-radius: 12px;
          width: 44px;
          height: 44px;
          cursor: pointer;
          font-size: 21px;
        }

        /* =========================
           HERO
        ========================= */

        .cc-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 150px 7vw 100px;
          overflow: hidden;
          background:
            linear-gradient(
              120deg,
              rgba(240,25,101,.16),
              transparent 35%,
              rgba(2,159,231,.14)
            );
        }

        .cc-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px);
          background-size: 58px 58px;
          mask-image: linear-gradient(to bottom, black, transparent 90%);
          pointer-events: none;
        }

        .cc-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(100px);
          opacity: .28;
          pointer-events: none;
        }

        .cc-glow-one {
          background: #f01965;
          top: 5%;
          left: -15%;
          animation: ccGlowMove 8s ease-in-out infinite alternate;
        }

        .cc-glow-two {
          background: #029fe7;
          right: -15%;
          bottom: 0;
          animation: ccGlowMove 10s ease-in-out infinite alternate-reverse;
        }

        @keyframes ccGlowMove {
          from {
            transform: translate3d(0,0,0) scale(1);
          }
          to {
            transform: translate3d(80px,-40px,0) scale(1.2);
          }
        }

        .cc-hero-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1280px;
          margin: auto;
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          align-items: center;
          gap: 60px;
        }

        .cc-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 8px 13px;
          border: 1px solid rgba(255,255,255,.13);
          border-radius: 100px;
          background: rgba(255,255,255,.04);
          color: rgba(255,255,255,.75);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .13em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .cc-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #f01965;
          box-shadow: 0 0 15px #f01965;
          animation: ccPulse 1.8s infinite;
        }

        @keyframes ccPulse {
          50% {
            transform: scale(1.8);
            opacity: .45;
          }
        }

        .cc-hero h1 {
          margin: 0;
          max-width: 850px;
          font-size: clamp(48px, 6.2vw, 94px);
          line-height: .94;
          letter-spacing: -5px;
          font-weight: 900;
        }

        .cc-gradient-text {
          background: linear-gradient(
            100deg,
            #f01965,
            #ff4b8b,
            #029fe7
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          background-size: 200% auto;
          animation: ccGradient 5s linear infinite;
        }

        @keyframes ccGradient {
          to {
            background-position: 200% center;
          }
        }

        .cc-hero-copy {
          max-width: 670px;
          margin-top: 30px;
          color: rgba(255,255,255,.66);
          font-size: 17px;
          line-height: 1.85;
        }

        .cc-hero-actions {
          display: flex;
          gap: 13px;
          flex-wrap: wrap;
          margin-top: 34px;
        }

        .cc-primary,
        .cc-secondary {
          padding: 15px 22px;
          border-radius: 14px;
          font-weight: 800;
          transition: .3s ease;
        }

        .cc-primary {
          background: #fff;
          color: #090a0e;
        }

        .cc-primary:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(255,255,255,.12);
        }

        .cc-secondary {
          border: 1px solid rgba(255,255,255,.15);
          background: rgba(255,255,255,.04);
          color: #fff;
        }

        .cc-secondary:hover {
          transform: translateY(-4px);
          border-color: rgba(240,25,101,.6);
        }

        /* =========================
           3D HERO VISUAL
        ========================= */

        .cc-hero-visual {
          position: relative;
          min-height: 560px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1200px;
        }

        .cc-orbit {
          position: absolute;
          width: 430px;
          height: 430px;
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 50%;
          transform: rotateX(65deg);
          animation: ccOrbit 12s linear infinite;
        }

        .cc-orbit::before,
        .cc-orbit::after {
          content: "";
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .cc-orbit::before {
          top: 30px;
          left: 55px;
          background: #f01965;
          box-shadow: 0 0 25px #f01965;
        }

        .cc-orbit::after {
          bottom: 30px;
          right: 55px;
          background: #029fe7;
          box-shadow: 0 0 25px #029fe7;
        }

        @keyframes ccOrbit {
          to {
            transform: rotateX(65deg) rotateZ(360deg);
          }
        }

        .cc-3d-card {
          position: relative;
          width: min(390px, 80%);
          min-height: 330px;
          padding: 30px;
          border-radius: 30px;
          border: 1px solid rgba(255,255,255,.17);
          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,.11),
              rgba(255,255,255,.025)
            );
          backdrop-filter: blur(18px);
          box-shadow:
            0 45px 100px rgba(0,0,0,.55),
            inset 0 1px 0 rgba(255,255,255,.1);
          transform:
            translate3d(var(--mx,0), var(--my,0), 0)
            rotateX(10deg)
            rotateY(-12deg);
          transition: transform .2s ease-out;
        }

        .cc-3d-card::before {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: 32px;
          padding: 2px;
          background: linear-gradient(135deg, #f01965, transparent 40%, #029fe7);
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: .8;
        }

        .cc-window-top {
          display: flex;
          gap: 7px;
          margin-bottom: 28px;
        }

        .cc-window-top span {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: rgba(255,255,255,.25);
        }

        .cc-code-line {
          height: 13px;
          margin: 14px 0;
          border-radius: 20px;
          background: rgba(255,255,255,.09);
          overflow: hidden;
        }

        .cc-code-line::after {
          content: "";
          display: block;
          width: 60%;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #f01965, #029fe7);
          animation: ccLine 3s ease-in-out infinite alternate;
        }

        .cc-code-line:nth-child(3)::after {
          width: 82%;
          animation-delay: .3s;
        }

        .cc-code-line:nth-child(4)::after {
          width: 45%;
          animation-delay: .7s;
        }

        .cc-code-line:nth-child(5)::after {
          width: 72%;
          animation-delay: 1s;
        }

        @keyframes ccLine {
          from {
            transform: translateX(-25%);
          }
          to {
            transform: translateX(20%);
          }
        }

        .cc-floating {
          position: absolute;
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(255,255,255,.07);
          backdrop-filter: blur(15px);
          box-shadow: 0 25px 60px rgba(0,0,0,.3);
          border-radius: 18px;
          padding: 15px 18px;
          animation: ccFloat 5s ease-in-out infinite;
        }

        .cc-floating strong {
          display: block;
          font-size: 20px;
        }

        .cc-floating small {
          color: rgba(255,255,255,.5);
        }

        .cc-floating-one {
          top: 70px;
          right: 0;
        }

        .cc-floating-two {
          left: 0;
          bottom: 80px;
          animation-delay: -2s;
        }

        .cc-floating-three {
          right: 25px;
          bottom: 15px;
          animation-delay: -3.5s;
        }

        @keyframes ccFloat {
          0%,100% {
            transform: translateY(0) rotateZ(0deg);
          }
          50% {
            transform: translateY(-18px) rotateZ(2deg);
          }
        }

        /* =========================
           MARQUEE
        ========================= */

        .cc-marquee {
          overflow: hidden;
          border-top: 1px solid rgba(255,255,255,.08);
          border-bottom: 1px solid rgba(255,255,255,.08);
          background: #0c0e14;
        }

        .cc-marquee-track {
          width: max-content;
          display: flex;
          animation: ccMarquee 25s linear infinite;
        }

        .cc-marquee-item {
          padding: 23px 35px;
          color: rgba(255,255,255,.48);
          font-size: 13px;
          font-weight: 800;
          letter-spacing: .15em;
          text-transform: uppercase;
        }

        .cc-marquee-item span {
          color: #f01965;
          margin-left: 35px;
        }

        @keyframes ccMarquee {
          to {
            transform: translateX(-50%);
          }
        }

        /* =========================
           STORY
        ========================= */

        .cc-section {
          padding: 130px 7vw;
          position: relative;
        }

        .cc-container {
          max-width: 1180px;
          margin: auto;
        }

        .cc-section-label {
          color: #f01965;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: .16em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .cc-section-title {
          max-width: 900px;
          margin: 0;
          font-size: clamp(42px, 5vw, 74px);
          line-height: 1;
          letter-spacing: -3px;
        }

        .cc-section-title span {
          color: rgba(255,255,255,.28);
        }

        .cc-story-grid {
          margin-top: 70px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .cc-story-card {
          min-height: 340px;
          padding: 30px;
          border-radius: 28px;
          border: 1px solid rgba(255,255,255,.09);
          background: linear-gradient(
            145deg,
            rgba(255,255,255,.07),
            rgba(255,255,255,.025)
          );
          position: relative;
          overflow: hidden;
          transition: .45s ease;
        }

        .cc-story-card:hover {
          transform: translateY(-12px);
          border-color: rgba(240,25,101,.35);
          box-shadow: 0 35px 80px rgba(0,0,0,.35);
        }

        .cc-story-number {
          font-size: 12px;
          color: #029fe7;
          font-weight: 900;
          letter-spacing: .12em;
        }

        .cc-story-card h3 {
          margin: 70px 0 20px;
          font-size: 30px;
          line-height: 1.1;
          letter-spacing: -1px;
        }

        .cc-story-card p {
          color: rgba(255,255,255,.55);
          line-height: 1.7;
        }

        .cc-card-orb {
          position: absolute;
          width: 150px;
          height: 150px;
          right: -60px;
          bottom: -60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f01965, #029fe7);
          filter: blur(25px);
          opacity: .25;
        }

        /* =========================
           MANIFESTO
        ========================= */

        .cc-manifesto {
          min-height: 85vh;
          display: flex;
          align-items: center;
          background:
            radial-gradient(
              circle at 80% 50%,
              rgba(2,159,231,.15),
              transparent 35%
            ),
            radial-gradient(
              circle at 10% 30%,
              rgba(240,25,101,.14),
              transparent 35%
            );
        }

        .cc-manifesto-inner {
          max-width: 1200px;
          margin: auto;
          width: 100%;
        }

        .cc-manifesto-line {
          padding: 38px 0;
          border-top: 1px solid rgba(255,255,255,.1);
          display: flex;
          justify-content: space-between;
          gap: 30px;
          align-items: center;
          transition: .4s ease;
        }

        .cc-manifesto-line:last-child {
          border-bottom: 1px solid rgba(255,255,255,.1);
        }

        .cc-manifesto-line:hover {
          padding-left: 25px;
          border-color: rgba(240,25,101,.4);
        }

        .cc-manifesto-line span {
          color: #029fe7;
          font-size: 13px;
          font-weight: 900;
        }

        .cc-manifesto-line h2 {
          margin: 0;
          font-size: clamp(34px, 4.5vw, 65px);
          line-height: 1;
          letter-spacing: -3px;
        }

        /* =========================
           ENGAGEMENT
        ========================= */

        .cc-engagement {
          background: #f4f5f7;
          color: #0b0c10;
        }

        .cc-engagement .cc-section-label {
          color: #f01965;
        }

        .cc-engagement .cc-section-title span {
          color: #737783;
        }

        .cc-eng-grid {
          margin-top: 65px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .cc-eng-card {
          min-height: 390px;
          padding: 38px;
          border-radius: 30px;
          background: #fff;
          border: 1px solid #e2e4e9;
          position: relative;
          overflow: hidden;
          transition: transform .25s ease, box-shadow .25s ease;
          transform-style: preserve-3d;
        }

        .cc-eng-card::after {
          content: "";
          position: absolute;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          right: -90px;
          top: -90px;
          background: #f01965;
          filter: blur(55px);
          opacity: .12;
        }

        .cc-eng-card.blue::after {
          background: #029fe7;
        }

        .cc-eng-icon {
          width: 65px;
          height: 65px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #101118;
          color: #fff;
          font-size: 27px;
          margin-bottom: 65px;
          box-shadow: 12px 12px 0 rgba(240,25,101,.15);
        }

        .cc-eng-card.blue .cc-eng-icon {
          box-shadow: 12px 12px 0 rgba(2,159,231,.18);
        }

        .cc-eng-tag {
          color: #f01965;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: .14em;
          text-transform: uppercase;
        }

        .cc-eng-card.blue .cc-eng-tag {
          color: #029fe7;
        }

        .cc-eng-card h3 {
          font-size: 35px;
          letter-spacing: -1.5px;
          margin: 12px 0 17px;
        }

        .cc-eng-card p {
          color: #687080;
          line-height: 1.75;
          margin: 0;
        }

        /* =========================
           LOCATIONS
        ========================= */

        .cc-locations {
          padding: 110px 7vw;
          background: #0c0e14;
        }

        .cc-location-grid {
          margin-top: 60px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .cc-location {
          min-height: 250px;
          padding: 28px;
          border-radius: 25px;
          border: 1px solid rgba(255,255,255,.1);
          background: linear-gradient(
            135deg,
            rgba(255,255,255,.06),
            rgba(255,255,255,.02)
          );
          transition: .4s ease;
          position: relative;
          overflow: hidden;
        }

        .cc-location:hover {
          transform: translateY(-10px) rotateX(3deg);
          border-color: rgba(2,159,231,.45);
        }

        .cc-location-code {
          font-size: 12px;
          color: #f01965;
          font-weight: 900;
          letter-spacing: .15em;
        }

        .cc-location h3 {
          font-size: 32px;
          margin: 60px 0 10px;
        }

        .cc-location p {
          color: rgba(255,255,255,.5);
          margin: 0;
        }

        /* =========================
           CTA
        ========================= */

        .cc-cta {
          padding: 150px 7vw;
          text-align: center;
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(
              135deg,
              rgba(240,25,101,.16),
              rgba(2,159,231,.12)
            );
        }

        .cc-cta h2 {
          max-width: 900px;
          margin: auto;
          font-size: clamp(48px, 7vw, 95px);
          line-height: .95;
          letter-spacing: -5px;
        }

        .cc-cta p {
          max-width: 650px;
          margin: 28px auto 35px;
          color: rgba(255,255,255,.58);
          line-height: 1.8;
        }

        .cc-cta-button {
          display: inline-flex;
          padding: 17px 28px;
          border-radius: 15px;
          background: #fff;
          color: #08090d;
          font-weight: 900;
          transition: .35s ease;
        }

        .cc-cta-button:hover {
          transform: translateY(-6px) scale(1.03);
          box-shadow: 0 20px 60px rgba(255,255,255,.15);
        }

        /* =========================
           FOOTER
        ========================= */

        .cc-footer {
          padding: 35px 7vw;
          border-top: 1px solid rgba(255,255,255,.08);
          background: #07080b;
        }

        .cc-footer-inner {
          max-width: 1180px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 25px;
        }

        .cc-footer-brand {
          font-size: 23px;
          font-weight: 900;
        }

        .cc-footer-brand span {
          color: #f01965;
        }

        .cc-footer-text {
          color: rgba(255,255,255,.4);
          font-size: 12px;
          text-align: right;
        }

        /* =========================
           REVEAL
        ========================= */

        .cc-reveal {
          opacity: 0;
          transform: translateY(55px);
          transition:
            opacity .9s ease,
            transform .9s cubic-bezier(.2,.8,.2,1);
        }

        .cc-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 1000px) {

          .cc-links {
            gap: 13px;
          }

          .cc-links a {
            font-size: 12px;
          }

          .cc-hero-inner {
            grid-template-columns: 1fr;
          }

          .cc-hero-visual {
            min-height: 480px;
          }

          .cc-story-grid,
          .cc-location-grid {
            grid-template-columns: 1fr 1fr;
          }

        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 760px) {

          .cc-nav {
            top: 8px;
            width: calc(100% - 18px);
            border-radius: 18px;
          }

          .cc-links,
          .cc-talk {
            display: none;
          }

          .cc-menu-btn {
            display: block;
          }

          .cc-mobile-menu {
            position: absolute;
            top: calc(100% + 8px);
            left: 0;
            right: 0;
            padding: 12px;
            border: 1px solid rgba(255,255,255,.1);
            border-radius: 18px;
            background: rgba(10,11,17,.96);
            backdrop-filter: blur(20px);
            box-shadow: 0 20px 50px rgba(0,0,0,.4);
          }

          .cc-mobile-menu a {
            display: block;
            padding: 14px;
            border-radius: 12px;
            color: rgba(255,255,255,.75);
            font-weight: 700;
          }

          .cc-mobile-menu a:hover {
            background: rgba(255,255,255,.06);
            color: #fff;
          }

          .cc-hero {
            padding: 130px 20px 70px;
          }

          .cc-hero-inner {
            gap: 20px;
          }

          .cc-hero h1 {
            font-size: clamp(45px, 14vw, 70px);
            letter-spacing: -3px;
          }

          .cc-hero-copy {
            font-size: 15px;
          }

          .cc-hero-visual {
            min-height: 390px;
          }

          .cc-3d-card {
            width: 82%;
            min-height: 280px;
            padding: 24px;
          }

          .cc-orbit {
            width: 290px;
            height: 290px;
          }

          .cc-floating {
            padding: 11px 13px;
          }

          .cc-floating-one {
            top: 35px;
            right: 0;
          }

          .cc-floating-two {
            left: 0;
            bottom: 50px;
          }

          .cc-floating-three {
            right: 0;
            bottom: 0;
          }

          .cc-section {
            padding: 85px 20px;
          }

          .cc-section-title {
            font-size: 43px;
            letter-spacing: -2px;
          }

          .cc-story-grid,
          .cc-eng-grid,
          .cc-location-grid {
            grid-template-columns: 1fr;
          }

          .cc-story-card {
            min-height: 300px;
          }

          .cc-manifesto {
            min-height: auto;
          }

          .cc-manifesto-line {
            display: block;
            padding: 30px 0;
          }

          .cc-manifesto-line h2 {
            margin-top: 12px;
            font-size: 38px;
            letter-spacing: -2px;
          }

          .cc-eng-card {
            min-height: 340px;
            padding: 28px;
          }

          .cc-eng-icon {
            margin-bottom: 45px;
          }

          .cc-eng-card h3 {
            font-size: 30px;
          }

          .cc-locations {
            padding: 80px 20px;
          }

          .cc-cta {
            padding: 100px 20px;
          }

          .cc-cta h2 {
            font-size: 52px;
            letter-spacing: -3px;
          }

          .cc-footer {
            padding: 28px 20px;
          }

          .cc-footer-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .cc-footer-text {
            text-align: left;
          }

        }

      `}</style>

      <div className="cc-page">

        {/* =========================
            NAVBAR
        ========================= */}

        <nav className="cc-nav">
          <div className="cc-nav-inner">

            <a href="/" className="cc-logo">
              Code<span>Cap</span>
            </a>

            <div className="cc-links">
              <a href="/venture-studio">Venture Studio</a>
              <a href="/services">Services</a>
              <a href="/products">Products</a>
              <a href="/portfolio">Portfolio</a>
              <a href="/team">Team</a>
              <a href="/insights">Insights</a>
              <a href="/podcast">Podcast</a>
            </div>

            <button
              className="cc-talk"
              onClick={() =>
                (window.location.href = "mailto:hello@codecap.ai")
              }
            >
              Talk to us
            </button>

            <button
              className="cc-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "×" : "☰"}
            </button>

          </div>

          {menuOpen && (
            <div className="cc-mobile-menu">
              <a href="/" onClick={closeMenu}>Home</a>
              <a href="/venture-studio" onClick={closeMenu}>
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

        {/* =========================
            HERO
        ========================= */}

        <section className="cc-hero" ref={heroRef}>

          <div className="cc-grid"></div>
          <div className="cc-glow cc-glow-one"></div>
          <div className="cc-glow cc-glow-two"></div>

          <div className="cc-hero-inner">

            <div className="cc-reveal">

              <div className="cc-eyebrow">
                <span className="cc-dot"></span>
                CodeCap Ventures
              </div>

              <h1>
                We build
                <br />
                companies.
                <br />
                We ship
                <br />
                <span className="cc-gradient-text">
                  products.
                </span>
              </h1>

              <p className="cc-hero-copy">
                CodeCap is an AI-native venture studio and product
                company operating across Singapore, the Gulf, and
                South Asia. Our partners have spent decades building
                and selling enterprise security — at Trend Micro,
                Tenable, and Wipro. We became studio partners because
                we were operators first. And we still are.
              </p>

              <div className="cc-hero-actions">
                <a
                  href="/venture-studio"
                  className="cc-primary"
                >
                  Explore the Studio →
                </a>

                <a
                  href="/products"
                  className="cc-secondary"
                >
                  See Our Products
                </a>
              </div>

            </div>

            <div className="cc-hero-visual cc-reveal">

              <div className="cc-orbit"></div>

              <div className="cc-3d-card">

                <div className="cc-window-top">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="cc-code-line"></div>
                <div className="cc-code-line"></div>
                <div className="cc-code-line"></div>
                <div className="cc-code-line"></div>
                <div className="cc-code-line"></div>

                <div
                  style={{
                    marginTop: "35px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <div>
                    <div
                      style={{
                        color: "rgba(255,255,255,.45)",
                        fontSize: "11px",
                        textTransform: "uppercase",
                        letterSpacing: ".12em"
                      }}
                    >
                      Execution
                    </div>

                    <strong
                      style={{
                        display: "block",
                        marginTop: "6px",
                        fontSize: "28px"
                      }}
                    >
                      100%
                    </strong>
                  </div>

                  <div
                    style={{
                      width: "55px",
                      height: "55px",
                      borderRadius: "50%",
                      background:
                        "conic-gradient(#f01965 0deg, #029fe7 280deg, rgba(255,255,255,.08) 280deg)",
                      display: "grid",
                      placeItems: "center"
                    }}
                  >
                    <div
                      style={{
                        width: "41px",
                        height: "41px",
                        borderRadius: "50%",
                        background: "#11131b"
                      }}
                    ></div>
                  </div>

                </div>

              </div>

              <div className="cc-floating cc-floating-one">
                <strong>AI</strong>
                <small>Native</small>
              </div>

              <div className="cc-floating cc-floating-two">
                <strong>SEA</strong>
                <small>Gulf · India</small>
              </div>

              <div className="cc-floating cc-floating-three">
                <strong>SHIP</strong>
                <small>Not slides</small>
              </div>

            </div>

          </div>

        </section>

        {/* =========================
            MARQUEE
        ========================= */}

        <div className="cc-marquee">
          <div className="cc-marquee-track">

            {Array.from({ length: 2 }).map((_, index) => (
              <React.Fragment key={index}>

                <div className="cc-marquee-item">
                  AI-NATIVE <span>✦</span>
                </div>

                <div className="cc-marquee-item">
                  CYBERSECURITY <span>✦</span>
                </div>

                <div className="cc-marquee-item">
                  VENTURE BUILDING <span>✦</span>
                </div>

                <div className="cc-marquee-item">
                  ENTERPRISE GTM <span>✦</span>
                </div>

                <div className="cc-marquee-item">
                  SINGAPORE · GULF · INDIA <span>✦</span>
                </div>

              </React.Fragment>
            ))}

          </div>
        </div>

        {/* =========================
            STORY
        ========================= */}

        <section className="cc-section">

          <div className="cc-container">

            <div className="cc-reveal">
              <div className="cc-section-label">
                The CodeCap Standard
              </div>

              <h2 className="cc-section-title">
                Every engagement ends in something{" "}
                <span>shipped.</span>
              </h2>
            </div>

            <div className="cc-story-grid">

              <div className="cc-story-card cc-reveal cc-tilt">
                <div className="cc-story-number">
                  01 / CONVICTION
                </div>

                <h3>
                  Every company begins with one idea.
                </h3>

                <p>
                  The idea is only the beginning. We help turn
                  conviction into something that can actually be
                  built, tested and sold.
                </p>

                <div className="cc-card-orb"></div>
              </div>

              <div className="cc-story-card cc-reveal cc-tilt">
                <div className="cc-story-number">
                  02 / EXECUTION
                </div>

                <h3>
                  Ideas don't fail. Execution does.
                </h3>

                <p>
                  We operate inside the company. Product, technology,
                  sales and market execution all move together.
                </p>

                <div className="cc-card-orb"></div>
              </div>

              <div className="cc-story-card cc-reveal cc-tilt">
                <div className="cc-story-number">
                  03 / MARKETS
                </div>

                <h3>
                  Singapore. The Gulf. India.
                </h3>

                <p>
                  The world's fastest-growing markets deserve better
                  builders — people who understand technology and
                  know how to take it to market.
                </p>

                <div className="cc-card-orb"></div>
              </div>

            </div>

          </div>

        </section>

        {/* =========================
            MANIFESTO
        ========================= */}

        <section className="cc-section cc-manifesto">

          <div className="cc-manifesto-inner">

            <div className="cc-reveal">
              <div className="cc-section-label">
                Our Manifesto
              </div>
            </div>

            <div className="cc-manifesto-line cc-reveal">
              <span>01</span>
              <h2>
                We don't pitch ourselves.
                <br />
                We ship <span className="cc-gradient-text">proof.</span>
              </h2>
            </div>

            <div className="cc-manifesto-line cc-reveal">
              <span>02</span>
              <h2>
                Conviction is the deposit.
                <br />
                Execution is the rest.
              </h2>
            </div>

            <div className="cc-manifesto-line cc-reveal">
              <span>03</span>
              <h2>
                Most studios collect logos.
                <br />
                We collect outcomes.
              </h2>
            </div>

            <div className="cc-manifesto-line cc-reveal">
              <span>04</span>
              <h2>
                We are not for everyone.
                <br />
                We were never trying to be.
              </h2>
            </div>

          </div>

        </section>

        {/* =========================
            ENGAGEMENT
        ========================= */}

        <section className="cc-section cc-engagement">

          <div className="cc-container">

            <div className="cc-reveal">

              <div className="cc-section-label">
                How We Work
              </div>

              <h2 className="cc-section-title">
                We don't just advise.
                <br />
                <span>We embed.</span>
              </h2>

            </div>

            <div className="cc-eng-grid">

              <div className="cc-eng-card cc-reveal cc-tilt">

                <div className="cc-eng-icon">
                  ◈
                </div>

                <div className="cc-eng-tag">
                  Venture Studio
                </div>

                <h3>
                  We embed.
                  <br />
                  We don't observe.
                </h3>

                <p>
                  We work alongside founders from pre-idea through
                  Series A — equity-first when all you have is
                  conviction, retainer-based once you have revenue.
                  Either way, we're inside your company with
                  accountability on the line.
                </p>

              </div>

              <div className="cc-eng-card blue cc-reveal cc-tilt">

                <div className="cc-eng-icon">
                  ◇
                </div>

                <div className="cc-eng-tag">
                  Products
                </div>

                <h3>
                  We also build
                  <br />
                  our own.
                </h3>

                <p>
                  Sovereign cloud security. Autonomous incident
                  response. Tools we'd use ourselves — sold to
                  enterprises across SEA, the Gulf, and South Asia
                  who can't afford to be wrong about security.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =========================
            QUOTE
        ========================= */}

        <section className="cc-section">

          <div
            className="cc-container cc-reveal"
            style={{
              padding: "55px",
              borderRadius: "30px",
              background:
                "linear-gradient(135deg, #13151e, #0b0d13)",
              border:
                "1px solid rgba(255,255,255,.09)",
              boxShadow:
                "0 35px 90px rgba(0,0,0,.35)"
            }}
          >

            <div
              style={{
                color: "#f01965",
                fontSize: "40px",
                marginBottom: "20px"
              }}
            >
              "
            </div>

            <blockquote
              style={{
                margin: 0,
                maxWidth: "1000px",
                fontSize: "clamp(28px, 4vw, 53px)",
                lineHeight: "1.08",
                letterSpacing: "-2px"
              }}
            >
              The best studio partners I've worked with didn't
              tell me what to do. They just showed up and did it.
              That's the standard we hold ourselves to.
            </blockquote>

            <p
              style={{
                marginTop: "30px",
                color: "rgba(255,255,255,.45)",
                fontSize: "13px"
              }}
            >
              — Baburaj Varma, Co-Founder & Managing Partner,
              CodeCap · Former VP Technical AMEA, Trend Micro
            </p>

          </div>

        </section>

        {/* =========================
            MARKETS
        ========================= */}

        <section className="cc-locations">

          <div className="cc-container">

            <div className="cc-reveal">

              <div className="cc-section-label">
                Where We Build
              </div>

              <h2 className="cc-section-title">
                Three markets.
                <br />
                <span>One operating model.</span>
              </h2>

            </div>

            <div className="cc-location-grid">

              <div className="cc-location cc-reveal cc-tilt">
                <div className="cc-location-code">
                  SG / 01
                </div>

                <h3>Singapore</h3>

                <p>
                  Southeast Asia
                </p>
              </div>

              <div className="cc-location cc-reveal cc-tilt">
                <div className="cc-location-code">
                  GCC / 02
                </div>

                <h3>The Gulf</h3>

                <p>
                  UAE · Saudi Arabia
                </p>
              </div>

              <div className="cc-location cc-reveal cc-tilt">
                <div className="cc-location-code">
                  IN / 03
                </div>

                <h3>India</h3>

                <p>
                  South Asia
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* =========================
            FINAL CTA
        ========================= */}

        <section className="cc-cta">

          <div className="cc-reveal">

            <div className="cc-section-label">
              CodeCap Ventures
            </div>

            <h2>
              The right hundred founders already know who they are.
            </h2>

            <p>
              If that's you — keep reading. Tell us where you are
              and what you're building. We'll tell you if we're the
              right partner.
            </p>

            <a
              href="mailto:hello@codecap.ai"
              className="cc-cta-button"
            >
              Talk to the Team →
            </a>

          </div>

        </section>

        {/* =========================
            FOOTER
        ========================= */}

        <footer className="cc-footer">

          <div className="cc-footer-inner">

            <div className="cc-footer-brand">
              Code<span>Cap</span>
            </div>

            <div className="cc-footer-text">
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

export default App;