# 🚀 Portfolio Ismael — Nuxt 3

Portfolio professionnel de Rabemiafara Andrianiraisana Ismael, développé avec **Nuxt 3**.

## ✨ Fonctionnalités

- 🌙 **Dark / Light mode** — via `@nuxtjs/color-mode`
- 🌍 **Bilingue FR / EN** — via `@nuxtjs/i18n`
- 📱 **Responsive** — mobile-first
- ⚡ **Animations** — scroll-triggered, hover effects, floating card
- 🎨 **Design premium** — Bebas Neue, DM Sans, JetBrains Mono

## 📁 Structure

```
portfolio-ismael/
├── app.vue                        # Root app
├── nuxt.config.ts                 # Config Nuxt (modules, i18n, colorMode)
├── pages/
│   └── index.vue                  # Page principale
├── layouts/
│   └── default.vue                # Layout (nav + footer + scroll bar)
├── components/
│   ├── AppNav.vue                 # Navbar
│   ├── AppFooter.vue              # Footer
│   ├── HeroSection.vue            # Section Hero
│   ├── SkillsSection.vue          # Section Compétences
│   ├── ExperienceSection.vue      # Section Expérience
│   ├── EducationSection.vue       # Section Formation
│   ├── LanguagesSection.vue       # Section Langues
│   └── ContactSection.vue         # Section Contact
├── composables/
│   └── useScrollObserver.ts       # Scroll animation helper
├── assets/
│   └── css/
│       └── main.css               # Variables CSS globales + reset
└── locales/
    ├── fr.json                    # Traductions français
    └── en.json                    # Traductions anglais
```

## 🛠️ Installation & Démarrage

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer en développement
npm run dev
# → http://localhost:3000

# 3. Build pour production
npm run build

# 4. Générer le site statique (SSG)
npm run generate
```

## 🌐 Déploiement

### Netlify (recommandé)
1. Push le code sur GitHub
2. Connecter le repo sur [netlify.com](https://netlify.com)
3. Build command : `npm run generate`
4. Publish directory : `.output/public`

### Vercel
1. Importer le repo sur [vercel.com](https://vercel.com)
2. Framework preset : **Nuxt.js**
3. Build command : `npm run build`

## 🎨 Personnalisation

### Couleurs (assets/css/main.css)
```css
:root {
  --accent:  #00e5ff;   /* Cyan principal */
  --accent2: #7c3aed;   /* Violet */
  --accent3: #f59e0b;   /* Ambre */
}
```

### Ajouter une langue
1. Créer `locales/it.json` (par exemple)
2. Ajouter dans `nuxt.config.ts` :
```ts
{ code: 'it', name: 'Italiano', file: 'it.json' }
```
3. Ajouter un bouton dans `AppNav.vue`

## 📧 Contact

- Email : maelrbm3@gmail.com
- WhatsApp : +261 34 689 5851
- Portfolio : https://maelrbmfolio.netlify.app/
