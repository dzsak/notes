import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
  },
  base: '/',
  server: {
    open: true,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
})
