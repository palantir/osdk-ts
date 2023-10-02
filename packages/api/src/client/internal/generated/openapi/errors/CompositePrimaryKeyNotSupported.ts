import { ObjectTypeApiName } from "../components/ObjectTypeApiName";
import { PropertyApiName } from "../components/PropertyApiName";

/**
 * Primary keys consisting of multiple properties are not supported by this API. If you need support for this,
 * please reach out to Palantir Support.
 *
 */
export interface CompositePrimaryKeyNotSupported {
    errorCode: "INVALID_ARGUMENT";
    errorName: "CompositePrimaryKeyNotSupported";
    errorInstanceId: string;
    parameters: {
        objectType: ObjectTypeApiName;
        primaryKey: Array<PropertyApiName>;
    };
}
