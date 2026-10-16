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

import { beforeEach, describe, expect, it } from "vitest";

import { defineCreateInterfaceLinkAction } from "../defineCreateInterfaceLinkAction.js";
import { defineCreateInterfaceObjectAction } from "../defineCreateInterfaceObjectAction.js";
import { defineCreateObjectAction } from "../defineCreateObjectAction.js";
import { defineCreateOrModifyObjectAction } from "../defineCreateOrModifyObjectAction.js";
import { defineDeleteInterfaceLinkAction } from "../defineDeleteInterfaceLinkAction.js";
import { defineDeleteInterfaceObjectAction } from "../defineDeleteInterfaceObjectAction.js";
import { defineDeleteObjectAction } from "../defineDeleteObjectAction.js";
import { defineInterface } from "../defineInterface.js";
import { defineInterfaceLinkConstraint } from "../defineInterfaceLinkConstraint.js";
import { defineModifyInterfaceObjectAction } from "../defineModifyInterfaceObjectAction.js";
import { defineModifyObjectAction } from "../defineModifyObjectAction.js";
import { defineObject } from "../defineObject.js";
import { defineOntology } from "../defineOntology.js";

const objectDefinition = {
  apiName: "Person",
  displayName: "Person",
  pluralDisplayName: "People",
  primaryKeyPropertyApiName: "id",
  titlePropertyApiName: "id",
  properties: { id: { type: "string" as const } },
};

const actionFolder = { id: "actions", location: "actions//people/" };

describe("action helper folder placement", () => {
  beforeEach(async () => {
    await defineOntology("com.palantir.", () => {}, undefined);
  });

  it.each([
    defineCreateObjectAction,
    defineCreateOrModifyObjectAction,
    defineModifyObjectAction,
    defineDeleteObjectAction,
  ])("%s preserves placement independently of its object", (define) => {
    const objectType = defineObject({
      ...objectDefinition,
      permission: "publicProject",
      folder: { id: "objects", location: "/objects" },
    });
    expect(
      define({ objectType, permission: "publicProject", folder: actionFolder }),
    ).toMatchObject({
      folder: actionFolder,
      permission: "publicProject",
    });
    expect(
      define({ apiName: "root-action", objectType }).folder,
    ).toBeUndefined();
  });

  it.each([
    defineCreateInterfaceObjectAction,
    defineModifyInterfaceObjectAction,
    defineDeleteInterfaceObjectAction,
  ])("%s preserves placement independently of its interface", (define) => {
    const interfaceType = defineInterface({
      apiName: "Person",
      permission: "publicProject",
      folder: { id: "interfaces", location: "/interfaces" },
    });
    expect(
      define({
        interfaceType,
        permission: "publicProject",
        folder: actionFolder,
      }),
    ).toMatchObject({
      folder: actionFolder,
      permission: "publicProject",
    });
    expect(
      define({ apiName: "root-action", interfaceType }).folder,
    ).toBeUndefined();
  });

  it.each([defineCreateInterfaceLinkAction, defineDeleteInterfaceLinkAction])(
    "%s preserves placement",
    (define) => {
      const person = defineInterface({ apiName: "Person" });
      const company = defineInterface({ apiName: "Company" });
      const interfaceLink = defineInterfaceLinkConstraint({
        apiName: "employer",
        from: person,
        toOne: company,
      });
      expect(
        define({
          interfaceLink,
          permission: "publicProject",
          folder: actionFolder,
        }),
      ).toMatchObject({
        folder: actionFolder,
        permission: "publicProject",
      });
    },
  );
});
