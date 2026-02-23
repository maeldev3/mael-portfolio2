<template>
  <footer>
    <p>© {{ year }} Rabemiafara Andrianiraisana Ismael — Full Stack Developer — Antananarivo, Madagascar</p>
    <div class="footer-links">
      <a href="mailto:maelrbm3@gmail.com">maelrbm3@gmail.com</a>
      <span class="sep">·</span>
      <a href="https://maelrbmfolio.netlify.app/" target="_blank" rel="noopener">Portfolio</a>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
footer {
  text-align: center;
  padding: 2.5rem 3rem;
  background: var(--bg);
  border-top: 1px solid var(--border);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: var(--text3);
}
.footer-links {
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
}
.footer-links a {
  color: var(--text3);
  text-decoration: none;
  transition: color 0.2s;
}
.footer-links a:hover { color: var(--accent); }
.sep { color: var(--border); }
</style>
