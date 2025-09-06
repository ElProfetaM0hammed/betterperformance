import pluginNext from "@next/eslint-plugin-next";
import parser from "@typescript-eslint/parser"; // optional

export default [
  {
    extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
    },
  },
];
