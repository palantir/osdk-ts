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

import { FormFieldRenderer } from "../fields/FormFieldRenderer.js";
import type { RendererFieldDefinition } from "../FormFieldApi.js";

const DATE_FORMAT_PROPS = {
  formatDate: (date: Date | null | undefined) =>
    date == null ? "" : date.toISOString().slice(0, 10),
  parseDate: (value: string) => {
    const parsed = new Date(`${value}T00:00:00.000Z`);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  },
};

vi.mock("../fields/DropdownField.js", () => ({
  DropdownField: () => null,
}));
vi.mock("../fields/ObjectSelectField.js", () => ({
  ObjectSelectField: () => null,
}));
vi.mock("../fields/ObjectSetField.js", () => ({
  ObjectSetField: () => null,
}));

describe("FormFieldRenderer", () => {
  afterEach(cleanup);

  it("returns every selected file when Blueprint FileInput is multiple", () => {
    const onFieldValueChange = vi.fn();
    const fieldDefinition = {
      fieldKey: "attachments",
      fieldComponent: "FILE_PICKER",
      fieldType: "attachment",
      label: "Attachments",
      fieldComponentProps: { inputProps: { multiple: true } },
    } satisfies RendererFieldDefinition;

    const { container } = render(
      <FormFieldRenderer
        fieldDefinition={fieldDefinition}
        value={null}
        onFieldValueChange={onFieldValueChange}
        isEdited={false}
        error={undefined}
      />,
    );
    const input = container.querySelector("input[type='file']");
    if (!(input instanceof HTMLInputElement)) {
      throw new Error("Blueprint FileInput did not render a file input");
    }
    const files = [
      new File(["first"], "first.txt", { type: "text/plain" }),
      new File(["second"], "second.txt", { type: "text/plain" }),
    ];

    fireEvent.change(input, { target: { files } });

    expect(onFieldValueChange).toHaveBeenCalledWith(files);
  });

  it("exposes Blueprint Switch as an accessible switch", () => {
    const fieldDefinition = {
      fieldKey: "active",
      fieldComponent: "SWITCH",
      fieldType: "boolean",
      label: "Active",
      fieldComponentProps: {},
    } satisfies RendererFieldDefinition;

    render(
      <FormFieldRenderer
        fieldDefinition={fieldDefinition}
        value={true}
        onFieldValueChange={vi.fn()}
        isEdited={false}
        error={undefined}
      />,
    );

    expect(screen.getByRole("switch").getAttribute("aria-checked")).toBe(
      "true",
    );
  });

  it("converts Blueprint DateInput values back to Date", () => {
    const onFieldValueChange = vi.fn();
    const fieldDefinition = {
      fieldKey: "dueDate",
      fieldComponent: "DATETIME_PICKER",
      fieldType: "datetime",
      label: "Due date",
      fieldComponentProps: {
        ...DATE_FORMAT_PROPS,
        defaultTimezone: "UTC",
        popoverProps: { usePortal: false },
      },
    } satisfies RendererFieldDefinition;

    render(
      <FormFieldRenderer
        fieldDefinition={fieldDefinition}
        value={new Date("2026-03-03T00:00:00.000Z")}
        onFieldValueChange={onFieldValueChange}
        isEdited={false}
        error={undefined}
      />,
    );

    fireEvent.change(screen.getByLabelText("Due date"), {
      target: { value: "2026-03-04" },
    });

    const changedValue = onFieldValueChange.mock.calls[0]?.[0];
    if (!(changedValue instanceof Date)) {
      throw new Error("Blueprint DateInput did not emit a Date");
    }
    expect(changedValue.toISOString()).toBe("2026-03-04T00:00:00.000Z");
  });

  it("keeps out-of-range DateRangeInput drafts out of the form value", () => {
    const onFieldValueChange = vi.fn();
    const fieldDefinition = {
      fieldKey: "window",
      fieldComponent: "DATE_RANGE_INPUT",
      fieldType: "datetime",
      label: "Window",
      fieldComponentProps: {
        ...DATE_FORMAT_PROPS,
        minDate: new Date("2026-03-01T00:00:00.000Z"),
        maxDate: new Date("2026-03-31T00:00:00.000Z"),
        popoverProps: { usePortal: false },
      },
    } satisfies RendererFieldDefinition;

    render(
      <FormFieldRenderer
        fieldDefinition={fieldDefinition}
        value={[null, null]}
        onFieldValueChange={onFieldValueChange}
        isEdited={false}
        error={undefined}
      />,
    );
    const startInput = screen.getAllByRole("textbox")[0];

    fireEvent.change(startInput, { target: { value: "2026-02-28" } });
    fireEvent.blur(startInput);

    expect(onFieldValueChange).not.toHaveBeenCalled();
  });

  it("emits numeric values from Blueprint NumericInput", () => {
    const onFieldValueChange = vi.fn();
    const fieldDefinition = {
      fieldKey: "quantity",
      fieldComponent: "NUMBER_INPUT",
      fieldType: "double",
      label: "Quantity",
      fieldComponentProps: { min: 0, max: 100 },
    } satisfies RendererFieldDefinition;

    render(
      <FormFieldRenderer
        fieldDefinition={fieldDefinition}
        value={1}
        onFieldValueChange={onFieldValueChange}
        isEdited={false}
        error={undefined}
      />,
    );

    fireEvent.change(screen.getByLabelText("Quantity"), {
      target: { value: "42" },
    });

    expect(onFieldValueChange).toHaveBeenCalledWith(42);
  });

  it("emits the original value from Blueprint RadioGroup", () => {
    const selectedValue = { id: "selected" };
    const onFieldValueChange = vi.fn();
    const fieldDefinition = {
      fieldKey: "choice",
      fieldComponent: "RADIO_BUTTONS",
      fieldType: "string",
      label: "Choice",
      fieldComponentProps: {
        options: [
          { label: "First", value: { id: "first" } },
          { label: "Selected", value: selectedValue },
        ],
      },
    } satisfies RendererFieldDefinition;

    render(
      <FormFieldRenderer
        fieldDefinition={fieldDefinition}
        value={null}
        onFieldValueChange={onFieldValueChange}
        isEdited={false}
        error={undefined}
      />,
    );

    fireEvent.click(screen.getByLabelText("Selected"));

    expect(onFieldValueChange).toHaveBeenCalledWith(selectedValue);
  });

  it("forwards disabled and error state to Blueprint form controls", () => {
    const fieldDefinition = {
      fieldKey: "name",
      fieldComponent: "TEXT_INPUT",
      fieldType: "string",
      label: "Name",
      disabled: true,
      fieldComponentProps: {},
    } satisfies RendererFieldDefinition;

    render(
      <FormFieldRenderer
        fieldDefinition={fieldDefinition}
        value=""
        onFieldValueChange={vi.fn()}
        isEdited={false}
        error="Name is required"
      />,
    );

    const input = screen.getByLabelText("Name") as HTMLInputElement;
    expect(input.disabled).toBe(true);
    expect(input.getAttribute("aria-invalid")).toBe("true");
    expect(screen.getByRole("alert").textContent).toBe("Name is required");
  });
});
