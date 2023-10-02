import { PropertyApiName } from "../components/PropertyApiName";
import { ObjectTypeApiName } from "../components/ObjectTypeApiName";
import { ValueType } from "../components/ValueType";

/**
 * Invalid property type for duration groupBy.
 *
 */
export interface InvalidDurationGroupByPropertyType {
    errorCode: "INVALID_ARGUMENT";
    errorName: "InvalidDurationGroupByPropertyType";
    errorInstanceId: string;
    parameters: {
        property: PropertyApiName;
        objectType: ObjectTypeApiName;
        propertyBaseType: ValueType;
    };
}
