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

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { CbacPickerDialogFooter } from "../CbacPickerDialogFooter.js";

describe("CbacPickerDialogFooter", () => {
  afterEach(cleanup);

  it("invokes onCancel when the cancel button is clicked", () => {
    const onCancel = vi.fn();
    render(<CbacPickerDialogFooter onCancel={onCancel} onConfirm={vi.fn()} />);
    fireEvent.click(screen.getByRole("button", { name: "Cancel" }));
    expect(onCancel).toHaveBeenCalledOnce();
  });

  it("invokes onConfirm when submit is enabled", () => {
    const onConfirm = vi.fn();
    render(<CbacPickerDialogFooter onCancel={vi.fn()} onConfirm={onConfirm} />);
    fireEvent.click(screen.getByRole("button", { name: "Set classification" }));
    expect(onConfirm).toHaveBeenCalledOnce();
  });

  it("disables submit and blocks confirm when a disabled reason is given", () => {
    const onConfirm = vi.fn();
    render(
      <CbacPickerDialogFooter
        onCancel={vi.fn()}
        onConfirm={onConfirm}
        submitDisabledReason="Selections include disallowed markings."
      />
    );
    const submit = screen.getByRole("button", { name: "Set classification" });
    expect((submit as HTMLButtonElement).disabled).toBe(true);

    fireEvent.click(submit);
    expect(onConfirm).not.toHaveBeenCalled();
  });
});
