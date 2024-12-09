import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG'],
  base: '/Portfolio/',
  build: {
    outDir: 'build',  // Change the output folder to 'build'
  },
})


