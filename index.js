module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "@vue/eslint-config-prettier",
    "plugin:vue/essential",
    "plugin:prettier/recommended",
    "eslint:recommended"
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    'no-console': 'warn',
    'no-debugger':'warn',
    'no-var': 'error',
    'no-unused-vars': 'warn',
    'prefer-const': 'error',
    "prettier/prettier": [
      "error",
      {
        trailingComma: "none",
        arrowParens: "avoid",
        printWidth: 120,
        singleQuote: true
      }
    ],
  }
};
