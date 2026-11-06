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
  objectInvalidationSet: Set<string>;
  interfaceInvalidationSet: Set<string>;
}> {
  const objectInvalidationSet = new Set<string>();
  const interfaceInvalidationSet = new Set<string>();

  const resultType = await calcObjectSet(objectSet, {
    objectInvalidationSet,
    interfaceInvalidationSet,
    methodInput: undefined,
    ontologyProvider: mc.ontologyProvider,
    narrowTypeInterfaceOrObjectMapping: mc.narrowTypeInterfaceOrObjectMapping,
  });

  return {
    resultType,
    objectInvalidationSet,
    interfaceInvalidationSet,
  };
}

interface Ctx {
  objectInvalidationSet: Set<string>;
  interfaceInvalidationSet: Set<string>;
  methodInput: WireObjectSet | undefined;
  ontologyProvider: OntologyProvider;
  narrowTypeInterfaceOrObjectMapping: MinimalClient["narrowTypeInterfaceOrObjectMapping"];
}

async function calcObjectSet(
  os: WireObjectSet,
  ctx: Ctx,
): Promise<FetchedObjectTypeDefinition | InterfaceMetadata> {
  const op = ctx.ontologyProvider;

  async function addObjectType(apiName: string) {
    const objectType = await op.getObjectDefinition(apiName);
    ctx.objectInvalidationSet.add(apiName);

    return objectType;
  }

  async function addInterfaceType(apiName: string) {
    const interfaceDef = await op.getInterfaceDefinition(apiName);
    ctx.interfaceInvalidationSet.add(apiName);
    for (const s of interfaceDef.implementedBy ?? []) {
      ctx.objectInvalidationSet.add(s);
    }
    return interfaceDef;
  }

  switch (os.type) {
    case "base":
      return await addObjectType(os.objectType);

    case "interfaceBase":
      return await addInterfaceType(os.interfaceType);

    case "asType": {
      await calcObjectSet(os.objectSet, ctx);
      const targetKind = ctx.narrowTypeInterfaceOrObjectMapping[os.entityType];
      invariant(
        targetKind,
        `Missing type kind for narrowed type ${os.entityType}`,
      );
      return targetKind === "interface"
        ? await addInterfaceType(os.entityType)
        : await addObjectType(os.entityType);
    }

    case "interfaceLinkSearchAround": {
      const srcDef = await calcObjectSet(os.objectSet, ctx);
      invariant(srcDef.type === "interface");

      for (const [k, v] of Object.entries(srcDef.links)) {
        if (k === os.interfaceLink) {
          if (v.targetType === "object") {
            return await addObjectType(v.targetTypeApiName);
          }
          return await addInterfaceType(v.targetTypeApiName);
        }
      }

      // if we got here then we did not find the link and something is wrong.
      throw new Error(
        `Could not find link ${os.interfaceLink} in object set ${JSON.stringify(
          os.objectSet,
        )}`,
      );
    }

    case "searchAround": {
      const contextDef = await calcObjectSet(os.objectSet, ctx);
      invariant(contextDef.type === "object");

      for (const [k, v] of Object.entries(contextDef.links)) {
        if (k === os.link) {
          return await addObjectType(v.targetType);
        }
      }

      // if we got here then we did not find the link and something is wrong.
      throw new Error(
        `Could not find link ${os.link} in object set ${JSON.stringify(
          os.objectSet,
        )}`,
      );
    }

    case "filter":
      // for the simple version of this, we can ignore the filter being based on any RDPs because
      // our RDP handling will ensure we invalidate based on those.
      return calcObjectSet(os.objectSet, ctx);

    case "union":
    case "subtract":
    case "intersect":
      // Filter out object set types that cannot be resolved to a concrete type
      // (e.g., reference, static). In set operations, we can determine the
      // result type from the remaining resolvable operands.
      const resolvableSets = os.objectSets.filter(
        (s) => s.type !== "reference" && s.type !== "static",
      );

      const returnTypes = await Promise.all(
        resolvableSets.map((objectSet) => calcObjectSet(objectSet, ctx)),
      );

      if (returnTypes.length === 0) {
        throw new Error(`Could not find any context types for set operation`);
      }

      const allMatch = returnTypes.every(
        (resultType) => resultType.apiName === returnTypes[0].apiName,
      );

      if (!allMatch) {
        throw new Error(`Incompatible context types found for set operation`);
      }

      return returnTypes[0];

    case "withProperties":
      // Everything in an RDP chain needs to invalidate us for now
      for (const [, v] of Object.entries(os.derivedProperties)) {
        await calcRdp(v, { ...ctx, methodInput: os.objectSet });
      }
      return calcObjectSet(os.objectSet, { ...ctx, methodInput: os.objectSet });

    // used by rdps
    case "methodInput":
      invariant(ctx.methodInput, "methodInput must be provided");

      return await calcObjectSet(ctx.methodInput, ctx);

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
      throw new Error(`Unhandled ObjectSet type ${(os as any).type}`);
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
        dpd.properties.map((innerDpd) => calcRdp(innerDpd, ctx)),
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
