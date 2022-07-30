/* ----------------- COLORS ----------------- */

export interface IColors {
	red: (text: unknown) => string;
	green: (text: unknown) => string;
	blue: (text: unknown) => string;
	yellow: (text: unknown) => string;
	cyan: (text: unknown) => string;
	magenta: (text: unknown) => string;
	white: (text: unknown) => string;
	black: (text: unknown) => string;
	bgRed: (text: unknown) => string;
	bgGreen: (text: unknown) => string;
	bgBlue: (text: unknown) => string;
	bgYellow: (text: unknown) => string;
	bgCyan: (text: unknown) => string;
	bgMagenta: (text: unknown) => string;
	bgWhite: (text: unknown) => string;
	bgBlack: (text: unknown) => string;
	bold: (text: unknown) => string;
	underline: (text: unknown) => string;
	dim: (text: unknown) => string;
	invert: (text: unknown) => string;
	blink: (text: unknown) => string;
	hidden: (text: unknown) => string;
	strike: (text: unknown) => string;
}

export const Colors: IColors = {
	red: text => `\x1b[31m${text}\x1b[0m`,
	green: text => `\x1b[32m${text}\x1b[0m`,
	yellow: text => `\x1b[33m${text}\x1b[0m`,
	blue: text => `\x1b[34m${text}\x1b[0m`,
	magenta: text => `\x1b[35m${text}\x1b[0m`,
	cyan: text => `\x1b[36m${text}\x1b[0m`,
	white: text => `\x1b[37m${text}\x1b[0m`,
	black: text => `\x1b[90m${text}\x1b[0m`,
	bgRed: text => `\x1b[41m${text}\x1b[0m`,
	bgGreen: text => `\x1b[42m${text}\x1b[0m`,
	bgYellow: text => `\x1b[43m${text}\x1b[0m`,
	bgBlue: text => `\x1b[44m${text}\x1b[0m`,
	bgMagenta: text => `\x1b[45m${text}\x1b[0m`,
	bgCyan: text => `\x1b[46m${text}\x1b[0m`,
	bgWhite: text => `\x1b[47m${text}\x1b[0m`,
	bgBlack: text => `\x1b[100m${text}\x1b[0m`,
	bold: text => `\x1b[1m${text}\x1b[0m`,
	dim: text => `\x1b[2m${text}\x1b[0m`,
	underline: text => `\x1b[4m${text}\x1b[0m`,
	invert: text => `\x1b[7m${text}\x1b[0m`,
	blink: text => `\x1b[5m${text}\x1b[0m`,
	hidden: text => `\x1b[8m${text}\x1b[0m`,
	strike: text => `\x1b[9m${text}\x1b[0m`,
};

/* ----------------- REPORTER ----------------- */

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
		return (
			this.#options.error ?? {
				name: '$name',
				message: '$message',
			}
		);
	}
}

/* ----------------- LOGGER ----------------- */

const { bold, dim, blue, green, yellow, red, magenta } = Colors;

/** **Alias to Loxt.format**:
 * Replace the placeholder in the string with the provided message.
 * @param reporter
 * @param message
 */
export const format = (reporter: string, message: unknown) => Loxt.format(reporter, message);

export class Loxt {
	constructor(
		public reporter = new Reporter({
			info: `${bold(blue('info'))}: ${dim('$message')}`,
			warn: `${bold(yellow('warn'))}: ${dim('$message')}`,
			ready: `${green('ready')} ${dim('$message')}`,
			start: `${green('start')} ${dim('$message')}`,
			success: `${bold(green('success'))}: ${dim('$message')}`,
			error: {
				name: bold(red('$name')),
				message: dim('$message'),
			},
		})
	) {}

	success(message: unknown): void {
		console.log(format(this.reporter.success, message));
	}

	info(message: unknown): void {
		console.log(format(this.reporter.info, message));
	}

	warn(message: unknown): void {
		console.warn(format(this.reporter.warn, message));
	}

	ready(message: unknown): void {
		console.log(format(this.reporter.ready, message));
	}

	start(message: unknown): void {
		console.log(format(this.reporter.start, message));
	}

	error(error: unknown): void {
		const { name, message } = this.reporter.error;
		if (!(error instanceof Error)) {
			console.error(`${format(name, 'error')}: ${format(message, error)}`);
			return;
		}
		console.error(error.stack.replace(error.name, format(name, error.constructor.name)).replace(error.message, format(message, error.message)));
	}

	log(message: unknown): void {
		console.log(message);
	}

	clone(): Loxt {
		return new Loxt(this.reporter);
	}

	toString(): string {
		return `${magenta('class')} ${yellow('Loxt')} { \x1b[31mreporter\x1b[0m: \x1b[33m${this.reporter.constructor.name}\x1b[0m }`;
	}

	static toString(): string {
		return `${magenta('class')} ${yellow('Loxt')}(${red('reporter')}: ${yellow('Reporter')})`;
	}

	static clone(instance: Loxt): Loxt {
		return new Loxt(instance.reporter);
	}

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

export default new Loxt();
