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

import * as fs from "node:fs/promises";
import * as os from "node:os";
import * as path from "node:path";

import { afterEach, beforeEach, vi } from "vitest";

import type { InterfaceTypeDefinition } from "../../api/defineInterface.js";
import { defineInterface } from "../../api/defineInterface.js";
import {
  defineOntology,
  getOntologyDefinition,
} from "../../api/defineOntology.js";
import type {
  InterfaceSchemaMigrations,
  InterfaceSchemaTransition,
} from "../../api/interface/InterfaceSchemaMigrations.js";
import type { OntologySchemaLockfile } from "../OntologySchemaLockfile.js";
import { DEFAULT_ONTOLOGY_SCHEMA_LOCKFILE_NAME } from "../OntologySchemaLockfile.js";
import { reconcileOntologySchemaLockfile } from "../reconcileOntologySchemaLockfile.js";

type AuthoredProperties = NonNullable<InterfaceTypeDefinition["properties"]>;

export const OPTIONAL_STRING = { type: "string", required: false } as const;
export const REQUIRED_STRING = { type: "string", required: true } as const;

export const requireLastName: InterfaceSchemaTransition = {
  id: "requireLastName",
  title: "Require last name",
  description: "Adding last name to better identify a person",
  gracePeriod: { type: "afterInstall", days: 30 },
  instructions: [{ type: "addRequiredProperty", property: "lastName" }],
};

export const requireEmail: InterfaceSchemaTransition = {
  id: "requireEmail",
  title: "Require email",
  gracePeriod: { type: "afterInstall", days: 30 },
  instructions: [{ type: "addRequiredProperty", property: "email" }],
};

/** One version of the `Person` interface, as it would appear in a release's `ontology.ts`. */
export function person(
  properties: AuthoredProperties,
  schemaMigrations?: InterfaceSchemaMigrations,
): () => void {
  return () => {
    defineInterface({
      apiName: "Person",
      displayName: "Person",
      properties,
      schemaMigrations,
    });
  };
}

// The successive states the RFC's worked example walks through.
export const notOptedIn = person({ firstName: REQUIRED_STRING });
export const optedIn = person(
  { firstName: REQUIRED_STRING },
  {
    transitions: [],
  },
);
export const lastNameInFlight = person(
  { firstName: REQUIRED_STRING, lastName: OPTIONAL_STRING },
  { transitions: [requireLastName] },
);
export const lastNameDeleted = person(
  { firstName: REQUIRED_STRING, lastName: OPTIONAL_STRING },
  { transitions: [] },
);
export const lastNameFinalized = person(
  { firstName: REQUIRED_STRING, lastName: REQUIRED_STRING },
  { transitions: [] },
);
export const emailInFlight = person(
  {
    firstName: REQUIRED_STRING,
    lastName: REQUIRED_STRING,
    email: OPTIONAL_STRING,
  },
  { transitions: [requireEmail] },
);
export const emailFinalized = person(
  {
    firstName: REQUIRED_STRING,
    lastName: REQUIRED_STRING,
    email: REQUIRED_STRING,
  },
  { transitions: [] },
);

export interface MakerOptions {
  writeLocks?: boolean;
  assumeYes?: boolean;
  namespace?: string;
}

export interface LockfileHarness {
  /** The lockfile for the release under test. Re-pointed at a fresh directory per test. */
  readonly lockfilePath: string;
  /** Runs the source through maker's pipeline, the way the CLI does. */
  maker: (body: () => void, options?: MakerOptions) => Promise<void>;
  /** Establishes the baseline lockfile that a previously published release would have left. */
  published: (body: () => void) => Promise<void>;
  readLockfile: () => Promise<OntologySchemaLockfile>;
  lockfileExists: () => Promise<boolean>;
}

/**
 * Registers the per-test temp directory the lockfile lives in, and returns the helpers that drive
 * maker against it.
 *
 * Call at describe scope: it installs its own `beforeEach`/`afterEach`.
 */
export function useLockfileHarness(): LockfileHarness {
  let lockfileDir: string;
  let lockfilePath: string;

  beforeEach(async () => {
    lockfileDir = await fs.mkdtemp(
      path.join(os.tmpdir(), "maker-schema-lock-"),
    );
    lockfilePath = path.join(
      lockfileDir,
      DEFAULT_ONTOLOGY_SCHEMA_LOCKFILE_NAME,
    );
  });

  afterEach(async () => {
    vi.restoreAllMocks();
    await fs.rm(lockfileDir, { recursive: true, force: true });
  });

  async function maker(
    body: () => void,
    options: MakerOptions = {},
  ): Promise<void> {
    await defineOntology(options.namespace ?? "", body, undefined);
    await reconcileOntologySchemaLockfile({
      ontology: getOntologyDefinition(),
      lockfilePath,
      writeLocks: options.writeLocks ?? false,
      assumeYes: options.assumeYes ?? true,
    });
  }

  return {
    get lockfilePath() {
      return lockfilePath;
    },
    maker,
    published: async (body) => await maker(body, { writeLocks: true }),
    readLockfile: async () =>
      JSON.parse(await fs.readFile(lockfilePath, "utf-8")),
    lockfileExists: async () =>
      await fs.access(lockfilePath).then(
        () => true,
        () => false,
      ),
  };
}
