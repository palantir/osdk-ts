import { SearchJsonQueryV2 } from "./SearchJsonQueryV2";
import { SearchOrderBy } from "./SearchOrderBy";
import { PageSize } from "./PageSize";
import { PageToken } from "./PageToken";
import { PropertyApiName } from "./PropertyApiName";

export interface SearchObjectsRequestV2 {
    where?: SearchJsonQueryV2;
    orderBy?: SearchOrderBy;
    pageSize?: PageSize;
    pageToken?: PageToken;
    /**
     * The API names of the object type properties to include in the response.
     *
     */
    select: Array<PropertyApiName>;
}
