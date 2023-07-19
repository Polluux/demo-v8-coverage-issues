import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    passWithNoTests: true,
    cache: false,
    watch: false,
    reporters: ['default'],
    outputFile: path.resolve(__dirname, './test-report.xml'),
    include: ['tests/**/*.spec.{js,ts}'],
    coverage: {
      provider: 'v8', // <-- Change v8 to c8 for desired coverage output
      enabled: true,
      reporter: ['json', 'lcov', 'text', 'clover', 'text-summary'],
      include: ['src/components/**/*.ts', 'src/utils/**/*.ts'],
      exclude: ['**/node_modules/**']
    }
  },
})
