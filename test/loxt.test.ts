import { Loxt, format } from '../src/mod';

const TEST = 'message for the test';

describe('Reporter should format strings', () => {
	it('should format string', () => {
		expect(format('$message', TEST)).toBe(TEST);
	});
});

describe('Logging should use the correct reporter', () => {
	const loxt = new Loxt();
	const spyLog = jest.spyOn(console, 'log');
	const spyWarn = jest.spyOn(console, 'warn');
	const spyError = jest.spyOn(console, 'error');

	it('should log info', () => {
		loxt.info(TEST);
		expect(spyLog).toHaveBeenCalledWith(format(loxt.reporter.info, TEST));
	});

	it('should log success', () => {
		loxt.success(TEST);
		expect(spyLog).toHaveBeenCalledWith(format(loxt.reporter.success, TEST));
	});

	it('should log warn', () => {
		loxt.warn(TEST);
		expect(spyWarn).toHaveBeenCalledWith(format(loxt.reporter.warn, TEST));
	});

	it('should log error', () => {
		loxt.error(TEST);
		const { name, message } = loxt.reporter.error;
		expect(spyError).toHaveBeenCalledWith(`${format(name, 'error')}: ${format(message, TEST)}`);
	});

	it('should log ready', () => {
		loxt.ready(TEST);
		expect(spyLog).toHaveBeenCalledWith(format(loxt.reporter.ready, TEST));
	});

	it('should log start', () => {
		loxt.start(TEST);
		expect(spyLog).toHaveBeenCalledWith(format(loxt.reporter.start, TEST));
	});
});

describe('should clone correctly', () => {
	const loxt = new Loxt();
	const loxt2 = loxt.clone();
	const loxt3 = Loxt.clone(loxt);

	it('should clone reporters with instance method', () => {
		expect(loxt.reporter).toEqual(loxt2.reporter);
	});

	it('should clone reporters with static method', () => {
		expect(loxt.reporter).toEqual(loxt3.reporter);
	});
});
