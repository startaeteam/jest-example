module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  // mapping import of css
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
  snapshotSerializers: []
}