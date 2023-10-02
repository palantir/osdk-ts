import { QueryDataType } from "./QueryDataType";

/** Details about a parameter of a query. */
export interface QueryParameterV2 {
    description?: string;
    dataType: QueryDataType;
}
