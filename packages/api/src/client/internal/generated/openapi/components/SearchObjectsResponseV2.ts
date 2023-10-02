import { OntologyObjectV2 } from "./OntologyObjectV2";
import { PageToken } from "./PageToken";

export interface SearchObjectsResponseV2 {
    data: Array<OntologyObjectV2>;
    nextPageToken?: PageToken;
}
