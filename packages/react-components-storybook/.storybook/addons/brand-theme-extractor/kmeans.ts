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

import { chromaFromRgb, relativeLuminance, rgbToHex } from "./color-utils.js";
import type { ExtractedColor } from "./types.js";

type RGB = [number, number, number];

const MAX_SAMPLES = 10_000;
const MAX_ITERATIONS = 20;
const CONVERGENCE_THRESHOLD = 1;
const MAX_CANVAS_SIZE = 200;

function distanceSq(a: RGB, b: RGB): number {
  const dr = a[0] - b[0];
  const dg = a[1] - b[1];
  const db = a[2] - b[2];
  return dr * dr + dg * dg + db * db;
}

/** K-means++ initialization: pick k centroids with distance-weighted probability */
function initCentroids(samples: RGB[], k: number): RGB[] {
  const centroids: RGB[] = [];
  const n = samples.length;

  // First centroid: random
  centroids.push(samples[Math.floor(Math.random() * n)]);

  const distances = new Float64Array(n).fill(Infinity);

  for (let c = 1; c < k; c++) {
    const prev = centroids[c - 1];
    let totalDist = 0;

    for (let i = 0; i < n; i++) {
      const d = distanceSq(samples[i], prev);
      if (d < distances[i]) {
        distances[i] = d;
      }
      totalDist += distances[i];
    }

    // Weighted random selection
    let target = Math.random() * totalDist;
    for (let i = 0; i < n; i++) {
      target -= distances[i];
      if (target <= 0) {
        centroids.push(samples[i]);
        break;
      }
    }

    // Fallback if floating point issues
    if (centroids.length <= c) {
      centroids.push(samples[Math.floor(Math.random() * n)]);
    }
  }

  return centroids;
}

/** Extract pixels from ImageData, stride-sampling to cap at MAX_SAMPLES */
function samplePixels(imageData: ImageData): RGB[] {
  const { data, width, height } = imageData;
  const totalPixels = width * height;
  const stride = Math.max(1, Math.floor(totalPixels / MAX_SAMPLES));
  const samples: RGB[] = [];

  for (let i = 0; i < totalPixels; i += stride) {
    const offset = i * 4;
    const a = data[offset + 3];
    // Skip mostly transparent pixels
    if (a < 128) continue;
    samples.push([data[offset], data[offset + 1], data[offset + 2]]);
  }

  return samples;
}

/** Run k-means clustering and return sorted extracted colors */
function kmeansCluster(samples: RGB[], k: number): ExtractedColor[] {
  const n = samples.length;
  if (n === 0) return [];

  const effectiveK = Math.min(k, n);
  let centroids = initCentroids(samples, effectiveK);
  const assignments = new Int32Array(n);

  for (let iter = 0; iter < MAX_ITERATIONS; iter++) {
    // Assign each sample to nearest centroid
    for (let i = 0; i < n; i++) {
      let minDist = Infinity;
      let bestC = 0;
      for (let c = 0; c < effectiveK; c++) {
        const d = distanceSq(samples[i], centroids[c]);
        if (d < minDist) {
          minDist = d;
          bestC = c;
        }
      }
      assignments[i] = bestC;
    }

    // Recompute centroids
    const newCentroids: RGB[] = Array.from(
      { length: effectiveK },
      (): RGB => [0, 0, 0],
    );
    const counts = new Int32Array(effectiveK);

    for (let i = 0; i < n; i++) {
      const c = assignments[i];
      counts[c]++;
      newCentroids[c][0] += samples[i][0];
      newCentroids[c][1] += samples[i][1];
      newCentroids[c][2] += samples[i][2];
    }

    let maxShift = 0;
    for (let c = 0; c < effectiveK; c++) {
      if (counts[c] > 0) {
        newCentroids[c][0] /= counts[c];
        newCentroids[c][1] /= counts[c];
        newCentroids[c][2] /= counts[c];
      }
      const shift = distanceSq(centroids[c], newCentroids[c]);
      if (shift > maxShift) maxShift = shift;
    }

    centroids = newCentroids;

    if (maxShift < CONVERGENCE_THRESHOLD) break;
  }

  // Count final cluster sizes
  const finalCounts = new Int32Array(effectiveK);
  for (let i = 0; i < n; i++) {
    finalCounts[assignments[i]]++;
  }

  // Build result sorted by cluster size (most dominant first)
  const results: ExtractedColor[] = centroids.map((rgb, i) => ({
    rgb: [Math.round(rgb[0]), Math.round(rgb[1]), Math.round(rgb[2])] as RGB,
    hex: rgbToHex(rgb[0], rgb[1], rgb[2]),
    luminance: relativeLuminance(rgb[0], rgb[1], rgb[2]),
    chroma: chromaFromRgb(rgb[0], rgb[1], rgb[2]),
    count: finalCounts[i],
  }));

  results.sort((a, b) => b.count - a.count);
  return results;
}

/** Load an image element onto a downscaled canvas and extract ImageData */
function imageToData(img: HTMLImageElement): ImageData {
  const canvas = document.createElement("canvas");
  let { width, height } = img;

  if (width > MAX_CANVAS_SIZE || height > MAX_CANVAS_SIZE) {
    const scale = MAX_CANVAS_SIZE / Math.max(width, height);
    width = Math.round(width * scale);
    height = Math.round(height * scale);
  }

  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Could not get canvas 2D context");

  ctx.drawImage(img, 0, 0, width, height);
  return ctx.getImageData(0, 0, width, height);
}

/** Extract dominant colors from an image element */
export function extractColorsFromImage(
  img: HTMLImageElement,
  k = 8,
): ExtractedColor[] {
  const imageData = imageToData(img);
  const samples = samplePixels(imageData);
  return kmeansCluster(samples, k);
}
