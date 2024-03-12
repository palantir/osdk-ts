/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import { describe, expect, it } from "vitest";
import { createInterface } from "./createInterface";
import { createLink } from "./createLink";
import { createObject } from "./createObject";
import { createOntology } from "./createOntology";
import { createSpt } from "./createSpt";

describe("Test", () => {
  it("things", () => {
    const result = createOntology("myns", () => {
      const fooSpt = createSpt(
        "fooSpt",
        {
          type: "string",
        },
      );

      const FooInterface = createInterface(
        "FooInterface",
        "Foo Interface",
      );

      const Employee = createObject(
        "Employee",
        {
          displayName: "Employee",
          primaryKey: {
            apiName: "email",
            type: "string",
          },
          properties: {
            email: "string",
            username: {
              type: "string",
              nullable: false,
            },
          },
        },
      );

      const Shoutout = createObject(
        "Shoutout",
        {
          primaryKey: {
            apiName: "id",
            type: "long",
          },
        },
      );

      createLink(Employee, {
        many: "peeps",
        to: Employee,
        reverse: {
          one: "lead",
        },
      });

      createLink("1:n", Employee, "lead", Employee, "peeps", {});

      createLink(Employee, "lead", "1:n", "peeps", Employee, {
        lead: "Reports To",
        peeps: "Manager of",
      });

      Employee.createLink("many", { peeps: Employee }, "one", "lead");

      Employee.linkTo(Employee, {
        from: {
          many: "peeps",
          display: "Manager of",
        },
        to: {
          one: "lead",
          display: "Reports to",
        },
      });

      const link = Employee.createLink({ many: "peeps" }, Employee, {
        one: "lead",
      });
      link.outgoing.displayName = "Manager of";
      link.incoming.displayName = "Reports to";

      createLink(Employee, "shoutoutsRecieved", Shoutout, "recipient");
      createLink(Employee, "shoutoutsGiven", Shoutout, "giver");
    });

    expect(result).toMatchInlineSnapshot(`
      {
        "actionTypes": {},
        "interfaceTypes": {},
        "objectTypes": {
          "Employee": {
            "implementsInterfaces": [],
            "linkTypes": [],
            "objectType": {
              "apiName": "Employee",
              "primaryKey": "email",
              "properties": {
                "email": {
                  "dataType": {
                    "type": "string",
                  },
                },
              },
              "rid": "PLACEHOLDER",
              "status": "ACTIVE",
              "titleProperty": "email",
            },
            "sharedPropertyTypeMapping": {},
          },
          "Shoutout": {
            "implementsInterfaces": [],
            "linkTypes": [],
            "objectType": {
              "apiName": "Shoutout",
              "primaryKey": "id",
              "properties": {
                "id": {
                  "dataType": {
                    "type": "long",
                  },
                },
              },
              "rid": "PLACEHOLDER",
              "status": "ACTIVE",
              "titleProperty": "id",
            },
            "sharedPropertyTypeMapping": {},
          },
        },
        "queryTypes": {},
        "sharedPropertyTypes": {},
      }
    `);
  });
});
