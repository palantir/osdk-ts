import { PageToken } from "./PageToken";
import { OntologyObject } from "./OntologyObject";

/** */
export type ListObjectsResponse = { nextPageToken?: PageToken; data: Array<OntologyObject>; };
