# Foundations

> The atoms from which all our visual design is built.

## Requirements

Our foundations are expressed as JavaScript objects. We currently support usage with any CSS-in-JS library.

## Install

Foundations are installed as a JavaScript package via Yarn:

```shell
$ yarn add @guardian/src-foundations
```

## Use

The Foundations package is divided into several submodules.

> 💡 **CommonJS users:** Submodules under `@guardian/src-foundations` are exposed as ES Modules. If you require CommonJS modules, [see the FAQs](09-faqs.md) for solutions.

### Colour

Colours are available on the palette module.

```js
import { text, background } from '@guardian/src-foundations/palette';

const headline = css`
    color: ${text.primary};
    background: ${background.primary};
`;

// color: #121212;
// background-color: #ffffff;
```

The palette comprises **colour tokens** and **global colours**.

[Colour tokens](https://theguardian.design/2a1e5182b/p/1377a6-tokens/b/293ddb) are organised by the context in which they may be used (e.g. `text.primary`). Where possible, prefer using colour tokens.

[Global colours](https://theguardian.design/2a1e5182b/p/492a30-light-palette) do not specify a context, and should be used only if an appropriate colour token is not available.

### Space

Our space system is structured as increments of 4px.

```js
import { space } from '@guardian/src-foundations';

const spaceAfter = css`
    margin-bottom: ${space[3]}px;
`;

// margin-bottom: 12px;
```

See the Design System documentation's [space overview](https://theguardian.design/2a1e5182b/p/449bd5) to learn how to use space appropriately.

### Size

Size units may be used to set the height, max-height, width or max-width of a component.

```js
import { width, height } from '@guardian/src-foundations/size';

const checkbox = css`
    width: ${width.inputXsmall}px;
    height: ${height.inputXsmall}px;
`;

// width: 24px;
// height: 24px;
```

See the Design System documentation's [size section](https://www.theguardian.design/2a1e5182b/p/38d9a9-overview) to learn how to use our size units appropriately.

### Typography

Each of our custom fonts has an associated import, exposing methods that return snippets of CSS depending on the desired font size.

```js
import { headline } from '@guardian/src-foundations/typography';

const h1 = css`
    ${headline.medium()};
`;

// font-family: GH Guardian Headline, Georgia, serif;
// font-size: 2.13rem;
```

See the Design System documentation's [typography section](https://theguardian.design/2a1e5182b/p/930d69/b/78d0d9) to learn about our fonts, sizing scales and the [typography API](https://theguardian.design/2a1e5182b/p/930d69/b/06df96).

### Media queries

We provide media queries for each breakpoint in our [grid layout](https://theguardian.design/2a1e5182b/p/41be19-layout).
