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
"use strict";

const fs = require("fs");
const path = require("path");

// this is okay because this file is a commonjs file
const DICT_FOLDER = __dirname;

const REGEX_OSDK_PACKAGE_NAME = /@osdk\/[\w\d.\-]+/g;

/**
 * Helper function so creating a dictionary definition just involves creating a file
 * named `dict.<name>.txt` in this folder.
 *
 * @returns {import("@cspell/cspell-types").DictionaryDefinition[]}
 */
function getDictionaryDefinitions() {
  const ret = [];
  for (const e of fs.readdirSync(DICT_FOLDER, { withFileTypes: true })) {
    if (e.isFile()) {
      const m = e.name.match(/^dict\.(.*)\.txt$/);
      if (!m) continue;

      ret.push({ name: m[1], path: path.join(DICT_FOLDER, e.name) });
    }
  }
  return ret;
}

/** @type { import("@cspell/cspell-types").CSpellUserSettings } */
const cspell = {
  version: "0.2",
  enableGlobDot: true,
  useGitignore: true,
  ignorePaths: [
    // always ignore
    "node_modules/**",
    ".git/**",
    ".gitignore",
    "**/.turbo/**/*",

    // Ignore these files for now
    "_gitignore",
    "*.{css,svg}",
    "*.{yml,yaml}",
    "*.json",
    "*.sh",
    "*.snap",

    // Dictionary files have words that are only used in certain contexts so they implicitly
    // won't pass the generic case.
    "dict.*.txt",

    // spell checking the cspell config is a bit of a chicken and egg problem
    "cspell.config.js",

    // Just too complex right now. We should fix this later.
    "eslint.config.mjs",
    "tsup.config.js",
    ".lintstagedrc.mjs",
    ".envrc.sample",
    ".monorepolint.config.mjs",

    // don't bother with any build directories
    "examples-extra/*/{build,dist}/**/*",
    "packages/*/build/**",

    // this is the conjure generated code that we won't keep forever
    "packages/client.unstable/src/generated/**",

    "packages/e2e.test.foundry-sdk-generator/src/generatedNoCheck/**/*",
    "packages/create-app.template.*/src/generatedNoCheck/**/*",
    "CHANGELOG.md",
  ],
  dictionaryDefinitions: [
    ...getDictionaryDefinitions(),
  ],
  patterns: [
    // In some test code we have some serialized urls that have oauth scopes in url params
    { name: "url-oauth-scopes", pattern: "/api%3A[a-z]+/" },

    // In some code we have a sample token which causes false positives
    { name: "oauth-token", pattern: "/eyJ[a-zA-Z0-9_.]+5c/" },
  ],
  ignoreRegExpList: [
    REGEX_OSDK_PACKAGE_NAME,
    // /@osdk\/[a-zA-Z0-9\.\-]+/,
    "/\/entitymetadata\//",
  ],

  dictionaries: [
    // builtin dicts to always include
    "en_US",
    "softwareTerms",
    "typescript",
    "node",
    "npm",

    // our dictionaries to always include
    "osdk",
    "npm-packages",
    "foundry-words",
    "normal-dev-words",
    "oauth",
  ],
  words: ["todoapp"],
  suggestWords: [],
  ignoreWords: [],
  import: [],
  overrides: [
    {
      filename: ["**/*.md"],
      dictionaries: ["foundry-words", "dev-words"],
    },
    {
      filename: [".changeset/**/*.md"],
    },
    {
      filename: ["**/*.{mts,cts,ts,tsx}"],
      dictionaries: ["osdk-code"],
      words: [
        // used in a regex
        "0123456789bcdefghjkmnpqrstuvwxyz",

        // used in a const (that is removed in a different PR)
        "asdfasdfdhjlkajhgj",

        // Used in a stub
        "Clooney",
      ],
      ignoreWords: [
        // it's an NPM package
        "escodegen",
        "blueprintjs",
        "picocolors",
        // used in a RID template literal string
        "widgetregistry",
      ],
    },
    {
      filename: "**/*.test.{mts,cts,ts,tsx}",
      dictionaries: [
        "test-words",
      ],
      ignoreRegExpList: [
        "url-oauth-scopes",
        "oauth-token",
      ],
    },
    {
      filename: [
        "packages/*/generatedNoCheck",
        "packages/*/generatedNoCheck2",

        // v1 client wire api
        "packages/gateway/src/generated/**",

        // "omni apis"
        "packages/foundry.*/src/**",
        "packages/internal.foundry.*/src/**",
      ],
      dictionaries: [
        // acceptable words in generated code
        "wire-api-words",

        // un-acceptable words in generated code that need to be fixed elsewhere
        "wire-api-words-to-fix",
      ],
    },
    {
      filename: [
        "packages/e2e.*/src/**/*.{mts,cts,ts,tsx}",
        "packages/shared.test/src/mock-ontology/**/*.{mts,cts,ts,tsx}",
        "examples-extra/*/src/**/*.{mts,cts,ts,tsx}",
      ],
      dictionaries: ["imported-ontologies"],
      ignoreRegExpList: [
        /Palo Alto/,
      ],
      words: [
        "Clooney",
        "Downey",
        "Hemsworth",
        "underlyings",
        "Dherlihy",
        "Mnayan",
      ],
    },
  ],
};

module.exports = cspell;
