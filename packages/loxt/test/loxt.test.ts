import { expect, test, vi } from "vitest";
import { loxt, Loxt } from "../src";

const TEST = "message for the test";

const clone = loxt.clone();

const spyLog = vi.spyOn(console, "log");
const spyWarn = vi.spyOn(console, "warn");
const spyError = vi.spyOn(console, "error");

test("should Loxt.format string", () => {
	expect(Loxt.format("$message", TEST)).toBe(TEST);
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

test("error reporter should log correctly if provided with a non-error type", () => {
	loxt.error(TEST);
	const { name, message } = loxt.reporter.error;
	expect(spyError).toHaveBeenCalledWith(
		`${Loxt.format(name, "error")}: ${Loxt.format(message, TEST)}`,
	);
});

test("error reporter should log correctly if provided with an error", () => {
	const error = new Error(TEST);
	loxt.error(error);
	const { name, message } = loxt.reporter.error;
	expect(spyError).toHaveBeenCalledWith(
		error.stack
			?.replace(error.name, Loxt.format(name, error.constructor.name))
			.replace(error.message, Loxt.format(message, error.message)),
	);
});

test("should log ready", () => {
	loxt.ready(TEST);
	expect(spyLog).toHaveBeenCalledWith(Loxt.format(loxt.reporter.ready, TEST));
});

test("should log start", () => {
	loxt.start(TEST);
	expect(spyLog).toHaveBeenCalledWith(Loxt.format(loxt.reporter.start, TEST));
});

test("should clone reporters With instance method", () => {
	expect(loxt.reporter).toEqual(clone.reporter);
});
