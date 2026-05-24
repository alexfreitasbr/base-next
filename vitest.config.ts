import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],

  test: {
    globals: true,

    environment: 'jsdom',

    setupFiles: ['./vitest.setup.ts'],

    css: true,

    typecheck: {
      tsconfig: './tsconfig.vitest.json',
    },

    coverage: {
      provider: 'v8',

      reporter: ['text', 'json', 'html'],

      include: ['src/**/*.{ts,tsx}'],

      exclude: [
        '**/node_modules/**',
        '**/*.d.ts',
        '**/types/**',
      ],
    },
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})