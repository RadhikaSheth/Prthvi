module.exports = {
  transform: { "\\.ts$": ['ts-jest'] },
  preset: "jest-expo",
  collectCoverage: true,
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)"
  ],
  setupFilesAfterEnv: [
    "<rootDir>src/setupTests.js"
  ],
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/coverage/**",
    "!**/node_modules/**",
    "!**/babel.config.js",
    "!**/jest.setup.js"
  ]
};