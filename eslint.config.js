import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";

export default tseslint.config(
	{
		ignores: ["dist"],
	},
	{
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommended,
			stylistic.configs.customize({
				quotes: "double",
				commaDangle: "always-multiline",
				indent: "tab",
				semi: true,
				jsx: true,
			}),
		],
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			ecmaVersion: 2023,
			globals: globals.browser,
		},
		plugins: {
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			"react-refresh/only-export-components": [
				"warn",
				{ allowConstantExport: true },
			],
			"@stylistic/no-trailing-spaces": "off",
			"@stylistic/jsx-one-expression-per-line": "off",
			"@stylistic/padded-blocks": "off",
			"@stylistic/spaced-comment": "off",
			"@typescript-eslint/no-explicit-any": "off",
		},
	},
);
