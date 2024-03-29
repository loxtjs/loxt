import { Reporter } from "@loxtjs/reporter";

/**
 * ## Loxt
 * utility class to use the logger (reporter)
 * @class
 * @property {Reporter} reporter - Defined behaviour and looks of logging.
 * @see {@link https://loxt.js.org/classes/loxt}
 */
export class Loxt {
	reporter: Reporter;

	/**
	 * ## Loxt
	 * constructor for the Loxt class
	 * @constructor
	 * @param reporter
	 * @see {@link https://loxt.js.org/classes/loxt#constructor}
	 * @returns Instance of Loxt with the provided reporter
	 */
	constructor(
		reporter: Reporter = new Reporter({
			info: "\x1b[1m\x1b[34minfo\x1b[0m: $0\x1b[0m",
			warn: "\x1b[1m\x1b[33mwarning\x1b[0m: $0\x1b[0m",
			ready: "\x1b[1m\x1b[32mready\x1b[0m $0\x1b[0m",
			start: "\x1b[1m\x1b[32mstart\x1b[0m $0\x1b[0m",
			success: "\x1b[1m\x1b[32msuccess\x1b[0m: $0\x1b[0m",
			error: {
				name: "\x1b[1m\x1b[31m$0\x1b[0m",
				message: "$1\x1b[0m",
			},
		}),
	) {
		this.info = this.info.bind(this);
		this.success = this.success.bind(this);
		this.warn = this.warn.bind(this);
		this.error = this.error.bind(this);
		this.ready = this.ready.bind(this);
		this.start = this.start.bind(this);
		this.clone = this.clone.bind(this);

		this.reporter = reporter;
	}

	/**
	 * Log with the info reporter.
	 * @param message
	 * @see {@link https://loxt.js.org/classes/loxt#info}
	 */
	info(message: unknown): void {
		console.log(Loxt.format(this.reporter.info, message));
	}

	/**
	 * Log with the success reporter.
	 * @param message
	 * @see {@link https://loxt.js.org/classes/loxt#success}
	 */
	success(message: unknown): void {
		console.log(Loxt.format(this.reporter.success, message));
	}

	/**
	 * Log with the warning reporter.
	 * @param message
	 * @see {@link https://loxt.js.org/classes/loxt#warn}
	 */
	warn(message: unknown): void {
		console.warn(Loxt.format(this.reporter.warn, message));
	}

	/**
	 * Log with the error reporter
	 * @param error
	 * @see {@link https://loxt.js.org/classes/loxt#error}
	 */
	error(error: unknown): void {
		const { name, message } = this.reporter.error;

		if (!(error instanceof Error)) {
			8;
			console.error(
				`${Loxt.format(name, "error")}: ${Loxt.format(message, error)}`,
			);
			return;
		}

		console.error(
			error.stack
				?.replace(error.name, Loxt.format(name, error.constructor.name))
				?.replace(error.message, Loxt.format(message, error.message)),
		);
	}

	/**
	 * Log with the ready reporter
	 * @param message
	 * @see {@link https://loxt.js.org/classes/loxt#ready}
	 */
	ready(message: unknown): void {
		console.log(Loxt.format(this.reporter.ready, message));
	}

	/**
	 * Log with the start reporter
	 * @param message
	 * @see {@link https://loxt.js.org/classes/loxt#start}
	 */
	start(message: unknown): void {
		console.log(Loxt.format(this.reporter.start, message));
	}

	/**
	 * Generates a new loxt instance with the same reporter as this instance
	 * @returns the new instance
	 * @see {@link https://loxt.js.org/classes/loxt#clone}
	 */
	clone(): Loxt {
		return new Loxt(this.reporter);
	}

	/** Replaces the placeholder in the string with the provided message.
	 * @param reporter
	 * @param message
	 * @returns The formatted string
	 * @static
	 * @see {@link https://loxt.js.org/classes/loxt#format}
	 */
	static format(reporter: string, message: unknown): string {
		return reporter.replace(/\$[0-9]/, `${message}`);
	}
}

/**
 * A global instance of Loxt
 * @instance
 * @see {@link https://loxt.js.org/variables/loxt-1}
 */
export const loxt = new Loxt();

export { Reporter };
