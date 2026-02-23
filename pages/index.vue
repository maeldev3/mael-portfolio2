<template>
  <div>
    <HeroSection />
    <SkillsSection />
    <ExperienceSection />
    <EducationSection />
    <LanguagesSection />
    <ContactSection />
  </div>
</template>

<script setup>
// i18n SEO head
const { t } = useI18n()

useHead({
  title: 'Ismael Rabemiafara — Full Stack Developer',
  meta: [
    { name: 'description', content: t('hero.sub') },
  ],
})

// Activate scroll animations
useScrollObserver('.scroll-fade')
</script>
