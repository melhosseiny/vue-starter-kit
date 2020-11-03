module.exports = {
  verbose: true,
  globals: {
    "vue-jest": {
      experimentalCSSCompile: false
    }
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  moduleFileExtensions: [
    "js",
    "vue",
    "json"
  ],
  transform: {
    "^.+\\.js$": "babel-jest",
    ".*\\.(vue)$": "vue-jest"
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,vue}"
  ],
  coverageReporters: [
    "html",
    "text-summary"
  ],
  cache: false,
  snapshotSerializers: [
    "jest-serializer-vue"
  ]
}
