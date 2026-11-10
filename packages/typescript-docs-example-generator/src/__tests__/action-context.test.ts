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

import { TYPESCRIPT_OSDK_SNIPPETS } from "@osdk/typescript-sdk-docs";
import { describe, expect, it } from "vitest";
import { TemplateAnalyzer } from "../analyzer/template-analyzer.js";
import { getSnippetContext } from "../baseContext.js";
import { ContextValidator } from "../context/validator.js";
import { generateBlockVariations } from "../utils/generateBlockVariations.js";
import { TemplateValidator } from "../validation/template-validator.js";

describe("Typed action context", () => {
  it("defaults to literal action parameters", () => {
    expect(getSnippetContext("applyAction").useTypedActionParameters).toBe(
      false,
    );
    expect(getSnippetContext("batchApplyAction").useTypedActionParameters).toBe(
      false,
    );
  });

  it("recognizes the flag as a boolean variable", () => {
    const result = new TemplateAnalyzer().analyze(
      "{{useTypedActionParameters}}",
    );
    expect(result.success).toBe(true);
    if (!result.success) {
      throw new Error(result.error.message);
    }
    expect(result.value.variables).toContainEqual(
      expect.objectContaining({
        name: "useTypedActionParameters",
        type: "boolean",
      }),
    );
  });

  it.each([true, false])("accepts the boolean flag %s", (value) => {
    expect(
      new ContextValidator().validate(
        { useTypedActionParameters: value },
        true,
      ),
    ).toEqual({ valid: true, errors: [] });
  });

  it("rejects a string flag", () => {
    const result = new ContextValidator().validate(
      { useTypedActionParameters: "true" },
      true,
    );
    expect(result.valid).toBe(false);
    expect(result.errors).toContainEqual(
      expect.objectContaining({
        variable: "useTypedActionParameters",
        expected: "boolean",
        actual: "string",
      }),
    );
  });

  it("provides a boolean default for template validation", () => {
    const result = new TemplateValidator().analyzeAndValidate(
      "typedAction",
      "{{useTypedActionParameters}}",
      {},
    );
    expect(result.success).toBe(true);
    if (!result.success) {
      throw new Error(result.error.message);
    }
    expect(result.value.validation).toEqual({ valid: true, errors: [] });
  });

  describe.each(["2.0.0", "2.1.0"])("action variations for %s", (version) => {
    const snippets = TYPESCRIPT_OSDK_SNIPPETS.versions[version]?.snippets;

    it.each([
      {
        snippetKey: "applyAction",
        template: snippets?.applyAction?.[0]?.template,
        functionName: "callAction",
        parameterType: "documentEquipment.Params",
        literalCall: /client\(documentEquipment\)\.applyAction\(\s*\{/,
      },
      {
        snippetKey: "batchApplyAction",
        template: snippets?.batchApplyAction?.[0]?.template,
        functionName: "callBatchAction",
        parameterType: "ReadonlyArray<documentEquipment.Params>",
        literalCall: /client\(documentEquipment\)\.batchApplyAction\(\s*\[/,
      },
    ])("renders both $snippetKey parameter branches", ({
      snippetKey,
      template,
      functionName,
      parameterType,
      literalCall,
    }) => {
      if (!template) {
        throw new Error(`Missing ${snippetKey} template for ${version}`);
      }
      const analysis = new TemplateAnalyzer().analyze(template);
      if (!analysis.success) {
        throw new Error(analysis.error.message);
      }
      const result = generateBlockVariations(
        template,
        snippetKey,
        getSnippetContext(snippetKey),
        analysis.value.blocks,
        version,
      );
      expect(result.success).toBe(true);
      if (!result.success) {
        throw new Error(result.error.message);
      }

      const typed = result.value.variations[
        `${snippetKey}_#useTypedActionParameters`
      ]?.code;
      expect(typed).toContain(
        `async function ${functionName}(parameters: ${parameterType})`,
      );
      expect(typed).toMatch(
        new RegExp(
          `client\\(documentEquipment\\)\\.${snippetKey}\\(\\s*parameters\\s*,`,
        ),
      );
      expect(typed).not.toContain("\"equipmentId\":");

      const literal = result.value.variations[
        `${snippetKey}_^useTypedActionParameters`
      ]?.code;
      expect(literal).toContain(`async function ${functionName}()`);
      expect(literal).toMatch(literalCall);
      expect(literal).toContain("\"equipmentId\": \"mac-1234\"");
      expect(literal).not.toContain(".Params");
    });
  });
});
