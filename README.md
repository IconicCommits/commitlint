# commitlint-plugin-iconic-commits

A commitlint plugin for Iconic Commits

[![Iconic Commits](https://img.shields.io/badge/Iconic%20Commits-0.1.0-%23ffdd67?style=for-the-badge)](https://github.com/IconicCommits/specification)

status:
[![NPM Version](https://img.shields.io/npm/v/commitlint-plugin-iconic-commits?style=for-the-badge)](https://www.npmjs.org/package/commitlint-plugin-iconic-commits)
[![NPM Downloads](https://img.shields.io/npm/dm/commitlint-plugin-iconic-commits?style=for-the-badge)](https://npm-stat.com/charts.html?package=commitlint-plugin-iconic-commits&from=2025-04-01)

Part of the [Iconic Commits](https://github.com/IconicCommits/specification) family. Validate your commit messages against the [Iconic Commits](https://github.com/IconicCommits/specification) standard.

## Installation

```bash
npm install --save-dev commitlint-plugin-iconic-commits @commitlint/cli
# or
yarn add -D commitlint-plugin-iconic-commits @commitlint/cli
# or
pnpm add -D commitlint-plugin-iconic-commits @commitlint/cli
```

## Usage

Create a `.commitlintrc.js` file in your project root:

```js
module.exports = {
  plugins: ['iconic-commits'],
  rules: {
    'iconic-commits-type-enum': [2, 'always'],
    // Other rules you might want to use
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 100]
  }
};
```

### Integration with Husky

To automatically check commit messages before they are created, you can use Husky's `commit-msg` hook:

```bash
# Install husky
npm install --save-dev husky
# or
yarn add -D husky
# or
pnpm add -D husky

# Setup husky
npx husky install

# Add commit-msg hook
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

## Supported Rules

- `iconic-commits-type-enum`: Validates that your commit type is one of the allowed Iconic Commits emoji codes.

### Examples

```
:sparkles: feat: add new feature
:bug: fix: fix login issue
:recycle: chore(auth): refactor authentication logic
:books: docs(api): update API documentation
```

## License

MIT