import { colors } from "@loxtjs/colors";
import { Reporter } from "@loxtjs/reporter";

/**
 * @module loxt
 * @class Loxt class to create an instance of loxt
 */

export class Loxt {
	/** @property Defines behaviour and looks of logging */
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

	/** Use the info reporter.
	 * @param message
	 */
	info(message: unknown): void {
		console.log(Loxt.format(this.reporter.info, message));
	}

	/** Use the success reporter.
	 * @param message
	 */
	success(message: unknown): void {
		console.log(Loxt.format(this.reporter.success, message));
	}

	/** Use the warning reporter.
	 * @param message
	 */
	warn(message: unknown): void {
		console.warn(Loxt.format(this.reporter.warn, message));
	}

	/** Use the error reporter
	 * @param error
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

	/** Use the ready reporter
	 * @param message
	 */
	ready(message: unknown): void {
		console.log(Loxt.format(this.reporter.ready, message));
	}

	/** Use the start reporter
	 * @param message
	 */
	start(message: unknown): void {
		console.log(Loxt.format(this.reporter.start, message));
	}

	/** @returns a new loxt instance with the same settings as this instance */
	clone(): Loxt {
		return new Loxt(this.reporter);
	}

	/** @returns a string representation of this instance */
	toString(): string {
		return `${colors.magenta("class")} ${colors.yellow(
			"Loxt",
		)} { \x1b[31mreporter\x1b[0m: \x1b[33m${
			this.reporter.constructor.name
		}\x1b[0m }`;
	}

	/** console.log alias with safe unknown
	 * @param message
	 */
	log(message: unknown): void {
		console.log(message);
	}

	/** @returns a new loxt instance with the same settings as this instance */
	static clone(instance: Loxt): Loxt {
		return new Loxt(instance.reporter);
	}

	/** @returns a string representation of this class */
	static toString(): string {
		return `${colors.magenta("class")} ${colors.yellow("Loxt")}(${colors.red(
			"reporter",
		)}: ${colors.yellow("Reporter")})`;
	}

	/** console.log alias with safe unknown
	 * @param message
	 */
	static log(message: unknown): void {
		console.log(message);
	}

	/** Replace the placeholder in the string with the provided message.
	 * @param reporter
	 * @param message
	 */
	static format(reporter: string, message: unknown): string {
		return reporter.replace(/\$message|\$name/g, `${message}`);
	}
}

export { colors, Reporter };

/** Replaces the placeholder in the string with the provided message.
 * @param reporter
 * @param message
 */
export const format = (reporter: string, message: unknown): string =>
	reporter.replace(/\$message|\$name/g, `${message}`);

/** @instance a global instance of Loxt */
export const loxt = new Loxt();
