import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: ['node_modules', 'dist'],
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['html', 'html-spa'],
      reportsDirectory: './dev/test/coverage',
    },
  },
})
