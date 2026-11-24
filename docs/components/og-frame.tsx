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

export function OgFrame({
  width,
  height,
  inset,
}: {
  width: number;
  height: number;
  inset: number;
}) {
  const lines = [
    { top: inset, left: 0, width, height: 1 },
    { top: height - inset, left: 0, width, height: 1 },
    { top: 0, left: inset, width: 1, height },
    { top: 0, left: width - inset, width: 1, height },
  ];
  const corners = [
    [inset, inset],
    [width - inset, inset],
    [inset, height - inset],
    [width - inset, height - inset],
  ];
  return (
    <>
      {lines.map((line, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            backgroundColor: "rgba(255, 255, 255, 0.09)",
            ...line,
          }}
        />
      ))}
      {corners.map(([x, y], i) => (
        <svg
          key={i}
          width="21"
          height="21"
          viewBox="0 0 21 21"
          style={{ position: "absolute", left: x - 10, top: y - 10 }}
        >
          <path d="M10.5 0V21M0 10.5H21" stroke="#52525b" strokeWidth="1" />
        </svg>
      ))}
    </>
  );
}
