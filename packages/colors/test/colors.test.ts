import { Colors } from '../src';
import { expect, test } from 'vitest';

const TEST = 'message for the test';

test('should be red', () => {
	expect(Colors.red(TEST)).toBe(`\x1b[31m${TEST}\x1b[0m`);
});

test('should be green', () => {
	expect(Colors.green(TEST)).toBe(`\x1b[32m${TEST}\x1b[0m`);
});

test('should be yellow', () => {
	expect(Colors.yellow(TEST)).toBe(`\x1b[33m${TEST}\x1b[0m`);
});

test('should be blue', () => {
	expect(Colors.blue(TEST)).toBe(`\x1b[34m${TEST}\x1b[0m`);
});

test('should be magenta', () => {
	expect(Colors.magenta(TEST)).toBe(`\x1b[35m${TEST}\x1b[0m`);
});

test('should be cyan', () => {
	expect(Colors.cyan(TEST)).toBe(`\x1b[36m${TEST}\x1b[0m`);
});

test('should be whteste', () => {
	expect(Colors.white(TEST)).toBe(`\x1b[37m${TEST}\x1b[0m`);
});

test('should be black', () => {
	expect(Colors.black(TEST)).toBe(`\x1b[90m${TEST}\x1b[0m`);
});

test('should be bgRed', () => {
	expect(Colors.bgRed(TEST)).toBe(`\x1b[41m${TEST}\x1b[0m`);
});

test('should be bgGreen', () => {
	expect(Colors.bgGreen(TEST)).toBe(`\x1b[42m${TEST}\x1b[0m`);
});

test('should be bgYellow', () => {
	expect(Colors.bgYellow(TEST)).toBe(`\x1b[43m${TEST}\x1b[0m`);
});

test('should be bgBlue', () => {
	expect(Colors.bgBlue(TEST)).toBe(`\x1b[44m${TEST}\x1b[0m`);
});

test('should be bgMagenta', () => {
	expect(Colors.bgMagenta(TEST)).toBe(`\x1b[45m${TEST}\x1b[0m`);
});

test('should be bgCyan', () => {
	expect(Colors.bgCyan(TEST)).toBe(`\x1b[46m${TEST}\x1b[0m`);
});

test('should be bgWhteste', () => {
	expect(Colors.bgWhite(TEST)).toBe(`\x1b[47m${TEST}\x1b[0m`);
});

test('should be bgBlack', () => {
	expect(Colors.bgBlack(TEST)).toBe(`\x1b[100m${TEST}\x1b[0m`);
});

test('should be bold', () => {
	expect(Colors.bold(TEST)).toBe(`\x1b[1m${TEST}\x1b[0m`);
});

test('should be dim', () => {
	expect(Colors.dim(TEST)).toBe(`\x1b[2m${TEST}\x1b[0m`);
});

test('should be underline', () => {
	expect(Colors.underline(TEST)).toBe(`\x1b[4m${TEST}\x1b[0m`);
});

test('should be invert', () => {
	expect(Colors.invert(TEST)).toBe(`\x1b[7m${TEST}\x1b[0m`);
});

test('should be blink', () => {
	expect(Colors.blink(TEST)).toBe(`\x1b[5m${TEST}\x1b[0m`);
});

test('should be hidden', () => {
	expect(Colors.hidden(TEST)).toBe(`\x1b[8m${TEST}\x1b[0m`);
});

test('should be strike', () => {
	expect(Colors.strike(TEST)).toBe(`\x1b[9m${TEST}\x1b[0m`);
});
