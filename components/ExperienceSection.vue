<template>
  <section id="experience">
    <div class="section-inner">
      <div class="section-header scroll-fade">
        <div class="section-label">{{ $t('experience.label') }}</div>
        <h2>{{ $t('experience.title') }}</h2>
      </div>

      <div class="timeline">
        <div
          v-for="(exp, i) in experiences"
          :key="i"
          class="timeline-item scroll-fade"
          :style="{ transitionDelay: `${i * 0.12}s` }"
        >
          <div class="timeline-dot" />
          <div class="exp-card">
            <div class="exp-header">
              <div class="exp-meta">
                <div class="exp-company">{{ exp.company }}</div>
                <div class="exp-role">{{ exp.role }}</div>
              </div>
              <span class="exp-period">{{ exp.period }}</span>
            </div>
            <div class="exp-tech">
              <span v-for="tech in exp.tech" :key="tech.label" class="tag" :class="tech.color">
                {{ tech.label }}
              </span>
            </div>
            <ul class="exp-projects">
              <li v-for="proj in exp.projects" :key="proj.name">
                <span class="project-name">{{ proj.name }} —</span>
                {{ proj.desc }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()

const experiences = computed(() => [
  {
    company: 'MG Consulting',
    role: t('experience.lead_dev'),
    period: 'Oct 2024 – Nov 2025',
    tech: [
      { label: 'Laravel', color: '' },
      { label: 'Vue.js', color: '' },
      { label: 'Nuxt.js', color: '' },
      { label: 'Docker', color: 'amber' },
      { label: 'CI/CD', color: 'amber' },
      { label: 'Zoho Sign API', color: 'purple' },
    ],
    projects: [
      { name: 'Feed Connect', desc: t('experience.feed_desc') },
      { name: 'Souper des Nurses', desc: t('experience.nurses_desc') },
    ],
  },
  {
    company: 'Fibonacci',
    role: t('experience.lead_mobile'),
    period: 'Mar 2024 – Sep 2024',
    tech: [
      { label: 'Flutter', color: 'purple' },
      { label: 'Laravel', color: '' },
      { label: 'Nuxt.js', color: '' },
    ],
    projects: [
      { name: 'Voomgle (automotos)', desc: t('experience.voomgle_desc') },
    ],
  },
  {
    company: 'Constellation',
    role: t('experience.fullstack_js'),
    period: 'Oct 2023 – Fév 2024',
    tech: [
      { label: 'NestJS', color: '' },
      { label: 'Nuxt.js', color: '' },
      { label: 'MongoDB', color: 'purple' },
      { label: 'Amazon S3', color: 'amber' },
    ],
    projects: [
      { name: 'Centralcare (ostie.mg)', desc: t('experience.centralcare_desc') },
      { name: 'Twifone', desc: t('experience.twifone_desc') },
      { name: 'Affilie (ostie.mg)', desc: t('experience.affilie_desc') },
    ],
  },
  {
    company: t('experience.freelance'),
    role: t('experience.fullstack'),
    period: 'Oct 2022 – Mar 2023',
    tech: [
      { label: 'Laravel 9', color: '' },
      { label: 'Nuxt.js', color: '' },
      { label: 'Vue.js', color: '' },
    ],
    projects: [
      { name: 'Soxim (soxim.fr)', desc: t('experience.soxim_desc') },
      { name: 'Pezane Marketplace', desc: t('experience.pezane_desc') },
    ],
  },
  {
    company: 'mkweblinks',
    role: t('experience.android_web'),
    period: 'Mai 2021 – Sep 2022',
    tech: [
      { label: 'Ionic', color: 'purple' },
      { label: 'Laravel 8', color: '' },
      { label: 'Vue.js', color: '' },
    ],
    projects: [
      { name: 'ShareMyHobbies', desc: t('experience.sharemyhobbies_desc') },
    ],
  },
])
</script>

<style scoped>
.timeline {
  position: relative;
  padding-left: 2rem;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 1px;
  background: linear-gradient(to bottom, var(--accent), var(--accent2), transparent);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  padding-left: 2rem;
}

.timeline-dot {
  position: absolute;
  left: -2.45rem;
  top: 0.5rem;
  width: 14px; height: 14px;
  border-radius: 50%;
  background: var(--accent);
  border: 3px solid var(--bg);
  box-shadow: 0 0 12px rgba(0,229,255,0.5);
}

.exp-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
  transition: border-color 0.3s;
}
.exp-card:hover { border-color: rgba(0,229,255,0.2); }

.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
}

.exp-company {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: var(--accent);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.25rem;
}
.exp-role { font-size: 1.1rem; font-weight: 600; }

.exp-period {
  display: inline-block;
  padding: 0.25rem 0.8rem;
  background: rgba(245,158,11,0.1);
  border: 1px solid rgba(245,158,11,0.2);
  border-radius: 999px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: var(--accent3);
  white-space: nowrap;
}

.exp-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1rem;
}

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

.exp-projects { list-style: none; }
.exp-projects li {
  padding: 0.5rem 0;
  padding-left: 1.2rem;
  position: relative;
  font-size: 0.9rem;
  color: var(--text2);
  border-bottom: 1px solid var(--border);
}
.exp-projects li:last-child { border-bottom: none; }
.exp-projects li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--accent);
}
.project-name { color: var(--text); font-weight: 500; }
</style>
