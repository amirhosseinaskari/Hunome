module.exports = {
    roots: ['<rootDir>'],
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  collectCoverage: true,
  clearMocks: true,
    moduleNameMapper: {
      '~src/(.*)': '<rootDir>/src/$1',
      '~types/(.*)': '<rootDir>/src/types/$1',
      '~components/(.*)': '<rootDir>/src/components/$1',
      '~style-components/(.*)': '<rootDir>/src/shared/style-components/$1',
      '~redux/(.*)': '<rootDir>/src/redux/$1',
     

    },
  }