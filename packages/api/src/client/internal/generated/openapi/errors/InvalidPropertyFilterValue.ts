import { ValueType } from "../components/ValueType";
import { PropertyFilter } from "../components/PropertyFilter";
import { FilterValue } from "../components/FilterValue";
import { PropertyApiName } from "../components/PropertyApiName";

/**
 * The value of the given property filter is invalid. For instance, 2 is an invalid value for
 * `isNull` in `properties.address.isNull=2` because the `isNull` filter expects a value of boolean type.
 *
 */
export interface InvalidPropertyFilterValue {
    errorCode: "INVALID_ARGUMENT";
    errorName: "InvalidPropertyFilterValue";
    errorInstanceId: string;
    parameters: {
        expectedType: ValueType;
        propertyFilter: PropertyFilter;
        propertyFilterValue: FilterValue;
        property: PropertyApiName;
    };
}
