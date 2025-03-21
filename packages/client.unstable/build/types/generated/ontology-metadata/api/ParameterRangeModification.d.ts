import type { ParameterRangeValueModification } from "./ParameterRangeValueModification.js";
export interface ParameterRangeModification {
	minimum: ParameterRangeValueModification | undefined;
	maximum: ParameterRangeValueModification | undefined;
}
