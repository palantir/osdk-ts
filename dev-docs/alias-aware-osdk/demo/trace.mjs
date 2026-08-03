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

// MUST BE THE FIRST IMPORT, for two independent reasons:
//
//  1. This is the entrypoint that installs the ALIASES_JSON_FILE / RESOURCES_JSON_FILE
//     layers into the shared registry. The default entrypoint deliberately omits them so
//     `node:fs` stays out of browser bundles, which means that without this line the env
//     var is a *silent no-op* and the run looks exactly like the packaged case.
//  2. OntologyMetadata.ts resolves `$ontologyRid` eagerly at module init, so the layer has
//     to be installed before the generated SDK is evaluated.
import "../../../packages/aliases/build/esm/public/node.js";

import {
  $branch,
  $ontologyRid,
  addOne,
  editTodo,
  FooInterface,
  Todo,
} from "../../../packages/client.test.ontology/build/esm/index.js";
import { createClient } from "../../../packages/client/build/esm/index.js";
import {
  LegacyFauxFoundry,
  recordRequests,
  startNodeApiServer,
} from "../../../packages/shared.test/build/esm/index.js";

// Guard against the one failure mode that looks like success on camera: if the
// `@osdk/aliases/node` import above is missing or ran too late, ALIASES_JSON_FILE is
// silently ignored and the run is indistinguishable from the packaged case.
if (process.env.ALIASES_JSON_FILE != null) {
  const { readFileSync } = await import("node:fs");
  const wanted = Object.values(
    JSON.parse(readFileSync(process.env.ALIASES_JSON_FILE, "utf-8"))
      .defaults.ontologies,
  )[0].id.rid;
  if ($ontologyRid !== wanted) {
    throw new Error(
      `ALIASES_JSON_FILE was not applied: $ontologyRid is "${$ontologyRid}" but the file `
        + `says "${wanted}". The "@osdk/aliases/node" import must be evaluated before the `
        + `generated SDK.`,
    );
  }
}

const { apiServer, client } = startNodeApiServer(
  new LegacyFauxFoundry(),
  createClient,
);
const recorder = recordRequests(apiServer);

// Each call is allowed to fail. The recorder captures at `request:start`, so the outgoing
// request lands on the trace either way -- and under a remapped file the mock server,
// which only knows the source names, is *supposed* to reject it.
const attempt = async (fn) => {
  try {
    await fn();
  } catch {}
};

// THE boundary frame. One request body carrying the object type (Tier 1, aliased), the
// `where` field and the `select` entry (Tier 2, NOT aliased).
await attempt(() =>
  client(Todo)
    .where({ text: { $eq: "hello" } })
    .fetchPage({ $select: ["text"] })
);
await attempt(() => client(FooInterface).fetchPage());
// The action and query names reach the wire on their metadata reads first, so those GETs
// are deliberately left in the trace.
await attempt(() => client(editTodo).applyAction({ id: 1, text: "hi" }));
await attempt(() => client(addOne).executeFunction({ n: 2 }));

apiServer.close();

// ---------------------------------------------------------------------------------------
// Digest: every ontology name this process actually put on the wire, tagged with the tier
// that is supposed to alias it. Diffing two of these is the whole demo.
// ---------------------------------------------------------------------------------------

const seen = new Map(); // "tier kind" -> Set of names

const note = (tier, kind, name) => {
  if (name == null) return;
  const key = `tier${tier} ${kind}`;
  (seen.get(key) ?? seen.set(key, new Set()).get(key)).add(name);
};

/** Walks a request body for the keys that carry ontology names. */
const walk = (node) => {
  if (Array.isArray(node)) return node.forEach(walk);
  if (node === null || typeof node !== "object") return;
  for (const [k, v] of Object.entries(node)) {
    if (k === "objectType" && typeof v === "string") note(1, "object", v);
    else if (k === "interfaceType" && typeof v === "string") {
      note(1, "interface", v);
    } else if (k === "field" && typeof v === "string") note(2, "property", v);
    else if (k === "apiName" && typeof v === "string") note(2, "property", v);
    else walk(v);
  }
};

// Object and interface names are taken from request *bodies* only. Their metadata GETs
// would also carry them, but a metadata read fans out to implementing/related types and
// the extra names differ between runs purely because a 404 stops the fan-out early. Action
// and query names have no body to read them from, so those come from the path.
const PATH_PATTERNS = [
  [/\/action(?:Type)?s\/([^/?]+)/, 1, "action"],
  [/\/quer(?:yType|ie)s\/([^/?]+)/, 1, "query"],
];

note(1, "ontology", $ontologyRid);
note(1, "branch", $branch ?? "(none)");

for (const { path, body } of recorder.requests) {
  for (const [re, tier, kind] of PATH_PATTERNS) {
    const m = re.exec(path);
    if (m) note(tier, kind, decodeURIComponent(m[1]));
  }
  const version = new URL(path, "http://x").searchParams.get("version");
  if (version != null) note(1, "queryVersion", version);
  walk(body);
}

console.log(`alias file : ${process.env.ALIASES_JSON_FILE ?? "(unset)"}`);
console.log("");
for (const key of [...seen.keys()].sort()) {
  console.log(`${key.padEnd(20)} ${[...seen.get(key)].sort().join(", ")}`);
}

if (process.env.TRACE_RAW === "1") {
  // The ontology RID is long and it is one of the things that changes, so it is collapsed
  // in the paths and reported in the digest instead. Everything else is verbatim.
  const ONTOLOGY_PREFIX = /\/api\/v2\/ontologies\/[^/]+/g;
  console.log("");
  for (const { method, path, body } of recorder.requests) {
    console.log(`${method} ${path.replace(ONTOLOGY_PREFIX, "{ontology}")}`);
    if (body !== undefined) console.log(`  ${JSON.stringify(body)}`);
  }
}
