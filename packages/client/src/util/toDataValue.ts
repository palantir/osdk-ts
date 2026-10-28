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

import type { ActionMetadata, TimeSeriesReference } from "@osdk/api";
import { MediaSets } from "@osdk/foundry.mediasets";
import { type DataValue } from "@osdk/foundry.ontologies";
import * as Attachments from "@osdk/foundry.ontologies/Attachment";

import type { MinimalClient } from "../MinimalClientContext.js";
import {
  isAttachmentFile,
  isAttachmentUpload,
} from "../object/AttachmentUpload.js";
import {
  isMedia,
  isMediaReference,
  isMediaUpload,
} from "../object/mediaUpload.js";
import { getWireObjectSet, isObjectSet } from "../objectSet/createObjectSet.js";
import { isScenarioClient } from "../scenarios/ScenarioClient.js";
import { isInterfaceActionParam } from "./interfaceUtils.js";
import { isObjectSpecifiersObject } from "./isObjectSpecifiersObject.js";
import { isOntologyObjectV2 } from "./isOntologyObjectV2.js";
import { normalizeInterfaceLinkSearchArounds } from "./normalizeInterfaceLinkSearchArounds.js";
import { isWireObjectSet } from "./WireObjectSet.js";

/**
 * Marshall user-facing data into the wire DataValue type
 *
 * @see DataValue for the expected payloads
 * @internal
 */
export async function toDataValue(
  value: unknown,
  client: MinimalClient,
  parameterType: ActionMetadata.Parameter["type"],
): Promise<DataValue> {
  if (value == null) {
    // typeof null is 'object' so do this first
    // Sending null over the wire clears the data, whereas undefined is dropped at request time.
    return value;
  }

  if (parameterType === "decimal" && typeof value === "number") {
    return String(value);
  }

  // arrays and sets are both sent over the wire as arrays
  if (Array.isArray(value) || value instanceof Set) {
    const values = Array.from(value);
    if (
      values.some(
        (dataValue) =>
          isAttachmentUpload(dataValue) || isAttachmentFile(dataValue),
      )
    ) {
      const converted = [];
      for (const value of values) {
        converted.push(await toDataValue(value, client, parameterType));
      }
      return converted;
    }
    const promiseArray = Array.from(
      value,
      async (innerValue) =>
        await toDataValue(innerValue, client, parameterType),
    );
    return Promise.all(promiseArray);
  }

  // For uploads, we need to upload ourselves first to get the RID of the attachment
  if (isAttachmentUpload(value)) {
    const attachment = await Attachments.upload(client, value.data, {
      filename: value.name,
    });
    return await toDataValue(attachment.rid, client, parameterType);
  }

  if (isAttachmentFile(value)) {
    const attachment = await Attachments.upload(client, value, {
      filename: value.name as string,
    });
    return await toDataValue(attachment.rid, client, parameterType);
  }

  if (isMediaUpload(value)) {
    const mediaRef = await MediaSets.uploadMedia(client, value.data, {
      filename: value.fileName,
    });
    return await toDataValue(mediaRef, client, parameterType);
  }

  if (isMedia(value)) {
    return value.getMediaReference();
  }

  if (isMediaReference(value)) {
    return value;
  }

  // objects just send the JSON'd primaryKey
  if (isOntologyObjectV2(value)) {
    return await toDataValue(value.__primaryKey, client, parameterType);
  }

  if (isObjectSpecifiersObject(value)) {
    return await toDataValue(value.$primaryKey, client, parameterType);
  }

  // object set (the rid as a string (passes through the last return), or the ObjectSet definition directly)
  if (isWireObjectSet(value)) {
    return normalizeInterfaceLinkSearchArounds(client, value);
  }
  if (isObjectSet(value)) {
    return normalizeInterfaceLinkSearchArounds(client, getWireObjectSet(value));
  }

  if (isInterfaceActionParam(value)) {
    return {
      objectTypeApiName: value.$objectType,
      primaryKeyValue: value.$primaryKey,
    };
  }

  if (isScenarioClient(value)) {
    return value.getScenarioReference();
  }

  if (isTimeSeriesReference(value)) {
    if (value.$templateRid != null) {
      // DerivedTimeSeriesProperty
      return {
        templateRid: value.$templateRid,
        templateVersion: value.$templateVersion,
      };
    }
    if (value.$syncRid != null) {
      // QualifiedTimeseriesProperty
      return { seriesId: value.$seriesId, syncRid: value.$syncRid };
    }
    // SeriesId (a bare string)
    return value.$seriesId;
  }

  // TODO (during queries implementation)
  // two dimensional aggregation
  // three dimensional aggregation

  // structs and GeoJSON
  if (typeof value === "object") {
    return Object.entries(value).reduce(
      async (promisedAcc, [key, structValue]) => {
        const acc = await promisedAcc;
        let fieldType = parameterType;
        if (
          typeof parameterType === "object" &&
          parameterType.type === "struct"
        ) {
          const fieldDefinition:
            | ActionMetadata.Parameter["type"]
            | ActionMetadata.DataType.StructFieldDefinition<ActionMetadata.DataType.BaseActionParameterTypes> =
            parameterType.struct[key];
          fieldType =
            typeof fieldDefinition === "object" && "nullable" in fieldDefinition
              ? fieldDefinition.type
              : fieldDefinition;
        }
        acc[key] = await toDataValue(structValue, client, fieldType);
        return acc;
      },
      Promise.resolve({} as { [key: string]: DataValue }),
    );
  }

  // expected to pass through - boolean, byte, date, decimal, float, double, integer, long, short, string, timestamp, object type reference
  return value;
}

function isTimeSeriesReference(value: unknown): value is TimeSeriesReference {
  return (
    typeof value === "object" &&
    value != null &&
    ("$seriesId" in value || "$templateRid" in value)
  );
}
