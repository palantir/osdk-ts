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

import invariant from "tiny-invariant";
import {
  defineActionInner,
  defineCreateActionInner,
  defineModifyActionInner,
} from "./defineAction.js";
import { defineInterfaceInner } from "./defineInterface.js";
import { defineInterfaceLinkConstraintInner } from "./defineInterfaceLinkConstraint.js";
import { defineLinkInner } from "./defineLink.js";
import { defineObjectInner } from "./defineObject.js";

import {
  globalNamespace,
  importedTypes,
  setGlobalNamespace,
} from "./defineOntology.js";
import { defineSharedPropertyTypeInner } from "./defineSpt.js";
import { defineValueTypeInner } from "./defineValueType.js";
import { type OntologyEntityBase, type OntologyEntityType } from "./types.js";

// all functions must be suffixed with "Inner" and take a namespace as the first argument
const innerFunctions = {
  defineSharedPropertyTypeInner,
  defineObjectInner,
  defineInterfaceInner,
  defineActionInner,
  defineCreateActionInner,
  defineModifyActionInner,
  defineLinkInner,
  defineValueTypeInner,
  defineInterfaceLinkConstraintInner,
} as const as InnerFunctionsType;

type InnerFunctionsType = {
  defineSharedPropertyTypeInner: typeof defineSharedPropertyTypeInner;
  defineObjectInner: typeof defineObjectInner;
  defineInterfaceInner: typeof defineInterfaceInner;
  defineActionInner: typeof defineActionInner;
  defineCreateActionInner: typeof defineCreateActionInner;
  defineModifyActionInner: typeof defineModifyActionInner;
  defineLinkInner: typeof defineLinkInner;
  defineValueTypeInner: typeof defineValueTypeInner;
  defineInterfaceLinkConstraintInner: typeof defineInterfaceLinkConstraintInner;
};

// ------------ add new things above this line ------------

type StripInner<S extends string> = S extends `${infer Prefix}Inner` ? Prefix
  : S;
type WithoutNamespace<F> = F extends (
  namespace: string,
  ...args: infer Args
) => infer Return ? (...args: Args) => Return
  : never;
type OntologyAsCodeFunctions = {
  [K in keyof typeof innerFunctions as StripInner<K>]: WithoutNamespace<
    typeof innerFunctions[K]
  >;
};

const apiNamespaceRegex = /^[a-z0-9-]+(\.[a-z0-9-]+)*\.$/;

export function createContext(namespace: string): OntologyAsCodeFunctions {
  if (globalNamespace === undefined) {
    // for cases where the cli isn't used, such as simple scripts or tests
    setGlobalNamespace(namespace);
  }
  let sanitizedNamespace = "";
  if (namespace.length !== 0) {
    sanitizedNamespace = (namespace.slice(-1) !== ".")
      ? namespace + "."
      : namespace;
    invariant(sanitizedNamespace.length < 1024, "API namespace is too long.");
    invariant(
      apiNamespaceRegex.test(sanitizedNamespace),
      `API namespace "${sanitizedNamespace}" is invalid! It is expected to conform to ^[a-z0-9-]+(\.[a-z0-9-]+)*\.$`,
    );
  }

  const importer: <
    T extends OntologyEntityType,
  >(e: T) => void = createImporter(namespace);

  return Object.fromEntries(
    Object.entries(innerFunctions).map(([name, fn]) => {
      return [
        name.replace(/Inner$/, ""),
        (...args: any[]) =>
          wrapWithProxy(
            (fn as any)(sanitizedNamespace, ...args),
            importer,
          ),
      ];
    }),
  ) as unknown as OntologyAsCodeFunctions;
}

function wrapWithProxy<
  T extends OntologyEntityType,
>(
  obj: T,
  importer: <
    T extends OntologyEntityType,
  >(e: T) => void,
): T {
  if (obj === undefined) {
    return obj;
  }
  return new Proxy(obj, {
    get(target, prop) {
      if (prop in target) {
        importer(target);
        return target[prop as keyof T];
      }
      return undefined;
    },
  });
}

export function createImporter(
  namespace: string,
): <T extends OntologyEntityBase>(e: T) => void {
  return namespace === globalNamespace
    ? () => {}
    : (e) => {
      if (importedTypes[e.__type][namespace] === undefined) {
        importedTypes[e.__type][namespace] = new Set();
      }
      importedTypes[e.__type][namespace].add(e.apiName);
    };
}
