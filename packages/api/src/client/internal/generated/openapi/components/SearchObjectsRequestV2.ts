import { SearchJsonQueryV2 } from "./SearchJsonQueryV2";
import { SearchOrderBy } from "./SearchOrderBy";
import { PageSize } from "./PageSize";
import { PageToken } from "./PageToken";
import { PropertyApiName } from "./PropertyApiName";

/** */
export type SearchObjectsRequestV2 = { where?: SearchJsonQueryV2; orderBy?: SearchOrderBy; pageSize?: PageSize; pageToken?: PageToken; select: Array<PropertyApiName>; };
