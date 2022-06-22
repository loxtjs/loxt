import { Reporter } from './reporter';
export { Reporter };

export class Loxt {
	constructor(
		public reporter = new Reporter(
			Object.freeze({
				info: '\x1b[34m\x1b[1minfo\x1b[0m: \x1b[2m$0\x1b[0m',
				warn: '\x1b[33m\x1b[1mwarn\x1b[0m: \x1b[2m$0\x1b[0m',
				ready: '\x1b[32mready\x1b[0m \x1b[2m$0\x1b[0m',
				start: '\x1b[32mstart\x1b[0m \x1b[2m$0\x1b[0m',
				success: '\x1b[32m\x1b[1msuccess\x1b[0m: \x1b[2m$0\x1b[0m',
				error: '$0: $1',
				errTitle: '\x1b[31m\x1b[1merror\x1b[0m',
				errMsg: '\x1b[2m$0\x1b[0m',
			})
		)
	) {}

	success(message: unknown): void {
		console.log(Loxt.format(this.reporter.success, message));
	}

	info(message: unknown): void {
		console.log(Loxt.format(this.reporter.info, message));
	}

	warn(message: unknown): void {
		console.warn(Loxt.format(this.reporter.warn, message));
	}

	ready(message: unknown): void {
		console.log(Loxt.format(this.reporter.ready, message));
	}

	start(message: unknown): void {
		console.log(Loxt.format(this.reporter.start, message));
	}

	error(error: unknown): void {
		if (!(error instanceof Error))
			return console.error(Loxt.format(this.reporter.error, this.reporter.errTitle, Loxt.format(this.reporter.errMsg, error)));
		error.name = Loxt.format(this.reporter.errTitle, error.name);
		error.message = Loxt.format(this.reporter.errMsg, error.message);
		console.error(error);
	}

	log(message: unknown): void {
		console.log(message);
	}

	clone(): Loxt {
		return new Loxt(this.reporter);
	}

	static clone(instance: Loxt): Loxt {
		return instance.clone();
	}

	static log(message: unknown): void {
		console.log(message);
	}

	static format(str: string, ...messages: unknown[]): string {
		return str.replaceAll('$0', `${messages[0]}`).replaceAll('$1', `${messages[1]}`);
	}
}
