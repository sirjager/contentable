/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'next',
    'prettier',
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  globals: { React: 'readonly' },
  plugins: ['react'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: { jsx: true },
  },
  rules: {
    indent: 'off',
    'require-jsdoc': 0,
    semi: ['error', 'always'],
    quotes: ['error', 'double'],
    'linebreak-style': ['error', 'unix'],
    'react/no-unknown-property': [0],
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'no-unused-vars': [1, { args: 'after-used', argsIgnorePattern: '^_' }],
    'no-empty-pattern': [1, { args: 'after-used', argsIgnorePattern: '^_' }],
  },
};
