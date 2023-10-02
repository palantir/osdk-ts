import { ValueType } from "../components/ValueType";
import { PropertyApiName } from "../components/PropertyApiName";

/**
 * The given property type is not of the expected type.
 *
 */
export interface InvalidPropertyType {
    errorCode: "INVALID_ARGUMENT";
    errorName: "InvalidPropertyType";
    errorInstanceId: string;
    parameters: {
        propertyBaseType: ValueType;
        property: PropertyApiName;
    };
}
