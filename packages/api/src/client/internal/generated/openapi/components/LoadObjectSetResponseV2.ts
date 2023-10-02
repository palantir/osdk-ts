import { OntologyObjectV2 } from "./OntologyObjectV2";
import { PageToken } from "./PageToken";

/** Represents the API response when loading an `ObjectSet`. */
export type LoadObjectSetResponseV2 = { data: Array<OntologyObjectV2>; nextPageToken?: PageToken; };
