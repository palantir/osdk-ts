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

import { afterEach, expect, test, vi } from "vitest";
import { consola } from "../consola.js";
import { promptOntologyAndOsdkPackageAndOsdkRegistryUrl } from "./promptOntologyAndOsdkPackageAndOsdkRegistryUrl.js";

vi.mock("../consola.js");

afterEach(() => {
  vi.restoreAllMocks();
});

const VALID_ONTOLOGY = "ri.ontology.main.ontology.fake";
const VALID_OSDK_PACKAGE = "@myapp/sdk";
const VALID_OSDK_REGISTRY_URL =
  "https://example.palantirfoundry.com/artifacts/api/repositories/ri.artifacts.main.repository.fake/contents/release/npm";

test("it skips prompting osdk package and ontology and osdk registry url if told no osdk", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce("no");
  expect(
    await promptOntologyAndOsdkPackageAndOsdkRegistryUrl({ sdkVersion: "2.x" }),
  ).toEqual({});
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(1);
});

test("it does not prompt osdk question if sdk version is 1.x", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce(VALID_ONTOLOGY);
  vi.mocked(consola).prompt.mockResolvedValueOnce(VALID_OSDK_PACKAGE);
  vi.mocked(consola).prompt.mockResolvedValueOnce(VALID_OSDK_REGISTRY_URL);
  expect(
    await promptOntologyAndOsdkPackageAndOsdkRegistryUrl({ sdkVersion: "1.x" }),
  ).toEqual({
    ontology: VALID_ONTOLOGY,
    osdkPackage: VALID_OSDK_PACKAGE,
    osdkRegistryUrl: VALID_OSDK_REGISTRY_URL,
  });
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(3);
});

test("it accepts valid osdk package and ontology and osdk registry url from prompt", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce("yes");
  vi.mocked(consola).prompt.mockResolvedValueOnce(VALID_ONTOLOGY);
  vi.mocked(consola).prompt.mockResolvedValueOnce(VALID_OSDK_PACKAGE);
  vi.mocked(consola).prompt.mockResolvedValueOnce(VALID_OSDK_REGISTRY_URL);
  expect(
    await promptOntologyAndOsdkPackageAndOsdkRegistryUrl({
      skipOsdk: false,
      sdkVersion: "2.x",
    }),
  ).toEqual({
    osdkPackage: VALID_OSDK_PACKAGE,
    ontology: VALID_ONTOLOGY,
    osdkRegistryUrl: VALID_OSDK_REGISTRY_URL,
  });
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(4);
});

test("it prompts again if answered value is invalid", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce("yes");
  vi.mocked(consola).prompt.mockResolvedValueOnce("ri.something.else.and.fake");
  vi.mocked(consola).prompt.mockResolvedValueOnce(VALID_ONTOLOGY);
  vi.mocked(consola).prompt.mockResolvedValueOnce("some-package");
  vi.mocked(consola).prompt.mockResolvedValueOnce("@some/package");
  vi.mocked(consola).prompt.mockResolvedValueOnce(VALID_OSDK_PACKAGE);
  vi.mocked(consola).prompt.mockResolvedValueOnce("invalid");
  vi.mocked(consola).prompt.mockResolvedValueOnce("https://abc.com/something");
  vi.mocked(consola).prompt.mockResolvedValueOnce(VALID_OSDK_REGISTRY_URL);
  expect(
    await promptOntologyAndOsdkPackageAndOsdkRegistryUrl({ sdkVersion: "2.x" }),
  ).toEqual({
    ontology: VALID_ONTOLOGY,
    osdkPackage: VALID_OSDK_PACKAGE,
    osdkRegistryUrl: VALID_OSDK_REGISTRY_URL,
  });
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(9);
});

test("it accepts valid initial values without prompt", async () => {
  expect(
    await promptOntologyAndOsdkPackageAndOsdkRegistryUrl({
      ontology: VALID_ONTOLOGY,
      osdkPackage: VALID_OSDK_PACKAGE,
      osdkRegistryUrl: VALID_OSDK_REGISTRY_URL,
      sdkVersion: "2.x",
    }),
  ).toEqual(
    {
      ontology: VALID_ONTOLOGY,
      osdkPackage: VALID_OSDK_PACKAGE,
      osdkRegistryUrl: VALID_OSDK_REGISTRY_URL,
    },
  );
  expect(vi.mocked(consola).prompt).not.toHaveBeenCalled();
});

test("it accepts osdk package valid initial value without prompt", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce(VALID_ONTOLOGY);
  vi.mocked(consola).prompt.mockResolvedValueOnce(VALID_OSDK_REGISTRY_URL);
  expect(
    await promptOntologyAndOsdkPackageAndOsdkRegistryUrl({
      osdkPackage: VALID_OSDK_PACKAGE,
      sdkVersion: "2.x",
    }),
  ).toEqual(
    {
      ontology: VALID_ONTOLOGY,
      osdkPackage: VALID_OSDK_PACKAGE,
      osdkRegistryUrl: VALID_OSDK_REGISTRY_URL,
    },
  );
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(2);
});

test("it accepts ontology valid initial value without prompt", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce(VALID_OSDK_PACKAGE);
  vi.mocked(consola).prompt.mockResolvedValueOnce(VALID_OSDK_REGISTRY_URL);
  expect(
    await promptOntologyAndOsdkPackageAndOsdkRegistryUrl({
      ontology: VALID_ONTOLOGY,
      sdkVersion: "2.x",
    }),
  ).toEqual(
    {
      ontology: VALID_ONTOLOGY,
      osdkPackage: VALID_OSDK_PACKAGE,
      osdkRegistryUrl: VALID_OSDK_REGISTRY_URL,
    },
  );
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(2);
});

test("it accepts osdk registry url valid initial value without prompt", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce(VALID_ONTOLOGY);
  vi.mocked(consola).prompt.mockResolvedValueOnce(VALID_OSDK_PACKAGE);
  expect(
    await promptOntologyAndOsdkPackageAndOsdkRegistryUrl({
      osdkRegistryUrl: VALID_OSDK_REGISTRY_URL,
      sdkVersion: "2.x",
    }),
  ).toEqual(
    {
      ontology: VALID_ONTOLOGY,
      osdkPackage: VALID_OSDK_PACKAGE,
      osdkRegistryUrl: VALID_OSDK_REGISTRY_URL,
    },
  );
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(2);
});

test("it prompts ontology if initial value is invalid", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce(VALID_ONTOLOGY);
  expect(
    await promptOntologyAndOsdkPackageAndOsdkRegistryUrl({
      ontology: "ri.something.else.and.fake",
      osdkPackage: VALID_OSDK_PACKAGE,
      osdkRegistryUrl: VALID_OSDK_REGISTRY_URL,
      sdkVersion: "2.x",
    }),
  ).toEqual({
    ontology: VALID_ONTOLOGY,
    osdkPackage: VALID_OSDK_PACKAGE,
    osdkRegistryUrl: VALID_OSDK_REGISTRY_URL,
  });
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(1);
});

test("it prompts osdk package if initial value is invalid", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce(VALID_OSDK_PACKAGE);
  expect(
    await promptOntologyAndOsdkPackageAndOsdkRegistryUrl({
      ontology: VALID_ONTOLOGY,
      osdkPackage: "some-package",
      osdkRegistryUrl: VALID_OSDK_REGISTRY_URL,
      sdkVersion: "2.x",
    }),
  ).toEqual(
    {
      osdkPackage: VALID_OSDK_PACKAGE,
      ontology: VALID_ONTOLOGY,
      osdkRegistryUrl: VALID_OSDK_REGISTRY_URL,
    },
  );
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(1);
});

test("it prompts osdk registry url if initial value is invalid", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce(VALID_OSDK_REGISTRY_URL);
  expect(
    await promptOntologyAndOsdkPackageAndOsdkRegistryUrl({
      ontology: VALID_ONTOLOGY,
      osdkPackage: VALID_OSDK_PACKAGE,
      osdkRegistryUrl: "invalid",
      sdkVersion: "2.x",
    }),
  ).toEqual(
    {
      ontology: VALID_ONTOLOGY,
      osdkPackage: VALID_OSDK_PACKAGE,
      osdkRegistryUrl: VALID_OSDK_REGISTRY_URL,
    },
  );
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(1);
});

test("it strips trailing slash from osdk registry url", async () => {
  expect(
    await promptOntologyAndOsdkPackageAndOsdkRegistryUrl({
      ontology: VALID_ONTOLOGY,
      osdkPackage: VALID_OSDK_PACKAGE,
      osdkRegistryUrl: VALID_OSDK_REGISTRY_URL + "/",
      sdkVersion: "2.x",
    }),
  ).toEqual(
    {
      ontology: VALID_ONTOLOGY,
      osdkPackage: VALID_OSDK_PACKAGE,
      osdkRegistryUrl: VALID_OSDK_REGISTRY_URL,
    },
  );
  expect(vi.mocked(consola).prompt).not.toHaveBeenCalled();
});

test("it skips prompting completely if told to", async () => {
  expect(
    await promptOntologyAndOsdkPackageAndOsdkRegistryUrl({
      skipOsdk: true,
      sdkVersion: "2.x",
    }),
  ).toEqual({});
  expect(vi.mocked(consola).prompt).not.toHaveBeenCalled();
});
