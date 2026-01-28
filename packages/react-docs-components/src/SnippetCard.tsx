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

import { Card, H5, HTMLSelect } from "@blueprintjs/core";
import type { SdkSnippet, SdkSnippets } from "@osdk/docs-spec-core";
import type { OSDK_SNIPPETS_SPEC } from "@osdk/docs-spec-sdk";
import type { OntologyFullMetadata } from "@osdk/foundry.ontologies";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { CodeBlock } from "./components/CodeBlock.js";
import { getSnippetDescription, getSnippetTitle } from "./extendedSnippetSpec.js";
import type { ExtendedOsdkSnippetsSpec, PropertyFilterFn, VariableSource } from "./extendedSnippetSpec.js";
import { toCamelCase, toSnakeCase } from "./utils/snippetHelpers.js";
import { renderMustacheTemplate } from "./utils/mustacheRenderer.js";
import {
  type EntityType,
  resolveSnippetVariables,
  resolveComputedVariables,
} from "./utils/snippetVariableResolver.js";

interface PropertyInfo {
  apiName: string;
  displayName: string;
  type: string;
}

interface LinkInfo {
  apiName: string;
  displayName: string;
  linkedObjectTypeApiName: string;
  cardinality: string;
}

export interface SnippetCardProps {
  snippetName: string;
  snippet: SdkSnippet;
  documentation: SdkSnippets<typeof OSDK_SNIPPETS_SPEC>;
  ontology: OntologyFullMetadata;
  extendedSpec: ExtendedOsdkSnippetsSpec;
  /** The type of entity this snippet is for */
  entityType: EntityType;
  /** The API name of the entity */
  entityApiName: string;
  /** Properties available for selection (for object types) */
  properties?: PropertyInfo[];
  /** Links available for selection (for object types) */
  links?: LinkInfo[];
}

export function SnippetCard({
  snippetName,
  snippet,
  documentation,
  ontology,
  extendedSpec,
  entityType,
  entityApiName,
  properties = [],
  links = [],
}: SnippetCardProps): React.ReactElement {
  // Get variable sources from the extended spec
  const variableSources = useMemo(() => {
    const snippetDef = extendedSpec.snippets[snippetName as keyof typeof extendedSpec.snippets];
    return snippetDef?.variableSources || {};
  }, [extendedSpec, snippetName]);

  // Convert to array format for iteration
  const variableConfigs = useMemo(() => {
    return Object.entries(variableSources).map(([variable, config]) => ({
      variable,
      ...config,
    }));
  }, [variableSources]);

  // State for selected variable values (user selections for dropdowns)
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>({});

  // Initialize default values for dropdowns
  useEffect(() => {
    const initial: Record<string, string> = {};
    for (const config of variableConfigs) {
      if (config.source === "properties" && properties.length > 0) {
        initial[config.variable] = properties[0].displayName;
      } else if (config.source === "links" && links.length > 0) {
        initial[config.variable] = links[0].apiName;
      }
    }
    setSelectedValues(initial);
  }, [variableConfigs, properties, links]);

  // Get the selected link info
  const selectedLink = useMemo(() => {
    const linkApiName = selectedValues["linkApiName"];
    return links.find(l => l.apiName === linkApiName);
  }, [selectedValues, links]);

  // Get properties from the linked object type
  const linkedProperties = useMemo((): PropertyInfo[] => {
    if (!selectedLink) return [];

    const linkedObjectMeta = ontology.objectTypes[selectedLink.linkedObjectTypeApiName];
    if (!linkedObjectMeta?.objectType?.properties) return [];

    return Object.entries(linkedObjectMeta.objectType.properties).map(([apiName, prop]) => ({
      apiName,
      displayName: toCamelCase(apiName),
      type: (prop.dataType as { type: string }).type,
    }));
  }, [selectedLink, ontology]);

  // Initialize linked property variables when link changes
  useEffect(() => {
    const linkedPropertyConfigs = variableConfigs.filter(c => c.source === "linkedProperties");
    if (linkedPropertyConfigs.length > 0 && linkedProperties.length > 0) {
      setSelectedValues(prev => {
        const next = { ...prev };
        for (const config of linkedPropertyConfigs) {
          if (!next[config.variable]) {
            next[config.variable] = linkedProperties[0].displayName;
          }
        }
        return next;
      });
    }
  }, [linkedProperties, variableConfigs]);

  // Handle selection change
  const handleSelectChange = useCallback((variable: string, value: string) => {
    setSelectedValues(prev => {
      const next = { ...prev, [variable]: value };
      // Reset all linkedProperties variables when link changes
      if (variable === "linkApiName") {
        for (const config of variableConfigs) {
          if (config.source === "linkedProperties") {
            delete next[config.variable];
          }
        }
      }
      return next;
    });
  }, [variableConfigs]);

  // Compute all variables using the resolver
  const fullVariables = useMemo(() => {
    // Build overrides from user selections
    const overrides: Record<string, unknown> = {};

    // Add selected values from dropdowns
    for (const [key, value] of Object.entries(selectedValues)) {
      overrides[key] = value;
    }

    // If a link is selected, add link-derived variables
    if (selectedLink) {
      overrides["linkApiName"] = selectedLink.apiName;
      overrides["linkApiNameSnakeCase"] = toSnakeCase(selectedLink.apiName);
      overrides["linkedObjectType"] = toCamelCase(selectedLink.linkedObjectTypeApiName);
      overrides["isLinkManySided"] = selectedLink.cardinality === "MANY";

      // Get linked object's properties and primary key for computed variables
      const linkedObjectMeta = ontology.objectTypes[selectedLink.linkedObjectTypeApiName];
      if (linkedObjectMeta?.objectType) {
        const linkedObj = linkedObjectMeta.objectType;

        // Build rawLinkedProperties in IR format
        overrides["rawLinkedProperties"] = Object.entries(linkedObj.properties).map(([apiName, prop]) => ({
          apiName,
          value: getPropertySampleValueIR((prop.dataType as { type: string }) || { type: "string" }),
        }));

        // Build rawLinkedPrimaryKeyProperty in IR format
        const pkProp = linkedObj.properties[linkedObj.primaryKey];
        overrides["rawLinkedPrimaryKeyProperty"] = {
          apiName: linkedObj.primaryKey,
          value: getPropertySampleValueIR((pkProp?.dataType as { type: string }) || { type: "string" }),
          type: toCamelCase(selectedLink.linkedObjectTypeApiName),
        };
      }
    }

    // Use the resolver to compute base variables, with our overrides
    const variables = resolveSnippetVariables({
      ontology,
      entityType,
      entityApiName,
      overrides,
    });

    return variables;
  }, [ontology, entityType, entityApiName, selectedValues, selectedLink]);

  // Render the snippet with computed variables
  const { code, error } = useMemo(() => {
    try {
      // Resolve computed variables (e.g., actionParameterSampleValuesV2)
      const computedVars = resolveComputedVariables(
        fullVariables,
        snippet.computedVariables || [],
        documentation.computedVariables || {},
      );

      // Render the template
      const rendered = renderMustacheTemplate(snippet.template, fullVariables, computedVars);
      return { code: rendered, error: undefined };
    } catch (e) {
      return { code: "", error: e instanceof Error ? e.message : String(e) };
    }
  }, [fullVariables, snippet, documentation]);

  // Get options for a variable based on its source and optional filter
  const getOptions = (source: VariableSource, filter?: PropertyFilterFn): { value: string; label: string }[] => {
    switch (source) {
      case "properties": {
        const filteredProps = filter
          ? properties.filter(p => filter({ propertyApiName: p.apiName, propertyType: p.type }))
          : properties;
        return filteredProps.map(p => ({ value: p.displayName, label: p.displayName }));
      }
      case "links":
        return links.map(l => ({
          value: l.apiName,
          label: `${l.displayName} → ${toCamelCase(l.linkedObjectTypeApiName)}`
        }));
      case "linkedProperties": {
        const filteredLinkedProps = filter
          ? linkedProperties.filter(p => filter({ propertyApiName: p.apiName, propertyType: p.type }))
          : linkedProperties;
        return filteredLinkedProps.map(p => ({ value: p.displayName, label: p.displayName }));
      }
      default:
        return [];
    }
  };

  // Check if a variable selector should be shown
  const shouldShowSelector = (config: { variable: string; source: VariableSource; filter?: PropertyFilterFn }): boolean => {
    if (config.source === "linkedProperties") {
      return !!selectedLink && getOptions(config.source, config.filter).length > 0;
    }
    return getOptions(config.source, config.filter).length > 0;
  };

  const visibleConfigs = variableConfigs.filter(shouldShowSelector);

  const title = getSnippetTitle(extendedSpec, snippetName);
  const description = getSnippetDescription(extendedSpec, snippetName);

  return (
    <Card className="snippet-card" elevation={1}>
      <div className="snippet-card-layout">
        <div className="snippet-card-info">
          <H5 className="snippet-title">{title}</H5>
          {description && (
            <p className="snippet-description">{description}</p>
          )}
          {visibleConfigs.length > 0 && (
            <div className="snippet-selectors">
              {visibleConfigs.map(config => {
                const options = getOptions(config.source, config.filter);
                return (
                  <div key={config.variable} className="variable-selector">
                    <label className="selector-label">{config.label}</label>
                    <HTMLSelect
                      className="selector-dropdown"
                      value={selectedValues[config.variable] || ""}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleSelectChange(config.variable, e.target.value)}
                      options={options.map(opt => ({ value: opt.value, label: opt.label }))}
                      fill
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="snippet-card-code">
          {error ? (
            <div className="error-message">
              <strong>Error:</strong> {error}
            </div>
          ) : (
            <CodeBlock code={code} />
          )}
        </div>
      </div>
    </Card>
  );
}

// Helper function for linked property IR values (inline since it's only used here)
function getPropertySampleValueIR(dataType: { type: string }): unknown {
  switch (dataType.type) {
    case "boolean": return { type: "boolean", value: true };
    case "byte": return { type: "byte", value: 1 };
    case "integer": return { type: "integer", value: 123 };
    case "short": return { type: "short", value: 123 };
    case "long": return { type: "long", value: 123 };
    case "decimal": return { type: "decimal", value: 123.45 };
    case "double": return { type: "double", value: 123.45 };
    case "float": return { type: "float", value: 123.45 };
    case "date": return { type: "date", daysOffset: 0 };
    case "timestamp": return { type: "timestamp", daysOffset: 0 };
    case "string": return { type: "string", value: "sampleValue" };
    default: return { type: "string", value: "sampleValue" };
  }
}
