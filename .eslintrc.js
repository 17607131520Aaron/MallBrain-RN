module.exports = {
  root: true,
  extends: [
    '@react-native',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jest', 'prettier'],
  rules: {
    // React 相关规则
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-unstable-nested-components': ['warn', { allowAsProps: true }],

    // TypeScript 相关规则
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-empty-function': 'off',

    // 代码风格规则
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'prettier/prettier': 'warn',
    'no-unused-vars': 'off', // 使用 @typescript-eslint/no-unused-vars 代替
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-duplicate-imports': 'error',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'prefer-const': ['error', { destructuring: 'all' }],

    // React Native 特定规则
    'react-native/no-inline-styles': 'warn',
    'react-native/no-unused-styles': 'warn',
    'react-native/split-platform-components': 'warn',

    // Jest 规则
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/valid-expect': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    node: true,
    browser: true,
    es6: true,
    'jest/globals': true,
  },
  globals: {
    __DEV__: true,
  },
  ignorePatterns: [
    'node_modules/',
    'android/',
    'ios/',
    'vendor/',
    'coverage/',
    'dist/',
    '*.config.js',
    '*.lock',
  ],
};
