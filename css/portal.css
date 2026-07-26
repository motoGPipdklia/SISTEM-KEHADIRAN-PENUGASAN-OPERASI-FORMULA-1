/* ================================================================
   SKPO — PORTAL OPERASI
   Tema premium karbon hitam, MotoGP biru dan Formula 1 merah
================================================================ */

:root {
  color-scheme: dark;
  --bg: #07090c;
  --surface: #10141a;
  --surface-soft: #151a21;
  --line: rgba(255, 255, 255, 0.1);
  --text: #f5f7fa;
  --muted: #a9b0bb;
  --motogp: #1677ff;
  --motogp-bright: #5ba3ff;
  --f1: #ef1b2d;
  --f1-bright: #ff5b68;
  --focus: #ffffff;
  --page-width: 1180px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  min-height: 100%;
  scroll-behavior: smooth;
  background: var(--bg);
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
}

body {
  min-width: 320px;
  min-height: 100vh;
  margin: 0;
  overflow-x: hidden;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.018) 25%, transparent 25%) 0 0 / 10px 10px,
    linear-gradient(315deg, rgba(255, 255, 255, 0.018) 25%, transparent 25%) 0 0 / 10px 10px,
    radial-gradient(circle at 50% -15%, #242b35 0, #0b0e13 34%, #07090c 72%);
  color: var(--text);
  font-family: Inter, "Segoe UI", Arial, Helvetica, sans-serif;
  line-height: 1.5;
}

body::before {
  position: fixed;
  z-index: -1;
  inset: 0;
  background:
    linear-gradient(90deg, transparent 49.8%, rgba(255, 255, 255, 0.025) 50%, transparent 50.2%),
    linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px);
  background-size: 100% 100%, 100% 90px;
  content: "";
  pointer-events: none;
}

a {
  color: inherit;
}

.skip-link {
  position: fixed;
  z-index: 100;
  top: 12px;
  left: 12px;
  padding: 10px 14px;
  border-radius: 7px;
  background: #fff;
  color: #07090c;
  font-weight: 800;
  text-decoration: none;
  transform: translateY(-150%);
  transition: transform 0.2s ease;
}

.skip-link:focus {
  transform: translateY(0);
}

.ambient {
  position: fixed;
  z-index: -1;
  width: 460px;
  height: 460px;
  border-radius: 50%;
  opacity: 0.1;
  filter: blur(100px);
  pointer-events: none;
}

.ambient-one {
  top: 25%;
  left: -300px;
  background: var(--motogp);
}

.ambient-two {
  top: 18%;
  right: -300px;
  background: var(--f1);
}

.site-header,
.site-footer,
.portal-main {
  width: min(calc(100% - 40px), var(--page-width));
  margin-inline: auto;
}

.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 92px;
  border-bottom: 1px solid var(--line);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 13px;
  text-decoration: none;
}

.brand-mark {
  display: grid;
  width: 47px;
  height: 47px;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 12px;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.14), transparent),
    #11151b;
  box-shadow: inset 0 0 18px rgba(255, 255, 255, 0.04), 0 10px 25px rgba(0, 0, 0, 0.35);
  transform: rotate(45deg);
}

.brand-mark span {
  font-size: 23px;
  font-weight: 900;
  transform: rotate(-45deg);
}

.brand-copy {
  display: flex;
  flex-direction: column;
  line-height: 1.15;
}

.brand-copy strong {
  font-size: 23px;
  letter-spacing: 0.18em;
}

.brand-copy small {
  margin-top: 5px;
  color: var(--muted);
  font-size: 11px;
  letter-spacing: 0.06em;
}

.portal-status,
.operation-state {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #c7ccd3;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.16em;
}

.status-dot,
.state-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #35d07f;
  box-shadow: 0 0 12px rgba(53, 208, 127, 0.8);
}

.portal-main {
  display: flex;
  min-height: calc(100vh - 174px);
  flex-direction: column;
  justify-content: center;
  padding: 60px 0 50px;
}

.hero {
  max-width: 720px;
  margin: 0 auto 42px;
  text-align: center;
}

.eyebrow {
  margin: 0 0 13px;
  color: #bec5ce;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.32em;
}

.hero h1 {
  margin: 0;
  font-size: clamp(38px, 6vw, 70px);
  font-weight: 850;
  letter-spacing: -0.055em;
  line-height: 1;
  text-wrap: balance;
}

.hero-description {
  max-width: 590px;
  margin: 20px auto 0;
  color: var(--muted);
  font-size: clamp(15px, 2vw, 17px);
  text-wrap: balance;
}

.operation-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.operation-card {
  --accent: var(--motogp);
  --accent-bright: var(--motogp-bright);
  position: relative;
  isolation: isolate;
  display: flex;
  min-height: 390px;
  overflow: hidden;
  flex-direction: column;
  padding: 28px;
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 22px;
  outline: none;
  background:
    linear-gradient(150deg, rgba(255, 255, 255, 0.08), transparent 35%),
    linear-gradient(180deg, #151a21 0%, #0c0f14 100%);
  box-shadow: 0 24px 65px rgba(0, 0, 0, 0.42);
  color: var(--text);
  text-decoration: none;
  transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
}

.operation-card::before {
  position: absolute;
  z-index: -1;
  inset: 0;
  border-top: 3px solid var(--accent);
  border-radius: inherit;
  background:
    linear-gradient(115deg, transparent 0 60%, color-mix(in srgb, var(--accent) 8%, transparent)),
    repeating-linear-gradient(135deg, transparent 0 20px, rgba(255, 255, 255, 0.014) 21px 22px);
  content: "";
}

.operation-card::after {
  position: absolute;
  z-index: -1;
  right: -70px;
  bottom: -100px;
  width: 260px;
  height: 260px;
  border: 38px solid rgba(255, 255, 255, 0.025);
  border-radius: 50%;
  content: "";
}

.f1-card {
  --accent: var(--f1);
  --accent-bright: var(--f1-bright);
}

.operation-card:hover,
.operation-card:focus-visible {
  border-color: color-mix(in srgb, var(--accent) 68%, white);
  box-shadow:
    0 30px 80px rgba(0, 0, 0, 0.52),
    0 0 35px color-mix(in srgb, var(--accent) 18%, transparent);
  transform: translateY(-7px);
}

.operation-card:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 4px;
}

.card-glow {
  position: absolute;
  z-index: -1;
  top: 60px;
  right: -60px;
  width: 230px;
  height: 230px;
  border-radius: 50%;
  background: var(--accent);
  opacity: 0.1;
  filter: blur(70px);
  transition: opacity 0.25s ease;
}

.operation-card:hover .card-glow,
.operation-card:focus-visible .card-glow {
  opacity: 0.22;
}

.card-topline {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.operation-code {
  color: rgba(255, 255, 255, 0.28);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.18em;
}

.vehicle-icon {
  position: relative;
  display: block;
  width: 185px;
  height: 90px;
  margin: 38px 0 20px;
  filter: drop-shadow(0 13px 18px rgba(0, 0, 0, 0.5));
}

.bike-wheel {
  position: absolute;
  bottom: 8px;
  width: 48px;
  height: 48px;
  border: 8px solid #252b34;
  border-radius: 50%;
  box-shadow: inset 0 0 0 2px #68717d;
}

.bike-wheel-left { left: 14px; }
.bike-wheel-right { right: 10px; }

.bike-body {
  position: absolute;
  bottom: 30px;
  left: 48px;
  width: 92px;
  height: 23px;
  border-radius: 65% 25% 45% 30%;
  background: linear-gradient(90deg, var(--accent), var(--accent-bright));
  transform: skewX(-19deg);
}

.bike-body::after {
  position: absolute;
  top: -7px;
  right: -19px;
  width: 41px;
  height: 10px;
  border-radius: 8px;
  background: #dce5ef;
  content: "";
  transform: rotate(-12deg);
}

.bike-rider {
  position: absolute;
  top: 17px;
  left: 87px;
  width: 39px;
  height: 30px;
  border-radius: 55% 55% 30% 20%;
  background: #dde4ec;
  transform: rotate(20deg);
}

.bike-rider::before {
  position: absolute;
  top: -15px;
  left: 4px;
  width: 22px;
  height: 22px;
  border: 4px solid var(--accent);
  border-radius: 50%;
  background: #11151b;
  content: "";
}

.car-icon {
  width: 205px;
}

.car-body {
  position: absolute;
  bottom: 25px;
  left: 17px;
  width: 170px;
  height: 28px;
  border-radius: 55% 45% 10px 12px;
  background: linear-gradient(90deg, var(--accent), var(--accent-bright));
  transform: skewX(-14deg);
}

.car-body::after {
  position: absolute;
  top: 18px;
  left: -14px;
  width: 203px;
  height: 9px;
  border-radius: 5px;
  background: #dce5ef;
  content: "";
}

.car-cockpit {
  position: absolute;
  top: 26px;
  left: 82px;
  width: 50px;
  height: 27px;
  border-radius: 70% 70% 15% 15%;
  background: #262d37;
  border-top: 5px solid var(--accent-bright);
}

.car-wing {
  position: absolute;
  top: 30px;
  left: 3px;
  width: 41px;
  height: 8px;
  border-radius: 3px;
  background: #dce5ef;
  transform: rotate(-5deg);
}

.car-wheel {
  position: absolute;
  bottom: 6px;
  z-index: 2;
  width: 37px;
  height: 37px;
  border: 7px solid #252b34;
  border-radius: 50%;
  background: #0a0c0f;
  box-shadow: inset 0 0 0 2px #68717d;
}

.car-wheel-left { left: 32px; }
.car-wheel-right { right: 18px; }

.card-content {
  display: flex;
  flex-direction: column;
}

.card-kicker {
  color: var(--accent-bright);
  font-size: 11px;
  font-weight: 850;
  letter-spacing: 0.22em;
}

.card-title {
  margin-top: 4px;
  font-size: clamp(35px, 5vw, 53px);
  font-weight: 900;
  letter-spacing: -0.045em;
  line-height: 1.05;
}

.card-location {
  margin-top: 7px;
  color: var(--muted);
  font-size: 14px;
}

.card-action {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 23px;
  border-top: 1px solid var(--line);
  color: #e9edf2;
  font-size: 12px;
  font-weight: 850;
  letter-spacing: 0.13em;
}

.arrow {
  display: grid;
  width: 37px;
  height: 37px;
  place-items: center;
  border: 1px solid color-mix(in srgb, var(--accent) 65%, white);
  border-radius: 50%;
  background: color-mix(in srgb, var(--accent) 17%, transparent);
  color: var(--accent-bright);
  font-size: 20px;
  transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;
}

.operation-card:hover .arrow,
.operation-card:focus-visible .arrow {
  background: var(--accent);
  color: #fff;
  transform: translateX(3px);
}

.security-note {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  margin: 27px 0 0;
  color: #858d98;
  font-size: 12px;
  text-align: center;
}

.lock-icon {
  position: relative;
  width: 11px;
  height: 9px;
  border-radius: 2px;
  background: #7e8792;
}

.lock-icon::before {
  position: absolute;
  top: -6px;
  left: 2px;
  width: 7px;
  height: 7px;
  border: 2px solid #7e8792;
  border-bottom: 0;
  border-radius: 7px 7px 0 0;
  content: "";
}

.site-footer {
  display: flex;
  min-height: 82px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border-top: 1px solid var(--line);
  color: #707883;
  font-size: 11px;
}

.site-footer p {
  margin: 0;
}

.footer-tagline {
  letter-spacing: 0.15em;
}

.noscript-note {
  position: fixed;
  z-index: 20;
  right: 15px;
  bottom: 15px;
  left: 15px;
  padding: 12px;
  border: 1px solid #79601d;
  border-radius: 8px;
  background: #3b3014;
  color: #ffe29a;
  text-align: center;
}

@media (max-width: 760px) {
  .site-header,
  .site-footer,
  .portal-main {
    width: min(calc(100% - 28px), var(--page-width));
  }

  .site-header {
    min-height: 78px;
  }

  .brand-copy small,
  .portal-status {
    display: none;
  }

  .portal-main {
    min-height: auto;
    padding: 48px 0 38px;
  }

  .hero {
    margin-bottom: 30px;
  }

  .hero-description {
    margin-top: 16px;
  }

  .operation-grid {
    grid-template-columns: 1fr;
    gap: 17px;
  }

  .operation-card {
    min-height: 350px;
    padding: 23px;
    border-radius: 18px;
  }

  .vehicle-icon {
    margin-top: 27px;
    margin-bottom: 15px;
    transform: scale(0.88);
    transform-origin: left center;
  }

  .operation-card:hover {
    transform: none;
  }

  .site-footer {
    min-height: 92px;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
}

@media (max-width: 390px) {
  .operation-state {
    font-size: 9px;
    letter-spacing: 0.1em;
  }

  .operation-card {
    min-height: 335px;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}

@media (prefers-contrast: more) {
  .operation-card {
    border-color: rgba(255, 255, 255, 0.55);
  }

  .hero-description,
  .card-location,
  .security-note {
    color: #d3d7dc;
  }
}
