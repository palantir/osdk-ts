/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import invariant from "tiny-invariant";
import type { DirectedLinkTypeRid } from "../generated/object-set-service/api/DirectedLinkTypeRid.js";
import type { FoundryObjectReference } from "../generated/object-set-service/api/FoundryObjectReference.js";
import type { GetBulkLinksPageRequest } from "../generated/object-set-service/api/GetBulkLinksPageRequest.js";
import type { ObjectIdentifier } from "../generated/object-set-service/api/ObjectIdentifier.js";
import { getBulkLinksPage } from "../generated/object-set-service/api/ObjectSetServiceV2/getBulkLinksPage.js";
import type { MinimalClient } from "../MinimalClientContext.js";
import { conjureUnionType } from "../objectSet/conjureUnionType.js";
import { makeConjureContext } from "../ontology/makeConjureContext.js";
import type { OsdkObject } from "../OsdkObject.js";
import {
  applyPageToken,
  getResults,
  pageRequestAsAsyncIter,
} from "../pageRequestAsAsyncIter.js";
import { metadataCacheClient } from "./ConjureSupport.js";

export interface BulkLinkResult {
  object: OsdkObject<any>;
  linkApiName: string;
  otherObjectApiName: string | undefined;
  otherObjectPk: unknown;
}

export function createBulkLinksAsyncIterFactory(ctx: MinimalClient) {
  return async function*(
    objs: Array<OsdkObject<any>>,
    linkTypes: string[],
  ): AsyncGenerator<BulkLinkResult, void, unknown> {
    if (objs.length === 0) {
      return;
    }

    ctx.logger?.debug("Preparing to fetch bulk links");

    // require all objects to be the same type for now
    invariant(objs.every(a => a.$objectType === objs[0].$objectType));

    const mcc = await metadataCacheClient(ctx);
    const helper = await mcc.forObjectByApiName(objs[0].$objectType);

    const [objectTypeRid, propertyMapping, fullLinkMapping] = await Promise.all(
      [
        helper.getRid(),
        helper.getPropertyMapping(),
        helper.getLinkMapping(),
      ],
    );

    const linkMapping = Object.fromEntries(
      Object.entries(fullLinkMapping)
        .filter(([apiName]) => linkTypes.includes(apiName)),
    );

    // make sure the link being requested exists
    for (const linkType of linkTypes) {
      if (linkMapping[linkType] == null) {
        throw "Unable to find link type: " + linkType;
      }
    }

    const req: GetBulkLinksPageRequest = {
      objectSetContext: {
        forkRid: undefined,
        objectSetFilterContext: { parameterOverrides: {} },
        ontologyBranchRid: undefined,
        owningRid: undefined,
        reportUsage: undefined,
        workstateRid: undefined,
      },
      responseOptions: {
        includeObjectSetEntities: true,
        includeUsageCost: false,
      },
      pageSize: 1000,
      pageToken: undefined,
      linksRequests: [{
        directedLinkTypes: Object.values(linkMapping)
          .map<DirectedLinkTypeRid>(({ directedLinkTypeRid }) =>
            directedLinkTypeRid
          ),
        objects: conjureUnionType(
          "objects",
          objs.map<ObjectIdentifier>(o =>
            conjureUnionType("objectLocatorV2", {
              objectTypeRid,
              objectPrimaryKey: {
                [propertyMapping.pk.rid]: conjureUnionType(
                  propertyMapping.pk.type.type as "string",
                  o.$primaryKey as string,
                ),
              },
            })
          ),
        ),
      }],
    };

    const bulkLinksIter = pageRequestAsAsyncIter(
      getBulkLinksPage.bind(
        undefined,
        makeConjureContext(ctx, "/object-set-service/api"),
      ),
      getResults,
      applyPageToken,
      req,
    );

    for await (const item of bulkLinksIter) {
      const { objectIdentifier } = item;
      const obj = findObject(objectIdentifier, objs);

      for (const link of item.links) {
        const ref = link.link[
          link.linkSide === "SOURCE"
            ? "objectSideB"
            : "objectSideA"
        ];
        const pk = getPrimaryKeyOrThrow(ref);
        const otherObjectApiName =
          await (await mcc.forObjectByRid(pk.objectTypeRid))
            .getApiName();

        const mappedLink = Object.values(linkMapping).find(a =>
          a.directedLinkTypeRid.linkTypeRid === link.link.linkTypeRid
          && a.directedLinkTypeRid.linkSide === link.linkSide
        );
        if (!mappedLink) throw new Error("Could not find link type"); // shouldnt happens

        yield {
          object: obj,
          linkApiName: mappedLink.apiName,
          otherObjectApiName: otherObjectApiName,
          otherObjectPk: pk.pkValue,
        };
      }
    }
  };
}

function findObject(
  objectIdentifier: ObjectIdentifier,
  objs: (OsdkObject<any>)[],
) {
  const { pkValue } = getPrimaryKeyOrThrow(objectIdentifier);

  const obj = objs.find(o => o.$primaryKey === pkValue);
  if (obj == null) {
    throw new Error(
      `Needed to find object with pk ${pkValue}} and could not`,
    );
  }
  return obj;
}

function getPrimaryKeyOrThrow(
  ref: FoundryObjectReference | ObjectIdentifier,
) {
  if ("type" in ref && ref.type !== "objectLocatorV2") {
    throw new Error("We do not support looking up object by rid");
  }

  const pks = Object.entries(ref.objectLocatorV2.objectPrimaryKey);
  if (pks.length !== 1) {
    throw new Error(
      "Unable to support this request due to multiple pks",
    );
  }

  return {
    objectTypeRid: ref.objectLocatorV2.objectTypeRid,
    pkValue: (pks[0][1] as any)[pks[0][1].type] as unknown,
  };
}
