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

// Dev-only CORS proxy for cross-origin image loading in Storybook.
// Not used in production builds. May be rate-limited or unavailable.
const CORS_PROXY = "https://corsproxy.io/?";

/** Load an image from a File (upload) */
export function loadImageFromFile(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error("Failed to decode uploaded image"));
      img.src = reader.result as string;
    };
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
}

/** Load an image from a URL, with CORS proxy fallback */
export function loadImageFromUrl(url: string): Promise<HTMLImageElement> {
  return loadWithCors(url).catch(() =>
    loadWithCors(`${CORS_PROXY}${encodeURIComponent(url)}`)
  ).catch(() => {
    throw new Error(
      "Could not load image due to CORS restrictions. "
        + "Try downloading the image and uploading it directly.",
    );
  });
}

/**
 * Capture a webpage screenshot via Microlink API and load as an image.
 * Dev-only: Microlink is free (no API key), has proper CORS headers,
 * and returns a screenshot URL that we can fetch as a blob.
 * May be rate-limited or unavailable outside of dev use.
 *
 * Uses XMLHttpRequest to bypass MSW (Mock Service Worker).
 */
export async function loadScreenshotFromUrl(
  url: string,
): Promise<HTMLImageElement> {
  const normalized = url.startsWith("http") ? url : `https://${url}`;
  const apiUrl = `https://api.microlink.io/?url=${
    encodeURIComponent(normalized)
  }&screenshot=true&meta=false`;

  try {
    // Microlink returns JSON with a screenshot URL
    const json = await xhrFetchJson(apiUrl);
    const screenshotUrl = json?.data?.screenshot?.url;
    if (!screenshotUrl) {
      throw new Error("No screenshot URL in response");
    }
    return await fetchAsImage(screenshotUrl);
  } catch {
    throw new Error(
      "Could not capture webpage screenshot. "
        + "Try taking a screenshot manually and uploading it.",
    );
  }
}

/**
 * Fetch a URL as a blob and convert to an HTMLImageElement.
 * This avoids tainted canvas issues because the image data is
 * loaded via fetch (which respects CORS) and then set as an
 * object URL (which is same-origin).
 *
 * Uses XMLHttpRequest instead of fetch to bypass MSW (Mock Service
 * Worker) which intercepts all fetch requests in the Storybook preview.
 */
function fetchAsImage(url: string): Promise<HTMLImageElement> {
  return xhrFetchBlob(url).then((blob) => {
    const objectUrl = URL.createObjectURL(blob);
    return new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        URL.revokeObjectURL(objectUrl);
        resolve(img);
      };
      img.onerror = () => {
        URL.revokeObjectURL(objectUrl);
        reject(new Error("Failed to decode screenshot"));
      };
      img.src = objectUrl;
    });
  });
}

/** Fetch a URL as JSON using XMLHttpRequest (bypasses MSW) */
function xhrFetchJson(url: string): Promise<Record<string, unknown>> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "json";
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response as Record<string, unknown>);
      } else {
        reject(new Error(`HTTP ${xhr.status}`));
      }
    };
    xhr.onerror = () => reject(new Error(`XHR failed: ${url}`));
    xhr.send();
  });
}

/** Fetch a URL as a Blob using XMLHttpRequest (bypasses MSW) */
function xhrFetchBlob(url: string): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response as Blob);
      } else {
        reject(new Error(`HTTP ${xhr.status}`));
      }
    };
    xhr.onerror = () => reject(new Error(`XHR failed: ${url}`));
    xhr.send();
  });
}

function loadWithCors(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load: ${src}`));
    img.src = src;
  });
}
