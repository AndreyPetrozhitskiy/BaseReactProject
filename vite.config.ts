import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@style': path.resolve(__dirname, 'src/style'),
      '@': path.resolve(__dirname, 'src'),
      '@styleComponents': path.resolve(__dirname, 'src/style/components')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/style/mixins/main.scss" as *;
          @use "@/style/mixins/variables.scss" as *;
        `
      }
    }
  }

})
