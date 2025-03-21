import type { ValueReferenceId } from "../ValueReferenceId.js";
import type { It } from "./It.js";
export interface ValueReference_it {
	type: "it";
	it: It;
}
export interface ValueReference_valueReferenceId {
	type: "valueReferenceId";
	valueReferenceId: ValueReferenceId;
}
export type ValueReference = ValueReference_it | ValueReference_valueReferenceId;
