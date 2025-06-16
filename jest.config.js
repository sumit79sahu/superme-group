const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/app/components/$1',
    '^@/lib/(.*)$': '<rootDir>/src/app/lib/$1',
    '^@/styles/(.*)$': '<rootDir>/src/app/styles/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(png|jpg|jpeg|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/app/components/**/*.{js,jsx,ts,tsx}',
    '!src/app/components/**/*.stories.{js,jsx,ts,tsx}',
    '!src/app/components/**/*.d.ts',
  ],
    transformIgnorePatterns: [
    '/node_modules/(?!(antd|@ant-design|rc-.*|@rc-component)/)',
  ],
};

module.exports = createJestConfig(customJestConfig);
