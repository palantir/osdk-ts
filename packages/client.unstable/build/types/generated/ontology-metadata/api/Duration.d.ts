import type { TemporalUnit } from "./types/TemporalUnit.js";
export interface Duration {
	value: number;
	unit: TemporalUnit;
}
