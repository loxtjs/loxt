export class Reporter {
	#info: string;
	#warn: string;
	#ready: string;
	#start: string;
	#success: string;
	#error: string;
	#errTitle: string;
	#errMsg: string;

	constructor(opts?: { info: string; warn: string; ready: string; start: string; success: string; error: string; errTitle: string; errMsg: string }) {
		this.#info = opts.info;
		this.#warn = opts.warn;
		this.#ready = opts.ready;
		this.#start = opts.start;
		this.#success = opts.success;
		this.#error = opts.error;
		this.#errTitle = opts.errTitle;
		this.#errMsg = opts.errMsg;
	}

	get info(): string {
		return this.#info;
	}

	get warn(): string {
		return this.#warn;
	}

	get ready(): string {
		return this.#ready;
	}

	get start(): string {
		return this.#start;
	}

	get success(): string {
		return this.#success;
	}

	get error(): string {
		return this.#error;
	}

	get errTitle(): string {
		return this.#errTitle;
	}
	get errMsg(): string {
		return this.#errMsg;
	}
}

export const salmon = new Reporter({
	info: '\x1b[34m\x1b[1minfo\x1b[0m: \x1b[2m%s\x1b[0m',
	warn: '\x1b[33m\x1b[1mwarn\x1b[0m: \x1b[2m%s\x1b[0m',
	ready: '\x1b[32mready\x1b[0m \x1b[2m%s\x1b[0m',
	start: '\x1b[32mstart\x1b[0m \x1b[2m%s\x1b[0m',
	success: '\x1b[32m\x1b[1msuccess\x1b[0m: \x1b[2m%s\x1b[0m',
	error: '$0: $1',
	errTitle: '\x1b[31m\x1b[1merror\x1b[0m',
	errMsg: '\x1b[2m%s\x1b[0m',
});
