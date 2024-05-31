/* eslint-disable no-undef */
import react from '@vitejs/plugin-react'
import { config } from 'dotenv';
import { defineConfig } from 'vite'
config({ path: '../.env' });

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
  define: {
    'process.env': process.env
  }
})
