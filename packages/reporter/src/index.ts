/** @module reporter */

/**
 * Helper type of the loxt error
 * @access package
 */
type LoxtError = {
	name: string;
	message: string;
};

/**
 * Helper type of the reporter
 * @access package
 */
type LoxtReporter = {
	info: string;
	warn: string;
	ready: string;
	start: string;
	success: string;
	error?: LoxtError;
};

/**
 * ## Reporter
 * constructor to create a Reporter instance
 * @constructor
 * @see {@link https://loxt.js.org/classes/reporter}
 */
export class Reporter implements LoxtReporter {
	/** @access package */
	#options: LoxtReporter;

	constructor(options: LoxtReporter) {
		this.#options = options;
	}

	/**
	 * Access the info reporter
	 * @see {@link https://loxt.js.org/classes/reporter#info}
	 */
	get info(): string {
		return this.#options.info;
	}

	/**
	 * Access the success reporter
	 * @see {@link https://loxt.js.org/classes/reporter#success}
	 */
	get success(): string {
		return this.#options.success;
	}

	/**
	 * Access the warn reporter
	 * @see {@link https://loxt.js.org/classes/reporter#warn}
	 */
	get warn(): string {
		return this.#options.warn;
	}

	/**
	 * Access the error reporter
	 * @see {@link https://loxt.js.org/classes/reporter#error}
	 */
	get error(): LoxtError {
		return this.#options.error ?? { name: "$name", message: "$message" };
	}

	/**
	 * Access the ready reporter
	 * @see {@link https://loxt.js.org/classes/reporter#ready}
	 */
	get ready(): string {
		return this.#options.ready;
	}

	/**
	 * Access the start reporter
	 * @see {@link https://loxt.js.org/classes/reporter#start}
	 */
	get start(): string {
		return this.#options.start;
	}
}
