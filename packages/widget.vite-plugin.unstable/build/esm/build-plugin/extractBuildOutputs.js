/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import fs from "fs";
import { parse as parse5 } from "parse5";
export function extractBuildOutputs(htmlFilePath) {
  const htmlContent = fs.readFileSync(htmlFilePath, "utf-8");
  return parseTransformResult(htmlContent);
}

/**
 * Parse the HTML transform result and extract the injected script details.
 */
function parseTransformResult(result) {
  const outputs = visitNode(parse5(result));
  return {
    scripts: outputs.filter(output => output.type === "script"),
    stylesheets: outputs.filter(output => output.type === "stylesheet").map(output => output.src)
  };
}
function visitNode(node) {
  if (node.nodeName === "script") {
    return [parseScriptNode(node)];
  }
  if (node.nodeName === "link" && getAttribute(node, "rel") === "stylesheet") {
    return [parseStylesheetNode(node)];
  }
  if ("childNodes" in node) {
    return node.childNodes.flatMap(childNode => visitNode(childNode));
  }
  return [];
}
function parseScriptNode(node) {
  assertEmptyNode(node);
  assertMinAttributes(node, ["src"]);
  assertMaxAttributes(node, ["src", "type", "crossorigin"]);
  const srcAttribute = getAttribute(node, "src");
  const typeAttribute = getAttributeOrDefault(node, "type", "text/javascript");
  if (!isValidScriptType(typeAttribute)) {
    throw new Error(`Invalid script type attribute found in Vite HTML output: ${typeAttribute}`);
  }
  return {
    type: "script",
    scriptType: typeAttribute ?? "text/javascript",
    src: srcAttribute
  };
}
function parseStylesheetNode(node) {
  assertEmptyNode(node);
  assertMinAttributes(node, ["rel", "href"]);
  // We don't handle media queries or other attributes on the link tag
  assertMaxAttributes(node, ["rel", "href", "crossorigin"]);
  const srcAttribute = getAttribute(node, "href");
  return {
    type: "stylesheet",
    src: srcAttribute
  };
}
function isValidScriptType(type) {
  return type === "text/javascript" || type === "module";
}
function assertMinAttributes(node, requiredAttributeNames) {
  const actualAttributeNames = new Set(node.attrs?.map(attr => attr.name));
  requiredAttributeNames.forEach(requiredAttributeName => {
    if (!actualAttributeNames.has(requiredAttributeName)) {
      throw new Error(`Missing ${requiredAttributeName} attribute in Vite HTML output`);
    }
  });
}
function assertMaxAttributes(node, allowedAttributeNames) {
  const actualAttributeNames = new Set(node.attrs?.map(attr => attr.name));
  actualAttributeNames.forEach(actualAttributeName => {
    if (!allowedAttributeNames.includes(actualAttributeName)) {
      throw new Error(`Unexpected ${actualAttributeName} attribute found in Vite HTML output`);
    }
  });
}
function assertEmptyNode(node) {
  if ("childNodes" in node && node.childNodes.length > 0) {
    throw new Error("Unexpected inline content found in Vite HTML output");
  }
}
function assertValue(actual, allowedValues) {
  if (!allowedValues.includes(actual)) {
    throw new Error(`Invalid value found in Vite HTML output: ${actual}`);
  }
}
function getAttribute(node, attributeName) {
  return node.attrs?.find(attribute => attribute.name === attributeName)?.value;
}
function getAttributeOrDefault(node, attributeName, defaultValue) {
  return getAttribute(node, attributeName) ?? defaultValue;
}
//# sourceMappingURL=extractBuildOutputs.js.map