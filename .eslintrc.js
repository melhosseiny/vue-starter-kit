module.exports = {
  root: true,
  extends: [
    // Use 'eslint:recommended' as a base
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:jest/recommended"
  ],
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2018,
    sourceType: "module"
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  plugins: [
    "vue",
    "jest"
  ],
  rules: {
  }
};
