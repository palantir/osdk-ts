import { PropertyFilter } from "../components/PropertyFilter";
import { PropertyApiName } from "../components/PropertyApiName";

/** The provided filters cannot be used together. */
export interface InvalidPropertyFiltersCombination {
    errorCode: "INVALID_ARGUMENT";
    errorName: "InvalidPropertyFiltersCombination";
    errorInstanceId: string;
    parameters: {
        propertyFilters: Array<PropertyFilter>;
        property: PropertyApiName;
    };
}
