import "./styles.css";

function Products() {
  return (
    <>
      <style>{`
        .products-page .page-hero {
          background: linear-gradient(135deg, #fff8fb 0%, #f4f9ff 100%);
          min-height: 540px;
          box-sizing: border-box;
          padding: 112px 2rem 100px;
        }

        .products-page .page-hero > * {
          max-width: 1140px;
          margin-left: auto;
          margin-right: auto;
        }

        .products-page .page-hero .eyebrow-text,
        .products-page .page-hero .divider,
        .products-page .page-hero h1,
        .products-page .page-hero p {
          margin-left: auto;
          margin-right: auto;
        }

        .products-page .page-hero h1 {
          font-family: var(--ff-h);
          font-size: clamp(3.2rem, 5.5vw, 4.8rem);
          font-weight: 900;
          line-height: 1.08;
          letter-spacing: -0.02em;
          color: #111;
          max-width: 1140px;
        }

        .products-page .page-hero p {
          max-width: 560px;
          margin-left: calc((100% - 1140px) / 2);
          margin-right: auto;
          font-size: 1rem;
          color: var(--dark2);
          line-height: 1.82;
          margin-top: 1rem;
          font-weight: 300;
        }

        .products-page section {
          max-width: 1140px;
          margin: 0 auto;
          padding: 80px 2rem;
        }

        .products-page .eyebrow-text {
          font-size: .72rem;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: var(--muted);
          font-weight: 600;
        }

        .products-page .divider {
          width: 52px;
          height: 3px;
          background: var(--pink);
          border-radius: 2px;
          margin-top: 12px;
          margin-bottom: 28px;
          margin-left: 0;
        }

        .products-page h2 {
          font-family: var(--ff-h);
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 900;
          line-height: 1.12;
          color: #111;
          margin-bottom: 1rem;
        }

        .products-page .accent {
          color: var(--pink);
        }

        .products-page .lead {
          max-width: 700px;
          color: var(--muted);
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .abhra-block {
          background: linear-gradient(135deg,#fff5f8,#f0f8ff);
          border: 2px solid var(--pink-light);
          border-radius: 12px;
          padding: 2.75rem;
          margin-bottom: 2rem;
        }

        .stats-strip {
          display: flex;
          gap: 2.5rem;
          flex-wrap: wrap;
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 1.5rem 2rem;
          margin: 1.5rem 0 0;
        }

        .stat-n {
          font-family: var(--ff-h);
          font-size: 1.8rem;
          font-weight: 900;
          color: var(--pink);
          line-height: 1;
        }

        .stat-l {
          font-size: .68rem;
          font-weight: 600;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: var(--muted2);
          margin-top: .2rem;
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
          font-size: .6rem;
          font-weight: 700;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: var(--pink);
          margin-bottom: .45rem;
        }

        .fw-item p {
          font-size: .7rem;
          color: var(--muted);
          line-height: 1.55;
        }

        @media (max-width: 900px) {
          .products-page .page-hero {
            padding: 80px 1.5rem;
          }

          .products-page .page-hero p {
            margin-left: 0;
          }

          .products-page section {
            padding: 60px 1.5rem;
          }

          .fw5 {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>

      <nav>
        <div className="nav-in">
          <a href="/" className="logo">Code<span>Cap</span></a>
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
            onClick={() => (window.location.href = "mailto:hello@codecap.ai")}
          >
            Talk to us
          </button>
        </div>
      </nav>

      <main className="products-page">
        <div className="page-hero">
          <div className="eyebrow-text">CodeCap Products</div>
          <div className="divider"></div>
          <h1>We don't just advise.<br />We ship.</h1>
          <p>
            CodeCap builds and commercialises its own AI-powered and cybersecurity
            products for enterprise buyers across Southeast Asia, the Gulf, and
            South Asia — with a focus on intelligent automation, threat detection,
            and sovereign cloud security.
          </p>
        </div>

        <section>
          <div className="eyebrow-text">Flagship Product</div>
          <div className="divider"></div>
          <h2>
            Abhra — sovereign cloud security<br />
            for the <span className="accent">regulated economy.</span>
          </h2>

          <p className="lead">
            Universal-inventory scanning across every AWS, Azure, and GCP resource,
            mapped to 25 compliance frameworks. Desktop-first. Your scan data never
            leaves your machine.
          </p>

          <div className="abhra-block">
            <h3>Abhra <span>अभ्र</span></h3>
            <p>
              Built by CrownTrend India · Distributed by CodeCap ·{" "}
              <a href="https://abhra.world" target="_blank" rel="noreferrer">
                abhra.world
              </a>
            </p>

            <p>
              The Sanskrit word <em>अभ्र</em> means cloud — the rain-bearing kind.
              Abhra walks through every corner of your AWS, Azure, and GCP, finds
              the risks that shouldn't be there, and maps them to the frameworks
              your auditor cares about. Your scan data never leaves your laptop.
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
                <div className="stat-l">Cloud Access</div>
              </div>
            </div>
          </div>

          <div className="prod-card featured">
            <div>
              <div className="pname">Full Capabilities</div>
              <div className="ptag">
                AWS · Azure · GCP · Windows / macOS / Linux · Air-gappable
              </div>
              <div className="pdesc">
                Agentless cloud security posture, universal inventory, deep
                compliance, desktop-first and air-gappable from day one.
              </div>
              <div className="pfeats">
                <div className="pf">Agentless universal inventory across AWS, Azure and GCP</div>
                <div className="pf">25 compliance frameworks</div>
                <div className="pf">IAM, network and storage analysis</div>
                <div className="pf">Ticketing integrations</div>
                <div className="pf">SIEM / SOAR streaming</div>
                <div className="pf">Desktop-first sovereign deployment</div>
                <div className="pf">Auditor-ready evidence</div>
                <div className="pf">Air-gapped environments</div>
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
              </div>
            </div>
          </div>

          <h3 style={{marginTop: "2.5rem"}}>
            25 Compliance Frameworks
          </h3>

          <div className="fw5">
            <div className="fw-item">
              <div className="fw-title">Global Baseline</div>
              <p>ISO 27001 · SOC 2 · PCI DSS · HIPAA · NIST CSF</p>
            </div>
            <div className="fw-item">
              <div className="fw-title">EU + UK</div>
              <p>GDPR · EU NIS2 · EU DORA · UK Cyber Essentials+</p>
            </div>
            <div className="fw-item">
              <div className="fw-title">Middle East</div>
              <p>NESA UAE · SAMA Saudi · PDPL Saudi · MAS TRM</p>
            </div>
            <div className="fw-item">
              <div className="fw-title">India BFSI</div>
              <p>SEBI · RBI · CERT-In · DPDPA</p>
            </div>
            <div className="fw-item">
              <div className="fw-title">Cloud-Native</div>
              <p>AWS Well-Architected · FedRAMP · MITRE ATT&CK · CIS</p>
            </div>
          </div>
        </section>

        <section style={{background: "var(--bg2)"}}>
          <div className="eyebrow-text">Also in the Portfolio</div>
          <div className="divider"></div>
          <h2>More products <span className="accent">in development.</span></h2>

          <div className="prod-card">
            <div>
              <div className="pname">Autonomous ILCM Platform</div>
              <div className="ptag">
                Incident Lifecycle & Convergence Management
              </div>
              <div className="pdesc">
                An AI-powered incident lifecycle platform managing the full
                post-detection response chain across existing SIEM and EDR tools.
              </div>
            </div>
          </div>

          <div className="prod-card">
            <div>
              <div className="pname">Cloud-BOM — now superseded by Abhra</div>
              <div className="ptag">On-Premises Cloud Security</div>
              <div className="pdesc">
                Cloud infrastructure discovery, risk scoring, attack-path
                visualisation and compliance mapping.
              </div>
            </div>
          </div>
        </section>

        <section className="cta-sec">
          <div>
            <div className="eyebrow-text">Get Started</div>
            <div className="divider"></div>
            <h2>
              Try Abhra or get early <span className="accent">access to ILCM.</span>
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
              <a href="mailto:products@codecap.ai" className="bp-pink">
                Request ILCM Access
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="f-in">
          <div className="f-brand">Code<span>Cap</span></div>
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
            © 2025 CodeCap Ventures · Singapore · UAE · India · hello@codecap.ai
          </div>
        </div>
      </footer>
    </>
  );
}

export default Products;
