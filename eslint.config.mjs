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
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
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
      "react-hooks": reactHooks,
      "unused-imports": unusedImports,
    },
    languageOptions: {
      parser: typescriptEslintParser,
    },
    rules: {
      // Require Apache 2.0 license header on every source file
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

      //
      // ─── TypeScript rules ──────────────────────────────────────────────
      //

      // Keep overloads together for readability
      "@typescript-eslint/adjacent-overload-signatures": "warn",
      // Ban unsafe `as` casts like `x as any` — prefer type guards
      "@typescript-eslint/consistent-type-assertions": "warn",
      // Use `import type` for type-only imports — erased at runtime
      "@typescript-eslint/consistent-type-imports": "error",
      // Ban classes with only static members — use plain objects/functions instead
      "@typescript-eslint/no-extraneous-class": ["warn", {
        allowConstructorOnly: true,
        allowEmpty: true,
      }],
      // Ban explicit `any` — use `unknown`, generics, or proper types instead
      "@typescript-eslint/no-explicit-any": "warn",
      // Ban `new` in interfaces/type aliases — catches typo vs constructor signature
      "@typescript-eslint/no-misused-new": "warn",
      // Ban require() — use ESM imports
      "@typescript-eslint/no-require-imports": "warn",
      // Warn when variable shadows outer scope — prevents subtle name collision bugs
      "@typescript-eslint/no-shadow": "warn",
      // Ban `const self = this` — use arrow functions to capture `this`
      "@typescript-eslint/no-this-alias": "warn",
      // Ban the `Function` type — too permissive, use explicit function signatures
      "@typescript-eslint/no-unsafe-function-type": "warn",
      // Ban expressions used as statements — catches forgotten assignments/calls
      "@typescript-eslint/no-unused-expressions": ["warn", {
        allowShortCircuit: true,
        allowTernary: true,
        enforceForJSX: true,
      }],
      // Ban String/Number/Boolean wrapper types — use lowercase primitives
      "@typescript-eslint/no-wrapper-object-types": "warn",
      // Prefer for-of over indexed for loops — cleaner iteration
      "@typescript-eslint/prefer-for-of": "warn",
      // Use `namespace` not `module` keyword — `module` is confusing with ESM
      "@typescript-eslint/prefer-namespace-keyword": "warn",
      // Ban `/// <reference types="...">` — use imports instead
      "@typescript-eslint/triple-slash-reference": ["warn", {
        types: "prefer-import",
      }],
      // Merge overloads that differ only by one optional param — simpler API surface
      "@typescript-eslint/unified-signatures": "warn",

      //
      // ─── Code quality ──────────────────────────────────────────────────
      //
      // Note: curly is not enabled because dprint removes braces from single-line if/else

      // Use obj.prop not obj["prop"] when key is a valid identifier
      "dot-notation": "warn",
      // Require === and !== (except null checks) — prevents type coercion bugs
      eqeqeq: ["error", "always", { null: "never" }],
      // Require hasOwnProperty in for-in — prevents iterating inherited prototype properties
      "guard-for-in": "warn",
      // Ban bitwise operators — usually a typo for logical operators (|| vs |)
      "no-bitwise": "warn",
      // Ban arguments.caller/callee — deprecated, prevents JS engine optimizations
      "no-caller": "warn",
      // Ban assignment in conditions — usually a typo for === comparison
      "no-cond-assign": "warn",
      // Ban console.log — use a proper logger
      "no-console": "error",
      // Ban debugger statements — should never be committed
      "no-debugger": "warn",
      // Ban duplicate case labels in switch — always a copy-paste bug
      "no-duplicate-case": "warn",
      // Ban empty block statements — usually a missing implementation
      "no-empty": "warn",
      // Ban eval() — security risk, prevents JS engine optimizations
      "no-eval": "warn",
      // Ban unnecessary .bind() — use arrow functions instead
      "no-extra-bind": "warn",
      // Ban new Function() — eval() in disguise
      "no-new-func": "warn",
      // Ban new String/Number/Boolean — creates wrapper objects instead of primitives
      "no-new-wrappers": "warn",
      // Ban return await — redundant, adds an extra microtick for no benefit
      "no-return-await": "warn",
      // Ban the comma operator — obscure, harms readability
      "no-sequences": "warn",
      // Ban sparse arrays like [1,,3] — usually a typo
      "no-sparse-arrays": "warn",
      // Ban ${} in regular strings — usually meant to be a template literal
      "no-template-curly-in-string": "warn",
      // Ban `let x = undefined` — undefined is already the default value
      "no-undef-init": "warn",
      // Ban control flow in finally blocks — silently overrides try/catch return values
      "no-unsafe-finally": "warn",
      // Ban unused labels — dead code
      "no-unused-labels": "warn",
      // Ban unnecessary escape characters — cleaner regex and strings
      "no-useless-escape": "warn",
      // Ban var — use let/const for block scoping
      "no-var": "warn",
      // Require shorthand {x} instead of {x: x} — cleaner object literals
      "object-shorthand": "warn",
      // One variable per declaration — cleaner diffs, easier to read
      "one-var": ["warn", "never"],
      // Prefer arrow functions for callbacks — named functions still allowed for stack traces
      "prefer-arrow-callback": ["warn", { allowNamedFunctions: true }],
      // Prefer {...obj} over Object.assign — cleaner spread syntax
      "prefer-object-spread": "warn",
      // Require radix for parseInt — parseInt("08") is octal without radix in old engines
      radix: "warn",
      // Require isNaN() instead of x === NaN — NaN !== NaN is always true in JS
      "use-isnan": "warn",

      //
      // ─── React hooks (applies to .ts and .tsx) ─────────────────────────
      //

      // Hooks must be called at top level, in consistent order — React relies on call order
      "react-hooks/rules-of-hooks": "warn",
      // Warn on missing hook dependency array entries — prevents stale closures
      "react-hooks/exhaustive-deps": "warn",

      //
      // ─── Import rules ──────────────────────────────────────────────────
      //

      // Prefer named exports over default — better refactoring and grep-ability
      "import/no-default-export": "warn",
      // "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
      // Ban duplicate imports from the same module — merge them into one statement
      "import/no-duplicates": ["error"],
      // Enforce consistent import group ordering and alphabetical sorting
      "import/order": [
        "warn",
        {
          groups: [
            ["builtin", "external"],
            ["internal", "parent", "sibling", "index"],
          ],
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "import/no-unresolved": "off",
      "import/no-named-as-default": "off", // this used to be an error but the plugin isnt updated for 9

      // Remove imports that are never used — dead code cleanup
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
      // Use obj.prop not obj["prop"] — type-aware version replaces base rule
      "dot-notation": "off",
      "@typescript-eslint/dot-notation": "warn",
      // Enforce PascalCase for class names — standard TypeScript convention
      "@typescript-eslint/naming-convention": ["warn", {
        format: ["PascalCase"],
        selector: "class",
      }],

      // Ban unhandled promises — must await, return, or void them
      "@typescript-eslint/no-floating-promises": "error",
      // Ban await on non-Promise values — always a bug
      "@typescript-eslint/await-thenable": "error",
      // Ban passing async functions where void callbacks expected — catches unhandled rejections
      "@typescript-eslint/no-misused-promises": ["error", {
        // this lets you pass an async function to a definition of `() => void`
        checksVoidReturn: false,
      }],
      // Control what can appear in template literals — prevents [object Object] surprises
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
      "packages/typescript-sdk-docs-examples/**/*",
    ],
    rules: {
      "no-console": "off",
    },
  },
  //
  // React, hooks, and JSX accessibility rules for all TSX files
  //
  {
    files: ["**/*.tsx"],
    plugins: {
      react,
      "jsx-a11y": jsxA11y,
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      //
      // ─── React rules ────────────────────────────────────────────────
      //

      // Ban inline arrow functions in JSX props — causes unnecessary re-renders (DOM elements and refs exempt)
      "react/jsx-no-bind": ["warn", {
        ignoreDOMComponents: true,
        ignoreRefs: true,
      }],
      // Require explicit disabled={true} not just disabled — clearer intent
      "react/jsx-boolean-value": ["warn", "always"],
      // Require key prop on list items including fragment shorthand — prevents reconciliation bugs
      "react/jsx-key": ["warn", { checkFragmentShorthand: true }],
      // Require rel="noreferrer" with target="_blank" — prevents reverse tabnapping attacks
      "react/jsx-no-target-blank": ["warn", {
        enforceDynamicLinks: "always",
      }],
      // Ban deprecated React APIs — keeps code forward-compatible
      "react/no-deprecated": "warn",
      // Ban string refs like ref="myRef" — use useRef() or callback refs
      "react/no-string-refs": ["warn", { noTemplateLiterals: true }],
      // Require <Foo /> not <Foo></Foo> when no children — cleaner JSX
      "react/self-closing-comp": "warn",

      //
      // ─── JSX Accessibility ──────────────────────────────────────────
      //

      // Require alt text on images — screen readers need it
      "jsx-a11y/alt-text": "warn",
      // Ban <a> without href or with href="#" — use <button> for actions
      "jsx-a11y/anchor-is-valid": "warn",
      // Ban invalid aria-* attribute names — typos silently break accessibility
      "jsx-a11y/aria-props": "warn",
      // Require correct aria-* attribute values — e.g. aria-hidden must be boolean
      "jsx-a11y/aria-proptypes": "warn",
      // Require content inside headings — empty <h1/> breaks document outline
      "jsx-a11y/heading-has-content": "warn",
      // Ban aria-hidden on focusable elements — traps keyboard users
      "jsx-a11y/no-aria-hidden-on-focusable": "warn",
      // Require all ARIA props for a role — e.g. role="checkbox" needs aria-checked
      "jsx-a11y/role-has-required-aria-props": "warn",
      // Ban positive tabindex values — breaks natural keyboard tab order
      "jsx-a11y/tabindex-no-positive": "warn",
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
