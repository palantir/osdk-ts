import { SearchJsonQuery } from "./SearchJsonQuery";

/** Returns objects where the query is not satisfied. */
export interface NotQuery {
    value: SearchJsonQuery;
}
