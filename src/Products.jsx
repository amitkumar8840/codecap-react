import "./styles.css";

function Products() {
  return (
    <>
      <style>{`
        .abhra-block {
          background: linear-gradient(135deg,#fff5f8,#f0f8ff);
          border: 2px solid var(--pink-light);
          border-radius: 12px;
          padding: 2.75rem;
          margin-bottom: 2rem;
          position: relative;
          overflow: hidden;
        }

        .abhra-block::before {
          content: 'FLAGSHIP PRODUCT';
          position: absolute;
          top: 0;
          right: 2rem;
          font-family: var(--ff-b);
          font-size: 0.55rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          background: var(--pink);
          color: #fff;
          padding: 0.2rem 0.7rem;
          border-radius: 0 0 6px 6px;
        }

        .stats-strip {
          display: flex;
          gap: 2.5rem;
          flex-wrap: wrap;
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 1.5rem 2rem;
          margin: 1.5rem 0;
        }

        .stat-item .stat-n {
          font-family: var(--ff-h);
          font-size: 1.8rem;
          font-weight: 900;
          color: var(--pink);
          line-height: 1;
        }

        .stat-item .stat-l {
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--muted2);
          margin-top: 0.2rem;
        }

        .fw5 {
          display: grid;
          grid-template-columns: repeat(5,1fr);
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .fw-item {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 1rem;
          text-align: center;
        }

        .fw-title {
          font-family: var(--ff-b);
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--pink);
          margin-bottom: 0.45rem;
        }

        .fw-item p {
          font-size: 0.7rem;
          color: var(--muted);
          line-height: 1.55;
        }

        .abhra-wm {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .abhra-ic {
          width: 48px;
          height: 48px;
          background: var(--grad);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
        }

        @media(max-width:900px) {
          .fw5 {
            grid-template-columns: repeat(2,1fr);
          }
        }

        .nav-in {
          max-width:1140px;
          margin:0 auto;
          padding:0 2rem;
          display:flex;
          align-items:center;
          justify-content:space-between;
          height:68px;
        }

        nav {
          position:sticky;
          top:0;
          z-index:200;
          background:rgba(255,255,255,.97);
          backdrop-filter:blur(14px);
          border-bottom:1px solid #e2e8f0;
          box-shadow:0 1px 16px rgba(0,0,0,.06);
        }

        .logo {
          font-family:'Raleway',sans-serif;
          font-size:1.35rem;
          font-weight:900;
          color:#111;
          text-decoration:none;
        }

        .logo span {
          color:#f01965;
        }

        .nav-links {
          display:flex;
          gap:.15rem;
          list-style:none;
        }

        .nav-links a {
          font-size:.78rem;
          font-weight:600;
          color:#444;
          padding:.45rem .8rem;
          border-radius:5px;
          text-decoration:none;
        }

        .nav-links a:hover {
          color:#f01965;
          background:rgba(240,25,101,.06);
        }

        .btn-talk {
          font-family:'Open Sans',sans-serif;
          font-size:.78rem;
          font-weight:700;
          padding:.55rem 1.4rem;
          background:#111;
          color:white;
          border:none;
          border-radius:6px;
          cursor:pointer;
        }

        .btn-talk:hover {
          background:#f01965;
        }

        .f-in {
          max-width:1140px;
          margin:0 auto;
          display:flex;
          align-items:center;
          justify-content:space-between;
          flex-wrap:wrap;
          gap:1rem;
        }

        .f-brand {
          font-family:'Raleway',sans-serif;
          font-size:1.05rem;
          font-weight:900;
          color:white;
        }

        .f-brand span {
          color:#f01965;
        }

        .f-links {
          display:flex;
          gap:1.5rem;
          flex-wrap:wrap;
        }

        .f-links a {
          font-size:.75rem;
          color:rgba(255,255,255,.45);
          text-decoration:none;
        }

        .f-links a:hover {
          color:#f01965;
        }

        .f-meta {
          font-size:.72rem;
        }
      `}</style>

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

      <div className="page-hero">
        <div className="eyebrow-text">CodeCap Products</div>
        <div className="divider"></div>

        <h1>
          We don't just advise.
          <br />
          We ship.
        </h1>

        <p
          style={{
            fontSize: "1rem",
            color: "var(--dark2)",
            maxWidth: "560px",
            lineHeight: "1.82",
            marginTop: "1rem",
            fontWeight: "300"
          }}
        >
          CodeCap builds and commercialises its own AI-powered and
          cybersecurity products for enterprise buyers across Southeast
          Asia, the Gulf, and South Asia — with a focus on intelligent
          automation, threat detection, and sovereign cloud security.
        </p>
      </div>

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
          resource, mapped to 25 compliance frameworks. Desktop-first.
          Your scan data never leaves your machine.
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
            kind. Abhra walks through every corner of your AWS, Azure,
            and GCP, finds the risks that shouldn't be there, and maps
            them to the frameworks your auditor cares about — in a
            language engineers can act on. Your scan data never leaves
            your laptop. This is the architecture, not a marketing claim.
          </p>

          <div className="stats-strip">
            <div className="stat-item">
              <div className="stat-n">1,894+</div>
              <div className="stat-l">Native Security Checks</div>
            </div>

            <div className="stat-item">
              <div className="stat-n">25</div>
              <div className="stat-l">Compliance Frameworks</div>
            </div>

            <div className="stat-item">
              <div className="stat-n">100%</div>
              <div className="stat-l">Scan Data On-Machine</div>
            </div>

            <div className="stat-item">
              <div className="stat-n">Read-only</div>
              <div className="stat-l">
                Cloud Access — Never Modifies Infra
              </div>
            </div>
          </div>
        </div>

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
              AWS · Azure · GCP · Windows / macOS / Linux · Air-gappable
              · USD / EUR / INR / AED billing
            </div>

            <div className="pdesc">
              The alternative to Wiz, Prisma Cloud, Defender for Cloud,
              and Orca Security for regulated buyers who cannot send
              cloud telemetry to a vendor's multi-tenant SaaS. Same
              category — agentless cloud security posture, universal
              inventory, deep compliance — built desktop-first and
              air-gappable from day one.
            </div>

            <div className="pfeats">
              <div className="pf">
                Agentless universal inventory — every AWS, Azure, GCP
                resource via Cloud Control API, Resource Graph, and Cloud
                Asset Inventory. No agents, no sidecars, read-only
                credentials only.
              </div>

              <div className="pf">
                25 compliance frameworks — ISO 27001, SOC 2 Type II,
                PCI DSS 4.0, GDPR, EU NIS2, DORA, NESA UAE, SAMA Saudi,
                MAS TRM Singapore, HIPAA, India BFSI (SEBI, RBI,
                CERT-In, DPDPA).
              </div>

              <div className="pf">
                IAM + network + storage analysis — identity
                over-privilege, exposed credentials, public storage,
                security-group sprawl, untracked attack paths as a
                who-can-reach-what graph.
              </div>

              <div className="pf">
                Ticketing integrations — Jira, ServiceNow, Azure
                DevOps, Linear, GitHub Issues, GitLab Issues, PagerDuty,
                Freshservice, custom REST, or email.
              </div>

              <div className="pf">
                SIEM / SOAR streaming — Splunk, Microsoft Sentinel,
                Google Chronicle, Palo Alto XSOAR, Elastic, syslog,
                or any webhook.
              </div>

              <div className="pf">
                Desktop-first, sovereignty-aware — runs on Windows,
                macOS, Linux. SQLite-local storage. Scan history,
                evidence, and reports never touch a vendor cloud.
              </div>

              <div className="pf">
                Auditor-ready evidence — check ID, framework citations,
                resource reference, remediation runbook. PDF + Excel
                for regulators.
              </div>

              <div className="pf">
                Air-gapped environments — on-prem license server,
                fully offline install for high-security and government
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

        <h3 style={{ marginTop: "2.5rem", marginBottom: "1rem" }}>
          25 Compliance Frameworks — Regional regulators get the same
          depth as SOC 2 or ISO 27001.
        </h3>

        <div className="fw5">
          <div className="fw-item">
            <div className="fw-title">Global Baseline</div>
            <p>
              ISO 27001 · SOC 2 Type II · PCI DSS 4.0 · HIPAA · NIST
              CSF 2.0
            </p>
          </div>

          <div className="fw-item">
            <div className="fw-title">EU + UK</div>
            <p>
              GDPR · EU NIS2 · EU DORA · UK Cyber Essentials+ · ISO
              27018
            </p>
          </div>

          <div className="fw-item">
            <div className="fw-title">Middle East</div>
            <p>
              NESA UAE · SAMA Saudi · PDPL Saudi · MAS TRM Singapore ·
              CMMC
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

      <section style={{ background: "var(--bg2)" }}>
        <div className="eyebrow-text">Also in the Portfolio</div>
        <div className="divider"></div>

        <h2>
          More products{" "}
          <span className="accent">in development.</span>
        </h2>

        <div className="prod-card" style={{ marginBottom: "2rem" }}>
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

            <div className="pname">Autonomous ILCM Platform</div>

            <div className="ptag">
              Incident Lifecycle & Convergence Management · Orchestrates
              Existing Tools · No Data Lake Required
            </div>

            <div className="pdesc">
              An AI-powered incident lifecycle platform autonomously
              managing the full post-detection response chain. Five
              specialised AI bots (Triage, Investigation, Containment,
              Validation, PIR) orchestrate across existing SIEM and EDR
              tooling via API. Every decision is auditable, humans stay
              in control.
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
                Validation Bot — remediation confirmation &
                recurrence checks
              </div>

              <div className="pf">
                PIR Bot — post-incident review & self-learning loop
              </div>

              <div className="pf">
                Human-in-the-loop with configurable confidence
                thresholds
              </div>

              <div className="pf">
                Full audit trail & chain-of-custody export for SOC 2 /
                NIST
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
                style={{ color: "var(--blue)" }}
              >
                abhra.world
              </a>
            </div>

            <div className="pdesc">
              Cloud-BOM discovers, maps, and secures your entire cloud
              infrastructure running fully on-premises. AI-driven risk
              scoring, attack path visualisation, and automated
              compliance mapping across six major frameworks. Complete
              security posture report in under five minutes.
            </div>

            <div className="pfeats">
              <div className="pf">
                Discovers 50+ AWS service types (EC2, S3, Lambda, RDS,
                IAM, VPC & more)
              </div>

              <div className="pf">
                AI-powered risk scoring with attack scenario generation
                & blast radius assessment
              </div>

              <div className="pf">
                Interactive attack path visualisation — lateral
                movement & privilege escalation
              </div>

              <div className="pf">
                Automated compliance: SOC 2, ISO 27001, NIST CSF, CIS
                Benchmarks, CERT-In, HIPAA
              </div>

              <div className="pf">
                AES-256 credential encryption, machine-bound licensing,
                zero telemetry
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
            </div>
          </div>
        </div>
      </section>

      <section className="cta-sec">
        <div style={{ position: "relative", zIndex: "2" }}>
          <div
            style={{
              fontFamily: "var(--ff-b)",
              fontSize: "0.72rem",
              fontWeight: "600",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--pink)",
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

          <p className="cta-note">products@codecap.ai</p>
        </div>
      </section>

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
    </>
  );
}

export default Products;