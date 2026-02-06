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
 * const employee = createMockOsdkObject(Employee, {
 *   employeeId: 1,
 *   fullName: "John Doe",
 *   office: "NYC"
 * }, {
 *   primaryKeyApiName: "employeeId",
 *   titlePropertyApiName: "fullName"
 * });
 *
 * expect(employee.$apiName).toBe("Employee");
 * expect(employee.$primaryKey).toBe(1);
 * expect(employee.$title).toBe("John Doe");
 * expect(employee.fullName).toBe("John Doe");
 * ```
 *
 * @param objectType - The object type definition (e.g., Employee)
 * @param properties - The properties for the mock object
 * @param options - Configuration including primaryKeyApiName and titlePropertyApiName
 * @returns A frozen mock OSDK object
 */
export function createMockOsdkObject<
  Q extends ObjectTypeDefinition,
>(
  objectType: Q,
  properties?: Partial<CompileTimeMetadata<Q>["props"]>,
  links?: {
    [LINK_NAME in LinkNames<Q>]:
      CompileTimeMetadata<Q>["links"][LINK_NAME]["multiplicity"] extends true
        ? never // TODO: Support multi links
        : Osdk.Instance<
          LinkedType<Q, LINK_NAME>
        >;
  },
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

  // Define $primaryKey - returns undefined if primaryKeyApiName not provided.
  // We return undefined instead of throwing so that vitest matchers can
  // safely access this property without causing test failures.
  Object.defineProperty(mockObject, "$primaryKey", {
    get() {
      return $primaryKey;
    },
    enumerable: true,
  });

  // Define $title - returns undefined if titlePropertyApiName not provided.
  // We return undefined instead of throwing so that vitest matchers can
  // safely access this property without causing test failures.
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

  // Define $objectSpecifier - returns undefined if primaryKeyApiName not provided.
  // We return undefined instead of throwing so that vitest matchers can
  // safely access this property without causing test failures as this field is enumerable.
  Object.defineProperty(mockObject, "$objectSpecifier", {
    get() {
      if (primaryKeyApiName == null) {
        return undefined;
      }
      return `${objectType.apiName}:${String($primaryKey)}`;
    },
    enumerable: true,
  });

  // Define $link - returns the configured links or undefined if not provided.
  // We return undefined instead of throwing so that vitest matchers can
  // safely access this property without causing test failures as this field is enumerable.
  Object.defineProperty(mockObject, "$link", {
    get() {
      if (links == null) {
        return undefined;
      }
      return links;
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

      // Check if primary key is being changed
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
