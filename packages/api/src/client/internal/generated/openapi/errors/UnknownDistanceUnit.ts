import { DistanceUnit } from "../components/DistanceUnit";

/** An unknown distance unit was provided. */
export interface UnknownDistanceUnit {
    errorCode: "INVALID_ARGUMENT";
    errorName: "UnknownDistanceUnit";
    errorInstanceId: string;
    parameters: {
        unknownUnit: string;
        knownUnits: Array<DistanceUnit>;
    };
}
