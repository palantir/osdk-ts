import type { DistanceUnit } from "./DistanceUnit.js";
/**
* Geospatial distance.
*/
export interface Distance {
	value: number;
	unit: DistanceUnit;
}
