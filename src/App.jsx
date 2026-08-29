import { useEffect } from "react";
import "./styles.css";

function App() {
  useEffect(() => {
    const story = document.getElementById("story");
    if (!story) return;

    const stages = ["s0", "s1", "s2", "s3"].map((id) =>
      document.getElementById(id)
    );
    const scenes = document.querySelectorAll(".story-text");
    const hint = document.querySelector(".scroll-hint");

    let tick = false;

    function update() {
      const r = story.getBoundingClientRect();
      const h = story.offsetHeight - window.innerHeight;
      const sc = -r.top;
      const p = h > 0 ? Math.min(Math.max(sc / h, 0), 1) : 0;
      const pos = p * (stages.length - 1);

      stages.forEach((stage, i) => {
        if (stage) {
          stage.style.opacity = Math.max(0, 1 - Math.abs(pos - i));
        }
      });

      scenes.forEach((scene) => {
        const sr = scene.getBoundingClientRect();
        const c = sr.top + sr.height / 2;
        const vc = window.innerHeight / 2;

        scene.style.opacity = Math.max(
          0,
          1 - Math.abs(c - vc) / (window.innerHeight * 0.52)
        );

        scene.style.transform = `translateY(${(c - vc) * 0.07}px)`;
      });

      if (hint) {
        hint.style.opacity = p > 0.04 ? 0 : 1;
      }

      tick = false;
    }

    function handleScroll() {
      if (!tick) {
        requestAnimationFrame(update);
        tick = true;
      }
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", update);

    update();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
    {/* SCROLL STORY */}
    <section className="story" id="story">
      <div className="story-visual">
        <div className="stage" id="s0">
          <div className="sphere"></div>
        </div>
        <div className="stage" id="s1">
          <div style={{ position: "relative", width: "420px", height: "290px" }}>
            <svg style={{ position: "absolute", inset: "0", width: "100%", height: "100%" }} viewBox="0 0 420 290">
              <line x1="210" y1="80" x2="80" y2="210" stroke="rgba(255,255,255,.12)" strokeWidth="1" strokeDasharray="4 4"></line>
              <line x1="210" y1="80" x2="340" y2="210" stroke="rgba(255,255,255,.12)" strokeWidth="1" strokeDasharray="4 4"></line>
              <line x1="80" y1="210" x2="340" y2="210" stroke="rgba(255,255,255,.12)" strokeWidth="1" strokeDasharray="4 4"></line>
            </svg>
            <div className="map-dot" style={{ top: "67px", left: "197px" }}></div>
            <div className="map-dot" style={{ top: "197px", left: "67px", animationDelay: ".4s" }}></div>
            <div className="map-dot" style={{ top: "197px", left: "327px", animationDelay: ".8s" }}></div>
            <div style={{ position: "absolute", top: "30px", left: "178px", fontSize: ".7rem", color: "rgba(255,255,255,.5)", letterSpacing: ".1em", textTransform: "uppercase", fontFamily: "'Open Sans',sans-serif" }}>
              Singapore            </div>
            <div style={{ position: "absolute", top: "218px", left: "28px", fontSize: ".7rem", color: "rgba(255,255,255,.5)", letterSpacing: ".1em", textTransform: "uppercase", fontFamily: "'Open Sans',sans-serif" }}>
              UAE · KSA            </div>
            <div style={{ position: "absolute", top: "218px", left: "300px", fontSize: ".7rem", color: "rgba(255,255,255,.5)", letterSpacing: ".1em", textTransform: "uppercase", fontFamily: "'Open Sans',sans-serif" }}>
              India            </div>
          </div>
        </div>
        <div className="stage" id="s2">
          <div className="s-code">
            <div className="c-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="c-bar w80"></div>
            <div className="c-bar ac"></div>
            <div className="c-bar w60"></div>
            <div className="c-bar"></div>
            <div className="c-bar ac w45"></div>
            <div className="c-bar w80"></div>
          </div>
        </div>
        <div className="stage" id="s3">
          <div className="glow-soft"></div>
        </div>
      </div>
      <div className="story-text-wrap">
        <div className="story-text">
          <h2>
            Every company begins            <br />
            the same way.            <br />
            <br />
            With one idea.          </h2>
        </div>
        <div className="story-text">
          <h2>
            Ideas don't fail.            <br />
            <br />
            <span className="p">
              Execution does.            </span>
          </h2>
        </div>
        <div className="story-text">
          <h2>
            The world's fastest-growing markets —            <br />
            Singapore. The Gulf. India.            <br />
            <span className="b">
              Deserve better builders.            </span>
          </h2>
        </div>
        <div className="story-text welcome">
          <h2>
            Welcome to             <span className="p">
              CodeCap.            </span>
          </h2>
        </div>
      </div>
      <div className="scroll-hint">
        Scroll      </div>
    </section>
    {/* NAV */}
    <nav>
      <div className="nav-in">
        <a href="/" className="logo">
          Code          <span>
            Cap          </span>
        </a>
        <ul className="nav-links">
          <li>
            <a href="/venture-studio">
              Venture Studio            </a>
          </li>
          <li>
            <a href="/services">
              Services            </a>
          </li>
          <li>
            <a href="/products">
              Products            </a>
          </li>
          <li>
            <a href="/portfolio">
              Portfolio            </a>
          </li>
          <li>
            <a href="/team">
              Team            </a>
          </li>
          <li>
            <a href="/insights">
              Insights            </a>
          </li>
          <li>
            <a href="/podcast">
              Podcast            </a>
          </li>
        </ul>
        <button className="btn-talk" onClick={() => (window.location.href = "mailto:hello@codecap.ai")}>
          Talk to us        </button>
      </div>
    </nav>
    {/* HERO */}
    <section style={{ background: "white", padding: "80px 0 70px" }}>
      <div className="hero-wrap">
        <div className="hero-ey">
          Venture Studio · AI · Cybersecurity · Singapore · Gulf · India        </div>
        <h1>
          We build           <span className="pk">
            companies.          </span>
          <br />
          We ship           <span className="bl">
            products.          </span>
          <br />
          We don’t do hand-holding.        </h1>
        <p className="h-lead">
          CodeCap is an AI-native venture studio and product company operating across Singapore, the Gulf, and South Asia. Our partners have spent decades building and selling enterprise security — at Trend Micro, Tenable, and Wipro. We became studio partners because we were operators first. And we still are.        </p>
        <p className="h-punch">
          Every engagement ends in something shipped. Not a slide. Not a strategy document. Something real.        </p>
        <div className="h-acts">
          <a href="mailto:hello@codecap.ai">
            <button className="btn-p">
              Talk to us →            </button>
          </a>
          <a href="/portfolio">
            <button className="btn-s">
              See what we’ve built            </button>
          </a>
        </div>
        <p className="scarcity">
          We take on a deliberately small number of engagements each quarter — a couple of venture builds, a few growth partnerships, a handful of advisory relationships. If that sounds limiting, it’s supposed to.        </p>
        <div className="img-row">
          <div className="img-card">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80&auto=format" alt="Founders collaborating" loading="lazy" />
            <div className="ov">
              Venture Studio            </div>
          </div>
          <div className="img-card">
            <img src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=700&q=80&auto=format" alt="Cybersecurity" loading="lazy" />
            <div className="ov">
              AI & Cybersecurity            </div>
          </div>
          <div className="img-card">
            <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=700&q=80&auto=format" alt="Southeast Asia" loading="lazy" />
            <div className="ov">
              SEA · Gulf · India            </div>
          </div>
        </div>
      </div>
    </section>
    {/* MANIFESTO */}
    <section className="manifesto">
      <div className="mani-in">
        <p className="ml">
          We don’t pitch ourselves.          <br />
          We           <span className="p">
            ship proof.          </span>
        </p>
        <div className="mbar"></div>
        <p className="ml">
          Conviction is the deposit.          <br />
          <span className="b">
            Execution is the rest.          </span>
        </p>
        <div className="mbar"></div>
        <p className="ml">
          Most studios collect logos.          <br />
          We collect           <span className="p">
            outcomes.          </span>
        </p>
        <div className="mbar"></div>
        <p className="ml">
          We are not for everyone.          <br />
          We were never trying to be.        </p>
        <div className="mbar"></div>
        <p className="ml">
          The right hundred founders already know who they are.          <br />
          If that’s you — keep reading.        </p>
      </div>
    </section>
    {/* TWO ENGINES */}
    <section style={{ background: "white", padding: "90px 0" }}>
      <div className="sw">
        <div className="sl">
          What We Do        </div>
        <div className="sbar"></div>
        <h2 className="st">
          Two engines.          <br />
          One           <span className="p">
            standard.          </span>
        </h2>
        <p className="slead">
          Every engagement — whether it’s a startup we’re building or a product we sell — is held to the same bar: did we ship something, or did we just talk about it?        </p>
        <div className="eng-grid">
          <div className="eng-card st">
            <div className="eng-ico">
              🏗            </div>
            <span className="eng-tag">
              Venture Studio            </span>
            <h3>
              We embed. We don’t observe.            </h3>
            <p>
              We work alongside founders from pre-idea through Series A — equity-first when all you have is conviction, retainer-based once you have revenue. Either way, we’re inside your company with accountability on the line, not outside giving notes at a comfortable distance.            </p>
          </div>
          <div className="eng-card pr">
            <div className="eng-ico">
              🛡            </div>
            <span className="eng-tag">
              Products            </span>
            <h3>
              We also build our own.            </h3>
            <p>
              Sovereign cloud security. Autonomous incident response. Tools we’d use ourselves — sold to enterprises across SEA, the Gulf, and South Asia who can’t afford to be wrong about security, and can’t afford to send their data to a vendor’s cloud to find out.            </p>
          </div>
        </div>
        <div className="fq">
          <blockquote>
            “The best studio partners I’ve worked with didn’t tell me what to do. They just showed up and did it. That’s the standard we hold ourselves to.”          </blockquote>
          <cite>
            — Baburaj Varma, Co-Founder & Managing Partner, CodeCap · Former VP Technical AMEA, Trend Micro          </cite>
        </div>
      </div>
    </section>
    {/* SERVICES */}
    <section style={{ background: "var(--bg)", padding: "90px 0" }}>
      <div className="sw">
        <div className="sl">
          Studio Services        </div>
        <div className="sbar"></div>
        <h2 className="st">
          Six ways we engage.          <br />
          One           <span className="p">
            standard of delivery.          </span>
        </h2>
        <p className="slead">
          Open any service for the full picture. The short version: every line item ends in something delivered, not a recommendation.        </p>
        <div style={{ maxWidth: "900px" }}>
          <details className="svc-item" open={true}>
            <summary>
              <span className="svc-num">
                01              </span>
              <span className="svc-hl">
                <h4>
                  Venture Building & Co-founding                </h4>
                <span className="svc-pl">
                  We’re not your advisor. We’re your co-founder, with equity on the line.                </span>
              </span>
              <span className="svc-tog">
                +              </span>
            </summary>
            <div className="svc-det">
              At the pre-idea stage, we function as operational co-founders — shaping the problem space, validating the market thesis, building the foundational product. Not a workshop. A real company, built from the inside.
                        <ul>
                <li>
                  Problem space definition & market validation                </li>
                <li>
                  Co-founder-level commitment with milestone-vested equity                </li>
                <li>
                  Technical architecture & product roadmap ownership                </li>
                <li>
                  First-hire strategy and cap table structuring                </li>
                <li>
                  Investor narrative development from day one                </li>
              </ul>
              <div className="svc-meta">
                <span className="svc-pill">
                  Equity-first                </span>
                <span className="svc-pill">
                  Pre-idea · Pre-seed                </span>
              </div>
            </div>
          </details>
          <details className="svc-item">
            <summary>
              <span className="svc-num">
                02              </span>
              <span className="svc-hl">
                <h4>
                  Product Development & Tech Execution                </h4>
                <span className="svc-pl">
                  Code that survives enterprise procurement, not a demo that survives a pitch.                </span>
              </span>
              <span className="svc-tog">
                +              </span>
            </summary>
            <div className="svc-det">
              From MVP to production-grade engineering — AI-native products, cybersecurity platforms, B2B SaaS. Built alongside your team with the same ownership mindset we bring to our own products.
                        <ul>
                <li>
                  AI-native architecture (LLMs, vector DBs, agents)                </li>
                <li>
                  Cybersecurity platform development — SIEM, EDR, GRC integrations                </li>
                <li>
                  Multi-tenant, compliance-ready B2B SaaS infrastructure                </li>
                <li>
                  DevSecOps pipelines and cloud deployment                </li>
                <li>
                  Technical due diligence prep for fundraising rounds                </li>
              </ul>
              <div className="svc-meta">
                <span className="svc-pill">
                  Retainer · Equity · Hybrid                </span>
                <span className="svc-pill">
                  Pre-seed → Series A                </span>
              </div>
            </div>
          </details>
          <details className="svc-item">
            <summary>
              <span className="svc-num">
                03              </span>
              <span className="svc-hl">
                <h4>
                  Go-to-Market Strategy & Sales                </h4>
                <span className="svc-pl">
                  We don’t teach you to sell. We close the deals ourselves.                </span>
              </span>
              <span className="svc-tog">
                +              </span>
            </summary>
            <div className="svc-det">
              CodeCap owns the GTM motion — identifying buyers, running proposals end-to-end, closing deals. We know what gets rejected at enterprise procurement and how to avoid it.
                        <ul>
                <li>
                  ICP definition and enterprise buyer mapping                </li>
                <li>
                  Sales decks that convert in boardrooms                </li>
                <li>
                  RFP response management and full deal ownership                </li>
                <li>
                  Channel partner identification and onboarding                </li>
                <li>
                  CRM setup and sales process architecture                </li>
              </ul>
              <div className="svc-meta">
                <span className="svc-pill">
                  Revenue share                </span>
                <span className="svc-pill">
                  MVP → Seed                </span>
              </div>
            </div>
          </details>
          <details className="svc-item">
            <summary>
              <span className="svc-num">
                04              </span>
              <span className="svc-hl">
                <h4>
                  Fundraising Support & VC Introductions                </h4>
                <span className="svc-pl">
                  Warm introductions. Structured the boring, compliant way.                </span>
              </span>
              <span className="svc-tog">
                +              </span>
            </summary>
            <div className="svc-det">
              Pitch deck construction to warm VC introductions across SEA, Gulf, and South Asia — structured under MAS and UAE regulatory frameworks. No finder’s fees outside compliant structures.
                        <ul>
                <li>
                  Pitch deck design and narrative engineering                </li>
                <li>
                  Financial model review and investor-readiness audit                </li>
                <li>
                  Introductions to vetted VC partners in SEA, Gulf & India                </li>
                <li>
                  Term sheet guidance and due diligence prep                </li>
              </ul>
              <div className="svc-meta">
                <span className="svc-pill">
                  Success fee (regulated)                </span>
                <span className="svc-pill">
                  Pre-seed → Series A                </span>
              </div>
            </div>
          </details>
          <details className="svc-item">
            <summary>
              <span className="svc-num">
                05              </span>
              <span className="svc-hl">
                <h4>
                  Cyber & Deep Tech Advisory                </h4>
                <span className="svc-pl">
                  We’ve sat on the other side of the procurement table. We know what gets rejected.                </span>
              </span>
              <span className="svc-tog">
                +              </span>
            </summary>
            <div className="svc-det">
              For AI security, threat intelligence, or regulated deep tech startups — we implement, validate, and help you sell to security buyers who’ve seen everything.
                        <ul>
                <li>
                  CISO-level positioning for security buyers                </li>
                <li>
                  Threat intelligence platform design and validation                </li>
                <li>
                  Zero-trust architecture review                </li>
                <li>
                  SOC 2 / ISO 27001 / NIST readiness support                </li>
              </ul>
              <div className="svc-meta">
                <span className="svc-pill">
                  Retainer · Equity · Project                </span>
                <span className="svc-pill">
                  All stages                </span>
              </div>
            </div>
          </details>
          <details className="svc-item">
            <summary>
              <span className="svc-num">
                06              </span>
              <span className="svc-hl">
                <h4>
                  Regional Market Entry                </h4>
                <span className="svc-pl">
                  Singapore, UAE, India — each with its own rules. We’ve already learned them.                </span>
              </span>
              <span className="svc-tog">
                +              </span>
            </summary>
            <div className="svc-det">
              Three markets, very different rules. We’ve already made the expensive mistakes so you don’t have to.
                        <ul>
                <li>
                  Singapore: entity setup, MOM passes, MAS navigation, government grants                </li>
                <li>
                  UAE: DIFC/ADGM entity structuring, local partner identification                </li>
                <li>
                  India: regulatory compliance, local BD, revenue share frameworks                </li>
              </ul>
              <div className="svc-meta">
                <span className="svc-pill">
                  Retainer · Rev share · Equity                </span>
                <span className="svc-pill">
                  Seed → Series A                </span>
              </div>
            </div>
          </details>
        </div>
      </div>
    </section>
    {/* MODELS */}
    <section style={{ background: "white", padding: "90px 0" }}>
      <div className="sw">
        <div className="sl">
          Engagement Models        </div>
        <div className="sbar"></div>
        <h2 className="st">
          Four models.          <br />
          Pick the one that matches your           <span className="p">
            stage.          </span>
        </h2>
        <div className="mod-grid">
          <div className="mod-card">
            <div className="mod-stage">
              Pre-idea · Pre-seed            </div>
            <div className="mod-name">
              Cash-Light Build            </div>
            <div className="mod-punch">
              All the equity commitment, none of the cash burn.            </div>
          </div>
          <div className="mod-card feat">
            <span className="mod-badge">
              Most common            </span>
            <div className="mod-stage">
              Pre-seed · MVP            </div>
            <div className="mod-name">
              Funded Founder GTM            </div>
            <div className="mod-punch">
              You raised the round. We make sure it wasn’t a mistake.            </div>
          </div>
          <div className="mod-card">
            <div className="mod-stage">
              Pre-idea · Full Build            </div>
            <div className="mod-name">
              Venture Co-Founder            </div>
            <div className="mod-punch">
              Our deepest commitment — 12 to 24 months, full build, board seat included.            </div>
          </div>
          <div className="mod-card">
            <div className="mod-stage">
              Series A · Selective            </div>
            <div className="mod-name">
              Capability Gap            </div>
            <div className="mod-punch">
              For the gap you can’t hire your way out of. Partner approval required.            </div>
          </div>
        </div>
      </div>
    </section>
    {/* MARKETS */}
    <section style={{ background: "var(--bg)", padding: "90px 0" }}>
      <div className="sw">
        <div className="sl">
          Markets        </div>
        <div className="sbar"></div>
        <h2 className="st">
          Three markets.          <br />
          One operating           <span className="p">
            playbook.          </span>
        </h2>
        <p className="slead">
          Each market has its own rules, trust signals, and legal structure. We’ve learned them the hard way so you don’t have to.        </p>
        <div className="mkt-grid">
          <div className="mkt-card">
            <div className="mkt-f">
              🇸🇬            </div>
            <h4>
              Singapore            </h4>
            <div className="mkt-punch">
              Equity-flexible early, fee-led later.            </div>
            <p>
              Our legal and operational home. All equity agreements structured under Singapore law, MAS-compliant from day one. The gateway to Southeast Asia — and increasingly, the world.            </p>
          </div>
          <div className="mkt-card">
            <div className="mkt-f">
              🇦🇪            </div>
            <h4>
              UAE & Saudi Arabia            </h4>
            <div className="mkt-punch">
              DIFC or ADGM-seated, or it doesn’t count.            </div>
            <p>
              Higher fee tolerance, credential-led. Offshore equity agreements have no enforceability here — so we don’t write them. Our partners have built trust in the Gulf over careers, not months.            </p>
          </div>
          <div className="mkt-card">
            <div className="mkt-f">
              🇮🇳            </div>
            <h4>
              India            </h4>
            <div className="mkt-punch">
              Revenue share first. Equity is earned, not assumed.            </div>
            <p>
              Indian founders are equity-protective and relationship-first. We lead with revenue share, earn the trust, and build from there. Hyderabad to Mumbai to Bangalore — we know the market.            </p>
          </div>
        </div>
      </div>
    </section>
    {/* PRODUCTS */}
    <section style={{ background: "white", padding: "90px 0" }}>
      <div className="sw">
        <div className="sl">
          Products We Ship        </div>
        <div className="sbar"></div>
        <h2 className="st">
          Not just studio.          <br />
          We build and sell our           <span className="p">
            own.          </span>
        </h2>
        <p className="slead">
          These aren’t side projects. They’re the same standard of product we’d want to use ourselves.        </p>
        <div className="prod-row">
          <div>
            <span className="pstat live">
              Live · Free Trial            </span>
            <div className="p-name">
              Abhra            </div>
          </div>
          <div>
            <div className="p-punch">
              Sovereign cloud security, built for the enterprise that can’t send its data anywhere — including to us.            </div>
            <div className="p-desc">
              Universal-inventory scanning across AWS, Azure, and GCP. 1,894+ native checks. 25 compliance frameworks including MAS TRM, NESA UAE, SAMA Saudi, SEBI, CERT-In, ISO 27001, SOC 2, and GDPR. 100% of scan data stays on your machine. Desktop-first, air-gappable. Built in India, sold worldwide.            </div>
            <div className="f-pills">
              <span className="f-pill">
                ISO 27001              </span>
              <span className="f-pill">
                SOC 2 Type II              </span>
              <span className="f-pill">
                PCI DSS 4.0              </span>
              <span className="f-pill">
                CERT-In              </span>
              <span className="f-pill">
                MAS TRM              </span>
              <span className="f-pill">
                SAMA Saudi              </span>
              <span className="f-pill">
                SEBI · RBI              </span>
              <span className="f-pill">
                25 frameworks total              </span>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <a href="https://abhra.world/download" target="_blank" style={{ display: "inline-block", fontSize: ".8rem", fontWeight: "700", color: "var(--bl)", border: "1px solid var(--bl)", padding: ".45rem 1.1rem", borderRadius: "20px" }}>
                Download free → abhra.world              </a>
            </div>
          </div>
        </div>
        <div className="prod-row">
          <div>
            <span className="pstat dev">
              In Development            </span>
            <div className="p-name">
              ILCM            </div>
          </div>
          <div>
            <div className="p-punch">
              Five AI bots. Zero data lake. A human always has the final word.            </div>
            <div className="p-desc">
              Autonomous incident lifecycle management — Triage → Investigate → Contain → Validate → Post-Incident Review. Orchestrates your existing SIEM and EDR via API, with full chain-of-custody audit trails and configurable confidence thresholds that keep humans in control.            </div>
            <div className="f-pills">
              <span className="f-pill">
                SOC 2 / NIST audit trail              </span>
              <span className="f-pill">
                Human-in-the-loop              </span>
              <span className="f-pill">
                No data lake              </span>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <a href="mailto:products@codecap.ai" style={{ display: "inline-block", fontSize: ".8rem", fontWeight: "700", color: "var(--mu)", border: "1px solid var(--bd)", padding: ".45rem 1.1rem", borderRadius: "20px" }}>
                Request early access              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* TEAM STRIP */}
    <section style={{ background: "var(--bg)", padding: "90px 0" }}>
      <div className="sw">
        <div className="sl">
          The Team        </div>
        <div className="sbar"></div>
        <h2 className="st">
          Not advisors who           <span className="p">
            advise.          </span>
          <br />
          Operators who operate.        </h2>
        <p className="slead">
          Careers spent building and selling enterprise security at Trend Micro, Tenable, and Wipro. We came to venture building the hard way — through doing it.        </p>
        <div className="team-strip">
          <a href="/team" className="tm">
            <div className="tm-av">
              BV            </div>
            <div>
              <div className="tm-n">
                Baburaj Varma              </div>
              <div className="tm-r">
                Co-Founder & Managing Partner              </div>
            </div>
          </a>
          <a href="/team" className="tm">
            <div className="tm-av">
              TG            </div>
            <div>
              <div className="tm-n">
                Tarun Gupta              </div>
              <div className="tm-r">
                Co-Founder & Partner              </div>
            </div>
          </a>
          <a href="/team" className="tm">
            <div className="tm-av">
              AV            </div>
            <div>
              <div className="tm-n">
                Atin Verma              </div>
              <div className="tm-r">
                Consulting Partner · Marketing              </div>
            </div>
          </a>
          <a href="/team" className="tm">
            <div className="tm-av">
              NC            </div>
            <div>
              <div className="tm-n">
                Naveena Chowdary              </div>
              <div className="tm-r">
                Consulting Partner · Operations              </div>
            </div>
          </a>
          <a href="/team" className="tm">
            <div className="tm-av">
              PP            </div>
            <div>
              <div className="tm-n">
                Pankaj Pathak              </div>
              <div className="tm-r">
                Consulting Partner · R&D              </div>
            </div>
          </a>
          <a href="/team" className="tm">
            <div className="tm-av">
              MS            </div>
            <div>
              <div className="tm-n">
                Manas Sarkar              </div>
              <div className="tm-r">
                Consulting Partner · Business Dev              </div>
            </div>
          </a>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <a href="/team" style={{ fontSize: ".85rem", fontWeight: "600", color: "var(--pk)", borderBottom: "1px solid rgba(240,25,101,.3)", paddingBottom: "2px" }}>
            Meet the full team →          </a>
        </div>
      </div>
    </section>
    {/* PRINCIPLES */}
    <section className="prin-sec">
      <div className="sw">
        <div className="sl" style={{ color: "rgba(255,255,255,.4)" }}>
          Why CodeCap        </div>
        <div className="sbar"></div>
        <h2 className="st" style={{ color: "white" }}>
          Operators, not           <span style={{ color: "var(--pk)" }}>
            observers.          </span>
        </h2>
        <p style={{ fontSize: ".95rem", color: "rgba(255,255,255,.5)", maxWidth: "580px", marginBottom: ".5rem", lineHeight: "1.8", fontWeight: "300" }}>
          The uncomfortable truth about most advisory relationships: the person giving the advice has nothing at stake if it’s wrong. We’ve tried to make that impossible.        </p>
        <div className="prin-list">
          <div className="prin">
            <h4>
              Execution over advice.            </h4>
            <p>
              Every engagement involves active delivery — code shipped, deals closed, decks built. Our upside is tied to your outcomes, not our hours billed.            </p>
          </div>
          <div className="prin">
            <h4>
              Depth over breadth.            </h4>
            <p>
              Max two venture builds and three growth engagements at a time. We say no more than we say yes — on purpose. The founders we take on deserve the full team.            </p>
          </div>
          <div className="prin">
            <h4>
              Compliant by design.            </h4>
            <p>
              MAS. DIFC. ADGM. CERT-In. Every deal structure is legally reviewed before execution. We’d rather lose a deal than cut a corner.            </p>
          </div>
          <div className="prin">
            <h4>
              AI & cybersecurity depth.            </h4>
            <p>
              Hands-on delivery in AI engineering, threat intelligence, and zero-trust architecture. Practitioners who can also sell — the rarest combination in this market.            </p>
          </div>
        </div>
      </div>
    </section>
    {/* PROCESS */}
    <section style={{ background: "white", padding: "90px 0" }}>
      <div className="sw" style={{ maxWidth: "780px" }}>
        <div className="sl">
          How It Works        </div>
        <div className="sbar"></div>
        <h2 className="st">
          From first call to active           <span className="p">
            engagement.          </span>
        </h2>
        <div className="proc-steps">
          <div className="proc-step">
            <div className="proc-n">
              01            </div>
            <div>
              <h4>
                Initial Conversation              </h4>
              <p>
                A 30–45 minute call with a CodeCap partner. We ask about your stage, your market, and what you actually need — not a pitch deck review. We’re evaluating fit, not the idea.              </p>
            </div>
          </div>
          <div className="proc-step">
            <div className="proc-n">
              02            </div>
            <div>
              <h4>
                Fit Assessment              </h4>
              <p>
                We’re selective by design. We assess whether CodeCap adds meaningful value and whether the model makes sense for both sides. We’ll tell you honestly if it doesn’t.              </p>
            </div>
          </div>
          <div className="proc-step">
            <div className="proc-n">
              03            </div>
            <div>
              <h4>
                Engagement Proposal              </h4>
              <p>
                If there’s fit, a structured proposal — scope, model, terms, and deliverables tied to your milestones. Nothing vague. Nothing left to interpretation.              </p>
            </div>
          </div>
          <div className="proc-step">
            <div className="proc-n">
              04            </div>
            <div>
              <h4>
                Agreement & Kick-off              </h4>
              <p>
                Signed under Singapore law or DIFC/ADGM. Kick-off within 5 business days. The first deliverable is due within 2 weeks. We start the way we mean to continue.              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* COMPLIANCE */}
    <section style={{ background: "var(--bg)", padding: "0 0 60px" }}>
      <div className="sw">
        <details className="comp-item">
          <summary>
            Compliance & legal structure — for the founders who actually read the fine print →          </summary>
          <div className="comp-det">
            <div>
              <strong>
                Singapore              </strong>
              MAS-compliant fee structures. All equity agreements under Singapore law. Success fees on capital raises require proper licensing and legal sign-off before execution.            </div>
            <div>
              <strong>
                UAE / KSA              </strong>
              DIFC or ADGM-seated equity agreements only. No offshore equity in Gulf markets — not enforceable, and we don’t write it. Fees are safer at early stages here.            </div>
            <div>
              <strong>
                India              </strong>
              Revenue share as the primary upside mechanism. Equity requires full contractual documentation. We lead with trust before we ask for equity.            </div>
          </div>
        </details>
      </div>
    </section>
    {/* CTA */}
    <section className="fcta">
      <h2>
        Most companies want more traffic.        <br />
        We want the right hundred people.      </h2>
      <p>
        If you’ve read this far, you already know whether you’re one of them. The question is whether you’re ready to move.      </p>
      <a href="mailto:hello@codecap.ai">
        <button className="btn-w">
          Talk to us →        </button>
      </a>
    </section>
    {/* FOOTER */}
    <footer>
      <div className="f-in">
        <div className="f-brand">
          Code          <span>
            Cap          </span>
        </div>
        <div className="f-links">
          <a href="/venture-studio">
            Venture Studio          </a>
          <a href="/services">
            Services          </a>
          <a href="/products">
            Products          </a>
          <a href="/portfolio">
            Portfolio          </a>
          <a href="/team">
            Team          </a>
          <a href="/insights">
            Insights          </a>
          <a href="/podcast">
            Podcast          </a>
        </div>
        <div className="f-meta">
          © 2025 CodeCap Ventures · Singapore · UAE · India · hello@codecap.ai        </div>
      </div>
    </footer>
    </>
  );
}

export default App;
