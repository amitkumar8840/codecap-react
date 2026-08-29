function Team() {
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

/* Override team grid for 3-col layout, last row centred */
.team-section-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 2rem; }
.founders-row { display: grid; grid-template-columns: repeat(2,1fr); gap: 2rem; margin-bottom: 2rem; }
.consulting-row { display: grid; grid-template-columns: repeat(4,1fr); gap: 2rem; }
@media(max-width:900px){
  .founders-row { grid-template-columns: 1fr; }
  .consulting-row { grid-template-columns: 1fr 1fr; }
}
@media(max-width:600px){
  .consulting-row { grid-template-columns: 1fr; }
}

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

<div className="page-hero">
  <div className="eyebrow-text">The Team</div>
  <div className="divider"></div>
  <h1>Operators who've<br />been in the room.</h1>
  <p style={{fontSize: "1rem", color: "var(--dark2)", maxWidth: "540px", lineHeight: "1.82", marginTop: "1rem", fontWeight: "300"}}>CodeCap is built by practitioners who have spent careers inside enterprise cybersecurity, global GTM, product development, and business development — across Trend Micro, Tenable, Wipro, and the startup ecosystem across SEA, the Gulf, and India.</p>
</div>

<section>
  {/* CO-FOUNDERS */}
  <div className="eyebrow-text">Co-Founders</div>
  <div className="divider"></div>
  <div className="founders-row">

    {/* Baburaj Varma */}
    <div className="team-card">
      <div className="tc-av"><div className="tc-init">BV</div></div>
      <div className="tc-name">Baburaj Varma</div>
      <div className="tc-title">Co-Founder & Managing Partner</div>
      <div className="tc-org">Singapore · Cybersecurity · Enterprise GTM · AMEA</div>
      <div className="tc-bio">A 25+ year veteran of the enterprise cybersecurity industry, Baburaj built and led technical services teams across the AMEA region as VP Technical Leader at Trend Micro — one of the world's largest cybersecurity companies. Known for retaining large enterprise accounts through technical credibility and trust, and for turning complex security challenges into customer outcomes. Prior to Trend Micro, he served as Channel Sales Director India at Netskope. At CodeCap, Baburaj leads the overall firm, driving partnership strategy, enterprise client relationships, and product commercialisation across SEA and the Gulf.</div>
      <div className="tc-tags">
        <span className="tag tag-pink">Cybersecurity</span><span className="tag tag-blue">Enterprise GTM</span><span className="tag tag-blue">Technical Leadership</span><span className="tag tag-gray">AMEA</span><span className="tag tag-gray">Channel Strategy</span>
      </div>
      <div className="tc-career">
        <div className="ci"><div className="ci-dot"></div><div><div className="ci-role">VP Technical Leader, AMEA Region</div><div className="ci-co">Trend Micro — Singapore</div></div></div>
        <div className="ci"><div className="ci-dot" style={{background: "var(--blue)"}}></div><div><div className="ci-role">Channel Sales Director, India</div><div className="ci-co">Netskope</div></div></div>
        <div className="ci"><div className="ci-dot" style={{background: "var(--muted2)"}}></div><div><div className="ci-role">Head of Technical Services, SEA & India</div><div className="ci-co">Trend Micro</div></div></div>
      </div>
      <a href="https://www.linkedin.com/in/baburajvarma/" target="_blank" rel="noreferrer" className="tc-link">LinkedIn Profile →</a>
    </div>

    {/* Tarun Gupta */}
    <div className="team-card">
      <div className="tc-av"><div className="tc-init">TG</div></div>
      <div className="tc-name">Tarun Gupta</div>
      <div className="tc-title">Co-Founder & Partner</div>
      <div className="tc-org">India / SEA · Security Operations · Managed Security · Deep Tech</div>
      <div className="tc-bio">Tarun is a cybersecurity operator and technologist with deep expertise in security operations and technology integration across AMEA. As Director of Security Operations as a Service at Trend Micro AMEA — building and scaling SOC programmes for enterprise clients — he worked alongside Baburaj Varma across Southeast Asia and the Indian subcontinent. Prior to CodeCap, he served as Chief Delivery Officer at TRUGlobal, a global digital transformation company. At CodeCap, Tarun leads technical engagements across the cybersecurity portfolio — from the Autonomous ILCM Platform to Abhra and Cloud-BOM — bringing practitioner depth that founders and buyers trust.</div>
      <div className="tc-tags">
        <span className="tag tag-pink">Security Operations</span><span className="tag tag-blue">MDR / SOC</span><span className="tag tag-blue">Tech Integration</span><span className="tag tag-gray">AMEA</span><span className="tag tag-gray">Enterprise Delivery</span>
      </div>
      <div className="tc-career">
        <div className="ci"><div className="ci-dot"></div><div><div className="ci-role">Chief Delivery Officer</div><div className="ci-co">TRUGlobal — Global Digital Transformation</div></div></div>
        <div className="ci"><div className="ci-dot" style={{background: "var(--blue)"}}></div><div><div className="ci-role">Director, Security Operations as a Service, AMEA</div><div className="ci-co">Trend Micro</div></div></div>
        <div className="ci"><div className="ci-dot" style={{background: "var(--muted2)"}}></div><div><div className="ci-role">Director, Technology Integration Service, AMEA</div><div className="ci-co">Trend Micro</div></div></div>
      </div>
      <a href="https://www.linkedin.com/in/tarun-gupta-66b924a/" target="_blank" rel="noreferrer" className="tc-link">LinkedIn Profile →</a>
    </div>
  </div>

  {/* CONSULTING PARTNERS */}
  <div className="eyebrow-text" style={{marginTop: "3rem"}}>Consulting Partners</div>
  <div className="divider"></div>
  <div className="consulting-row">

    {/* Atin Verma */}
    <div className="team-card">
      <div className="tc-av"><div className="tc-init">AV</div></div>
      <div className="tc-name">Atin Verma</div>
      <div className="tc-title">Consulting Partner</div>
      <div className="tc-org">Marketing & Brand</div>
      <div className="tc-bio">Senior marketing and GTM leader with a career built at the intersection of enterprise cybersecurity and high-growth go-to-market. At Tenable, he led marketing strategy across India and South Asia, producing customer events that became industry benchmarks. Renowned for translating complex cybersecurity solutions into compelling commercial narratives.</div>
      <div className="tc-tags">
        <span className="tag tag-pink">GTM Strategy</span><span className="tag tag-blue">Brand & Marketing</span><span className="tag tag-gray">Demand Gen</span>
      </div>
      <div className="tc-career">
        <div className="ci"><div className="ci-dot" style={{background: "var(--blue)"}}></div><div><div className="ci-role">Senior Marketing Leader, India & South Asia</div><div className="ci-co">Tenable — Cybersecurity</div></div></div>
      </div>
      <a href="https://www.linkedin.com/in/atinverma9/" target="_blank" rel="noreferrer" className="tc-link">LinkedIn →</a>
    </div>

    {/* Naveena Chowdary */}
    <div className="team-card">
      <div className="tc-av"><div className="tc-init">NC</div></div>
      <div className="tc-name">Naveena Chowdary Koyyalamudi</div>
      <div className="tc-title">Consulting Partner</div>
      <div className="tc-org">Operations</div>
      <div className="tc-bio">Information security professional and operations leader with a computer science foundation from the University of Colorado Denver. Naveena bridges technical security expertise with operational delivery — her experience spans information security programme management, AI research applications, and cross-functional operations in regulated industries. At Plantillegence, she worked at the intersection of AI technology and agri-tech, applying information security frameworks to an emerging-tech environment. Prior to that, at Optum Global Solutions International B.V. (UnitedHealth Group), she built grounding in enterprise-scale operations and information systems in a regulated healthcare context. At CodeCap, Naveena leads operations — keeping engagement delivery structured, compliant, and on track.</div>
      <div className="tc-tags">
        <span className="tag tag-purple">Information Security</span><span className="tag tag-blue">Operations Management</span><span className="tag tag-blue">AI Applications</span><span className="tag tag-gray">Regulated Industries</span>
      </div>
      <div className="tc-career">
        <div className="ci"><div className="ci-dot"></div><div><div className="ci-role">Information Security & AI Research</div><div className="ci-co">Plantillegence — AI-driven AgriTech Platform</div></div></div>
        <div className="ci"><div className="ci-dot" style={{background: "var(--blue)"}}></div><div><div className="ci-role">Enterprise Operations & Information Systems</div><div className="ci-co">Optum Global Solutions International B.V. (UnitedHealth Group)</div></div></div>
        <div className="ci"><div className="ci-dot" style={{background: "var(--muted2)"}}></div><div><div className="ci-role">Computer Science — Information Security</div><div className="ci-co">University of Colorado Denver</div></div></div>
      </div>
      <a href="https://www.linkedin.com/in/naveenack/" target="_blank" rel="noreferrer" className="tc-link">LinkedIn Profile →</a>
    </div>
    </div>

</section>

{/* VALUES */}
<section style={{background: "var(--bg2)"}}>
  <div style={{textAlign: "center", maxWidth: "580px", margin: "0 auto 3rem"}}>
    <div className="eyebrow-text">Operating Principles</div>
    <div className="divider divider-center"></div>
    <h2>What we <span className="accent">believe in.</span></h2>
  </div>
  <div className="grid4">
    <div className="card card-pink-top"><h3>Execution over advice</h3><p>We ship code, close deals, and build products. Our upside is tied to your outcomes — not our hours billed.</p></div>
    <div className="card card-blue-top"><h3>Practitioners who sell</h3><p>Every partner has built, operated, or sold in the markets we work in. Depth is non-negotiable.</p></div>
    <div className="card card-pink-top"><h3>Compliant by design</h3><p>MAS, DIFC/ADGM, and Indian regulatory constraints are built into every deal structure from the start.</p></div>
    <div className="card card-blue-top"><h3>Selective, not scalable</h3><p>We take on a small number of engagements by design. Every founder gets the full attention of the team.</p></div>
  </div>
</section>

<section className="cta-sec">
  <div style={{position: "relative", zIndex: "2"}}>
    <div style={{fontFamily: "var(--ff-b)", fontSize: "0.72rem", fontWeight: "600", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--pink)", marginBottom: "1rem"}}>Work With Us</div>
    <h2>Want to build something <span className="accent">with this team?</span></h2>
    <p>We're selectively taking on new engagements. If you're an early-stage founder or a product company looking for a commercial partner in SEA or the Gulf — let's talk.</p>
    <div className="cta-acts">
      <a href="mailto:hello@codecap.ai" className="bp">Start a Conversation →</a>
      <a href="venture-studio.html" className="bp-pink">Explore the Studio</a>
    </div>
    <p className="cta-note">hello@codecap.ai · Singapore · UAE · India</p>
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
    <div className="f-meta">© 2025 CodeCap Ventures · Singapore · UAE · India · hello@codecap.ai</div>
  </div>
</footer>
    </>
  );
}

export default Team;
