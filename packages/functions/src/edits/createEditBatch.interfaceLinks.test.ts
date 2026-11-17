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
  Client,
  CompileTimeMetadata,
  InterfaceDefinition,
  InterfaceMetadata,
  Osdk,
} from "@osdk/client";
import type {
  BarInterface,
  Employee,
  FooInterface,
  Office,
} from "@osdk/client.test.ontology";
import { describe, expect, it } from "vitest";

import { createEditBatch } from "./createEditBatch.js";
import type {
  AddInterfaceLink,
  Edits,
  InterfaceLocator,
  ObjectLocator,
  RemoveInterfaceLink,
} from "./types.js";

interface LinkSource extends InterfaceDefinition {
  apiName: "LinkSource";
  __DefinitionMetadata?: {
    apiName: "LinkSource";
    type: "interface";
    displayName: "Link source";
    description: undefined;
    rid: "ri.ontology.main.interface.link-source";
    properties: {};
    links: {
      manyInterfaces: InterfaceMetadata.Link<BarInterface, true>;
      oneInterface: InterfaceMetadata.Link<BarInterface, false>;
      manyObjects: InterfaceMetadata.Link<Office, true>;
      oneObject: InterfaceMetadata.Link<Office, false>;
    };
  };
}

interface OtherSource extends InterfaceDefinition {
  apiName: "OtherSource";
  __DefinitionMetadata?: Omit<
    CompileTimeMetadata<LinkSource>,
    "apiName" | "links"
  > & {
    apiName: "OtherSource";
    links: {
      manyObjects: InterfaceMetadata.Link<Employee, true>;
    };
  };
}

type LinkEdits = Edits.InterfaceLink<
  LinkSource,
  "manyInterfaces" | "oneInterface" | "manyObjects" | "oneObject"
>;

const client = {} as Client;
const source: InterfaceLocator<LinkSource> = {
  $apiName: "LinkSource",
  $objectType: "Employee",
  $primaryKey: 1,
};
const interfaceTarget: InterfaceLocator<BarInterface> = {
  $apiName: "BarInterface",
  $objectType: "Person",
  $primaryKey: 2,
};
const objectTarget: ObjectLocator<Office> = {
  $apiName: "Office",
  $primaryKey: "London",
};

describe("interface link edits", () => {
  it("emits interface-to-interface and interface-to-object edits", () => {
    const batch = createEditBatch<LinkEdits>(client);

    batch.link(source, "oneInterface", interfaceTarget);
    batch.unlink(source, "oneInterface", interfaceTarget);
    batch.link(source, "oneObject", objectTarget);
    batch.unlink(source, "oneObject", objectTarget);

    expect(batch.getEdits()).toEqual([
      {
        type: "addInterfaceLink",
        source,
        apiName: "oneInterface",
        target: interfaceTarget,
      },
      {
        type: "removeInterfaceLink",
        source,
        apiName: "oneInterface",
        target: interfaceTarget,
      },
      {
        type: "addInterfaceLink",
        source,
        apiName: "oneObject",
        target: objectTarget,
      },
      {
        type: "removeInterfaceLink",
        source,
        apiName: "oneObject",
        target: objectTarget,
      },
    ]);
  });

  it("emits an edit per target for interface constraints that allow many targets", () => {
    const batch = createEditBatch<LinkEdits>(client);
    const secondInterfaceTarget = { ...interfaceTarget, $primaryKey: 3 };
    const secondObjectTarget = { ...objectTarget, $primaryKey: "Paris" };

    batch.link(source, "manyInterfaces", [
      interfaceTarget,
      secondInterfaceTarget,
    ]);
    batch.unlink(source, "manyObjects", [objectTarget, secondObjectTarget]);

    expect(batch.getEdits()).toEqual([
      {
        type: "addInterfaceLink",
        source,
        apiName: "manyInterfaces",
        target: interfaceTarget,
      },
      {
        type: "addInterfaceLink",
        source,
        apiName: "manyInterfaces",
        target: secondInterfaceTarget,
      },
      {
        type: "removeInterfaceLink",
        source,
        apiName: "manyObjects",
        target: objectTarget,
      },
      {
        type: "removeInterfaceLink",
        source,
        apiName: "manyObjects",
        target: secondObjectTarget,
      },
    ]);
  });

  it("does not emit edits for empty target arrays", () => {
    const batch = createEditBatch<LinkEdits>(client);

    batch.link(source, "manyInterfaces", []);
    batch.unlink(source, "manyInterfaces", []);
    batch.link(source, "manyObjects", []);
    batch.unlink(source, "manyObjects", []);

    expect(batch.getEdits()).toEqual([]);
  });

  it("accepts OSDK instances and preserves their concrete object type", () => {
    const batch =
      createEditBatch<Edits.InterfaceLink<FooInterface, "toBar">>(client);
    const foo = {
      ...source,
      $apiName: "FooInterface",
    } as Osdk.Instance<FooInterface>;
    const bar = interfaceTarget as Osdk.Instance<BarInterface>;

    batch.link(foo, "toBar", bar);
    batch.unlink(foo, "toBar", [bar]);

    expect(batch.getEdits()).toEqual([
      { type: "addInterfaceLink", source: foo, apiName: "toBar", target: bar },
      {
        type: "removeInterfaceLink",
        source: foo,
        apiName: "toBar",
        target: bar,
      },
    ]);
  });

  it("supports concrete and interface links in the same edit scope", () => {
    const batch = createEditBatch<
      LinkEdits | Edits.Link<Employee, "visitedOffices">
    >(client);
    const employee = {
      $apiName: "Employee",
      $objectType: "Employee",
      $primaryKey: 1,
    } as Osdk.Instance<Employee>;

    batch.link(employee, "visitedOffices", objectTarget);
    batch.link(source, "manyObjects", objectTarget);
    batch.unlink(employee, "visitedOffices", objectTarget);
    batch.unlink(source, "manyObjects", objectTarget);

    expect(batch.getEdits()).toEqual([
      {
        type: "addLink",
        source: employee,
        apiName: "visitedOffices",
        target: objectTarget,
      },
      {
        type: "addInterfaceLink",
        source,
        apiName: "manyObjects",
        target: objectTarget,
      },
      {
        type: "removeLink",
        source: employee,
        apiName: "visitedOffices",
        target: objectTarget,
      },
      {
        type: "removeInterfaceLink",
        source,
        apiName: "manyObjects",
        target: objectTarget,
      },
    ]);
  });

  it("rejects unknown and undeclared link names at compile time", () => {
    // @ts-expect-error LinkSource has no such interface link constraint.
    createEditBatch<Edits.InterfaceLink<LinkSource, "unknown">>(client);

    const batch =
      createEditBatch<Edits.InterfaceLink<LinkSource, "oneObject">>(client);
    // @ts-expect-error The constraint exists but is outside the declared edit scope.
    batch.link(source, "manyObjects", objectTarget);
    // @ts-expect-error The constraint exists but is outside the declared edit scope.
    batch.unlink(source, "manyObjects", objectTarget);
  });

  it("requires the declared source interface and its concrete object type at compile time", () => {
    const batch = createEditBatch<LinkEdits>(client);
    const missingObjectType = {
      $apiName: source.$apiName,
      $primaryKey: source.$primaryKey,
    };

    // @ts-expect-error An interface locator must include its concrete object type.
    batch.link(missingObjectType, "oneObject", objectTarget);
    // @ts-expect-error An interface locator must include its concrete object type.
    batch.unlink(missingObjectType, "oneObject", objectTarget);
    // @ts-expect-error BarInterface is not the source interface in the edit scope.
    batch.link(interfaceTarget, "oneObject", objectTarget);
    // @ts-expect-error BarInterface is not the source interface in the edit scope.
    batch.unlink(interfaceTarget, "oneObject", objectTarget);
  });

  it("requires the constraint's target type at compile time", () => {
    const batch = createEditBatch<LinkEdits>(client);
    const missingObjectType = {
      $apiName: interfaceTarget.$apiName,
      $primaryKey: interfaceTarget.$primaryKey,
    };

    // @ts-expect-error This constraint targets BarInterface, not an Office.
    batch.link(source, "oneInterface", objectTarget);
    // @ts-expect-error This constraint targets an Office, not BarInterface.
    batch.unlink(source, "oneObject", interfaceTarget);
    // @ts-expect-error Interface targets must include their concrete object type.
    batch.link(source, "oneInterface", missingObjectType);
    // @ts-expect-error LinkSource cannot be used where BarInterface is required.
    batch.unlink(source, "oneInterface", source);
    // @ts-expect-error Office has a string primary key.
    batch.link(source, "oneObject", { $apiName: "Office", $primaryKey: 1 });
  });

  it("only accepts arrays when the interface constraint allows many targets", () => {
    const batch = createEditBatch<LinkEdits>(client);

    // @ts-expect-error This constraint allows one target.
    batch.link(source, "oneInterface", [interfaceTarget]);
    // @ts-expect-error This constraint allows one target.
    batch.unlink(source, "oneInterface", [interfaceTarget]);
    // @ts-expect-error This constraint allows one target.
    batch.link(source, "oneObject", [objectTarget]);
    // @ts-expect-error This constraint allows one target.
    batch.unlink(source, "oneObject", [objectTarget]);
  });

  it("keeps targets scoped to the source when interface link names overlap", () => {
    const batch = createEditBatch<
      | Edits.InterfaceLink<LinkSource, "manyObjects">
      | Edits.InterfaceLink<OtherSource, "manyObjects">
    >(client);
    const otherSource: InterfaceLocator<OtherSource> = {
      ...source,
      $apiName: "OtherSource",
    };
    const employee: ObjectLocator<Employee> = {
      $apiName: "Employee",
      $primaryKey: 1,
    };

    batch.link(source, "manyObjects", objectTarget);
    batch.unlink(otherSource, "manyObjects", employee);
    // @ts-expect-error LinkSource's manyObjects constraint targets Office.
    batch.link(source, "manyObjects", employee);
    // @ts-expect-error OtherSource's manyObjects constraint targets Employee.
    batch.unlink(otherSource, "manyObjects", objectTarget);
  });

  it("respects add-only and remove-only scopes", () => {
    const adds =
      createEditBatch<AddInterfaceLink<LinkSource, "oneObject">>(client);
    const removes =
      createEditBatch<RemoveInterfaceLink<LinkSource, "oneObject">>(client);

    adds.link(source, "oneObject", objectTarget);
    removes.unlink(source, "oneObject", objectTarget);
    // @ts-expect-error The scope only permits adding links.
    adds.unlink(source, "oneObject", objectTarget);
    // @ts-expect-error The scope only permits removing links.
    removes.link(source, "oneObject", objectTarget);
  });
});
