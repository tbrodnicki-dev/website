import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  //Could cause issue with GH Pages "set back to /website/" if so
  base: '/website/',
  plugins: [
    react()
  ],
})
