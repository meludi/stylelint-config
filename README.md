# @meludi/stylelint-config

Shareable stylelint configuration.

## Packages

This repository is a monorepo that using [Lerna](https://github.com/lerna/lerna). That means that we actually publish [several packages](/packages) to npm from the same codebase, including:

| Package                                                                                                                  | Docs                                                                                                                                                                        | Description                    |
| ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| [`@meludi/stylelint-config-scss`](https://github.com/meludi/stylelint-config/tree/master/packages/stylelint-config-scss) | [![](https://img.shields.io/badge/docs-readme-orange.svg?style=flat-square)](https://github.com/meludi/stylelint-config/tree/master/packages/stylelint-config-scss/#readme) | Format and fix your SCSS code. |

## Development

This repository is mainly based on [stylelint](https://stylelint.io/) and follows [semantic versioning](https://www.conventionalcommits.org/en/v1.0.0/).

Useful [lerna commands](https://lerna.js.org/docs/api-reference/commands).

### Verdaccio - local npm registry

https://verdaccio.org/

```sh
# install
$ npm install --location=global verdaccio

# run
$ verdaccio

# server
http://localhost:4873/

# verdaccio storage directory on mac
~/.config/verdaccio/storage/
```

Add the following to a gitignored `.npmrc` files to the root of your project to publish to local npm registry:

```sh
# .npmrc
registry=http://localhost:4873
```

#### Host, Publish and Manage Private npm Packages with Verdaccio

https://www.sitepoint.com/private-npm-packages-verdaccio/

## LICENSE

[MIT](LICENSE)
