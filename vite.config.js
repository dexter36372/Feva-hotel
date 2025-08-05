import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace `yourusername` and `reponame` with your actual GitHub details
export default defineConfig({
  base: '/feva-hotel/',
  plugins: [react()],
})

