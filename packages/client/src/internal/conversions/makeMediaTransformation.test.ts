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

import type { ImageOperation, MediaTransformation } from "@osdk/api/unstable";
import { describe, expect, it } from "vitest";

import { makeMediaTransformation } from "./makeMediaTransformation.js";

/**
 * Runs a single image operation through the serializer and returns the
 * converted wire operation, so each test can assert on its exact shape.
 */
function convertImageOp(op: ImageOperation): unknown {
  const transformation: MediaTransformation = {
    $image: { $encoding: "png", $operations: [op] },
  };
  const result = makeMediaTransformation(transformation) as {
    type: string;
    operations: Array<unknown>;
  };
  expect(result.type).toBe("image");
  return result.operations[0];
}

describe("makeMediaTransformation image operations", () => {
  it("converts $tile (regression: previously the implicit catch-all)", () => {
    expect(convertImageOp({ $tile: { $zoom: 2, $x: 1, $y: 3 } })).toEqual({
      type: "tile",
      zoom: 2,
      x: 1,
      y: 3,
    });
  });

  it("converts $annotate with a bounding box, label, and color", () => {
    expect(
      convertImageOp({
        $annotate: {
          $annotations: [
            {
              $geometry: {
                $boundingBox: { $left: 1, $top: 2, $width: 3, $height: 4 },
              },
              $label: "cat",
              $color: { $r: 255, $g: 0, $b: 0, $a: 0.5 },
              $thickness: 2,
              $fontSize: 12,
            },
          ],
        },
      })
    ).toEqual({
      type: "annotate",
      annotations: [
        {
          geometry: {
            type: "boundingBox",
            boundingBox: { left: 1, top: 2, width: 3, height: 4 },
          },
          label: "cat",
          color: { r: 255, g: 0, b: 0, a: 0.5 },
          thickness: 2,
          fontSize: 12,
        },
      ],
    });
  });

  it("converts $annotate with only the required geometry", () => {
    expect(
      convertImageOp({
        $annotate: {
          $annotations: [
            {
              $geometry: {
                $boundingBox: { $left: 0, $top: 0, $width: 10, $height: 10 },
              },
            },
          ],
        },
      })
    ).toEqual({
      type: "annotate",
      annotations: [
        {
          geometry: {
            type: "boundingBox",
            boundingBox: { left: 0, top: 0, width: 10, height: 10 },
          },
        },
      ],
    });
  });

  it("converts $contrast equalize", () => {
    expect(
      convertImageOp({ $contrast: { $contrastType: { $equalize: {} } } })
    ).toEqual({ type: "contrast", contrastType: { type: "equalize" } });
  });

  it("converts $contrast rayleigh", () => {
    expect(
      convertImageOp({
        $contrast: { $contrastType: { $rayleigh: { $sigma: 0.7 } } },
      })
    ).toEqual({
      type: "contrast",
      contrastType: { type: "rayleigh", sigma: 0.7 },
    });
  });

  it("converts $contrast binarize with a threshold", () => {
    expect(
      convertImageOp({
        $contrast: { $contrastType: { $binarize: { $threshold: 128 } } },
      })
    ).toEqual({
      type: "contrast",
      contrastType: { type: "binarize", threshold: 128 },
    });
  });

  it("converts $contrast binarize without a threshold", () => {
    expect(
      convertImageOp({ $contrast: { $contrastType: { $binarize: {} } } })
    ).toEqual({ type: "contrast", contrastType: { type: "binarize" } });
  });

  it("converts $encrypt with polygon regions and a cipher license", () => {
    expect(
      convertImageOp({
        $encrypt: {
          $polygons: [
            [
              { $x: 0, $y: 0 },
              { $x: 10, $y: 0 },
              {
                $x: 10,
                $y: 10,
              },
            ],
          ],
          $cipherLicenseRid: "ri.cipher.main.license.1",
        },
      })
    ).toEqual({
      type: "encrypt",
      polygons: [
        [
          { x: 0, y: 0 },
          { x: 10, y: 0 },
          { x: 10, y: 10 },
        ],
      ],
      cipherLicenseRid: "ri.cipher.main.license.1",
    });
  });

  it("converts $decrypt with polygon regions and a cipher license", () => {
    expect(
      convertImageOp({
        $decrypt: {
          $polygons: [
            [
              { $x: 1, $y: 1 },
              { $x: 5, $y: 1 },
              { $x: 5, $y: 5 },
            ],
          ],
          $cipherLicenseRid: "ri.cipher.main.license.2",
        },
      })
    ).toEqual({
      type: "decrypt",
      polygons: [
        [
          { x: 1, y: 1 },
          { x: 5, y: 1 },
          { x: 5, y: 5 },
        ],
      ],
      cipherLicenseRid: "ri.cipher.main.license.2",
    });
  });
});
