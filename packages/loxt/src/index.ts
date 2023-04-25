/** @module loxt */

import { colors } from "@loxtjs/colors";
import { Reporter } from "@loxtjs/reporter";

/**
 * ## Loxt
 * constructor to create an instance of loxt
 * @constructor
 * @property {Reporter} reporter - Defined behaviour and looks of logging.
 * @see {@link https://loxt.js.org/classes/loxt}
 */
export class Loxt {
	reporter: Reporter;

	constructor(reporter?: Reporter) {
		this.reporter =
			reporter ??
			new Reporter({
				info: `${colors.bold(colors.blue("info"))}: ${colors.dim("$message")}`,
				warn: `${colors.bold(colors.yellow("warning"))}: ${colors.dim(
					"$message",
				)}`,
				ready: `${colors.green("ready")} ${colors.dim("$message")}`,
				start: `${colors.green("start")} ${colors.dim("$message")}`,
				success: `${colors.bold(colors.green("success"))}: ${colors.dim(
					"$message",
				)}`,
				error: {
					name: colors.bold(colors.red("$name")),
					message: colors.dim("$message"),
				},
			});
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
	 * Generates a new loxt instance with the same settings as this instance
	 * @returns the new instance
	 * @see {@link https://loxt.js.org/classes/loxt#clone}
	 */
	clone(): Loxt {
		return new Loxt(this.reporter);
	}

	/**
	 * Generates a string representation of this instance
	 * @returns a string representation of this instance
	 * @see {@link https://loxt.js.org/classes/loxt#toString}
	 */
	toString(): string {
		return `${colors.magenta("class")} ${colors.yellow(
			"Loxt",
		)} { \x1b[31mreporter\x1b[0m: \x1b[33m${
			this.reporter.constructor.name
		}\x1b[0m }`;
	}

	/** console.log alias with safe unknown
	 * @param message
	 * @see {@link https://loxt.js.org/classes/loxt#log}
	 */
	log(message: unknown): void {
		console.log(message);
	}

	/**
	 * Generates a new loxt instance with the same settings the instance you provide
	 * @returns the new instance
	 * @see {@link https://loxt.js.org/classes/loxt#clone-2}
	 */
	static clone(instance: Loxt): Loxt {
		return new Loxt(instance.reporter);
	}

	/**
	 * Generates a string representation of this class
	 * @returns a string representation of this class
	 * @see {@link https://loxt.js.org/classes/loxt#toString-2}
	 */
	static toString(): string {
		return `${colors.magenta("class")} ${colors.yellow("Loxt")}(${colors.red(
			"reporter",
		)}: ${colors.yellow("Reporter")})`;
	}

	/** console.log alias with safe unknown
	 * @param message
	 * @see {@link https://loxt.js.org/classes/loxt#log}
	 */
	static log(message: unknown): void {
		console.log(message);
	}

	/** Replaces the placeholder in the string with the provided message.
	 * @param reporter
	 * @param message
	 * @returns The formatted string
	 * @see {@link https://loxt.js.org/classes/loxt#format}
	 */
	static format(reporter: string, message: unknown): string {
		return reporter.replace(/\$message|\$name/g, `${message}`);
	}
}

export { colors, Reporter };

/** Replaces the placeholder in the string with the provided message (alias Loxt.format).
 * @param reporter
 * @param message
 * @returns The formatted string
 * @see {@link https://loxt.js.org/functions/format}
 */
export const format = (reporter: string, message: unknown): string =>
	reporter.replace(/\$message|\$name/g, `${message}`);

/**
 * A global instance of Loxt
 * @instance
 * @see {@link https://loxt.js.org/variables/loxt-1}
 */
export const loxt = new Loxt();
