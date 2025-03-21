import type { WorkflowObjectTypeTraitId } from "../WorkflowObjectTypeTraitId.js";
import type { WorkflowObjectTypeTraitVersion } from "../WorkflowObjectTypeTraitVersion.js";
import type { ActionLogMetadataModification } from "./ActionLogMetadataModification.js";
import type { EventMetadataModification } from "./EventMetadataModification.js";
import type { ObjectTypePeeringMetadataModification } from "./ObjectTypePeeringMetadataModification.js";
import type { SensorTraitModification } from "./SensorTraitModification.js";
import type { TimeSeriesMetadataModification } from "./TimeSeriesMetadataModification.js";
import type { WorkflowObjectTypeTraitImplModification } from "./WorkflowObjectTypeTraitImplModification.js";
export interface ObjectTypeTraitsModification {
	eventMetadata: EventMetadataModification | undefined;
	actionLogMetadata: ActionLogMetadataModification | undefined;
	timeSeriesMetadata: TimeSeriesMetadataModification | undefined;
	peeringMetadata: ObjectTypePeeringMetadataModification | undefined;
	sensorTrait: SensorTraitModification | undefined;
	workflowObjectTypeTraits: Record<WorkflowObjectTypeTraitId, Record<WorkflowObjectTypeTraitVersion, WorkflowObjectTypeTraitImplModification>>;
}
