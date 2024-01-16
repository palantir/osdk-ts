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

import { apiServer } from "@osdk/shared.test";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import {
  ConfidentialClientAuth,
  FoundryClient,
} from "../generatedNoCheck/@test-app/osdk";
import type {
  ListObjectsError,
  LoadObjectSetError,
  ObjectSet,
  Page,
  Result,
} from "../generatedNoCheck/@test-app/osdk";
import type {
  Employee,
  Office,
} from "../generatedNoCheck/@test-app/osdk/ontology/objects";
import { fetchAllPages, fetchPage } from "./paginationHelpers";
import { assertOkOrThrow } from "./resultUtils";

describe("Object Sets", () => {
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

  it("objects set base", async () => {
    let iter = 0;
    const result: Result<Page<Employee>, ListObjectsError> = await client
      .ontology.objects.Employee.page();
    const employeesPage = assertOkOrThrow(result);
    const employees = employeesPage.data;
    for (const emp of employees) {
      expect(emp.employeeId).toEqual(50030 + iter);
      iter += 1;
    }
    expect(iter).toEqual(3);
  });

  it("objects set union", async () => {
    const objectSet: ObjectSet<Employee> = client.ontology.objects.Employee;
    const unionedObjectSet: ObjectSet<Employee> = objectSet.union(objectSet);
    let iter = 0;
    const result: Result<Page<Employee>, LoadObjectSetError> =
      await unionedObjectSet.page();
    const employeesPage = assertOkOrThrow(result);
    const employees = employeesPage.data;
    for (const emp of employees) {
      expect(emp.employeeId).toEqual(50030 + iter);
      iter += 1;
    }
    expect(iter).toEqual(2);
  });

  it("objects set union page", async () => {
    const objectSet: ObjectSet<Employee> = client.ontology.objects.Employee;
    const unionedObjectSet: ObjectSet<Employee> = objectSet.union(objectSet);
    let iter = 0;
    const employees = await fetchAllPages<Employee>(unionedObjectSet, 1);
    for (const emp of employees) {
      expect(emp.employeeId).toEqual(50030 + iter);
      iter += 1;
    }
    expect(iter).toEqual(2);
  });

  it("objects set subtract", async () => {
    const objectSet: ObjectSet<Employee> = client.ontology.objects.Employee;
    const objectSet2: ObjectSet<Employee> = client.ontology.objects.Employee
      .where(e => e.employeeId.eq(50030));
    const subtractedObjectSet = objectSet.subtract(objectSet2);
    let iter = 0;
    const result: Result<Page<Employee>, LoadObjectSetError> =
      await subtractedObjectSet.page();
    const employeesPage = assertOkOrThrow(result);
    const employees = employeesPage.data;
    for (const emp of employees) {
      expect(emp.employeeId).toEqual(50031 + iter);
      iter += 1;
    }
    expect(iter).toEqual(2);
  });

  it("objects set intersect", async () => {
    const objectSet: ObjectSet<Employee> = client.ontology.objects.Employee;
    const intersectedObjectSet: ObjectSet<Employee> = objectSet.intersect(
      objectSet,
    );
    let iter = 0;
    const result: Result<Page<Employee>, LoadObjectSetError> =
      await intersectedObjectSet.page();
    const employeesPage = assertOkOrThrow(result);
    const employees = employeesPage.data;
    for (const emp of employees) {
      expect(emp.employeeId).toEqual(50032);
      iter += 1;
    }
    expect(iter).toEqual(1);
  });

  it("objects set filter", async () => {
    const objectSet: ObjectSet<Employee> = client.ontology.objects.Employee;
    const filteredObjectSet: ObjectSet<Employee> = objectSet.where(emp =>
      emp.employeeId.eq(50030)
    );
    const result: Result<Page<Employee>, LoadObjectSetError> =
      await filteredObjectSet.page();
    const employeesPage = assertOkOrThrow(result);
    const employees = employeesPage.data;
    let iter = 0;
    for (const emp of employees) {
      expect(emp.employeeId).toEqual(50030);
      iter += 1;
    }
    expect(iter).toEqual(1);
  });

  it("objects set searchAroundOffice", async () => {
    const objectSet: ObjectSet<Employee> = client.ontology.objects.Employee;
    const searchAroundObjectSet: ObjectSet<Office> = objectSet
      .searchAroundOfficeLink();
    const result: Result<Page<Office>, LoadObjectSetError> =
      await searchAroundObjectSet.page();
    const officePage = assertOkOrThrow(result);
    const offices = officePage.data;
    let iter = 0;
    for (const off of offices) {
      expect(off.officeId).toEqual("NYC");
      iter += 1;
    }
    expect(iter).toEqual(1);
  });

  it("objects set filtered searchAroundOffice", async () => {
    const objectSet: ObjectSet<Employee> = client.ontology.objects.Employee;
    const officeObjectSet: ObjectSet<Office> = objectSet
      .searchAroundOfficeLink()
      .where(off => off.officeId.eq("NYC"));
    const result: Result<Page<Office>, LoadObjectSetError> =
      await officeObjectSet.page();
    const officePage = assertOkOrThrow(result);
    const offices = officePage.data;
    let iter = 0;
    for (const off of offices) {
      expect(off.officeId).toEqual("NYC");
      iter += 1;
    }
    expect(iter).toEqual(1);
  });

  it("object set page gets all elements", async () => {
    const objectSet: ObjectSet<Employee> = client.ontology.objects.Employee;
    const pageResults = await fetchAllPages(objectSet, 1);
    expect(pageResults.length).toEqual(3);
  });

  it("object set page respects page size", async () => {
    const objectSet: ObjectSet<Employee> = client.ontology.objects.Employee;
    const pageResults = await fetchPage(objectSet, 1);
    expect(pageResults.data.length).toEqual(1);
  });
});
