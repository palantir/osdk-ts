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

export { modifyOntology } from "./OntologyModificationService/modifyOntology.js";
export { trashEntities } from "./OntologyModificationService/trashEntities.js";
export { untrashEntities } from "./OntologyModificationService/untrashEntities.js";
export { dryRunModifyOntology } from "./OntologyModificationService/dryRunModifyOntology.js";
export { getModificationHistory } from "./OntologyModificationService/getModificationHistory.js";
export { getModifiedEntities } from "./OntologyModificationService/getModifiedEntities.js";
export { loadAllOntologiesInternal } from "./OntologyModificationService/loadAllOntologiesInternal.js";
export { loadOntologyInformationInternal } from "./OntologyModificationService/loadOntologyInformationInternal.js";
export { bulkLoadOntologyInformationInternal } from "./OntologyModificationService/bulkLoadOntologyInformationInternal.js";
export { createOntology } from "./OntologyModificationService/createOntology.js";
export { updateOntology } from "./OntologyModificationService/updateOntology.js";
export { deleteOntology } from "./OntologyModificationService/deleteOntology.js";
export { getEntityModificationHistory } from "./OntologyModificationService/getEntityModificationHistory.js";
export { getEntityModificationHistoryV2 } from "./OntologyModificationService/getEntityModificationHistoryV2.js";
export { checkExistingUniqueIdentifiers } from "./OntologyModificationService/checkExistingUniqueIdentifiers.js";
export { updateEntityCompassTags } from "./OntologyModificationService/updateEntityCompassTags.js";
