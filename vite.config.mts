import vue from '@vitejs/plugin-vue'
import { URL, fileURLToPath } from 'node:url'
import fonts from 'unplugin-fonts/vite'
import { HtmlTagDescriptor, defineConfig } from 'vite'
import layouts from 'vite-plugin-vue-layouts'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineConfig({
  define: { 'process.env': {} },
  plugins: [
    {
      name: 'html-transform',
      transformIndexHtml: (html) => {
        const tags: HtmlTagDescriptor[] = [
          {
            injectTo: 'head',
            tag: 'script',
            attrs: {
              src: './config.js',
              type: 'text/javascript',
            },
          },
          {
            injectTo: 'head-prepend',
            tag: 'base',
            attrs: {
              href: '/',
            },
          },
        ];

        return {
          html,
          order: 'pre',
          tags,
        };
      },
    },
    layouts(),
    vue({
      template: { transformAssetUrls },
    }),
    vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/vuetify/settings.scss'
      },
    }),
    fonts({
      google: {
        families: [
          {
            name: 'Public Sans',
            styles: 'wght@300;400;500;600;700;900',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.mts', '.ts', '.tsx', '.vue'],
  },
  server: {
    port: 3000,
    hmr: {
      timeout: 5000,
    },
  },
})
