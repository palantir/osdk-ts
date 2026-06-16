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

import type { OverlayBounds } from "../types.js";

function stripTranslateFromTransform(element: Element): string {
  const computedStyle = window.getComputedStyle(element);
  const transform = computedStyle.transform;

  if (!transform || transform === "none") {
    return "";
  }

  const matrixMatch = transform.match(
    /matrix\(([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*[^,]+,\s*[^)]+\)/,
  );

  if (matrixMatch) {
    const [, a, b, c, d] = matrixMatch;
    if (a === "1" && b === "0" && c === "0" && d === "1") {
      return "";
    }
    return `matrix(${a}, ${b}, ${c}, ${d}, 0, 0)`;
  }

  const matrix3dMatch = transform.match(/matrix3d\(([^)]+)\)/);
  if (matrix3dMatch) {
    const values = matrix3dMatch[1].split(",").map((v) => v.trim());
    if (values.length === 16) {
      values[12] = "0";
      values[13] = "0";
      values[14] = "0";
      return `matrix3d(${values.join(", ")})`;
    }
  }

  return "";
}

export function createElementBounds(element: Element): OverlayBounds {
  const boundingRect = element.getBoundingClientRect();
  const computedStyle = window.getComputedStyle(element);

  return {
    x: boundingRect.left,
    y: boundingRect.top,
    width: boundingRect.width,
    height: boundingRect.height,
    borderRadius: computedStyle.borderRadius || "0px",
    transform: stripTranslateFromTransform(element),
  };
}

export function getElementAtPosition(
  clientX: number,
  clientY: number,
  ignoreSelector?: string,
): Element | null {
  const elementsAtPoint = document.elementsFromPoint(clientX, clientY);

  for (const element of elementsAtPoint) {
    if (ignoreSelector && element.matches(ignoreSelector)) {
      continue;
    }

    if (element.hasAttribute("data-osdk-devtools-ignore")) {
      continue;
    }

    const tagName = element.tagName.toLowerCase();
    if (
      tagName === "script"
      || tagName === "style"
      || tagName === "link"
      || tagName === "meta"
      || tagName === "head"
      || tagName === "html"
    ) {
      continue;
    }

    return element;
  }

  return null;
}
