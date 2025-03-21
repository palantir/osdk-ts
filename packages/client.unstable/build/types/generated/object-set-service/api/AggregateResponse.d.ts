import type { AggregateResult } from "./AggregateResult.js";
import type { ObjectSetEntities } from "./ObjectSetEntities.js";
import type { UsageCost } from "./UsageCost.js";
export interface AggregateResponse {
	result: AggregateResult;
	objectSetEntities: ObjectSetEntities | undefined;
	usageCost: UsageCost | undefined;
}
