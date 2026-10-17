
import js from "@eslint/js";

export default [
  {
    ignores: ["dist/**", "node_modules/**"],
  },
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        document: "readonly",
        window: "readonly",
        console: "readonly",
      },
    },
  },
];
