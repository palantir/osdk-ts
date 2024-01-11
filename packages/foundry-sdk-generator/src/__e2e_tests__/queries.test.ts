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

import { afterAll, beforeAll, describe, expect, it } from "vitest";
import {
  ConfidentialClientAuth,
  FoundryClient,
  LocalDate,
  Timestamp,
} from "../generatedNoCheck/@test-app/osdk";
import type {
  QueryError,
  QueryResponse,
  Result,
} from "../generatedNoCheck/@test-app/osdk";

import { apiServer, stubData } from "@osdk/shared.test";
import { assertOkOrThrow } from "./resultUtils";

describe("QueryTests", () => {
  let client: FoundryClient<ConfidentialClientAuth>;
  beforeAll(async () => {
    apiServer.listen();
    client = new FoundryClient({
      url: "https://stack.palantir.com",
      auth: new ConfidentialClientAuth({
        clientId: "myClientId",
        clientSecret: "myClientSecret",
        url: "https://stack.palantir.com",
      }),
    });
    await client.auth.signInAsServiceUser();
  });

  afterAll(() => {
    apiServer.close();
  });

  it("Executes a simple query", async () => {
    const result: Result<QueryResponse<number>, QueryError> = await client
      .ontology.queries.addOne({
        n: 2,
      });

    const queryResponse = assertOkOrThrow(result);
    expect(queryResponse.value).toEqual(3);
  });

  it("Executes a query that returns a struct", async () => {
    const result: Result<
      QueryResponse<{
        firstName: string;
        lastName: string;
        age?: number | undefined;
      }>,
      QueryError
    > = await client.ontology.queries.incrementPersonAge({
      person: {
        firstName: "John",
        lastName: "Doe",
        age: 42,
      },
    });

    const queryResponse = assertOkOrThrow(result);
    expect(queryResponse.value.firstName).toEqual("John");
    expect(queryResponse.value.lastName).toEqual("Doe");
    expect(queryResponse.value.age).toEqual(43);
  });

  it("Executes a query that returns a timestamp", async () => {
    const result: Result<QueryResponse<Timestamp>, QueryError> = await client
      .ontology.queries.returnsTimestamp();
    const queryResponse = assertOkOrThrow(result);
    expect(queryResponse.value).toEqual(
      Timestamp.fromISOString("2019-01-01T00:00:00.000Z"),
    );
  });

  it("Executes a query that returns a date", async () => {
    const result: Result<QueryResponse<LocalDate>, QueryError> = await client
      .ontology.queries.returnsDate();
    const queryResponse = assertOkOrThrow(result);
    expect(queryResponse.value).toEqual(LocalDate.fromISOString("2019-01-01"));
  });

  it("Executes a query that returns an object", async () => {
    const result = await client.ontology.queries.returnsObject();
    const queryResponse = assertOkOrThrow(result);

    expect(queryResponse.value.__rid).toEqual(stubData.employee1.__rid);
    expect(queryResponse.value.__primaryKey).toEqual(
      stubData.employee1.__primaryKey,
    );
    expect(queryResponse.value.employeeId).toEqual(
      stubData.employee1.employeeId,
    );
    expect(queryResponse.value.fullName).toEqual(stubData.employee1.fullName);
    expect(queryResponse.value.office).toEqual(stubData.employee1.office);
    expect(queryResponse.value.startDate).toEqual(
      LocalDate.fromISOString(stubData.employee1.startDate),
    );
  });

  it("Executes a query that returns a three dimensional aggregation", async () => {
    const result = await client.ontology.queries
      .threeDimensionalAggregationFunction();
    const queryResponse = assertOkOrThrow(result);
    expect(queryResponse.value.groups[0].key).toEqual("Q-AFN");
    expect(queryResponse.value.groups[0].value[0].key.startValue).toEqual(
      Timestamp.fromISOString("2010-10-01"),
    );
    expect(queryResponse.value.groups[0].value[0].key.endValue).toEqual(
      Timestamp.fromISOString("2010-10-02"),
    );
    expect(queryResponse.value.groups[0].value[0].value).toEqual(65);
    expect(queryResponse.value.groups[1].key).toEqual("Q-AFO");
    expect(queryResponse.value.groups[1].value).toHaveLength(0);
  });

  it("Executes a query that returns a two dimensional aggregation", async () => {
    const result = await client.ontology.queries
      .twoDimensionalAggregationFunction();
    const queryResponse = assertOkOrThrow(result);
    expect(queryResponse.value.groups[0].key).toEqual("Q-AFN");
    expect(queryResponse.value.groups[0].value).toEqual(1);
    expect(queryResponse.value.groups[1].key).toEqual("Q-AFO");
    expect(queryResponse.value.groups[1].value).toEqual(2);
  });
});
