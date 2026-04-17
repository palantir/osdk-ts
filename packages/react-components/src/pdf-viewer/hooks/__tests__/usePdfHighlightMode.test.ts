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

import { describe, expect, it } from "vitest";
import { quadPointsToRects, rgbArrayToHex } from "../usePdfHighlightMode.js";

describe("rgbArrayToHex", () => {
  it("should convert pure white", () => {
    expect(rgbArrayToHex([1, 1, 1])).toBe("#ffffff");
  });

  it("should convert pure black", () => {
    expect(rgbArrayToHex([0, 0, 0])).toBe("#000000");
  });

  it("should convert a mid-range color", () => {
    // PDF.js default yellow is roughly [1, 1, 0.6]
    expect(rgbArrayToHex([1, 1, 0.6])).toBe("#ffff99");
  });

  it("should convert pure red", () => {
    expect(rgbArrayToHex([1, 0, 0])).toBe("#ff0000");
  });

  it("should handle fractional values with rounding", () => {
    // 0.5 * 255 = 127.5 → rounds to 128 = 0x80
    expect(rgbArrayToHex([0.5, 0.5, 0.5])).toBe("#808080");
  });
});

describe("quadPointsToRects", () => {
  it("should return empty array for empty input", () => {
    expect(quadPointsToRects(new Float32Array([]))).toEqual([]);
  });

  it("should convert a single quad to a single rect", () => {
    // QuadPoints: [x1,y1, x2,y2, x3,y3, x4,y4]
    // Top-left, top-right, bottom-left, bottom-right in PDF coords
    const quad = new Float32Array([
      100,
      700, // x1, y1
      300,
      700, // x2 (unused directly), y2 (unused directly)
      100,
      680, // x3
      300,
      680, // x4 (unused directly), y4 (unused directly)
    ]);
    // x3 is at index 2 = 300, y4 is at index 5 = 680 (see indices i+2, i+5)
    // Wait — let me recalculate based on the actual index access:
    // i=0: x1=quad[0]=100, y1=quad[1]=700, x3=quad[2]=300, y4=quad[5]=680
    // x = min(100, 300) = 100
    // y = min(700, 680) = 680
    // width = |300 - 100| = 200
    // height = |700 - 680| = 20
    const rects = quadPointsToRects(quad);
    expect(rects).toEqual([{ x: 100, y: 680, width: 200, height: 20 }]);
  });

  it("should convert two quads to two rects", () => {
    const quads = new Float32Array([
      // First line
      50, 500, 250, 500, 50, 490, 250, 490,
      // Second line
      50, 490, 200, 490, 50, 480, 200, 480,
    ]);
    // Quad 1: x1=50, y1=500, x3=250, y4=490
    //   → x=50, y=490, width=200, height=10
    // Quad 2: x1=50, y1=490, x3=200, y4=480
    //   → x=50, y=480, width=150, height=10
    const rects = quadPointsToRects(quads);
    expect(rects).toHaveLength(2);
    expect(rects[0]).toEqual({ x: 50, y: 490, width: 200, height: 10 });
    expect(rects[1]).toEqual({ x: 50, y: 480, width: 150, height: 10 });
  });
});
