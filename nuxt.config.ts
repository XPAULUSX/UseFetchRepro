import { defineNuxtConfig } from "nuxt"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [ '@nuxtjs/tailwindcss' ],
    head: {
        bodyAttrs: {
            class: 'bg-gray-100'
        }
    }
})
