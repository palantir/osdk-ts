import { QueryDataType } from "./QueryDataType";

/** Details about the output of a query. */
export interface QueryOutputV2 {
    dataType: QueryDataType;
    required: boolean;
}
