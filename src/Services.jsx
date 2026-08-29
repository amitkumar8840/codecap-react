import { useEffect } from "react";

function Services() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,600;0,700;0,800;0,900;1,700&family=Roboto:wght@300;400;500;700&family=Open+Sans:wght@300;400;500;600&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
img { max-width: 100%; display: block; }
a { text-decoration: none; color: inherit; }

/* ── DESIGN TOKENS (Nicepage-inspired) ── */
:root {
  --bg:         #ffffff;
  --bg2:        #f7f9fc;
  --bg3:        #eef3f8;
  --dark:       #111111;
  --dark2:      #293033;
  --muted:      #6b7a8d;
  --muted2:     #8fa0b0;
  --pink:       #f01965;       /* primary accent */
  --pink-dark:  #cc1357;
  --pink-light: #fde8ef;
  --blue:       #029fe7;       /* secondary CTA */
  --blue-dark:  #0282bc;
  --blue-light: #e4f5fd;
  --border:     #e2e8f0;
  --border2:    rgba(240,25,101,0.15);
  --grad:       linear-gradient(135deg, #e8e0f7 0%, #fce4ef 50%, #d8edfa 100%);
  --grad2:      linear-gradient(135deg, #f01965 0%, #029fe7 100%);
  --ff-h:   'Raleway', sans-serif;
  --ff-s:   'Roboto', sans-serif;
  --ff-b:   'Open Sans', sans-serif;
  --shadow: 0 4px 24px rgba(0,0,0,0.08);
  --shadow2:0 8px 40px rgba(0,0,0,0.12);
  --radius: 8px;
  --ease:   cubic-bezier(0.25,0.46,0.45,0.94);
}

body {
  background: var(--bg);
  color: var(--dark);
  font-family: var(--ff-b);
  font-size: 16px;
  line-height: 1.7;
  overflow-x: hidden;
}

/* ── NAVIGATION ── */
nav {
  position: sticky; top: 0; z-index: 200;
  display: flex; align-items: center; justify-content: space-between;
  padding: 1rem 3rem;
  background: rgba(255,255,255,0.97);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  box-shadow: 0 1px 12px rgba(0,0,0,0.06);
}
.logo {
  font-family: var(--ff-h);
  font-size: 1.4rem; font-weight: 800;
  color: var(--dark2); letter-spacing: -0.02em;
}
.logo span { color: var(--pink); }
.logo sup { font-size: 0.4em; color: var(--blue); vertical-align: super; margin-left:1px; font-family: var(--ff-b); }
.nav-links { display: flex; gap: 0.15rem; list-style: none; }
.nav-links a {
  font-family: var(--ff-b); font-size: 0.78rem; font-weight: 600;
  letter-spacing: 0.02em; color: var(--dark2);
  padding: 0.45rem 0.85rem; border-radius: 4px;
  transition: color .2s, background .2s;
}
.nav-links a:hover { color: var(--pink); background: var(--pink-light); }
.nav-links a.on { color: var(--pink); background: var(--pink-light); }
.btn-nav {
  font-family: var(--ff-b); font-size: 0.78rem; font-weight: 700;
  padding: 0.6rem 1.5rem; background: var(--blue); color: #fff;
  border: none; border-radius: 30px; cursor: pointer;
  letter-spacing: 0.03em; text-transform: lowercase;
  transition: background .2s, transform .15s, box-shadow .2s;
  box-shadow: 0 4px 14px rgba(2,159,231,0.3);
}
.btn-nav:hover { background: var(--blue-dark); transform: translateY(-1px); box-shadow: 0 6px 20px rgba(2,159,231,0.4); }

/* ── PAGES ── */
.pg { display: none; animation: fadeUp .38s var(--ease) forwards; }
.pg.on { display: block; }
@keyframes fadeUp { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:none; } }

/* ── COMMON LAYOUT ── */
section { padding: 5.5rem 3rem; }
.container { max-width: 1140px; margin: 0 auto; }

/* ── SECTION LABELS ── */
.eyebrow {
  display: inline-block;
  width: 48px; height: 3px;
  background: var(--pink);
  margin-bottom: 1rem;
  border-radius: 2px;
}
.eyebrow-text {
  font-family: var(--ff-s); font-size: 0.72rem; font-weight: 500;
  letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--muted); margin-bottom: 0.5rem;
}

/* ── TYPOGRAPHY ── */
h1 {
  font-family: var(--ff-h); font-size: clamp(2.8rem,6vw,5.5rem);
  font-weight: 900; line-height: 1.0; letter-spacing: -0.02em;
  color: var(--pink);
}
h2 {
  font-family: var(--ff-h); font-size: clamp(1.9rem,3vw,2.8rem);
  font-weight: 700; line-height: 1.15; letter-spacing: -0.015em;
  color: var(--dark2); margin-bottom: 1rem;
}
h2 .accent { color: var(--pink); }
h3 { font-family: var(--ff-s); font-size: 1.05rem; font-weight: 700; color: var(--dark2); margin-bottom: 0.5rem; }
h4 { font-family: var(--ff-s); font-size: 0.9rem; font-weight: 600; color: var(--dark2); margin-bottom: 0.35rem; }
p { color: var(--muted); }
.lead { font-size: 1rem; color: var(--muted); max-width: 560px; line-height: 1.82; font-weight: 300; margin-bottom: 2.5rem; }

/* ── BUTTONS ── */
.bp {
  display: inline-flex; align-items: center; gap: 0.4rem;
  font-family: var(--ff-b); font-size: 0.82rem; font-weight: 700;
  padding: 0.8rem 2rem; background: var(--blue); color: #fff;
  border: none; border-radius: 30px; cursor: pointer;
  letter-spacing: 0.03em; transition: background .2s, transform .15s, box-shadow .2s;
  box-shadow: 0 4px 16px rgba(2,159,231,0.3);
}
.bp:hover { background: var(--blue-dark); transform: translateY(-1px); box-shadow: 0 6px 24px rgba(2,159,231,0.4); }
.bp-pink {
  display: inline-flex; align-items: center; gap: 0.4rem;
  font-family: var(--ff-b); font-size: 0.82rem; font-weight: 700;
  padding: 0.8rem 2rem; background: var(--pink); color: #fff;
  border: none; border-radius: 30px; cursor: pointer;
  letter-spacing: 0.03em; transition: background .2s, transform .15s, box-shadow .2s;
  box-shadow: 0 4px 16px rgba(240,25,101,0.3);
}
.bp-pink:hover { background: var(--pink-dark); transform: translateY(-1px); }
.bg {
  display: inline-flex; align-items: center; gap: 0.4rem;
  font-family: var(--ff-b); font-size: 0.82rem; font-weight: 600;
  padding: 0.8rem 2rem; background: transparent; color: var(--dark2);
  border: 2px solid var(--dark2); border-radius: 30px; cursor: pointer;
  letter-spacing: 0.03em; transition: all .2s;
}
.bg:hover { border-color: var(--pink); color: var(--pink); background: var(--pink-light); }

/* ── CARDS ── */
.card {
  background: #fff; border: 1px solid var(--border);
  border-radius: var(--radius); padding: 2rem;
  transition: transform .25s, box-shadow .25s, border-color .25s;
  box-shadow: var(--shadow);
}
.card:hover { transform: translateY(-4px); box-shadow: var(--shadow2); border-color: var(--border2); }
.card-pink-top { border-top: 3px solid var(--pink); }
.card-blue-top { border-top: 3px solid var(--blue); }

/* ── GRID ── */
.grid2 { display: grid; grid-template-columns: repeat(2,1fr); gap: 2rem; }
.grid3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 2rem; }
.grid4 { display: grid; grid-template-columns: repeat(4,1fr); gap: 1.5rem; }

/* ── TAGS ── */
.tag {
  display: inline-block; font-family: var(--ff-b); font-size: 0.65rem;
  font-weight: 600; padding: 0.22rem 0.65rem; border-radius: 20px;
  letter-spacing: 0.05em; text-transform: uppercase;
}
.tag-pink { background: var(--pink-light); color: var(--pink); }
.tag-blue { background: var(--blue-light); color: var(--blue-dark); }
.tag-gray { background: var(--bg3); color: var(--muted); }
.tag-green { background: #e8faf2; color: #1a8a55; }
.tag-purple { background: #f0eaff; color: #6c3fc5; }

/* ── DIVIDER ── */
.divider { width: 48px; height: 3px; background: var(--pink); border-radius: 2px; margin: 0 0 1.5rem; }
.divider-center { margin: 0 auto 1.5rem; }

/* ── HERO SECTION ── */
.hero {
  min-height: 90vh; display: grid; grid-template-columns: 1fr 1fr;
  align-items: center; gap: 4rem;
  padding: 5rem 3rem; background: var(--bg);
  position: relative; overflow: hidden;
}
.hero::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
  background: var(--grad); opacity: 0.25; z-index: 0;
}
.hero-content { position: relative; z-index: 2; }
.hero-visual {
  position: relative; z-index: 2;
  background: var(--grad); border-radius: 20px;
  height: 420px; display: flex; align-items: center; justify-content: center;
  overflow: hidden; box-shadow: var(--shadow2);
}
.hero-vis-inner { text-align: center; }
.hero-eyebrow { font-family: var(--ff-b); font-size: 0.72rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--pink); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.6rem; }
.hero-eyebrow::before { content: ''; width: 28px; height: 2px; background: var(--pink); flex-shrink: 0; }
.hero h1 { margin-bottom: 1.5rem; }
.hero-sub { font-size: 1rem; color: var(--muted); max-width: 460px; line-height: 1.82; margin-bottom: 2.5rem; font-weight: 300; }
.hero-acts { display: flex; gap: 1rem; flex-wrap: wrap; }
.hero-stats { margin-top: 3.5rem; padding-top: 2rem; border-top: 1px solid var(--border); display: flex; gap: 2.5rem; flex-wrap: wrap; }
.stat-n { font-family: var(--ff-h); font-size: 2rem; font-weight: 900; color: var(--pink); line-height: 1; }
.stat-l { font-family: var(--ff-b); font-size: 0.7rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted2); margin-top: 0.2rem; }

/* ── PAGE HERO ── */
.page-hero { background: var(--grad); padding: 6rem 3rem 4rem; position: relative; overflow: hidden; }
.page-hero::after { content: ''; position: absolute; inset: 0; background: rgba(255,255,255,0.55); z-index: 0; }
.page-hero > * { position: relative; z-index: 2; }
.page-hero h1 { color: var(--pink); font-size: clamp(2.2rem,4.5vw,3.8rem); margin-bottom: 1rem; }

/* ── SERVICE LIST ── */
.svc-wrap { display: grid; grid-template-columns: 1fr 360px; gap: 3.5rem; align-items: start; }
.svc-item { display: flex; gap: 1.25rem; padding: 1.5rem 0; border-bottom: 1px solid var(--border); transition: opacity .2s; }
.svc-item:last-child { border-bottom: none; }
.svc-item:hover { opacity: 0.85; }
.svc-num { font-family: var(--ff-h); font-size: 0.62rem; font-weight: 800; color: var(--pink); letter-spacing: 0.08em; min-width: 26px; padding-top: 3px; }
.svc-d p { font-size: 0.82rem; color: var(--muted); line-height: 1.72; }

/* ── ASIDE BOX ── */
.aside-box { position: sticky; top: 80px; background: var(--bg2); border: 1px solid var(--border); border-radius: var(--radius); padding: 2rem; box-shadow: var(--shadow); }
.aside-label { font-family: var(--ff-s); font-size: 0.65rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted2); margin-bottom: 1rem; }
.model-item { background: #fff; border-radius: 6px; padding: 0.9rem 1rem; margin-bottom: 0.65rem; border-left: 3px solid var(--pink); box-shadow: 0 1px 6px rgba(0,0,0,0.05); }
.model-item.blue { border-left-color: var(--blue); }
.model-item.gray { border-left-color: var(--muted2); }
.model-nm { font-family: var(--ff-s); font-size: 0.85rem; font-weight: 700; color: var(--dark2); margin-bottom: 0.15rem; }
.model-st { font-size: 0.68rem; color: var(--muted); }

/* ── VESTING ── */
.vest3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: 6px; overflow: hidden; margin-top: 1rem; }
.vc { background: #fff; padding: 1.1rem 1rem; }
.vpc { font-family: var(--ff-h); font-size: 1.5rem; font-weight: 900; color: var(--pink); margin-bottom: 0.25rem; }
.vc:nth-child(2) { background: var(--bg2); }
.vc:nth-child(2) .vpc { color: var(--blue); }
.vl { font-family: var(--ff-s); font-size: 0.72rem; font-weight: 700; margin-bottom: 0.2rem; color: var(--dark2); }
.vt { font-size: 0.7rem; color: var(--muted); line-height: 1.5; }

/* ── MARKET CARDS ── */
.mkt-card { background: #fff; border: 1px solid var(--border); border-radius: var(--radius); padding: 2rem; box-shadow: var(--shadow); transition: transform .25s, box-shadow .25s; }
.mkt-card:hover { transform: translateY(-4px); box-shadow: var(--shadow2); }
.mkt-f { font-family: var(--ff-h); font-size: 2.2rem; font-weight: 900; color: var(--pink); margin-bottom: 0.2rem; }
.mkt-r { font-family: var(--ff-b); font-size: 0.65rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted2); margin-bottom: 1rem; }
.mkt-card p { font-size: 0.82rem; color: var(--muted); line-height: 1.7; }

/* ── PRODUCT CARDS ── */
.prod-card { background: #fff; border: 1px solid var(--border); border-radius: var(--radius); padding: 2.5rem; display: grid; grid-template-columns: 1fr 280px; gap: 2.5rem; align-items: start; margin-bottom: 2rem; box-shadow: var(--shadow); transition: transform .25s, box-shadow .25s; }
.prod-card:hover { transform: translateY(-3px); box-shadow: var(--shadow2); }
.prod-card.featured { border-top: 3px solid var(--pink); }
.pname { font-family: var(--ff-h); font-size: 1.4rem; font-weight: 800; color: var(--dark2); margin-bottom: 0.35rem; letter-spacing: -0.01em; }
.ptag { font-family: var(--ff-b); font-size: 0.72rem; color: var(--muted); margin-bottom: 0.9rem; line-height: 1.6; }
.pdesc { font-size: 0.85rem; color: var(--muted); line-height: 1.82; margin-bottom: 1.25rem; }
.pfeats { display: flex; flex-direction: column; gap: 0.45rem; }
.pf { display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.8rem; color: var(--muted); }
.pf::before { content: '›'; color: var(--pink); font-weight: 700; font-size: 1rem; flex-shrink: 0; line-height: 1.4; }
.pasides { display: flex; flex-direction: column; gap: 0.85rem; }
.pa { background: var(--bg2); border-radius: 6px; padding: 1rem; }
.pal { font-family: var(--ff-b); font-size: 0.6rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted2); margin-bottom: 0.55rem; }
.pat { display: inline-block; font-family: var(--ff-b); font-size: 0.62rem; padding: 0.18rem 0.55rem; border: 1px solid var(--border); border-radius: 15px; color: var(--muted); margin: 0.15rem; background: #fff; }
.status-live { display: flex; align-items: center; gap: 0.35rem; font-family: var(--ff-b); font-size: 0.68rem; font-weight: 600; color: #1a8a55; }
.status-dev { display: flex; align-items: center; gap: 0.35rem; font-family: var(--ff-b); font-size: 0.68rem; color: var(--muted); }
.sdot { width: 7px; height: 7px; border-radius: 50%; background: #1a8a55; animation: pulse 2s infinite; flex-shrink: 0; }
.sdot.d { background: var(--blue); animation: none; }
@keyframes pulse { 0%,100%{opacity:1}50%{opacity:0.35} }

/* ── TEAM CARDS ── */
.team-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 2rem; }
.team-card { background: #fff; border: 1px solid var(--border); border-radius: var(--radius); padding: 2.25rem 2rem; box-shadow: var(--shadow); transition: transform .25s, box-shadow .25s; position: relative; overflow: hidden; }
.team-card:hover { transform: translateY(-5px); box-shadow: var(--shadow2); }
.team-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: var(--grad2); }
.tc-av { width: 68px; height: 68px; border-radius: 50%; background: var(--grad); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem; border: 2px solid var(--pink-light); box-shadow: 0 4px 14px rgba(240,25,101,0.15); }
.tc-init { font-family: var(--ff-h); font-size: 1.2rem; font-weight: 900; color: var(--pink); letter-spacing: -0.02em; }
.tc-name { font-family: var(--ff-h); font-size: 1.2rem; font-weight: 800; color: var(--dark2); margin-bottom: 0.2rem; letter-spacing: -0.01em; line-height: 1.25; }
.tc-title { font-family: var(--ff-b); font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--pink); margin-bottom: 0.1rem; }
.tc-org { font-family: var(--ff-b); font-size: 0.68rem; color: var(--muted2); margin-bottom: 1.1rem; }
.tc-bio { font-size: 0.8rem; color: var(--muted); line-height: 1.75; margin-bottom: 1.1rem; }
.tc-tags { display: flex; flex-wrap: wrap; gap: 0.3rem; margin-bottom: 1.1rem; }
.tc-career { border-top: 1px solid var(--border); padding-top: 1.1rem; }
.ci { display: flex; gap: 0.65rem; margin-bottom: 0.55rem; }
.ci:last-child { margin-bottom: 0; }
.ci-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--pink); flex-shrink: 0; margin-top: 6px; }
.ci-role { font-size: 0.76rem; font-weight: 600; color: var(--dark2); line-height: 1.3; }
.ci-co { font-size: 0.68rem; color: var(--muted); margin-top: 0.1rem; }
.tc-link { display: inline-flex; align-items: center; gap: 0.4rem; font-family: var(--ff-b); font-size: 0.65rem; font-weight: 600; color: var(--blue); border: 1px solid rgba(2,159,231,0.25); border-radius: 20px; padding: 0.28rem 0.7rem; transition: background .2s; margin-top: 1.1rem; text-transform: uppercase; letter-spacing: 0.05em; }
.tc-link:hover { background: var(--blue-light); }

/* ── ECO BANDS ── */
.eco-wrap { border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow); }
.eco { display: flex; gap: 1.5rem; padding: 1.6rem 2rem; border-bottom: 1px solid var(--border); background: #fff; transition: background .2s; }
.eco:last-child { border-bottom: none; }
.eco:hover { background: var(--bg2); }
.eco-i { font-size: 1.1rem; flex-shrink: 0; width: 28px; margin-top: 2px; text-align: center; }
.eco-b p { font-size: 0.83rem; color: var(--muted); line-height: 1.72; max-width: 560px; }
.eco-tags { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.6rem; }
.eco-tag { font-size: 0.65rem; padding: 0.18rem 0.6rem; border: 1px solid var(--border); border-radius: 15px; color: var(--muted); background: var(--bg2); font-family: var(--ff-b); font-weight: 500; }

/* ── TIER CARDS ── */
.tier-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1.75rem; }
.tier { background: #fff; border: 1px solid var(--border); border-radius: var(--radius); padding: 1.75rem; box-shadow: var(--shadow); display: flex; flex-direction: column; position: relative; transition: transform .25s, box-shadow .25s; }
.tier:hover { transform: translateY(-4px); box-shadow: var(--shadow2); }
.tier.feat { border-color: var(--pink); border-top: 3px solid var(--pink); }
.tier.feat::after { content: 'Most Common'; position: absolute; top: -1px; left: 50%; transform: translateX(-50%); font-family: var(--ff-b); font-size: 0.58rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; background: var(--pink); color: #fff; padding: 0.2rem 0.7rem; border-radius: 0 0 6px 6px; }
.tier-stage { font-family: var(--ff-b); font-size: 0.6rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--pink); margin-bottom: 0.4rem; }
.tier-name { font-family: var(--ff-h); font-size: 1rem; font-weight: 800; color: var(--dark2); margin-bottom: 1rem; }
.tier-feats { flex: 1; display: flex; flex-direction: column; gap: 0.45rem; }
.tier-feat { display: flex; align-items: flex-start; gap: 0.45rem; font-size: 0.76rem; color: var(--muted); }
.tier-feat::before { content: '›'; color: var(--pink); font-weight: 700; font-size: 0.95rem; flex-shrink: 0; line-height: 1.4; }

/* ── CTA SECTION ── */
.cta-sec { background: var(--dark2); padding: 6rem 3rem; text-align: center; position: relative; overflow: hidden; }
.cta-sec::before { content: ''; position: absolute; inset: 0; background: var(--grad); opacity: 0.08; }
.cta-sec h2 { color: #fff; max-width: 560px; margin: 0 auto 1rem; }
.cta-sec h2 .accent { color: var(--pink); }
.cta-sec p { color: rgba(255,255,255,0.65); max-width: 440px; margin: 0 auto 2.5rem; font-size: 0.95rem; }
.cta-acts { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
.cta-note { margin-top: 1.5rem; font-size: 0.72rem; color: rgba(255,255,255,0.4); letter-spacing: 0.06em; font-family: var(--ff-b); }

/* ── FOOTER ── */
footer { background: #111; color: rgba(255,255,255,0.7); padding: 2.5rem 3rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
.f-brand { font-family: var(--ff-h); font-size: 1.1rem; font-weight: 800; color: #fff; }
.f-brand span { color: var(--pink); }
.f-links { display: flex; gap: 1.5rem; }
.f-links a { font-family: var(--ff-b); font-size: 0.72rem; color: rgba(255,255,255,0.55); letter-spacing: 0.04em; transition: color .2s; }
.f-links a:hover { color: var(--pink); }
.f-meta { font-family: var(--ff-b); font-size: 0.68rem; color: rgba(255,255,255,0.35); }

/* ── INSIGHTS ── */
.feat-post { display: grid; grid-template-columns: 1fr 1fr; border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; margin-bottom: 2.5rem; box-shadow: var(--shadow); cursor: pointer; transition: box-shadow .25s, transform .25s; }
.feat-post:hover { transform: translateY(-3px); box-shadow: var(--shadow2); }
.feat-img { background: var(--grad); min-height: 280px; display: flex; align-items: center; justify-content: center; font-size: 52px; }
.feat-body { padding: 2.5rem; background: #fff; display: flex; flex-direction: column; justify-content: space-between; }
.post-cat { font-family: var(--ff-b); font-size: 0.65rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--pink); margin-bottom: 0.75rem; }
.post-title { font-family: var(--ff-h); font-size: 1.2rem; font-weight: 800; color: var(--dark2); line-height: 1.3; margin-bottom: 0.75rem; }
.post-exc { font-size: 0.83rem; color: var(--muted); line-height: 1.75; margin-bottom: 1.25rem; }
.post-meta { font-size: 0.72rem; color: var(--muted2); display: flex; gap: 0.65rem; }
.post-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.75rem; }
.post-card { background: #fff; border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; cursor: pointer; box-shadow: var(--shadow); transition: transform .25s, box-shadow .25s; }
.post-card:hover { transform: translateY(-4px); box-shadow: var(--shadow2); }
.pcimg { height: 140px; background: var(--grad); display: flex; align-items: center; justify-content: center; font-size: 36px; }
.pcb { padding: 1.25rem; }
.pcb .post-title { font-size: 0.92rem; margin-bottom: 0.4rem; }
.pcb .post-exc { font-size: 0.78rem; margin-bottom: 0.7rem; }
.fbar { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 2.5rem; }
.fbtn { font-family: var(--ff-b); font-size: 0.72rem; font-weight: 600; padding: 0.4rem 1rem; border-radius: 20px; border: 2px solid var(--border); color: var(--muted); background: transparent; cursor: pointer; transition: all .2s; }
.fbtn:hover, .fbtn.on { border-color: var(--pink); color: var(--pink); background: var(--pink-light); }
.nl-strip { background: var(--bg2); border: 1px solid var(--border); border-radius: var(--radius); padding: 2rem 2.5rem; display: flex; align-items: center; justify-content: space-between; gap: 2rem; flex-wrap: wrap; box-shadow: var(--shadow); }
.nl-strip h3 { font-family: var(--ff-h); font-size: 1.1rem; font-weight: 800; color: var(--dark2); margin-bottom: 0.3rem; }
.nl-strip p { font-size: 0.83rem; color: var(--muted); max-width: 380px; }
.nlf { display: flex; gap: 0.6rem; }
.nli { font-family: var(--ff-b); font-size: 0.85rem; padding: 0.7rem 1.1rem; background: #fff; border: 2px solid var(--border); border-radius: 30px; color: var(--dark); min-width: 210px; outline: none; transition: border-color .2s; }
.nli:focus { border-color: var(--pink); }
.nli::placeholder { color: var(--muted2); }

/* ── PODCAST ── */
.pod-hero { background: var(--dark2); padding: 5.5rem 3rem 3.5rem; position: relative; overflow: hidden; }
.pod-hero::before { content: ''; position: absolute; inset: 0; background: var(--grad); opacity: 0.12; }
.pod-hero > * { position: relative; z-index: 2; }
.pod-hero h1 { color: #fff; font-size: clamp(2rem,4vw,3.5rem); margin-bottom: 1rem; }
.pod-hero p { color: rgba(255,255,255,0.65); }
.pod-logo { display: flex; align-items: center; gap: 0.9rem; margin-bottom: 2rem; }
.pod-ic { width: 56px; height: 56px; background: var(--pink); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; flex-shrink: 0; box-shadow: 0 6px 20px rgba(240,25,101,0.4); }
.pod-br { font-family: var(--ff-b); font-size: 0.62rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--pink); }
.plats { display: flex; gap: 0.55rem; flex-wrap: wrap; margin-top: 2rem; }
.plat { display: flex; align-items: center; gap: 0.4rem; font-family: var(--ff-b); font-size: 0.75rem; font-weight: 600; padding: 0.45rem 1rem; border: 2px solid rgba(255,255,255,0.2); border-radius: 20px; color: rgba(255,255,255,0.75); cursor: pointer; transition: all .2s; }
.plat:hover { border-color: var(--pink); color: var(--pink); }
.fmt-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 1.75rem; }
.fmt-card { background: #fff; border: 1px solid var(--border); border-radius: var(--radius); padding: 1.75rem; box-shadow: var(--shadow); transition: transform .25s, box-shadow .25s; }
.fmt-card:hover { transform: translateY(-4px); box-shadow: var(--shadow2); border-top: 3px solid var(--pink); }
.fmt-i { font-size: 1.3rem; margin-bottom: 0.9rem; }
.fmt-card p { font-size: 0.82rem; color: var(--muted); line-height: 1.72; }
.ep-list { border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow); }
.ep { background: #fff; padding: 1.6rem 2rem; display: grid; grid-template-columns: 56px 1fr auto; gap: 1.25rem; align-items: center; border-bottom: 1px solid var(--border); cursor: pointer; transition: background .2s; }
.ep:last-child { border-bottom: none; }
.ep:hover { background: var(--bg2); }
.ep-nw { display: flex; flex-direction: column; align-items: center; gap: 0.35rem; }
.ep-n { font-family: var(--ff-b); font-size: 0.62rem; font-weight: 700; color: var(--pink); letter-spacing: 0.06em; }
.ep-pl { width: 36px; height: 36px; border-radius: 50%; border: 2px solid var(--pink); display: flex; align-items: center; justify-content: center; font-size: 0.78rem; color: var(--pink); transition: all .2s; }
.ep:hover .ep-pl { background: var(--pink); color: #fff; }
.ep-tg { font-family: var(--ff-b); font-size: 0.62rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--pink); margin-bottom: 0.28rem; }
.ep-ti { font-family: var(--ff-s); font-size: 0.95rem; font-weight: 700; color: var(--dark2); margin-bottom: 0.28rem; }
.ep-de { font-size: 0.78rem; color: var(--muted); line-height: 1.55; }
.ep-in { text-align: right; }
.ep-du { font-size: 0.73rem; color: var(--muted2); }
.ep-da { font-size: 0.68rem; color: var(--muted2); margin-top: 0.18rem; }
.ep-new { display: inline-block; font-family: var(--ff-b); font-size: 0.58rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; background: var(--pink); color: #fff; padding: 0.12rem 0.45rem; border-radius: 10px; margin-top: 0.3rem; }

@media (max-width: 900px) {
  section { padding: 4rem 1.5rem; }
  nav { padding: 0.9rem 1.5rem; }
  .nav-links { display: none; }
  .hero { grid-template-columns: 1fr; min-height: auto; }
  .hero-visual { display: none; }
  .grid2, .grid3, .grid4 { grid-template-columns: 1fr; }
  .svc-wrap { grid-template-columns: 1fr; }
  .aside-box { position: static; }
  .tier-grid { grid-template-columns: 1fr 1fr; }
  .team-grid { grid-template-columns: 1fr 1fr; }
  .prod-card { grid-template-columns: 1fr; }
  .feat-post { grid-template-columns: 1fr; }
  .post-grid { grid-template-columns: 1fr 1fr; }
  footer { flex-direction: column; text-align: center; padding: 2rem 1.5rem; }
  .cta-sec { padding: 4rem 1.5rem; }
}

.page-hero { padding: 10rem 4rem 5rem; background: var(--surface); position: relative; overflow: hidden; }
    .page-hero-glow { position: absolute; width: 600px; height: 400px; background: radial-gradient(circle, rgba(0,200,255,0.06) 0%, transparent 70%); top: 0; right: 0; pointer-events: none; }

    /* Service cards */
    .service-full { display: flex; flex-direction: column; gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: var(--radius-md); overflow: hidden; }
    .svc-row { display: grid; grid-template-columns: 80px 1fr 1fr; background: var(--surface); padding: 2.5rem; gap: 3rem; align-items: start; transition: background var(--transition); }
    .svc-row:hover { background: var(--card); }
    .svc-num { font-family: var(--ff-display); font-size: 2.5rem; font-weight: 800; color: rgba(0,200,255,0.15); line-height: 1; padding-top: 4px; }
    .svc-main h3 { margin-bottom: 0.75rem; }
    .svc-main p { font-size: 0.9rem; color: var(--muted); line-height: 1.75; }
    .svc-detail { display: flex; flex-direction: column; gap: 0.5rem; }
    .svc-tag { display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: var(--muted); }
    .svc-tag::before { content: ''; width: 4px; height: 4px; border-radius: 50%; background: var(--accent); flex-shrink: 0; }

    /* Engagement models */
    .model-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; }
    .model-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 2rem; transition: border-color var(--transition); }
    .model-card:hover { border-color: rgba(0,200,255,0.3); }
    .model-card.featured { border-color: rgba(0,200,255,0.4); position: relative; }
    .model-card.featured::after { content: 'Most Common'; position: absolute; top: 1rem; right: 1rem; font-size: 0.65rem; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; background: var(--accent); color: var(--bg); padding: 0.2rem 0.5rem; border-radius: 2px; }
    .model-stage { font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent); margin-bottom: 0.5rem; }
    .model-name { font-family: var(--ff-display); font-size: 1.3rem; font-weight: 700; margin-bottom: 0.75rem; }
    .model-desc { font-size: 0.875rem; color: var(--muted); line-height: 1.7; margin-bottom: 1.25rem; }
    .model-features { display: flex; flex-direction: column; gap: 0.4rem; }
    .model-feature { display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.8rem; color: var(--muted); }
    .model-feature::before { content: '—'; color: var(--accent); font-weight: 700; flex-shrink: 0; }

    /* Vesting */
    .vesting-steps { display: grid; grid-template-columns: repeat(3,1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: var(--radius-md); overflow: hidden; }
    .vesting-step { background: var(--surface); padding: 2rem; }
    .vesting-pct { font-family: var(--ff-display); font-size: 2.5rem; font-weight: 800; color: var(--accent); margin-bottom: 0.5rem; }
    .vesting-label { font-size: 0.8rem; font-weight: 500; color: var(--text); margin-bottom: 0.5rem; }
    .vesting-trigger { font-size: 0.8rem; color: var(--muted); line-height: 1.6; }
  
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
  <div className="page-hero-glow"></div>
  <div style={{position: "relative", zIndex: "2", maxWidth: "800px"}}>
    <div className="eyebrow">Studio Services</div>
    <h1 style={{fontSize: "clamp(2.5rem,5vw,4rem)"}}>Everything a founder needs.<br />Nothing they don't.</h1>
    <p style={{fontSize: "1.1rem", color: "var(--muted)", maxWidth: "580px", marginTop: "1.5rem", lineHeight: "1.8"}}>Our engagement model is calibrated to startup stage — highest support at the earliest stages, structured to de-risk on both sides as you grow. We are operators, not advisors.</p>
  </div>
</section>

{/* SERVICES LIST */}
<section style={{background: "var(--bg)"}}>
  <div className="eyebrow reveal">What We Do</div>
  <h2 className="reveal" style={{marginBottom: "3rem"}}>Six core services.<br />Delivered with ownership.</h2>
  <div className="service-full reveal">

    <div className="svc-row">
      <div className="svc-num">01</div>
      <div className="svc-main">
        <h3>Venture Building & Co-founding</h3>
        <p>At the pre-idea stage, we function as operational co-founders — shaping the problem space, validating the market thesis, and structuring the foundational product. We don't consult on this. We build it with you, equity-first, milestone-vested, with full accountability for outcomes.</p>
      </div>
      <div className="svc-detail">
        <div className="svc-tag">Problem framing & market validation</div>
        <div className="svc-tag">Founding team structuring</div>
        <div className="svc-tag">Entity setup & legal scaffolding</div>
        <div className="svc-tag">Product roadmap & prioritisation</div>
        <div className="svc-tag">Investor readiness from day one</div>
        <span className="pill pill-accent" style={{marginTop: "0.5rem"}}>Best for: Pre-idea founders</span>
      </div>
    </div>

    <div className="svc-row">
      <div className="svc-num">02</div>
      <div className="svc-main">
        <h3>Product Development & Tech Execution</h3>
        <p>From MVP architecture to production-grade engineering, our technical team builds alongside yours. We specialise in AI-native products, cybersecurity platforms, and B2B SaaS infrastructure across cloud-native stacks. We've built before — and we know what matters at each stage.</p>
      </div>
      <div className="svc-detail">
        <div className="svc-tag">AI/ML product architecture</div>
        <div className="svc-tag">Cybersecurity platform development</div>
        <div className="svc-tag">B2B SaaS infrastructure</div>
        <div className="svc-tag">Cloud-native stacks (AWS, GCP, Azure)</div>
        <div className="svc-tag">API integrations & data pipelines</div>
        <span className="pill pill-green" style={{marginTop: "0.5rem"}}>Best for: Pre-seed to Seed</span>
      </div>
    </div>

    <div className="svc-row">
      <div className="svc-num">03</div>
      <div className="svc-main">
        <h3>Go-to-Market Strategy & Sales</h3>
        <p>We don't hand over a deck and walk away. CodeCap owns the GTM motion — identifying enterprise buyers, building sales decks that convert, running proposals end-to-end, and closing first deals in-market across Singapore, UAE, and India. Our commercial upside is tied directly to deals closed.</p>
      </div>
      <div className="svc-detail">
        <div className="svc-tag">ICP definition & market segmentation</div>
        <div className="svc-tag">Enterprise pipeline development</div>
        <div className="svc-tag">Proposal & RFP management</div>
        <div className="svc-tag">Channel & partner development</div>
        <div className="svc-tag">Deal closing & negotiation support</div>
        <span className="pill pill-accent" style={{marginTop: "0.5rem"}}>Best for: MVP to Seed stage</span>
      </div>
    </div>

    <div className="svc-row">
      <div className="svc-num">04</div>
      <div className="svc-main">
        <h3>Fundraising Support & VC Introductions</h3>
        <p>From pitch deck construction to warm VC introductions across SEA, Gulf, and South Asian networks, CodeCap supports your capital raise — structured compliantly under MAS and UAE regulatory frameworks. We don't take fundraising-only mandates — capital support is always bundled with active service delivery.</p>
      </div>
      <div className="svc-detail">
        <div className="svc-tag">Pitch deck development & review</div>
        <div className="svc-tag">Financial model structuring</div>
        <div className="svc-tag">VC introductions (SEA, Gulf, India)</div>
        <div className="svc-tag">Due diligence preparation</div>
        <div className="svc-tag">MAS & UAE-compliant success structures</div>
        <span className="pill pill-green" style={{marginTop: "0.5rem"}}>Best for: Pre-seed to Series A</span>
      </div>
    </div>

    <div className="svc-row">
      <div className="svc-num">05</div>
      <div className="svc-main">
        <h3>Cyber & Deep Tech Advisory</h3>
        <p>For startups operating in AI security, threat intelligence, zero-trust architecture, or regulated deep tech, CodeCap provides hands-on subject matter expertise that goes beyond advisory — we implement and validate. Our team has delivered in enterprise security environments across financial services, government, and critical infrastructure.</p>
      </div>
      <div className="svc-detail">
        <div className="svc-tag">AI threat modelling & red-teaming</div>
        <div className="svc-tag">Threat intelligence platform review</div>
        <div className="svc-tag">Zero-trust architecture design</div>
        <div className="svc-tag">Security product GTM</div>
        <div className="svc-tag">Regulated industry compliance advisory</div>
        <span className="pill pill-purple" style={{marginTop: "0.5rem"}}>Best for: Cyber & deep tech startups</span>
      </div>
    </div>

    <div className="svc-row">
      <div className="svc-num">06</div>
      <div className="svc-main">
        <h3>Regional Market Entry</h3>
        <p>Structured market entry programs for Singapore, UAE/KSA, and India — including entity setup guidance, regulatory strategy, partner channel development, and on-the-ground BD relationships from day one. We've navigated each of these markets ourselves, and we know what foreign founders get wrong.</p>
      </div>
      <div className="svc-detail">
        <div className="svc-tag">Entity structure & setup guidance</div>
        <div className="svc-tag">Regulatory & licensing navigation</div>
        <div className="svc-tag">Local BD network activation</div>
        <div className="svc-tag">Government & enterprise introductions</div>
        <div className="svc-tag">Hiring & team localisation</div>
        <span className="pill pill-accent" style={{marginTop: "0.5rem"}}>Covers: SG · UAE · India</span>
      </div>
    </div>

  </div>
</section>

{/* ENGAGEMENT MODELS */}
<section style={{background: "var(--surface)"}}>
  <div className="eyebrow reveal">Engagement Models</div>
  <h2 className="reveal">Four ways to work with us.</h2>
  <p className="section-lead reveal">Structured deal templates for every founder situation. Every model is milestone-vested and designed for long-term alignment — not short-term billing.</p>
  <div className="model-grid reveal">
    <div className="model-card">
      <div className="model-stage">Pre-idea · Pre-seed</div>
      <div className="model-name">Cash-Light Build</div>
      <div className="model-desc">For founders with strong vision but limited capital. CodeCap takes an equity-first position with milestone vesting, covering full execution across product and GTM. Revenue share activates once the business generates revenue.</div>
      <div className="model-features">
        <div className="model-feature">Zero or minimal monthly retainer</div>
        <div className="model-feature">Equity-first, 3-tranche milestone vesting</div>
        <div className="model-feature">Revenue share activates at month 6+</div>
        <div className="model-feature">12-month clawback on unvested equity</div>
      </div>
    </div>
    <div className="model-card featured">
      <div className="model-stage">Pre-seed · MVP Sweet Spot</div>
      <div className="model-name">Funded Founder GTM</div>
      <div className="model-desc">For founders who have raised initial capital and need execution firepower. A retainer covers CodeCap's cost base while equity and revenue share provide long-term upside alignment. Our most common engagement structure.</div>
      <div className="model-features">
        <div className="model-feature">Monthly retainer (cost recovery basis)</div>
        <div className="model-feature">Equity with performance vesting</div>
        <div className="model-feature">Revenue share on CodeCap-sourced deals</div>
        <div className="model-feature">6-month minimum commitment</div>
      </div>
    </div>
    <div className="model-card">
      <div className="model-stage">Pre-idea · Full Build</div>
      <div className="model-name">Venture Co-Founder</div>
      <div className="model-desc">For first-time founders building from zero. CodeCap becomes an operational co-founder — taking significant equity across three vesting tranches, running product, GTM, and operations, with a board observer seat included.</div>
      <div className="model-features">
        <div className="model-feature">Token monthly fee or zero fees</div>
        <div className="model-feature">Significant equity, 3-tranche vesting</div>
        <div className="model-feature">CodeCap operates as co-founder</div>
        <div className="model-feature">Board observer seat included</div>
      </div>
    </div>
    <div className="model-card">
      <div className="model-stage">Series A · Selective Only</div>
      <div className="model-name">Capability Gap</div>
      <div className="model-desc">For Series A companies with a specific, unfillable gap — typically in cyber/deep tech, Gulf GTM, or SEA market entry. Fees-dominant structure, minimal equity, defined scope with a built-in exit clause. Requires partner-level approval before pitching.</div>
      <div className="model-features">
        <div className="model-feature">Retainer-dominant structure</div>
        <div className="model-feature">Minimal equity component</div>
        <div className="model-feature">Defined scope + exit clause at 6 months</div>
        <div className="model-feature">Partner sign-off required · 1 concurrent max</div>
      </div>
    </div>
  </div>
</section>

{/* VESTING STRUCTURE */}
<section>
  <div className="eyebrow reveal">Equity Framework</div>
  <h2 className="reveal">Milestone vesting.<br />Aligned incentives.</h2>
  <p className="section-lead reveal">All equity deals follow a standard 3-tranche milestone vesting structure. This protects founders from passive equity holders and ensures CodeCap remains accountable for delivery at every stage.</p>
  <div className="vesting-steps reveal">
    <div className="vesting-step">
      <div className="vesting-pct">30%</div>
      <div className="vesting-label">Tranche 1 — Strategy & Setup</div>
      <div className="vesting-trigger">Granted on agreement signing and strategy delivery. Covers setup, problem framing, and roadmap. Trigger: Month 1–2.</div>
    </div>
    <div className="vesting-step" style={{background: "var(--card)"}}>
      <div className="vesting-pct" style={{color: "var(--accent2)"}}>40%</div>
      <div className="vesting-label">Tranche 2 — Product or First Revenue</div>
      <div className="vesting-trigger">Granted on product launch or first paying customer. Trigger: MVP live, first closed deal, or pre-seed funding closed.</div>
    </div>
    <div className="vesting-step">
      <div className="vesting-pct">30%</div>
      <div className="vesting-label">Tranche 3 — Traction or Funding</div>
      <div className="vesting-trigger">Granted on meaningful traction or a funding milestone. Trigger: ARR milestone, seed round closed, or 18 months post-engagement.</div>
    </div>
  </div>
  <p style={{fontSize: "0.85rem", color: "var(--muted)", marginTop: "1.5rem", lineHeight: "1.7"}}>12-month clawback on unvested tranches if founder terminates without cause. All equity agreements require Singapore or DIFC-seated legal structuring for enforceability.</p>
</section>

{/* CTA */}
<section style={{textAlign: "center", borderTop: "1px solid var(--border)", padding: "6rem 4rem", background: "var(--surface)"}}>
  <div className="eyebrow" style={{justifyContent: "center"}}>Get Started</div>
  <h2 style={{maxWidth: "600px", margin: "0 auto 1.25rem"}}>Not sure which model fits you?</h2>
  <p style={{color: "var(--muted)", maxWidth: "480px", margin: "0 auto 2.5rem"}}>Tell us where you are and what you're trying to build. We'll tell you if we're the right partner — and if not, we'll point you in the right direction.</p>
  <a href="mailto:hello@codecap.ai" className="btn-primary">Talk to the Team</a>
  <p style={{fontSize: "0.8rem", color: "var(--muted)", marginTop: "1.5rem"}}>hello@codecap.ai · Singapore · UAE · India</p>
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

export default Services;
