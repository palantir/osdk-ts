import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    strictPort: true, // Fail if port is already in use
  },
  resolve: {
    alias: {
      '@osdk/react-components/styles.css': path.resolve(__dirname, '../../packages/react-components/build/browser/styles.css'),
      '@osdk/react-components-styles': path.resolve(__dirname, '../../packages/react-components-styles/src/index.css'),
    },
  },
  optimizeDeps: {
    exclude: ['@osdk/react-components'],
  },
})
