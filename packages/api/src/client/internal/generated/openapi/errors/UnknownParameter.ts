import { ParameterId } from "../components/ParameterId";

/**
 * The provided parameters were not found. Please look at the `knownParameters` field
 * to see which ones are available.
 *
 */
export interface UnknownParameter {
    errorCode: "INVALID_ARGUMENT";
    errorName: "UnknownParameter";
    errorInstanceId: string;
    parameters: {
        unknownParameters: Array<ParameterId>;
        expectedParameters: Array<ParameterId>;
    };
}
