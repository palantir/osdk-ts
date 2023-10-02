import { PropertyApiName } from "../components/PropertyApiName";
import { ObjectTypeApiName } from "../components/ObjectTypeApiName";
import { ValueType } from "../components/ValueType";

/**
 * Aggregation value does not conform to the expected underlying type.
 *
 */
export interface InvalidAggregationRangeValue {
    errorCode: "INVALID_ARGUMENT";
    errorName: "InvalidAggregationRangeValue";
    errorInstanceId: string;
    parameters: {
        property: PropertyApiName;
        objectType: ObjectTypeApiName;
        propertyBaseType: ValueType;
    };
}
