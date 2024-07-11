import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'build',
    rollupOptions: {
      input: 'index.html'
    }
  },
  server: {
    watch: {
      usePolling: true
    }
  }
});
