/**
 * Color codes for terminal
 *
 * @access package
 */
const source = {
	textBold: "\x1b[1m",
	textDim: "\x1b[2m",
	textUnderscore: "\x1b[4m",
	textBlink: "\x1b[5m",
	textReverse: "\x1b[7m",
	textHidden: "\x1b[8m",
	textStrike: "\x1b[9m",

	black: "\x1b[30m",
	red: "\x1b[31m",
	green: "\x1b[32m",
	yellow: "\x1b[33m",
	blue: "\x1b[34m",
	magenta: "\x1b[35m",
	cyan: "\x1b[36m",
	white: "\x1b[37m",

	bgBlack: "\x1b[40m",
	bgRed: "\x1b[41m",
	bgGreen: "\x1b[42m",
	bgYellow: "\x1b[43m",
	bgBlue: "\x1b[44m",
	bgMagenta: "\x1b[45m",
	bgCyan: "\x1b[46m",
	bgWhite: "\x1b[47m",
};

type Source = typeof source;

declare global {
	interface String extends Source {}
}

/**
 * Defines the color properties in the String prototype.
 */
export const defineColors = () => {
	Object.keys(source).forEach((e) => {
		Object.defineProperty(String.prototype, e, {
			get() {
				return `${source[e as keyof typeof source]}${this}\x1b[0m`;
			},
		});
	});
};
