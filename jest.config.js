module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  setupFiles: ['./tests/setup.ts'] ,
  moduleFileExtensions: ['ts', 'js', 'json', 'vue'],
  transformIgnorePatterns: ['/node_modules/'],
  modulePathIgnorePatterns: [
    '<rootDir>/src/locales',
    '<rootDir>/src/plugins',
    '<rootDir>/src/main.ts',
    '<rootDir>/src/registerServiceWorker.ts',
    '__mocks__'
  ],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,vue}', '!src/main.ts'],
  coverageReporters: ['html', 'lcov', 'cobertura', 'text', 'text-summary'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec).[jt]s?(x)'],
  reporters: [
    'default',
    'jest-sonar',
    ['jest-junit', { suiteName: 'jest tests', outputDirectory: './coverage/' }]
  ]
};


