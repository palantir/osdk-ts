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

import { describe, expectTypeOf, test, vi } from "vitest";

import type {
  ObjectMetadata as $ObjectMetadata,
  ObjectSet as $ObjectSet,
  ObjectTypeDefinition as $ObjectTypeDefinition,
  Osdk,
  PropertyDef as $PropertyDef,
  PropertyValueWireToClient as $PropType,
  SingleLinkAccessor as $SingleLinkAccessor,
} from "../index.js";

namespace Employee {
  export type PropertyKeys =
    | "fullName"
    | "class";

  export interface Links {
    readonly lead: $SingleLinkAccessor<Employee>;
    readonly peeps: Employee.ObjectSet;
  }

  export interface Props {
    readonly class: $PropType["string"] | undefined;
    readonly fullName: $PropType["string"] | undefined;
  }
  export type StrictProps = Props;

  export interface ObjectSet extends $ObjectSet<Employee, Employee.ObjectSet> {}
}

interface Employee extends $ObjectTypeDefinition {
  type: "object";
  apiName: "Employee";
  __DefinitionMetadata?: {
    objectSet: Employee.ObjectSet;
    props: Employee.Props;
    linksType: Employee.Links;
    strictProps: Employee.StrictProps;
    apiName: "Employee";
    description: "A full-time or part-time \n\n employee of our firm";
    displayName: "Employee";
    icon: {
      type: "blueprint";
      color: "blue";
      name: "person";
    };
    implements: ["FooInterface"];
    interfaceMap: {
      FooInterface: {
        fooSpt: "fullName";
      };
    };
    inverseInterfaceMap: {
      FooInterface: {
        fullName: "fooSpt";
      };
    };
    links: {
      lead: $ObjectMetadata.Link<Employee, false>;
      peeps: $ObjectMetadata.Link<Employee, true>;
    };
    pluralDisplayName: "Employees";
    primaryKeyApiName: "employeeId";
    primaryKeyType: "integer";
    properties: {
      class: $PropertyDef<"string", "nullable", "single">;
      fullName: $PropertyDef<"string", "nullable", "single">;
    };
    rid: "ri.ontology.main.object-type.401ac022-89eb-4591-8b7e-0a912b9efb44";
    status: "ACTIVE";
    titleProperty: "fullName";
    type: "object";
    visibility: "NORMAL";
  };
}

const Employee: Employee = {
  type: "object",
  apiName: "Employee",
};

describe("ObjectSet", () => {
  const fauxObjectSet = {
    where: vi.fn(() => {
      return fauxObjectSet;
    }),
    fetchPage: vi.fn(() => Promise.resolve()),
    asyncIter: vi.fn(() => {
      return {};
    }),
  } as any as Employee.ObjectSet;

  describe("normal", () => {
    test("select none", async () => {
      const result = await fauxObjectSet.fetchPage();
      expectTypeOf<typeof result.data[0]>().toEqualTypeOf<
        Osdk.Instance<Employee, never>
      >();
    });

    test("select one", async () => {
      const result = await fauxObjectSet.fetchPage({ "$select": ["fullName"] });
      expectTypeOf<typeof result.data[0]>().toEqualTypeOf<
        Osdk.Instance<Employee, never, "fullName">
      >();
    });
  });
});
