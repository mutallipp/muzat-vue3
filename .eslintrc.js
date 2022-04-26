module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    '@vue/standard',
    'plugin:vue/vue3-recommended',
    'airbnb-base',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    vueFeatures: {
      filter: true,
      jsx: true,
    },
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    semi: [2, 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'arrow-parens': 'off',
    'no-underscore-dangle': 'off',
    'arrow-body-style': 'off',
    'consistent-return': 'off',
    'array-callback-return': 'off',
    'max-len': 'off',
    'max-lines': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
    'no-mixed-operators': 'off',
    'class-methods-use-this': 'off',
    'no-else-return': 'off',
    'default-case': 'off',
    'no-new': 'off',
    'no-restricted-syntax': 'off',
    'no-continue': 'off',
    'no-eval': 'off',
    'no-return-assign': [
      'off',
      'always',
    ],
    // 禁止无用的表达式
    'no-unused-expressions': [
      'off',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'global-require': 'off',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'always',
        asyncArrow: 'always',
      },
    ],
    'no-loop-func': 0,
    'import/no-cycle': 'off',
    'import/extensions': ['off', 'always', {
      ignorePackages: true,
    }],
    'import/no-extraneous-dependencies': ['off'],
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    'no-shadow': ['off'],
    '@typescript-eslint/ban-types': ['off'],
    'vue/component-definition-name-casing': ['off'],
    'quote-props': ['off'],
    '@typescript-eslint/no-var-requires': ['off'],
    '@typescript-eslint/no-empty-function': ['off'],
    'linebreak-style': ['off', 'windows'],
    'import/prefer-default-export': 'off',
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2],
    'no-empty-function': 'off',
    'no-param-reassign': ['error', { 'props': false }],
    'no-undef': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['@assets', './src/assets'],
          ['@api', './src/api'],
          ['@layout', './src/layout'],
          ['@components', './src/components'],
          ['@defineds', './src/defineds'],
          ['@directives', './src/directives'],
          ['@icons', './src/icons'],
          ['@store', './src/store'],
          ['@styles', './src/styles'],
          ['@utils', './src/utils'],
          ['@pages', './src/pages'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.tsx', '.json', '.vue'],
      },
    },
  },
}
