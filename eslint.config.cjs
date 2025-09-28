const js = require('@eslint/js');
const globals = require('globals');
const prettier = require('eslint-plugin-prettier');

module.exports = [
  { ignores: ['node_modules/**', 'dist/**', 'build/**', 'coverage/**', 'logs/**', '*.log'] },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: globals.node,
    },
    plugins: { prettier },
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
];
