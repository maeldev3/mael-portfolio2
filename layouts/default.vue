<template>
  <div :class="colorMode.value">
    <!-- Scroll Progress Bar -->
    <div class="scroll-indicator" :style="{ width: scrollProgress + '%' }" />

    <!-- Navigation -->
    <AppNav />

    <!-- Page Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
const colorMode = useColorMode()

const scrollProgress = ref(0)

function updateScroll() {
  const scrolled = window.scrollY
  const total = document.body.scrollHeight - window.innerHeight
  scrollProgress.value = total > 0 ? (scrolled / total) * 100 : 0
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
})
</script>

<style scoped>
.scroll-indicator {
  position: fixed;
  top: 0; left: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent), var(--accent2));
  z-index: 9999;
  transition: width 0.1s linear;
}
</style>
