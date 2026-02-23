<template>
  <section id="contact">
    <div class="section-inner">
      <div class="contact-wrap">
        <!-- Left Info -->
        <div class="contact-info scroll-fade">
          <div class="section-label">{{ $t('contact.label') }}</div>
          <h2>{{ $t('contact.title') }}</h2>
          <p>{{ $t('contact.description') }}</p>

          <div class="contact-links">
            <a href="mailto:maelrbm3@gmail.com" class="contact-link">
              <div class="contact-link-icon">📧</div>
              <div>
                <div class="contact-link-label">Email</div>
                <div class="contact-link-text">maelrbm3@gmail.com</div>
              </div>
            </a>

            <a href="https://wa.me/261346895851" target="_blank" rel="noopener" class="contact-link">
              <div class="contact-link-icon">💬</div>
              <div>
                <div class="contact-link-label">WhatsApp</div>
                <div class="contact-link-text">+261 34 689 5851</div>
              </div>
            </a>

            <a href="https://maelrbmfolio.netlify.app/" target="_blank" rel="noopener" class="contact-link">
              <div class="contact-link-icon">🌐</div>
              <div>
                <div class="contact-link-label">Portfolio</div>
                <div class="contact-link-text">maelrbmfolio.netlify.app</div>
              </div>
            </a>

            <div class="contact-link static">
              <div class="contact-link-icon">📍</div>
              <div>
                <div class="contact-link-label">{{ $t('contact.location_label') }}</div>
                <div class="contact-link-text">Akadindramamy, Antananarivo, Madagascar</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right CTA Card -->
        <div class="cta-card scroll-fade">
          <div class="cta-inner">
            <h3>{{ $t('contact.cta_title') }}</h3>
            <p>{{ $t('contact.cta_desc') }}</p>
            <a href="mailto:maelrbm3@gmail.com" class="btn-primary">
              {{ $t('contact.cta_btn') }} →
            </a>
            <div class="cta-stats">
              <div class="cta-stat">
                <div class="cta-num">7+</div>
                <div class="cta-label">{{ $t('contact.years_label') }}</div>
              </div>
              <div class="cta-stat">
                <div class="cta-num" style="color:var(--accent2)">15+</div>
                <div class="cta-label">{{ $t('contact.projects_label') }}</div>
              </div>
              <div class="cta-stat">
                <div class="cta-num" style="color:var(--accent3)">3</div>
                <div class="cta-label">{{ $t('contact.languages_label') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No extra logic
</script>

<style scoped>
#contact { background: var(--bg2); }

.contact-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.contact-info h2 { margin-bottom: 1rem; }
.contact-info p {
  color: var(--text2);
  margin-bottom: 2rem;
  font-size: 1rem;
  line-height: 1.7;
}

.contact-links { display: flex; flex-direction: column; gap: 1rem; }

.contact-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.2rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  text-decoration: none;
  color: var(--text);
  transition: all 0.2s;
}
.contact-link:not(.static):hover {
  border-color: var(--accent);
  color: var(--accent);
  transform: translateX(4px);
}
.contact-link.static { cursor: default; }

.contact-link-icon {
  width: 40px; height: 40px;
  background: rgba(0,229,255,0.08);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
}
.contact-link-label {
  font-size: 0.7rem;
  color: var(--text3);
  font-family: 'JetBrains Mono', monospace;
}
.contact-link-text { font-size: 0.9rem; }

/* CTA card */
.cta-card {
  background: linear-gradient(135deg, rgba(0,229,255,0.08), rgba(124,58,237,0.08));
  border: 1px solid rgba(0,229,255,0.18);
  border-radius: 20px;
  padding: 3rem;
  position: relative;
  overflow: hidden;
}
.cta-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0,229,255,0.03), rgba(124,58,237,0.03));
}
.cta-inner { position: relative; text-align: center; }
.cta-inner h3 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2rem;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}
.cta-inner p { color: var(--text2); margin-bottom: 2rem; }

.btn-primary {
  padding: 0.9rem 2rem;
  background: var(--accent);
  color: #000;
  font-weight: 700;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 0.04em;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,229,255,0.3); }

.cta-stats {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}
.cta-stat { text-align: center; }
.cta-num {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2rem;
  color: var(--accent);
  line-height: 1;
}
.cta-label {
  font-size: 0.65rem;
  color: var(--text3);
  font-family: 'JetBrains Mono', monospace;
  margin-top: 0.2rem;
}

@media (max-width: 900px) {
  .contact-wrap { grid-template-columns: 1fr; gap: 2rem; }
}
</style>
