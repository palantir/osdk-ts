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
  LinkTypeId as _api_LinkTypeId,
  LinkTypeRid as _api_LinkTypeRid,
  ObjectTypeFieldApiName as _api_ObjectTypeFieldApiName,
  PropertyTypeId as _api_PropertyTypeId,
  PropertyTypeRid as _api_PropertyTypeRid,
} from "../__components.js";

/**
 * A derived property that references aggregations on a linked object type.
 * The linked object type is specified by a LinkDefinition.
 */
export interface AggregatedPropertiesDefinition {
  linkDefinition: LinkDefinition;
  propertyTypeMapping: Record<_api_PropertyTypeRid, DerivedPropertyAggregation>;
}
/**
 * A derived property that references aggregations on a linked object type.
 * The linked object type is specified by a LinkDefinition.
 */
export interface AggregatedPropertiesDefinitionModification {
  linkDefinition: LinkDefinitionModification;
  propertyTypeMapping: Record<
    _api_PropertyTypeId,
    DerivedPropertyAggregationModification
  >;
}
export interface DerivedPropertiesDefinition_linkedProperties {
  type: "linkedProperties";
  linkedProperties: LinkedPropertiesDefinition;
}

export interface DerivedPropertiesDefinition_aggregatedProperties {
  type: "aggregatedProperties";
  aggregatedProperties: AggregatedPropertiesDefinition;
}
export type DerivedPropertiesDefinition =
  | DerivedPropertiesDefinition_linkedProperties
  | DerivedPropertiesDefinition_aggregatedProperties;

export interface DerivedPropertiesDefinitionModification_linkedProperties {
  type: "linkedProperties";
  linkedProperties: LinkedPropertiesDefinitionModification;
}

export interface DerivedPropertiesDefinitionModification_aggregatedProperties {
  type: "aggregatedProperties";
  aggregatedProperties: AggregatedPropertiesDefinitionModification;
}
export type DerivedPropertiesDefinitionModification =
  | DerivedPropertiesDefinitionModification_linkedProperties
  | DerivedPropertiesDefinitionModification_aggregatedProperties;

export interface DerivedPropertyAggregation_count {
  type: "count";
  count: LinkedCountMetric;
}

export interface DerivedPropertyAggregation_avg {
  type: "avg";
  avg: PropertyTypeIdentifier;
}

export interface DerivedPropertyAggregation_max {
  type: "max";
  max: PropertyTypeIdentifier;
}

export interface DerivedPropertyAggregation_min {
  type: "min";
  min: PropertyTypeIdentifier;
}

export interface DerivedPropertyAggregation_sum {
  type: "sum";
  sum: PropertyTypeIdentifier;
}

export interface DerivedPropertyAggregation_approximateCardinality {
  type: "approximateCardinality";
  approximateCardinality: PropertyTypeIdentifier;
}

export interface DerivedPropertyAggregation_exactCardinality {
  type: "exactCardinality";
  exactCardinality: PropertyTypeIdentifier;
}

export interface DerivedPropertyAggregation_collectList {
  type: "collectList";
  collectList: LinkedCollection;
}

export interface DerivedPropertyAggregation_collectSet {
  type: "collectSet";
  collectSet: LinkedCollection;
}
/**
 * An aggregation function and what it should be computed on (e.g. a property type on the linked object type).
 */
export type DerivedPropertyAggregation =
  | DerivedPropertyAggregation_count
  | DerivedPropertyAggregation_avg
  | DerivedPropertyAggregation_max
  | DerivedPropertyAggregation_min
  | DerivedPropertyAggregation_sum
  | DerivedPropertyAggregation_approximateCardinality
  | DerivedPropertyAggregation_exactCardinality
  | DerivedPropertyAggregation_collectList
  | DerivedPropertyAggregation_collectSet;

export interface DerivedPropertyAggregationModification_count {
  type: "count";
  count: LinkedCountMetric;
}

export interface DerivedPropertyAggregationModification_avg {
  type: "avg";
  avg: PropertyTypeIdentifierInRequest;
}

export interface DerivedPropertyAggregationModification_max {
  type: "max";
  max: PropertyTypeIdentifierInRequest;
}

export interface DerivedPropertyAggregationModification_min {
  type: "min";
  min: PropertyTypeIdentifierInRequest;
}

export interface DerivedPropertyAggregationModification_sum {
  type: "sum";
  sum: PropertyTypeIdentifierInRequest;
}

export interface DerivedPropertyAggregationModification_approximateCardinality {
  type: "approximateCardinality";
  approximateCardinality: PropertyTypeIdentifierInRequest;
}

export interface DerivedPropertyAggregationModification_exactCardinality {
  type: "exactCardinality";
  exactCardinality: PropertyTypeIdentifierInRequest;
}

export interface DerivedPropertyAggregationModification_collectList {
  type: "collectList";
  collectList: LinkedCollectionModification;
}

export interface DerivedPropertyAggregationModification_collectSet {
  type: "collectSet";
  collectSet: LinkedCollectionModification;
}
/**
 * An aggregation function and what it should be computed on (e.g. a property type on the linked object type).
 */
export type DerivedPropertyAggregationModification =
  | DerivedPropertyAggregationModification_count
  | DerivedPropertyAggregationModification_avg
  | DerivedPropertyAggregationModification_max
  | DerivedPropertyAggregationModification_min
  | DerivedPropertyAggregationModification_sum
  | DerivedPropertyAggregationModification_approximateCardinality
  | DerivedPropertyAggregationModification_exactCardinality
  | DerivedPropertyAggregationModification_collectList
  | DerivedPropertyAggregationModification_collectSet;

export interface DerivedPropertyLinkTypeIdentifier_linkType {
  type: "linkType";
  linkType: _api_LinkTypeRid;
}
export type DerivedPropertyLinkTypeIdentifier =
  DerivedPropertyLinkTypeIdentifier_linkType;

export interface DerivedPropertyLinkTypeIdentifierInRequest_linkType {
  type: "linkType";
  linkType: _api_LinkTypeId;
}

export interface DerivedPropertyLinkTypeIdentifierInRequest_linkTypeRid {
  type: "linkTypeRid";
  linkTypeRid: _api_LinkTypeRid;
}
export type DerivedPropertyLinkTypeIdentifierInRequest =
  | DerivedPropertyLinkTypeIdentifierInRequest_linkType
  | DerivedPropertyLinkTypeIdentifierInRequest_linkTypeRid;

/**
 * Specifies a side of a link type to indicate a direction derived property is going from. Its semantic
 * meaning depends on the context of usage.
 *
 * For many-to-many link types SOURCE corresponds to object type A in the link type definition, and
 * TARGET corresponds to object type B.
 *
 * For one-to-many link types SOURCE generally corresponds to the ONE (or primary key) side in the
 * link type definition, and TARGET corresponds to the MANY (or foreign key) side.
 * EXCEPTION: In self-referential one-to-many link types, this is inverted: SOURCE corresponds to the MANY side
 * and TARGET corresponds to the ONE side in self-referential one-to-many link types.
 *
 * See also: `https://github.palantir.build/foundry/ontology-metadata-service/blob/6e9dc4f117cb56e0f0ffb0027a85ca946275e417/docs/adr/0057-link-type-side-semantics.md`
 * for more context surrounding this decision.
 */
export type DerivedPropertyLinkTypeSide = "SOURCE" | "TARGET";
export interface LinkDefinition_linkTypeLink {
  type: "linkTypeLink";
  linkTypeLink: LinkTypeLinkDefinition;
}

export interface LinkDefinition_multiHopLink {
  type: "multiHopLink";
  multiHopLink: MultiHopLinkDefinition;
}
export type LinkDefinition =
  | LinkDefinition_linkTypeLink
  | LinkDefinition_multiHopLink;

export interface LinkDefinitionModification_linkTypeLink {
  type: "linkTypeLink";
  linkTypeLink: LinkTypeLinkDefinitionModification;
}

export interface LinkDefinitionModification_multiHopLink {
  type: "multiHopLink";
  multiHopLink: MultiHopLinkDefinitionModification;
}
export type LinkDefinitionModification =
  | LinkDefinitionModification_linkTypeLink
  | LinkDefinitionModification_multiHopLink;

/**
 * A collection of values of a property type.
 */
export interface LinkedCollection {
  limit: number;
  linkedProperty: PropertyTypeIdentifier;
}
/**
 * A collection of values of a property type.
 */
export interface LinkedCollectionModification {
  limit: number;
  linkedProperty: PropertyTypeIdentifierInRequest;
}
/**
 * Total count of objects
 */
export interface LinkedCountMetric {
}
/**
 * A derived property definition that references property types on a linked object type.
 * The linked object type is specified by a LinkDefinition.
 */
export interface LinkedPropertiesDefinition {
  linkDefinition: LinkDefinition;
  propertyTypeMapping: Record<_api_PropertyTypeRid, PropertyTypeIdentifier>;
}
/**
 * A derived property definition that references property types on a linked object type.
 * The linked object type is specified by a LinkDefinition.
 */
export interface LinkedPropertiesDefinitionModification {
  linkDefinition: LinkDefinitionModification;
  propertyTypeMapping: Record<
    _api_PropertyTypeId,
    PropertyTypeIdentifierInRequest
  >;
}
export interface LinkTypeLinkDefinition {
  linkTypeIdentifier: DerivedPropertyLinkTypeIdentifier;
  linkTypeSide: DerivedPropertyLinkTypeSide;
}
export interface LinkTypeLinkDefinitionModification {
  linkTypeIdentifier: DerivedPropertyLinkTypeIdentifierInRequest;
  linkTypeSide?: DerivedPropertyLinkTypeSide | null | undefined;
}
/**
 * A link definition formed from sequentially traversing one or more multi hop steps.
 */
export interface MultiHopLinkDefinition {
  steps: Array<MultiHopStepDefinition>;
}
/**
 * A link definition formed from sequentially traversing one or more multi hop steps.
 */
export interface MultiHopLinkDefinitionModification {
  steps: Array<MultiHopStepDefinitionModification>;
}
export interface MultiHopStepDefinition_searchAround {
  type: "searchAround";
  searchAround: SearchAroundStep;
}
export type MultiHopStepDefinition = MultiHopStepDefinition_searchAround;

export interface MultiHopStepDefinitionModification_searchAround {
  type: "searchAround";
  searchAround: SearchAroundStepModification;
}
export type MultiHopStepDefinitionModification =
  MultiHopStepDefinitionModification_searchAround;

/**
 * A derived property that references aggregations on a linked object type.
 * The linked object type is specified by a LinkDefinition.
 */
export interface OntologyIrAggregatedPropertiesDefinition {
  linkDefinition: OntologyIrLinkDefinition;
  propertyTypeMapping: Record<
    _api_ObjectTypeFieldApiName,
    OntologyIrDerivedPropertyAggregation
  >;
}
export interface OntologyIrDerivedPropertiesDefinition_linkedProperties {
  type: "linkedProperties";
  linkedProperties: OntologyIrLinkedPropertiesDefinition;
}

export interface OntologyIrDerivedPropertiesDefinition_aggregatedProperties {
  type: "aggregatedProperties";
  aggregatedProperties: OntologyIrAggregatedPropertiesDefinition;
}
export type OntologyIrDerivedPropertiesDefinition =
  | OntologyIrDerivedPropertiesDefinition_linkedProperties
  | OntologyIrDerivedPropertiesDefinition_aggregatedProperties;

export interface OntologyIrDerivedPropertyAggregation_count {
  type: "count";
  count: LinkedCountMetric;
}

export interface OntologyIrDerivedPropertyAggregation_avg {
  type: "avg";
  avg: OntologyIrPropertyTypeIdentifier;
}

export interface OntologyIrDerivedPropertyAggregation_max {
  type: "max";
  max: OntologyIrPropertyTypeIdentifier;
}

export interface OntologyIrDerivedPropertyAggregation_min {
  type: "min";
  min: OntologyIrPropertyTypeIdentifier;
}

export interface OntologyIrDerivedPropertyAggregation_sum {
  type: "sum";
  sum: OntologyIrPropertyTypeIdentifier;
}

export interface OntologyIrDerivedPropertyAggregation_approximateCardinality {
  type: "approximateCardinality";
  approximateCardinality: OntologyIrPropertyTypeIdentifier;
}

export interface OntologyIrDerivedPropertyAggregation_exactCardinality {
  type: "exactCardinality";
  exactCardinality: OntologyIrPropertyTypeIdentifier;
}

export interface OntologyIrDerivedPropertyAggregation_collectList {
  type: "collectList";
  collectList: OntologyIrLinkedCollection;
}

export interface OntologyIrDerivedPropertyAggregation_collectSet {
  type: "collectSet";
  collectSet: OntologyIrLinkedCollection;
}
/**
 * An aggregation function and what it should be computed on (e.g. a property type on the linked object type).
 */
export type OntologyIrDerivedPropertyAggregation =
  | OntologyIrDerivedPropertyAggregation_count
  | OntologyIrDerivedPropertyAggregation_avg
  | OntologyIrDerivedPropertyAggregation_max
  | OntologyIrDerivedPropertyAggregation_min
  | OntologyIrDerivedPropertyAggregation_sum
  | OntologyIrDerivedPropertyAggregation_approximateCardinality
  | OntologyIrDerivedPropertyAggregation_exactCardinality
  | OntologyIrDerivedPropertyAggregation_collectList
  | OntologyIrDerivedPropertyAggregation_collectSet;

export interface OntologyIrDerivedPropertyLinkTypeIdentifier_linkType {
  type: "linkType";
  linkType: _api_LinkTypeId;
}
export type OntologyIrDerivedPropertyLinkTypeIdentifier =
  OntologyIrDerivedPropertyLinkTypeIdentifier_linkType;

export interface OntologyIrLinkDefinition_linkTypeLink {
  type: "linkTypeLink";
  linkTypeLink: OntologyIrLinkTypeLinkDefinition;
}

export interface OntologyIrLinkDefinition_multiHopLink {
  type: "multiHopLink";
  multiHopLink: OntologyIrMultiHopLinkDefinition;
}
export type OntologyIrLinkDefinition =
  | OntologyIrLinkDefinition_linkTypeLink
  | OntologyIrLinkDefinition_multiHopLink;

/**
 * A collection of values of a property type.
 */
export interface OntologyIrLinkedCollection {
  limit: number;
  linkedProperty: OntologyIrPropertyTypeIdentifier;
}
/**
 * A derived property definition that references property types on a linked object type.
 * The linked object type is specified by a LinkDefinition.
 */
export interface OntologyIrLinkedPropertiesDefinition {
  linkDefinition: OntologyIrLinkDefinition;
  propertyTypeMapping: Record<
    _api_ObjectTypeFieldApiName,
    OntologyIrPropertyTypeIdentifier
  >;
}
export interface OntologyIrLinkTypeLinkDefinition {
  linkTypeIdentifier: OntologyIrDerivedPropertyLinkTypeIdentifier;
  linkTypeSide: DerivedPropertyLinkTypeSide;
}
/**
 * A link definition formed from sequentially traversing one or more multi hop steps.
 */
export interface OntologyIrMultiHopLinkDefinition {
  steps: Array<OntologyIrMultiHopStepDefinition>;
}
export interface OntologyIrMultiHopStepDefinition_searchAround {
  type: "searchAround";
  searchAround: OntologyIrSearchAroundStep;
}
export type OntologyIrMultiHopStepDefinition =
  OntologyIrMultiHopStepDefinition_searchAround;

export interface OntologyIrPropertyTypeIdentifier_propertyType {
  type: "propertyType";
  propertyType: _api_ObjectTypeFieldApiName;
}
export type OntologyIrPropertyTypeIdentifier =
  OntologyIrPropertyTypeIdentifier_propertyType;

export interface OntologyIrSearchAroundStep {
  linkTypeIdentifier: OntologyIrDerivedPropertyLinkTypeIdentifier;
  linkTypeSide: DerivedPropertyLinkTypeSide;
}
export interface PropertyTypeIdentifier_propertyType {
  type: "propertyType";
  propertyType: _api_PropertyTypeRid;
}
export type PropertyTypeIdentifier = PropertyTypeIdentifier_propertyType;

export interface PropertyTypeIdentifierInRequest_propertyType {
  type: "propertyType";
  propertyType: _api_PropertyTypeId;
}

export interface PropertyTypeIdentifierInRequest_propertyTypeRid {
  type: "propertyTypeRid";
  propertyTypeRid: _api_PropertyTypeRid;
}
export type PropertyTypeIdentifierInRequest =
  | PropertyTypeIdentifierInRequest_propertyType
  | PropertyTypeIdentifierInRequest_propertyTypeRid;

export interface SearchAroundStep {
  linkTypeIdentifier: DerivedPropertyLinkTypeIdentifier;
  linkTypeSide: DerivedPropertyLinkTypeSide;
}
export interface SearchAroundStepModification {
  linkTypeIdentifier: DerivedPropertyLinkTypeIdentifierInRequest;
  linkTypeSide?: DerivedPropertyLinkTypeSide | null | undefined;
}
export interface StorageAggregatedPropertiesDefinition {
  linkDefinition: StorageLinkDefinition;
  propertyTypeMapping: Record<
    _api_PropertyTypeRid,
    StorageDerivedPropertyAggregation
  >;
}
export interface StorageDerivedPropertiesDefinition_linkedProperties {
  type: "linkedProperties";
  linkedProperties: StorageLinkedPropertiesDefinition;
}

export interface StorageDerivedPropertiesDefinition_aggregatedProperties {
  type: "aggregatedProperties";
  aggregatedProperties: StorageAggregatedPropertiesDefinition;
}
export type StorageDerivedPropertiesDefinition =
  | StorageDerivedPropertiesDefinition_linkedProperties
  | StorageDerivedPropertiesDefinition_aggregatedProperties;

export interface StorageDerivedPropertyAggregation_count {
  type: "count";
  count: StorageLinkedCountMetric;
}

export interface StorageDerivedPropertyAggregation_avg {
  type: "avg";
  avg: StoragePropertyTypeIdentifier;
}

export interface StorageDerivedPropertyAggregation_max {
  type: "max";
  max: StoragePropertyTypeIdentifier;
}

export interface StorageDerivedPropertyAggregation_min {
  type: "min";
  min: StoragePropertyTypeIdentifier;
}

export interface StorageDerivedPropertyAggregation_sum {
  type: "sum";
  sum: StoragePropertyTypeIdentifier;
}

export interface StorageDerivedPropertyAggregation_approximateCardinality {
  type: "approximateCardinality";
  approximateCardinality: StoragePropertyTypeIdentifier;
}

export interface StorageDerivedPropertyAggregation_exactCardinality {
  type: "exactCardinality";
  exactCardinality: StoragePropertyTypeIdentifier;
}

export interface StorageDerivedPropertyAggregation_collectList {
  type: "collectList";
  collectList: StorageLinkedCollection;
}

export interface StorageDerivedPropertyAggregation_collectSet {
  type: "collectSet";
  collectSet: StorageLinkedCollection;
}
export type StorageDerivedPropertyAggregation =
  | StorageDerivedPropertyAggregation_count
  | StorageDerivedPropertyAggregation_avg
  | StorageDerivedPropertyAggregation_max
  | StorageDerivedPropertyAggregation_min
  | StorageDerivedPropertyAggregation_sum
  | StorageDerivedPropertyAggregation_approximateCardinality
  | StorageDerivedPropertyAggregation_exactCardinality
  | StorageDerivedPropertyAggregation_collectList
  | StorageDerivedPropertyAggregation_collectSet;

export interface StorageDerivedPropertyLinkTypeIdentifier_linkType {
  type: "linkType";
  linkType: _api_LinkTypeRid;
}
export type StorageDerivedPropertyLinkTypeIdentifier =
  StorageDerivedPropertyLinkTypeIdentifier_linkType;

export interface StorageDerivedPropertyLinkTypeIdentifierInRequest_linkType {
  type: "linkType";
  linkType: _api_LinkTypeId;
}

export interface StorageDerivedPropertyLinkTypeIdentifierInRequest_linkTypeRid {
  type: "linkTypeRid";
  linkTypeRid: _api_LinkTypeRid;
}
export type StorageDerivedPropertyLinkTypeIdentifierInRequest =
  | StorageDerivedPropertyLinkTypeIdentifierInRequest_linkType
  | StorageDerivedPropertyLinkTypeIdentifierInRequest_linkTypeRid;

export interface StorageLinkDefinition_linkTypeLink {
  type: "linkTypeLink";
  linkTypeLink: StorageLinkTypeLinkDefinition;
}

export interface StorageLinkDefinition_multiHopLink {
  type: "multiHopLink";
  multiHopLink: StorageMultiHopLinkDefinition;
}
export type StorageLinkDefinition =
  | StorageLinkDefinition_linkTypeLink
  | StorageLinkDefinition_multiHopLink;

export interface StorageLinkedCollection {
  limit: number;
  linkedProperty: StoragePropertyTypeIdentifier;
}
export interface StorageLinkedCountMetric {
}
export interface StorageLinkedPropertiesDefinition {
  linkDefinition: StorageLinkDefinition;
  propertyTypeMapping: Record<
    _api_PropertyTypeRid,
    StoragePropertyTypeIdentifier
  >;
}
export interface StorageLinkTypeLinkDefinition {
  linkTypeIdentifier: StorageDerivedPropertyLinkTypeIdentifier;
  linkTypeSide?: DerivedPropertyLinkTypeSide | null | undefined;
}
export interface StorageMultiHopLinkDefinition {
  steps: Array<StorageMultiHopStepDefinition>;
}
export interface StorageMultiHopStepDefinition_searchAround {
  type: "searchAround";
  searchAround: StorageSearchAroundStep;
}
export type StorageMultiHopStepDefinition =
  StorageMultiHopStepDefinition_searchAround;

export interface StoragePropertyTypeIdentifier_propertyType {
  type: "propertyType";
  propertyType: _api_PropertyTypeRid;
}
export type StoragePropertyTypeIdentifier =
  StoragePropertyTypeIdentifier_propertyType;

export interface StoragePropertyTypeIdentifierInRequest_propertyType {
  type: "propertyType";
  propertyType: _api_PropertyTypeId;
}

export interface StoragePropertyTypeIdentifierInRequest_propertyTypeRid {
  type: "propertyTypeRid";
  propertyTypeRid: _api_PropertyTypeRid;
}
export type StoragePropertyTypeIdentifierInRequest =
  | StoragePropertyTypeIdentifierInRequest_propertyType
  | StoragePropertyTypeIdentifierInRequest_propertyTypeRid;

export interface StorageSearchAroundStep {
  linkTypeIdentifier: StorageDerivedPropertyLinkTypeIdentifier;
  linkTypeSide: DerivedPropertyLinkTypeSide;
}
