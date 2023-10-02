import { QueryDataType } from "./QueryDataType";

/** Details about a parameter of a query. */
export type QueryParameterV2 = { description?: string; dataType: QueryDataType; };
