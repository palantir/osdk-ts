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

import type { LinkedType, LinkNames, ObjectTypeDefinition } from "@osdk/api";
import type { SeedLinkEntry, SeedOutput, SeedProps, SeedRef } from "./types.js";

/** Internal representation of a resolved link before validation. */
interface ResolvedLink {
  sourceObjectType: string;
  sourceKey: string;
  linkType: string;
  targetObjectType: string;
  targetKey: string;
}

/** Checks whether a value is a {@link SeedRef} returned by `SeedBuilder.add()`. */
function isSeedRef(value: unknown): value is SeedRef {
  return typeof value === "object"
    && value != null
    && "__objectTypeApiName" in value
    && "__primaryKey" in value;
}

/**
 * Resolves a link from two {@link SeedRef} instances.
 * Extracts the object type and primary key from each ref.
 */
function resolveFromRefs(
  src: SeedRef,
  srcLinkName: string,
  dst: SeedRef,
): ResolvedLink {
  return {
    sourceObjectType: src.__objectTypeApiName,
    sourceKey: String(src.__primaryKey),
    linkType: srcLinkName,
    targetObjectType: dst.__objectTypeApiName,
    targetKey: String(dst.__primaryKey),
  };
}

/**
 * Resolves a link from two {@link ObjectTypeDefinition} instances and explicit primary keys.
 * Reads the `apiName` from each type definition.
 */
function resolveFromTypes(
  srcType: ObjectTypeDefinition,
  srcPk: string | number,
  srcLinkName: string,
  dstType: ObjectTypeDefinition,
  dstPk: string | number,
): ResolvedLink {
  return {
    sourceObjectType: srcType.apiName,
    sourceKey: String(srcPk),
    linkType: srcLinkName,
    targetObjectType: dstType.apiName,
    targetKey: String(dstPk),
  };
}

/**
 * A lightweight, type-safe builder for constructing seed data.
 *
 * TypeScript catches everything expressible at the call site: property
 * names and value types, required primary keys, link names valid on the
 * source type, and link target types matching what the link points to.
 */
export class SeedBuilder {
  readonly #objects = new Map<string, Map<string, Record<string, unknown>>>();
  readonly #refs = new Set<string>();
  readonly #links: SeedLinkEntry[] = [];

  /**
   * Register a seed object and return a typed reference for use in {@link link}.
   *
   * Property names and value types are validated at compile time against the
   * generated SDK type. Non-nullable properties (including the primary key)
   * are required.
   *
   * @param type  - The generated SDK object type definition (e.g., `Product`).
   * @param props - Property values for the object. Must match the SDK type's property schema.
   * @returns A frozen {@link SeedRef} carrying the object type and primary key.
   * @throws if the primary key is null, undefined, or already registered for this type.
   * @throws if the object type definition is missing `apiName` or `primaryKeyApiName`.
   */
  add<Q extends ObjectTypeDefinition>(
    type: Q,
    props: SeedProps<Q>,
  ): SeedRef<Q> {
    // Runtime guards for callers who bypass the type system with `as any`.
    // Properly-typed ObjectTypeDefinition values can't reach these.
    const apiName = type.apiName;
    const pkApiName = type.primaryKeyApiName;

    if (!apiName) {
      throw new Error("Object type is missing apiName");
    }
    if (!pkApiName) {
      throw new Error(`[${apiName}] Object type is missing primaryKeyApiName`);
    }

    const record = props as Record<string, unknown>;
    const pkValue = record[pkApiName];

    if (pkValue == null) {
      throw new Error(
        `[${apiName}] Primary key '${pkApiName}' is null or undefined`,
      );
    }

    const pk = String(pkValue);

    let typeMap = this.#objects.get(apiName);
    if (!typeMap) {
      typeMap = new Map();
      this.#objects.set(apiName, typeMap);
    }

    if (typeMap.has(pk)) {
      throw new Error(`[${apiName}] Duplicate primary key '${pk}'`);
    }

    typeMap.set(pk, { ...record });
    this.#refs.add(`${apiName}:${pk}`);

    return Object.freeze({
      __objectTypeApiName: apiName,
      __primaryKey: pkValue as string | number,
    }) as SeedRef<Q>;
  }

  /**
   * Register a link between two seed objects.
   *
   * Two calling conventions are supported — both produce identical output.
   *
   * **By reference** — full compile-time safety on link names and target types:
   * ```ts
   * const prod = seed.add(Product, { pk: "prod-001", title: "Widget" });
   * const alice = seed.add(Seller, { pk: "seller-001", name: "Alice" });
   * seed.link("widget-seller", prod, "sellers", alice, "products");
   * ```
   *
   * **By type + primary key** — no refs needed, useful for bulk or deferred linking:
   * ```ts
   * seed.link("widget-seller", Product, "prod-001", "sellers", Seller, "seller-001", "products");
   * ```
   *
   * The `dstLinkName` parameter (the reverse link name) is required for
   * compile-time target type validation but is not stored in the output —
   * the downstream consumer resolves the reverse from the ontology schema.
   *
   * @param name - A descriptive label for this link (included in seed output and error messages).
   * @throws if either source or target object was not registered via {@link add}.
   */
  link<
    S extends ObjectTypeDefinition,
    SL extends LinkNames<S>,
    D extends LinkedType<S, SL>,
    DL extends LinkNames<D>,
  >(
    name: string,
    src: SeedRef<S>,
    srcLinkName: SL,
    dst: SeedRef<D>,
    dstLinkName: DL,
  ): void;
  link<
    S extends ObjectTypeDefinition,
    SL extends LinkNames<S>,
    D extends LinkedType<S, SL>,
    DL extends LinkNames<D>,
  >(
    name: string,
    srcType: S,
    srcPk: string | number,
    srcLinkName: SL,
    dstType: D,
    dstPk: string | number,
    dstLinkName: DL,
  ): void;
  link(
    name: string,
    srcOrType: SeedRef | ObjectTypeDefinition,
    linkNameOrPk: string | number,
    dstOrLinkName: SeedRef | ObjectTypeDefinition | string,
    typeOrLinkName?: ObjectTypeDefinition | string,
    dstPk?: string | number,
    _dstLinkName?: string,
  ): void {
    const resolved = isSeedRef(srcOrType)
      ? resolveFromRefs(
        srcOrType,
        linkNameOrPk as string,
        dstOrLinkName as SeedRef,
      )
      : resolveFromTypes(
        srcOrType,
        linkNameOrPk,
        dstOrLinkName as string,
        typeOrLinkName as ObjectTypeDefinition,
        dstPk!,
      );

    this.#assertRegistered(
      resolved.sourceObjectType,
      resolved.sourceKey,
      "Source",
      name,
    );
    this.#assertRegistered(
      resolved.targetObjectType,
      resolved.targetKey,
      "Target",
      name,
    );

    this.#links.push({ name, ...resolved });
  }

  /**
   * Asserts that an object with the given type and key was registered via {@link add}.
   * @throws with a descriptive message including the link name for context.
   */
  #assertRegistered(
    objectType: string,
    key: string,
    role: "Source" | "Target",
    linkName: string,
  ): void {
    const ref = `${objectType}:${key}`;
    if (!this.#refs.has(ref)) {
      throw new Error(
        `${role} '${ref}' not registered (link '${linkName}')`,
      );
    }
  }

  /**
   * Build the final {@link SeedOutput} from all registered objects and links.
   *
   * The returned arrays are fresh copies, so a subsequent `add()` or `link()`
   * call does not retroactively grow or shrink an array that was already
   * returned. The property records inside the arrays, however, are shared
   * references with the builder's internal storage — mutating
   * `output.objects.Employee[0].name = "x"` *will* propagate into the
   * builder and into anything else holding a previous output. Treat the
   * output as read-only, or deep-clone it before mutating.
   *
   * Inputs to {@link add} are still safe to mutate after calling: `add` stores
   * a shallow copy of the props record on registration.
   */
  build(): SeedOutput {
    const objects: Record<string, Array<Record<string, unknown>>> = {};
    for (const [apiName, typeMap] of this.#objects) {
      objects[apiName] = [...typeMap.values()];
    }
    return { objects, links: [...this.#links] };
  }
}

/**
 * Create seed data using a builder function.
 *
 * The builder is created, passed to `fn`, and the resulting {@link SeedOutput}
 * is returned as the module's default export for consumption by the seed compiler.
 *
 * @param fn - A function that registers objects and links on the provided {@link SeedBuilder}.
 * @returns The built {@link SeedOutput} containing all registered objects and links.
 *
 * @example
 * ```ts
 * import { Product, Seller } from "@ontology/sdk";
 * import { createSeed } from "@osdk/seed-helpers";
 *
 * export default createSeed((seed) => {
 *   const prod = seed.add(Product, { pk: "prod-001", title: "Widget", price: 100 });
 *   const alice = seed.add(Seller, { pk: "seller-001", name: "Alice" });
 *   seed.link("widget-seller", prod, "sellers", alice, "products");
 * });
 * ```
 */
export function createSeed(fn: (seed: SeedBuilder) => void): SeedOutput {
  const builder = new SeedBuilder();
  fn(builder);
  return builder.build();
}
