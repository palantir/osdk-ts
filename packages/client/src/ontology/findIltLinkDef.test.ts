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

import type { InterfaceMetadata, ObjectMetadata } from "@osdk/api";
import { describe, expect, it } from "vitest";
import { findIltLinkDef } from "./findIltLinkDef.js";
import {
  type FetchedObjectTypeDefinition,
  InterfaceDefinitions,
} from "./OntologyProvider.js";

function makeInterface(
  apiName: string,
  links: Record<string, InterfaceMetadata.Link<any, any>>,
): InterfaceMetadata {
  return {
    type: "interface",
    apiName,
    displayName: apiName,
    description: "",
    properties: {},
    rid: `ri.test.interface.${apiName}`,
    links,
    implementedBy: [],
  } as unknown as InterfaceMetadata;
}

function makeObjectWithInterfaces(
  apiName: string,
  interfaces: Record<string, InterfaceMetadata>,
): FetchedObjectTypeDefinition {
  const baseLinks: Record<string, ObjectMetadata.Link<any, any>> = {};
  const objDef = {
    type: "object",
    apiName,
    displayName: apiName,
    description: "",
    primaryKeyApiName: "id",
    primaryKeyType: "integer",
    titleProperty: "id",
    pluralDisplayName: `${apiName}s`,
    properties: {},
    rid: `ri.test.object.${apiName}`,
    links: baseLinks,
    interfaceMap: {},
    inverseInterfaceMap: {},
    icon: undefined,
    visibility: undefined,
    status: undefined,
    [InterfaceDefinitions]: Object.fromEntries(
      Object.entries(interfaces).map(([k, v]) => [k, { def: v }]),
    ),
  };
  return objDef as unknown as FetchedObjectTypeDefinition;
}

const linkToBar: InterfaceMetadata.Link<any, any> = {
  targetTypeApiName: "BarInterface",
  multiplicity: true,
  targetType: "interface",
};

const linkToBaz: InterfaceMetadata.Link<any, any> = {
  targetTypeApiName: "BazInterface",
  multiplicity: true,
  targetType: "interface",
};

const linkToBarObject: InterfaceMetadata.Link<any, any> = {
  targetTypeApiName: "Bar",
  multiplicity: true,
  targetType: "object",
};

describe(findIltLinkDef, () => {
  it("returns the link when defined on a single interface", () => {
    const Foo = makeInterface("Foo", { toBar: linkToBar });
    const obj = makeObjectWithInterfaces("Employee", { Foo });

    const result = findIltLinkDef(obj, "toBar");
    expect(result).toEqual(linkToBar);
  });

  it("returns the link when defined on a non-first interface", () => {
    const Foo = makeInterface("Foo", {});
    const Other = makeInterface("Other", { toBar: linkToBar });
    const obj = makeObjectWithInterfaces("Employee", { Foo, Other });

    const result = findIltLinkDef(obj, "toBar");
    expect(result).toEqual(linkToBar);
  });

  it("returns undefined when the link is not defined on any interface", () => {
    const Foo = makeInterface("Foo", { toBar: linkToBar });
    const obj = makeObjectWithInterfaces("Employee", { Foo });

    const result = findIltLinkDef(obj, "missing");
    expect(result).toBeUndefined();
  });

  it("returns the link when multiple interfaces declare the same target", () => {
    const Foo = makeInterface("Foo", { toBar: linkToBar });
    const Other = makeInterface("Other", { toBar: { ...linkToBar } });
    const obj = makeObjectWithInterfaces("Employee", { Foo, Other });

    const result = findIltLinkDef(obj, "toBar");
    expect(result).toEqual(linkToBar);
  });

  it("throws when multiple interfaces declare diverging targets", () => {
    const Foo = makeInterface("Foo", { conflict: linkToBar });
    const Other = makeInterface("Other", { conflict: linkToBaz });
    const obj = makeObjectWithInterfaces("Employee", { Foo, Other });

    expect(() => findIltLinkDef(obj, "conflict")).toThrowError(
      /Ambiguous interface link 'conflict'.*Employee.*Foo.*BarInterface.*Other.*BazInterface/s,
    );
  });

  it("throws when target type kinds diverge across interfaces", () => {
    const Foo = makeInterface("Foo", { same: linkToBar });
    const Other = makeInterface("Other", { same: linkToBarObject });
    const obj = makeObjectWithInterfaces("Employee", { Foo, Other });

    expect(() => findIltLinkDef(obj, "same")).toThrowError(
      /Ambiguous interface link 'same'/,
    );
  });
});
