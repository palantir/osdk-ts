import type { ValueTypeRid } from "./ValueTypeRid.js";
export interface ConflictingApiNameError {
	current: ValueTypeRid | undefined;
	conflicting: ValueTypeRid;
}
