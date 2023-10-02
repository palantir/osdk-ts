import { OntologyObject } from "./OntologyObject";
import { PageToken } from "./PageToken";

export type SearchObjectsResponse = { data: Array<OntologyObject>; nextPageToken?: PageToken; };
