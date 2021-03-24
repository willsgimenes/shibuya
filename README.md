# SHIBUYA 🌆

<img src="https://raw.githubusercontent.com/willsgimenes/neon-city-light-tokens/main/neon-city-banner.png" alt="" align="center" />

<h3 align="center">A set of components to make your day more neon</h3>

<p align="center"><em>Buttons, Cards, Typography and more </em></p>

---

## Prerequisites

- Node.js >= **v.14.x**
- Yarn >= **v.2.x**

## Installing

``` sh
yarn add @willsgimenes/shibuya styled-components npm:@tailwindcss/postcss7-compat
```
***styled-components and tailwindcss should be also installed as they are peer dependencies***


## Usage

``` js
import { Button } from '@willsgimenes/shibuya'

<Button text="Hello world"/>
```

## Development workflow

### Installing
``` sh
yarn
```

### Developing
``` sh
yarn storybook
```

### Testing
``` sh
yarn test
```

### Building

``` sh
yarn build
```

### Committing
``` sh
yarn commit
```
This command will open a prompt, where you can choose some items:

- type of change
- scope of change
- write a short message
- write a long message
- link a repo issue

After setup your commit message, before finish we run some pre-validations and then push to the origin remote.

To read more about some of these tools:

- [semver](https://semver.org/)
- [karma commit message guideline](http://karma-runner.github.io/6.0/dev/git-commit-msg.html)
- [semantic release](https://github.com/semantic-release/semantic-release)
