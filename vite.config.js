import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allow access from external hosts
    port: 8000, // Use the port Koyeb expects (default is usually 3000, but 8080 is common for cloud services)
  },
});
