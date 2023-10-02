import { SearchJsonQuery } from "./SearchJsonQuery";

/** Returns objects where at least 1 query is satisfied. */
export interface OrQuery {
    value: Array<SearchJsonQuery>;
}
