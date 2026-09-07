import React, { useEffect, useState } from "react";

function Products() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(0);

  useEffect(() => {
    const reveals = document.querySelectorAll(".pd-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("pd-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    reveals.forEach((item) => observer.observe(item));

    const cards = document.querySelectorAll(".pd-tilt");

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

  const products = [
    {
      name: "Abhra",
      status: "Available Now",
      category: "Sovereign Cloud Security",
      description:
        "Sovereign cloud security for the regulated economy.",
      fullDescription:
        "Abhra provides universal-inventory scanning across AWS, Azure and GCP, mapped to 25 compliance frameworks. It is desktop-first and scan data never leaves the machine.",
      checks: "1,894+",
      frameworks: "25",
      clouds: "AWS · Azure · GCP",
      button: "Download Abhra",
      link: "https://abhra.world/download"
    },
    {
      name: "ILCM",
      status: "In Development",
      category: "Intelligent Security",
      description:
        "A CodeCap product in development.",
      fullDescription:
        "ILCM is in development as part of CodeCap's product portfolio, focused on intelligent automation and enterprise security operations.",
      checks: "Early",
      frameworks: "Access",
      clouds: "Enterprise",
      button: "Join Early Access",
      link: "mailto:products@codecap.ai"
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

        .pd-page {
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
              rgba(2,159,231,.12),
              transparent 28%
            ),
            #08090d;
        }

        /* NAVBAR */

        .pd-nav {
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

        .pd-nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .pd-logo {
          font-size: 25px;
          font-weight: 900;
          letter-spacing: -1.5px;
        }

        .pd-logo span {
          color: #f01965;
        }

        .pd-links {
          display: flex;
          align-items: center;
          gap: 21px;
        }

        .pd-links a {
          color: rgba(255,255,255,.7);
          font-size: 13px;
          font-weight: 700;
          transition: .25s ease;
        }

        .pd-links a:hover,
        .pd-active {
          color: #fff !important;
        }

        .pd-talk {
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

        .pd-menu {
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

        .pd-hero {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          padding: 155px 7vw 100px;
          overflow: hidden;
        }

        .pd-grid {
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

        .pd-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(110px);
          opacity: .23;
        }

        .pd-glow-one {
          left: -180px;
          top: 70px;
          background: #f01965;
          animation: pdGlow 8s ease-in-out infinite alternate;
        }

        .pd-glow-two {
          right: -180px;
          bottom: -50px;
          background: #029fe7;
          animation: pdGlow 10s ease-in-out infinite alternate-reverse;
        }

        @keyframes pdGlow {
          to {
            transform: translate(80px,-40px) scale(1.2);
          }
        }

        .pd-hero-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1240px;
          margin: auto;
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          gap: 70px;
          align-items: center;
        }

        .pd-label {
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

        .pd-hero h1 {
          margin: 25px 0 0;
          font-size: clamp(52px, 7vw, 96px);
          line-height: .92;
          letter-spacing: -5px;
          font-weight: 900;
        }

        .pd-gradient {
          background:
            linear-gradient(
              100deg,
              #f01965,
              #ff4f8c,
              #029fe7
            );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: pdGradient 5s linear infinite;
        }

        @keyframes pdGradient {
          to {
            background-position: 200% center;
          }
        }

        .pd-hero-copy {
          max-width: 680px;
          margin-top: 30px;
          color: rgba(255,255,255,.61);
          font-size: 16px;
          line-height: 1.85;
        }

        .pd-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 33px;
        }

        .pd-primary,
        .pd-secondary {
          padding: 15px 22px;
          border-radius: 14px;
          font-weight: 800;
          transition: .3s ease;
        }

        .pd-primary {
          color: #08090d;
          background: #fff;
        }

        .pd-secondary {
          color: #fff;
          border: 1px solid rgba(255,255,255,.15);
          background: rgba(255,255,255,.04);
        }

        .pd-primary:hover,
        .pd-secondary:hover {
          transform: translateY(-4px);
        }

        /* 3D PRODUCT */

        .pd-visual {
          min-height: 520px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          perspective: 1200px;
        }

        .pd-orbit {
          position: absolute;
          width: 410px;
          height: 410px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,.1);
          transform: rotateX(65deg);
          animation: pdOrbit 12s linear infinite;
        }

        .pd-orbit::before,
        .pd-orbit::after {
          content: "";
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .pd-orbit::before {
          top: 35px;
          left: 55px;
          background: #f01965;
          box-shadow: 0 0 25px #f01965;
        }

        .pd-orbit::after {
          bottom: 35px;
          right: 55px;
          background: #029fe7;
          box-shadow: 0 0 25px #029fe7;
        }

        @keyframes pdOrbit {
          to {
            transform:
              rotateX(65deg)
              rotateZ(360deg);
          }
        }

        .pd-device {
          position: relative;
          width: 355px;
          min-height: 365px;
          padding: 25px;
          border-radius: 28px;
          border: 1px solid rgba(255,255,255,.16);
          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,.11),
              rgba(255,255,255,.025)
            );
          backdrop-filter: blur(18px);
          box-shadow:
            0 50px 100px rgba(0,0,0,.55),
            inset 0 1px 0 rgba(255,255,255,.1);
          transform:
            rotateX(10deg)
            rotateY(-13deg);
          animation: pdDevice 5s ease-in-out infinite;
        }

        @keyframes pdDevice {
          50% {
            transform:
              translateY(-16px)
              rotateX(14deg)
              rotateY(-18deg);
          }
        }

        .pd-window {
          display: flex;
          gap: 6px;
        }

        .pd-window span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,.25);
        }

        .pd-device-label {
          margin-top: 30px;
          color: rgba(255,255,255,.42);
          font-size: 10px;
          letter-spacing: .15em;
          text-transform: uppercase;
        }

        .pd-device-name {
          margin-top: 8px;
          font-size: 34px;
          font-weight: 900;
        }

        .pd-device-status {
          display: inline-flex;
          margin-top: 12px;
          padding: 7px 10px;
          border-radius: 100px;
          background: rgba(240,25,101,.12);
          color: #ff4b88;
          font-size: 9px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .pd-device-grid {
          margin-top: 30px;
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 8px;
        }

        .pd-device-box {
          height: 62px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,.08);
          background: rgba(255,255,255,.04);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 9px;
        }

        .pd-device-box strong {
          font-size: 15px;
        }

        .pd-device-box small {
          color: rgba(255,255,255,.4);
          font-size: 8px;
          margin-top: 3px;
        }

        .pd-floating {
          position: absolute;
          padding: 14px 17px;
          border-radius: 17px;
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(255,255,255,.07);
          backdrop-filter: blur(15px);
          box-shadow: 0 25px 55px rgba(0,0,0,.35);
          animation: pdFloat 5s ease-in-out infinite;
        }

        .pd-floating strong {
          display: block;
          font-size: 17px;
        }

        .pd-floating small {
          color: rgba(255,255,255,.45);
        }

        .pd-floating-one {
          top: 50px;
          right: 0;
        }

        .pd-floating-two {
          left: 0;
          bottom: 70px;
          animation-delay: -2s;
        }

        .pd-floating-three {
          right: 20px;
          bottom: 15px;
          animation-delay: -3s;
        }

        @keyframes pdFloat {
          50% {
            transform: translateY(-17px) rotateZ(2deg);
          }
        }

        /* COMMON */

        .pd-section {
          padding: 125px 7vw;
        }

        .pd-container {
          max-width: 1180px;
          margin: auto;
        }

        .pd-section-label {
          color: #f01965;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: .15em;
          text-transform: uppercase;
          margin-bottom: 17px;
        }

        .pd-title {
          margin: 0;
          font-size: clamp(42px,5vw,73px);
          line-height: .98;
          letter-spacing: -3px;
        }

        .pd-title span {
          color: rgba(255,255,255,.3);
        }

        /* PRODUCT SELECTOR */

        .pd-selector {
          margin-top: 65px;
          display: grid;
          grid-template-columns: .65fr 1.35fr;
          gap: 22px;
        }

        .pd-tabs {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .pd-tab {
          border: 1px solid rgba(255,255,255,.09);
          border-radius: 17px;
          background: rgba(255,255,255,.035);
          color: rgba(255,255,255,.58);
          padding: 20px;
          text-align: left;
          cursor: pointer;
          transition: .35s ease;
        }

        .pd-tab:hover {
          transform: translateX(5px);
          color: #fff;
        }

        .pd-tab.active {
          transform: translateX(8px);
          color: #fff;
          border-color: rgba(240,25,101,.45);
          background:
            linear-gradient(
              100deg,
              rgba(240,25,101,.14),
              rgba(2,159,231,.07)
            );
        }

        .pd-tab-number {
          display: block;
          color: #029fe7;
          font-size: 10px;
          font-weight: 900;
          margin-bottom: 12px;
        }

        .pd-tab-name {
          font-size: 19px;
          font-weight: 900;
        }

        .pd-tab-status {
          display: block;
          margin-top: 8px;
          color: rgba(255,255,255,.38);
          font-size: 10px;
        }

        .pd-detail {
          min-height: 500px;
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

        .pd-detail::after {
          content: "";
          position: absolute;
          width: 240px;
          height: 240px;
          right: -100px;
          bottom: -100px;
          border-radius: 50%;
          background: #029fe7;
          filter: blur(70px);
          opacity: .12;
        }

        .pd-detail-top {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          align-items: center;
        }

        .pd-detail-category {
          color: #029fe7;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .pd-detail-status {
          padding: 7px 10px;
          border-radius: 100px;
          background: rgba(240,25,101,.1);
          color: #ff4c89;
          font-size: 9px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .pd-detail h3 {
          margin: 35px 0 12px;
          font-size: clamp(38px,5vw,65px);
          line-height: .9;
          letter-spacing: -3px;
        }

        .pd-detail-description {
          color: #f01965;
          font-size: 14px;
          font-weight: 800;
        }

        .pd-detail-text {
          max-width: 720px;
          color: rgba(255,255,255,.55);
          line-height: 1.8;
          margin-top: 23px;
        }

        .pd-stats {
          margin-top: 30px;
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 10px;
        }

        .pd-stat {
          padding: 16px;
          border-radius: 15px;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.07);
        }

        .pd-stat strong {
          display: block;
          font-size: 20px;
        }

        .pd-stat small {
          display: block;
          margin-top: 5px;
          color: rgba(255,255,255,.4);
          font-size: 9px;
          text-transform: uppercase;
        }

        .pd-detail-button {
          display: inline-flex;
          margin-top: 30px;
          padding: 14px 19px;
          border-radius: 13px;
          background: #fff;
          color: #08090d;
          font-weight: 900;
          font-size: 12px;
          transition: .3s ease;
        }

        .pd-detail-button:hover {
          transform: translateY(-4px);
        }

        /* ABHRA */

        .pd-feature {
          background: #f4f5f7;
          color: #090a0e;
        }

        .pd-feature .pd-title span {
          color: #747983;
        }

        .pd-feature-grid {
          margin-top: 65px;
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          gap: 25px;
          align-items: stretch;
        }

        .pd-feature-card {
          min-height: 450px;
          padding: 38px;
          border-radius: 30px;
          background: #fff;
          border: 1px solid #e0e3e8;
          position: relative;
          overflow: hidden;
          transition: .4s ease;
        }

        .pd-feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 35px 80px rgba(0,0,0,.1);
        }

        .pd-feature-card::after {
          content: "";
          position: absolute;
          width: 250px;
          height: 250px;
          border-radius: 50%;
          right: -100px;
          top: -100px;
          background: #f01965;
          filter: blur(55px);
          opacity: .1;
        }

        .pd-feature-tag {
          display: inline-flex;
          padding: 7px 10px;
          border-radius: 100px;
          background: rgba(240,25,101,.08);
          color: #f01965;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .pd-feature-card h3 {
          margin: 65px 0 15px;
          font-size: 50px;
          letter-spacing: -3px;
        }

        .pd-feature-card p {
          color: #6e7580;
          line-height: 1.8;
        }

        .pd-feature-link {
          display: inline-flex;
          margin-top: 25px;
          color: #f01965;
          font-size: 12px;
          font-weight: 900;
        }

        .pd-feature-visual {
          min-height: 450px;
          border-radius: 30px;
          background:
            linear-gradient(
              145deg,
              #11141c,
              #08090d
            );
          border: 1px solid rgba(255,255,255,.1);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          perspective: 1000px;
        }

        .pd-security-sphere {
          width: 230px;
          height: 230px;
          border-radius: 50%;
          background:
            radial-gradient(
              circle at 30% 25%,
              rgba(255,255,255,.2),
              transparent 25%
            ),
            linear-gradient(
              135deg,
              #f01965,
              #029fe7
            );
          box-shadow:
            0 0 100px rgba(240,25,101,.2),
            0 40px 80px rgba(0,0,0,.5);
          animation: pdSphere 5s ease-in-out infinite;
          display: grid;
          place-items: center;
        }

        .pd-security-sphere::before {
          content: "";
          width: 165px;
          height: 165px;
          border-radius: 50%;
          background: #0b0d12;
          border: 1px solid rgba(255,255,255,.1);
        }

        .pd-security-sphere::after {
          content: "ABHRA";
          position: absolute;
          font-size: 25px;
          font-weight: 900;
          letter-spacing: -1px;
        }

        @keyframes pdSphere {
          50% {
            transform:
              translateY(-18px)
              rotateY(180deg)
              rotateX(8deg);
          }
        }

        .pd-feature-chip {
          position: absolute;
          padding: 11px 13px;
          border-radius: 13px;
          background: rgba(255,255,255,.07);
          border: 1px solid rgba(255,255,255,.1);
          backdrop-filter: blur(12px);
          color: rgba(255,255,255,.65);
          font-size: 9px;
          font-weight: 800;
          animation: pdChip 4s ease-in-out infinite;
        }

        .pd-chip-one {
          top: 55px;
          left: 35px;
        }

        .pd-chip-two {
          top: 90px;
          right: 30px;
          animation-delay: -1s;
        }

        .pd-chip-three {
          bottom: 65px;
          left: 50px;
          animation-delay: -2s;
        }

        .pd-chip-four {
          bottom: 35px;
          right: 45px;
          animation-delay: -3s;
        }

        @keyframes pdChip {
          50% {
            transform: translateY(-10px);
          }
        }

        /* FEATURES */

        .pd-feature-list {
          margin-top: 65px;
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 15px;
        }

        .pd-feature-item {
          padding: 25px;
          border-radius: 21px;
          border: 1px solid rgba(255,255,255,.09);
          background: rgba(255,255,255,.035);
          transition: .35s ease;
        }

        .pd-feature-item:hover {
          transform: translateY(-7px);
          border-color: rgba(2,159,231,.4);
        }

        .pd-feature-item-number {
          color: #029fe7;
          font-size: 10px;
          font-weight: 900;
        }

        .pd-feature-item h3 {
          margin: 30px 0 10px;
          font-size: 19px;
        }

        .pd-feature-item p {
          margin: 0;
          color: rgba(255,255,255,.45);
          line-height: 1.7;
          font-size: 13px;
        }

        /* CTA */

        .pd-cta {
          padding: 150px 7vw;
          text-align: center;
          background:
            radial-gradient(
              circle at center,
              rgba(240,25,101,.15),
              transparent 40%
            );
        }

        .pd-cta h2 {
          max-width: 900px;
          margin: auto;
          font-size: clamp(48px,7vw,92px);
          line-height: .94;
          letter-spacing: -5px;
        }

        .pd-cta p {
          max-width: 650px;
          margin: 28px auto 35px;
          color: rgba(255,255,255,.5);
          line-height: 1.8;
        }

        .pd-cta-button {
          display: inline-flex;
          padding: 17px 28px;
          border-radius: 15px;
          background: #fff;
          color: #08090d;
          font-weight: 900;
          transition: .3s ease;
        }

        .pd-cta-button:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(255,255,255,.15);
        }

        /* FOOTER */

        .pd-footer {
          padding: 35px 7vw;
          border-top: 1px solid rgba(255,255,255,.08);
          background: #07080b;
        }

        .pd-footer-inner {
          max-width: 1180px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .pd-footer-logo {
          font-size: 23px;
          font-weight: 900;
        }

        .pd-footer-logo span {
          color: #f01965;
        }

        .pd-footer-text {
          color: rgba(255,255,255,.4);
          font-size: 12px;
          text-align: right;
        }

        /* REVEAL */

        .pd-reveal {
          opacity: 0;
          transform: translateY(45px);
          transition:
            opacity .8s ease,
            transform .8s cubic-bezier(.2,.8,.2,1);
        }

        .pd-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* MOBILE */

        @media (max-width: 1050px) {

          .pd-links,
          .pd-talk {
            display: none;
          }

          .pd-menu {
            display: block;
          }

          .pd-hero-inner {
            grid-template-columns: 1fr;
          }

          .pd-visual {
            min-height: 450px;
          }

          .pd-selector {
            grid-template-columns: 1fr;
          }

          .pd-feature-grid {
            grid-template-columns: 1fr;
          }

        }

        @media (max-width: 760px) {

          .pd-nav {
            top: 8px;
            width: calc(100% - 18px);
            border-radius: 18px;
          }

          .pd-mobile-menu {
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

          .pd-mobile-menu a {
            display: block;
            padding: 14px;
            border-radius: 12px;
            color: rgba(255,255,255,.72);
            font-weight: 700;
          }

          .pd-hero {
            padding: 130px 20px 70px;
          }

          .pd-hero h1 {
            font-size: 53px;
            letter-spacing: -3px;
          }

          .pd-hero-copy {
            font-size: 15px;
          }

          .pd-visual {
            min-height: 390px;
          }

          .pd-device {
            width: 285px;
            min-height: 315px;
          }

          .pd-orbit {
            width: 300px;
            height: 300px;
          }

          .pd-floating {
            padding: 10px 12px;
          }

          .pd-floating-one {
            top: 30px;
            right: 0;
          }

          .pd-floating-two {
            left: 0;
            bottom: 50px;
          }

          .pd-floating-three {
            right: 0;
            bottom: 0;
          }

          .pd-section {
            padding: 85px 20px;
          }

          .pd-title {
            font-size: 43px;
            letter-spacing: -2px;
          }

          .pd-detail {
            padding: 27px;
          }

          .pd-detail h3 {
            font-size: 45px;
          }

          .pd-stats {
            grid-template-columns: 1fr;
          }

          .pd-feature-card {
            min-height: 350px;
            padding: 28px;
          }

          .pd-feature-card h3 {
            font-size: 43px;
          }

          .pd-feature-visual {
            min-height: 350px;
          }

          .pd-feature-list {
            grid-template-columns: 1fr;
          }

          .pd-cta {
            padding: 100px 20px;
          }

          .pd-cta h2 {
            font-size: 52px;
            letter-spacing: -3px;
          }

          .pd-footer {
            padding: 28px 20px;
          }

          .pd-footer-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .pd-footer-text {
            text-align: left;
          }

        }

      `}</style>

      <div className="pd-page">

        {/* NAVBAR */}

        <nav className="pd-nav">

          <div className="pd-nav-inner">

            <a href="/" className="pd-logo">
              Code<span>Cap</span>
            </a>

            <div className="pd-links">

              <a href="/venture-studio">
                Venture Studio
              </a>

              <a href="/services">
                Services
              </a>

              <a
                href="/products"
                className="pd-active"
              >
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
              className="pd-talk"
              onClick={() =>
                (window.location.href =
                  "mailto:hello@codecap.ai")
              }
            >
              Talk to us
            </button>

            <button
              className="pd-menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "×" : "☰"}
            </button>

          </div>

          {menuOpen && (
            <div className="pd-mobile-menu">

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

        <section className="pd-hero">

          <div className="pd-grid"></div>

          <div className="pd-glow pd-glow-one"></div>
          <div className="pd-glow pd-glow-two"></div>

          <div className="pd-hero-inner">

            <div className="pd-reveal">

              <div className="pd-label">
                CodeCap Products
              </div>

              <h1>
                We don't just
                <br />
                advise.
                <br />
                We <span className="pd-gradient">
                  ship.
                </span>
              </h1>

              <p className="pd-hero-copy">
                CodeCap builds and commercialises its own
                AI-powered and cybersecurity products for
                enterprise buyers across Southeast Asia,
                the Gulf, and South Asia — with a focus on
                intelligent automation, threat detection,
                and sovereign cloud security.
              </p>

              <div className="pd-actions">

                <a
                  href="#products"
                  className="pd-primary"
                >
                  Explore Products →
                </a>

                <a
                  href="mailto:products@codecap.ai"
                  className="pd-secondary"
                >
                  Contact Product Team
                </a>

              </div>

            </div>

            <div className="pd-visual pd-reveal">

              <div className="pd-orbit"></div>

              <div className="pd-device">

                <div className="pd-window">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="pd-device-label">
                  CodeCap Product Engine
                </div>

                <div className="pd-device-name">
                  Security
                </div>

                <div className="pd-device-status">
                  Active
                </div>

                <div className="pd-device-grid">

                  <div className="pd-device-box">
                    <strong>AI</strong>
                    <small>Automation</small>
                  </div>

                  <div className="pd-device-box">
                    <strong>25</strong>
                    <small>Frameworks</small>
                  </div>

                  <div className="pd-device-box">
                    <strong>3</strong>
                    <small>Clouds</small>
                  </div>

                  <div className="pd-device-box">
                    <strong>1.8K+</strong>
                    <small>Checks</small>
                  </div>

                  <div className="pd-device-box">
                    <strong>GRC</strong>
                    <small>Security</small>
                  </div>

                  <div className="pd-device-box">
                    <strong>∞</strong>
                    <small>Scale</small>
                  </div>

                </div>

              </div>

              <div className="pd-floating pd-floating-one">
                <strong>ABHRA</strong>
                <small>Live</small>
              </div>

              <div className="pd-floating pd-floating-two">
                <strong>ILCM</strong>
                <small>In Development</small>
              </div>

              <div className="pd-floating pd-floating-three">
                <strong>SECURE</strong>
                <small>By Design</small>
              </div>

            </div>

          </div>

        </section>

        {/* PRODUCT SELECTOR */}

        <section
          className="pd-section"
          id="products"
        >

          <div className="pd-container">

            <div className="pd-reveal">

              <div className="pd-section-label">
                Product Portfolio
              </div>

              <h2 className="pd-title">
                Products built
                <br />
                <span>from the operator's seat.</span>
              </h2>

            </div>

            <div className="pd-selector">

              <div className="pd-tabs pd-reveal">

                {products.map((product, index) => (
                  <button
                    key={product.name}
                    className={
                      activeProduct === index
                        ? "pd-tab active"
                        : "pd-tab"
                    }
                    onClick={() =>
                      setActiveProduct(index)
                    }
                  >

                    <span className="pd-tab-number">
                      PRODUCT / 0{index + 1}
                    </span>

                    <span className="pd-tab-name">
                      {product.name}
                    </span>

                    <span className="pd-tab-status">
                      {product.status}
                    </span>

                  </button>
                ))}

              </div>

              <div className="pd-detail pd-reveal">

                <div className="pd-detail-top">

                  <div className="pd-detail-category">
                    {products[activeProduct].category}
                  </div>

                  <div className="pd-detail-status">
                    {products[activeProduct].status}
                  </div>

                </div>

                <h3>
                  {products[activeProduct].name}
                </h3>

                <div className="pd-detail-description">
                  {products[activeProduct].description}
                </div>

                <p className="pd-detail-text">
                  {products[activeProduct].fullDescription}
                </p>

                <div className="pd-stats">

                  <div className="pd-stat">
                    <strong>
                      {products[activeProduct].checks}
                    </strong>
                    <small>
                      Security Checks
                    </small>
                  </div>

                  <div className="pd-stat">
                    <strong>
                      {products[activeProduct].frameworks}
                    </strong>
                    <small>
                      Frameworks / Access
                    </small>
                  </div>

                  <div className="pd-stat">
                    <strong>
                      {products[activeProduct].clouds}
                    </strong>
                    <small>
                      Coverage
                    </small>
                  </div>

                </div>

                <a
                  href={products[activeProduct].link}
                  className="pd-detail-button"
                >
                  {products[activeProduct].button} →
                </a>

              </div>

            </div>

          </div>

        </section>

        {/* ABHRA FEATURE */}

        <section className="pd-section pd-feature">

          <div className="pd-container">

            <div className="pd-reveal">

              <div className="pd-section-label">
                Flagship Product
              </div>

              <h2 className="pd-title">
                Abhra —
                <br />
                <span>
                  sovereign cloud security for the regulated economy.
                </span>
              </h2>

            </div>

            <div className="pd-feature-grid">

              <div className="pd-feature-card pd-reveal pd-tilt">

                <div className="pd-feature-tag">
                  Available Now
                </div>

                <h3>
                  Abhra
                </h3>

                <p>
                  Universal-inventory scanning across AWS,
                  Azure and GCP, mapped to 25 compliance
                  frameworks. Desktop-first, with scan data
                  never leaving the machine.
                </p>

                <a
                  href="https://abhra.world/download"
                  className="pd-feature-link"
                >
                  Download Abhra →
                </a>

              </div>

              <div className="pd-feature-visual pd-reveal">

                <div className="pd-security-sphere"></div>

                <div className="pd-feature-chip pd-chip-one">
                  AWS
                </div>

                <div className="pd-feature-chip pd-chip-two">
                  AZURE
                </div>

                <div className="pd-feature-chip pd-chip-three">
                  GCP
                </div>

                <div className="pd-feature-chip pd-chip-four">
                  25 FRAMEWORKS
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* CAPABILITIES */}

        <section className="pd-section">

          <div className="pd-container">

            <div className="pd-reveal">

              <div className="pd-section-label">
                Product Capabilities
              </div>

              <h2 className="pd-title">
                Security without
                <br />
                <span>sending your data away.</span>
              </h2>

            </div>

            <div className="pd-feature-list">

              <div className="pd-feature-item pd-reveal">

                <div className="pd-feature-item-number">
                  01
                </div>

                <h3>
                  Universal Cloud Inventory
                </h3>

                <p>
                  Scan environments across AWS, Azure
                  and GCP.
                </p>

              </div>

              <div className="pd-feature-item pd-reveal">

                <div className="pd-feature-item-number">
                  02
                </div>

                <h3>
                  Compliance Mapping
                </h3>

                <p>
                  Security checks mapped across 25
                  compliance frameworks.
                </p>

              </div>

              <div className="pd-feature-item pd-reveal">

                <div className="pd-feature-item-number">
                  03
                </div>

                <h3>
                  Desktop-First
                </h3>

                <p>
                  Designed so scan data never leaves
                  the machine.
                </p>

              </div>

              <div className="pd-feature-item pd-reveal">

                <div className="pd-feature-item-number">
                  04
                </div>

                <h3>
                  Sovereign Deployment
                </h3>

                <p>
                  Built with the requirements of regulated
                  enterprise environments in mind.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="pd-cta">

          <div className="pd-reveal">

            <div className="pd-section-label">
              Get Started
            </div>

            <h2>
              Try Abhra.
              <br />
              Join ILCM.
            </h2>

            <p>
              Abhra is available now with a free 30-day trial.
              ILCM is in development — reach out to join the
              early access programme.
            </p>

            <a
              href="mailto:products@codecap.ai"
              className="pd-cta-button"
            >
              Contact Product Team →
            </a>

          </div>

        </section>

        {/* FOOTER */}

        <footer className="pd-footer">

          <div className="pd-footer-inner">

            <div className="pd-footer-logo">
              Code<span>Cap</span>
            </div>

            <div className="pd-footer-text">
              © 2025 CodeCap Ventures · Singapore · UAE · India
              <br />
              products@codecap.ai
            </div>

          </div>

        </footer>

      </div>
    </>
  );
}

export default Products;