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
import React from "react";
import { afterEach, describe, expect, it } from "vitest";
import { FormField } from "../FormField.js";

describe("FormField", () => {
  afterEach(cleanup);

  describe("error display", () => {
    it("reserves an error slot even when no error is shown", () => {
      const { container } = render(
        <FormField fieldKey="name" label="Name">
          <input id="name" />
        </FormField>,
      );

      expect(
        container.querySelector("[data-osdk-form-field-error-slot]"),
      ).not.toBeNull();
      expect(screen.queryByRole("alert")).toBeNull();
    });

    it("shows error message with alert role", () => {
      const { container } = render(
        <FormField fieldKey="name" label="Name" error="This field is required">
          <input id="name" />
        </FormField>,
      );

      const alert = screen.getByRole("alert");
      expect(alert.textContent).toBe("This field is required");
      expect(
        container
          .querySelector("[data-osdk-form-field-error-slot]")
          ?.contains(alert),
      ).toBe(true);
    });

    it("does not render alert when no error", () => {
      render(
        <FormField fieldKey="name" label="Name">
          <input id="name" />
        </FormField>,
      );

      expect(screen.queryByRole("alert")).toBeNull();
    });
  });

  describe("bottom helper text", () => {
    it("shows both helper text and error when both are present", () => {
      render(
        <FormField
          fieldKey="name"
          label="Name"
          helperText="Enter your full name"
          helperTextPlacement="bottom"
          error="This field is required"
        >
          <input id="name" />
        </FormField>,
      );

      expect(screen.getByRole("alert").textContent).toBe(
        "This field is required",
      );
      expect(screen.getByText("Enter your full name")).toBeDefined();
    });
  });

  describe("tooltip helper text", () => {
    it("shows tooltip icon when placement is tooltip", () => {
      render(
        <FormField
          fieldKey="name"
          label="Name"
          helperText="Enter your full name"
          helperTextPlacement="tooltip"
        >
          <input id="name" />
        </FormField>,
      );

      expect(screen.queryByRole("alert")).toBeNull();
      expect(screen.getByLabelText("Info about Name")).toBeDefined();
    });

    it("shows error and keeps tooltip icon when both are present", () => {
      render(
        <FormField
          fieldKey="name"
          label="Name"
          helperText="Enter your full name"
          helperTextPlacement="tooltip"
          error="This field is required"
        >
          <input id="name" />
        </FormField>,
      );

      expect(screen.getByRole("alert").textContent).toBe(
        "This field is required",
      );
      expect(screen.getByLabelText("Info about Name")).toBeDefined();
    });
  });
});
