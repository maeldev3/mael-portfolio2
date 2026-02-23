<template>
  <section id="languages">
    <div class="section-inner">
      <div class="section-header scroll-fade">
        <div class="section-label">{{ $t('languages.label') }}</div>
        <h2>{{ $t('languages.title') }}</h2>
      </div>

      <div class="lang-grid">
        <div
          v-for="(lang, i) in languages"
          :key="lang.name"
          class="lang-card scroll-fade"
          :style="{ transitionDelay: `${i * 0.1}s` }"
        >
          <div class="lang-flag">{{ lang.flag }}</div>
          <div class="lang-name">{{ lang.name }}</div>
          <div class="lang-level">{{ lang.level }}</div>
          <div class="lang-bar">
            <div class="lang-bar-fill" :style="{ width: lang.percent + '%' }" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()

const languages = computed(() => [
  { flag: '🇫🇷', name: 'Français',  level: t('languages.fr_level'), percent: 95 },
  { flag: '🇬🇧', name: 'English',   level: t('languages.en_level'), percent: 65 },
  { flag: '🇮🇹', name: 'Italiano',  level: t('languages.it_level'), percent: 30 },
  { flag: '🇲🇬', name: 'Malagasy',  level: t('languages.mg_level'), percent: 100 },
])
</script>

<style scoped>
.lang-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.lang-card {
  flex: 1;
  min-width: 200px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s, border-color 0.3s;
}
.lang-card:hover {
  transform: translateY(-4px);
  border-color: rgba(0,229,255,0.2);
}

.lang-flag { font-size: 2.5rem; margin-bottom: 1rem; }
.lang-name { font-size: 1.1rem; font-weight: 600; margin-bottom: 0.4rem; }
.lang-level {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  color: var(--accent);
  letter-spacing: 0.08em;
}

.lang-bar {
  height: 3px;
  background: var(--border);
  border-radius: 2px;
  margin-top: 1rem;
  overflow: hidden;
}
.lang-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--accent2));
  border-radius: 2px;
  transition: width 1s 0.3s ease;
}
</style>
