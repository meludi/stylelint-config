# @meludi/stylelint-config

[![GitHub issues][stylelint-config-issues-badge]][stylelint-config-issues-link]
[![GitHub license][stylelint-config-license-badge]][stylelint-config-license-link]
[![Commitizen friendly][commitizen-badge]][commitizen-link]

Shareable stylelint configuration.

## Packages

This repository is a monorepo using [Lerna](https://github.com/lerna/lerna). It is mainly based on [stylelint](https://stylelint.io/) and follows [semantic versioning](https://www.conventionalcommits.org/en/v1.0.0/).

We actually publish [several packages](/packages) to npm from the same codebase, including:

| Package                                                        | NPM                                                                               | Docs                                             | Issues                                                                                    | Description                     |
| -------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------- | ------------------------------- |
| [@meludi/stylelint-config-scss][stylelint-config-scss-package] | [![NPM Package][stylelint-config-scss-npm-badge]][stylelint-config-scss-npm-link] | [![][doc-badge]][stylelint-config-scss-doc-link] | [![GitHub issues][stylelint-config-scss-issues-badge]][stylelint-config-scss-issues-link] | Format and lint your SCSS code. |

## Development

### Committing, versioning and publishing

```sh
# Commit with conventional commits
# https://www.conventionalcommits.org/en/v1.0.0/
$ npm run commit

# Login to npm registry with your credentials
# This operation requires a one-time password
$ npm login

# Versioning
# Remember to push new versioned tags and main branch to the repo!
$ npm run lerna:version

# Publishing to npm registry
# This operation requires a one-time password
$ npm run lerna:publish
```

### Local testing with [verdaccio - local npm registry](https://verdaccio.org/)

```sh
# install
$ npm install --location=global verdaccio

# run
$ verdaccio

# verdaccio server
http://localhost:4873/

# verdaccio storage directory on mac
~/.config/verdaccio/storage/
```

```sh
# see https://github.com/lerna/lerna/issues/2363

# puts all packages on the local registry without changing tags (bumps versions by default but that can be undone with a hard git reset)
$ npm run lerna:verdaccio:publish

# optionally passing a version number if all packages are intended to be locally published to the same version, e.g.
$ npm run lerna:verdaccio:publish 0.0.1

# removes the latest version of each package from the local registry
$ npm run lerna:verdaccio:unpublish

# removes all packages on the local registry in case something went wrong
$ npm run lerna:verdaccio:unpublish:all
```

## LICENSE

[MIT](LICENSE)

[doc-badge]: https://img.shields.io/badge/docs-readme-orange.svg?style=flat-square
[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-link]: http://commitizen.github.io/cz-cli/
[stylelint-config-issues-badge]: https://img.shields.io/github/issues/meludi/stylelint-config
[stylelint-config-issues-link]: https://github.com/meludi/stylelint-config/issues
[stylelint-config-license-badge]: https://img.shields.io/github/license/meludi/stylelint-config
[stylelint-config-license-link]: https://github.com/meludi/stylelint-config/blob/main/LICENSE
[stylelint-config-scss-package]: https://github.com/meludi/stylelint-config/tree/master/packages/stylelint-config-scss
[stylelint-config-scss-doc-link]: https://github.com/meludi/stylelint-config/tree/master/packages/stylelint-config-scss/#readme
[stylelint-config-scss-npm-badge]: https://img.shields.io/npm/v/@meludi/stylelint-config-scss.svg
[stylelint-config-scss-npm-link]: https://www.npmjs.com/package/@meludi/stylelint-config-scss
[stylelint-config-scss-issues-badge]: https://img.shields.io/github/issues/meludi/stylelint-config/package:%20stylelint-config-scss?label=issues
[stylelint-config-scss-issues-link]: https://github.com/meludi/stylelint-config/issues?q=is%3Aopen+is%3Aissue+label%3A%22package%3A+stylelint-config-scss%22
