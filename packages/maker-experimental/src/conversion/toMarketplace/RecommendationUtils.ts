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

import type {
  ActionType,
  OntologyBlockDataV2,
  ValueTypeBlockData,
} from "@osdk/client.unstable";
import type {
  BlockSetVersionRange,
  InputShape,
} from "@osdk/client.unstable/api";

import type {
  GeneratedBlockExternalRecommendations,
  ReadableIdMappingPair,
} from "../../cli/marketplaceSerialization/supportingTypes.js";
import {
  type ReadableId,
  ReadableIdGenerator,
} from "../../util/generateRid.js";

const DEFAULT_VERSION_RANGE: BlockSetVersionRange = {
  from: "0.0.0",
  until: "x.x.x",
};

/**
 * Extract the package namespace from a dotted api name.
 * E.g. "com.palantir.MyType" -> "com.palantir"
 * If there's no dot, returns the full name.
 */
function getPackage(fullApiName: string): string {
  const lastDotIndex = fullApiName.lastIndexOf(".");
  if (lastDotIndex === -1) {
    return fullApiName;
  }
  return fullApiName.substring(0, lastDotIndex);
}

/**
 * Generic helper to build external recommendations grouped by package.
 * For non-value-type entities, the targetInputReadableId and upstreamOutputReadableId
 * are the same (the entity's readable ID).
 */
function getExternalRecommendationsForType<T>(
  items: Iterable<T>,
  getApiName: (item: T) => string,
  getReadableId: (apiName: string) => ReadableId,
  packageNameOverride?: string
): GeneratedBlockExternalRecommendations[] {
  const groups = new Map<string, ReadableIdMappingPair[]>();

  for (const item of items) {
    const apiName = getApiName(item);
    const packageName = packageNameOverride ?? getPackage(apiName);
    const readableId = getReadableId(apiName);
    const pair: ReadableIdMappingPair = {
      targetInputReadableId: readableId,
      upstreamOutputReadableId: readableId,
    };

    const existing = groups.get(packageName);
    if (existing) {
      existing.push(pair);
    } else {
      groups.set(packageName, [pair]);
    }
  }

  return Array.from(groups.entries()).map(([packageName, mappings]) => ({
    upstreamPackageName: packageName,
    upstreamVersionCompatibility: DEFAULT_VERSION_RANGE,
    mappings,
  }));
}

function externalRecsForInterfaces(
  importedOntology: OntologyBlockDataV2
): GeneratedBlockExternalRecommendations[] {
  return getExternalRecommendationsForType(
    Object.values(importedOntology.interfaceTypes),
    (i) => i.interfaceType.apiName,
    (apiName) => ReadableIdGenerator.getForInterface(apiName)
  );
}

function externalRecsForInterfaceLinks(
  importedOntology: OntologyBlockDataV2
): GeneratedBlockExternalRecommendations[] {
  const results: GeneratedBlockExternalRecommendations[] = [];

  for (const interfaceBlock of Object.values(importedOntology.interfaceTypes)) {
    const interfaceApiName = interfaceBlock.interfaceType.apiName;
    const links = interfaceBlock.interfaceType.links ?? [];

    results.push(
      ...getExternalRecommendationsForType(
        links,
        (link) => link.metadata.apiName,
        (linkApiName) =>
          ReadableIdGenerator.getForInterfaceLinkType(
            interfaceApiName,
            linkApiName
          ),
        getPackage(interfaceApiName)
      )
    );
  }

  return results;
}

function externalRecsForSpts(
  importedOntology: OntologyBlockDataV2
): GeneratedBlockExternalRecommendations[] {
  // Collect SPTs from standalone shared property types
  const sptApiNames: string[] = [];

  for (const sptBlock of Object.values(importedOntology.sharedPropertyTypes)) {
    sptApiNames.push(sptBlock.sharedPropertyType.apiName);
  }

  // Collect SPTs embedded in interface propertiesV3
  for (const interfaceBlock of Object.values(importedOntology.interfaceTypes)) {
    for (const property of Object.values(
      interfaceBlock.interfaceType.propertiesV3 ?? {}
    )) {
      if (property.type === "sharedPropertyBasedPropertyType") {
        sptApiNames.push(
          property.sharedPropertyBasedPropertyType.sharedPropertyType.apiName
        );
      }
    }
  }

  return getExternalRecommendationsForType(
    sptApiNames,
    (apiName) => apiName,
    (apiName) => ReadableIdGenerator.getForSpt(apiName)
  );
}

function externalRecsForObjects(
  importedOntology: OntologyBlockDataV2
): GeneratedBlockExternalRecommendations[] {
  return getExternalRecommendationsForType(
    Object.values(importedOntology.objectTypes).filter(
      (o) => o.objectType.apiName != null
    ),
    (o) => o.objectType.apiName as string,
    (apiName) => ReadableIdGenerator.getForObjectType(apiName)
  );
}

function externalRecsForProperties(
  importedOntology: OntologyBlockDataV2
): GeneratedBlockExternalRecommendations[] {
  const results: GeneratedBlockExternalRecommendations[] = [];

  for (const objectBlock of Object.values(importedOntology.objectTypes)) {
    const objectApiName = objectBlock.objectType.apiName;
    if (objectApiName == null) continue;

    const properties = Object.values(
      objectBlock.objectType.propertyTypes
    ).filter((p) => p.apiName != null);

    results.push(
      ...getExternalRecommendationsForType(
        properties,
        (p) => p.apiName as string,
        (propApiName) =>
          ReadableIdGenerator.getForObjectProperty(objectApiName, propApiName),
        getPackage(objectApiName)
      )
    );
  }

  return results;
}

function externalRecsForLinks(
  importedOntology: OntologyBlockDataV2
): GeneratedBlockExternalRecommendations[] {
  return getExternalRecommendationsForType(
    Object.values(importedOntology.linkTypes),
    (l) => l.linkType.id,
    (id) => ReadableIdGenerator.getForLinkType(id)
  );
}

function externalRecsForActions(
  importedOntology: OntologyBlockDataV2
): GeneratedBlockExternalRecommendations[] {
  return getExternalRecommendationsForType(
    Object.values(importedOntology.actionTypes),
    (a) => (a.actionType as ActionType).metadata.apiName,
    (apiName) => ReadableIdGenerator.getForActionType(apiName)
  );
}

function externalRecsForActionParams(
  importedOntology: OntologyBlockDataV2
): GeneratedBlockExternalRecommendations[] {
  const results: GeneratedBlockExternalRecommendations[] = [];

  for (const actionBlock of Object.values(importedOntology.actionTypes)) {
    const actionApiName = (actionBlock.actionType as ActionType).metadata
      .apiName;
    const parameters = (actionBlock.actionType as ActionType).metadata
      .parameters;
    if (!parameters) continue;

    results.push(
      ...getExternalRecommendationsForType(
        Object.keys(parameters),
        (paramId) => paramId,
        (paramId) =>
          ReadableIdGenerator.getForParameter(actionApiName, paramId),
        getPackage(actionApiName)
      )
    );
  }

  return results;
}

/**
 * Build consumed value type references grouped by apiName.
 * Sources:
 * 1. Value type entries (produced + imported) that have consumed input shapes
 * 2. Imported SPT value type references
 * 3. Imported property value type references
 */
function getConsumedValueTypes(
  producedValueTypes: ValueTypeBlockData[],
  importedValueTypes: ValueTypeBlockData[],
  inputShapes: Map<string, InputShape>
): Map<string, { version: string; packageNamespace: string }[]> {
  const consumed = new Map<
    string,
    { version: string; packageNamespace: string }[]
  >();

  function addConsumed(
    apiName: string,
    version: string,
    packageNamespace: string
  ): void {
    const existing = consumed.get(apiName);
    if (existing) {
      existing.push({ version, packageNamespace });
    } else {
      consumed.set(apiName, [{ version, packageNamespace }]);
    }
  }

  for (const entry of [...producedValueTypes, ...importedValueTypes]) {
    if (entry.versions.length === 0) continue;
    const apiName = entry.metadata.apiName;
    const firstVersion = entry.versions[0].version;
    const consumedId = ReadableIdGenerator.getForConsumedValueType(
      apiName,
      firstVersion
    );
    if (inputShapes.has(consumedId)) {
      const packageNamespace = getPackage(apiName);
      for (const version of entry.versions) {
        addConsumed(apiName, version.version, packageNamespace);
      }
    }
  }

  return consumed;
}

function externalRecsForValueTypes(
  producedValueTypes: ValueTypeBlockData[],
  importedValueTypes: ValueTypeBlockData[],
  inputShapes: Map<string, InputShape>
): GeneratedBlockExternalRecommendations[] {
  const producedApiNames = new Set(
    producedValueTypes.map((vt) => vt.metadata.apiName as string)
  );

  const consumed = getConsumedValueTypes(
    producedValueTypes,
    importedValueTypes,
    inputShapes
  );

  const results: GeneratedBlockExternalRecommendations[] = [];

  for (const [apiName, versions] of consumed) {
    if (producedApiNames.has(apiName)) continue;

    const mappings: ReadableIdMappingPair[] = versions.map((v) => ({
      targetInputReadableId: ReadableIdGenerator.getForConsumedValueType(
        apiName,
        v.version
      ),
      upstreamOutputReadableId: ReadableIdGenerator.getForProducedValueType(
        apiName,
        v.version
      ),
    }));

    results.push({
      upstreamPackageName: versions[0].packageNamespace,
      upstreamVersionCompatibility: DEFAULT_VERSION_RANGE,
      mappings,
    });
  }

  return results;
}

/**
 * Generate external recommendations for all imported/consumed entities.
 * Port of Java's RecommendationUtils.getRecommendations() (external portion).
 */
export function getExternalRecommendations(
  importedOntology: OntologyBlockDataV2,
  producedValueTypes: ValueTypeBlockData[],
  importedValueTypes: ValueTypeBlockData[],
  inputShapes: Map<string, InputShape>
): GeneratedBlockExternalRecommendations[] {
  return [
    ...externalRecsForInterfaces(importedOntology),
    ...externalRecsForInterfaceLinks(importedOntology),
    ...externalRecsForSpts(importedOntology),
    ...externalRecsForObjects(importedOntology),
    ...externalRecsForProperties(importedOntology),
    ...externalRecsForLinks(importedOntology),
    ...externalRecsForActions(importedOntology),
    ...externalRecsForActionParams(importedOntology),
    ...externalRecsForValueTypes(
      producedValueTypes,
      importedValueTypes,
      inputShapes
    ),
  ];
}
