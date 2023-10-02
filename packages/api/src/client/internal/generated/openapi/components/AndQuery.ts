import { SearchJsonQuery } from "./SearchJsonQuery";

/** Returns objects where every query is satisfied. */
export type AndQuery = { value: Array<SearchJsonQuery>; };
