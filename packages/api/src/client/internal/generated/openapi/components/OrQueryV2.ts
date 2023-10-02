import { SearchJsonQueryV2 } from "./SearchJsonQueryV2";

/** Returns objects where at least 1 query is satisfied. */
export type OrQueryV2 = { value: Array<SearchJsonQueryV2>; };
