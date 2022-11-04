<p align="center" style="color: #343a40">
  <a href="https://fictoan.io"><img src="fictoan-logo.svg" alt="emotion" height="150" width="150"></a>
  <h1 align="center">Fictoan-React</h1>
</p>
<p align="center" style="font-size: 1.2rem;">React version of the Fictoan framework</p>
<p align="center">
<a href="https://www.npmjs.com/package/fictoan-react"><img src="https://img.shields.io/npm/v/fictoan-react"/></a>
<a href="https://www.npmjs.com/package/fictoan-react"><img src="https://img.shields.io/bundlephobia/min/fictoan-react"/></a>
<a href="LICENSE"><img src="https://img.shields.io/github/license/fictoan/fictoan-react"/></a>
</p>

Fictoan is an intuitive framework for designers looking to code and rapidly iterate on UI.

## Features
- Simple, straight-forward React custom props, exactly like setting properties in a design app.
- All attributes are intuitive and in plain English.
- Most attributes are also the same across different components.

## Installation
Install using `yarn`:
```sh
yarn add fictoan-react
```
Or `npm`:
```sh
npm install fictoan-react
```

And start using!
```jsx
import { Card } from "fictoan-react";

const MyComponent = props => {
    return (
        <Card shape="rounded" bgColour="white" borderColour="slate-20" shadow="soft">
            My awesome card
        </Card>
    );
}
```

Just note, you’d need to install `styled-components` too, which is a peer-dependency for Fictoan.

## Storybook
Start development server for storybook
```sh
yarn storybook
```

Storybook recipe used for this project: https://github.com/storybookjs/storybook/blob/next/addons/docs/docs/recipes.md#csf-stories-with-mdx-docs

## Contributing
You can view the contributing guide [here](.github/CONTRIBUTING.md).

## Development
For development setup run following commands:
```sh
git clone https://github.com/fictoan/fictoan-react.git
cd fictoan-react
yarn
yarn build
```
After the above setup, run few commands for `fictoan-docs` setup :
```sh
cd docs
yarn
yarn dev
```



## License
Licensed under the [MIT License](LICENSE).

