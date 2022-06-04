import { Loxt } from '../src';

describe('reporter', () => {
	it('should format', () => {
		expect(Loxt.format('$0', 'test')).toBe('test');
		expect(Loxt.format('$0: $1', 'test', 'test2')).toBe('test: test2');
	});
});

describe('logging', () => {
	const loxt = new Loxt();
	const spyLog = jest.spyOn(console, 'log');
	const spyWarn = jest.spyOn(console, 'warn');
	const spyError = jest.spyOn(console, 'error');

	it('should log info', () => {
		loxt.info('test');
		expect(spyLog).toHaveBeenCalledWith(Loxt.format(loxt.reporter.info, 'test'));
	});

	it('should log success', () => {
		loxt.success('test');
		expect(spyLog).toHaveBeenCalledWith(Loxt.format(loxt.reporter.success, 'test'));
	});

	it('should log warn', () => {
		loxt.warn('test');
		expect(spyWarn).toHaveBeenCalledWith(Loxt.format(loxt.reporter.warn, 'test'));
	});

	it('should log error', () => {
		loxt.error('test');
		expect(spyError).toHaveBeenCalledWith(Loxt.format(loxt.reporter.error, loxt.reporter.errTitle, Loxt.format(loxt.reporter.errMsg, 'test')));
	});

	it('should log ready', () => {
		loxt.ready('test');
		expect(spyLog).toHaveBeenCalledWith(Loxt.format(loxt.reporter.ready, 'test'));
	});

	it('should log start', () => {
		loxt.start('test');
		expect(spyLog).toHaveBeenCalledWith(Loxt.format(loxt.reporter.start, 'test'));
	});
});
