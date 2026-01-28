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
import type { ActionParameterV2, ActionTypeV2, OntologyFullMetadata } from "@osdk/foundry.ontologies";
import React, { useMemo } from "react";
import { EXTENDED_OSDK_SNIPPETS_SPEC } from "./extendedSnippetSpec.js";
import { SNIPPET_CATEGORIES } from "./snippetCategories.js";
import { SnippetCard } from "./SnippetCard.js";
import { getLatestSnippetVersion, toCamelCase } from "./utils/snippetHelpers.js";

export interface ActionTypeDocumentationProps {
  documentation: SdkSnippets<typeof OSDK_SNIPPETS_SPEC>;
  ontology: OntologyFullMetadata;
  spec: typeof OSDK_SNIPPETS_SPEC;
  actionTypeApiName: string;
}

interface ParameterInfo {
  apiName: string;
  displayName: string;
  type: string;
  required: boolean;
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
  };
  return typeMap[dataType.type] || dataType.type;
}

function extractParameters(parameters: Record<string, ActionParameterV2>): ParameterInfo[] {
  return Object.entries(parameters).map(([apiName, param]) => ({
    apiName,
    displayName: toCamelCase(apiName),
    type: formatParameterType(param.dataType as { type: string }),
    required: param.required ?? false,
    description: param.description || "",
  }));
}

export function ActionTypeDocumentation({
  documentation,
  ontology,
  actionTypeApiName,
}: ActionTypeDocumentationProps): React.ReactElement {
  const actionTypeCamel = toCamelCase(actionTypeApiName);

  // Get action type metadata
  const actionType = ontology.actionTypes[actionTypeApiName] as ActionTypeV2 | undefined;

  // Extract parameters info
  const parameters = useMemo((): ParameterInfo[] => {
    if (!actionType?.parameters) return [];
    return extractParameters(actionType.parameters);
  }, [actionType]);

  // Get available snippets for action type
  const availableSnippets = useMemo(() => {
    const result: { name: string; snippet: NonNullable<ReturnType<typeof getLatestSnippetVersion>> }[] = [];

    for (const name of SNIPPET_CATEGORIES.actionType) {
      const snippet = getLatestSnippetVersion(documentation, name);
      if (snippet) {
        result.push({ name, snippet });
      }
    }
    return result;
  }, [documentation]);

  if (!actionType) {
    return (
      <div className="action-type-documentation">
        <Card elevation={1}>
          <p>Action type "{actionTypeApiName}" not found in ontology.</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="action-type-documentation">
      <header className="docs-header">
        <h1 className="type-title">{actionType.displayName || actionTypeCamel}</h1>
        <p className="api-name">API Name: <code>{actionTypeApiName}</code></p>
      </header>

      <section className="type-info">
        <Card elevation={1}>
          <H4>Description</H4>
          <p className="description-text">
            {actionType.description || "No description available."}
          </p>
        </Card>
      </section>

      {parameters.length > 0 && (
        <section className="parameters-section">
          <H4>Parameters</H4>
          <Card elevation={1}>
            <HTMLTable bordered striped className="parameters-table">
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>API Name</th>
                  <th>Type</th>
                  <th>Required</th>
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
                    <td>
                      {param.required ? (
                        <Tag intent="primary" minimal>Required</Tag>
                      ) : (
                        <Tag minimal>Optional</Tag>
                      )}
                    </td>
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
                entityType="actionType"
                entityApiName={actionTypeApiName}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
