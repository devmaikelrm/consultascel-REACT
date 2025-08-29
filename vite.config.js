import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite conexiones externas
    port: 5173, // Puerto que usa Vite
    strictPort: true, // No cambia automáticamente el puerto si está ocupado
    allowedHosts: ['tqsxm9-5173.csb.app'], // Permite que tu host de CodeSandbox funcione
  },
  resolve: {
    alias: {
      '@': '/src', // Puedes importar desde src con @, ejemplo: import App from '@/App.jsx'
    },
  },
  preview: {
    port: 4173, // Puerto para preview de producción
  },
});
// Más configuración en https://vitejs.dev/config/