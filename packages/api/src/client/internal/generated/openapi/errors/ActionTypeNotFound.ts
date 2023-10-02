import { ActionTypeApiName } from "../components/ActionTypeApiName";

/** The action type is not found, or the user does not have access to it. */
export interface ActionTypeNotFound {
    errorCode: "NOT_FOUND";
    errorName: "ActionTypeNotFound";
    errorInstanceId: string;
    parameters: {
        actionType: ActionTypeApiName;
    };
}
