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

import type { DerivedProperty } from "@osdk/api";
import type { Client } from "@osdk/client";
import { Employee } from "@osdk/client.test.ontology";
import type { ObservableClient } from "@osdk/client/observable";
import { useObjectSet } from "@osdk/react";

declare const client: Client;
declare const observableClient: ObservableClient;

const plain = client(Employee);
const input = plain.withProperties({
  embeddedName: (base) => base.selectProperty("fullName"),
});
const additions = {
  addedId: (
    base: Parameters<DerivedProperty.Creator<typeof Employee, "integer">>[0],
  ) => base.selectProperty("employeeId"),
};
const overwrite = {
  embeddedName: additions.addedId,
};

const inputOnly = useObjectSet(input);
const inputName: string | undefined = inputOnly.data?.[0].embeddedName;
inputOnly.objectSet?.where({ embeddedName: "Employee 1" });

const combined = useObjectSet(input, { withProperties: additions });
const combinedName: string | undefined = combined.data?.[0].embeddedName;
const combinedId: number | undefined = combined.data?.[0].addedId;
combined.objectSet?.where({ embeddedName: "Employee 1", addedId: 1 });

const overwritten = useObjectSet(input, { withProperties: overwrite });
const overwrittenValue: NonNullable<
  typeof overwritten.data
>[number]["embeddedName"] = 1;
const overwrittenId: number | undefined = overwritten.data?.[0].embeddedName;
overwritten.objectSet?.where({ embeddedName: 1 });

const plainResult = useObjectSet(plain);
const plainName: string | undefined = plainResult.data?.[0].fullName;
const explicit = useObjectSet<
  typeof Employee,
  { embeddedName: "string" | undefined },
  { addedId: "integer" }
>(input, { withProperties: additions });
const explicitName: string | undefined = explicit.data?.[0].embeddedName;
const explicitId: number | undefined = explicit.data?.[0].addedId;
const explicitPlain = useObjectSet<typeof Employee>(plain);
const explicitPlainName: string | undefined = explicitPlain.data?.[0].fullName;

observableClient.observeObjectSet(
  input,
  {},
  {
    error: () => {},
    complete: () => {},
    next: (payload) => {
      const name: string | undefined = payload.resolvedList?.[0].embeddedName;
      payload.objectSet.where({ embeddedName: "Employee 1" });
      void name;
    },
  },
);
observableClient.observeObjectSet(
  input,
  { withProperties: additions },
  {
    error: () => {},
    complete: () => {},
    next: (payload) => {
      const name: string | undefined = payload.resolvedList?.[0].embeddedName;
      const id: number | undefined = payload.resolvedList?.[0].addedId;
      payload.objectSet.where({ embeddedName: "Employee 1", addedId: 1 });
      void [name, id];
    },
  },
);
observableClient.observeObjectSet(
  input,
  { withProperties: overwrite },
  {
    error: () => {},
    complete: () => {},
    next: (payload) => {
      const value: NonNullable<
        typeof payload.resolvedList
      >[number]["embeddedName"] = 1;
      const id: number | undefined = payload.resolvedList?.[0].embeddedName;
      payload.objectSet.where({ embeddedName: 1 });
      void [id, value];
    },
  },
);
observableClient.observeObjectSet<typeof Employee, { addedId: "integer" }>(
  plain,
  { withProperties: additions },
  {
    error: () => {},
    complete: () => {},
    next: (payload) => {
      const id: number | undefined = payload.resolvedList?.[0].addedId;
      const name: string | undefined = payload.resolvedList?.[0].fullName;
      void [id, name];
    },
  },
);
observableClient.observeObjectSet(
  plain,
  {},
  {
    error: () => {},
    complete: () => {},
    next: (payload) => {
      const name: string | undefined = payload.resolvedList?.[0].fullName;
      void name;
    },
  },
);

observableClient.observeObjectSet<typeof Employee>(
  input,
  {},
  {
    error: () => {},
    complete: () => {},
    next: (payload) => {
      const name: string | undefined = payload.resolvedList?.[0].fullName;
      void name;
    },
  },
);
observableClient.observeObjectSet<typeof Employee, { addedId: "integer" }>(
  input,
  { withProperties: additions },
  {
    error: () => {},
    complete: () => {},
    next: (payload) => {
      const id: number | undefined = payload.resolvedList?.[0].addedId;
      void id;
    },
  },
);

void [
  overwrittenValue,
  inputName,
  combinedName,
  combinedId,
  overwrittenId,
  plainName,
  explicitName,
  explicitId,
  explicitPlainName,
];
