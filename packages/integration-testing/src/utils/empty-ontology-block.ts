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

import type { PreviewOntologyIrConverter } from "@osdk/generator-converters.preview";

type OntologyBlockDataV2 = Parameters<
  typeof PreviewOntologyIrConverter.getPreviewFullMetadataFromBlockData
>[0];

export const EMPTY_ONTOLOGY_BLOCK_DATA: OntologyBlockDataV2 = {
  objectTypes: {},
  sharedPropertyTypes: {},
  interfaceTypes: {},
  linkTypes: {},
  actionTypes: {},
  blockPermissionInformation: {
    actionTypes: {},
    objectTypes: {},
    linkTypes: {},
    interfaceTypes: {},
    sharedPropertyTypes: {},
  },
  blockOutputCompassLocations: {},
  knownIdentifiers: {
    actionParameterIds: {},
    actionParameters: {},
    actionTypes: {},
    datasourceColumns: {},
    datasources: {},
    filesDatasources: {},
    functions: {},
    geotimeSeriesSyncs: {},
    groupIds: {},
    interfaceActionTypeConstraints: {},
    interfaceLinkTypes: {},
    interfaceParameterConstraints: {},
    interfacePropertyTypes: {},
    interfaceTypes: {},
    linkTypeIds: {},
    linkTypes: {},
    markings: {},
    objectPropertyTypeIdsToRids: {},
    objectTypeIds: {},
    objectTypes: {},
    propertyTypeIds: {},
    propertyTypes: {},
    sharedPropertyTypes: {},
    structFieldRidsToApiNames: {},
    timeSeriesSyncs: {},
    valueTypes: {},
    webhooks: {},
    workshopModules: {},
  },
  ruleSets: {},
};
