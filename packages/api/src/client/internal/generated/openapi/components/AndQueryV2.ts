import { SearchJsonQueryV2 } from "./SearchJsonQueryV2";

/** Returns objects where every query is satisfied. */
export interface AndQueryV2 {
    value: Array<SearchJsonQueryV2>;
}
