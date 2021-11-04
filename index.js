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
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
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
