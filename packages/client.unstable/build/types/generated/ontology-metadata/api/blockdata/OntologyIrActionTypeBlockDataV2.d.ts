import type { OntologyIrActionType } from "../OntologyIrActionType.js";
import type { ParameterId } from "../ParameterId.js";
import type { ActionParameterShapeId } from "./ActionParameterShapeId.js";
export interface OntologyIrActionTypeBlockDataV2 {
	actionType: OntologyIrActionType;
	parameterIds: Record<ActionParameterShapeId, ParameterId>;
}
