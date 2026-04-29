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

import { renderHook } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { MISSING_PROVIDER_MESSAGE, OsdkContext } from "../OsdkContext.js";

describe("OsdkContext", () => {
  it("throws a helpful error when observableClient is used without OsdkProvider", () => {
    const { result } = renderHook(() => {
      const { observableClient } = React.useContext(OsdkContext);
      return observableClient;
    });

    expect(() => result.current.canonicalizeWhereClause({} as never))
      .toThrowError(MISSING_PROVIDER_MESSAGE);
  });

  it("throws a helpful error when client is used without OsdkProvider", () => {
    const { result } = renderHook(() => {
      const { client } = React.useContext(OsdkContext);
      return client;
    });

    expect(() => (result.current as Function)()).toThrowError(
      MISSING_PROVIDER_MESSAGE,
    );
  });
});
