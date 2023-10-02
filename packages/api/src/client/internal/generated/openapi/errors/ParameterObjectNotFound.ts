import { ObjectTypeApiName } from "../components/ObjectTypeApiName";
import { PropertyApiName } from "../components/PropertyApiName";
import { PrimaryKeyValue } from "../components/PrimaryKeyValue";

/**
 * The parameter object reference or parameter default value is not found, or the client token does not have access to it.
 *
 */
export interface ParameterObjectNotFound {
    errorCode: "NOT_FOUND";
    errorName: "ParameterObjectNotFound";
    errorInstanceId: string;
    parameters: {
        objectType: ObjectTypeApiName;
        primaryKey: Record<PropertyApiName, PrimaryKeyValue>;
    };
}
