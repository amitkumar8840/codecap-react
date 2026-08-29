import "./styles.css";

function Products() {
  return (
    <>
      <style>{`
        .products-page {
          width: 100%;
          color: #111;
          background: #fff;
          font-family: "Open Sans", sans-serif;
        }

        /* NAVBAR */
        .products-page nav {
          position: sticky;
          top: 0;
          z-index: 200;
          background: rgba(255,255,255,.97);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid #e2e8f0;
          box-shadow: 0 1px 16px rgba(0,0,0,.06);
        }

        .products-page .nav-in {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 68px;
        }

        .products-page .logo {
          font-family: "Raleway", sans-serif;
          font-size: 1.35rem;
          font-weight: 900;
          color: #111;
          letter-spacing: -.02em;
          text-decoration: none;
        }

        .products-page .logo span {
          color: #f01965;
        }

        .products-page .nav-links {
          display: flex;
          gap: .15rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .products-page .nav-links a {
          font-size: .78rem;
          font-weight: 600;
          color: #444;
          padding: .45rem .8rem;
          border-radius: 5px;
          text-decoration: none;
          transition: color .2s, background .2s;
        }

        .products-page .nav-links a:hover {
          color: #f01965;
          background: rgba(240,25,101,.06);
        }

        .products-page .btn-talk {
          font-family: "Open Sans", sans-serif;
          font-size: .78rem;
          font-weight: 700;
          padding: .55rem 1.4rem;
          background: #111;
          color: #fff;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background .2s;
        }

        .products-page .btn-talk:hover {
          background: #f01965;
        }

        /* HERO */
        .products-page .page-hero {
          width: 100%;
          padding: 105px max(55px, calc((100% - 1140px) / 2));
          background: linear-gradient(135deg, #fff5f8 0%, #f0f8ff 100%);
        }

        .products-page .eyebrow-text {
          font-size: .72rem;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: #6b7a8d;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .products-page .divider {
          width: 52px;
          height: 4px;
          background: #f01965;
          border-radius: 3px;
          margin-bottom: 1.8rem;
        }

        .products-page .page-hero h1 {
          font-family: "Raleway", sans-serif;
          font-size: clamp(3rem, 5.5vw, 4.8rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -.025em;
          color: #f01965;
          margin: 0 0 1.2rem;
        }

        .products-page .page-hero p {
          font-size: 1rem;
          color: #6b7a8d;
          max-width: 560px;
          line-height: 1.82;
          margin: 0;
          font-weight: 300;
        }

        /* SECTIONS */
        .products-page section {
          max-width: 1140px;
          margin: 0 auto;
          padding: 70px 2rem;
        }

        .products-page section h2 {
          font-family: "Raleway", sans-serif;
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 800;
          line-height: 1.2;
          color: #111;
          margin-bottom: 1rem;
        }

        .products-page section h3 {
          font-family: "Raleway", sans-serif;
          color: #111;
        }

        .products-page .accent {
          color: #f01965;
        }

        .products-page .lead {
          font-size: .95rem;
          color: #6b7a8d;
          line-height: 1.82;
        }

        /* ABHRA */
        .products-page .abhra-block {
          background: linear-gradient(135deg,#fff5f8,#f0f8ff);
          border: 2px solid #fbeaf0;
          border-radius: 12px;
          padding: 2.75rem;
          margin-bottom: 2rem;
          position: relative;
          overflow: hidden;
        }

        .products-page .abhra-block::before {
          content: "FLAGSHIP PRODUCT";
          position: absolute;
          top: 0;
          right: 2rem;
          font-family: "Open Sans", sans-serif;
          font-size: .55rem;
          font-weight: 700;
          letter-spacing: .1em;
          background: #f01965;
          color: #fff;
          padding: .2rem .7rem;
          border-radius: 0 0 6px 6px;
        }

        .products-page .abhra-wm {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .products-page .abhra-ic {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg,#fff,#fbeaf0);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          box-shadow: 0 4px 14px rgba(240,25,101,.2);
        }

        /* PRODUCT CARDS */
        .products-page .prod-card {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 2.5rem;
          display: grid;
          grid-template-columns: minmax(0,1fr) 280px;
          gap: 2.5rem;
          align-items: start;
          margin-bottom: 2.5rem;
          box-shadow: 0 5px 24px rgba(0,0,0,.06);
        }

        .products-page .prod-card.featured {
          border-top: 3px solid #f01965;
        }

        .products-page .tag {
          display: inline-block;
          font-size: .68rem;
          font-weight: 700;
          padding: .25rem .65rem;
          border-radius: 20px;
          text-transform: uppercase;
          letter-spacing: .06em;
        }

        .products-page .tag-pink {
          background: #fbeaf0;
          color: #f01965;
        }

        .products-page .tag-blue {
          background: #e7f5fc;
          color: #0288c7;
        }

        .products-page .tag-green {
          background: #e3f6ec;
          color: #1d9e75;
        }

        .products-page .pname {
          font-family: "Raleway", sans-serif;
          font-size: 1.8rem;
          font-weight: 800;
          color: #111;
          margin: .5rem 0 .4rem;
        }

        .products-page .ptag {
          font-size: .78rem;
          font-weight: 600;
          color: #1a1a2e;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .products-page .ptag a {
          color: #029fe7;
        }

        .products-page .pdesc {
          font-size: .9rem;
          color: #6b7a8d;
          line-height: 1.8;
          margin-bottom: 1rem;
        }

        .products-page .pfeats {
          display: grid;
          gap: .45rem;
        }

        .products-page .pf {
          font-size: .82rem;
          color: #1a1a2e;
          line-height: 1.6;
          padding-left: 15px;
          position: relative;
        }

        .products-page .pf::before {
          content: "›";
          position: absolute;
          left: 0;
          color: #f01965;
          font-weight: 800;
        }

        /* SIDE BOXES */
        .products-page .pasides {
          display: grid;
          gap: 1rem;
        }

        .products-page .pa {
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 1rem;
          background: #fff;
        }

        .products-page .pal {
          font-size: .68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .08em;
          color: #6b7a8d;
          margin-bottom: .55rem;
        }

        .products-page .pat {
          display: inline-block;
          font-size: .78rem;
          color: #1a1a2e;
          margin: 0 8px 5px 0;
        }

        /* STATUS */
        .products-page .status-live {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: .68rem;
          font-weight: 700;
          color: #1d9e75;
          background: #e3f6ec;
          padding: .25rem .65rem;
          border-radius: 20px;
        }

        .products-page .status-dev {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: .68rem;
          font-weight: 700;
          color: #f01965;
          background: #fbeaf0;
          padding: .25rem .65rem;
          border-radius: 20px;
        }

        .products-page .sdot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #1d9e75;
        }

        .products-page .sdot.d {
          background: #f01965;
        }

        /* STATS */
        .products-page .stats-strip {
          display: flex;
          gap: 2.5rem;
          flex-wrap: wrap;
          background: #f7f9fc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 1.5rem 2rem;
          margin: 1.5rem 0;
        }

        .products-page .stat-n {
          font-family: "Raleway", sans-serif;
          font-size: 1.8rem;
          font-weight: 900;
          color: #f01965;
          line-height: 1;
        }

        .products-page .stat-l {
          font-size: .68rem;
          font-weight: 600;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: #6b7a8d;
          margin-top: .2rem;
        }

        /* FRAMEWORKS */
        .products-page .fw5 {
          display: grid;
          grid-template-columns: repeat(5,1fr);
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .products-page .fw-item {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          padding: 1rem;
          text-align: center;
        }

        .products-page .fw-title {
          font-family: "Open Sans", sans-serif;
          font-size: .6rem;
          font-weight: 700;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: #f01965;
          margin-bottom: .45rem;
        }

        .products-page .fw-item p {
          font-size: .7rem;
          color: #6b7a8d;
          line-height: 1.55;
        }

        /* CTA */
        .products-page .cta-sec {
          max-width: none;
          background: #f7f9fc;
          text-align: center;
        }

        .products-page .cta-sec > div {
          max-width: 580px;
          margin: 0 auto;
        }

        .products-page .cta-sec h2 {
          margin-bottom: 1rem;
        }

        .products-page .cta-sec p {
          color: #6b7a8d;
          line-height: 1.8;
        }

        .products-page .cta-acts {
          display: flex;
          justify-content: center;
          gap: .8rem;
          flex-wrap: wrap;
          margin-top: 1.5rem;
        }

        .products-page .bp {
          display: inline-flex;
          align-items: center;
          padding: .75rem 1.2rem;
          background: #111;
          color: #fff;
          border-radius: 7px;
          font-size: .78rem;
          font-weight: 700;
          text-decoration: none;
        }

        .products-page .bp:hover {
          background: #f01965;
        }

        .products-page .bp-pink {
          display: inline-flex;
          align-items: center;
          padding: .85rem 1.5rem;
          background: #f01965;
          color: #fff;
          border-radius: 7px;
          font-size: .82rem;
          font-weight: 700;
          text-decoration: none;
        }

        .products-page .bp-pink:hover {
          background: #111;
        }

        .products-page .cta-note {
          font-size: .72rem;
          margin-top: 1rem;
        }

        /* FOOTER */
        .products-page footer {
          max-width: none;
          background: #111;
          color: rgba(255,255,255,.5);
          padding: 2.5rem 2rem;
        }

        .products-page .f-in {
          max-width: 1140px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .products-page .f-brand {
          font-family: "Raleway", sans-serif;
          font-size: 1.05rem;
          font-weight: 900;
          color: #fff;
        }

        .products-page .f-brand span {
          color: #f01965;
        }

        .products-page .f-links {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .products-page .f-links a {
          font-size: .75rem;
          color: rgba(255,255,255,.45);
          text-decoration: none;
        }

        .products-page .f-links a:hover {
          color: #f01965;
        }

        .products-page .f-meta {
          font-size: .72rem;
        }

        @media (max-width: 900px) {
          .products-page .nav-links {
            display: none;
          }

          .products-page .page-hero {
            padding: 80px 1.2rem 70px;
          }

          .products-page .page-hero h1 {
            font-size: clamp(2.8rem, 10vw, 4rem);
          }

          .products-page section {
            padding: 55px 1.2rem;
          }

          .products-page .prod-card {
            grid-template-columns: 1fr;
            padding: 25px;
          }

          .products-page .pasides {
            grid-template-columns: 1fr 1fr;
          }

          .products-page .fw5 {
            grid-template-columns: repeat(2,1fr);
          }
        }

        @media (max-width: 600px) {
          .products-page .pasides,
          .products-page .fw5 {
            grid-template-columns: 1fr;
          }

          .products-page .abhra-wm {
            align-items: flex-start;
            flex-wrap: wrap;
          }
        }
      `}</style>

      <div className="products-page">

        {/* NAVBAR */}
        <nav>
          <div className="nav-in">
            <a href="/" className="logo">
              Code<span>Cap</span>
            </a>

            <ul className="nav-links">
              <li><a href="/venture-studio">Venture Studio</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/team">Team</a></li>
              <li><a href="/insights">Insights</a></li>
              <li><a href="/podcast">Podcast</a></li>
            </ul>

            <button
              className="btn-talk"
              onClick={() => {
                window.location.href = "mailto:hello@codecap.ai";
              }}
            >
              Talk to us
            </button>
          </div>
        </nav>

        {/* HERO */}
        <div className="page-hero">
          <div className="eyebrow-text">CodeCap Products</div>
          <div className="divider"></div>

          <h1>
            We don't just advise.
            <br />
            We ship.
          </h1>

          <p>
            CodeCap builds and commercialises its own AI-powered and
            cybersecurity products for enterprise buyers across Southeast
            Asia, the Gulf, and South Asia — with a focus on intelligent
            automation, threat detection, and sovereign cloud security.
          </p>
        </div>

        {/* FLAGSHIP PRODUCT */}
        <section>
          <div className="eyebrow-text">Flagship Product</div>
          <div className="divider"></div>

          <h2>
            Abhra — sovereign cloud security
            <br />
            for the <span className="accent">regulated economy.</span>
          </h2>

          <p className="lead">
            Universal-inventory scanning across every AWS, Azure, and GCP
            resource, mapped to 25 compliance frameworks. Desktop-first. Your
            scan data never leaves your machine.
          </p>

          <div className="abhra-block">
            <div className="abhra-wm">
              <div className="abhra-ic">☁️</div>

              <div>
                <div
                  style={{
                    fontFamily: "var(--ff-h)",
                    fontSize: "1.3rem",
                    fontWeight: "900",
                    color: "var(--dark2)"
                  }}
                >
                  Abhra{" "}
                  <span
                    style={{
                      fontSize: "0.7em",
                      fontWeight: "400",
                      color: "var(--muted)"
                    }}
                  >
                    अभ्र
                  </span>
                </div>

                <div
                  style={{
                    fontSize: "0.68rem",
                    color: "var(--muted)"
                  }}
                >
                  Built by CrownTrend India · Distributed by CodeCap ·{" "}
                  <a
                    href="https://abhra.world"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "var(--blue)" }}
                  >
                    abhra.world
                  </a>
                </div>
              </div>

              <div style={{ marginLeft: "auto" }}>
                <span className="status-live">
                  <span className="sdot"></span>
                  Live — Free 30-Day Trial
                </span>
              </div>
            </div>

            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--muted)",
                lineHeight: "1.82",
                maxWidth: "700px",
                marginBottom: "0"
              }}
            >
              The Sanskrit word <em>अभ्र</em> means cloud — the rain-bearing
              kind. Abhra walks through every corner of your AWS, Azure, and
              GCP, finds the risks that shouldn't be there, and maps them to
              the frameworks your auditor cares about — in a language
              engineers can act on. Your scan data never leaves your laptop.
              This is the architecture, not a marketing claim.
            </p>

            <div className="stats-strip">
              <div>
                <div className="stat-n">1,894+</div>
                <div className="stat-l">Native Security Checks</div>
              </div>

              <div>
                <div className="stat-n">25</div>
                <div className="stat-l">Compliance Frameworks</div>
              </div>

              <div>
                <div className="stat-n">100%</div>
                <div className="stat-l">Scan Data On-Machine</div>
              </div>

              <div>
                <div className="stat-n">Read-only</div>
                <div className="stat-l">
                  Cloud Access — Never Modifies Infra
                </div>
              </div>
            </div>
          </div>

          {/* FULL CAPABILITIES */}
          <div
            className="prod-card featured"
            style={{ marginTop: "0" }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  marginBottom: "1rem",
                  flexWrap: "wrap"
                }}
              >
                <span className="tag tag-pink">Cloud Security</span>
                <span className="tag tag-blue">CSPM / CNAPP</span>
                <span className="tag tag-green">Agentless</span>
                <span className="tag tag-green">
                  Sovereign Deployment
                </span>
              </div>

              <div className="pname">Full Capabilities</div>

              <div className="ptag">
                AWS · Azure · GCP · Windows / macOS / Linux · Air-gappable ·
                USD / EUR / INR / AED billing
              </div>

              <div className="pdesc">
                The alternative to Wiz, Prisma Cloud, Defender for Cloud, and
                Orca Security for regulated buyers who cannot send cloud
                telemetry to a vendor's multi-tenant SaaS. Same category —
                agentless cloud security posture, universal inventory, deep
                compliance — built desktop-first and air-gappable from day
                one.
              </div>

              <div className="pfeats">
                <div className="pf">
                  Agentless universal inventory — every AWS, Azure, GCP
                  resource via Cloud Control API, Resource Graph, and Cloud
                  Asset Inventory. No agents, no sidecars, read-only
                  credentials only.
                </div>

                <div className="pf">
                  25 compliance frameworks — ISO 27001, SOC 2 Type II, PCI DSS
                  4.0, GDPR, EU NIS2, DORA, NESA UAE, SAMA Saudi, MAS TRM
                  Singapore, HIPAA, India BFSI (SEBI, RBI, CERT-In, DPDPA).
                </div>

                <div className="pf">
                  IAM + network + storage analysis — identity over-privilege,
                  exposed credentials, public storage, security-group
                  sprawl, untracked attack paths as a who-can-reach-what
                  graph.
                </div>

                <div className="pf">
                  Ticketing integrations — Jira, ServiceNow, Azure DevOps,
                  Linear, GitHub Issues, GitLab Issues, PagerDuty,
                  Freshservice, custom REST, or email.
                </div>

                <div className="pf">
                  SIEM / SOAR streaming — Splunk, Microsoft Sentinel, Google
                  Chronicle, Palo Alto XSOAR, Elastic, syslog, or any
                  webhook.
                </div>

                <div className="pf">
                  Desktop-first, sovereignty-aware — runs on Windows, macOS,
                  Linux. SQLite-local storage. Scan history, evidence, and
                  reports never touch a vendor cloud.
                </div>

                <div className="pf">
                  Auditor-ready evidence — check ID, framework citations,
                  resource reference, remediation runbook. PDF + Excel for
                  regulators.
                </div>

                <div className="pf">
                  Air-gapped environments — on-prem license server, fully
                  offline install for high-security and government
                  environments.
                </div>
              </div>
            </div>

            <div className="pasides">
              <div className="pa">
                <div className="pal">Cloud Platforms</div>
                <span className="pat">AWS</span>
                <span className="pat">Azure</span>
                <span className="pat">GCP</span>
              </div>

              <div className="pa">
                <div className="pal">Runs On</div>
                <span className="pat">Windows</span>
                <span className="pat">macOS</span>
                <span className="pat">Linux</span>
                <span className="pat">Air-gapped</span>
              </div>

              <div className="pa">
                <div className="pal">Target Buyers</div>
                <span className="pat">Platform Engineers</span>
                <span className="pat">CISOs</span>
                <span className="pat">GRC Teams</span>
                <span className="pat">BFSI</span>
                <span className="pat">Healthtech</span>
                <span className="pat">Gov</span>
              </div>

              <div className="pa">
                <div className="pal">Key Integrations</div>
                <span className="pat">Jira</span>
                <span className="pat">ServiceNow</span>
                <span className="pat">Splunk</span>
                <span className="pat">Sentinel</span>
                <span className="pat">GitHub</span>
                <span className="pat">PagerDuty</span>
              </div>

              <div className="pa">
                <div className="pal">Billing Currencies</div>
                <span className="pat">USD</span>
                <span className="pat">EUR</span>
                <span className="pat">INR</span>
                <span className="pat">AED</span>
              </div>

              <div className="pa">
                <div className="pal">CodeCap Markets</div>
                <span className="pat">🇸🇬 Singapore</span>
                <span className="pat">🇦🇪 UAE</span>
                <span className="pat">🇸🇦 KSA</span>
                <span className="pat">🇮🇳 India</span>
              </div>

              <div style={{ marginTop: "0.5rem" }}>
                <a
                  href="https://abhra.world/download"
                  target="_blank"
                  rel="noreferrer"
                  className="bp-pink"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    borderRadius: "30px"
                  }}
                >
                  Download Free Trial →
                </a>
              </div>
            </div>
          </div>

          {/* FRAMEWORKS */}
          <h3
            style={{
              marginTop: "2.5rem",
              marginBottom: "1rem"
            }}
          >
            25 Compliance Frameworks — Regional regulators get the same depth
            as SOC 2 or ISO 27001.
          </h3>

          <div className="fw5">
            <div className="fw-item">
              <div className="fw-title">Global Baseline</div>
              <p>
                ISO 27001 · SOC 2 Type II · PCI DSS 4.0 · HIPAA · NIST CSF 2.0
              </p>
            </div>

            <div className="fw-item">
              <div className="fw-title">EU + UK</div>
              <p>
                GDPR · EU NIS2 · EU DORA · UK Cyber Essentials+ · ISO 27018
              </p>
            </div>

            <div className="fw-item">
              <div className="fw-title">Middle East</div>
              <p>
                NESA UAE · SAMA Saudi · PDPL Saudi · MAS TRM Singapore · CMMC
              </p>
            </div>

            <div className="fw-item">
              <div className="fw-title">India BFSI</div>
              <p>
                SEBI Cybersecurity · RBI IT Framework · CERT-In · DPDPA
              </p>
            </div>

            <div className="fw-item">
              <div className="fw-title">Cloud-Native</div>
              <p>
                AWS Well-Architected · FedRAMP · MITRE ATT&CK · CIS
                AWS/Azure/GCP
              </p>
            </div>
          </div>
        </section>

        {/* OTHER PRODUCTS */}
        <section style={{ background: "var(--bg2)" }}>
          <div className="eyebrow-text">Also in the Portfolio</div>
          <div className="divider"></div>

          <h2>
            More products <span className="accent">in development.</span>
          </h2>

          {/* ILCM */}
          <div
            className="prod-card"
            style={{ marginBottom: "2rem" }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  marginBottom: "1rem",
                  flexWrap: "wrap"
                }}
              >
                <span className="tag tag-pink">Cybersecurity</span>

                <span className="status-dev">
                  <span className="sdot d"></span>
                  In Development
                </span>
              </div>

              <div className="pname">
                Autonomous ILCM Platform
              </div>

              <div className="ptag">
                Incident Lifecycle & Convergence Management · Orchestrates
                Existing Tools · No Data Lake Required
              </div>

              <div className="pdesc">
                An AI-powered incident lifecycle platform autonomously
                managing the full post-detection response chain. Five
                specialised AI bots (Triage, Investigation, Containment,
                Validation, PIR) orchestrate across existing SIEM and EDR
                tooling via API. Every decision is auditable, humans stay in
                control.
              </div>

              <div className="pfeats">
                <div className="pf">
                  Triage Bot — autonomous alert classification & noise
                  reduction
                </div>

                <div className="pf">
                  Investigation Bot — evidence collection & kill chain
                  mapping
                </div>

                <div className="pf">
                  Containment Bot — autonomous threat isolation & response
                </div>

                <div className="pf">
                  Validation Bot — remediation confirmation & recurrence
                  checks
                </div>

                <div className="pf">
                  PIR Bot — post-incident review & self-learning loop
                </div>

                <div className="pf">
                  Human-in-the-loop with configurable confidence thresholds
                </div>

                <div className="pf">
                  Full audit trail & chain-of-custody export for SOC 2 / NIST
                </div>
              </div>
            </div>

            <div className="pasides">
              <div className="pa">
                <div className="pal">Target Users</div>
                <span className="pat">CISO</span>
                <span className="pat">SOC Manager</span>
                <span className="pat">Analyst</span>
                <span className="pat">Auditor / GRC</span>
              </div>

              <div className="pa">
                <div className="pal">Integrations</div>
                <span className="pat">Splunk / SIEM</span>
                <span className="pat">CrowdStrike / EDR</span>
                <span className="pat">Email Gateway</span>
                <span className="pat">Shodan</span>
              </div>

              <div className="pa">
                <div className="pal">Stack</div>
                <span className="pat">Next.js 15</span>
                <span className="pat">React 19</span>
                <span className="pat">GPT-4o</span>
                <span className="pat">Supabase</span>
              </div>
            </div>
          </div>

          {/* CLOUD BOM */}
          <div className="prod-card">
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  marginBottom: "1rem",
                  flexWrap: "wrap"
                }}
              >
                <span className="tag tag-pink">Cybersecurity</span>

                <span className="status-live">
                  <span className="sdot"></span>
                  Live
                </span>
              </div>

              <div className="pname">
                Cloud-BOM — now superseded by Abhra
              </div>

              <div className="ptag">
                On-Premises Cloud Security · Zero Cloud Data Exposure ·
                Distributed by CodeCap ·{" "}
                <a
                  href="https://abhra.world"
                  target="_blank"
                  rel="noreferrer"
                >
                  abhra.world
                </a>
              </div>

              <div className="pdesc">
                Cloud-BOM discovers, maps, and secures your entire cloud
                infrastructure running fully on-premises. AI-driven risk
                scoring, attack path visualisation, and automated compliance
                mapping across six major frameworks. Complete security
                posture report in under five minutes.
              </div>

              <div className="pfeats">
                <div className="pf">
                  Discovers 50+ AWS service types (EC2, S3, Lambda, RDS, IAM,
                  VPC & more)
                </div>

                <div className="pf">
                  AI-powered risk scoring with attack scenario generation &
                  blast radius assessment
                </div>

                <div className="pf">
                  Interactive attack path visualisation — lateral movement &
                  privilege escalation
                </div>

                <div className="pf">
                  Automated compliance: SOC 2, ISO 27001, NIST CSF, CIS
                  Benchmarks, CERT-In, HIPAA
                </div>

                <div className="pf">
                  AES-256 credential encryption, machine-bound licensing, zero
                  telemetry
                </div>
              </div>
            </div>

            <div className="pasides">
              <div className="pa">
                <div className="pal">Frameworks</div>
                <span className="pat">SOC 2</span>
                <span className="pat">ISO 27001</span>
                <span className="pat">NIST CSF</span>
                <span className="pat">CIS</span>
                <span className="pat">CERT-In</span>
                <span className="pat">HIPAA</span>
              </div>

              <div className="pa">
                <div className="pal">Commercialisation</div>
                <span className="pat">Distributed by CodeCap</span>
                <span className="pat">Distributed by CodeCap</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-sec">
          <div>
            <div
              style={{
                fontFamily: "var(--ff-b)",
                fontSize: "0.72rem",
                fontWeight: "600",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#f01965",
                marginBottom: "1rem"
              }}
            >
              Get Started
            </div>

            <h2>
              Try Abhra or get early{" "}
              <span className="accent">access to ILCM.</span>
            </h2>

            <p>
              Abhra is available now with a free 30-day trial. ILCM is in
              development — reach out to join the early access programme.
            </p>

            <div className="cta-acts">
              <a
                href="https://abhra.world/download"
                target="_blank"
                rel="noreferrer"
                className="bp"
              >
                Download Abhra Free →
              </a>

              <a
                href="mailto:products@codecap.ai"
                className="bp-pink"
              >
                Request ILCM Access
              </a>
            </div>

            <p className="cta-note">
              products@codecap.ai
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <div className="f-in">
            <div className="f-brand">
              Code<span>Cap</span>
            </div>

            <div className="f-links">
              <a href="/venture-studio">Venture Studio</a>
              <a href="/services">Services</a>
              <a href="/products">Products</a>
              <a href="/portfolio">Portfolio</a>
              <a href="/team">Team</a>
              <a href="/insights">Insights</a>
              <a href="/podcast">Podcast</a>
            </div>

            <div className="f-meta">
              © 2025 CodeCap Ventures · Singapore · UAE · India ·
              hello@codecap.ai
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}

export default Products;