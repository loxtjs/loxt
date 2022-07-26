/** Alias to Loxt.format()
 * @param str
 * @param messages
 */
export declare const format: (str: string, ...messages: unknown[]) => string;
export interface ReportOpts {
	info: string;
	warn: string;
	ready: string;
	start: string;
	success: string;
	error: string;
	errTitle: string;
	errMsg: string;
}
export declare class Reporter {
	#private;
	constructor(opts: ReportOpts);
	get info(): string;
	get warn(): string;
	get ready(): string;
	get start(): string;
	get success(): string;
	get error(): string;
	get errTitle(): string;
	get errMsg(): string;
}
export declare class Loxt {
	reporter: Reporter;
	constructor(reporter?: Reporter);
	success(message: unknown): void;
	info(message: unknown): void;
	warn(message: unknown): void;
	ready(message: unknown): void;
	start(message: unknown): void;
	error(error: unknown): void;
	log(message: unknown): void;
	clone(): Loxt;
	static clone(instance: Loxt): Loxt;
	static log(message: unknown): void;
	/** Format the `$0` and `$1` placeholders in the string.
	 * @param str
	 * @param messages
	 */
	static format(str: string, ...messages: unknown[]): string;
}
