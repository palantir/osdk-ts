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

import type { ObjectSet as WireObjectSet } from "@osdk/foundry.ontologies";
import { Trie } from "@wry/trie";
import {
  getWireObjectSet,
  isObjectSet,
} from "../../../objectSet/createObjectSet.js";
import { isObjectSpecifiersObject } from "../../../util/isObjectSpecifiersObject.js";
import type { Canonical } from "../Canonical.js";

export type CanonicalFunctionParams = Record<string, CanonicalValue>;

type PrimitiveValue = string | number | boolean | bigint | null | undefined;

type OsdkObjectRef = { $apiName: string; $primaryKey: string | number };

type CanonicalValue =
  | PrimitiveValue
  | OsdkObjectRef
  | WireObjectSet
  | CanonicalValue[]
  | [CanonicalValue, CanonicalValue][]
  | { [key: string]: CanonicalValue };

type PathElement = PrimitiveValue | WireObjectSet;

function isPrimitiveValue(value: unknown): value is PrimitiveValue {
  if (value == null || value === undefined) return true;
  const t = typeof value;
  return t === "string" || t === "number" || t === "boolean" || t === "bigint";
}

export class FunctionParamsCanonicalizer {
  #inputCache = new WeakMap<
    Record<string, unknown>,
    Canonical<CanonicalFunctionParams>
  >();
  #trie = new Trie<object>(false);
  #canonicalByMarker = new WeakMap<
    object,
    Canonical<CanonicalFunctionParams>
  >();

  public canonicalize(
    params: Record<string, unknown> | undefined | null,
  ): Canonical<CanonicalFunctionParams> | undefined {
    if (params == null) {
      return undefined;
    }

    const cached = this.#inputCache.get(params);
    if (cached !== undefined) {
      return cached;
    }

    const seen = new WeakSet<object>();
    const path: PathElement[] = [];
    const canonicalValue = this.#encodeAndBuild(
      params,
      path,
      seen,
    ) as CanonicalFunctionParams;

    const marker = this.#trie.lookupArray(path);
    let canonical = this.#canonicalByMarker.get(marker);
    if (canonical === undefined) {
      canonical = canonicalValue as Canonical<CanonicalFunctionParams>;
      this.#canonicalByMarker.set(marker, canonical);
    }

    this.#inputCache.set(params, canonical);
    return canonical;
  }

  #encodeAndBuild(
    value: unknown,
    path: PathElement[],
    seen: WeakSet<object>,
  ): CanonicalValue {
    if (value == null) {
      path.push(null);
      return null;
    }

    if (value === undefined) {
      path.push(undefined);
      return undefined;
    }

    if (
      typeof value === "boolean"
      || typeof value === "number"
      || typeof value === "string"
      || typeof value === "bigint"
    ) {
      path.push(value);
      return value;
    }

    if (seen.has(value as object)) {
      throw new Error("Circular reference in function parameters");
    }
    seen.add(value as object);

    if (value instanceof Date) {
      const iso = value.toISOString();
      path.push("$:date", iso);
      return iso;
    }

    if (Array.isArray(value)) {
      path.push("$:array");
      const arr = value.map(item => this.#encodeAndBuild(item, path, seen));
      path.push("$:array_end");
      return arr;
    }

    if (value instanceof Set) {
      path.push("$:set");
      const sorted = this.#sortSetValues(Array.from(value));
      const arr = sorted.map(item => this.#encodeAndBuild(item, path, seen));
      path.push("$:set_end");
      return arr;
    }

    if (value instanceof Map) {
      path.push("$:map");
      const sorted = this.#sortMapEntries(Array.from(value.entries()));
      const arr: [CanonicalValue, CanonicalValue][] = sorted.map(([k, v]) => [
        this.#encodeAndBuild(k, path, seen),
        this.#encodeAndBuild(v, path, seen),
      ]);
      path.push("$:map_end");
      return arr;
    }

    if (isObjectSpecifiersObject(value)) {
      path.push("$:osdk", value.$apiName, value.$primaryKey);
      return { $apiName: value.$apiName, $primaryKey: value.$primaryKey };
    }

    if (isObjectSet(value)) {
      const wire = getWireObjectSet(value);
      path.push("$:objectset", wire);
      return wire;
    }

    const obj = value as Record<string, unknown>;
    path.push("$:object");
    const canonical: Record<string, CanonicalValue> = {};
    for (const key of Object.keys(obj).sort()) {
      path.push(key);
      canonical[key] = this.#encodeAndBuild(obj[key], path, seen);
    }
    path.push("$:object_end");
    return canonical;
  }

  #comparePrimitives(a: PrimitiveValue, b: PrimitiveValue): number {
    const ta = typeof a;
    const tb = typeof b;
    if (ta !== tb) return ta.localeCompare(tb);
    if (ta === "string") return (a as string).localeCompare(b as string);
    if (ta === "number") return (a as number) - (b as number);
    if (ta === "boolean") return (a ? 1 : 0) - (b ? 1 : 0);
    if (ta === "bigint") return Number((a as bigint) - (b as bigint));
    return 0;
  }

  #sortSetValues<T>(items: T[]): T[] {
    return items.slice().sort((a, b) => {
      if (isPrimitiveValue(a) && isPrimitiveValue(b)) {
        return this.#comparePrimitives(a, b);
      }
      try {
        return JSON.stringify(a).localeCompare(JSON.stringify(b));
      } catch {
        return 0;
      }
    });
  }

  #sortMapEntries<K, V>(entries: [K, V][]): [K, V][] {
    return entries.slice().sort(([a], [b]) => {
      if (isPrimitiveValue(a) && isPrimitiveValue(b)) {
        return this.#comparePrimitives(a, b);
      }
      try {
        return JSON.stringify(a).localeCompare(JSON.stringify(b));
      } catch {
        return 0;
      }
    });
  }
}
