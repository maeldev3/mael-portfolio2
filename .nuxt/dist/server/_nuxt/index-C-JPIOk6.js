import { mergeProps, useSSRContext, computed, unref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc, a as useI18n, u as useHead } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/home/lala/Downloads/claude caude/recent/portfolio-ismael/node_modules/hookable/dist/index.mjs";
import "/home/lala/Downloads/claude caude/recent/portfolio-ismael/node_modules/unctx/dist/index.mjs";
import "/home/lala/Downloads/claude caude/recent/portfolio-ismael/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/home/lala/Downloads/claude caude/recent/portfolio-ismael/node_modules/radix3/dist/index.mjs";
import "/home/lala/Downloads/claude caude/recent/portfolio-ismael/node_modules/defu/dist/defu.mjs";
import "/home/lala/Downloads/claude caude/recent/portfolio-ismael/node_modules/cookie-es/dist/index.mjs";
import "/home/lala/Downloads/claude caude/recent/portfolio-ismael/node_modules/destr/dist/index.mjs";
import "/home/lala/Downloads/claude caude/recent/portfolio-ismael/node_modules/ohash/dist/index.mjs";
import "/home/lala/Downloads/claude caude/recent/portfolio-ismael/node_modules/klona/dist/index.mjs";
import "@vue/devtools-api";
import "/home/lala/Downloads/claude caude/recent/portfolio-ismael/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$6 = {
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "hero" }, _attrs))} data-v-b65adc8c><div class="hero-bg-grid" data-v-b65adc8c></div><div class="hero-orb hero-orb-1" data-v-b65adc8c></div><div class="hero-orb hero-orb-2" data-v-b65adc8c></div><div class="hero-content" data-v-b65adc8c><div class="hero-badge" data-v-b65adc8c><span class="badge-dot" data-v-b65adc8c></span> ${ssrInterpolate(_ctx.$t("hero.badge"))}</div><h1 data-v-b65adc8c>${ssrInterpolate(_ctx.$t("hero.title1"))}<br data-v-b65adc8c><span class="accent-line" data-v-b65adc8c>${ssrInterpolate(_ctx.$t("hero.title2"))}</span></h1><p class="hero-sub" data-v-b65adc8c>${ssrInterpolate(_ctx.$t("hero.sub"))}</p><div class="hero-cta" data-v-b65adc8c><a href="#experience" class="btn-primary" data-v-b65adc8c>${ssrInterpolate(_ctx.$t("hero.cta_primary"))} →</a><a href="#contact" class="btn-outline" data-v-b65adc8c>${ssrInterpolate(_ctx.$t("hero.cta_secondary"))}</a></div></div><div class="hero-visual" data-v-b65adc8c><div class="hero-card" data-v-b65adc8c><div class="hero-avatar-wrap" data-v-b65adc8c><div class="hero-avatar" data-v-b65adc8c>RI</div><div class="avatar-ring" data-v-b65adc8c></div></div><div class="card-name" data-v-b65adc8c>Rabemiafara Ismael</div><div class="card-title" data-v-b65adc8c>FULL STACK DEVELOPER</div><div class="card-stats" data-v-b65adc8c><div class="stat-item" data-v-b65adc8c><div class="stat-num" data-v-b65adc8c>7+</div><div class="stat-label" data-v-b65adc8c>${ssrInterpolate(_ctx.$t("hero.years"))}</div></div><div class="stat-item" data-v-b65adc8c><div class="stat-num" data-v-b65adc8c>15+</div><div class="stat-label" data-v-b65adc8c>${ssrInterpolate(_ctx.$t("hero.projects"))}</div></div><div class="stat-item" data-v-b65adc8c><div class="stat-num" data-v-b65adc8c>6+</div><div class="stat-label" data-v-b65adc8c>${ssrInterpolate(_ctx.$t("hero.companies"))}</div></div></div><div class="card-tags" data-v-b65adc8c><span class="tag" data-v-b65adc8c>Laravel</span><span class="tag" data-v-b65adc8c>Vue.js</span><span class="tag purple" data-v-b65adc8c>Flutter</span><span class="tag purple" data-v-b65adc8c>NestJS</span><span class="tag amber" data-v-b65adc8c>Docker</span><span class="tag amber" data-v-b65adc8c>CI/CD</span></div></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-b65adc8c"]]);
const _sfc_main$5 = {
  __name: "SkillsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const skillCards = computed(() => [
      {
        icon: "⚡",
        cat: "Frontend",
        title: "JavaScript Frameworks",
        items: ["Vue.js", "Nuxt.js", "Ionic", "Flutter", "Node.js", "NestJS"]
      },
      {
        icon: "🐘",
        cat: "Backend",
        title: "PHP Frameworks",
        items: ["Laravel", "Symfony", "Silex", "API Platform", "REST API"]
      },
      {
        icon: "🗄️",
        cat: t("skills.database"),
        title: t("skills.data_infra"),
        items: ["MySQL", "MongoDB", "Docker", "CI/CD", "Linux", "Amazon S3"]
      },
      {
        icon: "📱",
        cat: t("skills.mobile"),
        title: t("skills.mobile_platforms"),
        items: ["Flutter", "Ionic", "WordPress", "PrestaShop", "PWA"]
      },
      {
        icon: "🔧",
        cat: t("skills.languages"),
        title: t("skills.programming"),
        items: ["PHP", "JavaScript", "Java", "C / C++", "Python", "CSS"]
      },
      {
        icon: "🎨",
        cat: t("skills.design"),
        title: t("skills.other"),
        items: ["Photoshop", "Illustrator", "Premiere Pro", "UML", "Merise", "Active Directory"]
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "skills" }, _attrs))} data-v-6ff15ff4><div class="section-inner" data-v-6ff15ff4><div class="section-header scroll-fade" data-v-6ff15ff4><div class="section-label" data-v-6ff15ff4>${ssrInterpolate(_ctx.$t("skills.label"))}</div><h2 data-v-6ff15ff4>${ssrInterpolate(_ctx.$t("skills.title"))}</h2></div><div class="skills-grid" data-v-6ff15ff4><!--[-->`);
      ssrRenderList(unref(skillCards), (card, i) => {
        _push(`<div class="skill-card scroll-fade" style="${ssrRenderStyle({ transitionDelay: `${i * 0.08}s` })}" data-v-6ff15ff4><div class="skill-icon" data-v-6ff15ff4>${ssrInterpolate(card.icon)}</div><div class="skill-cat" data-v-6ff15ff4>${ssrInterpolate(card.cat)}</div><h3 data-v-6ff15ff4>${ssrInterpolate(card.title)}</h3><div class="skill-items" data-v-6ff15ff4><!--[-->`);
        ssrRenderList(card.items, (item) => {
          _push(`<span class="skill-item" data-v-6ff15ff4>${ssrInterpolate(item)}</span>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SkillsSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-6ff15ff4"]]);
const _sfc_main$4 = {
  __name: "ExperienceSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const experiences = computed(() => [
      {
        company: "MG Consulting",
        role: t("experience.lead_dev"),
        period: "Oct 2024 – Nov 2025",
        tech: [
          { label: "Laravel", color: "" },
          { label: "Vue.js", color: "" },
          { label: "Nuxt.js", color: "" },
          { label: "Docker", color: "amber" },
          { label: "CI/CD", color: "amber" },
          { label: "Zoho Sign API", color: "purple" }
        ],
        projects: [
          { name: "Feed Connect", desc: t("experience.feed_desc") },
          { name: "Souper des Nurses", desc: t("experience.nurses_desc") }
        ]
      },
      {
        company: "Fibonacci",
        role: t("experience.lead_mobile"),
        period: "Mar 2024 – Sep 2024",
        tech: [
          { label: "Flutter", color: "purple" },
          { label: "Laravel", color: "" },
          { label: "Nuxt.js", color: "" }
        ],
        projects: [
          { name: "Voomgle (automotos)", desc: t("experience.voomgle_desc") }
        ]
      },
      {
        company: "Constellation",
        role: t("experience.fullstack_js"),
        period: "Oct 2023 – Fév 2024",
        tech: [
          { label: "NestJS", color: "" },
          { label: "Nuxt.js", color: "" },
          { label: "MongoDB", color: "purple" },
          { label: "Amazon S3", color: "amber" }
        ],
        projects: [
          { name: "Centralcare (ostie.mg)", desc: t("experience.centralcare_desc") },
          { name: "Twifone", desc: t("experience.twifone_desc") },
          { name: "Affilie (ostie.mg)", desc: t("experience.affilie_desc") }
        ]
      },
      {
        company: t("experience.freelance"),
        role: t("experience.fullstack"),
        period: "Oct 2022 – Mar 2023",
        tech: [
          { label: "Laravel 9", color: "" },
          { label: "Nuxt.js", color: "" },
          { label: "Vue.js", color: "" }
        ],
        projects: [
          { name: "Soxim (soxim.fr)", desc: t("experience.soxim_desc") },
          { name: "Pezane Marketplace", desc: t("experience.pezane_desc") }
        ]
      },
      {
        company: "mkweblinks",
        role: t("experience.android_web"),
        period: "Mai 2021 – Sep 2022",
        tech: [
          { label: "Ionic", color: "purple" },
          { label: "Laravel 8", color: "" },
          { label: "Vue.js", color: "" }
        ],
        projects: [
          { name: "ShareMyHobbies", desc: t("experience.sharemyhobbies_desc") }
        ]
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "experience" }, _attrs))} data-v-de9d30db><div class="section-inner" data-v-de9d30db><div class="section-header scroll-fade" data-v-de9d30db><div class="section-label" data-v-de9d30db>${ssrInterpolate(_ctx.$t("experience.label"))}</div><h2 data-v-de9d30db>${ssrInterpolate(_ctx.$t("experience.title"))}</h2></div><div class="timeline" data-v-de9d30db><!--[-->`);
      ssrRenderList(unref(experiences), (exp, i) => {
        _push(`<div class="timeline-item scroll-fade" style="${ssrRenderStyle({ transitionDelay: `${i * 0.12}s` })}" data-v-de9d30db><div class="timeline-dot" data-v-de9d30db></div><div class="exp-card" data-v-de9d30db><div class="exp-header" data-v-de9d30db><div class="exp-meta" data-v-de9d30db><div class="exp-company" data-v-de9d30db>${ssrInterpolate(exp.company)}</div><div class="exp-role" data-v-de9d30db>${ssrInterpolate(exp.role)}</div></div><span class="exp-period" data-v-de9d30db>${ssrInterpolate(exp.period)}</span></div><div class="exp-tech" data-v-de9d30db><!--[-->`);
        ssrRenderList(exp.tech, (tech) => {
          _push(`<span class="${ssrRenderClass([tech.color, "tag"])}" data-v-de9d30db>${ssrInterpolate(tech.label)}</span>`);
        });
        _push(`<!--]--></div><ul class="exp-projects" data-v-de9d30db><!--[-->`);
        ssrRenderList(exp.projects, (proj) => {
          _push(`<li data-v-de9d30db><span class="project-name" data-v-de9d30db>${ssrInterpolate(proj.name)} —</span> ${ssrInterpolate(proj.desc)}</li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ExperienceSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-de9d30db"]]);
const _sfc_main$3 = {
  __name: "EducationSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const educations = computed(() => [
      {
        year: "21",
        level: t("education.master"),
        title: t("education.cs"),
        school: "Université Antananarivo — Info Centre de la salle"
      },
      {
        year: "18",
        level: t("education.diploma"),
        title: t("education.app_dev"),
        school: "Athénée Saint Joseph Antsirabe"
      },
      {
        year: "15",
        level: t("education.bac"),
        title: t("education.sciences"),
        school: "Lycée Arcade Antananarivo"
      },
      {
        year: "—",
        level: "BEPC",
        title: t("education.brevet"),
        school: "Saint Joseph Ambatondrazaka"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "education" }, _attrs))} data-v-33bc09a1><div class="section-inner" data-v-33bc09a1><div class="section-header scroll-fade" data-v-33bc09a1><div class="section-label" data-v-33bc09a1>${ssrInterpolate(_ctx.$t("education.label"))}</div><h2 data-v-33bc09a1>${ssrInterpolate(_ctx.$t("education.title"))}</h2></div><div class="edu-grid" data-v-33bc09a1><!--[-->`);
      ssrRenderList(unref(educations), (edu, i) => {
        _push(`<div class="edu-card scroll-fade" style="${ssrRenderStyle({ transitionDelay: `${i * 0.1}s` })}" data-v-33bc09a1><div class="edu-year" data-v-33bc09a1>${ssrInterpolate(edu.year)}</div><div class="edu-level" data-v-33bc09a1>${ssrInterpolate(edu.level)}</div><h3 data-v-33bc09a1>${ssrInterpolate(edu.title)}</h3><div class="edu-school" data-v-33bc09a1>${ssrInterpolate(edu.school)}</div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EducationSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-33bc09a1"]]);
const _sfc_main$2 = {
  __name: "LanguagesSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const languages = computed(() => [
      { flag: "🇫🇷", name: "Français", level: t("languages.fr_level"), percent: 95 },
      { flag: "🇬🇧", name: "English", level: t("languages.en_level"), percent: 65 },
      { flag: "🇮🇹", name: "Italiano", level: t("languages.it_level"), percent: 30 },
      { flag: "🇲🇬", name: "Malagasy", level: t("languages.mg_level"), percent: 100 }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "languages" }, _attrs))} data-v-6c9a15a4><div class="section-inner" data-v-6c9a15a4><div class="section-header scroll-fade" data-v-6c9a15a4><div class="section-label" data-v-6c9a15a4>${ssrInterpolate(_ctx.$t("languages.label"))}</div><h2 data-v-6c9a15a4>${ssrInterpolate(_ctx.$t("languages.title"))}</h2></div><div class="lang-grid" data-v-6c9a15a4><!--[-->`);
      ssrRenderList(unref(languages), (lang, i) => {
        _push(`<div class="lang-card scroll-fade" style="${ssrRenderStyle({ transitionDelay: `${i * 0.1}s` })}" data-v-6c9a15a4><div class="lang-flag" data-v-6c9a15a4>${ssrInterpolate(lang.flag)}</div><div class="lang-name" data-v-6c9a15a4>${ssrInterpolate(lang.name)}</div><div class="lang-level" data-v-6c9a15a4>${ssrInterpolate(lang.level)}</div><div class="lang-bar" data-v-6c9a15a4><div class="lang-bar-fill" style="${ssrRenderStyle({ width: lang.percent + "%" })}" data-v-6c9a15a4></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LanguagesSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-6c9a15a4"]]);
const _sfc_main$1 = {
  __name: "ContactSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "contact" }, _attrs))} data-v-e6c3d8d3><div class="section-inner" data-v-e6c3d8d3><div class="contact-wrap" data-v-e6c3d8d3><div class="contact-info scroll-fade" data-v-e6c3d8d3><div class="section-label" data-v-e6c3d8d3>${ssrInterpolate(_ctx.$t("contact.label"))}</div><h2 data-v-e6c3d8d3>${ssrInterpolate(_ctx.$t("contact.title"))}</h2><p data-v-e6c3d8d3>${ssrInterpolate(_ctx.$t("contact.description"))}</p><div class="contact-links" data-v-e6c3d8d3><a href="mailto:maelrbm3@gmail.com" class="contact-link" data-v-e6c3d8d3><div class="contact-link-icon" data-v-e6c3d8d3>📧</div><div data-v-e6c3d8d3><div class="contact-link-label" data-v-e6c3d8d3>Email</div><div class="contact-link-text" data-v-e6c3d8d3>maelrbm3@gmail.com</div></div></a><a href="https://wa.me/261346895851" target="_blank" rel="noopener" class="contact-link" data-v-e6c3d8d3><div class="contact-link-icon" data-v-e6c3d8d3>💬</div><div data-v-e6c3d8d3><div class="contact-link-label" data-v-e6c3d8d3>WhatsApp</div><div class="contact-link-text" data-v-e6c3d8d3>+261 34 689 5851</div></div></a><a href="https://maelrbmfolio.netlify.app/" target="_blank" rel="noopener" class="contact-link" data-v-e6c3d8d3><div class="contact-link-icon" data-v-e6c3d8d3>🌐</div><div data-v-e6c3d8d3><div class="contact-link-label" data-v-e6c3d8d3>Portfolio</div><div class="contact-link-text" data-v-e6c3d8d3>maelrbmfolio.netlify.app</div></div></a><div class="contact-link static" data-v-e6c3d8d3><div class="contact-link-icon" data-v-e6c3d8d3>📍</div><div data-v-e6c3d8d3><div class="contact-link-label" data-v-e6c3d8d3>${ssrInterpolate(_ctx.$t("contact.location_label"))}</div><div class="contact-link-text" data-v-e6c3d8d3>Akadindramamy, Antananarivo, Madagascar</div></div></div></div></div><div class="cta-card scroll-fade" data-v-e6c3d8d3><div class="cta-inner" data-v-e6c3d8d3><h3 data-v-e6c3d8d3>${ssrInterpolate(_ctx.$t("contact.cta_title"))}</h3><p data-v-e6c3d8d3>${ssrInterpolate(_ctx.$t("contact.cta_desc"))}</p><a href="mailto:maelrbm3@gmail.com" class="btn-primary" data-v-e6c3d8d3>${ssrInterpolate(_ctx.$t("contact.cta_btn"))} → </a><div class="cta-stats" data-v-e6c3d8d3><div class="cta-stat" data-v-e6c3d8d3><div class="cta-num" data-v-e6c3d8d3>7+</div><div class="cta-label" data-v-e6c3d8d3>${ssrInterpolate(_ctx.$t("contact.years_label"))}</div></div><div class="cta-stat" data-v-e6c3d8d3><div class="cta-num" style="${ssrRenderStyle({ "color": "var(--accent2)" })}" data-v-e6c3d8d3>15+</div><div class="cta-label" data-v-e6c3d8d3>${ssrInterpolate(_ctx.$t("contact.projects_label"))}</div></div><div class="cta-stat" data-v-e6c3d8d3><div class="cta-num" style="${ssrRenderStyle({ "color": "var(--accent3)" })}" data-v-e6c3d8d3>3</div><div class="cta-label" data-v-e6c3d8d3>${ssrInterpolate(_ctx.$t("contact.languages_label"))}</div></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e6c3d8d3"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useHead({
      title: "Ismael Rabemiafara — Full Stack Developer",
      meta: [
        { name: "description", content: t("hero.sub") }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeroSection = __nuxt_component_0;
      const _component_SkillsSection = __nuxt_component_1;
      const _component_ExperienceSection = __nuxt_component_2;
      const _component_EducationSection = __nuxt_component_3;
      const _component_LanguagesSection = __nuxt_component_4;
      const _component_ContactSection = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
      _push(ssrRenderComponent(_component_SkillsSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ExperienceSection, null, null, _parent));
      _push(ssrRenderComponent(_component_EducationSection, null, null, _parent));
      _push(ssrRenderComponent(_component_LanguagesSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ContactSection, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-C-JPIOk6.js.map
