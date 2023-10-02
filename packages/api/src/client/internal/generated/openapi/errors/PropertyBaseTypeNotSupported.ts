import { ObjectTypeApiName } from "../components/ObjectTypeApiName";
import { PropertyApiName } from "../components/PropertyApiName";
import { ValueType } from "../components/ValueType";

/**
 * The type of the requested property is not currently supported by this API. If you need support for this,
 * please reach out to Palantir Support.
 *
 */
export interface PropertyBaseTypeNotSupported {
    errorCode: "INVALID_ARGUMENT";
    errorName: "PropertyBaseTypeNotSupported";
    errorInstanceId: string;
    parameters: {
        objectType: ObjectTypeApiName;
        property: PropertyApiName;
        propertyBaseType: ValueType;
    };
}
