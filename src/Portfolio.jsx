import "./styles.css";

function Portfolio() {
  return (
    <>
      <style>{`
        /* Portfolio page - matches the original portfolio.html design */
        .portfolio-page {
          width: 100%;
          color: #111;
          background: #fff;
          font-family: "Open Sans", sans-serif;
        }

        .portfolio-page nav {
          position: sticky;
          top: 0;
          z-index: 200;
          background: rgba(255,255,255,.97);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid #e2e8f0;
          box-shadow: 0 1px 16px rgba(0,0,0,.06);
        }

        .portfolio-page .nav-in {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 68px;
        }

        .portfolio-page .logo {
          font-family: "Raleway", sans-serif;
          font-size: 1.35rem;
          font-weight: 900;
          color: #111;
          letter-spacing: -.02em;
          text-decoration: none;
        }

        .portfolio-page .logo span { color: #f01965; }

        .portfolio-page .nav-links {
          display: flex;
          gap: .15rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .portfolio-page .nav-links a {
          font-size: .78rem;
          font-weight: 600;
          color: #444;
          padding: .45rem .8rem;
          border-radius: 5px;
          text-decoration: none;
        }

        .portfolio-page .nav-links a:hover {
          color: #f01965;
          background: rgba(240,25,101,.06);
        }

        .portfolio-page .btn-talk {
          font-family: "Open Sans", sans-serif;
          font-size: .78rem;
          font-weight: 700;
          padding: .55rem 1.4rem;
          background: #111;
          color: #fff;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        .portfolio-page .btn-talk:hover { background: #f01965; }

        /* ORIGINAL HERO */
        .portfolio-page .page-hero {
          width: 100%;
          padding: 105px max(55px, calc((100% - 1140px) / 2));
          background: linear-gradient(135deg, #fff5f8 0%, #f0f8ff 100%);
        }

        .portfolio-page .eyebrow-text {
          font-size: .72rem;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: #6b7a8d;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .portfolio-page .divider {
          width: 52px;
          height: 4px;
          background: #f01965;
          border-radius: 3px;
          margin-bottom: 1.8rem;
        }

        .portfolio-page .page-hero h1 {
          font-family: "Raleway", sans-serif;
          font-size: clamp(3rem, 5.5vw, 4.8rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -.025em;
          color: #f01965;
          margin: 0 0 1.2rem;
        }

        .portfolio-page .page-hero p {
          font-size: 1rem;
          color: #6b7a8d;
          max-width: 560px;
          line-height: 1.82;
          margin: 0;
          font-weight: 300;
        }

        .portfolio-page section {
          max-width: 1140px;
          margin: 0 auto;
          padding: 70px 2rem;
        }

        .portfolio-page .port-badge {
          display: inline-flex;
          align-items: center;
          gap: .5rem;
          background: #f7f9fc;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: .4rem 1rem;
          font-size: .65rem;
          font-weight: 700;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: #6b7a8d;
          margin-bottom: 1rem;
        }

        .portfolio-page .port-badge::before {
          content: "●";
          color: #f01965;
          font-size: .5rem;
        }

        /* CARDS */
        .portfolio-page .prod-card {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 2.5rem;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 280px;
          gap: 2.5rem;
          align-items: start;
          margin-bottom: 2.5rem;
          box-shadow: 0 5px 24px rgba(0,0,0,.06);
        }

        .portfolio-page .prod-card.featured {
          border-top: 3px solid #f01965;
        }

        .portfolio-page .tag {
          display: inline-block;
          font-size: .68rem;
          font-weight: 700;
          padding: .25rem .65rem;
          border-radius: 20px;
          text-transform: uppercase;
          letter-spacing: .06em;
        }

        .portfolio-page .tag-purple { background: #eeedfe; color: #5a52c7; }
        .portfolio-page .tag-blue { background: #e7f5fc; color: #0288c7; }
        .portfolio-page .tag-gray { background: #f1f3f5; color: #6b7a8d; }
        .portfolio-page .tag-pink { background: #fbeaf0; color: #f01965; }
        .portfolio-page .tag-green { background: #e3f6ec; color: #1d9e75; }

        .portfolio-page .pname {
          font-family: "Raleway", sans-serif;
          font-size: 1.8rem;
          font-weight: 800;
          color: #111;
          margin: .5rem 0 .4rem;
        }

        .portfolio-page .ptag {
          font-size: .78rem;
          font-weight: 600;
          color: #1a1a2e;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .portfolio-page .ptag a { color: #029fe7; }

        .portfolio-page .pdesc {
          font-size: .9rem;
          color: #6b7a8d;
          line-height: 1.8;
          margin-bottom: 1rem;
        }

        .portfolio-page .pfeats {
          display: grid;
          gap: .45rem;
        }

        .portfolio-page .pf {
          font-size: .82rem;
          color: #1a1a2e;
          line-height: 1.6;
          padding-left: 15px;
          position: relative;
        }

        .portfolio-page .pf::before {
          content: "›";
          position: absolute;
          left: 0;
          color: #f01965;
          font-weight: 800;
        }

        .portfolio-page .pasides {
          display: grid;
          gap: 1rem;
        }

        .portfolio-page .pa {
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 1rem;
          background: #fff;
        }

        .portfolio-page .pal {
          font-size: .68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .08em;
          color: #6b7a8d;
          margin-bottom: .55rem;
        }

        .portfolio-page .pat {
          display: inline-block;
          font-size: .78rem;
          color: #1a1a2e;
          margin: 0 8px 5px 0;
        }

        .portfolio-page .status-live {
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

        .portfolio-page .sdot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #1d9e75;
        }

        .portfolio-page .bp {
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

        .portfolio-page .bp:hover { background: #f01965; }

        .portfolio-page .cta-section {
          max-width: none;
          background: #f7f9fc;
          text-align: center;
        }

        .portfolio-page .cta-inner {
          max-width: 580px;
          margin: 0 auto;
        }

        .portfolio-page .divider-center {
          margin: 1rem auto 1.5rem;
        }

        .portfolio-page .cta-section h2 {
          font-family: "Raleway", sans-serif;
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1rem;
          color: #111;
        }

        .portfolio-page .accent { color: #f01965; }

        .portfolio-page .lead {
          font-size: .95rem;
          color: #6b7a8d;
          line-height: 1.82;
        }

        .portfolio-page .bp-pink {
          display: inline-flex;
          padding: .85rem 1.5rem;
          background: #f01965;
          color: #fff;
          border-radius: 7px;
          font-size: .82rem;
          font-weight: 700;
          text-decoration: none;
        }

        .portfolio-page footer {
          max-width: none;
          background: #111;
          color: rgba(255,255,255,.5);
          padding: 2.5rem 2rem;
        }

        .portfolio-page .f-in {
          max-width: 1140px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .portfolio-page .f-brand {
          font-family: "Raleway", sans-serif;
          font-size: 1.05rem;
          font-weight: 900;
          color: #fff;
        }

        .portfolio-page .f-brand span { color: #f01965; }

        .portfolio-page .f-links {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .portfolio-page .f-links a {
          font-size: .75rem;
          color: rgba(255,255,255,.45);
          text-decoration: none;
        }

        .portfolio-page .f-links a:hover { color: #f01965; }
        .portfolio-page .f-meta { font-size: .72rem; }

        @media (max-width: 900px) {
          .portfolio-page .nav-links { display: none; }

          .portfolio-page .page-hero {
            padding: 80px 1.2rem 70px;
          }

          .portfolio-page .page-hero h1 {
            font-size: clamp(2.8rem, 10vw, 4rem);
          }

          .portfolio-page section {
            padding: 55px 1.2rem;
          }

          .portfolio-page .prod-card {
            grid-template-columns: 1fr;
            padding: 25px;
          }

          .portfolio-page .pasides {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .portfolio-page .pasides {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="portfolio-page">
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
          <div className="eyebrow-text">Portfolio Engagements</div>
          <div className="divider"></div>

          <h1>
            Startups we're
            <br />
            building with.
          </h1>

          <p>
            Beyond CodeCap's own products, we actively embed with early-stage
            startups as a venture studio partner — providing GTM execution,
            product advisory, sales, and regional market entry across Southeast
            Asia, the Gulf, and South Asia.
          </p>
        </div>

        <section>
          <div className="port-badge">
            Active Engagements — Pre-seed / MVP Stage
          </div>

          {/* InfinityOmnia */}
          <div className="prod-card featured">
            <div>
              <div style={{display:"flex",alignItems:"center",gap:"0.6rem",marginBottom:"1rem",flexWrap:"wrap"}}>
                <span className="tag tag-purple">Enterprise Operations</span>
                <span className="tag tag-blue">AI Platform</span>
                <span className="tag tag-gray">Pre-seed / MVP</span>
              </div>

              <div className="pname">InfinityOmnia</div>

              <div className="ptag">
                Built by Wisebound ·{" "}
                <a href="https://www.infinityomnia.com" target="_blank" rel="noreferrer">
                  infinityomnia.com
                </a>{" "}
                · One Platform. Infinite Possibilities.
              </div>

              <div className="pdesc">
                A next-generation unified operations platform built by Wisebound
                — consolidating service desk, incident management, IoT/digital
                twin intelligence, executive reporting, command & control,
                mobile workforce, audit & compliance, and edge computing into a
                single AI-powered fabric. Nine integrated modules serving 300+
                organisations across hospitality, healthcare, manufacturing,
                government, and more.
              </div>

              <p style={{fontSize:"0.78rem",fontWeight:"700",color:"#f01965",letterSpacing:"0.04em",marginBottom:"0.75rem"}}>
                CodeCap Engagement: GTM · Sales · Market Entry — SEA & Gulf
              </p>

              <div className="pfeats">
                <div className="pf">InfinityCore — Unified service desk, multi-channel ticketing & SLA automation</div>
                <div className="pf">InfinityAware — AI-powered incident & risk intelligence with smart routing</div>
                <div className="pf">InfinityAIQ — IoT + Digital Twin, predictive maintenance & OmniTwin visualisation</div>
                <div className="pf">InfinityCXO — Executive intelligence, cross-site dashboards & OKRs</div>
                <div className="pf">InfinityCMD — Command & control centre for multi-site & emergency operations</div>
                <div className="pf">InfinityStay — Hospitality operations & AI guest experience optimisation</div>
                <div className="pf">InfinityOps — Mobile workforce copilot, offline-first PWA with voice commands</div>
                <div className="pf">InfinityAssure — AI-powered audit & compliance, automated checklists & evidence</div>
                <div className="pf">InfinityEdge — Edge computing & IoT gateway, real-time processing at the edge</div>
              </div>
            </div>

            <div className="pasides">
              <div className="pa"><div className="pal">Industries</div><span className="pat">Hospitality</span><span className="pat">Healthcare</span><span className="pat">Manufacturing</span><span className="pat">Government</span><span className="pat">Facilities</span><span className="pat">Retail</span></div>
              <div className="pa"><div className="pal">Target Buyers</div><span className="pat">COOs</span><span className="pat">VP Operations</span><span className="pat">IT Directors</span><span className="pat">CISOs</span><span className="pat">CXOs</span></div>
              <div className="pa"><div className="pal">Platform Stats</div><span className="pat">300+ Organisations</span><span className="pat">150K+ Users</span><span className="pat">9 Modules</span><span className="pat">99.9% Uptime</span></div>
              <div className="pa"><div className="pal">CodeCap Markets</div><span className="pat">🇸🇬 Singapore</span><span className="pat">🇦🇪 UAE</span><span className="pat">🇸🇦 KSA</span><span className="pat">🇮🇳 India</span></div>
            </div>
          </div>

          {/* Veptr / Criuslogic */}
          <div className="prod-card featured">
            <div>
              <div style={{display:"flex",alignItems:"center",gap:"0.6rem",marginBottom:"1rem",flexWrap:"wrap"}}>
                <span className="tag tag-pink">GRC</span>
                <span className="tag tag-green">AI-Powered Compliance</span>
                <span className="tag tag-gray">Pre-seed / MVP</span>
              </div>

              <div className="pname">Veptr</div>

              <div className="ptag">
                Built by Criuslogic ·{" "}
                <a href="https://veptr.ai" target="_blank" rel="noreferrer">veptr.ai</a>
                {" "}·{" "}
                <a href="https://www.criuslogic.com" target="_blank" rel="noreferrer">criuslogic.com</a>
                {" "}· HQ: New York · Dev Centre: Dubai, UAE
              </div>

              <div className="pdesc">
                AI-powered Governance, Risk & Compliance (GRC) platform —
                simplifying, automating, and intelligently accelerating
                compliance operations for enterprises across multiple
                regulatory frameworks. An integrated LLM-powered AI assistant
                guides users through audits, explains controls, and reviews
                evidence in real time.
              </div>

              <p style={{fontSize:"0.78rem",fontWeight:"700",color:"#f01965",letterSpacing:"0.04em",marginBottom:"0.75rem"}}>
                CodeCap Engagement: GTM · Sales · Market Entry — Gulf & SEA
              </p>

              <div className="pfeats">
                <div className="pf">Interactive AI chatbot — LLM-powered GRC assistant for audits, controls & evidence review</div>
                <div className="pf">Policy summarisation — upload complex documents, get concise AI summaries instantly</div>
                <div className="pf">Automated workflow — AI recommends actions, assigns tasks, flags gaps & routes compliance workflows</div>
                <div className="pf">Risk management — structured identification, assessment & continuous monitoring</div>
                <div className="pf">Compliance tracking — real-time multi-framework dashboard, always audit-ready</div>
                <div className="pf">Vendor management — third-party risk assessments & continuous oversight</div>
                <div className="pf">Custom framework builder — tailor frameworks to internal or industry requirements</div>
                <div className="pf">Framework coverage: ISO 27001, SOC 2, NIST CSF & custom frameworks</div>
              </div>
            </div>

            <div className="pasides">
              <div className="pa"><div className="pal">Industries</div><span className="pat">FinTech</span><span className="pat">Financial Services</span><span className="pat">Healthcare</span><span className="pat">SaaS Enterprise</span><span className="pat">Government</span></div>
              <div className="pa"><div className="pal">Target Buyers</div><span className="pat">GRC Teams</span><span className="pat">CISOs</span><span className="pat">Compliance Leads</span><span className="pat">Risk Managers</span><span className="pat">Auditors</span></div>
              <div className="pa"><div className="pal">Frameworks</div><span className="pat">ISO 27001</span><span className="pat">SOC 2</span><span className="pat">NIST CSF</span><span className="pat">Custom</span></div>
              <div className="pa"><div className="pal">CodeCap Markets</div><span className="pat">🇦🇪 UAE / Dubai HQ</span><span className="pat">🇸🇬 Singapore</span><span className="pat">🌐 Global</span></div>
            </div>
          </div>

          {/* Abhra */}
          <div className="prod-card" style={{marginBottom:0}}>
            <div>
              <div style={{display:"flex",alignItems:"center",gap:"0.6rem",marginBottom:"1rem",flexWrap:"wrap"}}>
                <span className="tag tag-blue">Cloud Security</span>
                <span className="status-live"><span className="sdot"></span>Live</span>
              </div>

              <div className="pname">Abhra</div>

              <div className="ptag">
                Built by CrownTrend India ·{" "}
                <a href="https://abhra.world" target="_blank" rel="noreferrer">abhra.world</a>
                {" "}· Sovereign cloud security for the regulated economy
              </div>

              <div className="pdesc">
                CodeCap distributes and commercialises Abhra across SEA, Gulf,
                and South Asian markets. See the{" "}
                <a href="/products" style={{color:"#f01965"}}>Products page</a>
                {" "}for the full feature breakdown.
              </div>

              <div className="pfeats">
                <div className="pf">1,894+ native security checks across AWS, Azure, GCP</div>
                <div className="pf">25 compliance frameworks — ISO, SOC 2, GDPR, NESA, SAMA, MAS TRM, India BFSI and more</div>
                <div className="pf">Desktop-first, sovereign deployment — scan data never leaves your machine</div>
                <div className="pf">Air-gappable for government and regulated environments</div>
              </div>
            </div>

            <div className="pasides">
              <div className="pa"><div className="pal">Role</div><span className="pat">Distribution Partner</span><span className="pat">Commercial Partner</span></div>
              <div className="pa"><div className="pal">Markets</div><span className="pat">🇸🇬 Singapore</span><span className="pat">🇦🇪 UAE</span><span className="pat">🇸🇦 KSA</span><span className="pat">🇮🇳 India</span></div>
              <div style={{marginTop:".5rem"}}><a href="https://abhra.world/download" target="_blank" rel="noreferrer" className="bp" style={{width:"100%",justifyContent:"center"}}>Download Free →</a></div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-inner">
            <div className="eyebrow-text">Want to Join the Portfolio?</div>
            <div className="divider divider-center"></div>
            <h2>
              Building something in <span className="accent">AI or cybersecurity?</span>
            </h2>
            <p className="lead" style={{margin:"0 auto 2rem"}}>
              If you're an early-stage founder in SEA, the Gulf, or India —
              and you're building in AI, cybersecurity, or enterprise SaaS —
              we'd like to hear from you.
            </p>
            <a href="/venture-studio" className="bp-pink">
              Explore the Studio →
            </a>
          </div>
        </section>

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
      </div>
    </>
  );
}

export default Portfolio;
