import { ActionTypeApiName } from "../components/ActionTypeApiName";
import { ParameterId } from "../components/ParameterId";

/**
 * The provided parameter ID was not found for the action. Please look at the `configuredParameterIds` field
 * to see which ones are available.
 *
 */
export interface ParametersNotFound {
    errorCode: "INVALID_ARGUMENT";
    errorName: "ParametersNotFound";
    errorInstanceId: string;
    parameters: {
        actionType: ActionTypeApiName;
        unknownParameterIds: Array<ParameterId>;
        configuredParameterIds: Array<ParameterId>;
    };
}
