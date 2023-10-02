import { PropertyFilter } from "../components/PropertyFilter";
import { PropertyApiName } from "../components/PropertyApiName";

/**
 * The search on the property types are not supported. See the `Search Objects` documentation for
 * a list of supported search queries on different property types.
 *
 */
export interface PropertyTypesSearchNotSupported {
    errorCode: "INVALID_ARGUMENT";
    errorName: "PropertyTypesSearchNotSupported";
    errorInstanceId: string;
    parameters: {
        parameters: Record<PropertyFilter, Array<PropertyApiName>>;
    };
}
