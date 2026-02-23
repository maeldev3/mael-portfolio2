<template>
  <nav :class="{ scrolled: isScrolled }">
    <NuxtLink to="/" class="nav-logo">ISMAEL<span class="dim">.</span>DEV</NuxtLink>

    <ul class="nav-links" :class="{ open: menuOpen }">
      <li><a href="#skills" @click="menuOpen = false">{{ $t('nav.skills') }}</a></li>
      <li><a href="#experience" @click="menuOpen = false">{{ $t('nav.experience') }}</a></li>
      <li><a href="#education" @click="menuOpen = false">{{ $t('nav.education') }}</a></li>
      <li><a href="#contact" @click="menuOpen = false">{{ $t('nav.contact') }}</a></li>
    </ul>

    <div class="nav-right">
      <!-- Language Switcher -->
      <button
        class="lang-btn"
        :class="{ active: locale === 'fr' }"
        @click="setLocale('fr')"
      >FR</button>
      <button
        class="lang-btn"
        :class="{ active: locale === 'en' }"
        @click="setLocale('en')"
      >EN</button>

      <!-- Theme Toggle -->
      <button class="theme-btn" @click="toggleTheme" :title="isDark ? 'Switch to light' : 'Switch to dark'">
        {{ isDark ? '☀️' : '🌙' }}
      </button>

      <!-- Hamburger -->
      <button class="hamburger" @click="menuOpen = !menuOpen" aria-label="Menu">
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
const { locale, setLocale } = useI18n()
const colorMode = useColorMode()

const menuOpen = ref(false)
const isScrolled = ref(false)

const isDark = computed(() => colorMode.value === 'dark')

function toggleTheme() {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}

function onScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 900;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 3rem;
  transition: background 0.4s, padding 0.3s, backdrop-filter 0.4s;
}
nav.scrolled {
  padding: 0.8rem 3rem;
  background: rgba(8,11,16,0.85);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
}
.light nav.scrolled { background: rgba(240,244,255,0.88); }

.nav-logo {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.5rem;
  letter-spacing: 0.1em;
  color: var(--accent);
  text-decoration: none;
}
.dim { color: var(--text2); }

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}
.nav-links a {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: var(--text2);
  text-decoration: none;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: color 0.2s;
  position: relative;
}
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px; left: 0; right: 0;
  height: 1px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s;
}
.nav-links a:hover { color: var(--accent); }
.nav-links a:hover::after { transform: scaleX(1); }

.nav-right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.lang-btn {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text2);
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  transition: all 0.2s;
}
.lang-btn:hover,
.lang-btn.active {
  border-color: var(--accent);
  color: var(--accent);
}

.theme-btn {
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text2);
  width: 38px; height: 38px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}
.theme-btn:hover { border-color: var(--accent); }

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.hamburger span {
  display: block;
  width: 24px; height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: all 0.3s;
}

@media (max-width: 900px) {
  nav { padding: 1rem 1.5rem; }
  nav.scrolled { padding: 0.8rem 1.5rem; }
  .nav-links {
    display: none;
    position: absolute;
    top: 100%; left: 0; right: 0;
    flex-direction: column;
    background: var(--bg2);
    padding: 1.5rem;
    border-bottom: 1px solid var(--border);
    gap: 1.2rem;
  }
  .nav-links.open { display: flex; }
  .hamburger { display: flex; }
}
</style>
