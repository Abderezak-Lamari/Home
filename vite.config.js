import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Home/',
  plugins: [react()],
  server: {
    host: true,  // Allow access from external network
    port: 3000,  // You can change the port if needed
  },
})