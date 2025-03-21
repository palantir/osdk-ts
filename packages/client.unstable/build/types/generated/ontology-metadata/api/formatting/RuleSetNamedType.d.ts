import type { DataType } from "../DataType.js";
import type { ValueReferenceId } from "../ValueReferenceId.js";
export interface RuleSetNamedType {
	name: string;
	id: ValueReferenceId;
	type: DataType;
}
