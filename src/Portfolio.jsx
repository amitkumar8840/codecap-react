import "./styles.css";

function Portfolio() {
  return (
    <>
      <style>{`.port-badge { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--bg3); border: 1px solid var(--border); border-radius: 20px; padding: 0.4rem 1rem; font-family: var(--ff-b); font-size: 0.65rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); margin-bottom: 1rem; }
.port-badge::before { content: '●'; color: var(--pink); font-size: 0.5rem; }
.port-intro { background: linear-gradient(135deg, #fff5f8, #f0f8ff); border: 1px solid var(--pink-light); border-radius: 10px; padding: 2rem 2.5rem; margin-bottom: 3rem; display: flex; align-items: center; gap: 2.5rem; flex-wrap: wrap; }
.port-intro p { font-size: 0.9rem; color: var(--muted); line-height: 1.8; max-width: 560px; }

.nav-in{max-width:1140px;margin:0 auto;padding:0 2rem;display:flex;align-items:center;justify-content:space-between;height:68px}
nav{position:sticky;top:0;z-index:200;background:rgba(255,255,255,.97);backdrop-filter:blur(14px);border-bottom:1px solid #e2e8f0;box-shadow:0 1px 16px rgba(0,0,0,.06)}
.logo{font-family:'Raleway',sans-serif;font-size:1.35rem;font-weight:900;color:#111;letter-spacing:-.02em}.logo span{color:#f01965}
.nav-links{display:flex;gap:.15rem;list-style:none}
.nav-links a{font-size:.78rem;font-weight:600;color:#444;padding:.45rem .8rem;border-radius:5px;transition:color .2s,background .2s;text-decoration:none}
.nav-links a:hover,.nav-links a.on{color:#f01965;background:rgba(240,25,101,.06)}
.btn-talk{font-family:'Open Sans',sans-serif;font-size:.78rem;font-weight:700;padding:.55rem 1.4rem;background:#111;color:white;border:none;border-radius:6px;cursor:pointer;transition:background .2s}
.btn-talk:hover{background:#f01965}
.f-in{max-width:1140px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem}
.f-brand{font-family:'Raleway',sans-serif;font-size:1.05rem;font-weight:900;color:white}.f-brand span{color:#f01965}
.f-links{display:flex;gap:1.5rem;flex-wrap:wrap}.f-links a{font-size:.75rem;color:rgba(255,255,255,.45);transition:color .2s;text-decoration:none}.f-links a:hover{color:#f01965}
.f-meta{font-size:.72rem}`}</style>
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
    <button className="btn-talk" onClick={() => { window.location.href = "mailto:hello@codecap.ai"; }}>Talk to us</button>
  </div>
</nav>

<div className="page-hero">
  <div className="eyebrow-text">Portfolio Engagements</div>
  <div className="divider"></div>
  <h1>Startups we're<br />building with.</h1>
  <p style={{fontSize: "1rem", color: "var(--dark2)", maxWidth: "560px", lineHeight: "1.82", marginTop: "1rem", fontWeight: "300"}}>Beyond CodeCap's own products, we actively embed with early-stage startups as a venture studio partner — providing GTM execution, product advisory, sales, and regional market entry across Southeast Asia, the Gulf, and South Asia.</p>
</div>

<section>
  <div className="port-badge">Active Engagements — Pre-seed / MVP Stage</div>

  {/* InfinityOmnia */}
  <div className="prod-card featured" style={{marginBottom: "2.5rem"}}>
    <div>
      <div style={{display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem", flexWrap: "wrap"}}>
        <span className="tag tag-purple">Enterprise Operations</span>
        <span className="tag tag-blue">AI Platform</span>
        <span className="tag tag-gray">Pre-seed / MVP</span>
      </div>
      <div className="pname">InfinityOmnia</div>
      <div className="ptag">Built by Wisebound · <a href="https://www.infinityomnia.com" target="_blank" rel="noreferrer" style={{color: "var(--blue)"}}>infinityomnia.com</a> · One Platform. Infinite Possibilities.</div>
      <div className="pdesc">A next-generation unified operations platform built by Wisebound — consolidating service desk, incident management, IoT/digital twin intelligence, executive reporting, command & control, mobile workforce, audit & compliance, and edge computing into a single AI-powered fabric. Nine integrated modules serving 300+ organisations across hospitality, healthcare, manufacturing, government, and more.</div>
      <p style={{fontSize: "0.78rem", fontWeight: "700", color: "var(--pink)", letterSpacing: "0.04em", marginBottom: "0.75rem"}}>CodeCap Engagement: GTM · Sales · Market Entry — SEA & Gulf</p>
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
  <div className="prod-card featured" style={{marginBottom: "2.5rem"}}>
    <div>
      <div style={{display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem", flexWrap: "wrap"}}>
        <span className="tag tag-pink">GRC</span>
        <span className="tag tag-green">AI-Powered Compliance</span>
        <span className="tag tag-gray">Pre-seed / MVP</span>
      </div>
      <div className="pname">Veptr</div>
      <div className="ptag">Built by Criuslogic · <a href="https://veptr.ai" target="_blank" rel="noreferrer" style={{color: "var(--blue)"}}>veptr.ai</a> · <a href="https://www.criuslogic.com" target="_blank" rel="noreferrer" style={{color: "var(--blue)"}}>criuslogic.com</a> · HQ: New York · Dev Centre: Dubai, UAE</div>
      <div className="pdesc">AI-powered Governance, Risk & Compliance (GRC) platform — simplifying, automating, and intelligently accelerating compliance operations for enterprises across multiple regulatory frameworks. An integrated LLM-powered AI assistant guides users through audits, explains controls, and reviews evidence in real time.</div>
      <p style={{fontSize: "0.78rem", fontWeight: "700", color: "var(--pink)", letterSpacing: "0.04em", marginBottom: "0.75rem"}}>CodeCap Engagement: GTM · Sales · Market Entry — Gulf & SEA</p>
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

  {/* Abhra in portfolio context */}
  <div className="prod-card" style={{marginBottom: "0"}}>
    <div>
      <div style={{display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem", flexWrap: "wrap"}}>
        <span className="tag tag-blue">Cloud Security</span>
        <span className="status-live"><span className="sdot"></span>Live</span>
      </div>
      <div className="pname">Abhra</div>
      <div className="ptag">Built by CrownTrend India · <a href="https://abhra.world" target="_blank" rel="noreferrer" style={{color: "var(--blue)"}}>abhra.world</a> · Sovereign cloud security for the regulated economy</div>
      <div className="pdesc">CodeCap distributes and commercialises Abhra across SEA, Gulf, and South Asian markets. See the <a href="/products" style={{color: "var(--pink)"}}>Products page</a> for the full feature breakdown.</div>
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
      <div style={{marginTop: "0.5rem"}}><a href="https://abhra.world/download" target="_blank" rel="noreferrer" className="bp" style={{width: "100%", justifyContent: "center"}}>Download Free →</a></div>
    </div>
  </div>
</section>

<section style={{background: "var(--bg2)"}}>
  <div style={{textAlign: "center", maxWidth: "580px", margin: "0 auto"}}>
    <div className="eyebrow-text">Want to Join the Portfolio?</div>
    <div className="divider divider-center"></div>
    <h2>Building something in <span className="accent">AI or cybersecurity?</span></h2>
    <p className="lead" style={{margin: "0 auto 2rem"}}>If you're an early-stage founder in SEA, the Gulf, or India — and you're building in AI, cybersecurity, or enterprise SaaS — we'd like to hear from you.</p>
    <a href="/venture-studio" className="bp-pink">Explore the Studio →</a>
  </div>
</section>

<footer>
  <div className="f-in">
    <div className="f-brand">Code<span>Cap</span></div>
    <div className="f-links">
      <a href="/venture-studio">Venture Studio</a><a href="/services">Services</a><a href="/products">Products</a><a href="/portfolio">Portfolio</a><a href="/team">Team</a><a href="/insights">Insights</a><a href="/podcast">Podcast</a>
    </div>
    <div className="f-meta">© 2025 CodeCap Ventures · Singapore · UAE · India · hello@codecap.ai</div>
  </div>
</footer>
    </>
  );
}

export default Portfolio;
