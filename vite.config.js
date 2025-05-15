import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    host: '192.168.1.126', // 👈 Replace with your actual IP if needed
    port: 5678,
    strictPort: true,
    cors: {
      origin: 'http://192.168.1.126',
      credentials: true
    }
  }
})
