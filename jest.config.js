module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  // mapping import of css
  moduleNameMapper: {
    '\\.css$': require.resolve('./test/style-mock.js'),
  }
}