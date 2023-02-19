import { expect, test, vi } from "vitest";
import { loxt, Loxt, Colors, Reporter, format } from "../src";

const TEST = "message for the test";

const loxt2 = loxt.clone();
const loxt3 = Loxt.clone(loxt);

const spyLog = vi.spyOn(console, "log");
const spyWarn = vi.spyOn(console, "warn");
const spyError = vi.spyOn(console, "error");

test("should Loxt.format string", () => {
	expect(Loxt.format("$message", TEST)).toBe(TEST);
	expect(format("$message", TEST)).toBe(TEST);
});

test("should log info", () => {
	loxt.info(TEST);
	expect(spyLog).toHaveBeenCalledWith(Loxt.format(loxt.reporter.info, TEST));
});

test("should log success", () => {
	loxt.success(TEST);
	expect(spyLog).toHaveBeenCalledWith(Loxt.format(loxt.reporter.success, TEST));
});

test("should log warn", () => {
	loxt.warn(TEST);
	expect(spyWarn).toHaveBeenCalledWith(Loxt.format(loxt.reporter.warn, TEST));
});

test("should log error With string", () => {
	loxt.error(TEST);
	const { name, message } = loxt.reporter.error;
	expect(spyError).toHaveBeenCalledWith(
		`${Loxt.format(name, "error")}: ${Loxt.format(message, TEST)}`,
	);
});

test("should log error With Error", () => {
	const error = new Error(TEST);
	loxt.error(error);
	const { name, message } = loxt.reporter.error;
	expect(spyError).toHaveBeenCalledWith(
		error.stack
			?.replace(error.name, Loxt.format(name, error.constructor.name))
			.replace(error.message, Loxt.format(message, error.message)),
	);
});

test("should have default error", () => {
	const reporter = new Reporter({
		info: "",
		ready: "",
		start: "",
		success: "",
		warn: "",
	});
	expect(reporter.error).toMatchObject({ name: "$name", message: "$message" });
});

test("should log ready", () => {
	loxt.ready(TEST);
	expect(spyLog).toHaveBeenCalledWith(Loxt.format(loxt.reporter.ready, TEST));
});

test("should log start", () => {
	loxt.start(TEST);
	expect(spyLog).toHaveBeenCalledWith(Loxt.format(loxt.reporter.start, TEST));
});

test("should just log", () => {
	loxt.log(TEST);
	expect(spyLog).toHaveBeenCalledWith(TEST);
});

test("should just log", () => {
	Loxt.log(TEST);
	expect(spyLog).toHaveBeenCalledWith(TEST);
});

test("should convert With function", () => {
	expect(loxt.toString()).toBe(
		`${Colors.magenta("class")} ${Colors.yellow(
			"Loxt",
		)} { \x1b[31mreporter\x1b[0m: \x1b[33m${
			loxt.reporter.constructor.name
		}\x1b[0m }`,
	);
});

test("should convert With static function", () => {
	expect(Loxt.toString()).toBe(
		`${Colors.magenta("class")} ${Colors.yellow("Loxt")}(${Colors.red(
			"reporter",
		)}: ${Colors.yellow("Reporter")})`,
	);
});

test("should clone reporters With instance method", () => {
	expect(loxt.reporter).toEqual(loxt2.reporter);
});

test("should clone reporters With static method", () => {
	expect(loxt.reporter).toEqual(loxt3.reporter);
});
