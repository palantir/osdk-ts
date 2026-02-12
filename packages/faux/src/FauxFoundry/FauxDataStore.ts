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

import type { CompileTimeMetadata, ObjectTypeDefinition } from "@osdk/api";
import type {
  MediaItemRid,
  MediaReference,
  MediaType,
} from "@osdk/foundry.core";
import type * as OntologiesV2 from "@osdk/foundry.ontologies";
import { DefaultMap, MultiMap } from "mnemonist";
import * as crypto from "node:crypto";
import { randomUUID } from "node:crypto";
import { inspect } from "node:util";
import invariant from "tiny-invariant";
import type { ReadonlyDeep } from "type-fest";
import { InvalidRequest, ObjectNotFoundError } from "../errors.js";
import { subSelectProperties } from "../filterObjects.js";
import { getPaginationParamsFromRequest } from "../handlers/util/getPaginationParams.js";
import { OpenApiCallError } from "../handlers/util/handleOpenApiCall.js";
import type { PagedBodyResponseWithTotal } from "../handlers/util/pageThroughResponseSearchParams.js";
import { pageThroughResponseSearchParams } from "../handlers/util/pageThroughResponseSearchParams.js";
import {
  type BaseServerObject,
  isBaseServerObject,
} from "./BaseServerObject.js";
import type { FauxAttachmentStore } from "./FauxAttachmentStore.js";
import { FauxDataStoreBatch } from "./FauxDataStoreBatch.js";
import type { FauxOntology } from "./FauxOntology.js";
import { filterTimeSeriesData } from "./filterTimeSeriesData.js";
import { createOrderBySortFn, getObjectsFromSet } from "./getObjectsFromSet.js";
import type { ObjectLocator } from "./ObjectLocator.js";
import { objectLocator, parseLocator } from "./ObjectLocator.js";
import type { JustProps } from "./typeHelpers/JustProps.js";
import { validateAction } from "./validateAction.js";

export interface MediaMetadataAndContent {
  content: ArrayBuffer;
  mediaRef: MediaReference;
  metaData: OntologiesV2.MediaMetadata;
}

type ObjectTypeCreatableWithoutApiName<T extends ObjectTypeDefinition> =
  OrUndefinedToOptional<JustProps<T>>;

/**
 * Represents the properties needed to create an object, specifically,
 * the properties of the object and the $apiName
 */
type ObjectTypeCreatable<T extends ObjectTypeDefinition> =
  & ObjectTypeCreatableWithoutApiName<T>
  & {
    $apiName: CompileTimeMetadata<T>["apiName"];
    $rid?: string;
  };

/**
 * Helper type for converting `foo: string | undefined` into `foo?: string`
 */
type OrUndefinedToOptional<T extends object> =
  & {
    [K in keyof T as T[K] extends undefined ? K : never]?: T[K];
  }
  & {
    [K in keyof T as T[K] extends undefined ? never : K]?: T[K];
  };

/**
 * Type safe object for representing "client" side objects.
 */
interface BaseObjectTypeCreatable {
  $apiName?: OntologiesV2.ObjectTypeApiName;

  /** if present it must match the correct value */
  $primaryKey?: string | number | boolean;

  /** If set, will use the as the $rid for the object, otherwise one is created for you */
  $rid?: string;

  /**
   * All the properties.
   *
   * FUTURE: This only handles the primitive types right now. If we want to be able to create
   * objects with some helpers for other types, this will need to be updated.
   */
  [key: string]: string | number | boolean | undefined;
}

export class FauxDataStore {
  #objects = new DefaultMap<
    OntologiesV2.ObjectTypeApiName,
    Map<string, BaseServerObject>
  >((key) => new Map());

  #objectsWithSecurities = new DefaultMap<
    OntologiesV2.ObjectTypeApiName,
    Map<string, BaseServerObject>
  >((key) => new Map());

  #singleLinks = new DefaultMap(
    (_objectLocator: ObjectLocator) =>
      new Map<OntologiesV2.LinkTypeApiName, ObjectLocator>(),
  );

  #manyLinks = new DefaultMap(
    (_objectLocator: ObjectLocator) => new MultiMap<string, ObjectLocator>(Set),
  );

  #fauxOntology: FauxOntology;

  #attachments: FauxAttachmentStore;

  #timeSeriesData = new DefaultMap(
    (_objectType: OntologiesV2.ObjectTypeApiName) =>
      new DefaultMap(
        (_pk: string) =>
          new DefaultMap(
            (_property: OntologiesV2.PropertyApiName) =>
              [] as Array<OntologiesV2.TimeSeriesPoint>,
          ),
      ),
  );

  #propertySecurities = new DefaultMap(
    (_objectLocator: ObjectLocator) =>
      [{}] as Array<OntologiesV2.PropertySecurities>,
  );

  #media = new DefaultMap(
    (_objectType: OntologiesV2.ObjectTypeApiName) =>
      new DefaultMap((_propName: OntologiesV2.PropertyApiName) => {
        return new Map<MediaItemRid, MediaMetadataAndContent>();
      }),
  );
  #strict: boolean;

  constructor(
    fauxOntology: FauxOntology,
    attachments: FauxAttachmentStore,
    strict: boolean,
  ) {
    this.#fauxOntology = fauxOntology;
    this.#attachments = attachments;
    this.#strict = strict;
  }

  /**
   * Removes all data that is associated with a namespace/ontology.
   *
   * Note: does not clear `attachments` nor does it clear the ontology itself.
   */
  public clear(): void {
    this.#media.clear();
    this.#timeSeriesData.clear();
    this.#manyLinks.clear();
    this.#singleLinks.clear();
    this.#objects.clear();
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
          errorDescription:
            "The object the user is attempting to create already exists.",
        } satisfies OntologiesV2.ObjectAlreadyExists,
      );
    }
  }

  /**
   * Version for use in places like @osdk/client.
   *
   * @param obj An `Osdk.Instance` like object for the ObjectType in the generics
   */
  registerObject<T extends ObjectTypeDefinition>(
    objectType: T,
    obj: ObjectTypeCreatable<T> | ObjectTypeCreatableWithoutApiName<T>,
  ): BaseServerObject;
  /**
   * Version of register object generally used in shared.test
   * @param obj A raw server side representation of an object
   *
   * Don't use, its too easy to end up with an any.
   */
  registerObject(obj: BaseServerObject): BaseServerObject;
  registerObject(
    objectType: string | ObjectTypeDefinition | BaseServerObject,
    anyObj?: BaseServerObject | BaseObjectTypeCreatable,
  ): BaseServerObject {
    let bso: BaseServerObject;
    // obj = { ...obj }; // make a copy so we can mutate it

    if (isBaseServerObject(objectType)) {
      invariant(
        anyObj == null,
        "Internal overload should only pass one argument",
      );
      invariant(
        !Object.keys(objectType).some((s) => s.startsWith("$")),
        "Object should not have any keys starting with $ if it has __apiName",
      );
      bso = objectType;
    } else if (anyObj == null) {
      invariant(false, "should not be possible due to overloads");
    } else if (isBaseServerObject(anyObj)) {
      invariant(
        !Object.keys(anyObj).some((s) => s.startsWith("$")),
        "Object should not have any keys starting with $ if it has __apiName",
      );
      bso = anyObj;
    } else {
      bso = this.#osdkCreatableToBso(objectType, anyObj);
    }

    const apiName = bso.__apiName || bso.$apiName;
    invariant(apiName, "Object should have an __apiName or $apiName");

    this.#assertObjectDoesNotExist(apiName, bso.__primaryKey);

    if (!("__apiName" in bso && "__primaryKey" in bso)) {
      invariant(
        "$apiName" in bso && "$primaryKey" in bso,
        "Object should have (__apiName and __primaryKey) or ($apiName and $primaryKey)",
      );
      const { $apiName, $primaryKey, ...others } = bso as {
        $apiName: OntologiesV2.ObjectTypeApiName;
        $primaryKey: string | number | boolean;
      } & Record<string, unknown>;
      bso = {
        __apiName: $apiName,
        __primaryKey: $primaryKey,
        ...others,
      };
    }
    this.#assertObjectDoesNotExist(bso.__apiName, bso.__primaryKey);
    const frozenBso = Object.freeze({ ...bso });
    this.#objects.get(bso.__apiName).set(String(bso.__primaryKey), frozenBso);

    if (this.#strict) {
      // registers links
      this.replaceObjectOrThrow(frozenBso);
    }

    return frozenBso;
  }

  registerObjectWithPropertySecurities(
    regularObject: BaseServerObject,
    securedObject: BaseServerObject,
    propertySecurities: OntologiesV2.PropertySecurities[],
  ): BaseServerObject {
    const registeredObj = this.registerObject(regularObject);

    this.#objectsWithSecurities.get(registeredObj.__apiName).set(
      String(registeredObj.__primaryKey),
      Object.freeze({ ...securedObject }),
    );
    this.#propertySecurities.set(
      objectLocator(registeredObj),
      propertySecurities,
    );
    return registeredObj;
  }

  #osdkCreatableToBso(
    objectType: string | ObjectTypeDefinition,
    anyObj: BaseObjectTypeCreatable,
  ) {
    objectType = typeof objectType === "string"
      ? objectType
      : objectType.apiName;

    if ("$apiName" in anyObj) {
      invariant(anyObj.$apiName === objectType);
    }
    const { $apiName, $primaryKey, ...others } = anyObj;

    const meta = this.ontology.getObjectTypeFullMetadataOrThrow(objectType);
    const realPrimaryKey = anyObj[meta.objectType.primaryKey] as
      | string
      | number
      | boolean;

    const maybeTitle = anyObj[meta.objectType.titleProperty];
    const rid = anyObj.$rid
      ?? `ri.phonograph2-objects.main.object.${crypto.randomUUID()}`;

    invariant(
      realPrimaryKey != null,
      `Object should have a primary key. ${JSON.stringify(anyObj)}`,
    );

    invariant(
      $primaryKey == null || $primaryKey === realPrimaryKey,
      "Primary key mismatch",
    );

    return {
      __apiName: objectType,
      __primaryKey: realPrimaryKey,
      __title: maybeTitle ? String(maybeTitle) : undefined,
      __rid: rid,
      ...others,
    };
  }

  replaceObjectOrThrow(x: BaseServerObject): void {
    const objectType = this.ontology.getObjectTypeFullMetadataOrThrow(
      x.__apiName,
    );
    const oldObject = this.getObjectOrThrow(x.__apiName, x.__primaryKey);

    const linksToUpdate: Array<{
      srcSide: OntologiesV2.LinkTypeSideV2;
      srcLocator: ObjectLocator;
      dstSide: OntologiesV2.LinkTypeSideV2;
      dstLocator: ObjectLocator;
    }> = [];

    const linksToRemove: Array<{
      srcSide: OntologiesV2.LinkTypeSideV2;
      srcLocator: ObjectLocator;
      dstSide: OntologiesV2.LinkTypeSideV2;
      dstLocator: ObjectLocator;
    }> = [];

    for (const linkDef of objectType.linkTypes) {
      if (linkDef.cardinality === "ONE") {
        invariant(
          this.#strict && linkDef.foreignKeyPropertyApiName,
          `Error examining ${objectType.objectType.apiName}.${linkDef.apiName}: ONE side of links should have a foreign key. ${
            inspect(
              linkDef,
              { colors: false },
            )
          }`,
        );

        const fkName = linkDef.foreignKeyPropertyApiName;
        const fkValue = x[fkName];
        const oldFkValue = oldObject[fkName];

        const dstSide = this.ontology.getOtherLinkTypeSideV2OrThrow(
          objectType.objectType.apiName,
          linkDef.apiName,
        );
        const dstLocator = objectLocator({
          __apiName: linkDef.objectTypeApiName,
          __primaryKey: fkValue,
        });

        const target = this.getObject(linkDef.objectTypeApiName, fkValue);

        if (fkValue != null && !target) {
          // eslint-disable-next-line no-console
          console.log(
            `WARNING! Setting a FK value to a non-existent object: ${dstLocator}`,
          );
        }

        if (fkValue != null) {
          linksToUpdate.push({
            dstSide,
            dstLocator,
            srcSide: linkDef,
            srcLocator: objectLocator(x),
          });
        } else if (oldFkValue != null) {
          linksToRemove.push({
            srcLocator: objectLocator(x),
            srcSide: linkDef,
            dstLocator: objectLocator({
              __apiName: linkDef.objectTypeApiName,
              __primaryKey: oldFkValue,
            }),
            dstSide,
          });
        }
      }
    }

    this.#objects.get(x.__apiName).set(String(x.__primaryKey), x);
    for (const { srcSide, srcLocator, dstSide, dstLocator } of linksToUpdate) {
      this.#updateSingleLinkSide(srcSide, srcLocator, dstSide, dstLocator);
      this.#updateSingleLinkSide(dstSide, dstLocator, srcSide, srcLocator);
    }

    for (const { srcSide, srcLocator, dstSide, dstLocator } of linksToRemove) {
      this.#removeSingleSideOfLink(srcLocator, srcSide, dstLocator);
      this.#removeSingleSideOfLink(dstLocator, dstSide, srcLocator);
    }
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
    tmpSrc: BaseServerObject,
    srcLinkName: string,
    tmpDst: BaseServerObject,
    destLinkName: string,
  ): void {
    const src = this.getObjectOrThrow(tmpSrc.__apiName, tmpSrc.__primaryKey);
    const dst = this.getObjectOrThrow(tmpDst.__apiName, tmpDst.__primaryKey);

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

    if (this.#strict) {
      const oneSide = srcSide.cardinality === "ONE"
        ? { object: src, link: srcSide }
        : dstSide.cardinality === "ONE"
        ? { object: dst, link: dstSide }
        : undefined;
      const manySide = oneSide
        ? srcSide.cardinality === "MANY"
          ? { object: src, link: srcSide }
          : { object: dst, link: dstSide }
        : undefined;

      if (oneSide && manySide) {
        invariant(
          oneSide.link.foreignKeyPropertyApiName,
          `Expected to find a foreignKeyPropertyApiName on the one side: ${oneSide.object.__apiName}.${oneSide.link.apiName}`,
        );

        const newObj = {
          ...oneSide.object,
          [oneSide.link.foreignKeyPropertyApiName]:
            manySide.object.__primaryKey,
        };

        // This method call will also do the work to update the sides
        this.replaceObjectOrThrow(newObj);
        return;
      }
    }

    this.#updateSingleLinkSide(srcSide, srcLocator, dstSide, dstLocator);
    this.#updateSingleLinkSide(dstSide, dstLocator, srcSide, srcLocator);
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

    if (this.#strict) {
      const { oneSide, manySide } = extractOneManySide(
        srcSide,
        src,
        dstSide,
        dst,
      );

      if (oneSide && manySide) {
        invariant(
          oneSide.link.foreignKeyPropertyApiName,
          `Expected to find a foreignKeyPropertyApiName on the one side: ${oneSide.object.__apiName}.${oneSide.link.apiName}`,
        );

        const newObj = {
          ...oneSide.object,
          [oneSide.link.foreignKeyPropertyApiName]: undefined,
        };

        // This method call will also do the work to update the sides
        this.replaceObjectOrThrow(newObj);
        return;
      }
    }

    this.#removeSingleSideOfLink(srcLocator, srcSide, dstLocator);
    this.#removeSingleSideOfLink(dstLocator, dstSide, srcLocator);
  }

  registerTimeSeriesData(
    objectType: OntologiesV2.ObjectTypeApiName,
    primaryKey: string | number,
    property: OntologiesV2.PropertyApiName,
    data: OntologiesV2.TimeSeriesPoint[],
  ): void {
    this.getObjectOrThrow(objectType, primaryKey);
    const def = this.ontology.getObjectTypeFullMetadataOrThrow(objectType);
    invariant(
      def.objectType.properties[property].dataType.type === "timeseries"
        || def.objectType.properties[property].dataType.type
          === "geotimeSeriesReference",
    );
    this.#timeSeriesData
      .get(objectType)
      .get(String(primaryKey))
      .set(property, data);
  }

  getTimeSeriesData(
    objectType: OntologiesV2.ObjectTypeApiName,
    primaryKey: string | number,
    property: OntologiesV2.PropertyApiName,
    filter?: OntologiesV2.StreamTimeSeriesPointsRequest,
  ): OntologiesV2.TimeSeriesPoint[] {
    this.getObjectOrThrow(objectType, primaryKey);
    const allData = this.#timeSeriesData
      .get(objectType)
      .get(String(primaryKey))
      .get(property);
    if (!filter) return allData;
    return filterTimeSeriesData(allData, filter);
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

  registerMedia(
    objectType: OntologiesV2.ObjectTypeApiName,
    property: OntologiesV2.PropertyApiName,
    content: ArrayBuffer,
    mediaType: MediaType,
    path: string | undefined,
    // This should be the correct prefix, per
    // https://github.com/palantir/osdk-ts/pull/1303#discussion_r2001989395
    mediaItemRid: MediaItemRid = `ri.mio.main.media-item.${randomUUID()}`,
  ): MediaReference {
    const mediaRef: ReadonlyDeep<MediaReference> = Object.freeze({
      mimeType: mediaType,
      reference: Object.freeze({
        type: "mediaSetViewItem",
        mediaSetViewItem: Object.freeze({
          mediaItemRid,
          mediaSetRid: "ri.unimplemented.in.shared.test",
          mediaSetViewRid: "ri.unimplemented.in.shared.test",
        }),
      }),
    });

    this.#media
      .get(objectType)
      .get(property)
      .set(
        mediaItemRid,
        Object.freeze({
          content,
          mediaRef,
          metaData: Object.freeze({
            mediaType,
            path,
            sizeBytes: String(content.byteLength),
          }),
        }),
      );

    return mediaRef;
  }

  getMediaOrThrow(
    objectType: OntologiesV2.ObjectTypeApiName,
    primaryKey: string,
    property: OntologiesV2.PropertyApiName,
  ): MediaMetadataAndContent {
    const obj = this.getObjectOrThrow(objectType, primaryKey);
    const propertyDef =
      this.ontology.getObjectTypeFullMetadataOrThrow(objectType).objectType
        .properties[property];

    if (!propertyDef) {
      // This should be the correct error, per
      // https://github.com/palantir/osdk-ts/pull/1303#discussion_r2001968959
      throw new OpenApiCallError(
        400,
        {
          errorCode: "NOT_FOUND",
          errorName: "PropertiesNotFound",
          errorInstanceId: "faux-foundry",
          parameters: {
            objectType,
            properties: [property],
          },
          errorDescription:
            "The requested properties are not found on the object type.",
        } satisfies OntologiesV2.PropertiesNotFound,
      );
    }

    if (propertyDef.dataType.type !== "mediaReference") {
      // FIXME: what would the backend do here?
      throw new OpenApiCallError(
        400,
        {
          errorCode: "INVALID_ARGUMENT",
          errorName: "InvalidPropertyType",
          errorInstanceId: "faux-foundry",
          parameters: {
            property,
            propertyBaseType: propertyDef.dataType.type,
          },
          errorDescription:
            "The given property type is not of the expected type.",
        } satisfies OntologiesV2.InvalidPropertyType,
      );
    }

    const rid = obj[property].reference.mediaSetViewItem.mediaItemRid;

    if (!rid || !rid.startsWith("ri.")) {
      throw new OpenApiCallError(
        400,
        {
          errorCode: "INVALID_ARGUMENT",
          errorName: "InvalidPropertyValue",
          errorInstanceId: "faux-foundry",
          parameters: {
            property,
            propertyBaseType: propertyDef.dataType.type,
            propertyValue: rid,
          },
          errorDescription:
            "The value of the given property is invalid. See the documentation of PropertyValue for details on how properties are represented.",
        } satisfies OntologiesV2.InvalidPropertyValue,
      );
    }

    const ret = this.#media.get(objectType).get(property).get(rid);

    if (!ret) {
      throw new OpenApiCallError(400, InvalidRequest("Invalid parameters"));
    }
    return ret;
  }

  #removeSingleSideOfLink(
    locator: ObjectLocator,
    linkSide: OntologiesV2.LinkTypeSideV2,
    expectedPriorValue: ObjectLocator,
  ) {
    const destLinkName = linkSide.apiName;
    if (linkSide.cardinality === "ONE") {
      const links = this.#singleLinks.get(locator);
      invariant(
        links.get(destLinkName) === expectedPriorValue,
        `Failed to remove link: expected ${
          JSON.stringify(
            expectedPriorValue,
          )
        } but found ${
          JSON.stringify(
            links.get(destLinkName),
          )
        } for link ${destLinkName} on ${JSON.stringify(locator)}`,
      );
      links.delete(destLinkName);
    } else {
      const links = this.#manyLinks.get(locator);
      invariant(
        links.get(destLinkName)?.has(expectedPriorValue),
        `Failed to remove link: expected collection to contain ${
          JSON.stringify(
            expectedPriorValue,
          )
        } for link ${destLinkName} on ${JSON.stringify(locator)}`,
      );
      links.remove(destLinkName, expectedPriorValue);
    }
  }

  getObject(
    apiName: string,
    primaryKey: string | number | boolean,
  ): BaseServerObject | undefined {
    return this.#objects.get(apiName).get(String(primaryKey));
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

  getObjectWithSecurities(
    apiName: string,
    primaryKey: string | number | boolean,
  ): BaseServerObject | undefined {
    return this.#objectsWithSecurities.get(apiName).get(String(primaryKey));
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

      return Array.from(locators ?? []).map((a) => {
        const [objectType, primaryKey] = a.split(":") ?? [];
        invariant(objectType && primaryKey, "Invalid locator format");
        return this.getObjectOrThrow(objectType, primaryKey);
      });
    }
  }

  getLinkOrThrow(
    objectType: string,
    primaryKey: string | number | boolean,
    linkType: string,
    targetPrimaryKey: string | number | boolean,
  ): BaseServerObject {
    const allLinks = this.getLinksOrThrow(objectType, primaryKey, linkType);
    const object = allLinks.filter(
      (l) => String(l.__primaryKey) === targetPrimaryKey,
    )[0];

    if (!object) {
      throw new OpenApiCallError(
        404,
        ObjectNotFoundError(
          `${objectType} -> ${linkType}`,
          String(targetPrimaryKey),
        ),
      );
    }
    return object;
  }

  getObjectsOfType(apiName: string): Iterable<BaseServerObject> {
    this.ontology.getObjectTypeFullMetadataOrThrow(apiName);
    return this.#objects.get(apiName).values();
  }

  getObjectsFromObjectSet(
    parsedBody:
      | OntologiesV2.LoadObjectSetV2MultipleObjectTypesRequest
      | OntologiesV2.LoadObjectSetRequestV2,
  ): PagedBodyResponseWithTotal<BaseServerObject> {
    const selected = parsedBody.select;
    const loadPropertySecurities = parsedBody.loadPropertySecurities ?? false;
    // when we have interfaces in here, we have a little trick for
    // caching off the important properties
    let objects = getObjectsFromSet(this, parsedBody.objectSet, undefined);

    if (loadPropertySecurities) {
      invariant(
        objects.length === 1,
        "Loading property securities is only supported when loading a single object",
      );

      objects = [
        this.getObjectWithSecurities(
          objects[0].__apiName,
          objects[0].__primaryKey,
        )!,
      ];
    }
    if (!objects || objects.length === 0) {
      return {
        data: [],
        totalCount: "0",
        nextPageToken: undefined,
        propertySecurities: [],
      };
    }

    if (parsedBody.orderBy) {
      objects = objects.sort(createOrderBySortFn(parsedBody.orderBy));
    }

    // finally, if we got interfaces, the objects have names like the interface and we need
    // to return them like the object.

    const page = pageThroughResponseSearchParams(
      objects,
      getPaginationParamsFromRequest(parsedBody),
      false,
      loadPropertySecurities
        ? this.#propertySecurities.get(
          objectLocator(objects[0]),
        )
        : undefined,
    );

    if (!page) {
      throw new OpenApiCallError(
        404,
        InvalidRequest(`No objects found for ${JSON.stringify(parsedBody)}`),
      );
    }
    const ret = subSelectProperties(
      page,
      [...selected],
      true,
      parsedBody.excludeRid,
    );

    return ret;
  }

  getAttachmentMetadata(
    objectType: string,
    primaryKey: string | number | boolean,
    propertyName: string,
  ): OntologiesV2.AttachmentV2 {
    const rid = this.getObjectOrThrow(objectType, primaryKey)[propertyName];
    return this.#attachments.getAttachmentMetadataByRid(rid);
  }

  getAttachmentBuffer(
    objectType: string,
    primaryKey: string | number | boolean,
    propertyName: string,
  ): ArrayBuffer {
    const rid = this.getObjectOrThrow(objectType, primaryKey)[propertyName];
    return this.#attachments.getAttachmentBuffer(rid);
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
          && (req.options.returnEdits === "ALL"
            || req.options.returnEdits === "ALL_V2_WITH_DELETIONS")
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
        throw new OpenApiCallError(500, {
          errorCode: "INVALID_ARGUMENT",
          errorName: "ActionValidationFailed",
          errorInstanceId: "faux-foundry",
          parameters: {
            actionType: actionTypeApiName,
          },
        } as OntologiesV2.ActionValidationFailed);
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
          edit.type === "modifyObject"
          || edit.type === "addObject"
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
        edits: batch.objectEdits.edits.filter(
          (x) => x.type !== "deleteObject" && x.type !== "deleteLink",
        ),
      },
    };
  }
}
function extractOneManySide(
  srcSide: OntologiesV2.LinkTypeSideV2,
  src: BaseServerObject,
  dstSide: OntologiesV2.LinkTypeSideV2,
  dst: BaseServerObject,
) {
  const oneSide = srcSide.cardinality === "ONE"
    ? { object: src, link: srcSide }
    : dstSide.cardinality === "ONE"
    ? { object: dst, link: dstSide }
    : undefined;
  const manySide = oneSide
    ? srcSide.cardinality === "MANY"
      ? { object: src, link: srcSide }
      : { object: dst, link: dstSide }
    : undefined;
  return { oneSide, manySide };
}
