import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  envPrefix: 'WEB_',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  base: './',
  server: {
    port: 4000,
    open: true,
    cors: true
  }
})
