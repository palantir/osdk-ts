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
  CompileTimeMetadata,
  ObjectTypeDefinition,
  Osdk,
  Result,
} from "@osdk/api";
import invariant from "tiny-invariant";
import type { MockOsdkObjectOptions } from "../api/MockOsdkObjectOptions.js";
import { isMockObjectSet } from "./createMockObjectSet.js";

// TODO: Add support for RDPs

function createSingleLinkStub<T extends ObjectTypeDefinition>(
  linked: Osdk.Instance<T> | Error,
): {
  fetchOne: () => Promise<Osdk.Instance<T>>;
  fetchOneWithErrors: () => Promise<Result<Osdk.Instance<T>>>;
} {
  if (linked instanceof Error) {
    return {
      fetchOne: () => Promise.reject(linked),
      fetchOneWithErrors: () => Promise.resolve({ error: linked }),
    };
  }
  return {
    fetchOne: () => Promise.resolve(linked),
    fetchOneWithErrors: () => Promise.resolve({ value: linked }),
  };
}

function createManyLinkStub<T extends ObjectTypeDefinition>(
  linkedObjects: Array<Osdk.Instance<T>>,
): {
  fetchOne: (primaryKey: unknown) => Promise<Osdk.Instance<T> | undefined>;
  fetchPage: () => Promise<
    { data: Array<Osdk.Instance<T>>; nextPageToken: undefined }
  >;
  asyncIter: () => AsyncIterableIterator<Osdk.Instance<T>>;
  aggregate: () => never;
} {
  return {
    fetchOne: (primaryKey: unknown) => {
      if (linkedObjects.length > 0 && linkedObjects[0].$primaryKey == null) {
        invariant(
          false,
          `fetchOne requires primaryKeyApiName to be set on linked objects`,
        );
      }
      const found = linkedObjects.find((obj) => obj.$primaryKey === primaryKey);
      invariant(
        found != null,
        `fetchOne could not find object with primary key ${String(primaryKey)}`,
      );
      return Promise.resolve(found);
    },
    fetchPage: () =>
      Promise.resolve({ data: linkedObjects, nextPageToken: undefined }),
    asyncIter: () => {
      let index = 0;
      return {
        [Symbol.asyncIterator]() {
          return this;
        },
        async next() {
          if (index < linkedObjects.length) {
            return { value: linkedObjects[index++], done: false as const };
          }
          return { value: undefined, done: true as const };
        },
      };
    },
    aggregate: () => {
      invariant(false, `aggregate is not supported on mock link stubs.`);
    },
  };
}

/**
 * Creates a mock OSDK object for testing purposes.
 *
 * The mock object has the same shape as a real OSDK object including:
 * - $apiName, $objectType, $primaryKey, $title, $rid
 * - All provided properties
 * - Stub implementations that throw errors for unsupported operations
 *
 * Note: The primary key property must be included in the provided properties.
 * The primary key API name is read from the object type definition's
 * `primaryKeyApiName` field (set on generated object consts).
 *
 * @example
 * ```typescript
 * const employee = createMockOsdkObject(
 *   Employee,
 *   { employeeId: 1, fullName: "John Doe" },
 *   { titlePropertyApiName: "fullName" },
 * );
 *
 * expect(employee.$primaryKey).toBe(1);
 * expect(employee.$title).toBe("John Doe");
 * ```
 *
 * @param objectType - The object type definition (e.g., Employee)
 * @param properties - The properties for the mock object
 * @param options - Configuration including links, titlePropertyApiName, and $rid
 * @returns A frozen mock OSDK object
 */
export function createMockOsdkObject<
  Q extends ObjectTypeDefinition,
>(
  objectType: Q,
  properties?: Partial<CompileTimeMetadata<Q>["props"]>,
  options: MockOsdkObjectOptions<Q> = {},
): Osdk.Instance<Q> {
  const {
    links,
    titlePropertyApiName,
  } = options;

  const primaryKeyApiName = objectType.primaryKeyApiName;

  invariant(
    primaryKeyApiName != null,
    `Object type "${objectType.apiName}" does not have a primaryKeyApiName defined. `
      + `Ensure you are using a generated object type constant that includes primaryKeyApiName.`,
  );

  if (properties == null) {
    properties = {};
  }

  invariant(
    primaryKeyApiName in properties,
    `Primary key property "${primaryKeyApiName}" must be provided in properties for ${objectType.apiName}. `
      + `Include "${primaryKeyApiName}" in the properties argument.`,
  );

  if (titlePropertyApiName != null) {
    invariant(
      titlePropertyApiName in properties,
      `titlePropertyApiName "${titlePropertyApiName}" was specified but not found in properties for ${objectType.apiName}`,
    );
  }

  const $primaryKey = properties[primaryKeyApiName as keyof typeof properties];

  const $title = titlePropertyApiName != null
    ? properties[titlePropertyApiName as keyof typeof properties] as
      | string
      | undefined
    : undefined;

  const $rid = options.$rid
    ?? `ri.mock.main.object.${objectType.apiName}.${String($primaryKey)}`;

  const mockObject: Record<string, unknown> = {
    $apiName: objectType.apiName,
    $objectType: objectType.apiName,
    ...properties,
  };

  Object.defineProperty(mockObject, "$primaryKey", {
    get() {
      return $primaryKey;
    },
    enumerable: true,
  });

  Object.defineProperty(mockObject, "$title", {
    get() {
      return $title;
    },
    enumerable: true,
  });

  // Define $rid
  Object.defineProperty(mockObject, "$rid", {
    get() {
      return $rid;
    },
    enumerable: true,
  });

  Object.defineProperty(mockObject, "$objectSpecifier", {
    get() {
      return `${objectType.apiName}:${String($primaryKey)}`;
    },
    enumerable: true,
  });

  Object.defineProperty(mockObject, "$link", {
    get() {
      if (links == null) {
        return undefined;
      }
      const linkAccessors: Record<string, unknown> = {};
      for (const [linkName, linkValue] of Object.entries(links)) {
        if (linkValue == null) {
          continue;
        }
        if (isMockObjectSet(linkValue)) {
          linkAccessors[linkName] = linkValue;
        } else if (Array.isArray(linkValue)) {
          linkAccessors[linkName] = createManyLinkStub(
            linkValue as Array<Osdk.Instance<ObjectTypeDefinition>>,
          );
        } else {
          linkAccessors[linkName] = createSingleLinkStub(
            linkValue as Osdk.Instance<ObjectTypeDefinition> | Error,
          );
        }
      }
      return linkAccessors;
    },
    enumerable: true,
  });

  Object.defineProperty(mockObject, "$as", {
    value: function $as(): never {
      invariant(false, `$as is not supported on mock objects.`);
    },
    enumerable: false,
  });

  Object.defineProperty(mockObject, "$clone", {
    value: function $clone(
      updates?: Partial<CompileTimeMetadata<Q>["props"]>,
    ): Osdk.Instance<Q, "$rid"> {
      if (updates == null) {
        return createMockOsdkObject(
          objectType,
          { ...properties },
          options,
        ) as any;
      }

      if (primaryKeyApiName in updates) {
        invariant(
          updates[primaryKeyApiName as keyof typeof updates] === $primaryKey,
          `Cannot update ${objectType.apiName} object with differing primary key values`,
        );
      }

      const newProperties = { ...properties, ...updates };
      return createMockOsdkObject(
        objectType,
        newProperties,
        options,
      ) as any;
    },
    enumerable: false,
  });

  Object.defineProperty(
    mockObject,
    "$__EXPERIMENTAL__NOT_SUPPORTED_YET__metadata",
    {
      get(): never {
        invariant(
          false,
          `$__EXPERIMENTAL__NOT_SUPPORTED_YET__metadata is not supported on mock objects.`,
        );
      },
      enumerable: false,
    },
  );

  Object.defineProperty(
    mockObject,
    "$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue",
    {
      value:
        function $__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue(): never {
          invariant(
            false,
            `$__EXPERIMENTAL__NOT_SUPPORTED_YET__getFormattedValue is not supported on mock objects.`,
          );
        },
      enumerable: false,
    },
  );

  return Object.freeze(mockObject) as unknown as any;
}
