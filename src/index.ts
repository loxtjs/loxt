/** Alias to Loxt.format()
 * @param str
 * @param messages
 */
export const format = (str: string, ...messages: unknown[]) => Loxt.format(str, ...messages);

export interface ReportOpts {
	info: string;
	warn: string;
	ready: string;
	start: string;
	success: string;
	error: string;
	errTitle: string;
	errMsg: string;
}

export class Reporter {
	#info: string;
	#warn: string;
	#ready: string;
	#start: string;
	#success: string;
	#error: string;
	#errTitle: string;
	#errMsg: string;

	constructor(opts: ReportOpts) {
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

export class Loxt {
	constructor(
		public reporter = new Reporter({
			info: '\x1b[34m\x1b[1minfo\x1b[0m: \x1b[2m$0\x1b[0m',
			warn: '\x1b[33m\x1b[1mwarn\x1b[0m: \x1b[2m$0\x1b[0m',
			ready: '\x1b[32mready\x1b[0m \x1b[2m$0\x1b[0m',
			start: '\x1b[32mstart\x1b[0m \x1b[2m$0\x1b[0m',
			success: '\x1b[32m\x1b[1msuccess\x1b[0m: \x1b[2m$0\x1b[0m',
			error: '$0: $1',
			errTitle: '\x1b[31m\x1b[1merror\x1b[0m',
			errMsg: '\x1b[2m$0\x1b[0m',
		})
	) {}

	success(message: unknown): void {
		console.log(Loxt.format(this.reporter.success, message));
	}

	info(message: unknown): void {
		console.log(Loxt.format(this.reporter.info, message));
	}

	warn(message: unknown): void {
		console.warn(Loxt.format(this.reporter.warn, message));
	}

	ready(message: unknown): void {
		console.log(Loxt.format(this.reporter.ready, message));
	}

	start(message: unknown): void {
		console.log(Loxt.format(this.reporter.start, message));
	}

	error(error: unknown): void {
		if (!(error instanceof Error)) {
			console.error(Loxt.format(this.reporter.error, this.reporter.errTitle, Loxt.format(this.reporter.errMsg, error)));
			return;
		}
		error.name = Loxt.format(this.reporter.errTitle, error.name);
		error.message = Loxt.format(this.reporter.errMsg, error.message);
		console.error(error);
	}

	log(message: unknown): void {
		console.log(message);
	}

	clone(): Loxt {
		return new Loxt(this.reporter);
	}

	static clone(instance: Loxt): Loxt {
		return new Loxt(instance.reporter);
	}

	static log(message: unknown): void {
		console.log(message);
	}

	/** Format the `$0` and `$1` placeholders in the string.
	 * @param str
	 * @param messages
	 */
	static format(str: string, ...[first, second]: unknown[]): string {
		return str.replaceAll('$0', `${first}`).replaceAll('$1', `${second}`);
	}
}
