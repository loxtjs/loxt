export interface LoxtError {
	name: string;
	message: string;
}

export interface LoxtReporter {
	info: string;
	warn: string;
	ready: string;
	start: string;
	success: string;
	error?: LoxtError;
}

export class Reporter implements LoxtReporter {
	#options: LoxtReporter;

	constructor(options: LoxtReporter) {
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

	get error(): LoxtError {
		return this.#options.error ?? { name: "$name", message: "$message" };
	}
}
