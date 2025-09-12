/**
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
 *
 * WARNING: This file is generated automatically by the generateExamples.mjs script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

/* eslint-disable no-unused-vars */

// Example: index (TYPESCRIPT Examples - SDK Version 2.0.0)

// This file was automatically generated from the typescript-sdk-docs package

// loadSingleObjectGuide
// See: ./loadSingleObjectGuide.ts

// loadObjectPageGuide
// See: ./loadObjectPageGuide.ts

// orderObjectsGuide
// See: ./orderObjectsGuide.ts

// searchObjectsGuide
// See: ./searchObjectsGuide.ts

// loadSingleObjectReference
// See: ./loadSingleObjectReference.ts

// loadObjectsReference
// See: ./loadObjectsReference.ts

// loadAllObjectsReference
// See: ./loadAllObjectsReference.ts

// loadLinkedObjectReference
// See: ./loadLinkedObjectReference.ts

// loadLinkedObjectsReference
// See: ./loadLinkedObjectsReference.ts

// aggregationTemplate
// See: ./aggregationTemplate.ts

// countAggregationTemplate
// See: ./countAggregationTemplate.ts

// approximateDistinctAggregationTemplate
// See: ./approximateDistinctAggregationTemplate.ts

// exactDistinctAggregationTemplate
// See: ./exactDistinctAggregationTemplate.ts

// numericAggregationTemplate
// See: ./numericAggregationTemplate.ts

// fixedWidthGroupByTemplate
// See: ./fixedWidthGroupByTemplate.ts

// durationGroupByTemplate (variations only)
// See: ./durationGroupByTemplate_#durationText.ts (Standard block: durationText = true)

// exactGroupByTemplate
// See: ./exactGroupByTemplate.ts

// rangeGroupByTemplate
// See: ./rangeGroupByTemplate.ts

// applyAction (variations only)
// See: ./applyAction_#hasAttachmentImports.ts (Standard block: hasAttachmentImports = true)
// See: ./applyAction_#hasMediaParameter.ts (Standard block: hasMediaParameter = true)
// See: ./applyAction_#hasAttachmentUpload.ts (Standard block: hasAttachmentUpload = true)
// See: ./applyAction_#attachmentProperty.ts (Standard block: attachmentProperty = true)
// See: ./applyAction_^hasParameters.ts (Inverted block: hasParameters = false)
// See: ./applyAction_#hasParameters.ts (Standard block: hasParameters = true)
// See: ./applyAction_#actionParameterSampleValuesV2.ts (Standard block: actionParameterSampleValuesV2 = true)
// See: ./applyAction_^last.ts (Inverted block: last = false)

// batchApplyAction (variations only)
// See: ./batchApplyAction_#hasAttachmentImports.ts (Standard block: hasAttachmentImports = true)
// See: ./batchApplyAction_#hasMediaParameter.ts (Standard block: hasMediaParameter = true)
// See: ./batchApplyAction_#hasAttachmentUpload.ts (Standard block: hasAttachmentUpload = true)
// See: ./batchApplyAction_#attachmentProperty.ts (Standard block: attachmentProperty = true)
// See: ./batchApplyAction_^hasParameters.ts (Inverted block: hasParameters = false)
// See: ./batchApplyAction_#hasParameters.ts (Standard block: hasParameters = true)
// See: ./batchApplyAction_#actionParameterSampleValuesV2.ts (Standard block: actionParameterSampleValuesV2 = true)
// See: ./batchApplyAction_^last.ts (Inverted block: last = false)

// uploadAttachment
// See: ./uploadAttachment.ts

// castInterfaceToObjectReference
// See: ./castInterfaceToObjectReference.ts

// executeFunction (variations only)
// See: ./executeFunction_#needsImports.ts (Standard block: needsImports = true)
// See: ./executeFunction_#hasAttachmentImports.ts (Standard block: hasAttachmentImports = true)
// See: ./executeFunction_#hasAttachmentUpload.ts (Standard block: hasAttachmentUpload = true)
// See: ./executeFunction_#attachmentProperty.ts (Standard block: attachmentProperty = true)

// stringStartsWithTemplate (variations only)
// See: ./stringStartsWithTemplate_#hasStructSubProperty.ts (Standard block: hasStructSubProperty = true)
// See: ./stringStartsWithTemplate_^hasStructSubProperty.ts (Inverted block: hasStructSubProperty = false)

// containsAllTermsInOrderTemplate (variations only)
// See: ./containsAllTermsInOrderTemplate_#hasStructSubProperty.ts (Standard block: hasStructSubProperty = true)
// See: ./containsAllTermsInOrderTemplate_^hasStructSubProperty.ts (Inverted block: hasStructSubProperty = false)

// containsAnyTermTemplate (variations only)
// See: ./containsAnyTermTemplate_#hasStructSubProperty.ts (Standard block: hasStructSubProperty = true)
// See: ./containsAnyTermTemplate_^hasStructSubProperty.ts (Inverted block: hasStructSubProperty = false)

// containsAllTermsTemplate (variations only)
// See: ./containsAllTermsTemplate_#hasStructSubProperty.ts (Standard block: hasStructSubProperty = true)
// See: ./containsAllTermsTemplate_^hasStructSubProperty.ts (Inverted block: hasStructSubProperty = false)

// equalityTemplate (variations only)
// See: ./equalityTemplate_#hasStructSubProperty.ts (Standard block: hasStructSubProperty = true)
// See: ./equalityTemplate_^hasStructSubProperty.ts (Inverted block: hasStructSubProperty = false)

// inFilterTemplate (variations only)
// See: ./inFilterTemplate_#hasStructSubProperty.ts (Standard block: hasStructSubProperty = true)
// See: ./inFilterTemplate_^hasStructSubProperty.ts (Inverted block: hasStructSubProperty = false)

// nullTemplate (variations only)
// See: ./nullTemplate_#hasStructSubProperty.ts (Standard block: hasStructSubProperty = true)
// See: ./nullTemplate_^hasStructSubProperty.ts (Inverted block: hasStructSubProperty = false)

// rangeTemplate (variations only)
// See: ./rangeTemplate_#hasStructSubProperty.ts (Standard block: hasStructSubProperty = true)
// See: ./rangeTemplate_^hasStructSubProperty.ts (Inverted block: hasStructSubProperty = false)

// withinDistanceTemplate (variations only)
// See: ./withinDistanceTemplate_#hasStructSubProperty.ts (Standard block: hasStructSubProperty = true)
// See: ./withinDistanceTemplate_^hasStructSubProperty.ts (Inverted block: hasStructSubProperty = false)

// withinBoundingBoxTemplate (variations only)
// See: ./withinBoundingBoxTemplate_#hasStructSubProperty.ts (Standard block: hasStructSubProperty = true)
// See: ./withinBoundingBoxTemplate_^hasStructSubProperty.ts (Inverted block: hasStructSubProperty = false)

// withinPolygonTemplate (variations only)
// See: ./withinPolygonTemplate_#hasStructSubProperty.ts (Standard block: hasStructSubProperty = true)
// See: ./withinPolygonTemplate_^hasStructSubProperty.ts (Inverted block: hasStructSubProperty = false)

// intersectsPolygonTemplate (variations only)
// See: ./intersectsPolygonTemplate_#hasStructSubProperty.ts (Standard block: hasStructSubProperty = true)
// See: ./intersectsPolygonTemplate_^hasStructSubProperty.ts (Inverted block: hasStructSubProperty = false)

// intersectsBboxTemplate (variations only)
// See: ./intersectsBboxTemplate_#hasStructSubProperty.ts (Standard block: hasStructSubProperty = true)
// See: ./intersectsBboxTemplate_^hasStructSubProperty.ts (Inverted block: hasStructSubProperty = false)

// notTemplate
// See: ./notTemplate.ts

// andTemplate
// See: ./andTemplate.ts

// orTemplate
// See: ./orTemplate.ts

// containsTemplate
// See: ./containsTemplate.ts

// loadInterfacesReference
// See: ./loadInterfacesReference.ts

// loadAllInterfacesReference
// See: ./loadAllInterfacesReference.ts

// loadOrderedInterfacesReference
// See: ./loadOrderedInterfacesReference.ts

// searchInterfacesReference
// See: ./searchInterfacesReference.ts

// loadTimeSeriesPointsSnippet
// See: ./loadTimeSeriesPointsSnippet.ts

// loadRelativeTimeSeriesPointsSnippet
// See: ./loadRelativeTimeSeriesPointsSnippet.ts

// loadAbsoluteTimeSeriesPointsSnippet
// See: ./loadAbsoluteTimeSeriesPointsSnippet.ts

// loadTimeSeriesFirstPointSnippet
// See: ./loadTimeSeriesFirstPointSnippet.ts

// loadTimeSeriesLastPointSnippet
// See: ./loadTimeSeriesLastPointSnippet.ts

// loadGeotimeSeriesPointsSnippet
// See: ./loadGeotimeSeriesPointsSnippet.ts

// loadRelativeGeotimeSeriesPointsSnippet
// See: ./loadRelativeGeotimeSeriesPointsSnippet.ts

// loadAbsoluteGeotimeSeriesPointsSnippet
// See: ./loadAbsoluteGeotimeSeriesPointsSnippet.ts

// loadGeotimeSeriesLastPointSnippet
// See: ./loadGeotimeSeriesLastPointSnippet.ts

// loadObjectMetadataSnippet
// See: ./loadObjectMetadataSnippet.ts

// loadInterfaceMetadataSnippet
// See: ./loadInterfaceMetadataSnippet.ts

// subscribeToObjectSetInstructions
// See: ./subscribeToObjectSetInstructions.ts

// uploadMedia
// See: ./uploadMedia.ts

// readMedia
// See: ./readMedia.ts

// derivedPropertyBaseExample
// See: ./derivedPropertyBaseExample.ts

// derivedPropertyApproximateDistinctAggregation
// See: ./derivedPropertyApproximateDistinctAggregation.ts

// derivedPropertyExactDistinctAggregation
// See: ./derivedPropertyExactDistinctAggregation.ts

// derivedPropertyCollectToListAggregation
// See: ./derivedPropertyCollectToListAggregation.ts

// derivedPropertyCollectToSetAggregation
// See: ./derivedPropertyCollectToSetAggregation.ts

// derivedPropertyCountAggregation
// See: ./derivedPropertyCountAggregation.ts

// derivedPropertySelectPropertyAggregation
// See: ./derivedPropertySelectPropertyAggregation.ts

// derivedPropertyApproximatePercentileAggregation
// See: ./derivedPropertyApproximatePercentileAggregation.ts

// derivedPropertyNumericAggregation
// See: ./derivedPropertyNumericAggregation.ts

// objectSetOperationsGuide
// See: ./objectSetOperationsGuide.ts

// objectSetOperationsUnion
// See: ./objectSetOperationsUnion.ts

// objectSetOperationsSubtract
// See: ./objectSetOperationsSubtract.ts

// objectSetOperationsIntersect
// See: ./objectSetOperationsIntersect.ts

// searchAround
// See: ./searchAround.ts

