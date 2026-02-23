<template>
  <section id="education">
    <div class="section-inner">
      <div class="section-header scroll-fade">
        <div class="section-label">{{ $t('education.label') }}</div>
        <h2>{{ $t('education.title') }}</h2>
      </div>

      <div class="edu-grid">
        <div
          v-for="(edu, i) in educations"
          :key="i"
          class="edu-card scroll-fade"
          :style="{ transitionDelay: `${i * 0.1}s` }"
        >
          <div class="edu-year">{{ edu.year }}</div>
          <div class="edu-level">{{ edu.level }}</div>
          <h3>{{ edu.title }}</h3>
          <div class="edu-school">{{ edu.school }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()

const educations = computed(() => [
  {
    year: '21',
    level: t('education.master'),
    title: t('education.cs'),
    school: 'Université Antananarivo — Info Centre de la salle',
  },
  {
    year: '18',
    level: t('education.diploma'),
    title: t('education.app_dev'),
    school: 'Athénée Saint Joseph Antsirabe',
  },
  {
    year: '15',
    level: t('education.bac'),
    title: t('education.sciences'),
    school: 'Lycée Arcade Antananarivo',
  },
  {
    year: '—',
    level: 'BEPC',
    title: t('education.brevet'),
    school: 'Saint Joseph Ambatondrazaka',
  },
])
</script>

<style scoped>
#education { background: var(--bg2); }

.edu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.edu-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 1.8rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s, border-color 0.3s;
}
.edu-card:hover {
  transform: translateY(-4px);
  border-color: rgba(124,58,237,0.3);
}

.edu-year {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.5rem;
  color: var(--accent2);
  opacity: 0.3;
  position: absolute;
  top: 1rem; right: 1.5rem;
  line-height: 1;
}
.edu-level {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: var(--accent2);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}
.edu-card h3 { font-size: 1rem; font-weight: 600; margin-bottom: 0.4rem; }
.edu-school { font-size: 0.85rem; color: var(--text2); }
</style>
