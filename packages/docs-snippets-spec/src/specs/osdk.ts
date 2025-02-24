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

import type { DocsSnippetsSpec, SnippetVariables } from "../spec.js";

const CodeSnippetBaseTemplateStrings = {} as const satisfies SnippetVariables;

const AttachmentUploadTemplateStrings = {
  hasAttachmentUpload: "required",
  attachmentProperty: "optional",
  hasAttachmentImports: "required",
} as const satisfies SnippetVariables;

const ObjectTypeTemplateStrings = {
  objectType: "required",
  titleProperty: "required",
  titlePropertySnakeCase: "required",
  allCapsTitlePropertySnakeCase: "required",
  properties: "required",
  primaryKeyProperty: "required",
} as const satisfies SnippetVariables;

const ObjectTypeWithLinkTemplateStrings = {
  sourceObjectType: "required",
  linkedObjectType: "required",
  linkApiName: "required",
  linkApiNameSnakeCase: "required",
  isLinkManySided: "required",
  linkedProperties: "required",
  linkedPrimaryKeyProperty: "required",
} as const satisfies SnippetVariables;

const ObjectTypeWithPropertyTemplateStrings = {
  objectType: "required",
  property: "required",
  propertySnakeCase: "required",
  isDateProperty: "required",
  isTimestampProperty: "required",
  properties: "required",
  primaryKeyProperty: "required",
  propertyValue: "required",
  rawPropertyValue: "required",
  propertyValueIncremented: "required",
  rawPropertyValueIncremented: "required",
} as const satisfies SnippetVariables;

const RangeObjectTypeWithPropertyTemplateStrings = {
  ...ObjectTypeWithPropertyTemplateStrings,
  operation: "required",
  operationSymbol: "required",
} as const satisfies SnippetVariables;

const NumericAggregationObjectTypeWithPropertyTemplateStrings = {
  ...ObjectTypeWithPropertyTemplateStrings,
  operation: "required",
} as const satisfies SnippetVariables;

const DurationObjectTypeWithPropertyTemplateStrings = {
  ...ObjectTypeWithPropertyTemplateStrings,
  duration: "required",
  durationText: "required",
  durationLowercase: "required",
} as const satisfies SnippetVariables;

const DistanceObjectTypeWithPropertyTemplateStrings = {
  ...ObjectTypeWithPropertyTemplateStrings,
  distanceUnit: "required",
  distanceUnitText: "required",
} as const satisfies SnippetVariables;

const GeoIntersectionPropertyTemplateStrings = {
  ...ObjectTypeWithPropertyTemplateStrings,
  intersects: "required",
} as const satisfies SnippetVariables;

const TimeUnitPropertyTemplateStrings = {
  ...ObjectTypeWithPropertyTemplateStrings,
  timeUnit: "required",
  timeUnitValue: "required",
} as const satisfies SnippetVariables;

const FunctionTemplateStrings = {
  ...CodeSnippetBaseTemplateStrings,
  ...AttachmentUploadTemplateStrings,
  funcApiName: "required",
  rawFuncApiName: "required",
  funcApiNameSnakeCase: "required",
  functionInputValues: "required",
  hasTimestampInputs: "required",
  hasDateInputs: "required",
  needsImports: "required",
} as const satisfies SnippetVariables;

const ActionTemplateStrings = {
  ...CodeSnippetBaseTemplateStrings,
  ...AttachmentUploadTemplateStrings,
  actionApiName: "required",
  rawActionApiName: "required",
  actionApiNameUpperCaseFirstCharacter: "required",
  actionApiNameSnakeCase: "required",
  hasTimestampInputs: "required",
  hasDateInputs: "required",
  needsImports: "required",
  actionEditAddObjectTypes: "required",
  actionEditModifyObjectTypes: "required",
  actionEditDeleteObjectCount: "required",
  actionEditAddedLinksCount: "required",
  actionEditDeletedLinksCount: "required",
  hasEditObjectTypes: "required",
  hasParameters: "required",
  actionTypeParameterValues: "required",
} as const satisfies SnippetVariables;

const BatchActionTemplateStrings = {
  ...ActionTemplateStrings,
  actionApiNameBatchRequest: "required",
} as const satisfies SnippetVariables;

const InterfaceTemplateStrings = {
  interfaceApiName: "required",
} as const satisfies SnippetVariables;

const InterfaceCastingTemplateStrings = {
  interfaceApiName: "required",
  objectTypeApiName: "required",
  interfaceApiNameCamelCase: "required",
  objectTypeApiNameCamelCase: "required",
} as const satisfies SnippetVariables;

const AttachmentTemplateStrings = {} as const satisfies SnippetVariables;

const MediaTemplateStrings = {
  objectType: "required",
  rawObjectTypeApiName: "required",
  property: "required",
} as const satisfies SnippetVariables;

export const OSDK_SNIPPETS_SPEC = {
  version: 1,
  snippets: {
    // loadObjectSnippets
    loadSingleObjectGuide: {
      variables: {
        ...ObjectTypeTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    loadObjectPageGuide: {
      variables: {
        ...ObjectTypeTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    orderObjectsGuide: {
      variables: {
        ...ObjectTypeTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    searchObjectsGuide: {
      variables: {
        ...ObjectTypeTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    loadSingleObjectReference: {
      variables: {
        ...ObjectTypeTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    loadObjectsReference: {
      variables: {
        ...ObjectTypeTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    loadAllObjectsReference: {
      variables: {
        ...ObjectTypeTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    loadLinkedObjectReference: {
      variables: {
        ...ObjectTypeWithLinkTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    loadLinkedObjectsReference: {
      variables: {
        ...ObjectTypeWithLinkTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    // aggregationSnippets
    aggregationTemplate: {
      variables: {
        ...ObjectTypeWithPropertyTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    countAggregationTemplate: {
      variables: {
        ...ObjectTypeTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    approximateDistinctAggregationTemplate: {
      variables: {
        ...ObjectTypeWithPropertyTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    exactDistinctAggregationTemplate: {
      variables: {
        ...ObjectTypeWithPropertyTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    numericAggregationTemplate: {
      variables: {
        ...NumericAggregationObjectTypeWithPropertyTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    fixedWidthGroupByTemplate: {
      variables: {
        ...ObjectTypeWithPropertyTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    durationGroupByTemplate: {
      variables: {
        ...DurationObjectTypeWithPropertyTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    exactGroupByTemplate: {
      variables: {
        ...ObjectTypeWithPropertyTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    rangeGroupByTemplate: {
      variables: {
        ...RangeObjectTypeWithPropertyTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    // applyActionSnippets
    applyAction: {
      variables: {
        ...ActionTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    batchApplyAction: {
      variables: {
        ...BatchActionTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    // attachmentSnippets
    uploadAttachment: {
      variables: {
        ...AttachmentTemplateStrings,
        packageName: "required",
      },
    },
    // mediaSnippets
    uploadMedia: {
      variables: {
        ...MediaTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    readMedia: {
      variables: {
        ...MediaTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    // castInterfacesSnippets
    castInterfaceToObjectReference: {
      variables: {
        ...InterfaceCastingTemplateStrings,
        packageName: "required",
      },
    },
    // executeFunctionSnippet
    executeFunction: {
      variables: {
        ...FunctionTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    // filterObjectsSnippets
    stringStartsWithTemplate: {
      variables: {
        ...ObjectTypeWithPropertyTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    containsAllTermsInOrderTemplate: {
      variables: {
        ...ObjectTypeWithPropertyTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    containsAnyTermTemplate: {
      variables: {
        ...ObjectTypeWithPropertyTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    containsAllTermsTemplate: {
      variables: {
        ...ObjectTypeWithPropertyTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    equalityTemplate: {
      variables: {
        ...ObjectTypeWithPropertyTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    inFilterTemplate: {
      variables: {
        ...ObjectTypeWithPropertyTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    nullTemplate: {
      variables: {
        ...ObjectTypeWithPropertyTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    rangeTemplate: {
      variables: {
        ...ObjectTypeWithPropertyTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    withinDistanceTemplate: {
      variables: {
        ...DistanceObjectTypeWithPropertyTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    withinBoundingBoxTemplate: {
      variables: {
        ...ObjectTypeWithPropertyTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    withinPolygonTemplate: {
      variables: {
        ...ObjectTypeWithPropertyTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    intersectsPolygonTemplate: {
      variables: {
        ...GeoIntersectionPropertyTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    intersectsBboxTemplate: {
      variables: {
        ...GeoIntersectionPropertyTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    notTemplate: {
      variables: {
        ...ObjectTypeTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    andTemplate: {
      variables: {
        ...ObjectTypeTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    orTemplate: {
      variables: {
        ...ObjectTypeTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    // loadInterfacesSnippets
    loadInterfacesReference: {
      variables: {
        ...InterfaceTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    loadAllInterfacesReference: {
      variables: {
        ...InterfaceTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    loadOrderedInterfacesReference: {
      variables: {
        ...InterfaceTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    searchInterfacesReference: {
      variables: {
        ...InterfaceTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    // loadTimeSeriesSnippets
    loadTimeSeriesPointsSnippet: {
      variables: {
        ...ObjectTypeWithPropertyTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    loadRelativeTimeSeriesPointsSnippet: {
      variables: {
        ...TimeUnitPropertyTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    loadAbsoluteTimeSeriesPointsSnippet: {
      variables: {
        ...ObjectTypeWithPropertyTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    loadTimeSeriesFirstPointSnippet: {
      variables: {
        ...ObjectTypeWithPropertyTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    loadTimeSeriesLastPointSnippet: {
      variables: {
        ...ObjectTypeWithPropertyTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    // metadataSnippets
    loadObjectMetadataSnippet: {
      variables: {
        ...ObjectTypeWithPropertyTemplateStrings,
        rawOntologyApiName: "required",
        packageName: "required",
      },
    },
    // subscribeSnippets
    subscribeToObjectSetInstructions: {
      variables: {
        ...ObjectTypeTemplateStrings,
        packageName: "required",
      },
    },
  },
} as const satisfies DocsSnippetsSpec;
