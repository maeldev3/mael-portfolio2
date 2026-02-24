import { _ as __nuxt_component_0$1 } from "./nuxt-link-BrTFCX-A.js";
import { ref, computed, mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderSlot } from "vue/server-renderer";
import { b as useState, _ as _export_sfc, a as useI18n } from "../server.mjs";
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
const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main$2 = {
  __name: "AppNav",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, setLocale } = useI18n();
    const colorMode = useColorMode();
    const menuOpen = ref(false);
    const isScrolled = ref(false);
    const isDark = computed(() => colorMode.value === "dark");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: { scrolled: unref(isScrolled) }
      }, _attrs))} data-v-3d6b6602>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "nav-logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ISMAEL<span class="dim" data-v-3d6b6602${_scopeId}>.</span>DEV`);
          } else {
            return [
              createTextVNode("ISMAEL"),
              createVNode("span", { class: "dim" }, "."),
              createTextVNode("DEV")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul class="${ssrRenderClass([{ open: unref(menuOpen) }, "nav-links"])}" data-v-3d6b6602><li data-v-3d6b6602><a href="#skills" data-v-3d6b6602>${ssrInterpolate(_ctx.$t("nav.skills"))}</a></li><li data-v-3d6b6602><a href="#experience" data-v-3d6b6602>${ssrInterpolate(_ctx.$t("nav.experience"))}</a></li><li data-v-3d6b6602><a href="#education" data-v-3d6b6602>${ssrInterpolate(_ctx.$t("nav.education"))}</a></li><li data-v-3d6b6602><a href="#contact" data-v-3d6b6602>${ssrInterpolate(_ctx.$t("nav.contact"))}</a></li></ul><div class="nav-right" data-v-3d6b6602><button class="${ssrRenderClass([{ active: unref(locale) === "fr" }, "lang-btn"])}" data-v-3d6b6602>FR</button><button class="${ssrRenderClass([{ active: unref(locale) === "en" }, "lang-btn"])}" data-v-3d6b6602>EN</button><button class="theme-btn"${ssrRenderAttr("title", unref(isDark) ? "Switch to light" : "Switch to dark")} data-v-3d6b6602>${ssrInterpolate(unref(isDark) ? "☀️" : "🌙")}</button><button class="hamburger" aria-label="Menu" data-v-3d6b6602><span class="${ssrRenderClass({ open: unref(menuOpen) })}" data-v-3d6b6602></span><span class="${ssrRenderClass({ open: unref(menuOpen) })}" data-v-3d6b6602></span><span class="${ssrRenderClass({ open: unref(menuOpen) })}" data-v-3d6b6602></span></button></div></nav>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppNav.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-3d6b6602"]]);
const _sfc_main$1 = {
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(_attrs)} data-v-088acbc3><p data-v-088acbc3>© ${ssrInterpolate(unref(year))} Rabemiafara Andrianiraisana Ismael — Full Stack Developer — Antananarivo, Madagascar</p><div class="footer-links" data-v-088acbc3><a href="mailto:maelrbm3@gmail.com" data-v-088acbc3>maelrbm3@gmail.com</a><span class="sep" data-v-088acbc3>·</span><a href="https://maelrbmfolio.netlify.app/" target="_blank" rel="noopener" data-v-088acbc3>Portfolio</a></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-088acbc3"]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const colorMode = useColorMode();
    const scrollProgress = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppNav = __nuxt_component_0;
      const _component_AppFooter = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(colorMode).value
      }, _attrs))} data-v-79affff8><div class="scroll-indicator" style="${ssrRenderStyle({ width: unref(scrollProgress) + "%" })}" data-v-79affff8></div>`);
      _push(ssrRenderComponent(_component_AppNav, null, null, _parent));
      _push(`<main data-v-79affff8>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-79affff8"]]);
export {
  _default as default
};
//# sourceMappingURL=default-Dt2sKQcH.js.map
