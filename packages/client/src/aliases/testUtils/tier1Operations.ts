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

import type * as TestOntologyModule from "@osdk/client.test.ontology";

import type { Client } from "../../Client.js";

/**
 * The generated SDK is loaded with a dynamic `import()` so that each mode gets a fresh
 * module graph, which means the suite can only see its shape, not its identity.
 */
export type TestOntologySdk = typeof TestOntologyModule;

export interface OperationFailure {
  operation: string;
  error: string;
}

/**
 * Runs one operation per Tier 1 resolver site that shows up on the wire:
 *
 * | operation                | resolver sites exercised                             |
 * | ------------------------ | ---------------------------------------------------- |
 * | object fetch by pk       | `$resolveOntologyRid`, `$resolveOntologyBranch`, `$resolveObjectType` |
 * | `where` + `$select`      | `$resolveObjectType`, and the properties Tier 1 leaves alone |
 * | link traversal           | the links Tier 1 leaves alone                        |
 * | action apply             | `$resolveAction`                                     |
 * | query execute            | `$resolveQuery`, `$resolveQueryVersion`              |
 * | interface object set     | `$resolveInterfaceType`                              |
 *
 * Each operation is isolated so that one failure still leaves the rest of the trace
 * recorded -- a truncated trace would make a mode look like it diverged when it only
 * threw early.
 */
export async function runTier1Operations(
  client: Client,
  sdk: TestOntologySdk,
): Promise<OperationFailure[]> {
  const failures: OperationFailure[] = [];

  const run = async (
    operation: string,
    body: () => Promise<unknown>,
  ): Promise<void> => {
    try {
      await body();
    } catch (error) {
      failures.push({ operation, error: String(error) });
    }
  };

  await run("fetchOne", () => client(sdk.Employee).fetchOne(50030));

  await run("whereSelect", () =>
    client(sdk.Employee)
      .where({ startDate: { $gt: "2000-01-01" } })
      .fetchPage({ $select: ["fullName"] }),
  );

  await run("pivotTo", () =>
    client(sdk.Employee).pivotTo("lead").fetchPage({ $pageSize: 1 }),
  );

  await run("applyAction", () =>
    client(sdk.createOffice).applyAction({
      officeId: "NYC",
      address: "123 Main Street",
      capacity: 100,
    }),
  );

  await run("executeQuery", () => client(sdk.addOne).executeFunction({ n: 2 }));

  await run("interfaceFetchPage", () =>
    client(sdk.FooInterface).fetchPage({ $pageSize: 1 }),
  );

  return failures;
}
