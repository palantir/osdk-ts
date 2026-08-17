/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import { describe, expect, it } from "vitest";
import yargs from "yargs";

import { oacGenerateCommand } from "./oacGenerate.js";

describe("oac generate", () => {
  it("requires a package name", async () => {
    expect(() =>
      yargs([
        "generate",
        "--ir",
        "ontology.json",
        "--outDir",
        "generated",
        "--version",
        "0.0.0-dev",
      ])
        .version(false)
        .exitProcess(false)
        .fail((message) => {
          throw new Error(message);
        })
        .command(oacGenerateCommand)
        .parse()
    ).toThrow("Missing required argument: packageName");
  });

  it("rejects an empty package name", async () => {
    expect(() =>
      yargs([
        "generate",
        "--ir",
        "ontology.json",
        "--outDir",
        "generated",
        "--version",
        "0.0.0-dev",
        "--packageName",
        "",
      ])
        .version(false)
        .exitProcess(false)
        .fail((_message, error) => {
          throw error;
        })
        .command(oacGenerateCommand)
        .parse()
    ).toThrow("packageName must not be empty");
  });
});
