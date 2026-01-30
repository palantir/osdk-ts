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
import type { OntologyFullMetadata } from "@osdk/foundry.ontologies";
import React, { useMemo } from "react";
import { checkShouldRender, EXTENDED_OSDK_SNIPPETS_SPEC } from "./extendedSnippetSpec.js";
import { SNIPPET_CATEGORIES } from "./snippetCategories.js";
import { SnippetCard } from "./SnippetCard.js";
import { getLatestSnippetVersion, toCamelCase } from "./utils/snippetHelpers.js";

export interface ObjectTypeDocumentationProps {
  documentation: SdkSnippets<typeof OSDK_SNIPPETS_SPEC>;
  ontology: OntologyFullMetadata;
  spec: typeof OSDK_SNIPPETS_SPEC;
  objectTypeApiName: string;
}

interface PropertyInfo {
  apiName: string;
  displayName: string;
  type: string;
  rawType: string;
  description: string;
  isPrimaryKey: boolean;
}

interface LinkInfo {
  apiName: string;
  displayName: string;
  linkedObjectTypeApiName: string;
  cardinality: string;
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
  };
  return typeMap[dataType.type] || dataType.type;
}

export function ObjectTypeDocumentation({
  documentation,
  ontology,
  objectTypeApiName,
}: ObjectTypeDocumentationProps): React.ReactElement {
  const objectTypeCamel = toCamelCase(objectTypeApiName);

  // Get object type metadata
  const objectTypeMeta = ontology.objectTypes[objectTypeApiName];
  const objectType = objectTypeMeta?.objectType;

  // Extract properties info
  const properties = useMemo((): PropertyInfo[] => {
    if (!objectType?.properties) return [];

    return Object.entries(objectType.properties).map(([apiName, prop]) => {
      const rawType = (prop.dataType as { type: string }).type;
      return {
        apiName,
        displayName: toCamelCase(apiName),
        type: formatPropertyType(prop.dataType as { type: string }),
        rawType,
        description: (prop as { description?: string }).description || "",
        isPrimaryKey: apiName === objectType.primaryKey,
      };
    });
  }, [objectType]);

  // Extract links info
  const links = useMemo((): LinkInfo[] => {
    if (!objectTypeMeta?.linkTypes) return [];

    return objectTypeMeta.linkTypes.map((link) => ({
      apiName: link.apiName,
      displayName: link.displayName || link.apiName,
      linkedObjectTypeApiName: link.objectTypeApiName,
      cardinality: link.cardinality,
    }));
  }, [objectTypeMeta]);

  // Get available snippets with their data (filtered by shouldRender)
  const availableSnippets = useMemo(() => {
    const result: { name: string; snippet: NonNullable<ReturnType<typeof getLatestSnippetVersion>> }[] = [];
    const renderContext = { ontology, objectTypeApiName };

    for (const name of SNIPPET_CATEGORIES.objectType) {
      // Check if this snippet should be rendered for this object type
      if (!checkShouldRender(EXTENDED_OSDK_SNIPPETS_SPEC, name, renderContext)) {
        continue;
      }

      const snippet = getLatestSnippetVersion(documentation, name);
      if (snippet) {
        result.push({ name, snippet });
      }
    }
    return result;
  }, [documentation, ontology, objectTypeApiName]);

  if (!objectType) {
    return (
      <div className="object-type-documentation">
        <Card elevation={1}>
          <p>Object type "{objectTypeApiName}" not found in ontology.</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="object-type-documentation">
      <header className="docs-header">
        <h1 className="type-title">{objectType.displayName || objectTypeCamel}</h1>
        <p className="api-name">API Name: <code>{objectTypeApiName}</code></p>
      </header>

      <section className="type-info">
        <Card elevation={1}>
          <H4>Description</H4>
          <p className="description-text">
            {objectType.description || "No description available."}
          </p>
        </Card>
      </section>

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
                  <td className="property-name">
                    {prop.displayName}
                    {prop.isPrimaryKey && (
                      <Tag intent="primary" minimal className="pk-badge">PK</Tag>
                    )}
                  </td>
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

      {links.length > 0 && (
        <section className="links-section">
          <H4>Links</H4>
          <Card elevation={1}>
            <HTMLTable bordered striped className="links-table">
              <thead>
                <tr>
                  <th>Link</th>
                  <th>API Name</th>
                  <th>Target Object Type</th>
                  <th>Cardinality</th>
                </tr>
              </thead>
              <tbody>
                {links.map((link) => (
                  <tr key={link.apiName}>
                    <td className="link-name">{link.displayName}</td>
                    <td>
                      <code className="api-name-badge">{link.apiName}</code>
                    </td>
                    <td>{toCamelCase(link.linkedObjectTypeApiName)}</td>
                    <td>
                      <Tag minimal>
                        {link.cardinality === "MANY" ? "One to Many" : "One to One"}
                      </Tag>
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
                entityType="objectType"
                entityApiName={objectTypeApiName}
                properties={properties.map(p => ({ apiName: p.apiName, displayName: p.displayName, type: p.rawType }))}
                links={links}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
