interface ErrorOptions {
	name: string;
	message: string;
}

export interface ReportOptions {
	info: string;
	warn: string;
	ready: string;
	start: string;
	success: string;
	error?: ErrorOptions;
}

export class Reporter {
	#options: ReportOptions;

	constructor(options: ReportOptions) {
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

	get error(): ErrorOptions {
		return this.#options.error ?? { name: '$name', message: '$message' };
	}
}
