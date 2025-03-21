/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import { DefaultMap, MultiMap } from "mnemonist";
import { randomUUID } from "node:crypto";
import invariant from "tiny-invariant";
import { InvalidRequest, ObjectNotFoundError } from "../errors.js";
import { subSelectProperties } from "../filterObjects.js";
import { getPaginationParamsFromRequest } from "../handlers/util/getPaginationParams.js";
import { OpenApiCallError } from "../handlers/util/handleOpenApiCall.js";
import { pageThroughResponseSearchParams } from "../handlers/util/pageThroughResponseSearchParams.js";
import { FauxDataStoreBatch } from "./FauxDataStoreBatch.js";
import { filterTimeSeriesData } from "./filterTimeSeriesData.js";
import { createOrderBySortFn, getObjectsFromSet } from "./getObjectsFromSet.js";
import { objectLocator, parseLocator } from "./ObjectLocator.js";
import { validateAction } from "./validateAction.js";
export class FauxDataStore {
  #objects = new DefaultMap(() => new Map());
  #singleLinks = new DefaultMap(() => new Map());
  #manyLinks = new DefaultMap(() => new MultiMap(Set));
  #fauxOntology;
  #attachments;
  #timeSeriesData = new DefaultMap(() => new DefaultMap(() => new DefaultMap(() => [])));
  #media = new DefaultMap(() => new DefaultMap(() => {
    return new Map();
  }));
  constructor(fauxOntology, attachments) {
    this.#fauxOntology = fauxOntology;
    this.#attachments = attachments;
  }
  get ontology() {
    return this.#fauxOntology;
  }
  #assertObjectExists(objectType, primaryKey) {
    if (!this.getObject(objectType, primaryKey)) {
      throw new OpenApiCallError(404, ObjectNotFoundError(objectType, String(primaryKey)));
    }
  }
  #assertObjectDoesNotExist(objectType, primaryKey) {
    if (this.getObject(objectType, primaryKey)) {
      throw new OpenApiCallError(500, {
        errorCode: "CONFLICT",
        errorName: "ObjectAlreadyExists",
        errorInstanceId: "faux-foundry",
        parameters: {
          objectType,
          primaryKey: String(primaryKey)
        }
      });
    }
  }
  registerObject(obj) {
    this.#assertObjectDoesNotExist(obj.__apiName, obj.__primaryKey);
    this.#objects.get(obj.__apiName).set(String(obj.__primaryKey), Object.freeze({
      ...obj
    }));
  }
  replaceObjectOrThrow(x) {
    this.#assertObjectExists(x.__apiName, x.__primaryKey);
    this.#objects.get(x.__apiName).set(String(x.__primaryKey), x);
  }

  /** Throws if the object does not already exist */
  unregisterObjectOrThrow(objectType, primaryKey) {
    this.#assertObjectExists(objectType, primaryKey);
    this.#objects.get(objectType).delete(String(primaryKey));
  }
  registerLink(src, srcLinkName, dst, destLinkName) {
    const srcLocator = objectLocator(src);
    const dstLocator = objectLocator(dst);
    const [srcSide, dstSide] = this.#fauxOntology.getBothLinkTypeSides(src.__apiName, srcLinkName, dst.__apiName);
    !(srcSide.linkTypeRid === dstSide.linkTypeRid) ? process.env.NODE_ENV !== "production" ? invariant(false, `Expected both sides of the link to have the same rid, but got ${srcSide.linkTypeRid} and ${dstSide.linkTypeRid}`) : invariant(false) : void 0;
    !(dstSide.apiName === destLinkName) ? process.env.NODE_ENV !== "production" ? invariant(false, `Link name mismatch on dst side. Expected ${destLinkName} but found ${dstSide.apiName}`) : invariant(false) : void 0;
    this.#updateSingleLinkSide(srcSide, srcLocator, dstSide, dstLocator);
    this.#updateSingleLinkSide(dstSide, dstLocator, srcSide, srcLocator);
  }
  unregisterLink(src, srcLinkName, dst, dstLinkName) {
    const srcLocator = objectLocator(src);
    const dstLocator = objectLocator(dst);
    const [srcSide, dstSide] = this.#fauxOntology.getBothLinkTypeSides(src.__apiName, srcLinkName, dst.__apiName);
    !(dstSide.apiName === dstLinkName) ? process.env.NODE_ENV !== "production" ? invariant(false, `Link name mismatch on dst side. Expected ${dstLinkName} but found ${dstSide.apiName}`) : invariant(false) : void 0;
    this.#removeSingleSideOfLink(srcLocator, srcSide, dstLocator);
    this.#removeSingleSideOfLink(dstLocator, dstSide, srcLocator);
  }
  registerTimeSeriesData(objectType, primaryKey, property, data) {
    this.getObjectOrThrow(objectType, primaryKey);
    const def = this.ontology.getObjectTypeFullMetadataOrThrow(objectType);
    !(def.objectType.properties[property].dataType.type === "timeseries" || def.objectType.properties[property].dataType.type === "geotimeSeriesReference") ? process.env.NODE_ENV !== "production" ? invariant(false) : invariant(false) : void 0;
    this.#timeSeriesData.get(objectType).get(String(primaryKey)).set(property, data);
  }
  getTimeSeriesData(objectType, primaryKey, property, filter) {
    this.getObjectOrThrow(objectType, primaryKey);
    const allData = this.#timeSeriesData.get(objectType).get(String(primaryKey)).get(property);
    if (!filter) return allData;
    return filterTimeSeriesData(allData, filter);
  }
  #updateSingleLinkSide(srcSide, srcLocator, dstSide, dstLocator) {
    const srcLinkName = srcSide.apiName;
    if (srcSide.cardinality === "ONE") {
      const linkNameToObj = this.#singleLinks.get(srcLocator);
      const oldLocator = linkNameToObj.get(srcLinkName);
      if (oldLocator && oldLocator !== dstLocator) {
        // we need to remove the other side's old value
        this.#removeSingleSideOfLink(oldLocator, dstSide, srcLocator);
      }
      linkNameToObj.set(srcLinkName, dstLocator);
    } else if (srcSide.cardinality === "MANY") {
      const linkNameToObj = this.#manyLinks.get(srcLocator);
      linkNameToObj.set(srcLinkName, dstLocator);
    } else {
      // "never" case
      throw new Error("unexpected cardinality: " + srcSide.cardinality);
    }
  }
  registerMedia(objectType, property, content, mediaType, path,
  // This should be the correct prefix, per
  // https://github.com/palantir/osdk-ts/pull/1303#discussion_r2001989395
  mediaItemRid = `ri.mio.main.media-item.${randomUUID()}`) {
    const mediaRef = Object.freeze({
      mimeType: mediaType,
      reference: Object.freeze({
        type: "mediaSetViewItem",
        mediaSetViewItem: Object.freeze({
          mediaItemRid,
          mediaSetRid: "ri.unimplemented.in.shared.test",
          mediaSetViewRid: "ri.unimplemented.in.shared.test"
        })
      })
    });
    this.#media.get(objectType).get(property).set(mediaItemRid, Object.freeze({
      content,
      mediaRef,
      metaData: Object.freeze({
        mediaType,
        path,
        sizeBytes: String(content.byteLength)
      })
    }));
    return mediaRef;
  }
  getMediaOrThrow(objectType, primaryKey, property) {
    const obj = this.getObjectOrThrow(objectType, primaryKey);
    const propertyDef = this.ontology.getObjectTypeFullMetadataOrThrow(objectType).objectType.properties[property];
    if (!propertyDef) {
      // This should be the correct error, per
      // https://github.com/palantir/osdk-ts/pull/1303#discussion_r2001968959
      throw new OpenApiCallError(400, {
        errorCode: "NOT_FOUND",
        errorName: "PropertiesNotFound",
        errorInstanceId: "faux-foundry",
        parameters: {
          objectType,
          properties: [property]
        }
      });
    }
    if (propertyDef.dataType.type !== "mediaReference") {
      // FIXME: what would the backend do here?
      throw new OpenApiCallError(400, {
        errorCode: "INVALID_ARGUMENT",
        errorName: "InvalidPropertyType",
        errorInstanceId: "faux-foundry",
        parameters: {
          property,
          propertyBaseType: propertyDef.dataType.type
        }
      });
    }
    const rid = obj[property];
    if (!rid || !rid.startsWith("ri.")) {
      throw new OpenApiCallError(400, {
        errorCode: "INVALID_ARGUMENT",
        errorName: "InvalidPropertyValue",
        errorInstanceId: "faux-foundry",
        parameters: {
          property,
          propertyBaseType: propertyDef.dataType.type,
          propertyValue: rid
        }
      });
    }
    const ret = this.#media.get(objectType).get(property).get(rid);
    if (!ret) {
      throw new OpenApiCallError(400, InvalidRequest("Invalid parameters"));
    }
    return ret;
  }
  #removeSingleSideOfLink(locator, linkSide, expectedPriorValue) {
    const destLinkName = linkSide.apiName;
    if (linkSide.cardinality === "ONE") {
      const links = this.#singleLinks.get(locator);
      !(links.get(destLinkName) === expectedPriorValue) ? process.env.NODE_ENV !== "production" ? invariant(false) : invariant(false) : void 0;
      links.delete(destLinkName);
    } else {
      const links = this.#manyLinks.get(locator);
      !links.get(destLinkName)?.has(expectedPriorValue) ? process.env.NODE_ENV !== "production" ? invariant(false) : invariant(false) : void 0;
      links.remove(destLinkName, expectedPriorValue);
    }
  }
  getObject(apiName, primaryKey) {
    return this.#objects.get(apiName).get(String(primaryKey));
  }
  getObjectOrThrow(apiName, primaryKey) {
    const object = this.getObject(apiName, primaryKey);
    if (!object) {
      throw new OpenApiCallError(404, ObjectNotFoundError(apiName, String(primaryKey)));
    }
    return object;
  }
  getObjectByRid(rid) {
    for (const [, pkToObjects] of this.#objects) {
      for (const [, obj] of pkToObjects) {
        if (obj.__rid === rid) {
          return obj;
        }
      }
    }
  }
  getLinksOrThrow(apiName, primaryKey, linkApiName) {
    const object = this.getObjectOrThrow(apiName, primaryKey);
    const linkTypeSide = this.#fauxOntology.getLinkTypeSideV2(apiName, linkApiName);
    if (linkTypeSide.cardinality === "ONE") {
      const locator = this.#singleLinks.get(objectLocator(object)).get(linkApiName);
      if (locator === undefined) {
        return [];
      }
      const {
        objectType,
        primaryKey
      } = parseLocator(locator);
      return [this.getObjectOrThrow(objectType, primaryKey)]; // will throw if not found
    } else {
      const locators = this.#manyLinks.get(objectLocator(object)).get(linkApiName);
      return Array.from(locators ?? []).map(a => {
        const [objectType, primaryKey] = a.split(":") ?? [];
        !(objectType && primaryKey) ? process.env.NODE_ENV !== "production" ? invariant(false, "Invalid locator format") : invariant(false) : void 0;
        return this.getObjectOrThrow(objectType, primaryKey);
      });
    }
  }
  getLinkOrThrow(objectType, primaryKey, linkType, targetPrimaryKey) {
    const allLinks = this.getLinksOrThrow(objectType, primaryKey, linkType);
    const object = allLinks.filter(l => String(l.__primaryKey) === targetPrimaryKey)[0];
    if (!object) {
      throw new OpenApiCallError(404, ObjectNotFoundError(`${objectType} -> ${linkType}`, String(targetPrimaryKey)));
    }
    return object;
  }
  getObjectsOfType(apiName) {
    return this.#objects.get(apiName).values();
  }
  getObjectsFromObjectSet(parsedBody) {
    const selected = parsedBody.select;
    // when we have interfaces in here, we have a little trick for
    // caching off the important properties
    let objects = getObjectsFromSet(this, parsedBody.objectSet, undefined);
    if (!objects) {
      return {
        data: [],
        totalCount: "0",
        nextPageToken: undefined
      };
    }
    if (parsedBody.orderBy) {
      objects = objects.sort(createOrderBySortFn(parsedBody.orderBy));
    }

    // finally, if we got interfaces, the objects have names like the interface and we need
    // to return them like the object.

    const page = pageThroughResponseSearchParams(objects, getPaginationParamsFromRequest(parsedBody), false);
    if (!page) {
      throw new OpenApiCallError(404, InvalidRequest(`No objects found for ${JSON.stringify(parsedBody)}`));
    }
    const ret = subSelectProperties(page, [...selected], true, parsedBody.excludeRid);
    return ret;
  }
  getAttachmentMetadata(objectType, primaryKey, propertyName) {
    const rid = this.getObjectOrThrow(objectType, primaryKey)[propertyName];
    return this.#attachments.getAttachmentMetadataByRid(rid);
  }
  getAttachmentBuffer(objectType, primaryKey, propertyName) {
    const rid = this.getObjectOrThrow(objectType, primaryKey)[propertyName];
    return this.#attachments.getAttachmentBuffer(rid);
  }
  applyAction(actionTypeApiName, req) {
    const actionDef = this.#fauxOntology.getActionDef(actionTypeApiName);
    const actionImpl = this.#fauxOntology.getActionImpl(actionTypeApiName);
    const validation = validateAction(req, actionDef, this);
    if (validation.result === "INVALID") {
      return {
        validation
      };
    }
    const batch = new FauxDataStoreBatch(this);
    const r = actionImpl(batch, req, {
      def: actionDef,
      attachments: this.#attachments
    });

    // The legacy actions return the full payload
    // they want to return, so we need to do that
    // but the future is for the actionImpl's to
    // return void and to do validation details here
    if (r) return r;
    return {
      validation: {
        parameters: {},
        result: "VALID",
        submissionCriteria: []
      },
      edits: req.options?.mode === "VALIDATE_AND_EXECUTE" && (req.options.returnEdits === "ALL" || req.options.returnEdits === "ALL_V2_WITH_DELETIONS") ? {
        type: "edits",
        ...batch.objectEdits
      } : undefined
    };
  }
  batchApplyAction(actionTypeApiName, batchReq) {
    const actionDef = this.#fauxOntology.getActionDef(actionTypeApiName);
    const actionImpl = this.#fauxOntology.getActionImpl(actionTypeApiName);
    for (const req of batchReq.requests) {
      const result = validateAction(req, actionDef, this);
      if (result.result === "INVALID") {
        throw new OpenApiCallError(500, {
          errorCode: "INVALID_ARGUMENT",
          errorName: "ActionValidationFailed",
          errorInstanceId: "faux-foundry",
          parameters: {
            actionType: actionTypeApiName
          }
        });
      }
    }
    const batch = new FauxDataStoreBatch(this);
    for (const item of batchReq.requests) {
      actionImpl(batch, {
        ...item,
        options: {
          mode: "VALIDATE_AND_EXECUTE",
          returnEdits: batchReq.options?.returnEdits
        }
      }, {
        def: actionDef,
        attachments: this.#attachments
      });
    }
    if (batchReq.options?.returnEdits === "NONE") {
      return {};
    }
    return {
      edits: {
        type: "edits",
        ...batch.objectEdits,
        edits: batch.objectEdits.edits.filter(x => x.type !== "deleteObject" && x.type !== "deleteLink")
      }
    };
  }
}
//# sourceMappingURL=FauxDataStore.js.map