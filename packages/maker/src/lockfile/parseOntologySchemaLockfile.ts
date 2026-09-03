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

import { z } from "zod";

import type {
  InterfaceSchemaGracePeriod,
  InterfaceSchemaMigrationInstruction,
} from "../api/interface/InterfaceSchemaMigrations.js";
import { isCanonicalIsoUtcDatetime } from "../api/interface/validateInterfaceSchemaMigrations.js";
import type { LockedPropertyType } from "./LockedPropertyType.js";
import type { OntologySchemaLockfile } from "./OntologySchemaLockfile.js";
import {
  LOCKFILE_HEADER_KEY,
  ONTOLOGY_SCHEMA_LOCKFILE_VERSION,
} from "./OntologySchemaLockfile.js";

/** Rewrites a lockfile written by the version it is keyed under into the next version's shape. */
type LockfileUpgrader = (lockfile: OldLockfile) => OldLockfile;

/** A lockfile mid-upgrade: known to have a version, not yet known to have anything else. */
type OldLockfile = { version: number } & Record<string, unknown>;

/**
 * Upgraders keyed by the version they read, applied in ascending order until the lockfile reaches
 * {@link ONTOLOGY_SCHEMA_LOCKFILE_VERSION}.
 */
const UPGRADERS: Readonly<Record<number, LockfileUpgrader>> = {};

const DEADLINE_MESSAGE =
  `Expected an ISO-8601 UTC datetime (e.g. "2026-01-31T00:00:00Z"). Restore the deadline the last ` +
  `published release declared.`;
const TRANSITION_ID_MESSAGE = `Expected a non-empty transition id. Restore the id the last published release declared.`;
const INSTRUCTIONS_MESSAGE =
  `Expected a non-empty array of instructions. A migration that instructs nothing cannot be ` +
  `finalized or deleted; remove the migration, or restore the instructions the last published ` +
  `release declared.`;

/**
 * Appends repair advice to whatever zod would have said. Used where zod's own wording is worth
 * keeping (e.g. a discriminated union names the variants it knows).
 */
function appendRestoreAdviceFor(what: string): { errorMap: z.ZodErrorMap } {
  return {
    errorMap: (_issue, ctx) => ({
      message: `${ctx.defaultError}. Restore the ${what} the last published release declared.`,
    }),
  };
}

const gracePeriodSchema = z.discriminatedUnion(
  "type",
  [
    z
      .object({
        type: z.literal("afterInstall"),
        days: z.number({
          message:
            `Expected a number of days. Restore the number of days the last published release ` +
            `declared.`,
        }),
      })
      .passthrough(),
    z
      .object({
        type: z.literal("deadline"),
        deadline: z
          .string({ message: DEADLINE_MESSAGE })
          .refine(isCanonicalIsoUtcDatetime, { message: DEADLINE_MESSAGE }),
      })
      .passthrough(),
  ],
  appendRestoreAdviceFor("grace period"),
);

const instructionSchema = z.discriminatedUnion(
  "type",
  [
    z
      .object({
        type: z.literal("addRequiredProperty"),
        property: z.string({
          message: "Expected the api name of the property to require.",
        }),
      })
      .passthrough(),
  ],
  appendRestoreAdviceFor("instruction"),
);

const transitionSchema = z
  .object(
    {
      id: z
        .string({ message: TRANSITION_ID_MESSAGE })
        .min(1, { message: TRANSITION_ID_MESSAGE }),
      gracePeriod: gracePeriodSchema,
      instructions: z
        .array(instructionSchema, { message: INSTRUCTIONS_MESSAGE })
        .nonempty({ message: INSTRUCTIONS_MESSAGE }),
    },
    { message: "Expected an object recording a schema migration." },
  )
  .passthrough();

const propertySchema = z
  .object(
    {
      // `PropertyTypeType` mirrors conjure-generated bindings that are regenerated upstream, so the
      // parser asserts only that a type was recorded.
      type: z.custom<LockedPropertyType>((type) => type != null, {
        message: `Expected a recorded property type. Restore the type the last published release declared.`,
      }),
      required: z.boolean({ message: "Expected a boolean." }),
    },
    {
      message:
        "Expected an object recording the property's locked type and whether it is required.",
    },
  )
  .passthrough();

const interfaceSchema = z
  .object(
    {
      schema: z
        .object(
          {
            properties: z.record(z.string(), propertySchema, {
              message: "Expected an object keyed by property api name.",
            }),
          },
          { message: 'Expected an object with a "properties" key.' },
        )
        .passthrough(),
      transitions: z.array(transitionSchema, {
        message: "Expected an array of in-flight schema migrations.",
      }),
    },
    {
      message:
        "Expected an object recording the interface's locked schema and transitions.",
    },
  )
  .passthrough();

/**
 * The shape everything downstream of the parser relies on. Lockfiles are checked in, and therefore
 * hand-editable, so it cannot be assumed.
 *
 * Three things this schema is deliberately not:
 *
 * - **Semantic.** The checks are purely structural, since a newer maker may validate semantics that
 *   were not true (or necessary) when this lockfile version was written.
 * - **Strict.** Every object passes unknown keys through. Reconcile decides a lockfile is out of
 *   date by comparing it against a freshly generated one, so a key an author added by hand has to
 *   survive parsing in order to be reported as a difference rather than silently dropped.
 * - **Silent.** Each node carries the message an author should see when it rejects something, so
 *   the wording lives next to the check rather than in a renderer that has to work out where in
 *   the file the failure came from.
 */
const lockfileSchema = z
  .object({
    version: z.number().int(),
    interfaces: z.record(z.string(), interfaceSchema, {
      message: "Expected an object keyed by interface api name.",
    }),
  })
  .passthrough();

/**
 * `true` when `Parsed` accepts every variant of the union `Declared`, otherwise `never`.
 *
 * Used to ensure our zod discriminated unions are exhaustive over the real types.
 */
type CoversEveryVariant<
  Declared extends { type: string },
  Parsed extends { type: string },
> = [Declared["type"]] extends [Parsed["type"]] ? true : never;

// Exhaustiveness checks
const _COVERS_EVERY_GRACE_PERIOD: CoversEveryVariant<
  InterfaceSchemaGracePeriod,
  z.infer<typeof gracePeriodSchema>
> = true;
const _COVERS_EVERY_INSTRUCTION: CoversEveryVariant<
  InterfaceSchemaMigrationInstruction,
  z.infer<typeof instructionSchema>
> = true;

export function parseLockfile(
  contents: string,
  lockfilePath: string,
): OntologySchemaLockfile {
  let parsed: unknown;
  try {
    parsed = JSON.parse(contents);
  } catch (e) {
    throw new Error(
      `${lockfilePath} is not valid JSON: ${(e as Error).message}`,
      { cause: e },
    );
  }

  const versioned = requireVersion(parsed, lockfilePath);
  const upgraded = upgradeLockfile(
    withoutHeader(versioned),
    ONTOLOGY_SCHEMA_LOCKFILE_VERSION,
    UPGRADERS,
    lockfilePath,
  );

  const result = lockfileSchema.safeParse(upgraded);
  if (!result.success) {
    throw new Error(
      `${lockfilePath} is not a valid ontology schema lockfile:\n` +
        result.error.issues
          .map((issue) => `  ${formatPath(issue.path)}: ${issue.message}`)
          .join("\n"),
      { cause: result.error },
    );
  }
  return result.data;
}

function requireVersion(parsed: unknown, lockfilePath: string): OldLockfile {
  const version = (parsed as Partial<OntologySchemaLockfile> | undefined)
    ?.version;
  if (typeof version !== "number" || !Number.isInteger(version)) {
    throw new Error(
      `${lockfilePath} is not an ontology schema lockfile: expected an integer "version" key.`,
    );
  }

  if (version > ONTOLOGY_SCHEMA_LOCKFILE_VERSION) {
    throw new Error(
      `${lockfilePath} has version ${version}, but this version of maker only understands ` +
        `version ${ONTOLOGY_SCHEMA_LOCKFILE_VERSION}. Upgrade @osdk/maker.`,
    );
  }

  return parsed as OldLockfile;
}

/** Drops the header `serializeLockfile` writes. */
function withoutHeader(lockfile: OldLockfile): OldLockfile {
  const { [LOCKFILE_HEADER_KEY]: _header, ...rest } = lockfile;
  return rest;
}

/**
 * Brings an older lockfile up to `targetVersion` by applying each intervening upgrader in turn.
 *
 * @internal
 */
export function upgradeLockfile(
  lockfile: OldLockfile,
  targetVersion: number,
  upgraders: Readonly<Record<number, LockfileUpgrader>>,
  lockfilePath: string,
): OldLockfile {
  let upgraded = lockfile;
  while (upgraded.version < targetVersion) {
    const upgrade = upgraders[upgraded.version];
    if (upgrade === undefined) {
      throw new Error(
        `${lockfilePath} has version ${upgraded.version}, which this version of maker cannot ` +
          `upgrade to version ${targetVersion}. Delete the lockfile and regenerate it.`,
      );
    }

    const next = upgrade(upgraded);
    if (next.version <= upgraded.version) {
      throw new Error(
        `The lockfile upgrader for version ${upgraded.version} did not advance the version.`,
      );
    }
    upgraded = next;
  }
  return upgraded;
}

/** `["interfaces", "Person", "transitions", 0, "id"]` -> `interfaces.Person.transitions[0].id`. */
function formatPath(path: ReadonlyArray<string | number>): string {
  return path
    .map((key, index) => {
      if (typeof key === "number") {
        return `[${key}]`;
      }
      return index === 0 ? key : `.${key}`;
    })
    .join("");
}
