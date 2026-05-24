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
}

export default createJestConfig(config)
