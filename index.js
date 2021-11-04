module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
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
    'no-var': 'warn',
    'no-unused-vars': 'warn',
    'prefer-const': 'warn',
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
