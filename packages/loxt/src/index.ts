import { Colors } from '@loxt/colors';
import { Reporter } from '@loxt/reporter';

export class Loxt {
	constructor(
		public reporter = new Reporter({
			info: `${Colors.bold(Colors.blue('info'))}: ${Colors.dim('$message')}`,
			warn: `${Colors.bold(Colors.yellow('warning'))}: ${Colors.dim('$message')}`,
			ready: `${Colors.green('ready')} ${Colors.dim('$message')}`,
			start: `${Colors.green('start')} ${Colors.dim('$message')}`,
			success: `${Colors.bold(Colors.green('success'))}: ${Colors.dim('$message')}`,
			error: {
				name: Colors.bold(Colors.red('$name')),
				message: Colors.dim('$message'),
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
		console.error(error.stack?.replace(error.name, format(name, error.constructor.name)).replace(error.message, format(message, error.message)));
	}

	log(message: unknown): void {
		console.log(message);
	}

	clone(): Loxt {
		return new Loxt(this.reporter);
	}

	toString(): string {
		return `${Colors.magenta('class')} ${Colors.yellow('Loxt')} { \x1b[31mreporter\x1b[0m: \x1b[33m${this.reporter.constructor.name}\x1b[0m }`;
	}

	static toString(): string {
		return `${Colors.magenta('class')} ${Colors.yellow('Loxt')}(${Colors.red('reporter')}: ${Colors.yellow('Reporter')})`;
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

export { Colors, Reporter };

/** **Alias to Loxt.format**:
 * Replace the placeholder in the string with the provided message.
 * @param {string} reporter
 * @param {unknown} message
 */
export const format = (reporter: string, message: unknown): string => Loxt.format(reporter, message);
export const loxt = new Loxt();
