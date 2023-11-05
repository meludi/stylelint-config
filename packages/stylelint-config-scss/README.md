# @meludi/stylelint-config-scss

[![NPM Package][stylelint-config-scss-npm-badge]][stylelint-config-scss-npm-link]
[![GitHub issues][stylelint-config-scss-issues-badge]][stylelint-config-scss-issues-link]
[![GitHub license][stylelint-config-license-badge]][stylelint-config-license-link]

This package provides [Stylelint](https://stylelint.io/) settings as an shareable stylelint configuration.

## Configs

- [stylelint-config-standard-scss](https://www.npmjs.com/package/stylelint-config-recommended-scss)
- [stylelint-order](https://www.npmjs.com/package/stylelint-order)
- [stylelint-config-idiomatic-css](https://www.npmjs.com/package/stylelint-config-idiomatic-css)
- [stylelint-config-prettier](https://www.npmjs.com/package/stylelint-config-idiomatic-css)

## [Postcss](https://postcss.org/)

- [autoprefixer](https://www.npmjs.com/package/autoprefixer)
- [postcss-import](https://www.npmjs.com/package/postcss-import)
- [postcss-preset-env](https://www.npmjs.com/package/postcss-preset-env)

## Installation

Install the package with:

```sh
$ npm i -D @meludi/stylelint-config-scss

```

Find out and install `peerDependencies`.

```sh
$ npm info "@meludi/stylelint-config-scss@latest" peerDependencies
```

## Usage

Add the following to your `stylelint.config.js`:

```js
// stylelint.config.js
module.exports = {
  extends: '@meludi/stylelint-config-scss',
};
```

Add the following to your `postcss.config.js`:

```js
// postcss.config.js
module.exports = require('@meludi/stylelint-config-scss/postcss.config');
```

## Recommendation

Add the following config files to the root of your project:

- [.browserslistrc](https://github.com/browserslist/browserslist) see Posstcss - autoprefixer
- [.stylelintignore](https://eslint.org/docs/latest/use/configure/ignore#the-eslintignore-file)
- [.editorconfig](https://editorconfig.org/)

```sh
# .editorconfig: http://EditorConfig.org
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
```

### NPM script

Add the following script to your `package.json` for easy usage:

```json
"scripts": {
  "lint:css": "stylelint './**/*.scss'",
  "lint:css:fix": "npm run lint:css -- --fix",
}
```

### Recommendation

Use prettier to format your scss files: [@meludi/eslint-config-prettier](https://www.npmjs.com/package/@meludi/eslint-config-prettier)

### Configuration

You can overwrite, extend and unset rules in your `stylelint.config.js`

> [Configuring Stylelint](https://stylelint.io/user-guide/rules)

### VS Code

Copy [.vscode.example](https://github.com/meludi/stylelint-config/tree/master/packages/stylelint-config-scss/.vscode.example) to the root of your project and rename it to `.vscode`.

## LICENSE

[MIT](LICENSE)

[stylelint-config-scss-npm-badge]: https://img.shields.io/npm/v/@meludi/stylelint-config-scss.svg
[stylelint-config-scss-npm-link]: https://www.npmjs.com/package/@meludi/stylelint-config-scss
[stylelint-config-scss-issues-badge]: https://img.shields.io/github/issues/meludi/stylelint-config/package:%20stylelint-config-scss?label=issues
[stylelint-config-scss-issues-link]: https://github.com/meludi/stylelint-config/issues?q=is%3Aopen+is%3Aissue+label%3A%22package%3A+stylelint-config-scss%22
[stylelint-config-license-badge]: https://img.shields.io/github/license/meludi/stylelint-config
[stylelint-config-license-link]: https://github.com/meludi/stylelint-config/blob/main/LICENSE
