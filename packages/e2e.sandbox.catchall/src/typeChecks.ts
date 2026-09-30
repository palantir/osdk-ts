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

import type { Osdk, PageResult } from "@osdk/api";
import type { AgentDefinition, AgentSession, Client } from "@osdk/client";
import type { OsdkTestObject } from "@osdk/e2e.generated.catchall";
// import type { ObjectSet$Employee } from "@osdk/e2e.generated.catchall";
import {
  Employee,
  ObjectTypeWithAllPropertyTypes,
  osdkTestFixture,
} from "@osdk/e2e.generated.catchall";
import type { TypeOf } from "ts-expect";
import { expectType } from "ts-expect";

/**
 * As a consumer of OSDK, you will not need to use this file ever. It is simply here
 * as a mechanism for us building the OSDK to be sure that we have not broken types
 * across changes.
 * @param client
 */
export async function typeChecks(client: Client): Promise<void> {
  // value type enums are intersected in generated property types
  {
    type StringProperty = Osdk.Instance<OsdkTestObject>["stringProperty"];
    type ExpectedStringProperty = "brown" | 'it\'s "cool"' | undefined;
    expectType<TypeOf<StringProperty, ExpectedStringProperty>>(true);
    expectType<TypeOf<ExpectedStringProperty, StringProperty>>(true);
  }

  // single link pivot types are correct
  {
    const objectSet = client(Employee).pivotTo("lead");
    expectType<TypeOf<typeof objectSet, Employee.ObjectSet>>(true);
  }

  // multi link pivot types are correct
  {
    const objectSet = client(Employee).pivotTo("peeps");
    expectType<TypeOf<typeof objectSet, Employee.ObjectSet>>(true);
  }

  // just a demo of aggregations
  {
    const q = await client(ObjectTypeWithAllPropertyTypes).aggregate({
      $select: {
        "integer:sum": "unordered",
        "float:sum": "unordered",
        "decimal:sum": "unordered",
        "short:max": "unordered",
        "string:approximateDistinct": "unordered",
      },
      $groupBy: {
        string: "exact",
        stringArray: "exact",
      },
    });
  }

  // object $link examples
  {
    const page = await client(Employee)
      .where({
        adUsername: "adUsername",
      })
      .fetchPage();
    const employee = page.data[0];

    // lead is an employee
    const lead = await employee.$link.lead.fetchOne();
    expectType<TypeOf<typeof lead, Osdk<Employee>>>(true);

    // lead is an employee but we downselect to just their adUsername

    const leadName = await employee.$link.lead.fetchOne({
      $select: ["adUsername"],
    });
    expectType<TypeOf<typeof leadName.adUsername, string>>(true);

    // jobProfile is not available on the select-ed Person
    expectType<TypeOf<{ jobProfile: any[] }, typeof leadName>>(false);

    // peeps is a page of employees, but only get the adUsername and employeeNumber
    const peeps = await employee.$link.peeps.fetchPage({
      $select: ["adUsername", "employeeNumber"],
    });

    expectType<
      TypeOf<
        typeof peeps,
        PageResult<Osdk<Employee, "adUsername" | "employeeNumber">>
      >
    >(true);

    // jobProfile is not available on the select-ed peeps
    expectType<TypeOf<{ jobProfile: any }[], typeof peeps>>(false);

    // peepById is just a singular employee again, and only grab the adUsername

    const peepById = await employee.$link.peeps.fetchOne("peepPK", {
      $select: ["adUsername"],
    });
    expectType<TypeOf<typeof peepById, Osdk<Employee, "adUsername">>>(true);

    // employeeNumber is not part of the selected peep
    expectType<TypeOf<{ employeeNumber: any }, typeof peepById>>(false);
  }
}

export async function agentTypeChecks(client: Client): Promise<void> {
  const agent = client(osdkTestFixture);
  const session = await agent.createSession({ defaultCity: "London" });
  expectType<osdkTestFixture.Session>(session);
  // @ts-expect-error creation arguments are required
  agent.createSession();
  // @ts-expect-error defaultCity is required
  agent.createSession({});
  // @ts-expect-error defaultCity must be a string
  agent.createSession({ defaultCity: 1 });

  await session.sendEvent({ SetDefaultCity: { city: "Paris" } });
  await session.sendEvent({ LookupWeather: { city: "London" } });
  await session.sendEvent({
    "@platform/send-user-message": { parts: [{ type: "text", text: "Hello" }] },
  });
  // @ts-expect-error event names must match the published schema
  session.sendEvent({ lookupWeather: { city: "London" } });
  // @ts-expect-error city must be a string
  session.sendEvent({ SetDefaultCity: { city: 1 } });
  // @ts-expect-error exactly one event is required
  session.sendEvent({});
  const multipleEvents = {
    LookupWeather: { city: "London" },
    SetDefaultCity: { city: "Paris" },
  };
  // @ts-expect-error multiple events are also rejected when passed as a variable
  session.sendEvent(multipleEvents);

  const state = await session.getState();
  expectType<string>(state.arguments.defaultCity);
  expectType<string>(state.agentState.data.defaultCity);
  for (const item of Object.values(state.contextItems)) {
    if (item.type === "weather-result") {
      expectType<string>(item.data.text);
    } else if (item.type === "$unknown") {
      expectType<string>(item.contextItemType);
      expectType<unknown>(item.data);
      // @ts-expect-error unknown context item data cannot be accessed without narrowing
      expectType<string>(item.data.text);
    }
  }

  type Assistant = Extract<
    osdkTestFixture.ContextItem,
    { type: "@platform/assistant-message" }
  >;
  expectType<Assistant["data"]["status"]>({ type: "generating" });
  expectType<Assistant["data"]["status"]>({ type: "completed" });
  expectType<Assistant["data"]["toolResults"][string]>({ type: "notStarted" });
  expectType<Assistant["data"]["toolResults"][string]>({ type: "executing" });
  // @ts-expect-error unknown union discriminators are invalid
  expectType<Assistant["data"]["status"]>({ type: "unknown" });

  expectType<osdkTestFixture.Session>(await agent.getSession(session.id));
  expectType<AgentSession>(session);
  const definition: AgentDefinition = {
    type: "agent",
    apiName: "osdkTestFixture",
    version: "0.5.0",
  };
  const generic = await client(definition).createSession({ arbitrary: 1 });
  await generic.sendEvent({ arbitraryEvent: { raw: true } });
  expectType<unknown>((await generic.getState()).agentState.data);
}
