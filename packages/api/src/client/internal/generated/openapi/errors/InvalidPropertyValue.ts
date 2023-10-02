import { ValueType } from "../components/ValueType";
import { PropertyApiName } from "../components/PropertyApiName";
import { PropertyValue } from "../components/PropertyValue";

/**
 * The value of the given property is invalid. See the documentation of `PropertyValue` for details on
 * how properties are represented.
 *
 */
export interface InvalidPropertyValue {
    errorCode: "INVALID_ARGUMENT";
    errorName: "InvalidPropertyValue";
    errorInstanceId: string;
    parameters: {
        propertyBaseType: ValueType;
        property: PropertyApiName;
        propertyValue: PropertyValue;
    };
}
