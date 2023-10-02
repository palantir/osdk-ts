import { SearchJsonQuery } from "./SearchJsonQuery";

/** Returns objects where every query is satisfied. */
export interface AndQuery {
    value: Array<SearchJsonQuery>;
}
