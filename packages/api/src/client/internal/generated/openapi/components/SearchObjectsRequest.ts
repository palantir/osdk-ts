import { SearchJsonQuery } from "./SearchJsonQuery";
import { SearchOrderBy } from "./SearchOrderBy";
import { PageSize } from "./PageSize";
import { PageToken } from "./PageToken";
import { PropertyApiName } from "./PropertyApiName";

export type SearchObjectsRequest = { query: SearchJsonQuery; orderBy?: SearchOrderBy; pageSize?: PageSize; pageToken?: PageToken; fields: Array<PropertyApiName>; };
