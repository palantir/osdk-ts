import { DistanceUnit } from "./DistanceUnit";

/** A measurement of distance. */
export interface Distance {
    value: number;
    unit: DistanceUnit;
}
