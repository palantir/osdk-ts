import { PropertyFilter } from "../components/PropertyFilter";
import { PropertyApiName } from "../components/PropertyApiName";

/**
 * One of the requested property filters does not support multiple values. Please include only a single value for
 * it.
 *
 */
export interface MultiplePropertyValuesNotSupported {
    errorCode: "INVALID_ARGUMENT";
    errorName: "MultiplePropertyValuesNotSupported";
    errorInstanceId: string;
    parameters: {
        propertyFilter: PropertyFilter;
        property: PropertyApiName;
    };
}
