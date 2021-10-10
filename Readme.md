# Custom JS Console

create your own custom console just like codepen codesandbox etc

![Node Version](https://img.shields.io/node/v/custom-js-console)
[![License](https://img.shields.io/npm/l/custom-js-console)](https://cdn.jsdelivr.net/npm/custom-js-console/LICENSE)
[![Min Size](https://badgen.net/bundlephobia/min/custom-js-console)](https://bundlephobia.com/package/custom-js-console)
![build](https://img.shields.io/travis/com/vakhariaheet/custom-js-console)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Installation

```bash
npm install custom-js-console --save
```

```bash
yarn add custom-js-console
```

```html
<!--Minified Version-->
<script src="https://unpkg.com/custom-js-console"></script>
<!-- UnMinified Version-->
<script src="https://unpkg.com/custom-js-console/dist/index.umd.js"></script>
```

## Import

```javascript
import customConsole from 'custom-js-console';
```

```javascript
// Common JS
const customConsole = require('custom-js-console');
```

```javascript
customConsole;
```

---

## Note

#### If customConsole is initialized twice then first one will be overridden

## Usage

```javascript
const { options, originalConsole } = new customConsole({
	log: (message, ...optionalParams) => {
		// Called When console.log is called
		alert('Console.log Called');
	},
	warn: (message, ...optionalParams) => {
		// Called When console.warn is called
		alert('Console.warn Called');
	},
	error: (message, ...optionalParams) => {
		// Called When console.error is called
		alert('Console.error Called');
	},
	info: (message, ...optionalParams) => {
		// Called When console.info is called
		alert('Console.info Called');
	},
	table: (tabularData, properties) => {
		// Called When console.table is called
		alert('Console.table Called');
		originalConsole.log(tabularData, properties); // Original Console
	},
});
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## Bugs and Issues

If you encounter any bugs or issues, feel free
to [open an issue at github](https://github.com/vakhariaheet/verifierjs/issues) or email me to
<heetkv@gmail.com>. I also always like to hear from you, if you’re using my code.
