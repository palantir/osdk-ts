import type { ActionLogMetadata } from "./ActionLogMetadata.js";
import type { ObjectTypePeeringMetadata } from "./ObjectTypePeeringMetadata.js";
import type { OntologyIrEventMetadata } from "./OntologyIrEventMetadata.js";
import type { OntologyIrSensorTrait } from "./OntologyIrSensorTrait.js";
import type { OntologyIrTimeSeriesMetadata } from "./OntologyIrTimeSeriesMetadata.js";
import type { OntologyIrWorkflowObjectTypeTraitImpl } from "./OntologyIrWorkflowObjectTypeTraitImpl.js";
import type { WorkflowObjectTypeTraitId } from "./WorkflowObjectTypeTraitId.js";
import type { WorkflowObjectTypeTraitVersion } from "./WorkflowObjectTypeTraitVersion.js";
export interface OntologyIrObjectTypeTraits {
	eventMetadata: OntologyIrEventMetadata | undefined;
	actionLogMetadata: ActionLogMetadata | undefined;
	timeSeriesMetadata: OntologyIrTimeSeriesMetadata | undefined;
	peeringMetadata: ObjectTypePeeringMetadata | undefined;
	sensorTrait: OntologyIrSensorTrait | undefined;
	workflowObjectTypeTraits: Record<WorkflowObjectTypeTraitId, Record<WorkflowObjectTypeTraitVersion, OntologyIrWorkflowObjectTypeTraitImpl>>;
}
