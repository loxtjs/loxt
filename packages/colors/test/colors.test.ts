import { colors } from "../src";
import { expect, test } from "vitest";

const TEST = "message for the test";

test("should be red", () => {
	expect(colors.red(TEST)).toBe(`\x1b[31m${TEST}\x1b[0m`);
});

test("should be green", () => {
	expect(colors.green(TEST)).toBe(`\x1b[32m${TEST}\x1b[0m`);
});

test("should be yellow", () => {
	expect(colors.yellow(TEST)).toBe(`\x1b[33m${TEST}\x1b[0m`);
});

test("should be blue", () => {
	expect(colors.blue(TEST)).toBe(`\x1b[34m${TEST}\x1b[0m`);
});

test("should be magenta", () => {
	expect(colors.magenta(TEST)).toBe(`\x1b[35m${TEST}\x1b[0m`);
});

test("should be cyan", () => {
	expect(colors.cyan(TEST)).toBe(`\x1b[36m${TEST}\x1b[0m`);
});

test("should be whteste", () => {
	expect(colors.white(TEST)).toBe(`\x1b[37m${TEST}\x1b[0m`);
});

test("should be black", () => {
	expect(colors.black(TEST)).toBe(`\x1b[90m${TEST}\x1b[0m`);
});

test("should be bgRed", () => {
	expect(colors.bgRed(TEST)).toBe(`\x1b[41m${TEST}\x1b[0m`);
});

test("should be bgGreen", () => {
	expect(colors.bgGreen(TEST)).toBe(`\x1b[42m${TEST}\x1b[0m`);
});

test("should be bgYellow", () => {
	expect(colors.bgYellow(TEST)).toBe(`\x1b[43m${TEST}\x1b[0m`);
});

test("should be bgBlue", () => {
	expect(colors.bgBlue(TEST)).toBe(`\x1b[44m${TEST}\x1b[0m`);
});

test("should be bgMagenta", () => {
	expect(colors.bgMagenta(TEST)).toBe(`\x1b[45m${TEST}\x1b[0m`);
});

test("should be bgCyan", () => {
	expect(colors.bgCyan(TEST)).toBe(`\x1b[46m${TEST}\x1b[0m`);
});

test("should be bgWhteste", () => {
	expect(colors.bgWhite(TEST)).toBe(`\x1b[47m${TEST}\x1b[0m`);
});

test("should be bgBlack", () => {
	expect(colors.bgBlack(TEST)).toBe(`\x1b[100m${TEST}\x1b[0m`);
});

test("should be bold", () => {
	expect(colors.bold(TEST)).toBe(`\x1b[1m${TEST}\x1b[0m`);
});

test("should be dim", () => {
	expect(colors.dim(TEST)).toBe(`\x1b[2m${TEST}\x1b[0m`);
});

test("should be underline", () => {
	expect(colors.underline(TEST)).toBe(`\x1b[4m${TEST}\x1b[0m`);
});

test("should be invert", () => {
	expect(colors.invert(TEST)).toBe(`\x1b[7m${TEST}\x1b[0m`);
});

test("should be blink", () => {
	expect(colors.blink(TEST)).toBe(`\x1b[5m${TEST}\x1b[0m`);
});

test("should be hidden", () => {
	expect(colors.hidden(TEST)).toBe(`\x1b[8m${TEST}\x1b[0m`);
});

test("should be strike", () => {
	expect(colors.strike(TEST)).toBe(`\x1b[9m${TEST}\x1b[0m`);
});
