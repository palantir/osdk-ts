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

import type * as OntologiesV2 from "@osdk/foundry.ontologies";
import { DefaultMap, MultiMap } from "mnemonist";
import invariant from "tiny-invariant";
import { ObjectNotFoundError } from "../errors.js";
import { OpenApiCallError } from "../handlers/util/handleOpenApiCall.js";
import type { BaseServerObject } from "./BaseServerObject.js";
import type { FauxAttachmentStore } from "./FauxAttachmentStore.js";
import { FauxDataStoreBatch } from "./FauxDataStoreBatch.js";
import type { FauxOntology } from "./FauxOntology.js";
import type { ObjectLocator } from "./ObjectLocator.js";
import { objectLocator, parseLocator } from "./ObjectLocator.js";
import { validateAction } from "./validateAction.js";

export class FauxDataStore {
  #objects = new DefaultMap<
    OntologiesV2.ObjectTypeApiName,
    Map<string, BaseServerObject>
  >(
    (key) => new Map(),
  );

  #singleLinks = new DefaultMap(
    (_objectLocator: ObjectLocator) =>
      new Map<OntologiesV2.LinkTypeApiName, ObjectLocator>(),
  );

  #manyLinks = new DefaultMap(
    (_objectLocator: ObjectLocator) => new MultiMap<string, ObjectLocator>(Set),
  );

  #fauxOntology: FauxOntology;

  #attachments: FauxAttachmentStore;

  constructor(fauxOntology: FauxOntology, attachments: FauxAttachmentStore) {
    this.#fauxOntology = fauxOntology;
    this.#attachments = attachments;
  }

  get ontology(): FauxOntology {
    return this.#fauxOntology;
  }

  #assertObjectExists(
    objectType: string,
    primaryKey: string | number | boolean,
  ) {
    if (!this.getObject(objectType, primaryKey)) {
      throw new OpenApiCallError(
        404,
        ObjectNotFoundError(objectType, String(primaryKey)),
      );
    }
  }

  #assertObjectDoesNotExist(
    objectType: string,
    primaryKey: string | number | boolean,
  ): void {
    if (this.getObject(objectType, primaryKey)) {
      throw new OpenApiCallError(
        500,
        {
          errorCode: "CONFLICT",
          errorName: "ObjectAlreadyExists",
          errorInstanceId: "faux-foundry",
          parameters: {
            objectType,
            primaryKey: String(primaryKey),
          },
        } satisfies OntologiesV2.ObjectAlreadyExists,
      );
    }
  }

  registerObject(x: BaseServerObject): void {
    this.#assertObjectDoesNotExist(x.__apiName, x.__primaryKey);
    this.#objects.get(x.__apiName).set(String(x.__primaryKey), x);
  }

  replaceObjectOrThrow(x: BaseServerObject): void {
    this.#assertObjectExists(x.__apiName, x.__primaryKey);
    this.#objects.get(x.__apiName).set(String(x.__primaryKey), x);
  }

  /** Throws if the object does not already exist */
  unregisterObjectOrThrow(
    objectType: string,
    primaryKey: string | number | boolean,
  ): void {
    this.#assertObjectExists(objectType, primaryKey);
    this.#objects.get(objectType).delete(String(primaryKey));
  }

  registerLink(
    src: BaseServerObject,
    srcLinkName: string,
    dst: BaseServerObject,
    destLinkName: string,
  ): void {
    const srcLocator = objectLocator(src);
    const dstLocator = objectLocator(dst);
    const [srcSide, dstSide] = this.#fauxOntology.getBothLinkTypeSides(
      src.__apiName,
      srcLinkName,
      dst.__apiName,
    );

    invariant(
      srcSide.linkTypeRid === dstSide.linkTypeRid,
      `Expected both sides of the link to have the same rid, but got ${srcSide.linkTypeRid} and ${dstSide.linkTypeRid}`,
    );
    invariant(
      dstSide.apiName === destLinkName,
      `Link name mismatch on dst side. Expected ${destLinkName} but found ${dstSide.apiName}`,
    );

    this.#updateSingleLinkSide(
      srcSide,
      srcLocator,
      dstSide,
      dstLocator,
    );
    this.#updateSingleLinkSide(
      dstSide,
      dstLocator,
      srcSide,
      srcLocator,
    );
  }

  unregisterLink(
    src: BaseServerObject,
    srcLinkName: string,
    dst: BaseServerObject,
    dstLinkName: string,
  ): void {
    const srcLocator = objectLocator(src);
    const dstLocator = objectLocator(dst);
    const [srcSide, dstSide] = this.#fauxOntology.getBothLinkTypeSides(
      src.__apiName,
      srcLinkName,
      dst.__apiName,
    );

    invariant(
      dstSide.apiName === dstLinkName,
      `Link name mismatch on dst side. Expected ${dstLinkName} but found ${dstSide.apiName}`,
    );

    this.#removeSingleSideOfLink(srcLocator, srcSide, dstLocator);
    this.#removeSingleSideOfLink(dstLocator, dstSide, srcLocator);
  }

  #updateSingleLinkSide(
    srcSide: OntologiesV2.LinkTypeSideV2,
    srcLocator: ObjectLocator,
    dstSide: OntologiesV2.LinkTypeSideV2,
    dstLocator: ObjectLocator,
  ) {
    const srcLinkName = srcSide.apiName;
    if (srcSide.cardinality === "ONE") {
      const linkNameToObj = this.#singleLinks.get(srcLocator);
      const oldLocator = linkNameToObj.get(srcLinkName);

      if (oldLocator && oldLocator !== dstLocator) {
        // we need to remove the other side's old value
        this.#removeSingleSideOfLink(
          oldLocator,
          dstSide,
          srcLocator,
        );
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

  #removeSingleSideOfLink(
    locator: ObjectLocator,
    linkSide: OntologiesV2.LinkTypeSideV2,
    expectedPriorValue: ObjectLocator,
  ) {
    const destLinkName = linkSide.apiName;
    if (linkSide.cardinality === "ONE") {
      const links = this.#singleLinks.get(locator);
      invariant(links.get(destLinkName) === expectedPriorValue);
      links.delete(destLinkName);
    } else {
      const links = this.#manyLinks.get(locator);
      invariant(links.get(destLinkName)?.has(expectedPriorValue));
      links.remove(destLinkName, expectedPriorValue);
    }
  }

  getObject(
    apiName: string,
    primaryKey: string | number | boolean,
  ): BaseServerObject | undefined {
    return this.#objects
      .get(apiName)
      .get(String(primaryKey));
  }

  getObjectOrThrow(
    apiName: string,
    primaryKey: string | number | boolean,
  ): BaseServerObject {
    const object = this.getObject(apiName, primaryKey);

    if (!object) {
      throw new OpenApiCallError(
        404,
        ObjectNotFoundError(apiName, String(primaryKey)),
      );
    }
    return object;
  }

  getObjectByRid(rid: string): BaseServerObject | undefined {
    for (const [, pkToObjects] of this.#objects) {
      for (const [, obj] of pkToObjects) {
        if (obj.__rid === rid) {
          return obj;
        }
      }
    }
  }

  getLinksOrThrow(
    apiName: string,
    primaryKey: string | number | boolean,
    linkApiName: string,
  ): BaseServerObject[] {
    const object = this.getObjectOrThrow(apiName, primaryKey);

    const linkTypeSide = this.#fauxOntology.getLinkTypeSideV2(
      apiName,
      linkApiName,
    );

    if (linkTypeSide.cardinality === "ONE") {
      const locator = this.#singleLinks
        .get(objectLocator(object))
        .get(linkApiName);
      if (locator === undefined) {
        return [];
      }
      const { objectType, primaryKey } = parseLocator(locator);

      return [this.getObjectOrThrow(objectType, primaryKey)]; // will throw if not found
    } else {
      const locators = this.#manyLinks
        .get(objectLocator(object))
        .get(linkApiName);

      return Array.from(locators ?? [])
        .map((a) => {
          const [objectType, primaryKey] = a.split(":") ?? [];
          invariant(objectType && primaryKey, "Invalid locator format");
          return this.getObjectOrThrow(objectType, primaryKey);
        });
    }
  }

  getObjectsOfType(apiName: string): Iterable<BaseServerObject> {
    return this.#objects
      .get(apiName)
      .values();
  }

  applyAction(
    actionTypeApiName: string,
    req: OntologiesV2.ApplyActionRequestV2,
  ): OntologiesV2.SyncApplyActionResponseV2 {
    const actionDef = this.#fauxOntology.getActionDef(actionTypeApiName);
    const actionImpl = this.#fauxOntology.getActionImpl(actionTypeApiName);

    const validation = validateAction(req, actionDef, this);
    if (validation.result === "INVALID") {
      return { validation };
    }

    const batch = new FauxDataStoreBatch(this);
    const r = actionImpl(batch, req, {
      def: actionDef,
      attachments: this.#attachments,
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
        submissionCriteria: [],
      },
      edits: req.options?.mode === "VALIDATE_AND_EXECUTE"
          && (
            req.options.returnEdits === "ALL"
            || req.options.returnEdits === "ALL_V2_WITH_DELETIONS"
          )
        ? {
          type: "edits",
          ...batch.objectEdits,
        }
        : undefined,
    };
  }

  batchApplyAction(
    actionTypeApiName: string,
    batchReq: OntologiesV2.BatchApplyActionRequestV2,
  ): OntologiesV2.BatchApplyActionResponseV2 {
    const actionDef = this.#fauxOntology.getActionDef(actionTypeApiName);
    const actionImpl = this.#fauxOntology.getActionImpl(actionTypeApiName);

    for (const req of batchReq.requests) {
      const result = validateAction(req, actionDef, this);
      if (result.result === "INVALID") {
        throw new OpenApiCallError(
          500,
          {
            errorCode: "INVALID_ARGUMENT",
            errorName: "ActionValidationFailed",
            errorInstanceId: "faux-foundry",
            parameters: {
              actionType: actionTypeApiName,
            },
          } as OntologiesV2.ActionValidationFailed,
        );
      }
    }

    const batch = new FauxDataStoreBatch(this);

    const returnLargeScaleEdits = false;
    for (const item of batchReq.requests) {
      actionImpl(
        batch,
        {
          ...item,
          options: {
            mode: "VALIDATE_AND_EXECUTE",
            returnEdits: batchReq.options?.returnEdits,
          },
        },
        { def: actionDef, attachments: this.#attachments },
      );
    }
    if (batchReq.options?.returnEdits === "NONE") {
      return {};
    }

    if (returnLargeScaleEdits) {
      const editedObjectTypes = new Set<OntologiesV2.ObjectTypeApiName>();
      for (const edit of batch.objectEdits.edits) {
        if (
          edit.type === "modifyObject" || edit.type === "addObject"
          || edit.type === "deleteObject"
        ) {
          editedObjectTypes.add(edit.objectType);
        }
      }

      return {
        edits: {
          type: "largeScaleEdits",
          editedObjectTypes: Array.from(editedObjectTypes),
        },
      };
    }

    return {
      edits: {
        type: "edits",
        ...batch.objectEdits,
        edits: batch.objectEdits.edits.filter(x =>
          x.type !== "deleteObject" && x.type !== "deleteLink"
        ),
      },
    };
  }
}
