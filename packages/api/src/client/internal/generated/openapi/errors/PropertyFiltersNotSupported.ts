import { PropertyFilter } from "../components/PropertyFilter";
import { PropertyApiName } from "../components/PropertyApiName";

/**
 * At least one of the requested property filters are not supported. See the documentation of `PropertyFilter` for
 * a list of supported property filters.
 *
 */
export interface PropertyFiltersNotSupported {
    errorCode: "INVALID_ARGUMENT";
    errorName: "PropertyFiltersNotSupported";
    errorInstanceId: string;
    parameters: {
        propertyFilters: Array<PropertyFilter>;
        property: PropertyApiName;
    };
}
