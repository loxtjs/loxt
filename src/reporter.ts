interface ReportOpts {
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
