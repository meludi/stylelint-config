# @meludi/stylelint-config-scss

This package provides [Stylelint](https://stylelint.io/) settings as an shareable stylelint configuration.

## Configs

- [stylelint-config-standard](https://www.npmjs.com/package/stylelint-config-standard)
- [stylelint-config-standard-scss](https://www.npmjs.com/package/stylelint-config-recommended-scss)
- [stylelint-order](https://www.npmjs.com/package/stylelint-order)
- [stylelint-config-recommended-vue](https://www.npmjs.com/package/stylelint-config-recommended-vue)
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
  "format": "prettier --write './**/*.{scss,md,json}'"
}
```

### Configuration

You can overwrite, extend and unset rules in your `stylelint.config.js`

> [Configuring Stylelint](https://stylelint.io/user-guide/rules)

### VS Code

Copy [.vscode.example](https://github.com/meludi/stylelint-config/tree/master/packages/stylelint-config-scss/.vscode.example) to the root of your project and rename it to `.vscode`.

## LICENSE

[MIT](LICENSE)
