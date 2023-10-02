import { ActionRid } from "../components/ActionRid";

/** The action is not found, or the user does not have access to it. */
export interface ActionNotFound {
    errorCode: "NOT_FOUND";
    errorName: "ActionNotFound";
    errorInstanceId: string;
    parameters: {
        actionRid: ActionRid;
    };
}
