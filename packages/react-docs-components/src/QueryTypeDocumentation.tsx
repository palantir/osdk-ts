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

import { Card, H4, HTMLTable, Tag } from "@blueprintjs/core";
import type { SdkSnippets } from "@osdk/docs-spec-core";
import { OSDK_SNIPPETS_SPEC } from "@osdk/docs-spec-sdk";
import type { OntologyFullMetadata, QueryParameterV2, QueryTypeV2 } from "@osdk/foundry.ontologies";
import React, { useMemo } from "react";
import { EXTENDED_OSDK_SNIPPETS_SPEC } from "./extendedSnippetSpec.js";
import { SNIPPET_CATEGORIES } from "./snippetCategories.js";
import { SnippetCard } from "./SnippetCard.js";
import { getLatestSnippetVersion, toCamelCase } from "./utils/snippetHelpers.js";

export interface QueryTypeDocumentationProps {
  documentation: SdkSnippets<typeof OSDK_SNIPPETS_SPEC>;
  ontology: OntologyFullMetadata;
  spec: typeof OSDK_SNIPPETS_SPEC;
  queryTypeApiName: string;
}

interface ParameterInfo {
  apiName: string;
  displayName: string;
  type: string;
  description: string;
}

function formatParameterType(dataType: { type: string }): string {
  const typeMap: Record<string, string> = {
    string: "String",
    integer: "Integer",
    double: "Double",
    boolean: "Boolean",
    date: "Date",
    timestamp: "Timestamp",
    attachment: "Attachment",
    objectSet: "ObjectSet",
    object: "Object",
    array: "Array",
    struct: "Struct",
  };
  return typeMap[dataType.type] || dataType.type;
}

function extractParameters(parameters: Record<string, QueryParameterV2>): ParameterInfo[] {
  return Object.entries(parameters).map(([apiName, param]) => ({
    apiName,
    displayName: toCamelCase(apiName),
    type: formatParameterType(param.dataType as { type: string }),
    description: param.description || "",
  }));
}

function formatOutputType(output: unknown): string {
  const outputObj = output as { dataType?: { type?: string }; type?: string } | undefined;
  if (!outputObj) return "Unknown";

  // Handle case where output has dataType
  if (outputObj.dataType?.type) {
    return formatParameterType({ type: outputObj.dataType.type });
  }

  // Handle case where output is the dataType directly
  if (outputObj.type) {
    return formatParameterType({ type: outputObj.type });
  }

  return "Unknown";
}

export function QueryTypeDocumentation({
  documentation,
  ontology,
  queryTypeApiName,
}: QueryTypeDocumentationProps): React.ReactElement {
  const queryTypeCamel = toCamelCase(queryTypeApiName);

  // Get query type metadata
  const queryType = ontology.queryTypes[queryTypeApiName] as QueryTypeV2 | undefined;

  // Extract parameters info
  const parameters = useMemo((): ParameterInfo[] => {
    if (!queryType?.parameters) return [];
    return extractParameters(queryType.parameters);
  }, [queryType]);

  // Get output type
  const outputType = useMemo(() => {
    if (!queryType?.output) return "Unknown";
    return formatOutputType(queryType.output);
  }, [queryType]);

  // Get available snippets for query type
  const availableSnippets = useMemo(() => {
    const result: { name: string; snippet: NonNullable<ReturnType<typeof getLatestSnippetVersion>> }[] = [];

    for (const name of SNIPPET_CATEGORIES.queryType) {
      const snippet = getLatestSnippetVersion(documentation, name);
      if (snippet) {
        result.push({ name, snippet });
      }
    }
    return result;
  }, [documentation]);

  if (!queryType) {
    return (
      <div className="query-type-documentation">
        <Card elevation={1}>
          <p>Query type "{queryTypeApiName}" not found in ontology.</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="query-type-documentation">
      <header className="docs-header">
        <h1 className="type-title">{queryType.displayName || queryTypeCamel}</h1>
        <p className="api-name">API Name: <code>{queryTypeApiName}</code></p>
      </header>

      <section className="type-info">
        <Card elevation={1}>
          <H4>Description</H4>
          <p className="description-text">
            {queryType.description || "No description available."}
          </p>
          <div className="output-type-row">
            <strong>Output Type:</strong> <Tag intent="success" minimal>{outputType}</Tag>
          </div>
          {queryType.version && (
            <div className="version-row">
              <strong>Version:</strong> <Tag minimal>{queryType.version}</Tag>
            </div>
          )}
        </Card>
      </section>

      {parameters.length > 0 && (
        <section className="parameters-section">
          <H4>Input Parameters</H4>
          <Card elevation={1}>
            <HTMLTable bordered striped className="parameters-table">
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>API Name</th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {parameters.map((param) => (
                  <tr key={param.apiName}>
                    <td className="parameter-name">{param.displayName}</td>
                    <td>
                      <code className="api-name-badge">{param.apiName}</code>
                    </td>
                    <td className="parameter-type">{param.type}</td>
                    <td className="parameter-description">
                      {param.description || "No description"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </HTMLTable>
          </Card>
        </section>
      )}

      {availableSnippets.length > 0 && (
        <section className="snippets-section">
          <H4>Code Snippets</H4>
          <div className="snippets-grid">
            {availableSnippets.map(({ name, snippet }) => (
              <SnippetCard
                key={name}
                snippetName={name}
                snippet={snippet}
                documentation={documentation}
                ontology={ontology}
                extendedSpec={EXTENDED_OSDK_SNIPPETS_SPEC}
                entityType="queryType"
                entityApiName={queryTypeApiName}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
