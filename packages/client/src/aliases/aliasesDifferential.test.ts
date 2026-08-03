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

import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

import type { AliasesFile, ObjectTypeValue } from "@osdk/aliases";
import type { RecordedRequest } from "@osdk/shared.test";
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";

import { registerRemappedOntology } from "./testUtils/registerRemappedOntology.js";
import {
  deriveRemappedAliases,
  readPackagedAliases,
  REMAPPED_BRANCH_RID,
  REMAPPED_ONTOLOGY_RID,
  remappedMemberName,
  remappedTypeName,
} from "./testUtils/remapAliases.js";
import type {
  OperationFailure,
  TestOntologySdk,
} from "./testUtils/tier1Operations.js";
import { runTier1Operations } from "./testUtils/tier1Operations.js";
import type { WireNames } from "./testUtils/wireNames.js";
import { extractWireNames } from "./testUtils/wireNames.js";

const PACKAGED_ONTOLOGY_RID =
  "ri.ontology.main.ontology.698267cc-6b48-4d98-beff-29beb24e9361";

const tempDir = mkdtempSync(join(tmpdir(), "osdk-aliases-differential-"));

/**
 * Constants read straight off the generated SDK, as a second oracle alongside the trace.
 * Two of the eight Tier 1 resolver sites cannot be proven from a trace alone -- see
 * {@link ModeResult.resolved} usage in the assertions below -- so the suite reads them
 * here as well.
 */
interface ResolvedConstants {
  ontologyRid: string;
  branch: string | undefined;
  objectType: string;
  primaryKeyApiName: string;
  interfaceType: string;
  actionApiName: string;
  queryApiName: string;
  queryVersion: string;
}

interface ModeResult {
  requests: RecordedRequest[];
  resolved: ResolvedConstants;
  failures: OperationFailure[];
}

function writeAliasFile(name: string, aliases: AliasesFile): string {
  const path = join(tempDir, `${name}.json`);
  // Written with plain JSON rather than serializeAliasesFile so that the file the test
  // installs is not produced by the same code path the runtime uses to read it.
  writeFileSync(path, JSON.stringify(aliases, null, 2));
  return path;
}

/**
 * Runs the Tier 1 operations against a faux Foundry with `ALIASES_JSON_FILE` either unset
 * or pointing at `aliasFilePath`.
 *
 * The module graph is reset first and everything the mode needs is then pulled in with
 * dynamic `import()`. That ordering is load bearing twice over: `@osdk/aliases` only
 * installs the environment layer loader when its `./node` entrypoint is evaluated, and
 * the generated SDK resolves `$ontologyRid` / `$branch` eagerly at module init. An
 * ordinary static import at the top of this file would pin both to whatever the first
 * mode saw and every mode would then agree for the wrong reason.
 */
async function runMode({
  aliasFile,
  targetOntology,
}: {
  aliasFile: string | undefined;
  targetOntology: "source" | "remapped";
}): Promise<ModeResult> {
  vi.resetModules();
  if (aliasFile === undefined) {
    delete process.env["ALIASES_JSON_FILE"];
  } else {
    process.env["ALIASES_JSON_FILE"] = aliasFile;
  }

  await import("@osdk/aliases/node");
  const sdk: TestOntologySdk = await import("@osdk/client.test.ontology");
  const { createClient } = await import("../createClient.js");
  const { LegacyFauxFoundry, recordRequests, startNodeApiServer } =
    await import("@osdk/shared.test");

  const fauxFoundry = new LegacyFauxFoundry();
  if (targetOntology === "remapped") {
    registerRemappedOntology(fauxFoundry);
  }

  const { apiServer, auth } = startNodeApiServer(fauxFoundry);
  const recorder = recordRequests(apiServer);
  try {
    const client = createClient(
      fauxFoundry.baseUrl,
      sdk.$ontologyRid,
      auth,
      sdk.$branch === undefined
        ? undefined
        : { UNSTABLE_DO_NOT_USE_BRANCH: sdk.$branch },
    );

    const failures = await runTier1Operations(client, sdk);

    return {
      requests: recorder.requests.map((r) => ({ ...r })),
      failures,
      resolved: {
        ontologyRid: sdk.$ontologyRid,
        branch: sdk.$branch,
        objectType: sdk.Employee.apiName,
        primaryKeyApiName: sdk.Employee.primaryKeyApiName,
        interfaceType: sdk.FooInterface.apiName,
        actionApiName: sdk.createOffice.unsanitizedApiName ?? "<undefined>",
        queryApiName: sdk.addOne.apiName,
        queryVersion: sdk.addOne.version,
      },
    };
  } finally {
    recorder.stop();
    apiServer.close();
  }
}

describe("alias-aware OSDK differential suite", () => {
  afterEach(() => {
    delete process.env["ALIASES_JSON_FILE"];
  });

  describe("preconditions", () => {
    // If ALIASES_JSON_FILE were silently ignored, every mode below would degrade to
    // `packaged` and the whole suite would pass while proving nothing. These two tests
    // are the guard against exactly that, so they assert the layer is live *positively*
    // -- with a value that cannot possibly have come from the packaged defaults --
    // before any mode runs.
    it("resolves from the packaged defaults when ALIASES_JSON_FILE is unset", async () => {
      vi.resetModules();
      delete process.env["ALIASES_JSON_FILE"];
      await import("@osdk/aliases/node");
      const sdk: TestOntologySdk = await import("@osdk/client.test.ontology");

      expect(sdk.$ontologyRid).toBe(PACKAGED_ONTOLOGY_RID);
      expect(sdk.Employee.apiName).toBe("Employee");
      expect(sdk.Employee.primaryKeyApiName).toBe("employeeId");
      expect(sdk.$branch).toBeUndefined();
    });

    it("reads ALIASES_JSON_FILE and lets it win over the packaged defaults", async () => {
      const sentinel = structuredClone(readPackagedAliases());
      const ontology = sentinel.defaults.ontologies?.[PACKAGED_ONTOLOGY_RID];
      expect(ontology).toBeDefined();
      ontology!.id = { rid: "ri.SENTINEL.ontology" };
      const employee = sentinel.defaults.objects?.["Employee"];
      expect(employee).toBeDefined();
      employee!.apiName = "SENTINEL.Employee";

      vi.resetModules();
      process.env["ALIASES_JSON_FILE"] = writeAliasFile("sentinel", sentinel);
      await import("@osdk/aliases/node");
      const sdk: TestOntologySdk = await import("@osdk/client.test.ontology");

      expect(sdk.$ontologyRid).toBe("ri.SENTINEL.ontology");
      expect(sdk.Employee.apiName).toBe("SENTINEL.Employee");
    });
  });

  // The three modes only exercise the handful of definitions the operations touch, so a
  // literal that survived the getter rewrite on some other object type would go
  // unnoticed. This sweeps every definition the SDK exports with an alias file that
  // moves every single name, and reports the ones that did not move.
  it("resolves every exported definition, with no surviving literals", async () => {
    const sentinel = prefixEveryName(readPackagedAliases(), "SENTINEL.");

    vi.resetModules();
    process.env["ALIASES_JSON_FILE"] = writeAliasFile("sweep", sentinel);
    await import("@osdk/aliases/node");
    const sdk: TestOntologySdk = await import("@osdk/client.test.ontology");

    const offenders: string[] = [];
    let swept = 0;
    for (const [exportName, value] of Object.entries(sdk)) {
      for (const [field, resolved] of definitionNames(value)) {
        swept++;
        if (resolved === undefined || !resolved.startsWith("SENTINEL.")) {
          offenders.push(`${exportName}.${field} = ${String(resolved)}`);
        }
      }
    }

    expect(offenders).toEqual([]);
    // Guards the sweep itself: if `definitionNames` stopped recognizing definitions it
    // would find no offenders and pass while checking nothing.
    expect(swept).toBeGreaterThanOrEqual(50);
  });

  describe("modes", () => {
    let packaged: ModeResult;
    let identity: ModeResult;
    let remapped: ModeResult;

    let packagedAliases: AliasesFile;
    let employeeAliases: ObjectTypeValue;

    beforeAll(async () => {
      packagedAliases = readPackagedAliases();
      const employee = packagedAliases.defaults.objects?.["Employee"];
      if (employee === undefined) {
        throw new Error("packaged aliases file has no Employee object type");
      }
      employeeAliases = employee;

      // `identity-override` installs the SDK's own packaged file through the
      // higher-precedence ALIASES_JSON_FILE layer. It is the genuine fixed point: the
      // bytes are the same, only the layer they arrive through differs.
      const identityPath = writeAliasFile("identity", packagedAliases);
      const remappedPath = writeAliasFile(
        "remapped",
        deriveRemappedAliases(packagedAliases),
      );

      packaged = await runMode({
        aliasFile: undefined,
        targetOntology: "source",
      });
      identity = await runMode({
        aliasFile: identityPath,
        targetOntology: "source",
      });
      remapped = await runMode({
        aliasFile: remappedPath,
        targetOntology: "remapped",
      });
    }, 60_000);

    it("completes every operation in every mode", () => {
      expect({
        packaged: packaged.failures,
        identity: identity.failures,
        remapped: remapped.failures,
      }).toEqual({ packaged: [], identity: [], remapped: [] });
    });

    // Feeding the SDK its own packaged defaults through the override layer must be a
    // no-op on the wire. What this catches is the *opposite* failure from the sweep
    // above: resolution that fires but returns something subtly different from the
    // literal it replaced -- a wrong lookup key, a layer that shadows the packaged one
    // with a partial file, a name that round-trips through the wrong normalizer. It
    // cannot catch a surviving literal (a literal is trivially identical across the two
    // modes); the sentinel sweep is what does that. Verified by negative control:
    // reverting one generated getter to a literal fails five tests in this file and
    // leaves this one passing.
    it("identity-override produces a byte-identical trace to packaged", () => {
      expect(identity.requests).toEqual(packaged.requests);
      expect(identity.resolved).toEqual(packaged.resolved);
    });

    it("packaged resolves to the source ontology", () => {
      expect(names(packaged)).toEqual({
        ontologyRids: [PACKAGED_ONTOLOGY_RID],
        branches: [],
        objectTypes: ["Employee"],
        interfaceTypes: ["FooInterface"],
        actions: ["createOffice"],
        queries: ["addOne"],
        queryVersions: ["0.0.9"],
        properties: ["employeeId", "fullName", "startDate"],
        links: ["lead"],
      } satisfies WireNames);
    });

    it("remapped sends the alias file's targets for every type-level name", () => {
      expect(names(remapped)).toEqual({
        ontologyRids: [REMAPPED_ONTOLOGY_RID],
        branches: [REMAPPED_BRANCH_RID],
        objectTypes: [remappedTypeName("Employee")],
        interfaceTypes: [remappedTypeName("FooInterface")],
        actions: [remappedTypeName("createOffice")],
        queries: [remappedTypeName("addOne")],
        queryVersions: ["0.0.10"],
        properties: ["employeeId", "fullName", "startDate"],
        links: ["lead"],
      } satisfies WireNames);
    });

    // Tier 1 deliberately does not call $resolveProperty / $resolveLink. The remapped
    // alias file *claims* every property and link was renamed, and this asserts that
    // claim does not reach the wire. When Tier 2 lands, this test is the one that should
    // fail and be rewritten.
    it("remapped leaves property and link names alone (the Tier 2 gap)", () => {
      const remappedNames = names(remapped);
      const claimed = [
        ...Object.keys(employeeAliases.properties),
        ...Object.keys(employeeAliases.links),
      ].map(remappedMemberName);

      const leaked = claimed.filter(
        (name) =>
          remappedNames.properties.includes(name) ||
          remappedNames.links.includes(name),
      );

      expect(leaked).toEqual([]);
      expect(remappedNames.properties).toContain("fullName");
      expect(remappedNames.properties).toContain("startDate");
      expect(remappedNames.links).toEqual(["lead"]);
    });

    // $resolvePrimaryKey is the one Tier 1 site with no trace signature at all. It really
    // does run -- the generated constant below carries the remapped name -- but every
    // runtime read of the primary key goes through fetched server metadata instead
    // (createObjectSet.ts: `objDef.primaryKeyApiName`, and five more sites), so the
    // resolved value can never reach the wire. The remapped ontology deliberately keeps
    // the server-side primary key at `employeeId` so this is a real observation rather
    // than an assumption: the alias file says `employeeId_remapped`, the constant says
    // `employeeId_remapped`, and the request body still says `employeeId`.
    it("resolves the primary key into the generated definition but never sends it", () => {
      expect(packaged.resolved.primaryKeyApiName).toBe("employeeId");
      expect(remapped.resolved.primaryKeyApiName).toBe(
        remappedMemberName("employeeId"),
      );

      expect(names(remapped).properties).toContain("employeeId");
      expect(names(remapped).properties).not.toContain(
        remappedMemberName("employeeId"),
      );
    });

    it("resolves every generated constant through the alias file", () => {
      expect(remapped.resolved).toEqual({
        ontologyRid: REMAPPED_ONTOLOGY_RID,
        branch: REMAPPED_BRANCH_RID,
        objectType: remappedTypeName("Employee"),
        primaryKeyApiName: remappedMemberName("employeeId"),
        interfaceType: remappedTypeName("FooInterface"),
        actionApiName: remappedTypeName("createOffice"),
        queryApiName: remappedTypeName("addOne"),
        queryVersion: "0.0.10",
      } satisfies ResolvedConstants);
    });

    // Snapshots of the raw traces, so that a change in *shape* -- a new request, a
    // dropped parameter -- is visible even where no assertion above names it.
    it("records a stable packaged trace", () => {
      expect(traceShape(packaged)).toMatchSnapshot();
    });

    it("records a stable remapped trace", () => {
      expect(traceShape(remapped)).toMatchSnapshot();
    });
  });
});

/**
 * The name-carrying fields of a generated definition, or nothing if `value` is not one.
 * Reading them goes through the generated getters, which is the point.
 */
function definitionNames(value: unknown): Array<[string, string | undefined]> {
  if (typeof value !== "object" || value == null) return [];
  const definition = value as Record<string, unknown>;
  const read = (field: string): [string, string | undefined] => {
    const raw = definition[field];
    return [field, typeof raw === "string" ? raw : undefined];
  };

  switch (definition["type"]) {
    case "object":
      return [read("apiName"), read("primaryKeyApiName")];
    case "interface":
      return [read("apiName")];
    case "action":
      // `apiName` on an action definition is the *sanitized* TypeScript identifier and
      // stays literal by design; `unsanitizedApiName` is what goes on the wire.
      return [read("unsanitizedApiName")];
    case "query":
      return [read("apiName")];
    default:
      return [];
  }
}

/** Moves every name in the file, so anything that did not move is a surviving literal. */
function prefixEveryName(aliases: AliasesFile, prefix: string): AliasesFile {
  const out = structuredClone(aliases);
  const d = out.defaults;

  for (const object of Object.values(d.objects ?? {})) {
    object.apiName = prefix + object.apiName;
    object.primaryKeyApiName = prefix + object.primaryKeyApiName;
    for (const property of Object.values(object.properties)) {
      property.apiName = prefix + property.apiName;
    }
    for (const link of Object.values(object.links)) {
      link.apiName = prefix + link.apiName;
    }
  }
  for (const iface of Object.values(d.interfaces ?? {})) {
    iface.apiName = prefix + iface.apiName;
  }
  for (const action of Object.values(d.actions ?? {})) {
    action.apiName = prefix + action.apiName;
  }
  for (const query of Object.values(d.queries ?? {})) {
    query.apiName = prefix + query.apiName;
  }

  return out;
}

function names(result: ModeResult): WireNames {
  return extractWireNames(result.requests);
}

function traceShape(result: ModeResult): Array<{
  method: string;
  path: string;
  body: unknown;
}> {
  return result.requests.map(({ method, path, body }) => ({
    method,
    path,
    body,
  }));
}
