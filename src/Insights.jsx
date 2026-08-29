import { useEffect, useState } from "react";
import "./styles.css";

function Insights() {
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }),
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`.page-hero { padding: 10rem 4rem 5rem; background: var(--surface); position: relative; overflow: hidden; }
    .hero-glow { position: absolute; width: 600px; height: 400px; background: radial-gradient(circle, rgba(108,99,255,0.07) 0%, transparent 70%); top: 0; left: -100px; pointer-events: none; }

    /* Featured post */
    .featured-post {
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 0; background: var(--surface);
      border: 1px solid var(--border); border-radius: var(--radius-md);
      overflow: hidden; margin-bottom: 3rem;
      transition: border-color var(--transition);
    }
    .featured-post:hover { border-color: rgba(0,200,255,0.3); cursor: pointer; }
    .featured-image {
      background: var(--card);
      min-height: 360px;
      display: flex; align-items: center; justify-content: center;
      font-size: 4rem;
      position: relative; overflow: hidden;
    }
    .featured-image::after { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(0,200,255,0.05), rgba(108,99,255,0.08)); }
    .featured-body { padding: 3rem; display: flex; flex-direction: column; justify-content: space-between; }
    .post-category { font-size: 0.7rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); margin-bottom: 1rem; font-weight: 500; }
    .post-title { font-family: var(--ff-display); font-size: 1.5rem; font-weight: 700; letter-spacing: -0.02em; line-height: 1.2; margin-bottom: 1rem; }
    .post-excerpt { font-size: 0.9rem; color: var(--muted); line-height: 1.75; margin-bottom: 1.5rem; }
    .post-meta { display: flex; align-items: center; gap: 1rem; font-size: 0.78rem; color: var(--muted); }
    .post-author { display: flex; align-items: center; gap: 0.5rem; }
    .author-dot { width: 24px; height: 24px; border-radius: 50%; background: var(--accent); display: flex; align-items: center; justify-content: center; font-size: 0.65rem; font-weight: 700; color: var(--bg); }
    .read-link { font-size: 0.8rem; color: var(--accent); letter-spacing: 0.04em; display: flex; align-items: center; gap: 0.3rem; }

    /* Post grid */
    .post-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 2rem; }
    .post-card {
      background: var(--surface); border: 1px solid var(--border);
      border-radius: var(--radius-md); overflow: hidden;
      transition: border-color var(--transition), transform var(--transition);
      cursor: pointer;
    }
    .post-card:hover { border-color: rgba(0,200,255,0.3); transform: translateY(-2px); }
    .post-card-img { height: 160px; background: var(--card); display: flex; align-items: center; justify-content: center; font-size: 2.5rem; position: relative; }
    .post-card-body { padding: 1.5rem; }
    .post-card .post-category { margin-bottom: 0.6rem; }
    .post-card .post-title { font-size: 1rem; margin-bottom: 0.6rem; line-height: 1.3; }
    .post-card .post-excerpt { font-size: 0.82rem; margin-bottom: 1rem; }
    .post-card .post-meta { font-size: 0.75rem; }

    /* Category filter */
    .filter-bar { display: flex; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 3rem; }
    .filter-btn {
      font-size: 0.78rem; font-weight: 500; letter-spacing: 0.04em;
      padding: 0.45rem 1rem; border-radius: 100px;
      border: 1px solid var(--border); color: var(--muted);
      background: transparent; cursor: pointer;
      transition: all var(--transition);
    }
    .filter-btn:hover, .filter-btn.active { border-color: var(--accent); color: var(--accent); background: rgba(0,200,255,0.06); }

    /* Newsletter strip */
    .nl-strip { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 2.5rem 3rem; display: flex; align-items: center; justify-content: space-between; gap: 2rem; flex-wrap: wrap; }
    .nl-text h3 { margin-bottom: 0.4rem; }
    .nl-text p { font-size: 0.88rem; color: var(--muted); max-width: 420px; }
    .nl-form { display: flex; gap: 0.75rem; }
    .nl-input { font-family: var(--ff-body); font-size: 0.88rem; padding: 0.75rem 1.25rem; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-sm); color: var(--text); min-width: 240px; outline: none; transition: border-color var(--transition); }
    .nl-input:focus { border-color: var(--accent); }
    .nl-input::placeholder { color: var(--muted); }
  
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
    <button className="btn-talk" onClick={() => (window.location.href = "mailto:hello@codecap.ai")}>Talk to us</button>
  </div>
</nav>

<section className="page-hero">
  <div className="hero-glow"></div>
  <div style={{position: "relative", zIndex: "2", maxWidth: "700px"}}>
    <div className="eyebrow">Insights</div>
    <h1 style={{fontSize: "clamp(2.5rem,5vw,4rem)"}}>Thinking from<br />the studio floor.</h1>
    <p style={{fontSize: "1.1rem", color: "var(--muted)", marginTop: "1.5rem", lineHeight: "1.8"}}>Not keynote wisdom. Not recycled LinkedIn takes. What we're seeing from inside early-stage companies across Southeast Asia, the Gulf, and South Asia — raw, operational, and direct.</p>
  </div>
</section>

<section>
  {/* FEATURED POST */}
  <div className="eyebrow reveal">Featured</div>
  <div className="featured-post reveal">
    <div className="featured-image">🛡️</div>
    <div className="featured-body">
      <div>
        <div className="post-category">Cybersecurity · AI</div>
        <div className="post-title">AI Security in 2025: The Threat Landscape Is Changing Faster Than the Products</div>
        <div className="post-excerpt">Enterprise CISOs across SEA and the Gulf are navigating a threat environment that LLMs have fundamentally altered. Attackers are moving faster, phishing is nearly indistinguishable, and most security products are six months behind reality. Here's what the gap actually looks like from inside portfolio companies — and what's being built to close it.</div>
      </div>
      <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem"}}>
        <div className="post-meta">
          <div className="post-author"><div className="author-dot">CC</div><span>CodeCap Team</span></div>
          <span>·</span><span>12 min read</span><span>·</span><span>April 2025</span>
        </div>
        <span className="read-link">Read article →</span>
      </div>
    </div>
  </div>

  {/* FILTER BAR */}
  <div className="filter-bar reveal">
    <button className={`filter-btn ${activeFilter === "All" ? "active" : ""}`} onClick={() => setActiveFilter("All")}>All</button>
    <button className={`filter-btn ${activeFilter === "AI & Cybersecurity" ? "active" : ""}`} onClick={() => setActiveFilter("AI & Cybersecurity")}>AI & Cybersecurity</button>
    <button className={`filter-btn ${activeFilter === "Venture Building" ? "active" : ""}`} onClick={() => setActiveFilter("Venture Building")}>Venture Building</button>
    <button className={`filter-btn ${activeFilter === "GTM & Sales" ? "active" : ""}`} onClick={() => setActiveFilter("GTM & Sales")}>GTM & Sales</button>
    <button className={`filter-btn ${activeFilter === "Fundraising" ? "active" : ""}`} onClick={() => setActiveFilter("Fundraising")}>Fundraising</button>
    <button className={`filter-btn ${activeFilter === "Markets" ? "active" : ""}`} onClick={() => setActiveFilter("Markets")}>Markets</button>
    <button className={`filter-btn ${activeFilter === "Deep Tech" ? "active" : ""}`} onClick={() => setActiveFilter("Deep Tech")}>Deep Tech</button>
  </div>

  {/* POST GRID */}
  <div className="post-grid reveal">

    <div className="post-card">
      <div className="post-card-img">📈</div>
      <div className="post-card-body">
        <div className="post-category">GTM · Southeast Asia</div>
        <div className="post-title">Why Most AI Startups in SEA Fail at GTM (And What the Survivors Do Differently)</div>
        <div className="post-excerpt">The product works. The market exists. But the deals aren't closing. Here's the pattern we keep seeing — and why the fix isn't about the product.</div>
        <div className="post-meta"><span>8 min read</span><span>·</span><span>March 2025</span></div>
      </div>
    </div>

    <div className="post-card">
      <div className="post-card-img">⚖️</div>
      <div className="post-card-body">
        <div className="post-category">Legal · Gulf Markets</div>
        <div className="post-title">The DIFC vs ADGM Decision: A Founder's Practical Guide to Gulf Entity Setup</div>
        <div className="post-excerpt">Both are good options. But they're not the same. The choice depends on your stage, your investors, and what you're actually doing in the market.</div>
        <div className="post-meta"><span>10 min read</span><span>·</span><span>March 2025</span></div>
      </div>
    </div>

    <div className="post-card">
      <div className="post-card-img">🏗️</div>
      <div className="post-card-body">
        <div className="post-category">Cybersecurity · Venture Build</div>
        <div className="post-title">Building a Threat Intelligence Product from Zero: What We Learned in 12 Months</div>
        <div className="post-excerpt">We built one. We had to rebuild parts of it. Here's the honest account of what we got wrong, what we got right, and what buyers actually need vs. what they say they need.</div>
        <div className="post-meta"><span>14 min read</span><span>·</span><span>February 2025</span></div>
      </div>
    </div>

    <div className="post-card">
      <div className="post-card-img">🤝</div>
      <div className="post-card-body">
        <div className="post-category">Deal Structure · South Asia</div>
        <div className="post-title">Why Indian Founders Push Back on Equity — and Why We Changed Our Approach</div>
        <div className="post-excerpt">Revenue share isn't a compromise. For Indian pre-seed founders, it's often the right alignment mechanism. Here's how we evolved our thinking and deal structure.</div>
        <div className="post-meta"><span>7 min read</span><span>·</span><span>February 2025</span></div>
      </div>
    </div>

    <div className="post-card">
      <div className="post-card-img">💡</div>
      <div className="post-card-body">
        <div className="post-category">Venture Building · Opinion</div>
        <div className="post-title">The Venture Studio Model Is Broken. Here's What We're Doing Instead.</div>
        <div className="post-excerpt">Most venture studios are glorified consultancies with equity kickers. We think the model needs a rewrite. Here's our alternative — and why it requires actually doing the work.</div>
        <div className="post-meta"><span>9 min read</span><span>·</span><span>January 2025</span></div>
      </div>
    </div>

    <div className="post-card">
      <div className="post-card-img">🤖</div>
      <div className="post-card-body">
        <div className="post-category">AI · GTM</div>
        <div className="post-title">AI-Powered Sales Intelligence: The Tools That Are Actually Moving Pipeline in 2025</div>
        <div className="post-excerpt">We've tested most of them. Some work. Most don't survive contact with a real deal. Here's what's actually moving enterprise pipeline in SEA and the Gulf right now.</div>
        <div className="post-meta"><span>11 min read</span><span>·</span><span>January 2025</span></div>
      </div>
    </div>

    <div className="post-card">
      <div className="post-card-img">💰</div>
      <div className="post-card-body">
        <div className="post-category">Fundraising · VC</div>
        <div className="post-title">What SEA and Gulf VCs Are Actually Funding in 2025 — and What They're Passing On</div>
        <div className="post-excerpt">Based on direct conversations with 40+ VCs across Singapore, Dubai, and Mumbai over the past six months. The patterns are clear — and some of them will surprise you.</div>
        <div className="post-meta"><span>13 min read</span><span>·</span><span>December 2024</span></div>
      </div>
    </div>

    <div className="post-card">
      <div className="post-card-img">🌏</div>
      <div className="post-card-body">
        <div className="post-category">Markets · Singapore</div>
        <div className="post-title">Building a Startup in Singapore as a Foreign Founder: What Nobody Tells You</div>
        <div className="post-excerpt">Entity setup, banking, MOM passes, hiring local talent, navigating government grants. The practical reality of landing in SG and building from there.</div>
        <div className="post-meta"><span>10 min read</span><span>·</span><span>December 2024</span></div>
      </div>
    </div>

    <div className="post-card">
      <div className="post-card-img">🔐</div>
      <div className="post-card-body">
        <div className="post-category">Cybersecurity · Enterprise</div>
        <div className="post-title">Zero-Trust in Practice: Why Most Implementations Fail Before They Start</div>
        <div className="post-excerpt">The framework is sound. The problem is almost always implementation — specifically, the gap between what gets approved in the boardroom and what gets deployed in production.</div>
        <div className="post-meta"><span>11 min read</span><span>·</span><span>November 2024</span></div>
      </div>
    </div>

  </div>
</section>

{/* NEWSLETTER */}
<section style={{background: "var(--surface)"}}>
  <div className="nl-strip reveal">
    <div className="nl-text">
      <h3>Get Insights in your inbox</h3>
      <p>New articles, market observations, and things we're watching — sent directly to you. No pitch decks, no newsletters written by AI, no noise.</p>
    </div>
    <div className="nl-form">
      <input className="nl-input" type="email" placeholder="your@email.com" />
      <button className="btn-primary">Subscribe</button>
    </div>
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

export default Insights;
