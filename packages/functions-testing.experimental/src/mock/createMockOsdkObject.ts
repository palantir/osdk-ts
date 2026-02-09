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
  LinkedType,
  LinkNames,
  ObjectTypeDefinition,
  Osdk,
} from "@osdk/api";
import invariant from "tiny-invariant";

/**
 * Options for customizing mock object creation.
 */
export interface MockOsdkObjectOptions {
  /** The API name of the primary key property (optional, required for $primaryKey and $objectSpecifier) */
  primaryKeyApiName?: string;
  /** The API name of the title property (optional, required for $title) */
  titlePropertyApiName?: string;
  /** Override the generated $rid */
  $rid?: string;
}

// TODO: Add support for RDPs

type LinkStubs<Q extends ObjectTypeDefinition> = {
  [LINK_NAME in LinkNames<Q>]?:
    CompileTimeMetadata<Q>["links"][LINK_NAME]["multiplicity"] extends true
      ? Array<Osdk.Instance<LinkedType<Q, LINK_NAME>>>
      : Osdk.Instance<LinkedType<Q, LINK_NAME>>;
};

function createSingleLinkStub<T extends ObjectTypeDefinition>(
  linkedObject: Osdk.Instance<T>,
): {
  fetchOne: () => Promise<Osdk.Instance<T>>;
  fetchOneWithErrors: () => Promise<{ value: Osdk.Instance<T> }>;
} {
  return {
    fetchOne: () => Promise.resolve(linkedObject),
    fetchOneWithErrors: () => Promise.resolve({ value: linkedObject }),
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
 * Note: You must provide `primaryKeyApiName` in options to access $primaryKey
 * and `titlePropertyApiName` to access $title.
 *
 * @example
 * ```typescript
 * const employee = createMockOsdkObject(
 *   Employee,
 *   { employeeId: 1, fullName: "John Doe" },
 *   undefined, // links
 *   { primaryKeyApiName: "employeeId", titlePropertyApiName: "fullName" },
 * );
 *
 * expect(employee.$primaryKey).toBe(1);
 * expect(employee.$title).toBe("John Doe");
 * ```
 *
 * @param objectType - The object type definition (e.g., Employee)
 * @param properties - The properties for the mock object
 * @param links - Objects linked to this object by API name
 * @param options - Configuration including primaryKeyApiName and titlePropertyApiName
 * @returns A frozen mock OSDK object
 */
export function createMockOsdkObject<
  Q extends ObjectTypeDefinition,
>(
  objectType: Q,
  properties?: Partial<CompileTimeMetadata<Q>["props"]>,
  links?: LinkStubs<Q>,
  options: MockOsdkObjectOptions = {},
): Osdk.Instance<Q> {
  const {
    primaryKeyApiName,
    titlePropertyApiName,
  } = options;

  if (properties == null) {
    properties = {};
  }

  if (primaryKeyApiName != null) {
    invariant(
      primaryKeyApiName in properties,
      `primaryKeyApiName "${primaryKeyApiName}" was specified but not found in properties for ${objectType.apiName}`,
    );
  }

  if (titlePropertyApiName != null) {
    invariant(
      titlePropertyApiName in properties,
      `titlePropertyApiName "${titlePropertyApiName}" was specified but not found in properties for ${objectType.apiName}`,
    );
  }

  const $primaryKey = primaryKeyApiName != null
    ? properties[primaryKeyApiName as keyof typeof properties]
    : undefined;

  const $title = titlePropertyApiName != null
    ? properties[titlePropertyApiName as keyof typeof properties] as
      | string
      | undefined
    : undefined;

  const $rid = options.$rid
    ?? ($primaryKey != null
      ? `ri.mock.main.object.${objectType.apiName}.${String($primaryKey)}`
      : `ri.mock.main.object.${objectType.apiName}.unknown`);

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
      if (primaryKeyApiName == null) {
        return undefined;
      }
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
        if (Array.isArray(linkValue)) {
          linkAccessors[linkName] = createManyLinkStub(
            linkValue as Array<Osdk.Instance<ObjectTypeDefinition>>,
          );
        } else {
          linkAccessors[linkName] = createSingleLinkStub(
            linkValue as Osdk.Instance<ObjectTypeDefinition>,
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
          { ...links } as any,
          options,
        ) as any;
      }

      if (primaryKeyApiName != null && primaryKeyApiName in updates) {
        invariant(
          updates[primaryKeyApiName as keyof typeof updates] === $primaryKey,
          `Cannot update ${objectType.apiName} object with differing primary key values`,
        );
      }

      const newProperties = { ...properties, ...updates };
      return createMockOsdkObject(
        objectType,
        newProperties,
        links,
        options,
      ) as any;
    },
    enumerable: false,
  });

  Object.defineProperty(
    mockObject,
    "$__EXPERIMENTAL__NOT_SUPPORTED_YET__metadata",
    {
      get() {
        return undefined;
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
