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

import type * as OntologiesV2 from "@osdk/foundry.ontologies";
import type { LegacyFauxFoundry } from "@osdk/shared.test";

import {
  bumpPatch,
  REMAPPED_ONTOLOGY_API_NAME,
  REMAPPED_ONTOLOGY_RID,
  remappedTypeName,
} from "./remapAliases.js";

type Mutable = Record<string, unknown>;

// Derived from `LegacyFauxFoundry` rather than imported from `@osdk/faux`, which
// `@osdk/client` does not depend on directly.
type FauxOntology = ReturnType<LegacyFauxFoundry["getDefaultOntology"]>;
type FauxDataStore = ReturnType<LegacyFauxFoundry["getDataStore"]>;
type BaseServerObject = Parameters<FauxDataStore["registerLink"]>[0];

/**
 * Keys whose *values* are type-level api names. Renaming by key name means property and
 * link `apiName` fields -- which Tier 1 does not remap -- are left alone, which is the
 * whole point of the `remapped` mode.
 */
const TYPE_REFERENCE_KEYS = new Set([
  "objectTypeApiName",
  "objectApiName",
  "interfaceTypeApiName",
]);

/**
 * Stands up the ontology the `remapped` mode's alias file points at: same shapes as
 * `LegacyFauxFoundry`'s default ontology, but every object / interface / action / query
 * api name namespaced and every query version bumped.
 *
 * Property, link and primary key names are deliberately left at their source values even
 * though the alias file claims they were renamed. Tier 1 does not consult
 * `$resolveProperty` / `$resolveLink`, so a server that had renamed them would 404 every
 * filter and select -- this ontology is the environment a Tier 1 SDK can actually talk
 * to, and the suite asserts the source names still reach the wire so the Tier 2 gap
 * stays visible.
 *
 * The primary key is left alone for a sharper reason. `$resolvePrimaryKey` *is* a Tier 1
 * site, so the generated `Employee.primaryKeyApiName` really does say
 * `employeeId_remapped` here -- but every runtime read of the primary key goes through
 * fetched server metadata rather than that constant (`createObjectSet.ts`,
 * `BulkObjectLoader.ts`, `SpecificLinkQuery.ts`, `getDollarLink.ts`, `createOsdkObject.ts`,
 * `buildObjectSetFromLinkDef.ts`). Leaving the server at `employeeId` makes the alias
 * file's claim deliberately unbacked, so the suite can assert positively that the
 * resolved value never reaches the wire instead of taking that on faith.
 */
export function registerRemappedOntology(fauxFoundry: LegacyFauxFoundry): void {
  const source = fauxFoundry.getDefaultOntology();
  const sourceMetadata = source.getOntologyFullMetadata();

  const target = fauxFoundry.createOntology({
    apiName: REMAPPED_ONTOLOGY_API_NAME,
    displayName: "Remapped Ontology",
    description: "The alias-file target ontology",
    rid: REMAPPED_ONTOLOGY_RID,
  });

  for (const [name, def] of Object.entries(sourceMetadata.objectTypes)) {
    target.registerObjectType(
      remapObjectType(
        name,
        def,
      ) as unknown as OntologiesV2.ObjectTypeFullMetadata,
    );
  }

  for (const [name, def] of Object.entries(sourceMetadata.interfaceTypes)) {
    target.registerInterfaceType(
      remapInterfaceType(name, def) as unknown as OntologiesV2.InterfaceType,
    );
  }

  for (const def of Object.values(sourceMetadata.sharedPropertyTypes)) {
    target.registerSharedPropertyType(
      structuredClone(def) as OntologiesV2.SharedPropertyType,
    );
  }

  for (const [name, def] of Object.entries(sourceMetadata.actionTypes)) {
    target.registerActionType(
      remapActionType(name, def) as unknown as OntologiesV2.ActionTypeV2,
      tryGet(() => source.getActionImpl(name)),
    );
  }

  for (const def of Object.values(sourceMetadata.queryTypes)) {
    target.registerQueryType(
      remapQueryType(def) as unknown as OntologiesV2.QueryTypeV2,
      tryGet(() => source.getQueryImpl(def.apiName, def.version)),
    );
  }

  copyData(
    fauxFoundry,
    source,
    target,
    Object.keys(sourceMetadata.objectTypes),
  );
}

function remapObjectType(
  sourceName: string,
  def: OntologiesV2.ObjectTypeFullMetadata,
): Mutable {
  const clone = deepRemapTypeReferences(
    structuredClone(def) as unknown,
  ) as Mutable;

  const objectType = clone["objectType"] as Mutable;

  objectType["apiName"] = remappedTypeName(sourceName);

  clone["implementsInterfaces"] = (
    clone["implementsInterfaces"] as string[]
  ).map(remappedTypeName);
  clone["implementsInterfaces2"] = remapKeys(
    clone["implementsInterfaces2"] as Mutable,
    remappedTypeName,
  );

  // The values in these maps are *object property* names, which Tier 1 leaves alone.

  return clone;
}

function remapInterfaceType(
  sourceName: string,
  def: OntologiesV2.InterfaceType,
): Mutable {
  const clone = deepRemapTypeReferences(
    structuredClone(def) as unknown,
  ) as Mutable;

  clone["apiName"] = remappedTypeName(sourceName);
  for (const key of ["extendsInterfaces", "allExtendsInterfaces"]) {
    const value = clone[key];
    if (Array.isArray(value)) {
      clone[key] = (value as string[]).map(remappedTypeName);
    }
  }
  const implementedBy = clone["implementedByObjectTypes"];
  if (Array.isArray(implementedBy)) {
    clone["implementedByObjectTypes"] = (implementedBy as string[]).map(
      remappedTypeName,
    );
  }

  // `linkedEntityApiName` is `{ type: "objectTypeApiName" | "interfaceTypeApiName",
  // apiName }`, so the type name hides behind a plain `apiName` key that
  // deepRemapTypeReferences must not touch generically.
  for (const key of ["links", "allLinks"]) {
    for (const link of Object.values(
      (clone[key] ?? {}) as Record<string, Mutable>,
    )) {
      const linkedEntity = link["linkedEntityApiName"] as Mutable | undefined;
      if (linkedEntity !== undefined) {
        linkedEntity["apiName"] = remappedTypeName(
          linkedEntity["apiName"] as string,
        );
      }
    }
  }

  return clone;
}

function remapActionType(
  sourceName: string,
  def: OntologiesV2.ActionTypeV2,
): Mutable {
  const clone = deepRemapTypeReferences(
    structuredClone(def) as unknown,
  ) as Mutable;
  clone["apiName"] = remappedTypeName(sourceName);
  return clone;
}

function remapQueryType(def: OntologiesV2.QueryTypeV2): Mutable {
  const clone = deepRemapTypeReferences(
    structuredClone(def) as unknown,
  ) as Mutable;
  clone["apiName"] = remappedTypeName(def.apiName);
  clone["version"] = bumpPatch(def.version);
  return clone;
}

function copyData(
  fauxFoundry: LegacyFauxFoundry,
  source: FauxOntology,
  target: FauxOntology,
  sourceObjectTypeNames: readonly string[],
): void {
  const sourceStore = fauxFoundry.getDataStore(source.apiName);
  const targetStore = fauxFoundry.getDataStore(target.apiName);

  for (const sourceName of sourceObjectTypeNames) {
    for (const object of sourceStore.getObjectsOfType(sourceName)) {
      targetStore.registerObject({
        ...object,
        __apiName: remappedTypeName(sourceName),
      } as unknown as BaseServerObject);
    }
  }

  for (const sourceName of sourceObjectTypeNames) {
    const linkTypes =
      source.getObjectTypeFullMetadataOrThrow(sourceName).linkTypes;
    for (const object of sourceStore.getObjectsOfType(sourceName)) {
      for (const linkType of linkTypes) {
        const otherSideName = findOtherLinkSideName(
          source,
          sourceName,
          linkType,
        );
        if (otherSideName === undefined) continue;

        for (const linked of sourceStore.getLinksOrThrow(
          sourceName,
          object.__primaryKey,
          linkType.apiName,
        )) {
          targetStore.registerLink(
            {
              __apiName: remappedTypeName(sourceName),
              __primaryKey: object.__primaryKey,
            },
            linkType.apiName,
            {
              __apiName: remappedTypeName(linkType.objectTypeApiName),
              __primaryKey: linked.__primaryKey,
            },
            otherSideName,
          );
        }
      }
    }
  }
}

/**
 * `FauxOntology.getOtherLinkTypeSideV2OrThrow` throws on the half-declared link types the
 * legacy stub ontology contains (`Employee.visitedOffices` has no matching side on
 * `Office`). Those links hold no data, so the clone just skips them rather than failing
 * the whole setup.
 */
function findOtherLinkSideName(
  source: FauxOntology,
  sourceObjectType: string,
  linkType: OntologiesV2.LinkTypeSideV2,
): string | undefined {
  const candidates = source
    .getObjectTypeFullMetadataOrThrow(linkType.objectTypeApiName)
    .linkTypes.filter((l) => l.linkTypeRid === linkType.linkTypeRid);

  if (linkType.objectTypeApiName === sourceObjectType) {
    return (
      candidates.find((l) => l.apiName !== linkType.apiName)?.apiName ??
      candidates[0]?.apiName
    );
  }
  return candidates.length === 1 ? candidates[0].apiName : undefined;
}

function deepRemapTypeReferences(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(deepRemapTypeReferences);
  }
  if (typeof value !== "object" || value == null) {
    return value;
  }
  const out: Mutable = {};
  for (const [key, child] of Object.entries(value as Mutable)) {
    out[key] =
      TYPE_REFERENCE_KEYS.has(key) && typeof child === "string"
        ? remappedTypeName(child)
        : deepRemapTypeReferences(child);
  }
  return out;
}

function remapKeys(
  record: Record<string, unknown>,
  remap: (key: string) => string,
): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(record).map(([k, v]) => [remap(k), v]),
  );
}

function tryGet<T>(get: () => T): T | undefined {
  try {
    return get();
  } catch {
    return undefined;
  }
}
