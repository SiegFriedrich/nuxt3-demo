// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path"
export default defineNuxtConfig({
    "assets": "/<rootDir>/assets",
    css: ["~/assets/main.scss"],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
    modules: [
        '@element-plus/nuxt',
        '@nuxt/content'
    ],
})
