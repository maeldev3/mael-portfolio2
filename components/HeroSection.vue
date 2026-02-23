<template>
  <section id="hero">
    <div class="hero-bg-grid" />
    <div class="hero-orb hero-orb-1" />
    <div class="hero-orb hero-orb-2" />

    <!-- Left content -->
    <div class="hero-content">
      <div class="hero-badge">
        <span class="badge-dot" />
        {{ $t('hero.badge') }}
      </div>

      <h1>
        {{ $t('hero.title1') }}<br>
        <span class="accent-line">{{ $t('hero.title2') }}</span>
      </h1>

      <p class="hero-sub">{{ $t('hero.sub') }}</p>

      <div class="hero-cta">
        <a href="#experience" class="btn-primary">{{ $t('hero.cta_primary') }} →</a>
        <a href="#contact" class="btn-outline">{{ $t('hero.cta_secondary') }}</a>
      </div>
    </div>

    <!-- Right card -->
    <div class="hero-visual">
      <div class="hero-card">
        <div class="hero-avatar-wrap">
          <div class="hero-avatar">RI</div>
          <div class="avatar-ring" />
        </div>
        <div class="card-name">Rabemiafara Ismael</div>
        <div class="card-title">FULL STACK DEVELOPER</div>
        <div class="card-stats">
          <div class="stat-item">
            <div class="stat-num">7+</div>
            <div class="stat-label">{{ $t('hero.years') }}</div>
          </div>
          <div class="stat-item">
            <div class="stat-num">15+</div>
            <div class="stat-label">{{ $t('hero.projects') }}</div>
          </div>
          <div class="stat-item">
            <div class="stat-num">6+</div>
            <div class="stat-label">{{ $t('hero.companies') }}</div>
          </div>
        </div>
        <div class="card-tags">
          <span class="tag">Laravel</span>
          <span class="tag">Vue.js</span>
          <span class="tag purple">Flutter</span>
          <span class="tag purple">NestJS</span>
          <span class="tag amber">Docker</span>
          <span class="tag amber">CI/CD</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No extra logic needed
</script>

<style scoped>
#hero {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 8rem 3rem 4rem;
  position: relative;
  overflow: hidden;
  gap: 3rem;
}

.hero-bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
}

.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}
.hero-orb-1 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(0,229,255,0.12), transparent 70%);
  top: -100px; right: 0;
}
.hero-orb-2 {
  width: 300px; height: 300px;
  background: radial-gradient(circle, rgba(124,58,237,0.12), transparent 70%);
  bottom: 0; left: 30%;
}

/* ── Content ── */
.hero-content {
  position: relative;
  z-index: 2;
  animation: fadeUp 0.9s ease both;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 1rem;
  background: rgba(0,229,255,0.08);
  border: 1px solid rgba(0,229,255,0.2);
  border-radius: 999px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  color: var(--accent);
  letter-spacing: 0.08em;
  margin-bottom: 2rem;
}
.badge-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--accent);
  animation: pulse 2s infinite;
}

h1 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(3.5rem, 7vw, 6.5rem);
  line-height: 0.95;
  letter-spacing: -0.01em;
  margin-bottom: 1.5rem;
}
.accent-line { color: var(--accent); }

.hero-sub {
  font-size: 1.1rem;
  color: var(--text2);
  max-width: 480px;
  margin-bottom: 2.5rem;
  line-height: 1.7;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* ── Visual Card ── */
.hero-visual {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeUp 0.9s 0.2s ease both;
  animation-fill-mode: both;
}

.hero-card {
  background: var(--bg3);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 2.5rem;
  width: 100%;
  max-width: 380px;
  position: relative;
  box-shadow: var(--glow);
  animation: float 6s ease-in-out infinite;
}
.hero-card::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 21px;
  background: linear-gradient(135deg, rgba(0,229,255,0.2), transparent 50%, rgba(124,58,237,0.2));
  z-index: -1;
}

.hero-avatar-wrap {
  position: relative;
  width: 100px; height: 100px;
  margin: 0 auto 1.5rem;
}
.hero-avatar {
  width: 100px; height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.5rem;
  color: #fff;
  letter-spacing: 0.05em;
}
.avatar-ring {
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  border: 2px solid rgba(0,229,255,0.3);
  animation: spin 8s linear infinite;
}
.avatar-ring::after {
  content: '';
  position: absolute;
  top: -3px; left: 50%;
  transform: translateX(-50%);
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--accent);
}

.card-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.4rem;
  letter-spacing: 0.05em;
  text-align: center;
  margin-bottom: 0.25rem;
}
.card-title {
  font-size: 0.8rem;
  color: var(--accent);
  text-align: center;
  letter-spacing: 0.08em;
  font-family: 'JetBrains Mono', monospace;
  margin-bottom: 1.5rem;
}

.card-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}
.stat-item {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 0.8rem 0.5rem;
  text-align: center;
}
.stat-num {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.5rem;
  color: var(--accent);
  line-height: 1;
}
.stat-label {
  font-size: 0.6rem;
  color: var(--text3);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-top: 0.2rem;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  justify-content: center;
}

/* Tags (shared global ones via main.css, local overrides here if needed) */
.tag {
  padding: 0.25rem 0.7rem;
  background: rgba(0,229,255,0.08);
  border: 1px solid rgba(0,229,255,0.15);
  border-radius: 999px;
  font-size: 0.7rem;
  color: var(--accent);
  font-family: 'JetBrains Mono', monospace;
}
.tag.purple { background: rgba(124,58,237,0.08); border-color: rgba(124,58,237,0.2); color: #a78bfa; }
.tag.amber  { background: rgba(245,158,11,0.08);  border-color: rgba(245,158,11,0.2);  color: #fbbf24; }

/* ── Responsive ── */
@media (max-width: 900px) {
  #hero {
    grid-template-columns: 1fr;
    padding: 7rem 1.5rem 3rem;
  }
  .hero-visual { order: -1; }
  h1 { font-size: 3.5rem; }
  .hero-card { padding: 1.5rem; }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes pulse {
  0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(0,229,255,0.4); }
  50%       { opacity: 0.7; box-shadow: 0 0 0 6px rgba(0,229,255,0); }
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-10px); }
}
</style>
