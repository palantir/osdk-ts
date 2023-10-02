import { SearchJsonQuery } from "./SearchJsonQuery";
import { SearchOrderBy } from "./SearchOrderBy";
import { PageSize } from "./PageSize";
import { PageToken } from "./PageToken";
import { PropertyApiName } from "./PropertyApiName";

export interface SearchObjectsRequest {
    query: SearchJsonQuery;
    orderBy?: SearchOrderBy;
    pageSize?: PageSize;
    pageToken?: PageToken;
    /**
     * The API names of the object type properties to include in the response.
     *
     */
    fields: Array<PropertyApiName>;
}
