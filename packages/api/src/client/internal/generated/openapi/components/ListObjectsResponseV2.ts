import { PageToken } from "./PageToken";
import { OntologyObjectV2 } from "./OntologyObjectV2";

/** */
export type ListObjectsResponseV2 = { nextPageToken?: PageToken; data: Array<OntologyObjectV2>; };
