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

import type {
  DefaultAliases,
  InterfaceTypeValue,
  LinkValue,
  ObjectTypeValue,
  OntologyValue,
  PropertyValue,
  QueryTypeValue,
} from "./AliasesFile.js";
import { $aliasLayers, $describeLayers } from "./registry.js";

type EntityMapName =
  | "actions"
  | "interfaces"
  | "objects"
  | "ontologies"
  | "queries";

/**
 * Resolution across layers is permissive and layered; resolution of an individual key is
 * strict. There are no compiled-in defaults and no fallback to the source name — a
 * missing key is a hard error, which is what makes the alias file a complete, auditable
 * inventory of what the artifact assumes about its stack.
 */
function resolveEntry<K extends EntityMapName>(
  mapName: K,
  key: string,
): NonNullable<DefaultAliases[K]>[string] {
  for (const layer of $aliasLayers()) {
    const entry = layer.file?.defaults[mapName]?.[key];
    if (entry !== undefined) {
      return entry as NonNullable<DefaultAliases[K]>[string];
    }
  }
  throw missing(`defaults.${mapName}["${key}"]`);
}

function missing(location: string): Error {
  return new Error(
    `[@osdk/aliases] no alias registered for ${location}. Layers consulted, highest ` +
      `precedence first: ${$describeLayers()}. A generated SDK requires an entry for ` +
      `every ontology entity it was generated against; there is no fallback to the ` +
      `source name.`,
  );
}

/**
 * The concrete ontology RID to put on the wire, keyed by the ontology RID the SDK was
 * generated against. Ontologies have no wire-addressable apiName in the OSDK, so the
 * source RID is the only stable key available.
 */
export function $resolveOntologyRid(sourceRid: string): string {
  return resolveOntology(sourceRid).id.rid;
}

/**
 * The ontology branch RID to put on the wire, or `undefined` when the target environment
 * has no branch. Throws if `sourceRid` itself is unknown — a present entry with no
 * `branch` is a legitimate "no branch", a missing entry is not.
 */
export function $resolveOntologyBranch(sourceRid: string): string | undefined {
  return resolveOntology(sourceRid).branch?.rid;
}

function resolveOntology(sourceRid: string): OntologyValue {
  return resolveEntry("ontologies", sourceRid);
}

export function $resolveObjectType(alias: string): string {
  return resolveObject(alias).apiName;
}

/**
 * The object type's primary key property name. It reaches the wire both as a `where`
 * clause field and as a response key, so it is resolver-backed rather than left literal.
 */
export function $resolvePrimaryKey(typeAlias: string): string {
  return resolveObject(typeAlias).primaryKeyApiName;
}

function resolveObject(alias: string): ObjectTypeValue {
  return resolveEntry("objects", alias);
}

export function $resolveInterfaceType(alias: string): string {
  return resolveEntry("interfaces", alias).apiName;
}

export function $resolveAction(alias: string): string {
  return resolveEntry("actions", alias).apiName;
}

export function $resolveQuery(alias: string): string {
  return resolveQueryEntry(alias).apiName;
}

/**
 * The concrete version string the OSDK puts in the request. The emitter always writes it,
 * so a file without it is a hand-edit mistake and throws rather than guessing.
 */
export function $resolveQueryVersion(alias: string): string {
  const entry = resolveQueryEntry(alias);
  if (entry.version === undefined) {
    throw new Error(
      `[@osdk/aliases] the alias entry for defaults.queries["${alias}"] carries no ` +
        `"version". Every query alias must carry the concrete version string to put in ` +
        `the request. Layers consulted, highest precedence first: ${$describeLayers()}.`,
    );
  }
  return entry.version;
}

function resolveQueryEntry(alias: string): QueryTypeValue {
  return resolveEntry("queries", alias);
}

/**
 * Tier 2 hook. Shipped and tested, but not called by generated code in Tier 1 — the
 * emitter already writes `properties`, so Tier 2 becomes a consumer-side change only.
 *
 * `typeAlias` may name either an object type or an interface type; objects are searched
 * first.
 */
export function $resolveProperty(typeAlias: string, propAlias: string): string {
  return resolveMember("properties", typeAlias, propAlias).apiName;
}

/**
 * Tier 2 hook, exactly as $resolveProperty above: shipped and tested, not yet called by
 * generated code.
 */
export function $resolveLink(typeAlias: string, linkAlias: string): string {
  return resolveMember("links", typeAlias, linkAlias).apiName;
}

function resolveMember(
  field: "links" | "properties",
  typeAlias: string,
  memberAlias: string,
): LinkValue | PropertyValue {
  for (const layer of $aliasLayers()) {
    const defaults = layer.file?.defaults;
    const entry: InterfaceTypeValue | ObjectTypeValue | undefined =
      defaults?.objects?.[typeAlias] ?? defaults?.interfaces?.[typeAlias];
    const member = entry?.[field][memberAlias];
    if (member !== undefined) return member;
  }
  throw missing(
    `defaults.objects["${typeAlias}"].${field}["${memberAlias}"] (nor ` +
      `defaults.interfaces["${typeAlias}"].${field}["${memberAlias}"])`,
  );
}
