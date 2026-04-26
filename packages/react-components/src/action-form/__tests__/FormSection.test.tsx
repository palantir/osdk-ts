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

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it } from "vitest";
import type { FormSectionDefinition } from "../ActionFormApi.js";
import { FormSection } from "../FormSection.js";

function makeDefinition(
  overrides?: Partial<FormSectionDefinition>,
): FormSectionDefinition {
  return {
    title: "Test Section",
    fields: [],
    ...overrides,
  };
}

describe("FormSection", () => {
  afterEach(cleanup);

  describe("box style", () => {
    it("renders title and children", () => {
      render(
        <FormSection
          definition={makeDefinition({ title: "Personal Info" })}
          errorCount={0}
        >
          <div data-testid="child-field">Field content</div>
        </FormSection>,
      );

      expect(screen.getByText("Personal Info")).toBeDefined();
      expect(screen.getByTestId("child-field")).toBeDefined();
    });

    it("collapses when trigger is clicked", () => {
      render(
        <FormSection
          definition={makeDefinition()}
          errorCount={0}
        >
          <div data-testid="child-field">Field content</div>
        </FormSection>,
      );

      // Content is visible initially
      expect(screen.getByTestId("child-field")).toBeDefined();

      // Click the collapse trigger
      const trigger = screen.getByRole("button", { name: /test section/i });
      fireEvent.click(trigger);

      // Content should be hidden (panel closed)
      expect(screen.getByTestId("child-field").closest("[hidden]")).not
        .toBeNull();
    });

    it("starts collapsed when collapsedByDefault is true", () => {
      render(
        <FormSection
          definition={makeDefinition({ collapsedByDefault: true })}
          errorCount={0}
        >
          <div data-testid="child-field">Field content</div>
        </FormSection>,
      );

      // Content should be hidden initially
      expect(screen.getByTestId("child-field").closest("[hidden]")).not
        .toBeNull();
    });

    it("expands when trigger is clicked on a collapsed section", () => {
      render(
        <FormSection
          definition={makeDefinition({ collapsedByDefault: true })}
          errorCount={0}
        >
          <div data-testid="child-field">Field content</div>
        </FormSection>,
      );

      // Initially collapsed
      expect(screen.getByTestId("child-field").closest("[hidden]")).not
        .toBeNull();

      // Click to expand
      const trigger = screen.getByRole("button", { name: /test section/i });
      fireEvent.click(trigger);

      // Now visible
      expect(screen.getByTestId("child-field").closest("[hidden]")).toBeNull();
    });

    it("renders description when provided", () => {
      render(
        <FormSection
          definition={makeDefinition({ description: "Fill in your details" })}
          errorCount={0}
        >
          <div>content</div>
        </FormSection>,
      );

      expect(screen.getByText("Fill in your details")).toBeDefined();
    });

    it("shows error badge when errorCount > 0", () => {
      render(
        <FormSection
          definition={makeDefinition({ collapsedByDefault: true })}
          errorCount={2}
        >
          <div>content</div>
        </FormSection>,
      );

      expect(screen.getByText("2 errors")).toBeDefined();
    });

    it("shows singular error badge when errorCount is 1", () => {
      render(
        <FormSection
          definition={makeDefinition()}
          errorCount={1}
        >
          <div>content</div>
        </FormSection>,
      );

      expect(screen.getByText("1 error")).toBeDefined();
    });

    it("hides error badge when errorCount is 0", () => {
      render(
        <FormSection
          definition={makeDefinition()}
          errorCount={0}
        >
          <div>content</div>
        </FormSection>,
      );

      expect(screen.queryByText(/error/)).toBeNull();
    });

    it("renders without header when showTitleBar is false", () => {
      render(
        <FormSection
          definition={makeDefinition({ showTitleBar: false })}
          errorCount={0}
        >
          <div data-testid="child-field">Field content</div>
        </FormSection>,
      );

      // No trigger button, no title text
      expect(screen.queryByRole("button")).toBeNull();
      expect(screen.queryByText("Test Section")).toBeNull();
      // Content still visible
      expect(screen.getByTestId("child-field")).toBeDefined();
    });
  });

  describe("minimal style", () => {
    it("renders heading and children without border or collapse", () => {
      render(
        <FormSection
          definition={makeDefinition({ style: "minimal", title: "Details" })}
          errorCount={0}
        >
          <div data-testid="child-field">Field content</div>
        </FormSection>,
      );

      expect(screen.getByText("Details")).toBeDefined();
      expect(screen.getByTestId("child-field")).toBeDefined();
      // No collapse trigger
      expect(screen.queryByRole("button")).toBeNull();
    });

    it("renders description in minimal style", () => {
      render(
        <FormSection
          definition={makeDefinition({
            style: "minimal",
            description: "Some info",
          })}
          errorCount={0}
        >
          <div>content</div>
        </FormSection>,
      );

      expect(screen.getByText("Some info")).toBeDefined();
    });
  });

  describe("multi-column grid", () => {
    it("renders children in grid with columnCount 2", () => {
      const { container } = render(
        <FormSection
          definition={makeDefinition({ columnCount: 2 })}
          errorCount={0}
        >
          <div data-testid="field-1">Field 1</div>
          <div data-testid="field-2">Field 2</div>
          <div data-testid="field-3">Field 3</div>
        </FormSection>,
      );

      // All 3 children are rendered
      expect(screen.getByTestId("field-1")).toBeDefined();
      expect(screen.getByTestId("field-2")).toBeDefined();
      expect(screen.getByTestId("field-3")).toBeDefined();
    });

    it("renders children in grid with columnCount 2 and even count", () => {
      render(
        <FormSection
          definition={makeDefinition({ columnCount: 2 })}
          errorCount={0}
        >
          <div data-testid="field-1">Field 1</div>
          <div data-testid="field-2">Field 2</div>
          <div data-testid="field-3">Field 3</div>
          <div data-testid="field-4">Field 4</div>
        </FormSection>,
      );

      // All 4 children are rendered
      expect(screen.getByTestId("field-1")).toBeDefined();
      expect(screen.getByTestId("field-2")).toBeDefined();
      expect(screen.getByTestId("field-3")).toBeDefined();
      expect(screen.getByTestId("field-4")).toBeDefined();
    });
  });
});
