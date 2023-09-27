const { resolve } = require("node:path");

module.exports = {
  extends: [
    "plugin:@typescript-eslint/base",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],

  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    "import/resolver": {
      typescript: true,
    },
  },
  ignorePatterns: ["node_modules/", "dist/", "lib/"],
  rules: {
    "@typescript-eslint/consistent-type-imports": "error",
    "import/no-default-export": "off",

    // "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
    "import/no-duplicates": ["error"],
    "import/order": [
      "error",
      {
        groups: [
          "internal",
          "builtin",
          "external",
          "parent",
          "sibling",
          "index",
        ],
      },
    ],
    "import/no-unresolved": "off",
    "import/no-named-as-default": "error",
  },
  plugins: ["@typescript-eslint", "import"],
  parser: "@typescript-eslint/parser",

  // Obnoxiously, the only way to get eslint to check these files (and apply normal rules)
  // is to have an overrides section.
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.mts", "*.cts"],
    },
  ],
};
