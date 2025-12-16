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
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
  PropertyKeys,
} from "@osdk/api";
import type { AccessorColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";

/**
 * Hook which builds column definitions for tanstack-table given the objectSet
 */
export function useColumnDefs<Q extends ObjectTypeDefinition>(
  objectSet: ObjectSet<Q>,
): AccessorColumnDef<
  Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, {}>
>[] {
  const stableObjectSet = useMemo(() => objectSet, [JSON.stringify(objectSet)]);

  const properties = useMemo(() => {
    return stableObjectSet.$objectSetInternals.def.__DefinitionMetadata
      ?.properties;
  }, [stableObjectSet]);

  const columnDefs: AccessorColumnDef<
    Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, {}>
  >[] = useMemo(() => {
    if (!properties) return [];

    return Object.entries(properties).map(([key, property]) => {
      const colDef: AccessorColumnDef<
        Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, {}>
      > = {
        accessorKey: key,
        header: property.displayName ?? key,
      };
      return colDef;
    });
  }, [properties]);

  return columnDefs;
}
