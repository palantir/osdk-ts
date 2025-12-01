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
import { promptOsdkPackageAndOntology } from "./promptOsdkPackageAndOntology.js";

vi.mock("../consola.js");

afterEach(() => {
  vi.restoreAllMocks();
});

const VALID_ONTOLOGY_RID = "ri.ontology.main.ontology.fake";
const VALID_OSDK_PACKAGE = "@myapp/sdk";

test("it skips prompting osdk package and ontology if told no osdk", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce("no");
  expect(await promptOsdkPackageAndOntology({})).toEqual({});
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(1);
});

test("it accepts valid osdk package and ontology rid from prompt", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce("yes");
  vi.mocked(consola).prompt.mockResolvedValueOnce(VALID_OSDK_PACKAGE);
  vi.mocked(consola).prompt.mockResolvedValueOnce(VALID_ONTOLOGY_RID);
  expect(await promptOsdkPackageAndOntology({ skipOsdk: false })).toEqual({
    osdkPackage: VALID_OSDK_PACKAGE,
    ontologyRid: VALID_ONTOLOGY_RID,
  });
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(3);
});

test("it prompts again if answered value is invalid", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce("yes");
  vi.mocked(consola).prompt.mockResolvedValueOnce("some-package");
  vi.mocked(consola).prompt.mockResolvedValueOnce("@some/package");
  vi.mocked(consola).prompt.mockResolvedValueOnce(VALID_OSDK_PACKAGE);
  vi.mocked(consola).prompt.mockResolvedValueOnce("ri.something.else.and.fake");
  vi.mocked(consola).prompt.mockResolvedValueOnce(VALID_ONTOLOGY_RID);
  expect(await promptOsdkPackageAndOntology({})).toEqual({
    osdkPackage: VALID_OSDK_PACKAGE,
    ontologyRid: VALID_ONTOLOGY_RID,
  });
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(6);
});

test("it accepts valid initial values without prompt", async () => {
  expect(
    await promptOsdkPackageAndOntology({
      osdkPackage: VALID_OSDK_PACKAGE,
      ontology: VALID_ONTOLOGY_RID,
    }),
  ).toEqual(
    { osdkPackage: VALID_OSDK_PACKAGE, ontologyRid: VALID_ONTOLOGY_RID },
  );
  expect(vi.mocked(consola).prompt).not.toHaveBeenCalled();
});

test("it accepts osdk package valid initial value without prompt", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce(VALID_ONTOLOGY_RID);
  expect(
    await promptOsdkPackageAndOntology({ osdkPackage: VALID_OSDK_PACKAGE }),
  ).toEqual(
    { osdkPackage: VALID_OSDK_PACKAGE, ontologyRid: VALID_ONTOLOGY_RID },
  );
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(1);
});

test("it accepts ontology rid valid initial value without prompt", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce(VALID_OSDK_PACKAGE);
  expect(
    await promptOsdkPackageAndOntology({ ontology: VALID_ONTOLOGY_RID }),
  ).toEqual(
    { osdkPackage: VALID_OSDK_PACKAGE, ontologyRid: VALID_ONTOLOGY_RID },
  );
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(1);
});

test("it prompts ontology rid if initial value is invalid", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce(VALID_ONTOLOGY_RID);
  expect(
    await promptOsdkPackageAndOntology({
      osdkPackage: VALID_OSDK_PACKAGE,
      ontology: "ri.something.else.and.fake",
    }),
  ).toEqual({
    osdkPackage: VALID_OSDK_PACKAGE,
    ontologyRid: VALID_ONTOLOGY_RID,
  });
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(1);
});

test("it prompts if initial value is invalid", async () => {
  vi.mocked(consola).prompt.mockResolvedValueOnce(VALID_OSDK_PACKAGE);
  expect(
    await promptOsdkPackageAndOntology({
      osdkPackage: "some-package",
      ontology: VALID_ONTOLOGY_RID,
    }),
  ).toEqual(
    { osdkPackage: VALID_OSDK_PACKAGE, ontologyRid: VALID_ONTOLOGY_RID },
  );
  expect(vi.mocked(consola).prompt).toHaveBeenCalledTimes(1);
});

test("it skips prompting completely if told to", async () => {
  expect(await promptOsdkPackageAndOntology({ skipOsdk: true })).toEqual({});
  expect(vi.mocked(consola).prompt).not.toHaveBeenCalled();
});
