import { defineColors } from "../src";
import { expect, test } from "vitest";

defineColors();

const TEST = "message for the test";

test("should be red", () => {
	expect(TEST.red).toBe(`\x1b[31m${TEST}\x1b[0m`);
});

test("should be green", () => {
	expect(TEST.green).toBe(`\x1b[32m${TEST}\x1b[0m`);
});

test("should be yellow", () => {
	expect(TEST.yellow).toBe(`\x1b[33m${TEST}\x1b[0m`);
});

test("should be blue", () => {
	expect(TEST.blue).toBe(`\x1b[34m${TEST}\x1b[0m`);
});

test("should be magenta", () => {
	expect(TEST.magenta).toBe(`\x1b[35m${TEST}\x1b[0m`);
});

test("should be cyan", () => {
	expect(TEST.cyan).toBe(`\x1b[36m${TEST}\x1b[0m`);
});

test("should be white", () => {
	expect(TEST.white).toBe(`\x1b[37m${TEST}\x1b[0m`);
});

test("should be black", () => {
	expect(TEST.black).toBe(`\x1b[30m${TEST}\x1b[0m`);
});

test("should be bgRed", () => {
	expect(TEST.bgRed).toBe(`\x1b[41m${TEST}\x1b[0m`);
});

test("should be bgGreen", () => {
	expect(TEST.bgGreen).toBe(`\x1b[42m${TEST}\x1b[0m`);
});

test("should be bgYellow", () => {
	expect(TEST.bgYellow).toBe(`\x1b[43m${TEST}\x1b[0m`);
});

test("should be bgBlue", () => {
	expect(TEST.bgBlue).toBe(`\x1b[44m${TEST}\x1b[0m`);
});

test("should be bgMagenta", () => {
	expect(TEST.bgMagenta).toBe(`\x1b[45m${TEST}\x1b[0m`);
});

test("should be bgCyan", () => {
	expect(TEST.bgCyan).toBe(`\x1b[46m${TEST}\x1b[0m`);
});

test("should be bgWhite", () => {
	expect(TEST.bgWhite).toBe(`\x1b[47m${TEST}\x1b[0m`);
});

test("should be bgBlack", () => {
	expect(TEST.bgBlack).toBe(`\x1b[40m${TEST}\x1b[0m`);
});

test("should be bold", () => {
	expect(TEST.textBold).toBe(`\x1b[1m${TEST}\x1b[0m`);
});

test("should be dim", () => {
	expect(TEST.textDim).toBe(`\x1b[2m${TEST}\x1b[0m`);
});

test("should be underscore", () => {
	expect(TEST.textUnderscore).toBe(`\x1b[4m${TEST}\x1b[0m`);
});

test("should be invert", () => {
	expect(TEST.textReverse).toBe(`\x1b[7m${TEST}\x1b[0m`);
});

test("should be blink", () => {
	expect(TEST.textBlink).toBe(`\x1b[5m${TEST}\x1b[0m`);
});

test("should be hidden", () => {
	expect(TEST.textHidden).toBe(`\x1b[8m${TEST}\x1b[0m`);
});

test("should be strike", () => {
	expect(TEST.textStrike).toBe(`\x1b[9m${TEST}\x1b[0m`);
});
