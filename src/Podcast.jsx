import { useEffect } from "react";
import "./styles.css";

function Podcast() {
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
      <style>{`:root {
  --surface: #f7f9fc;
  --card: #eef3f8;
  --text: #293033;
  --accent: #f01965;
  --accent2: #f01965;
  --ff-display: 'Raleway', sans-serif;
  --ff-body: 'Open Sans', sans-serif;
  --radius-md: 8px;
  --radius-sm: 6px;
  --transition: .2s;
}

/* HERO */
    .podcast-hero { min-height: 70vh; display: flex; align-items: center; padding: 8rem 4rem 4rem; background: var(--surface); position: relative; overflow: hidden; }
    .podcast-hero-glow { position: absolute; width: 800px; height: 600px; background: radial-gradient(circle, rgba(10,245,160,0.05) 0%, transparent 65%); bottom: -200px; right: -200px; pointer-events: none; }
    .podcast-hero-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(10,245,160,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(10,245,160,0.03) 1px, transparent 1px); background-size: 50px 50px; mask-image: radial-gradient(ellipse 70% 70% at 70% 50%, black 30%, transparent 100%); }
    .podcast-hero-content { position: relative; z-index: 2; max-width: 700px; }
    .podcast-logo { display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem; }
    .podcast-icon { width: 72px; height: 72px; background: var(--accent2); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 2rem; flex-shrink: 0; }
    .podcast-brand { font-family: var(--ff-display); font-size: 0.75rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--accent2); }
    .podcast-platforms { display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 2rem; }
    .platform-btn { display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; font-weight: 500; padding: 0.55rem 1.1rem; border: 1px solid var(--border); border-radius: 100px; color: var(--muted); transition: all var(--transition); }
    .platform-btn:hover { border-color: var(--accent2); color: var(--accent2); }

    /* FORMAT BANDS */
    .format-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 2rem; }
    .format-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 2rem; transition: border-color var(--transition); }
    .format-card:hover { border-color: rgba(10,245,160,0.3); }
    .format-icon { font-size: 1.5rem; margin-bottom: 1rem; }
    .format-card h3 { margin-bottom: 0.5rem; }
    .format-card p { font-size: 0.875rem; color: var(--muted); line-height: 1.7; }

    /* EPISODES */
    .episode-list { display: flex; flex-direction: column; gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: var(--radius-md); overflow: hidden; }
    .episode-row { background: var(--surface); padding: 2rem 2.5rem; display: grid; grid-template-columns: 64px 1fr auto; gap: 1.5rem; align-items: center; transition: background var(--transition); cursor: pointer; }
    .episode-row:hover { background: var(--card); }
    .ep-num { font-family: var(--ff-display); font-size: 0.75rem; font-weight: 700; color: var(--accent2); letter-spacing: 0.08em; text-align: center; }
    .ep-play { width: 40px; height: 40px; border-radius: 50%; border: 1px solid var(--accent2); display: flex; align-items: center; justify-content: center; color: var(--accent2); font-size: 0.8rem; flex-shrink: 0; transition: background var(--transition); }
    .episode-row:hover .ep-play { background: var(--accent2); color: var(--bg); }
    .ep-meta { }
    .ep-tag { font-size: 0.68rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent2); margin-bottom: 0.35rem; font-weight: 500; }
    .ep-title { font-family: var(--ff-display); font-size: 1rem; font-weight: 700; letter-spacing: -0.01em; margin-bottom: 0.35rem; }
    .ep-desc { font-size: 0.82rem; color: var(--muted); line-height: 1.6; }
    .ep-info { text-align: right; }
    .ep-duration { font-size: 0.78rem; color: var(--muted); }
    .ep-date { font-size: 0.72rem; color: var(--muted); margin-top: 0.25rem; }
    .ep-new { display: inline-block; font-size: 0.62rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; background: var(--accent2); color: var(--bg); padding: 0.15rem 0.45rem; border-radius: 2px; margin-top: 0.4rem; }

    /* GUEST WALL */
    .guest-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 2rem; }
    .guest-card { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 0.75rem; }
    .guest-avatar { width: 64px; height: 64px; border-radius: 50%; background: var(--card); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; font-family: var(--ff-display); font-size: 1.1rem; font-weight: 700; color: var(--accent2); }
    .guest-name { font-size: 0.88rem; font-weight: 500; color: var(--text); }
    .guest-role { font-size: 0.75rem; color: var(--muted); line-height: 1.4; }

    /* SUBSCRIBE STRIP */
    .sub-strip { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
    .sub-strip h2 { font-size: clamp(1.5rem,2.5vw,2rem); }
    .sub-links { display: flex; flex-direction: column; gap: 0.75rem; }
    .sub-link { display: flex; align-items: center; gap: 1rem; padding: 1rem 1.25rem; background: var(--card); border: 1px solid var(--border); border-radius: var(--radius-sm); transition: border-color var(--transition); }
    .sub-link:hover { border-color: rgba(10,245,160,0.3); }
    .sub-link-icon { font-size: 1.2rem; }
    .sub-link-text { font-size: 0.85rem; color: var(--text); font-weight: 500; }
    .sub-link-sub { font-size: 0.75rem; color: var(--muted); }
  
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

{/* HERO */}
<section className="podcast-hero">
  <div className="podcast-hero-glow"></div>
  <div className="podcast-hero-grid"></div>
  <div className="podcast-hero-content reveal">
    <div className="podcast-logo">
      <div className="podcast-icon">🎙️</div>
      <div>
        <div className="podcast-brand">By CodeCap Ventures</div>
      </div>
    </div>
    <h1 style={{fontSize: "clamp(2.5rem,5vw,4.5rem)", marginBottom: "1rem"}}>The<br />Build Brief.</h1>
    <p style={{fontSize: "1.1rem", color: "var(--muted)", lineHeight: "1.8", maxWidth: "560px"}}>A no-fluff podcast for founders and operators building in Southeast Asia, the Gulf, and South Asia. Every episode is a direct conversation with people who are in the room — building companies, closing deals, raising capital, and navigating the chaos of early-stage in high-growth markets.</p>
    <div className="podcast-platforms">
      <div className="platform-btn">🎵 Spotify</div>
      <div className="platform-btn">🎧 Apple Podcasts</div>
      <div className="platform-btn">▶️ YouTube</div>
      <div className="platform-btn">☁️ Pocket Casts</div>
    </div>
  </div>
</section>

{/* FORMAT */}
<section>
  <div className="eyebrow reveal">Show Format</div>
  <h2 className="reveal">Four episode types.<br />One through line: real talk.</h2>
  <p className="section-lead reveal">Every format is designed to give founders and operators something they can actually use — not theory, not inspiration, but applicable insight from people who've done it.</p>
  <div className="format-grid reveal">
    <div className="format-card">
      <div className="format-icon">🏗️</div>
      <h3>Founder Stories</h3>
      <p>Raw conversations with founders on what actually happened: the pivots, the mis-hires, the breakthrough deals, the near-death moments. No highlight reels. No PR polish. The full story from someone who lived it.</p>
    </div>
    <div className="format-card">
      <div className="format-icon">📊</div>
      <h3>Market Intel</h3>
      <p>Short-form episodes on what's moving in SEA, Gulf, and India. Sector-specific, data-grounded, and updated as conditions change. What deals are getting done, what's getting passed, and why.</p>
    </div>
    <div className="format-card">
      <div className="format-icon">⚙️</div>
      <h3>The Operator's Playbook</h3>
      <p>Deep dives with GTM leaders, CISOs, and product builders on craft and execution. How to run enterprise sales in the Gulf. How to build a threat intelligence team from scratch. Practical, specific, actionable.</p>
    </div>
    <div className="format-card">
      <div className="format-icon">💼</div>
      <h3>VC Perspectives</h3>
      <p>Candid conversations with investors on what they're funding, what they're passing on, and why. No talking points. We push for specifics — sectors, stages, check sizes, and the mistakes founders make in pitch meetings.</p>
    </div>
  </div>
</section>

{/* EPISODES */}
<section style={{background: "var(--surface)"}}>
  <div className="eyebrow reveal">Episodes</div>
  <h2 className="reveal">Latest episodes.</h2>
  <div className="episode-list reveal">

    <div className="episode-row">
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem"}}>
        <div className="ep-num">EP 05</div>
        <div className="ep-play">▶</div>
      </div>
      <div className="ep-meta">
        <div className="ep-tag">Founder Stories · India</div>
        <div className="ep-title">The India GTM Playbook: Why What Works in SG Fails in Mumbai</div>
        <div className="ep-desc">Market dynamics, deal cycles, relationship rules, and the cultural blind spots that kill enterprise deals for foreign founders entering India.</div>
      </div>
      <div className="ep-info">
        <div className="ep-duration">48 min</div>
        <div className="ep-date">April 2025</div>
        <div className="ep-new">New</div>
      </div>
    </div>

    <div className="episode-row">
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem"}}>
        <div className="ep-num">EP 04</div>
        <div className="ep-play">▶</div>
      </div>
      <div className="ep-meta">
        <div className="ep-tag">Market Intel · Gulf</div>
        <div className="ep-title">Building a Startup in Singapore as a Foreign Founder</div>
        <div className="ep-desc">Entity setup, MOM passes, hiring local talent, navigating government grants, and the things nobody tells you when you land in Singapore to build a company.</div>
      </div>
      <div className="ep-info">
        <div className="ep-duration">55 min</div>
        <div className="ep-date">March 2025</div>
      </div>
    </div>

    <div className="episode-row">
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem"}}>
        <div className="ep-num">EP 03</div>
        <div className="ep-play">▶</div>
      </div>
      <div className="ep-meta">
        <div className="ep-tag">VC Perspectives</div>
        <div className="ep-title">Why We Passed on 40 Deals This Quarter</div>
        <div className="ep-desc">A CodeCap partner breaks down the patterns: what separates the startups we back from the ones we decline, and the mistakes founders make in the first five minutes of a pitch.</div>
      </div>
      <div className="ep-info">
        <div className="ep-duration">42 min</div>
        <div className="ep-date">February 2025</div>
      </div>
    </div>

    <div className="episode-row">
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem"}}>
        <div className="ep-num">EP 02</div>
        <div className="ep-play">▶</div>
      </div>
      <div className="ep-meta">
        <div className="ep-tag">Operator's Playbook · Cybersecurity</div>
        <div className="ep-title">AI Security in 2025: The Threat Landscape Is Changing Faster Than the Products</div>
        <div className="ep-desc">A CISO's take on the gap between enterprise security posture and the actual threat environment in 2025. LLMs on both sides of the attack surface — and what security teams are doing about it.</div>
      </div>
      <div className="ep-info">
        <div className="ep-duration">61 min</div>
        <div className="ep-date">January 2025</div>
      </div>
    </div>

    <div className="episode-row">
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem"}}>
        <div className="ep-num">EP 01</div>
        <div className="ep-play">▶</div>
      </div>
      <div className="ep-meta">
        <div className="ep-tag">Founder Stories · Gulf</div>
        <div className="ep-title">Zero to First Customer in the Gulf</div>
        <div className="ep-desc">How one founder closed an enterprise deal in Dubai before the product was finished. The relationship-first sales approach, navigating local partners, and what the Gulf deal cycle actually looks like from the inside.</div>
      </div>
      <div className="ep-info">
        <div className="ep-duration">52 min</div>
        <div className="ep-date">December 2024</div>
      </div>
    </div>

  </div>
</section>

{/* GUEST WALL */}
<section>
  <div className="eyebrow reveal">Voices on the Show</div>
  <h2 className="reveal">Guests who've been in the room.</h2>
  <p className="section-lead reveal">We bring on founders, operators, investors, and domain experts from our network across SEA, Gulf, and South Asia. People who've done what they're talking about.</p>
  <div className="guest-grid reveal">
    <div className="guest-card"><div className="guest-avatar">VC</div><div className="guest-name">VC Partners</div><div className="guest-role">Across SEA, Gulf & India VC funds</div></div>
    <div className="guest-card"><div className="guest-avatar">CI</div><div className="guest-name">CISOs</div><div className="guest-role">Enterprise security leaders, FinServ & Gov</div></div>
    <div className="guest-card"><div className="guest-avatar">FD</div><div className="guest-name">Founders</div><div className="guest-role">Pre-seed to Series B, across our core markets</div></div>
    <div className="guest-card"><div className="guest-avatar">GP</div><div className="guest-name">GTM Operators</div><div className="guest-role">Sales leaders & revenue builders in high-velocity markets</div></div>
    <div className="guest-card"><div className="guest-avatar">AI</div><div className="guest-name">AI Engineers</div><div className="guest-role">LLM builders, ML practitioners, AI security researchers</div></div>
    <div className="guest-card"><div className="guest-avatar">RG</div><div className="guest-name">Regulatory Experts</div><div className="guest-role">MAS, DIFC/ADGM, and SEBI specialists</div></div>
    <div className="guest-card"><div className="guest-avatar">LG</div><div className="guest-name">Legal & Structuring</div><div className="guest-role">Startup lawyers and deal structuring specialists</div></div>
    <div className="guest-card"><div className="guest-avatar">CC</div><div className="guest-name">CodeCap Team</div><div className="guest-role">Hosted by and featuring CodeCap partners</div></div>
  </div>
</section>

{/* SUBSCRIBE */}
<section style={{background: "var(--surface)"}}>
  <div className="sub-strip reveal">
    <div>
      <div className="eyebrow">Never Miss an Episode</div>
      <h2>Subscribe wherever<br />you listen.</h2>
      <p style={{color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.8", marginTop: "1rem", maxWidth: "400px"}}>New episodes drop bi-weekly. Follow the show to get notified when new conversations go live — or sign up for the Insights newsletter to get episode summaries by email.</p>
      <a href="/insights" className="btn-ghost" style={{marginTop: "1.5rem", display: "inline-block"}}>Get the newsletter →</a>
    </div>
    <div className="sub-links">
      <div className="sub-link">
        <div className="sub-link-icon">🎵</div>
        <div><div className="sub-link-text">Spotify</div><div className="sub-link-sub">Follow on Spotify</div></div>
      </div>
      <div className="sub-link">
        <div className="sub-link-icon">🎧</div>
        <div><div className="sub-link-text">Apple Podcasts</div><div className="sub-link-sub">Subscribe & leave a review</div></div>
      </div>
      <div className="sub-link">
        <div className="sub-link-icon">▶️</div>
        <div><div className="sub-link-text">YouTube</div><div className="sub-link-sub">Full video episodes + clips</div></div>
      </div>
      <div className="sub-link">
        <div className="sub-link-icon">📻</div>
        <div><div className="sub-link-text">RSS Feed</div><div className="sub-link-sub">Add to any podcast app</div></div>
      </div>
    </div>
  </div>
</section>

{/* GUEST PITCH */}
<section style={{textAlign: "center", borderTop: "1px solid var(--border)", padding: "6rem 4rem"}}>
  <div className="eyebrow" style={{justifyContent: "center"}}>Guest Applications</div>
  <h2 style={{maxWidth: "600px", margin: "0 auto 1.25rem"}}>Want to be a guest<br />on The Build Brief?</h2>
  <p style={{color: "var(--muted)", maxWidth: "500px", margin: "0 auto 2.5rem"}}>We're always looking for founders, operators, and investors with genuine insight and real stories from the markets we cover. If that's you — or someone you know — reach out.</p>
  <a href="mailto:podcast@codecap.ai" className="btn-primary">Pitch a Guest</a>
  <p style={{fontSize: "0.8rem", color: "var(--muted)", marginTop: "1.5rem"}}>podcast@codecap.ai</p>
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

export default Podcast;
