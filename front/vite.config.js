import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use Vite's `defineConfig` for better intellisense
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === "production" ? "/sumoki/" : "/", // Configure base path
});