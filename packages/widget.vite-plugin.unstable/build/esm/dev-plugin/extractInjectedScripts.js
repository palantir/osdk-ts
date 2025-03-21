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

import { parse as parse5 } from "parse5";
/**
 * Extracts inline scripts usually injected by Vite plugins during HTML transformation.
 *
 * Vite plugins can inject scripts into the HTML entrypoint. This function captures
 * those injections, specifically inline scripts, which are needed for our server-side
 * rendered pages. It calls the `transformIndexHtml` hook on each plugin, collects
 * the script descriptors, and returns the concatenated inline script contents.
 *
 * See documentation: https://vite.dev/guide/api-plugin#transformindexhtml
 */
export async function extractInjectedScripts(server) {
  const result = await server.transformIndexHtml("", "");
  return parseTransformResult(result);
}

/**
 * Parse the HTML transform result and extract the injected script details.
 */
function parseTransformResult(result) {
  const foundScripts = visitNode(parse5(result));
  return {
    scriptSources: foundScripts.filter(script => script.type === "src").map(script => script.src),
    inlineScripts: foundScripts.filter(script => script.type === "inline").map(script => script.content)
  };
}
function visitNode(node) {
  if (node.nodeName === "script") {
    return [parseScriptNode(node)];
  }
  if ("childNodes" in node) {
    return node.childNodes.flatMap(childNode => visitNode(childNode));
  }
  return [];
}
function parseScriptNode(node) {
  const srcAttribute = node.attrs?.find(attribute => attribute.name === "src");
  return srcAttribute != null ? {
    type: "src",
    src: srcAttribute.value
  } : {
    type: "inline",
    content: node.childNodes.filter(childNode => childNode.nodeName === "#text").map(childNode => childNode.value.trim()).join("\n")
  };
}
//# sourceMappingURL=extractInjectedScripts.js.map