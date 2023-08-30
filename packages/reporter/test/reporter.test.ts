import { expect, test } from "vitest";
import { Reporter } from "../src";

const reporter = new Reporter({
	info: "info: $0",
	warn: "warning: $0",
	ready: "ready $0",
	start: "start $0",
	success: "success: $0",
});

test("should use the correct formatting for the reporters", () => {
	expect(reporter.info).toBe("info: $0");
	expect(reporter.warn).toBe("warning: $0");
	expect(reporter.ready).toBe("ready $0");
	expect(reporter.start).toBe("start $0");
	expect(reporter.success).toBe("success: $0");
	expect(reporter.error).toStrictEqual({ name: "$0", message: "$1" });
});
