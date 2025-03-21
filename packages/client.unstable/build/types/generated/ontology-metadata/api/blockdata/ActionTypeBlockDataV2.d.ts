import type { ActionType } from "../ActionType.js";
import type { ParameterId } from "../ParameterId.js";
import type { ActionParameterShapeId } from "./ActionParameterShapeId.js";
export interface ActionTypeBlockDataV2 {
	actionType: ActionType;
	parameterIds: Record<ActionParameterShapeId, ParameterId>;
}
