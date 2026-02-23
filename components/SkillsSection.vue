<template>
  <section id="skills">
    <div class="section-inner">
      <div class="section-header scroll-fade">
        <div class="section-label">{{ $t('skills.label') }}</div>
        <h2>{{ $t('skills.title') }}</h2>
      </div>

      <div class="skills-grid">
        <div
          v-for="(card, i) in skillCards"
          :key="card.title"
          class="skill-card scroll-fade"
          :style="{ transitionDelay: `${i * 0.08}s` }"
        >
          <div class="skill-icon">{{ card.icon }}</div>
          <div class="skill-cat">{{ card.cat }}</div>
          <h3>{{ card.title }}</h3>
          <div class="skill-items">
            <span v-for="item in card.items" :key="item" class="skill-item">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()

const skillCards = computed(() => [
  {
    icon: '⚡',
    cat: 'Frontend',
    title: 'JavaScript Frameworks',
    items: ['Vue.js', 'Nuxt.js', 'Ionic', 'Flutter', 'Node.js', 'NestJS'],
  },
  {
    icon: '🐘',
    cat: 'Backend',
    title: 'PHP Frameworks',
    items: ['Laravel', 'Symfony', 'Silex', 'API Platform', 'REST API'],
  },
  {
    icon: '🗄️',
    cat: t('skills.database'),
    title: t('skills.data_infra'),
    items: ['MySQL', 'MongoDB', 'Docker', 'CI/CD', 'Linux', 'Amazon S3'],
  },
  {
    icon: '📱',
    cat: t('skills.mobile'),
    title: t('skills.mobile_platforms'),
    items: ['Flutter', 'Ionic', 'WordPress', 'PrestaShop', 'PWA'],
  },
  {
    icon: '🔧',
    cat: t('skills.languages'),
    title: t('skills.programming'),
    items: ['PHP', 'JavaScript', 'Java', 'C / C++', 'Python', 'CSS'],
  },
  {
    icon: '🎨',
    cat: t('skills.design'),
    title: t('skills.other'),
    items: ['Photoshop', 'Illustrator', 'Premiere Pro', 'UML', 'Merise', 'Active Directory'],
  },
])
</script>

<style scoped>
#skills { background: var(--bg2); }

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.skill-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 1.8rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s, opacity 0.6s, translate 0.6s;
}
.skill-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--glow);
  border-color: rgba(0,229,255,0.25);
}
.skill-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--accent), var(--accent2));
  opacity: 0;
  transition: opacity 0.3s;
}
.skill-card:hover::before { opacity: 1; }

.skill-icon { font-size: 2rem; margin-bottom: 1rem; }
.skill-cat {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: var(--accent);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}
.skill-card h3 { font-size: 1.1rem; margin-bottom: 1rem; font-weight: 600; }

.skill-items { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.skill-item {
  padding: 0.25rem 0.7rem;
  background: var(--bg3);
  border: 1px solid var(--border);
  border-radius: 5px;
  font-size: 0.75rem;
  color: var(--text2);
  font-family: 'JetBrains Mono', monospace;
  transition: all 0.2s;
}
.skill-item:hover { border-color: var(--accent); color: var(--accent); }
</style>
