import { PropertyApiName } from "../components/PropertyApiName";

/** The requested sort order includes duplicate properties. */
export interface DuplicateOrderBy {
    errorCode: "INVALID_ARGUMENT";
    errorName: "DuplicateOrderBy";
    errorInstanceId: string;
    parameters: {
        properties: Array<PropertyApiName>;
    };
}
