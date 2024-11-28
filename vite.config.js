import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';  // Comment this out temporarily

export default defineConfig({
  plugins: [
    vue()  // Disable Vue plugin for debugging
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  }, build: {
    sourcemap: false
  }

});