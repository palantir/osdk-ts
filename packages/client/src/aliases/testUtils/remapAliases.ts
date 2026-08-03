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

import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";

import type {
  AliasesFile,
  InterfaceTypeValue,
  ObjectTypeValue,
} from "@osdk/aliases";
import { parseAliasesFile } from "@osdk/aliases";

/**
 * The ontology RID the `remapped` mode's SDK is told to talk to. A real install
 * rehydrates onto new resources, so nothing about it resembles the source RID.
 */
export const REMAPPED_ONTOLOGY_RID =
  "ri.ontology.main.ontology.b0000000-0000-0000-0000-00000000000b";

/** The apiName the remapped faux ontology is registered under. */
export const REMAPPED_ONTOLOGY_API_NAME = "remapped-ontology";

/**
 * The remapped alias file also moves the ontology onto a branch, because that is the only
 * way `$resolveOntologyBranch` becomes observable in a recorded trace: `branch` rides
 * along as a query parameter on every ontology call. The packaged file has
 * `branch: null`, so `?branch=` appearing at all is itself the signal.
 */
export const REMAPPED_BRANCH_RID =
  "ri.ontology.main.branch.c0000000-0000-0000-0000-00000000000c";

/**
 * Namespace prefix applied to *type* names only, mirroring
 * `dev-docs/alias-aware-osdk/fixtures/aliases.todo.remapped.json`, which prefixes
 * objects/interfaces/actions/queries with `foo.bar.` but renames properties and links
 * to bare, independently chosen names. A uniform prefix transform would let code that
 * assumes "everything gained the same prefix" pass.
 */
export const TYPE_NAMESPACE = "foo.bar.";

/** Suffix applied to property and link names. See {@link deriveRemappedAliases}. */
export const MEMBER_SUFFIX = "_remapped";

export function remappedTypeName(sourceApiName: string): string {
  return TYPE_NAMESPACE + sourceApiName;
}

export function remappedMemberName(sourceApiName: string): string {
  return sourceApiName + MEMBER_SUFFIX;
}

/** `0.0.9` -> `0.0.10`. Every query in the file moves, so a stale version is visible. */
export function bumpPatch(version: string): string {
  const parts = version.split(".");
  if (parts.length !== 3) {
    throw new Error(`cannot bump non-semver query version "${version}"`);
  }
  return `${parts[0]}.${parts[1]}.${Number(parts[2]) + 1}`;
}

/**
 * Reads the alias file the SDK actually ships. This is the `identity-override` fixture:
 * feeding a generated SDK its own packaged defaults through a higher-precedence layer
 * must not change one byte of what it puts on the wire.
 *
 * Resolved through the package's own module resolution rather than a hardcoded relative
 * path, so it keeps working if the file moves inside the package.
 */
export function readPackagedAliases(): AliasesFile {
  const require = createRequire(import.meta.url);
  const sdkEntry = require.resolve("@osdk/client.test.ontology");
  const path = join(dirname(sdkEntry), "generatedNoCheck", "aliases.json");
  return parseAliasesFile(JSON.parse(readFileSync(path, "utf-8")) as unknown);
}

/**
 * Derives the `remapped` fixture from the packaged one.
 *
 * Derived rather than checked in because the SDK under test is generated from
 * `LegacyFauxFoundry`, not from `TodoWireOntology`, so the three fixtures in
 * `dev-docs/alias-aware-osdk/fixtures/` do not key to it. The transform is the same one
 * that produced `aliases.todo.remapped.json` by hand:
 *
 * - object / interface / action / query apiNames gain a `foo.bar.` namespace,
 * - property and link apiNames get a bare, un-prefixed rename,
 * - the primary key moves with its property, so
 *   `primaryKeyApiName === properties[pk].apiName` still holds (schema rule 4),
 * - every query version is bumped,
 * - every RID changes, because a real install rehydrates onto new resources,
 * - the ontology gains a branch, which the packaged file does not have.
 *
 * Note what this means for Tier 1: the file claims properties and links were renamed,
 * and Tier 1 deliberately does not act on that claim. The suite asserts the *source*
 * property and link names still reach the wire, which is how the Tier 2 gap stays
 * visible instead of being discovered in the field.
 */
export function deriveRemappedAliases(packaged: AliasesFile): AliasesFile {
  const source = structuredClone(packaged);
  const d = source.defaults;

  for (const ontology of Object.values(d.ontologies ?? {})) {
    ontology.id = { rid: REMAPPED_ONTOLOGY_RID };
    ontology.branch = { rid: REMAPPED_BRANCH_RID };
  }

  for (const [key, object] of Object.entries(d.objects ?? {})) {
    object.primaryKeyApiName = remappedMemberName(object.primaryKeyApiName);
    object.apiName = remappedTypeName(key);
    remapMembers(object);
    if (object.id !== undefined)
      object.id = { rid: remappedRid(object.id.rid) };
  }

  for (const [key, iface] of Object.entries(d.interfaces ?? {})) {
    iface.apiName = remappedTypeName(key);
    remapMembers(iface);
    if (iface.id !== undefined) iface.id = { rid: remappedRid(iface.id.rid) };
  }

  for (const [key, action] of Object.entries(d.actions ?? {})) {
    action.apiName = remappedTypeName(key);
    if (action.id !== undefined)
      action.id = { rid: remappedRid(action.id.rid) };
  }

  for (const [key, query] of Object.entries(d.queries ?? {})) {
    query.apiName = remappedTypeName(key);
    if (query.version !== undefined) {
      query.version = bumpPatch(query.version);
    }
    if (query.id !== undefined) {
      query.id = {
        rid: remappedRid(query.id.rid),
        ...(query.id.version === undefined
          ? {}
          : { version: bumpPatch(query.id.version) }),
      };
    }
  }

  // Round-trip through the parser so the derived file is held to the same validation
  // the runtime applies to a hand-written one -- in particular schema rule 4, the
  // primary-key/property consistency check that a naive rename gets wrong.
  return parseAliasesFile(JSON.parse(JSON.stringify(source)) as unknown);
}

function remapMembers(value: ObjectTypeValue | InterfaceTypeValue): void {
  for (const [name, property] of Object.entries(value.properties)) {
    property.apiName = remappedMemberName(name);
  }
  for (const [name, link] of Object.entries(value.links)) {
    link.apiName = remappedMemberName(name);
  }
}

function remappedRid(sourceRid: string): string {
  return `${sourceRid}.remapped`;
}
