import { PropertyApiName } from "../components/PropertyApiName";
import { ObjectTypeApiName } from "../components/ObjectTypeApiName";
import { ValueType } from "../components/ValueType";

/**
 * Range group by is not supported by property type.
 *
 */
export interface InvalidAggregationRangePropertyType {
    errorCode: "INVALID_ARGUMENT";
    errorName: "InvalidAggregationRangePropertyType";
    errorInstanceId: string;
    parameters: {
        property: PropertyApiName;
        objectType: ObjectTypeApiName;
        propertyBaseType: ValueType;
    };
}
