import { ActionTypeApiName } from "../components/ActionTypeApiName";

/**
 * The validation failed for the given action parameters. Please use the `validateAction` endpoint for more
 * details.
 *
 */
export interface ActionValidationFailed {
    errorCode: "INVALID_ARGUMENT";
    errorName: "ActionValidationFailed";
    errorInstanceId: string;
    parameters: {
        actionType: ActionTypeApiName;
    };
}
