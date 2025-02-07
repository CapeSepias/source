# FAQs

### My build or tests fail with `SyntaxError: Unexpected token export`

Submodules under `@guardian/src-foundations` (e.g. `@guardian/src-foundations/typography`) are shipped as ECMAScript Modules. Some environments, such as Node.js (notably when running tests using Jest), can't interpret them. They require CommonJS modules.

We expose CommonJS endpoints for all our foundations submodules, so you have a few options.

#### Running tests with Jest

If you experience the problem when running tests with Jest, you can tell babel-jest to transpile `@guardian/src-foundations` using `transformIgnorePatterns`. In your `package.json` or `jest.config.js`:

```json
{
    "transformIgnorePatterns": ["node_modules/(?!@guardian/src-foundations/)"]
}
```

Alternatively, you can add a `moduleNameMapper` to map ES modules to CJS modules.

```json
{
    "moduleNameMapper": {
        "^@guardian/src-foundations/(.*)(?<!cjs)$": "@guardian/src-foundations/$1/cjs"
    }
}
```

#### Node.js applications

If you are building a Node.js application, and you aren't transpiling your application down to CommonJS using Babel, you should use the `/cjs` endpoint for each Foundations submodule:

```js
import { textSans } from '@guardian/src-foundations/typography/cjs';
```

You don't need to do anything special to support components. Node.js correctly resolves paths to CommonJS modules for our components.
