/** Helper package with escape codes for terminal colors */

type Color = (text: unknown) => string;

interface Colors {
	red: Color;
	green: Color;
	yellow: Color;
	blue: Color;
	magenta: Color;
	cyan: Color;
	white: Color;
	black: Color;
	bgRed: Color;
	bgGreen: Color;
	bgYellow: Color;
	bgBlue: Color;
	bgMagenta: Color;
	bgCyan: Color;
	bgWhite: Color;
	bgBlack: Color;
	bold: Color;
	dim: Color;
	underline: Color;
	invert: Color;
	blink: Color;
	hidden: Color;
	strike: Color;
}

export const colors: Colors = {
	red: (text) => `\x1b[31m${text}\x1b[0m`,
	green: (text) => `\x1b[32m${text}\x1b[0m`,
	yellow: (text) => `\x1b[33m${text}\x1b[0m`,
	blue: (text) => `\x1b[34m${text}\x1b[0m`,
	magenta: (text) => `\x1b[35m${text}\x1b[0m`,
	cyan: (text) => `\x1b[36m${text}\x1b[0m`,
	white: (text) => `\x1b[37m${text}\x1b[0m`,
	black: (text) => `\x1b[90m${text}\x1b[0m`,
	bgRed: (text) => `\x1b[41m${text}\x1b[0m`,
	bgGreen: (text) => `\x1b[42m${text}\x1b[0m`,
	bgYellow: (text) => `\x1b[43m${text}\x1b[0m`,
	bgBlue: (text) => `\x1b[44m${text}\x1b[0m`,
	bgMagenta: (text) => `\x1b[45m${text}\x1b[0m`,
	bgCyan: (text) => `\x1b[46m${text}\x1b[0m`,
	bgWhite: (text) => `\x1b[47m${text}\x1b[0m`,
	bgBlack: (text) => `\x1b[100m${text}\x1b[0m`,
	bold: (text) => `\x1b[1m${text}\x1b[0m`,
	dim: (text) => `\x1b[2m${text}\x1b[0m`,
	underline: (text) => `\x1b[4m${text}\x1b[0m`,
	invert: (text) => `\x1b[7m${text}\x1b[0m`,
	blink: (text) => `\x1b[5m${text}\x1b[0m`,
	hidden: (text) => `\x1b[8m${text}\x1b[0m`,
	strike: (text) => `\x1b[9m${text}\x1b[0m`,
};
