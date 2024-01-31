/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import { apiServer, MockOntology, stubData } from "@osdk/shared.test";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import type { Client } from "../Client.js";
import { createClient } from "../createClient.js";
import { Attachment } from "../object/Attachment.js";
import { toDataValue } from "./toDataValue.js";

describe(toDataValue, () => {
  let client: Client<typeof MockOntology>;

  beforeAll(async () => {
    apiServer.listen();
    client = createClient(
      MockOntology,
      "https://stack.palantir.com",
      () => "myAccessToken",
    );
  });

  afterAll(() => {
    apiServer.close();
  });

  it("converts passthrough values correctly", () => {
    // basic pass through types
    const basic = {
      null: undefined,
      boolean: false,
      date: "2024-01-01",
      integer: 0,
      string: "string",
      timestamp: "2024-01-01T00:00:00Z",
    };
    expect(toDataValue(basic)).toEqual(basic);
  });

  it("recursively converts arrays and sets into array types", () => {
    const attachment = new Attachment("rid");
    const attachmentArray = [attachment];
    const attachmentSet = new Set(attachmentArray);

    expect(toDataValue({
      attachment,
      attachmentArray,
      attachmentSet,
    })).toEqual({
      attachment: "rid",
      attachmentArray: ["rid"],
      attachmentSet: ["rid"],
    });
  });

  it("recursively handles structs", () => {
    const attachment = new Attachment("rid");
    const struct = {
      inner: {
        attachment,
      },
    };

    expect(toDataValue(struct)).toEqual({ inner: { attachment: "rid" } });
  });

  it("maps an ontology object into just its primary key", () => {
    const employee = stubData.employee1;
    expect(toDataValue(employee)).toEqual(stubData.employee1.__primaryKey);
  });

  it("passes through object set definitions", () => {
    const clientObjectSet = client.objects.Task.where({ id: 0 });
    const { definition } = clientObjectSet;

    const expected = `
    {
      "objectSet": {
        "objectType": "Task",
        "type": "base",
      },
      "type": "filter",
      "where": {
        "field": "id",
        "type": "eq",
        "value": 0,
      },
    }
  `;

    expect(toDataValue(clientObjectSet)).toMatchInlineSnapshot(expected);
    expect(toDataValue(definition)).toMatchInlineSnapshot(expected);
  });
});
