import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración oficial para React + Vite
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  },
  build: {
    outDir: 'dist', // Obliga a guardar la web en la carpeta 'dist'
    emptyOutDir: true,
  }
})