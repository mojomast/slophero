import { defineConfig } from 'vite';
import { resolve } from 'path';
import inkPlugin from './vite-plugin-ink.js';

export default defineConfig({
  plugins: [inkPlugin()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
