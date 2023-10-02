import { ParameterId } from "../components/ParameterId";

/**
 * Required parameters are missing. Please look at the `parameters` field to see which required parameters are
 * missing from the request.
 *
 */
export interface MissingParameter {
    errorCode: "INVALID_ARGUMENT";
    errorName: "MissingParameter";
    errorInstanceId: string;
    parameters: {
        parameters: Array<ParameterId>;
    };
}
