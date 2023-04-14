interface Error {
	name: string;
	message: string;
}

export interface BaseReporter {
	info: string;
	warn: string;
	ready: string;
	start: string;
	success: string;
	error?: Error;
}

export class Reporter implements BaseReporter {
	#options: BaseReporter;

	constructor(options: BaseReporter) {
		this.#options = options;
	}

	get info(): string {
		return this.#options.info;
	}

	get warn(): string {
		return this.#options.warn;
	}

	get ready(): string {
		return this.#options.ready;
	}

	get start(): string {
		return this.#options.start;
	}

	get success(): string {
		return this.#options.success;
	}

	get error(): Error {
		return this.#options.error ?? { name: "$name", message: "$message" };
	}
}
