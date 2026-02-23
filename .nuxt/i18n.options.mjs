
// @ts-nocheck
import locale__home_lala_Downloads_claude_32caude_recent_portfolio_ismael_locales_fr_json from "../locales/fr.json";
import locale__home_lala_Downloads_claude_32caude_recent_portfolio_ismael_locales_en_json from "../locales/en.json";


export const localeCodes =  [
  "fr",
  "en"
]

export const localeLoaders = {
  "fr": [{ key: "../locales/fr.json", load: () => Promise.resolve(locale__home_lala_Downloads_claude_32caude_recent_portfolio_ismael_locales_fr_json), cache: true }],
  "en": [{ key: "../locales/en.json", load: () => Promise.resolve(locale__home_lala_Downloads_claude_32caude_recent_portfolio_ismael_locales_en_json), cache: true }]
}

export const vueI18nConfigs = [
  
]

export const nuxtI18nOptions = {
  "experimental": {
    "localeDetector": "",
    "switchLocalePathLinkSSR": false,
    "autoImportTranslationFunctions": false
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "",
  "locales": [
    {
      "code": "fr",
      "name": "Français",
      "language": "fr-FR",
      "files": [
        "/home/lala/Downloads/claude caude/recent/portfolio-ismael/locales/fr.json"
      ]
    },
    {
      "code": "en",
      "name": "English",
      "language": "en-US",
      "files": [
        "/home/lala/Downloads/claude caude/recent/portfolio-ismael/locales/en.json"
      ]
    }
  ],
  "defaultLocale": "fr",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "prefix_except_default",
  "lazy": false,
  "langDir": "locales/",
  "detectBrowserLanguage": {
    "alwaysRedirect": true,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "fr",
    "redirectOn": "root",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "multiDomainLocales": false,
  "i18nModules": []
}

export const normalizedLocales = [
  {
    "code": "fr",
    "name": "Français",
    "language": "fr-FR",
    "files": [
      {
        "path": "/home/lala/Downloads/claude caude/recent/portfolio-ismael/locales/fr.json"
      }
    ]
  },
  {
    "code": "en",
    "name": "English",
    "language": "en-US",
    "files": [
      {
        "path": "/home/lala/Downloads/claude caude/recent/portfolio-ismael/locales/en.json"
      }
    ]
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false

export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18n"
export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
