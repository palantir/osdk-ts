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

import { cleanup, render, screen } from "@testing-library/react";
import * as React from "react";
import { afterEach, describe, expect, it } from "vitest";
import { BaseObjectView, type ObjectViewObject } from "../BaseObjectView.js";

afterEach(() => {
  cleanup();
});

const sampleObject: ObjectViewObject = {
  apiName: "Supplier",
  typeDisplayName: "Supplier",
  icon: { type: "blueprint", name: "shop", color: "#3b82f6" },
  title: "Supplier 6",
  properties: [
    {
      apiName: "contactEmail",
      displayName: "Contact Email",
      value: "orders6@supplier6.com",
      dataType: "string",
    },
    {
      apiName: "country",
      displayName: "Country",
      value: "France",
      dataType: "string",
      visibility: "PROMINENT",
    },
    {
      apiName: "supplierId",
      displayName: "Supplier ID",
      value: "SUP-00006",
      dataType: "string",
    },
    {
      apiName: "internalNotes",
      displayName: "Internal Notes",
      value: "secret",
      dataType: "string",
      visibility: "HIDDEN",
    },
  ],
};

describe("BaseObjectView", () => {
  it("renders the header title and type", () => {
    render(<BaseObjectView object={sampleObject} />);
    expect(screen.getByText("Supplier 6")).toBeDefined();
    expect(screen.getByText("Supplier")).toBeDefined();
  });

  it("renders properties section with NORMAL properties", () => {
    render(<BaseObjectView object={sampleObject} />);
    expect(screen.getByText("Contact Email")).toBeDefined();
    expect(screen.getByText("orders6@supplier6.com")).toBeDefined();
    expect(screen.getByText("Supplier ID")).toBeDefined();
    expect(screen.getByText("SUP-00006")).toBeDefined();
  });

  it("renders the Prominent section for PROMINENT properties", () => {
    render(<BaseObjectView object={sampleObject} />);
    expect(screen.getByText("Prominent")).toBeDefined();
    expect(screen.getByText("France")).toBeDefined();
  });

  it("hides HIDDEN properties", () => {
    render(<BaseObjectView object={sampleObject} />);
    expect(screen.queryByText("Internal Notes")).toBeNull();
    expect(screen.queryByText("secret")).toBeNull();
  });

  it("hides the header when enableHeader is false", () => {
    render(<BaseObjectView object={sampleObject} enableHeader={false} />);
    expect(screen.queryByText("Supplier 6")).toBeNull();
  });

  it("uses renderHeader override when provided", () => {
    render(
      <BaseObjectView
        object={sampleObject}
        renderHeader={(o) => <div>Custom Header for {o.title}</div>}
      />,
    );
    expect(screen.getByText("Custom Header for Supplier 6")).toBeDefined();
  });

  it("uses renderProperty override when provided", () => {
    render(
      <BaseObjectView
        object={sampleObject}
        renderProperty={(apiName, value) =>
          apiName === "contactEmail"
            ? <a href={`mailto:${value}`}>email link</a>
            : String(value)}
      />,
    );
    expect(screen.getByText("email link")).toBeDefined();
  });

  it("renders the loading state when object is undefined and isLoading is true", () => {
    const { container } = render(<BaseObjectView isLoading={true} />);
    expect(container.querySelector("[role='progressbar']")).not.toBeNull();
  });

  it("renders the error state when error is set", () => {
    render(<BaseObjectView error={new Error("network failed")} />);
    expect(screen.getByText("Failed to load object")).toBeDefined();
    expect(screen.getByText("network failed")).toBeDefined();
  });

  it("renders the not-found state when notFound is true", () => {
    render(<BaseObjectView notFound={true} />);
    expect(screen.getByText("Object not found")).toBeDefined();
  });

  it("renders the not-found state when no object and not loading", () => {
    render(<BaseObjectView />);
    expect(screen.getByText("Object not found")).toBeDefined();
  });

  it("renders an em-dash for null property values", () => {
    const objectWithNull: ObjectViewObject = {
      ...sampleObject,
      properties: [
        {
          apiName: "missing",
          displayName: "Missing",
          value: null,
          dataType: "string",
        },
      ],
    };
    render(<BaseObjectView object={objectWithNull} />);
    expect(screen.getByText("—")).toBeDefined();
  });
});
