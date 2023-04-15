![loxt](https://user-images.githubusercontent.com/79442303/220187872-63a607d4-3648-468c-a90c-f685e0cfd5f3.png)

# [Loxt](https://angelnext.dev/)

Loxt is a simple and lightweight console logger with 0 external dependencies.

The `reporter` module allows you to create custom themes for loxt

---

[![loxt](https://img.shields.io/npm/v/loxt?color=%232161b8&logo=gitbook&style=for-the-badge&label=Docs)](https://loxt.angelnext.dev)
[![github](https://img.shields.io/npm/v/loxt?color=%232161b8&logo=github&style=for-the-badge&label=GitHub)](https://github.com/loxt-js/loxt)
[![npm](https://img.shields.io/npm/v/loxt?color=%232161b8&logo=npm&style=for-the-badge)](https://npmjs.com/package/loxt)
[![discord](https://img.shields.io/discord/1002660982591586534?color=%09%235865F2&label=Discord&logo=discord&logoColor=%23FFF&style=for-the-badge)](https://discord.gg/fE4GNHsmcB)

---

```ts
import { Reporter, colors } from 'loxt';

const salmon = new Reporter({
	info: `${colors.bold(colors.blue('info'))}: ${colors.dim('$message')}`,
	warn: `${colors.bold(colors.yellow('warning'))}: ${colors.dim('$message')}`,
	ready: `${colors.green('ready')} ${colors.dim('$message')}`,
	start: `${colors.green('start')} ${colors.dim('$message')}`,
	success: `${colors.bold(colors.green('success'))}: ${colors.dim('$message')}`,
	error: {
		name: colors.bold(colors.red('$name:')),
		message: colors.dim('$message'),
	},
});
```
