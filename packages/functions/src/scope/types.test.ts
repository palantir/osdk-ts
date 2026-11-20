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

import { expectType } from "ts-expect";
import { describe, it } from "vitest";

import type { FunctionConfig } from "../FunctionConfig.js";
import type {
  Scope,
  ScopeReadAuthorization,
  ScopeReadWriteAuthorization,
} from "../public/experimental.js";
import { ScopeAuthorization, ScopeResources } from "../public/experimental.js";

describe("Scope authorization types", () => {
  it("accepts optional authorization and independent min/max bounds", () => {
    expectType<FunctionConfig>({ scope: { resources: {} } });
    expectType<Scope>({ resources: {}, authorization: {} });
    expectType<Scope>({ resources: {}, authorization: { min: ["internal"] } });
    expectType<Scope>({ resources: {}, authorization: { max: [] } });

    const authorization: ScopeAuthorization = {
      min: [["internal", "partner"]],
      max: ["internal", "confidential"],
    };
    expectType<FunctionConfig>({
      scope: { resources: ScopeResources.defaultResources, authorization },
    });
    expectType<Scope>({
      resources: {},
      authorization: { max: [["internal"], ["confidential", "partner"]] },
    });
  });

  it("preserves deprecated read authorization and sentinel declarations", () => {
    const authorization: ScopeReadAuthorization = { read: ["internal"] };
    expectType<Scope>({ resources: {}, authorization });
    expectType<Scope>({
      resources: {},
      authorization: { read: [["internal", "partner"]] },
    });
    expectType<Scope>({
      resources: {},
      authorization: ScopeAuthorization.inherit,
    });
    expectType<Scope>({
      resources: {},
      authorization: ScopeAuthorization.defaultRead,
    });
  });

  it("rejects conflicting, unsupported, and malformed authorization", () => {
    const mixedAuthorization = { read: ["internal"], min: ["internal"] };
    expectType<Scope>({
      resources: {},
      // @ts-expect-error Deprecated read cannot be combined with min, even through a variable.
      authorization: mixedAuthorization,
    });
    expectType<Scope>({
      resources: {},
      // @ts-expect-error Deprecated read cannot be combined with max.
      authorization: { read: ["internal"], max: ["internal"] },
    });
    const writeAuthorization: ScopeReadWriteAuthorization = {
      read: ["internal"],
      write: ["internal"],
    };
    expectType<Scope>({
      resources: {},
      // @ts-expect-error Write authorization is unsupported, including the legacy exported type.
      authorization: writeAuthorization,
    });
    expectType<Scope>({
      resources: {},
      // @ts-expect-error Marking aliases must be a list or a list of lists.
      authorization: { min: "internal" },
    });
    expectType<Scope>({
      resources: {},
      // @ts-expect-error Flat and CNF marking aliases cannot be mixed.
      authorization: { max: ["internal", ["partner"]] },
    });
    expectType<Scope>({
      resources: {},
      // @ts-expect-error Unknown authorization fields must not silently impose no constraint.
      authorization: { maximum: ["internal"] },
    });
  });
});
