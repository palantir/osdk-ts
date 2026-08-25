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

import { Classes } from "@blueprintjs/core";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { AipAgentChatModelPicker } from "../AipAgentChatModelPicker.js";

afterEach(cleanup);

describe("AipAgentChatModelPicker", () => {
  it("uses Blueprint HTMLSelect when multiple models are available", () => {
    render(
      <AipAgentChatModelPicker
        models={["model-a", "model-b"]}
        activeModel="model-a"
        onModelChange={vi.fn()}
      />,
    );

    expect(
      screen.getByLabelText("Active model").closest(`.${Classes.HTML_SELECT}`),
    ).not.toBeNull();
  });
});
