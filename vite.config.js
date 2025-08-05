import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "a86da958-68ae-4eeb-a7b8-662ff291c560-00-3vz612z9wxxrg.kirk.replit.dev"
    ]
  }
});

