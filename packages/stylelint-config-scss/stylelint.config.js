/**
 * stylelint
 *
 * @see https://stylelint.io/
 */
module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-idiomatic-css',
    'stylelint-prettier/recommended',
  ],

  ignoreFiles: [
    './**/__generated__/**/*',
    './**/__snapshots__/**/*',
    './**/build/**/*',
    './**/coverage/**/*',
    './**/node_modules/**/*',
    './**/public/**',
    './**/storybook-static/**/*',
  ],

  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],

  ignoreFunctions: ['map-get'],

  plugins: ['stylelint-order'],

  rules: {
    'declaration-colon-space-after': 'always',
    'declaration-block-trailing-semicolon': 'always',
    'declaration-block-semicolon-newline-after': 'always',
    'at-rule-semicolon-newline-after': 'always',
    'no-extra-semicolons': true,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'use',
          'extend',
          'extends',
          'ignores',
          'include',
          'mixin',
          'if',
          'else',
          'media',
          'for',
          'each',
          'debug',
          'warn',
        ],
      },
    ],
    'scss/at-import-no-partial-leading-underscore': null,
    'scss/at-import-partial-extension': null,
    // Bootstrap - some functions do not meet the standards: https://sass-lang.com/documentation/cli/migrator
    'scss/no-global-function-names': null,
    'scss/at-extend-no-missing-placeholder': null,
    'function-no-unknown': null,
  },
};
