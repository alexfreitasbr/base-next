import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Caminho para o app Next.js para carregar next.config.js e arquivos .env
  dir: './',
})

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    // Lida com os aliases de importação (se você usa @/...)
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  // Agora o Jest procura testes em qualquer lugar dentro de src/ (features, app, components, etc)
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/app/layout.tsx', // Geralmente ignoramos layouts raiz por serem apenas wrappers
    '!src/**/types/**',    // Ignorar pastas de tipos
    '!src/**/*.d.ts',      // Ignorar definições de tipos
  ],
  coverageReporters: ['text', 'lcov', 'html'],
}

export default createJestConfig(config)