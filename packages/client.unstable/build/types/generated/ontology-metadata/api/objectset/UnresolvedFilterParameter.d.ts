import type { ConditionValueId } from "../types/ConditionValueId.js";
import type { FilterValue } from "./FilterValue.js";
export interface UnresolvedFilterParameter {
	parameterId: ConditionValueId;
	name: string;
	description: string | undefined;
	defaultValue: FilterValue | undefined;
}
