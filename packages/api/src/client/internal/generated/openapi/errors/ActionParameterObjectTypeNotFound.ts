import { ParameterId } from "../components/ParameterId";

/**
 * The parameter references an object type that could not be found, or the client token does not have access to it.
 *
 */
export interface ActionParameterObjectTypeNotFound {
    errorCode: "NOT_FOUND";
    errorName: "ActionParameterObjectTypeNotFound";
    errorInstanceId: string;
    parameters: {
        parameterId: ParameterId;
    };
}
