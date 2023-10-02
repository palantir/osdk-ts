import { OntologyObjectV2 } from "./OntologyObjectV2";
import { PageToken } from "./PageToken";

/** Represents the API response when loading an `ObjectSet`. */
export interface LoadObjectSetResponseV2 {
    /** The list of objects in the current Page. */
    data: Array<OntologyObjectV2>;
    nextPageToken?: PageToken;
}
