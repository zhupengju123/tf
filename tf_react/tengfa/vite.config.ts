import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  root: process.cwd(),
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: "https://api.tf2sc.cn/api/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }


})
