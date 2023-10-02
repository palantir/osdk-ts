import { OntologyObjectV2 } from "./OntologyObjectV2";
import { PageToken } from "./PageToken";

export interface ListLinkedObjectsResponseV2 {
    data: Array<OntologyObjectV2>;
    nextPageToken?: PageToken;
}
