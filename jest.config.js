module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  collectCoverageFrom: [
    '<rootDir>/components/**/*',
    '<rootDir>/hooks/*',
    '<rootDir>/lib/*',
  ],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^components(.*)$': '<rootDir>/components$1',
    '^data(.*)$': '<rootDir>/data$1',
    '^hooks(.*)$': '<rootDir>/hooks$1',
    '^lib(.*)$': '<rootDir>/lib$1',
    '^pages(.*)$': '<rootDir>/pages$1',
    '^test(.*)$': '<rootDir>/test$1',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
  },
};
