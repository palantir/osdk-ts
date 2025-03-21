import type { DataType } from "../DataType.js";
import type { ValueReferenceId } from "../ValueReferenceId.js";
import type { RuleChain } from "./RuleChain.js";
import type { RuleSetIdInRequest } from "./RuleSetIdInRequest.js";
import type { RuleSetNamedType } from "./RuleSetNamedType.js";
export interface RuleSetCreate {
	id: RuleSetIdInRequest;
	name: string;
	description: string | undefined;
	itType: DataType | undefined;
	namedTypes: Record<ValueReferenceId, RuleSetNamedType>;
	chains: Array<RuleChain>;
}
