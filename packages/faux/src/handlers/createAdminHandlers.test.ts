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

import type { Marking, MarkingCategory } from "@osdk/foundry.admin";
import { setupServer } from "msw/node";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

import { FauxFoundry } from "../FauxFoundry/FauxFoundry.js";
import { createAdminHandlers } from "./createAdminHandlers.js";

const BASE_URL = "https://test.palantirfoundry.com";
const cbacCategory: MarkingCategory = {
  id: "cbac-category",
  name: "Compartments",
  description: "",
  categoryType: "CONJUNCTIVE",
  markingType: "CBAC",
  markings: ["cbac-marking"],
  deleted: false,
  createdTime: "2026-01-01T00:00:00Z",
};
const mandatoryCategory: MarkingCategory = {
  ...cbacCategory,
  id: "mandatory-category",
  name: "Mandatory",
  markingType: "MANDATORY",
  markings: ["mandatory-marking"],
};
const categories = [cbacCategory, mandatoryCategory];
const cbacMarking: Marking = {
  id: "cbac-marking",
  categoryId: cbacCategory.id,
  name: "ALPHA",
  deleted: false,
  createdTime: "2026-01-01T00:00:00Z",
};
const mandatoryMarking: Marking = {
  ...cbacMarking,
  id: "mandatory-marking",
  categoryId: mandatoryCategory.id,
  name: "Secret",
};
const markings = [cbacMarking, mandatoryMarking];

describe("admin marking type filtering", () => {
  const fauxFoundry = new FauxFoundry(BASE_URL);
  const server = setupServer(...createAdminHandlers(BASE_URL, fauxFoundry));

  beforeAll(() => {
    for (const category of categories) {
      fauxFoundry.getAdmin().registerMarkingCategory(category);
    }
    for (const marking of markings) {
      fauxFoundry.getAdmin().registerMarking(marking);
    }
    server.listen({ onUnhandledRequest: "error" });
  });

  afterAll(() => server.close());

  describe("markings", () => {
    it.each([
      { markingType: undefined, expected: markings },
      { markingType: "CBAC", expected: [cbacMarking] },
      { markingType: "MANDATORY", expected: [mandatoryMarking] },
    ])(
      "lists markings for markingType=$markingType",
      async ({ markingType, expected }) => {
        const url = new URL("/api/v2/admin/markings", BASE_URL);
        if (markingType != null) {
          url.searchParams.set("markingType", markingType);
        }

        const response = await fetch(url, {
          headers: { authorization: "Bearer myAccessToken" },
        });
        const body: unknown = await response.json();

        expect(response.status).toBe(200);
        expect(body).toEqual({ data: expected });
      },
    );
  });

  describe("marking categories", () => {
    it.each([
      { markingType: undefined, expected: categories },
      { markingType: "CBAC", expected: [cbacCategory] },
      { markingType: "MANDATORY", expected: [mandatoryCategory] },
    ])(
      "lists categories for markingType=$markingType",
      async ({ markingType, expected }) => {
        const url = new URL("/api/v2/admin/markingCategories", BASE_URL);
        if (markingType != null) {
          url.searchParams.set("markingType", markingType);
        }

        const response = await fetch(url, {
          headers: { authorization: "Bearer myAccessToken" },
        });
        const body: unknown = await response.json();

        expect(response.status).toBe(200);
        expect(body).toEqual({ data: expected });
      },
    );
  });
});
