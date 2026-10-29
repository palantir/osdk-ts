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

/** @vitest-environment-options {"settings":{"disableIframePageLoading":true}} */

import { createClient } from "@osdk/client";
import { OsdkProvider } from "@osdk/react";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it } from "vitest";

import { WorkshopModule } from "../WorkshopModule.js";

afterEach(cleanup);

describe("WorkshopModule", () => {
  it("uses the client's Foundry origin and defaults to the published version", () => {
    const client = createClient(
      "https://provider.example.com/",
      "ri.ontology.main.ontology.example",
      () => Promise.resolve("test-token"),
    );

    render(
      <OsdkProvider client={client}>
        <WorkshopModule
          moduleRid="ri.workshop.main.module.example"
          title="Embedded dashboard"
        />
      </OsdkProvider>,
    );

    expect(screen.getByTitle("Embedded dashboard").getAttribute("src")).toBe(
      "https://provider.example.com/workspace/module/view/latest/ri.workshop.main.module.example?embedded=true",
    );
  });
});
