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
  ignorePatterns: [
    "node_modules/",
    "build/",
    "src/generatedNoCheck/",
    "templates/",
    "__snapshots__/",
  ],
  rules: {
    "@typescript-eslint/consistent-type-imports": "error",

    "header/header": [
      2,
      "block",
      [
        {
          pattern:
            "(!\n)? Copyright \\d{4} Palantir Technologies, Inc\\. All rights reserved\\.",
          template: "\n"
            + ` * Copyright ${
              new Date().getFullYear()
            } Palantir Technologies, Inc. All rights reserved.\n`
            + " *\n"
            + " * Licensed under the Apache License, Version 2.0 (the \"License\");\n"
            + " * you may not use this file except in compliance with the License.\n"
            + " * You may obtain a copy of the License at\n"
            + " *\n"
            + " *     http://www.apache.org/licenses/LICENSE-2.0\n"
            + " *\n"
            + " * Unless required by applicable law or agreed to in writing, software\n"
            + " * distributed under the License is distributed on an \"AS IS\" BASIS,\n"
            + " * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n"
            + " * See the License for the specific language governing permissions and\n"
            + " * limitations under the License.\n"
            + " ",
        },
      ],
      2,
    ],

    "import/no-default-export": "off",

    // "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
    "import/no-duplicates": ["error"],
    "import/order": [
      "error",
      {
        groups: [[
          "internal",
          "builtin",
          "external",
          "parent",
          "sibling",
          "index",
        ]],
      },
    ],
    "import/no-unresolved": "off",
    "import/no-named-as-default": "error",
    "unused-imports/no-unused-imports": "error",
    "no-console": "error",
  },
  plugins: ["@typescript-eslint", "import", "header", "unused-imports"],
  parser: "@typescript-eslint/parser",

  // Obnoxiously, the only way to get eslint to check these files (and apply normal rules)
  // is to have an overrides section.
  overrides: [
    {
      files: ["**/bin/*.mjs"],
      rules: {
        "header/header": "off",
      },
    },
    {
      files: ["*.ts", "*.tsx", "*.mts", "*.cts"],
    },
    {
      files: ["**/*.test.ts", "**/test/*"],
      rules: {
        "no-console": "off",
      },
    },
  ],
};
