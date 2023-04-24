/** Interface of the loxt error */
export interface LoxtError {
	name: string;
	message: string;
}

/** Interface of the reporter */
export interface LoxtReporter {
	info: string;
	warn: string;
	ready: string;
	start: string;
	success: string;
	error?: LoxtError;
}

/**
 * @module reporter
 * @class constructor to create a Reporter
 */
export class Reporter implements LoxtReporter {
	#options: LoxtReporter;

	constructor(options: LoxtReporter) {
		this.#options = options;
	}

	/** Access the info reporter */
	get info(): string {
		return this.#options.info;
	}

	/** Access the success reporter */
	get success(): string {
		return this.#options.success;
	}

	/** Access the warn reporter */
	get warn(): string {
		return this.#options.warn;
	}

	/** Access the error reporter */
	get error(): LoxtError {
		return this.#options.error ?? { name: "$name", message: "$message" };
	}

	/** Access the ready reporter */
	get ready(): string {
		return this.#options.ready;
	}

	/** Access the start reporter */
	get start(): string {
		return this.#options.start;
	}
}
