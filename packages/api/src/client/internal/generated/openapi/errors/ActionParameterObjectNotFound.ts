import { ParameterId } from "../components/ParameterId";

/**
 * The parameter object reference or parameter default value is not found, or the client token does not have access to it.
 *
 */
export interface ActionParameterObjectNotFound {
    errorCode: "NOT_FOUND";
    errorName: "ActionParameterObjectNotFound";
    errorInstanceId: string;
    parameters: {
        parameterId: ParameterId;
    };
}
