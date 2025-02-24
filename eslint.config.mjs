/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// @ts-check

import * as typescriptEslintParser from "@typescript-eslint/parser";
import originalHeaderPlugin from "eslint-plugin-header";
import * as importPlugin from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";
import * as tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "**/tsup.config.bundled_*",
      "**/vitest.config.mts.timestamp-*",
    ],
  },
  { files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"] },
  tseslint.configs.base,
  {
    plugins: {
      header: getHeaderPlugin(),
      import: importPlugin,
      "unused-imports": unusedImports,
    },
    languageOptions: {
      parser: typescriptEslintParser,
    },
    rules: {
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
      "@typescript-eslint/consistent-type-imports": "error",

      eqeqeq: ["error", "always", { null: "never" }],

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
      "import/no-named-as-default": "off", // this used to be an error but the plugin isnt updated for 9
      "no-console": "error",

      "unused-imports/no-unused-imports": "error",
    },
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx", ".mts", ".cts"],
      },
      "import/resolver": {
        typescript: true,
      },
    },
  },
  //
  // Dont require headers for the bin files nor the examples-extra
  //
  {
    files: [
      "**/bin/*.mjs",
      "**/bin/*.cjs",
      "examples-extra/**/*",
      "packages/e2e.sandbox.*/**/*",
    ],
    rules: {
      "header/header": "off",
    },
  },
  //
  // Type checking rules
  //
  {
    files: [
      "packages/*/src/**/*",
    ],
    extends: [
      tseslint.configs.strictTypeCheckedOnly,
    ],
    rules: {
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/no-misused-promises": ["error", {
        // this lets you pass an async function to a definition of `() => void`
        checksVoidReturn: false,
      }],
      "@typescript-eslint/restrict-template-expressions": ["error", {
        allow: [
          { name: ["Error", "URL", "URLSearchParams"], from: "lib" },
          "unknown",
        ],
        allowAny: true,
        allowBoolean: true,
        allowNullish: true,
        allowNumber: true,
        allowNever: true,
        allowRegExp: true,
        allowArray: true,
      }],

      // Too noisy or false positives
      "@typescript-eslint/no-unnecessary-type-assertion": "off",
      "@typescript-eslint/no-duplicate-type-constituents": "off",
      "@typescript-eslint/no-unnecessary-type-arguments": "off",
      "@typescript-eslint/no-unnecessary-condition": "off",
      "@typescript-eslint/no-unnecessary-type-parameters": "off",
      "@typescript-eslint/no-meaningless-void-operator": "off",

      // useful but noisy (or has bad fixer)
      "@typescript-eslint/require-await": "warn",
      "@typescript-eslint/unbound-method": "warn",
      "@typescript-eslint/no-unnecessary-template-expression": "warn",
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
      "@typescript-eslint/no-redundant-type-constituents": "warn",

      // ideally these would be an error because it does catch bugs
      // but it also requires a lot of code change right now
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "prefer-const": "warn",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-confusing-void-expression": ["warn", {
        ignoreArrowShorthand: true,
        ignoreVoidOperator: true,
      }],
      "@typescript-eslint/restrict-plus-operands": "warn",
      "@typescript-eslint/use-unknown-in-catch-callback-variable": "warn",
      "@typescript-eslint/only-throw-error": "warn",
      "@typescript-eslint/prefer-reduce-type-parameter": "warn",
      "@typescript-eslint/prefer-promise-reject-errors": "warn",
      "@typescript-eslint/no-base-to-string": "warn",
    },
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        projectService: true,
        // projectService: {
        //   allowDefaultProject: ["*.js", "vitest.config.mts", "bin/*.mjs"],
        // },
        tsconfigRootDir: process.cwd(),
      },
    },
  },
  {
    files: ["**/*.test.ts"],
    rules: {
      // Just trying to reduce the errors in tests
      "@typescript-eslint/unbound-method": "warn",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-deprecated": "warn",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-base-to-string": "off",
      // "@typescript-eslint/prefer-const": "warn",

      "eslint@typescript-eslint/require-await": "off",

      // rules that should be enabled but I dont want a massive delta yet
      "@typescript-eslint/await-thenable": "warn",
    },
  },
  //
  // test files can have console.log
  //   as can examples-extra
  //
  {
    files: [
      "**/*.test.ts",
      "**/test/*",
      "examples-extra/**/*",
      "packages/e2e.sandbox.*/**/*",
    ],
    rules: {
      "no-console": "off",
    },
  },
  //
  // Flat out ignore these globs
  //
  {
    // NOTE these are globs from root
    ignores: [
      "**/build/",
      "**/dist",
      "**/node_modules/",
      "**/build/",
      "**/src/generatedNoCheck/",
      "**/src/generatedNoCheck2/",
      "**/templates/",
      "examples/**/*",
      "packages/monorepo.*/**",
      "google-font-mocked-response.js",
      ".lintstagedrc.mjs",
      "tests/",
    ],
  },
);

// the header plugin is missing metadata that lets it work in 9 so we augment it here
function getHeaderPlugin() {
  return {
    ...originalHeaderPlugin,
    rules: {
      "header": {
        ...originalHeaderPlugin.rules.header,
        meta: {
          ...originalHeaderPlugin.rules.header.meta,
          fixable: "whitespace",
          schema: {
            $ref: "#/definitions/options",
            definitions: {
              commentType: {
                type: "string",
                enum: ["block", "line"],
              },
              line: {
                anyOf: [
                  {
                    type: "string",
                  },
                  {
                    type: "object",
                    properties: {
                      pattern: {
                        type: "string",
                      },
                      template: {
                        type: "string",
                      },
                    },
                    required: ["pattern"],
                    additionalProperties: false,
                  },
                ],
              },
              headerLines: {
                anyOf: [
                  {
                    $ref: "#/definitions/line",
                  },
                  {
                    type: "array",
                    items: {
                      $ref: "#/definitions/line",
                    },
                  },
                ],
              },
              numNewlines: {
                type: "integer",
                minimum: 0,
              },
              settings: {
                type: "object",
                properties: {
                  lineEndings: {
                    type: "string",
                    enum: ["unix", "windows"],
                  },
                },
                additionalProperties: false,
              },
              options: {
                anyOf: [
                  {
                    type: "array",
                    minItems: 1,
                    maxItems: 2,
                    items: [
                      { type: "string" },
                      { $ref: "#/definitions/settings" },
                    ],
                  },
                  {
                    type: "array",
                    minItems: 2,
                    maxItems: 3,
                    items: [
                      { $ref: "#/definitions/commentType" },
                      { $ref: "#/definitions/headerLines" },
                      { $ref: "#/definitions/settings" },
                    ],
                  },
                  {
                    type: "array",
                    minItems: 3,
                    maxItems: 4,
                    items: [
                      { $ref: "#/definitions/commentType" },
                      { $ref: "#/definitions/headerLines" },
                      { $ref: "#/definitions/numNewlines" },
                      { $ref: "#/definitions/settings" },
                    ],
                  },
                ],
              },
            },
          },
        },
      },
    },
  };
}
