import { PageToken } from "./PageToken";
import { OntologyObject } from "./OntologyObject";

export type ListLinkedObjectsResponse = { nextPageToken?: PageToken; data: Array<OntologyObject>; };
