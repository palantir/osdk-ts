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
import { TimePicker } from "../fields/TimePicker.js";

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

describe("TimePicker", () => {
  it("renders segmented hour and minute inputs from a Date value", () => {
    render(
      <TimePicker
        value={new Date(2024, 0, 15, 9, 5)}
        onChange={vi.fn()}
      />,
    );

    expect((screen.getByLabelText("Time hours") as HTMLInputElement).value)
      .toBe("09");
    expect((screen.getByLabelText("Time minutes") as HTMLInputElement).value)
      .toBe("05");
  });

  it("emits a Date with the existing date portion when a valid hour is typed", () => {
    const onChange = vi.fn();
    render(
      <TimePicker
        value={new Date(2024, 0, 15, 9, 5)}
        onChange={onChange}
      />,
    );

    fireEvent.change(screen.getByLabelText("Time hours"), {
      target: { value: "14" },
    });

    expect(onChange).toHaveBeenCalledTimes(1);
    const changedDate: Date = onChange.mock.calls[0][0];
    expect(changedDate).toEqual(new Date(2024, 0, 15, 14, 5));
  });

  it("seeds emitted dates from today when value is null", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2024, 6, 4, 12, 34));
    const onChange = vi.fn();
    render(<TimePicker value={null} onChange={onChange} />);

    fireEvent.change(screen.getByLabelText("Time minutes"), {
      target: { value: "45" },
    });

    expect(onChange).toHaveBeenCalledTimes(1);
    const changedDate: Date = onChange.mock.calls[0][0];
    expect(changedDate).toEqual(new Date(2024, 6, 4, 0, 45));
  });

  it("restores an invalid segment on blur", () => {
    const onChange = vi.fn();
    render(
      <TimePicker
        value={new Date(2024, 0, 15, 9, 5)}
        onChange={onChange}
      />,
    );

    const hourInput = screen.getByLabelText("Time hours") as HTMLInputElement;
    fireEvent.change(hourInput, { target: { value: "xx" } });
    fireEvent.blur(hourInput);

    expect(onChange).not.toHaveBeenCalled();
    expect(hourInput.value).toBe("09");
  });

  it("clamps an out-of-range minute on blur", () => {
    const onChange = vi.fn();
    render(
      <TimePicker
        value={new Date(2024, 0, 15, 9, 5)}
        onChange={onChange}
      />,
    );

    const minuteInput = screen.getByLabelText(
      "Time minutes",
    ) as HTMLInputElement;
    fireEvent.change(minuteInput, { target: { value: "99" } });
    fireEvent.blur(minuteInput);

    expect(onChange).toHaveBeenCalledTimes(1);
    const changedDate: Date = onChange.mock.calls[0][0];
    expect(changedDate).toEqual(new Date(2024, 0, 15, 9, 59));
    expect(minuteInput.value).toBe("59");
  });
});
