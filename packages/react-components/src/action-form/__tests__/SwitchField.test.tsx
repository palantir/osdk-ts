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

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { SwitchField } from "../fields/SwitchField.js";

afterEach(cleanup);

describe("SwitchField", () => {
  it("marks the switch disabled", () => {
    const onChange = vi.fn();
    render(
      <SwitchField
        value={false}
        onChange={onChange}
        label="Enabled"
        disabled={true}
      />,
    );

    const toggle = screen.getByRole("switch", { name: "Enabled" });
    expect(toggle.getAttribute("aria-disabled")).toBe("true");
  });
});
