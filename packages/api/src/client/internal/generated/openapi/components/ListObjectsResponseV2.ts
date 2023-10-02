import { PageToken } from "./PageToken";
import { OntologyObjectV2 } from "./OntologyObjectV2";

export interface ListObjectsResponseV2 {
    nextPageToken?: PageToken;
    /** The list of objects in the current page. */
    data: Array<OntologyObjectV2>;
}
