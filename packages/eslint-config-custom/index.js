module.exports = {
	extends: ['turbo', 'prettier', 'typescript'],
	env: {
		node: true,
		es2021: true,
	},
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		semi: ['error', 'always'],
		quotes: ['error', 'single'],
	},
};
