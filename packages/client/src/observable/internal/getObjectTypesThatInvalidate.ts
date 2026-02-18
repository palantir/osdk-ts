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

import type { InterfaceMetadata } from "@osdk/api";
import type {
  DerivedPropertyDefinition,
  ObjectSet as WireObjectSet,
} from "@osdk/foundry.ontologies";
import invariant from "tiny-invariant";
import type { MinimalClient } from "../../MinimalClientContext.js";
import type {
  FetchedObjectTypeDefinition,
  OntologyProvider,
} from "../../ontology/OntologyProvider.js";

// Suppose we did an object set that is basically
// A.where()
//  pivot(B).where()
//  pivot(C).where()
//  pivot(A).where()
//
// Any change to A needs to invalidate the chain because of the inner most A.
//
// But B.pivotTo(A) does not need all A's to invalidate the chain.
//
// For now we are keeping things conservative and just invalidating A either way,
// but we can make this better.

export async function getObjectTypesThatInvalidate(
  mc: MinimalClient,
  objectSet: WireObjectSet,
): Promise<{
  resultType: FetchedObjectTypeDefinition | InterfaceMetadata;
  counts: Record<string, number>;
  invalidationSet: Set<string>;
}> {
  const counts: Record<string, number> = {};

  const resultType = await calcObjectSet(
    objectSet,
    { counts, methodInput: undefined, ontologyProvider: mc.ontologyProvider },
  );

  // we need to uncount the final result type
  const tweaked = {
    ...counts,
    [resultType.apiName]: (counts[resultType.apiName]) - 1,
  };

  return {
    resultType,
    counts,
    invalidationSet: new Set(
      Object.entries(tweaked).filter(([, v]) => v > 0).map(([k]) => k),
    ),
  };
}

interface Ctx {
  counts: Record<string, number>;
  methodInput: WireObjectSet | undefined;
  ontologyProvider: OntologyProvider;
}

async function calcObjectSet(
  os: WireObjectSet,
  ctx: Ctx,
): Promise<FetchedObjectTypeDefinition | InterfaceMetadata> {
  const op = ctx.ontologyProvider;

  async function bumpObject(apiName: string) {
    const objectType = await op.getObjectDefinition(apiName);
    ctx.counts[apiName] = (ctx.counts[apiName] ?? 0) + 1;

    return objectType;
  }

  async function bumpInterface(apiName: string) {
    const interfaceDef = await op.getInterfaceDefinition(apiName);
    for (const s of interfaceDef.implementedBy ?? []) {
      ctx.counts[s] = (ctx.counts[s] ?? 0) + 1;
    }
    return interfaceDef;
  }

  switch (os.type) {
    case "base":
      return await bumpObject(os.objectType);

    case "interfaceBase":
      return await bumpInterface(os.interfaceType);

    case "interfaceLinkSearchAround": {
      const srcDef = await calcObjectSet(os.objectSet, ctx);
      invariant(srcDef.type === "interface");

      for (const [k, v] of Object.entries(srcDef.links)) {
        if (k === os.interfaceLink) {
          if (v.targetType === "object") {
            return await bumpObject(v.targetTypeApiName);
          }
          return await bumpInterface(v.targetTypeApiName);
        }
      }

      // if we got here then we did not find the link and something is wrong.
      throw new Error(
        `Could not find link ${os.interfaceLink} in object set ${
          JSON.stringify(os.objectSet)
        }`,
      );
    }

    case "searchAround": {
      const contextDef = await calcObjectSet(os.objectSet, ctx);
      invariant(contextDef.type === "object");

      for (const [k, v] of Object.entries(contextDef.links)) {
        if (k === os.link) {
          return await bumpObject(v.targetType);
        }
      }

      // if we got here then we did not find the link and something is wrong.
      throw new Error(
        `Could not find link ${os.link} in object set ${
          JSON.stringify(os.objectSet)
        }`,
      );
    }

    case "filter":
      // for the simple version of this, we can ignore the filter being based on any RDPs because
      // our RDP handling will ensure we invalidate based on those.
      return calcObjectSet(os.objectSet, ctx);

    case "union":
    case "subtract":
    case "intersect":
      // all of these entries need their counts to be merged as the max of each

      // suppose you have a simple `Union(A, A)`. We would end up with A:2
      // but we only need A:1.

      // suppose you have `Union(A->B, A->B)`. Now you end up with A:2, B:2,
      // but we only want A:1, B:1.

      // suppose you have `Union(A->B->A->B, A->B)`. Now you end up with A:3, B:2,
      // but we only want A:2, B:2.

      const returnTypes = await Promise.all(
        os.objectSets.map(async (os) => {
          const counts: Record<string, number> = {};
          const r = await calcObjectSet(os, { ...ctx, counts });
          return { r, counts };
        }),
      );

      for (const { counts } of returnTypes) {
        for (const [k, v] of Object.entries(counts)) {
          ctx.counts[k] = Math.max(ctx.counts[k] ?? 0, v);
        }
      }

      if (returnTypes.length === 0) {
        throw new Error(
          `Could not find any context types for set operation`,
        );
      }

      const allMatch = returnTypes.every(({ r }) =>
        r.apiName === returnTypes[0].r.apiName
      );

      if (!allMatch) {
        throw new Error(
          `Incompatible context types found for set operation`,
        );
      }

      return returnTypes[0].r;

    case "withProperties":
      // Everything in an RDP chain needs to invalidate us for now
      for (const [, v] of Object.entries(os.derivedProperties)) {
        await calcRdp(v, { ...ctx, methodInput: os.objectSet });
      }
      return calcObjectSet(os.objectSet, { ...ctx, methodInput: os.objectSet });

    // used by rdps
    case "methodInput":
      invariant(ctx.methodInput, "methodInput must be provided");

      // we only call this to get the context type, so we give it a new ctx
      // otherwise it will double count everything
      return (await calcObjectSet(ctx.methodInput, { ...ctx, counts: {} }));

    case "asType":
      // we don't currently support this anywhere.
    case "asBaseObjectTypes":
      // We don't currently support this because it could return multiple object types conceptually
      // internally, we actually use it this way but we shouldn't be finding that object sets.
    case "reference":
    // reference is particularly problematic because we cannot answer the question about
    // which types without loading the object set definition (and it can change).
    case "static":
      // static is also a problem as we cannot know what the types are without loading them
      throw new Error(`Unsupported ObjectSet type ${os.type}`);

    case "nearestNeighbors":
      return calcObjectSet(os.objectSet, ctx);

    default:
      throw new Error(
        `Unhandled ObjectSet type ${(os as any).type}`,
      );
  }
}

async function calcRdp(
  dpd: DerivedPropertyDefinition,
  ctx: Ctx,
): Promise<unknown> {
  switch (dpd.type) {
    // Operates on object sets
    case "selection":
      return await calcObjectSet(dpd.objectSet, ctx);

    // Operates on single property
    case "negate":
    case "extract":
    case "absoluteValue":
      return await calcRdp(dpd.property, ctx);

    // Operates on many (unordered) properties
    case "least":
    case "greatest":
    case "add":
    case "multiply":
      return await Promise.all(
        dpd.properties.map(innerDpd => calcRdp(innerDpd, ctx)),
      );

    // Operates on 2 ordered properties
    case "subtract":
    case "divide":
      return await Promise.all([
        calcRdp(dpd.left, ctx),
        calcRdp(dpd.right, ctx),
      ]);

    // Operates on a single property name
    case "property":
      // noop
      return;

    default:
      throw new Error(
        `Unhandled DerivedPropertyDefinition type ${(dpd as any).type}`,
      );
  }
}
