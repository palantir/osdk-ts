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

import { cleanup, fireEvent, render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import type { PdfAnnotation } from "../../types.js";
import { PdfViewerAnnotationLayer } from "../PdfViewerAnnotationLayer.js";

afterEach(() => {
  cleanup();
});

function createAnnotation(
  overrides: Record<string, unknown> = {}
): PdfAnnotation {
  return {
    id: "ann-1",
    type: "highlight",
    page: 1,
    rect: { x: 100, y: 500, width: 200, height: 20 },
    ...overrides,
  } as PdfAnnotation;
}

// pdfjs's viewport.transform for a non-rotated page: scales and flips y.
// Applied to (x, y): (scale*x, scale*(pageHeight - y)).
function pageTransform(scale: number, pageHeight: number): number[] {
  return [scale, 0, 0, -scale, 0, pageHeight * scale];
}

describe("PdfViewerAnnotationLayer", () => {
  it("should render an annotation for each item", () => {
    const annotations = [
      createAnnotation({ id: "a1" }),
      createAnnotation({ id: "a2" }),
      createAnnotation({ id: "a3" }),
    ];

    const { container } = render(
      <PdfViewerAnnotationLayer
        annotations={annotations}
        pageHeight={792}
        scale={1.0}
        transform={pageTransform(1.0, 792)}
      />
    );

    const items = container.querySelectorAll("[data-annotation-id]");
    expect(items).toHaveLength(3);
    expect(items[0].getAttribute("data-annotation-id")).toBe("a1");
    expect(items[1].getAttribute("data-annotation-id")).toBe("a2");
    expect(items[2].getAttribute("data-annotation-id")).toBe("a3");
  });

  it("should render nothing when annotations is empty", () => {
    const { container } = render(
      <PdfViewerAnnotationLayer
        annotations={[]}
        pageHeight={792}
        scale={1.0}
        transform={pageTransform(1.0, 792)}
      />
    );

    const items = container.querySelectorAll("[data-annotation-id]");
    expect(items).toHaveLength(0);
  });

  it("should convert PDF coordinates to CSS top-left origin", () => {
    const annotation = createAnnotation({
      rect: { x: 100, y: 500, width: 200, height: 20 },
    });

    const { container } = render(
      <PdfViewerAnnotationLayer
        annotations={[annotation]}
        pageHeight={792}
        scale={1.0}
        transform={pageTransform(1.0, 792)}
      />
    );

    const item = container.querySelector("[data-annotation-id]") as HTMLElement;
    // top = (pageHeight - y - height) * scale = (792 - 500 - 20) * 1.0 = 272
    expect(item.style.top).toBe("272px");
    expect(item.style.left).toBe("100px");
    expect(item.style.width).toBe("200px");
    expect(item.style.height).toBe("20px");
  });

  it("should handle 90° rotation transform by swapping axes", () => {
    const annotation = createAnnotation({
      rect: { x: 100, y: 500, width: 200, height: 20 },
    });
    const scale = 1.0;
    const pageWidth = 612;
    const pageHeight = 792;
    const rotatedTransform = [0, scale, -scale, 0, pageWidth * scale, 0];

    const { container } = render(
      <PdfViewerAnnotationLayer
        annotations={[annotation]}
        pageHeight={pageHeight}
        scale={scale}
        transform={rotatedTransform}
      />
    );

    const item = container.querySelector("[data-annotation-id]") as HTMLElement;
    expect(item.style.left).toBe("92px");
    expect(item.style.top).toBe("100px");
    expect(item.style.width).toBe("20px");
    expect(item.style.height).toBe("200px");
  });

  it("should apply scale to coordinates", () => {
    const annotation = createAnnotation({
      rect: { x: 100, y: 500, width: 200, height: 20 },
    });

    const { container } = render(
      <PdfViewerAnnotationLayer
        annotations={[annotation]}
        pageHeight={792}
        scale={2.0}
        transform={pageTransform(2.0, 792)}
      />
    );

    const item = container.querySelector("[data-annotation-id]") as HTMLElement;
    // top = (792 - 500 - 20) * 2.0 = 544
    expect(item.style.top).toBe("544px");
    expect(item.style.left).toBe("200px");
    expect(item.style.width).toBe("400px");
    expect(item.style.height).toBe("40px");
  });

  it("should call onAnnotationClick when annotation is clicked", () => {
    const annotation = createAnnotation({ id: "click-me" });
    const onClick = vi.fn();

    const { container } = render(
      <PdfViewerAnnotationLayer
        annotations={[annotation]}
        pageHeight={792}
        scale={1.0}
        transform={pageTransform(1.0, 792)}
        onAnnotationClick={onClick}
      />
    );

    const item = container.querySelector(
      "[data-annotation-id='click-me']"
    ) as HTMLElement;
    fireEvent.click(item);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(annotation);
  });

  it("should call onAnnotationClick on Enter key", () => {
    const annotation = createAnnotation({ id: "key-me" });
    const onClick = vi.fn();

    const { container } = render(
      <PdfViewerAnnotationLayer
        annotations={[annotation]}
        pageHeight={792}
        scale={1.0}
        transform={pageTransform(1.0, 792)}
        onAnnotationClick={onClick}
      />
    );

    const item = container.querySelector(
      "[data-annotation-id='key-me']"
    ) as HTMLElement;
    fireEvent.keyDown(item, { key: "Enter" });

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(annotation);
  });

  it("should not call onAnnotationClick on non-Enter key", () => {
    const annotation = createAnnotation();
    const onClick = vi.fn();

    const { container } = render(
      <PdfViewerAnnotationLayer
        annotations={[annotation]}
        pageHeight={792}
        scale={1.0}
        transform={pageTransform(1.0, 792)}
        onAnnotationClick={onClick}
      />
    );

    const item = container.querySelector("[data-annotation-id]") as HTMLElement;
    fireEvent.keyDown(item, { key: "Tab" });

    expect(onClick).not.toHaveBeenCalled();
  });

  it("should set title from annotation label", () => {
    const annotation = createAnnotation({ label: "My Note" });

    const { container } = render(
      <PdfViewerAnnotationLayer
        annotations={[annotation]}
        pageHeight={792}
        scale={1.0}
        transform={pageTransform(1.0, 792)}
      />
    );

    const item = container.querySelector("[data-annotation-id]") as HTMLElement;
    expect(item.title).toBe("My Note");
  });

  it("should set custom color CSS variable when color is provided", () => {
    const annotation = createAnnotation({ color: "#ff0000" });

    const { container } = render(
      <PdfViewerAnnotationLayer
        annotations={[annotation]}
        pageHeight={792}
        scale={1.0}
        transform={pageTransform(1.0, 792)}
      />
    );

    const item = container.querySelector("[data-annotation-id]") as HTMLElement;
    expect(item.style.getPropertyValue("--osdk-pdf-annotation-color")).toBe(
      "#ff0000"
    );
  });

  it("should not set color CSS variable when color is not provided", () => {
    const annotation = createAnnotation({ color: undefined });

    const { container } = render(
      <PdfViewerAnnotationLayer
        annotations={[annotation]}
        pageHeight={792}
        scale={1.0}
        transform={pageTransform(1.0, 792)}
      />
    );

    const item = container.querySelector("[data-annotation-id]") as HTMLElement;
    expect(item.style.getPropertyValue("--osdk-pdf-annotation-color")).toBe("");
  });

  it("should have role=button and tabIndex=0 for accessibility", () => {
    const annotation = createAnnotation();

    const { container } = render(
      <PdfViewerAnnotationLayer
        annotations={[annotation]}
        pageHeight={792}
        scale={1.0}
        transform={pageTransform(1.0, 792)}
      />
    );

    const item = container.querySelector("[data-annotation-id]") as HTMLElement;
    expect(item.getAttribute("role")).toBe("button");
    expect(item.getAttribute("tabindex")).toBe("0");
  });

  it("should not throw when onAnnotationClick is not provided", () => {
    const annotation = createAnnotation();

    const { container } = render(
      <PdfViewerAnnotationLayer
        annotations={[annotation]}
        pageHeight={792}
        scale={1.0}
        transform={pageTransform(1.0, 792)}
      />
    );

    const item = container.querySelector("[data-annotation-id]") as HTMLElement;
    // Should not throw
    fireEvent.click(item);
    fireEvent.keyDown(item, { key: "Enter" });
  });

  it("should render custom annotation with render function", () => {
    const renderFn = vi.fn(
      ({
        scale,
      }: {
        annotation: PdfAnnotation;
        scale: number;
        pageHeight: number;
        transform: number[];
      }) => <span data-testid="custom-content">Scaled: {scale}</span>
    );
    const annotation = createAnnotation({
      id: "custom-1",
      type: "custom",
      render: renderFn,
    });
    const transform = pageTransform(1.5, 792);

    const { container } = render(
      <PdfViewerAnnotationLayer
        annotations={[annotation]}
        pageHeight={792}
        scale={1.5}
        transform={transform}
      />
    );

    expect(renderFn).toHaveBeenCalledWith({
      annotation,
      scale: 1.5,
      pageHeight: 792,
      transform,
    });
    const customContent = container.querySelector(
      "[data-testid='custom-content']"
    );
    expect(customContent).not.toBeNull();
    expect(customContent?.textContent).toBe("Scaled: 1.5");
  });

  it("should position custom annotation correctly", () => {
    const annotation = createAnnotation({
      id: "custom-pos",
      type: "custom",
      rect: { x: 100, y: 500, width: 200, height: 20 },
      render: () => <span>Custom</span>,
    });

    const { container } = render(
      <PdfViewerAnnotationLayer
        annotations={[annotation]}
        pageHeight={792}
        scale={1.0}
        transform={pageTransform(1.0, 792)}
      />
    );

    const item = container.querySelector(
      "[data-annotation-id='custom-pos']"
    ) as HTMLElement;
    expect(item.style.top).toBe("272px");
    expect(item.style.left).toBe("100px");
  });

  it("should call onAnnotationClick when custom annotation is clicked", () => {
    const annotation = createAnnotation({
      id: "custom-click",
      type: "custom",
      render: () => <span>Click me</span>,
    });
    const onClick = vi.fn();

    const { container } = render(
      <PdfViewerAnnotationLayer
        annotations={[annotation]}
        pageHeight={792}
        scale={1.0}
        transform={pageTransform(1.0, 792)}
        onAnnotationClick={onClick}
      />
    );

    const item = container.querySelector(
      "[data-annotation-id='custom-click']"
    ) as HTMLElement;
    fireEvent.click(item);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(annotation);
  });
});
