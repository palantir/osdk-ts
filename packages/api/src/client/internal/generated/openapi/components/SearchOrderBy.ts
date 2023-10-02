import { SearchOrdering } from "./SearchOrdering";

/** Specifies the ordering of search results by a field and an ordering direction. */
export interface SearchOrderBy {
    fields: Array<SearchOrdering>;
}
