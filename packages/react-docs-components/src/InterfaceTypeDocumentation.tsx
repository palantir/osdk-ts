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
import type { InterfaceType, OntologyFullMetadata, SharedPropertyType } from "@osdk/foundry.ontologies";
import React, { useMemo } from "react";
import { EXTENDED_OSDK_SNIPPETS_SPEC } from "./extendedSnippetSpec.js";
import { SNIPPET_CATEGORIES } from "./snippetCategories.js";
import { SnippetCard } from "./SnippetCard.js";
import { getLatestSnippetVersion, toCamelCase } from "./utils/snippetHelpers.js";

export interface InterfaceTypeDocumentationProps {
  documentation: SdkSnippets<typeof OSDK_SNIPPETS_SPEC>;
  ontology: OntologyFullMetadata;
  spec: typeof OSDK_SNIPPETS_SPEC;
  interfaceTypeApiName: string;
}

interface PropertyInfo {
  apiName: string;
  displayName: string;
  type: string;
  description: string;
}

interface ImplementingObjectType {
  apiName: string;
  displayName: string;
}

function formatPropertyType(dataType: { type: string }): string {
  const typeMap: Record<string, string> = {
    string: "String",
    integer: "Integer",
    double: "Double",
    boolean: "Boolean",
    date: "Date",
    timestamp: "Timestamp",
    geopoint: "GeoPoint",
    geoshape: "GeoShape",
    geohash: "GeoHash",
    attachment: "Attachment",
    timeseries: "TimeSeries",
  };
  return typeMap[dataType.type] || dataType.type;
}

function extractProperties(properties: Record<string, SharedPropertyType>): PropertyInfo[] {
  return Object.entries(properties).map(([apiName, prop]) => ({
    apiName,
    displayName: toCamelCase(apiName),
    type: formatPropertyType(prop.dataType as { type: string }),
    description: prop.description || "",
  }));
}

export function InterfaceTypeDocumentation({
  documentation,
  ontology,
  interfaceTypeApiName,
}: InterfaceTypeDocumentationProps): React.ReactElement {
  const interfaceTypeCamel = toCamelCase(interfaceTypeApiName);

  // Get interface type metadata
  const interfaceType = ontology.interfaceTypes[interfaceTypeApiName] as InterfaceType | undefined;

  // Extract properties info
  const properties = useMemo((): PropertyInfo[] => {
    if (!interfaceType?.properties) return [];
    return extractProperties(interfaceType.properties);
  }, [interfaceType]);

  // Find implementing object types
  const implementingObjectTypes = useMemo((): ImplementingObjectType[] => {
    return Object.entries(ontology.objectTypes)
      .filter(([, objTypeMeta]) => {
        const implementedInterfaces = objTypeMeta?.implementsInterfaces || [];
        return implementedInterfaces.includes(interfaceTypeApiName);
      })
      .map(([apiName, objTypeMeta]) => ({
        apiName,
        displayName: objTypeMeta?.objectType?.displayName || toCamelCase(apiName),
      }));
  }, [ontology, interfaceTypeApiName]);

  // Get available snippets for interface type
  const availableSnippets = useMemo(() => {
    const result: { name: string; snippet: NonNullable<ReturnType<typeof getLatestSnippetVersion>> }[] = [];

    for (const name of SNIPPET_CATEGORIES.interfaceType) {
      const snippet = getLatestSnippetVersion(documentation, name);
      if (snippet) {
        result.push({ name, snippet });
      }
    }
    return result;
  }, [documentation]);

  if (!interfaceType) {
    return (
      <div className="interface-type-documentation">
        <Card elevation={1}>
          <p>Interface type "{interfaceTypeApiName}" not found in ontology.</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="interface-type-documentation">
      <header className="docs-header">
        <h1 className="type-title">{interfaceType.displayName || interfaceTypeCamel}</h1>
        <p className="api-name">API Name: <code>{interfaceTypeApiName}</code></p>
      </header>

      <section className="type-info">
        <Card elevation={1}>
          <H4>Description</H4>
          <p className="description-text">
            {interfaceType.description || "No description available."}
          </p>
        </Card>
      </section>

      {properties.length > 0 && (
        <section className="properties-section">
          <H4>Properties</H4>
          <Card elevation={1}>
            <HTMLTable bordered striped className="properties-table">
              <thead>
                <tr>
                  <th>Property</th>
                  <th>API Name</th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {properties.map((prop) => (
                  <tr key={prop.apiName}>
                    <td className="property-name">{prop.displayName}</td>
                    <td>
                      <code className="api-name-badge">{prop.apiName}</code>
                    </td>
                    <td className="property-type">{prop.type}</td>
                    <td className="property-description">
                      {prop.description || "No description"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </HTMLTable>
          </Card>
        </section>
      )}

      {implementingObjectTypes.length > 0 && (
        <section className="implementing-types-section">
          <H4>Implementing Object Types</H4>
          <Card elevation={1}>
            <div className="implementing-types-list">
              {implementingObjectTypes.map((objType) => (
                <Tag key={objType.apiName} minimal large className="implementing-type-tag">
                  {objType.displayName}
                  <span className="tag-api-name">({objType.apiName})</span>
                </Tag>
              ))}
            </div>
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
                entityType="interfaceType"
                entityApiName={interfaceTypeApiName}
                properties={properties.map(p => ({ apiName: p.apiName, displayName: p.displayName, type: p.type }))}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
