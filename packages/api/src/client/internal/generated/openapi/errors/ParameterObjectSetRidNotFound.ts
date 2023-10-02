import { ObjectSetRid } from "../components/ObjectSetRid";

/**
 * The parameter object set RID is not found, or the client token does not have access to it.
 *
 */
export interface ParameterObjectSetRidNotFound {
    errorCode: "NOT_FOUND";
    errorName: "ParameterObjectSetRidNotFound";
    errorInstanceId: string;
    parameters: {
        objectSetRid: ObjectSetRid;
    };
}
