import { PageToken } from "./PageToken";
import { QueryType } from "./QueryType";

export type ListQueryTypesResponse = { nextPageToken?: PageToken; data: Array<QueryType>; };
