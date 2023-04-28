![loxt](https://user-images.githubusercontent.com/79442303/220187872-63a607d4-3648-468c-a90c-f685e0cfd5f3.png)

# [Loxt](https://loxt.js.org/)

Loxt is a simple and lightweight console logger that makes debugging fun and easy.

The `reporter` module allows you to create custom themes for loxt

---

[![loxt](https://img.shields.io/npm/v/loxt?color=%232161b8&logo=gitbook&style=for-the-badge&label=Docs)](https://loxt.js.org/)
[![github](https://img.shields.io/npm/v/loxt?color=%232161b8&logo=github&style=for-the-badge&label=GitHub)](https://github.com/loxt-js/loxt)
[![npm](https://img.shields.io/npm/v/loxt?color=%232161b8&logo=npm&style=for-the-badge)](https://npmjs.com/package/loxt)
[![discord](https://img.shields.io/discord/1002660982591586534?color=%09%235865F2&label=Discord&logo=discord&logoColor=%23FFF&style=for-the-badge)](https://discord.gg/fE4GNHsmcB)

---

```ts
import { Reporter } from 'loxt';

const reporter = new Reporter({
	info: "info: $message",
	success: "success: $message",
	warn: "warning: $message",
	error: {
		name: '$name',
		message: '$message'
	},
	ready: "ready $message",
	start: "start $message",
});
```
