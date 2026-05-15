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

import type {
  ActionV2Def,
  FinalizedTypes,
  InterfaceV2Def,
  LinkV2Def,
  ObjectV2Def,
} from "@osdk/maker";
import { finalizeTypes, initializeOntologyState } from "@osdk/maker";
import type { OntologyV2Result } from "./defineOntologyV2.js";
import { runOacPipeline } from "./runOacPipeline.js";

const RESERVED_KEY = "_oac";

export interface OacOntologyBundle<
  O extends Record<string, ObjectV2Def>,
  L extends readonly LinkV2Def[],
  A extends Record<string, ActionV2Def>,
  I extends Record<string, InterfaceV2Def> = {},
> {
  objects: O;
  links: L;
  actions: A;
  interfaces?: I;
}

export interface OacOntologyConfig<
  NS extends string,
  O extends Record<string, ObjectV2Def>,
  L extends readonly LinkV2Def[],
  A extends Record<string, ActionV2Def>,
  I extends Record<string, InterfaceV2Def> = {},
> {
  namespace: NS;
  build: () =>
    | OacOntologyBundle<O, L, A, I>
    | Promise<OacOntologyBundle<O, L, A, I>>;
  functionsIrFile?: string;
  randomnessKey?: string;
}

export type OacOntology<
  O extends Record<string, ObjectV2Def>,
  L extends readonly LinkV2Def[],
  A extends Record<string, ActionV2Def>,
  NS extends string,
  I extends Record<string, InterfaceV2Def> = {},
> =
  & FinalizedTypes<O, L, A, NS, I>
  & {
    readonly _oac: OntologyV2Result;
  };

/**
 * Define a complete OAC ontology in one call. Returns OSDK-typed object
 * and action values usable directly with `client(...)`, plus `_oac` —
 * carrying the IR consumed by `vite-plugin-oac`. `_oac` is a reserved key;
 * the function throws if a user object or action is named `_oac`.
 */
export async function defineOacOntology<
  const O extends Record<string, ObjectV2Def>,
  const L extends readonly LinkV2Def[],
  const A extends Record<string, ActionV2Def>,
  const NS extends string,
  const I extends Record<string, InterfaceV2Def> = {},
>(
  config: OacOntologyConfig<NS, O, L, A, I>,
): Promise<OacOntology<O, L, A, NS, I>> {
  initializeOntologyState(config.namespace);

  const bundle = await config.build();

  if (
    RESERVED_KEY in bundle.objects
    || RESERVED_KEY in bundle.actions
    || (bundle.interfaces != null && RESERVED_KEY in bundle.interfaces)
  ) {
    throw new Error(
      `\`${RESERVED_KEY}\` is a reserved key on defineOacOntology results; `
        + "rename the offending object, action, or interface.",
    );
  }

  const types = finalizeTypes({
    namespace: config.namespace,
    objects: bundle.objects,
    links: bundle.links,
    actions: bundle.actions,
    interfaces: bundle.interfaces,
  });

  const oac = await runOacPipeline({
    functionsIrFile: config.functionsIrFile,
    randomnessKey: config.randomnessKey,
  });

  return Object.assign(types, { _oac: oac }) as OacOntology<O, L, A, NS, I>;
}
