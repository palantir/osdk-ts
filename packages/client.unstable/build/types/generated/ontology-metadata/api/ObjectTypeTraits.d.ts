import type { ActionLogMetadata } from "./ActionLogMetadata.js";
import type { EventMetadata } from "./EventMetadata.js";
import type { ObjectTypePeeringMetadata } from "./ObjectTypePeeringMetadata.js";
import type { SensorTrait } from "./SensorTrait.js";
import type { TimeSeriesMetadata } from "./TimeSeriesMetadata.js";
import type { WorkflowObjectTypeTraitId } from "./WorkflowObjectTypeTraitId.js";
import type { WorkflowObjectTypeTraitImpl } from "./WorkflowObjectTypeTraitImpl.js";
import type { WorkflowObjectTypeTraitVersion } from "./WorkflowObjectTypeTraitVersion.js";
export interface ObjectTypeTraits {
	eventMetadata: EventMetadata | undefined;
	actionLogMetadata: ActionLogMetadata | undefined;
	timeSeriesMetadata: TimeSeriesMetadata | undefined;
	peeringMetadata: ObjectTypePeeringMetadata | undefined;
	sensorTrait: SensorTrait | undefined;
	workflowObjectTypeTraits: Record<WorkflowObjectTypeTraitId, Record<WorkflowObjectTypeTraitVersion, WorkflowObjectTypeTraitImpl>>;
}
