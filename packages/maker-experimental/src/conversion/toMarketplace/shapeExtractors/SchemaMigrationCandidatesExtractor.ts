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
  KnownMarketplaceIdentifiers,
  MarkingType,
  ObjectType,
  ObjectTypeBlockDataV2,
  ObjectTypeDatasourceDefinition,
  PropertyType,
  PropertyTypeRid,
  Type,
} from "@osdk/client.unstable";
import type {
  LocalizedTitleAndDescription,
  MarkingsShape,
  OntologyPropertyValueSource,
  OntologySchemaMigrationCandidate,
  OntologySchemaMigrationCandidateId,
} from "@osdk/client.unstable/api";
import invariant from "tiny-invariant";

import {
  type OntologyRidGenerator,
  type ReadableId,
  ReadableIdGenerator,
} from "../../../util/generateRid.js";

export const SCHEMA_MIGRATION_INPUTS_SHAPE_READABLE_ID: ReadableId =
  "schema-migration-inputs" as ReadableId;

export interface SchemaMigrationCandidates {
  candidates: Record<
    OntologySchemaMigrationCandidateId,
    OntologySchemaMigrationCandidate
  >;
  /** The markings input each marking candidate sources its backfill value from. */
  markingsInputs: Map<ReadableId, MarkingsShape>;
}

/**
 * Port of OMS's SchemaMigrationCandidatesPackager: a set-property-value-if-unset candidate for every property an
 * installation could be asked to backfill.
 */
export function getSchemaMigrationCandidates(
  objectTypes: Record<string, ObjectTypeBlockDataV2>,
  knownIdentifiers: Pick<KnownMarketplaceIdentifiers, "propertyTypes">,
  ridGenerator: OntologyRidGenerator,
): SchemaMigrationCandidates {
  const result: SchemaMigrationCandidates = {
    candidates: {},
    markingsInputs: new Map(),
  };

  for (const block of Object.values(objectTypes)) {
    const { objectType } = block;
    // Any over all: if either a cloud or an edge datasource could need backfilling, the candidate is embedded.
    const propertiesSupportingBackfill = new Set(
      [
        ...block.datasources,
        ...(block.mappedEdgeOnlyDatasources ?? []),
      ].flatMap(({ datasource }) =>
        getPropertiesSupportingBackfill(datasource),
      ),
    );

    for (const [propertyRid, propertyType] of Object.entries(
      objectType.propertyTypes,
    )) {
      if (
        objectType.primaryKeys.includes(propertyRid) ||
        !isSupportedType(propertyType.type) ||
        isNullable(propertyType) ||
        !propertiesSupportingBackfill.has(propertyRid)
      ) {
        continue;
      }

      const propertyBlockInternalId =
        knownIdentifiers.propertyTypes[propertyRid];
      invariant(
        propertyBlockInternalId != null,
        `Missing block internal id for property ${propertyRid}`,
      );
      const candidateId: OntologySchemaMigrationCandidateId = `property//${propertyBlockInternalId}//set-property-value-if-unset`;
      const labels = getCandidateLabels(objectType, propertyType);

      let valueSource: OntologyPropertyValueSource;
      let candidateDescription: string;
      const markingType = getMarkingType(propertyType.type);
      if (markingType != null) {
        const markingsInputReadableId =
          ReadableIdGenerator.getForSchemaMigrationCandidateInput(
            objectType.apiName ?? objectType.id,
            propertyType.apiName ?? propertyType.id,
          );
        result.markingsInputs.set(markingsInputReadableId, {
          about: createLocalizedAbout(
            `Markings to backfill for property '${labels.propertyTypeDisplayName}' on object type '${labels.objectTypeDisplayName}'`,
            `Markings applied to existing objects with no value for non-nullable property '${labels.propertyTypeDisplayName}' on object type '${labels.objectTypeDisplayName}' (${labels.identifierClause}) when a backfill schema migration is required and supported at installation time.`,
          ),
          operation: "USE",
          affectedShapes: [propertyBlockInternalId],
          supportedMarkingsType: markingType,
          stableId: `schema-migration-candidate-input//${candidateId}//value`,
          // Minimum of zero, since otherwise Marketplace would always require a value, even if unused.
          sizeConstraints: {
            minNumberInclusive: 0,
            maxNumberInclusive: propertyType.type.type === "array" ? 100 : 1,
          },
        });
        valueSource = {
          type: "markings",
          markings: ridGenerator.toBlockInternalId(markingsInputReadableId),
        };
        candidateDescription = `Markings to backfill for non-nullable property '${labels.propertyTypeDisplayName}' on object type '${labels.objectTypeDisplayName}' (${labels.identifierClause}) when a schema migration is required at installation time. Supplied by this property's markings input rather than set here.`;
      } else {
        valueSource = { type: "literal", literal: {} };
        candidateDescription = `Value to backfill for non-nullable property '${labels.propertyTypeDisplayName}' on object type '${labels.objectTypeDisplayName}' (${labels.identifierClause}) when a schema migration is required at installation time.`;
      }

      result.candidates[candidateId] = {
        about: createLocalizedAbout(
          `Backfill for property '${labels.propertyTypeDisplayName}' on object type '${labels.objectTypeDisplayName}'`,
          candidateDescription,
        ),
        migration: {
          type: "setPropertyValueIfUnset",
          setPropertyValueIfUnset: {
            property: propertyBlockInternalId,
            valueSource,
          },
        },
      };
    }
  }

  return result;
}

export function getMarkingType(type: Type): MarkingType | undefined {
  if (type.type === "array") {
    return getMarkingType(type.array.subtype);
  }
  return type.type === "marking" ? type.marking.markingType : undefined;
}

/** Port of OMS's SetPropertyValueIfUnsetMigrationUtils.isSupportedFor. */
function isSupportedType(type: Type): boolean {
  switch (type.type) {
    case "array":
      return isSupportedType(type.array.subtype);
    case "boolean":
    case "byte":
    case "date":
    case "decimal":
    case "double":
    case "float":
    case "geohash":
    case "integer":
    case "long":
    case "marking":
    case "short":
    case "string":
    case "timestamp":
      return true;
    case "attachment":
    case "cipherText":
    case "experimentalTimeDependentV1":
    case "geoshape":
    case "geotimeSeriesReference":
    case "mediaReference":
    case "struct":
    case "vector":
      return false;
    default: {
      const _: never = type;
      return false;
    }
  }
}

/** Port of OMS's PropertyTypeNullabilityUtils.isNullable. */
function isNullable({ dataConstraints }: PropertyType): boolean {
  return (
    dataConstraints?.nullability !== "NO_EXPLICIT_NULLS" &&
    dataConstraints?.nullabilityV2?.noNulls !== true
  );
}

/**
 * The properties a datasource backs, if OMS supports backfilling its datasource type; port of OMS's
 * SetPropertyValueIfUnsetMigrationUtils.isSupportedForDatasourceType.
 */
function getPropertiesSupportingBackfill(
  datasource: ObjectTypeDatasourceDefinition,
): Array<PropertyTypeRid> {
  switch (datasource.type) {
    case "dataset":
      return Object.keys(datasource.dataset.propertyMapping);
    case "datasetV2":
      return Object.keys(datasource.datasetV2.propertyMapping);
    case "datasetV3":
      return Object.keys(datasource.datasetV3.propertyMapping);
    case "direct":
      return Object.keys(datasource.direct.propertyMapping);
    case "editsOnly":
      return datasource.editsOnly.properties;
    case "restrictedView":
      return Object.keys(datasource.restrictedView.propertyMapping);
    case "restrictedViewV2":
      return Object.keys(datasource.restrictedViewV2.propertyMapping);
    case "table":
    case "derived":
    case "geotimeSeries":
    case "media":
    case "mediaSetView":
    case "restrictedStream":
    case "stream":
    case "streamV2":
    case "streamV3":
    case "timeSeries":
      return [];
    default: {
      const _: never = datasource;
      return [];
    }
  }
}

interface CandidateLabels {
  objectTypeDisplayName: string;
  propertyTypeDisplayName: string;
  identifierClause: string;
}

function getCandidateLabels(
  objectType: ObjectType,
  propertyType: PropertyType,
): CandidateLabels {
  return {
    objectTypeDisplayName: objectType.displayMetadata.displayName,
    propertyTypeDisplayName: propertyType.displayMetadata.displayName,
    identifierClause:
      objectType.apiName != null && propertyType.apiName != null
        ? `API name: '${objectType.apiName}.${propertyType.apiName}'`
        : `ID: '${objectType.id}.${propertyType.id}'`,
  };
}

function createLocalizedAbout(
  fallbackTitle: string,
  fallbackDescription: string,
): LocalizedTitleAndDescription {
  return {
    fallbackTitle,
    fallbackDescription,
    localizedTitle: {},
    localizedDescription: {},
  };
}
