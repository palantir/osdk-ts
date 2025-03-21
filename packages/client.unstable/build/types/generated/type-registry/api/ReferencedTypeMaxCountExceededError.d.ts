import type { BaseType } from "./BaseType.js";
export interface ReferencedTypeMaxCountExceededError {
	baseType: BaseType;
	count: number;
	maxCount: number;
}
