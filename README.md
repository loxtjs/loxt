# Loxt

[![Node.js CI](https://github.com/AngelNext/loxt/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/AngelNext/loxt/actions/workflows/npm-publish.yml)

## How it works?

Loxt is a simple and easy console logger of 2kb in size with 0 external dependencies.

```js
import { Loxt } from 'loxt';

const loxt = new Loxt();

loxt.start('Some code...');
loxt.ready('Initialization code, whatever...');
loxt.info('Loxt is easy to use!');
loxt.warn('You can use colors!');
loxt.error('Create your own themes!');
loxt.success('You can use themes from other people too!');
loxt.start('My Amazing App!');
```

You can also use it with the commonjs syntax:

```js
const { Loxt } = require('loxt');

const loxt = new Loxt();

loxt.start('Some code...');
loxt.ready('Initialization code, whatever...');
loxt.info('Loxt is easy to use!');
loxt.warn('You can use colors!');
loxt.error('Create your own themes!');
loxt.success('You can use themes from other people too!');
loxt.start('My Amazing App!');
```

## Reporters

You can also use custom reporters that theme your logs:

```js
import { Loxt, salmon } from 'loxt';

const loxt = new Loxt({
	reporter: salmon,
});

// ...
```

You can also create your own reporters:

```js
const salmon = new Reporter({
	info: '\x1b[34m\x1b[1minfo\x1b[0m: \x1b[2m%s\x1b[0m',
	warn: '\x1b[33m\x1b[1mwarn\x1b[0m: \x1b[2m%s\x1b[0m',
	ready: '\x1b[32mready\x1b[0m \x1b[2m%s\x1b[0m',
	start: '\x1b[32mstart\x1b[0m \x1b[2m%s\x1b[0m',
	success: '\x1b[32m\x1b[1msuccess\x1b[0m: \x1b[2m%s\x1b[0m',
	error: '$0: $1',
	errTitle: '\x1b[31m\x1b[1merror\x1b[0m',
	errMsg: '\x1b[2m%s\x1b[0m',
});
```

If you need to create reporters with more complex logic, just create a class that extends the `Reporter` class:

```js
import { Reporter } from 'loxt';

export class Salmon extends Reporter {
	get info() {
		return `\x1b[34m\x1b[1minfo\x1b[0m: \x1b[2m%s\x1b[0m`;
	}

	get warn() {
		return `\x1b[33m\x1b[1mwarn\x1b[0m: \x1b[2m%s\x1b[0m`;
	}

	get ready() {
		return `\x1b[32mready\x1b[0m \x1b[2m%s\x1b[0m`;
	}

	get start() {
		return `\x1b[32mstart\x1b[0m \x1b[2m%s\x1b[0m`;
	}

	get success() {
		return `\x1b[32m\x1b[1msuccess\x1b[0m: \x1b[2m%s\x1b[0m`;
	}

	get error() {
		return `$0: $1`;
	}

	get errTitle() {
		return `\x1b[31m\x1b[1merror\x1b[0m`;
	}

	get errMsg() {
		return `\x1b[2m%s\x1b[0m`;
	}
}
```
