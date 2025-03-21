import type { ParameterId } from "./ParameterId.js";
import type { ParameterRid } from "./ParameterRid.js";
export interface ActionTypeParameterIdentifier_rid {
	type: "rid";
	rid: ParameterRid;
}
export interface ActionTypeParameterIdentifier_id {
	type: "id";
	id: ParameterId;
}
/**
* A type to uniquely identify an ActionType Parameter.
*/
export type ActionTypeParameterIdentifier = ActionTypeParameterIdentifier_rid | ActionTypeParameterIdentifier_id;
