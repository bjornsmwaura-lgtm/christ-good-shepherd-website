import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // This MUST be a single slash
  resolve: {
    dedupe: ['react', 'react-dom', 'react-router-dom'],
  },
});