/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
import { determineMinVersion } from "./determineMinVersion.mjs";
import { generatePeerRange } from "./generatePeerRange.mjs";
import { parseChangelog } from "./parseChangelog.mjs";

describe("parseChangelog", () => {
  const SAMPLE_CHANGELOG = `# @osdk/widget.client-react

## 3.5.0-beta.11

### Patch Changes

- Updated dependencies [642be5f]
- Updated dependencies [525f277]
  - @osdk/client@2.8.0-beta.11
  - @osdk/widget.client@3.5.0-beta.11

## 3.5.0-beta.10

### Patch Changes

- Updated dependencies [27a5902]
  - @osdk/client@2.8.0-beta.10
  - @osdk/widget.client@3.5.0-beta.10

## 3.4.0-beta.2

### Patch Changes

- Updated dependencies [03db734]
  - @osdk/client@2.7.0-beta.2
  - @osdk/api@2.7.0-beta.2

## 3.3.0-beta.2

### Minor Changes

- 4d37e98: Improved support

### Patch Changes

- @osdk/widget.client@3.3.0-beta.2
`;

  it("extracts version mappings for a single peer", () => {
    const mappings = parseChangelog(SAMPLE_CHANGELOG, ["@osdk/client"]);
    expect(mappings).toEqual([
      {
        packageVersion: "3.5.0-beta.11",
        peerVersions: { "@osdk/client": "2.8.0-beta.11" },
      },
      {
        packageVersion: "3.5.0-beta.10",
        peerVersions: { "@osdk/client": "2.8.0-beta.10" },
      },
      {
        packageVersion: "3.4.0-beta.2",
        peerVersions: { "@osdk/client": "2.7.0-beta.2" },
      },
    ]);
  });

  it("extracts version mappings for multiple peers", () => {
    const mappings = parseChangelog(SAMPLE_CHANGELOG, [
      "@osdk/client",
      "@osdk/api",
    ]);
    expect(mappings).toEqual([
      {
        packageVersion: "3.5.0-beta.11",
        peerVersions: { "@osdk/client": "2.8.0-beta.11" },
      },
      {
        packageVersion: "3.5.0-beta.10",
        peerVersions: { "@osdk/client": "2.8.0-beta.10" },
      },
      {
        packageVersion: "3.4.0-beta.2",
        peerVersions: {
          "@osdk/client": "2.7.0-beta.2",
          "@osdk/api": "2.7.0-beta.2",
        },
      },
    ]);
  });

  it("excludes entries with no matching peer versions", () => {
    const mappings = parseChangelog(SAMPLE_CHANGELOG, ["@osdk/api"]);
    expect(mappings).toEqual([
      {
        packageVersion: "3.4.0-beta.2",
        peerVersions: { "@osdk/api": "2.7.0-beta.2" },
      },
    ]);
  });

  it("returns empty array for empty changelog", () => {
    expect(parseChangelog("", ["@osdk/client"])).toEqual([]);
  });

  it("handles stable versions", () => {
    const changelog = `# @osdk/functions

## 1.3.0

### Patch Changes

- Updated dependencies [322c5bc]
  - @osdk/client@2.5.0
`;
    const mappings = parseChangelog(changelog, ["@osdk/client"]);
    expect(mappings).toEqual([
      {
        packageVersion: "1.3.0",
        peerVersions: { "@osdk/client": "2.5.0" },
      },
    ]);
  });
});

describe("determineMinVersion", () => {
  it("finds the oldest client version in a 0.x minor series", () => {
    const mappings = [
      {
        packageVersion: "0.10.0-beta.5",
        peerVersions: { "@osdk/client": "2.8.0-beta.11" },
      },
      {
        packageVersion: "0.10.0-beta.4",
        peerVersions: { "@osdk/client": "2.8.0-beta.6" },
      },
      {
        packageVersion: "0.10.0-beta.2",
        peerVersions: { "@osdk/client": "2.8.0-beta.3" },
      },
      {
        packageVersion: "0.9.0-beta.10",
        peerVersions: { "@osdk/client": "2.7.0-beta.14" },
      },
    ];

    const min = determineMinVersion(mappings, "0.10.0-beta.5", "@osdk/client");
    expect(min).toBe("2.8.0-beta.3");
  });

  it("does not include versions from a different 0.x minor series", () => {
    const mappings = [
      {
        packageVersion: "0.2.0-beta.3",
        peerVersions: { "@osdk/client": "2.8.0-beta.6" },
      },
      {
        packageVersion: "0.1.0-beta.5",
        peerVersions: { "@osdk/client": "2.7.0-beta.14" },
      },
    ];

    const min = determineMinVersion(mappings, "0.2.0-beta.3", "@osdk/client");
    expect(min).toBe("2.8.0-beta.6");
  });

  it("finds the oldest client version in a >=1.x major series", () => {
    const mappings = [
      {
        packageVersion: "1.6.0-beta.2",
        peerVersions: { "@osdk/client": "2.8.0-beta.8" },
      },
      {
        packageVersion: "1.3.0",
        peerVersions: { "@osdk/client": "2.5.0" },
      },
      {
        packageVersion: "1.0.0-beta.11",
        peerVersions: { "@osdk/client": "2.2.0-beta.18" },
      },
    ];

    const min = determineMinVersion(mappings, "1.6.0-beta.2", "@osdk/client");
    expect(min).toBe("2.2.0-beta.18");
  });

  it("returns undefined when no mappings match the series", () => {
    const mappings = [
      {
        packageVersion: "2.0.0",
        peerVersions: { "@osdk/client": "3.0.0" },
      },
    ];

    const min = determineMinVersion(mappings, "1.0.0", "@osdk/client");
    expect(min).toBeUndefined();
  });

  it("returns undefined for invalid version string", () => {
    const min = determineMinVersion([], "not-a-version", "@osdk/client");
    expect(min).toBeUndefined();
  });

  it("returns undefined when peer is missing from all same-series mappings", () => {
    const mappings = [
      {
        packageVersion: "1.0.0",
        peerVersions: { "@osdk/api": "2.0.0" },
      },
    ];

    const min = determineMinVersion(mappings, "1.0.0", "@osdk/client");
    expect(min).toBeUndefined();
  });
});

describe("generatePeerRange", () => {
  it("uses beta-only range when min and peer are on the same tuple", () => {
    expect(generatePeerRange("2.8.0-beta.3", "2.8.0-beta.12")).toBe(
      ">=2.8.0-beta.0",
    );
  });

  it("produces OR range when min is on a different tuple than peer", () => {
    expect(generatePeerRange("2.7.0-beta.5", "2.8.0-beta.12")).toBe(
      "^2.7.0 || >=2.8.0-beta.0",
    );
  });

  it("produces OR range when min is stable and peer is prerelease", () => {
    expect(generatePeerRange("2.5.0", "2.8.0-beta.12")).toBe(
      "^2.5.0 || >=2.8.0-beta.0",
    );
  });

  it("strips prerelease from min in OR range", () => {
    expect(generatePeerRange("2.2.0-beta.18", "2.8.0-beta.11")).toBe(
      "^2.2.0 || >=2.8.0-beta.0",
    );
  });

  it("produces caret range for stable peer versions", () => {
    expect(generatePeerRange("2.2.0", "2.8.0")).toBe("^2.2.0");
  });

  it("strips prerelease from min when peer is stable", () => {
    expect(generatePeerRange("2.2.0-beta.18", "2.8.0")).toBe("^2.2.0");
  });

  it("throws for invalid peer version", () => {
    expect(() => generatePeerRange("2.0.0", "not-a-version")).toThrow(
      "Invalid currentPeerVersion",
    );
  });

  it("throws for invalid min version when peer is prerelease", () => {
    expect(() => generatePeerRange("not-a-version", "2.8.0-beta.12")).toThrow(
      "Invalid minVersion",
    );
  });
});
