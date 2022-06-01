import { salmon, Reporter } from './reporter';
export { salmon, Reporter };

export class Loxt {
	reporter: Reporter;

	constructor(options?: { reporter: Reporter }) {
		this.reporter = options?.reporter ?? salmon;
	}

	static format(reporter: string, ...messages: unknown[]): string {
		return reporter.replace(/%s|\$0/g, `${messages[0]}`).replace(/\$1/g, `${messages[1]}`);
	}

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
		if (error instanceof Error) {
			error.name = Loxt.format(this.reporter.errTitle, error.name);
			error.message = Loxt.format(this.reporter.errMsg, error.message);
			console.error(error);
		} else {
			console.error(Loxt.format(this.reporter.error, this.reporter.errTitle, Loxt.format(this.reporter.errMsg, error)));
		}
	}

	log(message: unknown): void {
		console.log(message);
	}

	static log(message: unknown): void {
		console.log(message);
	}
}
