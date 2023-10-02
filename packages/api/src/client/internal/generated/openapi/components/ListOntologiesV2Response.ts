import { OntologyV2 } from "./OntologyV2";

export interface ListOntologiesV2Response {
    /** The list of Ontologies the user has access to. */
    data: Array<OntologyV2>;
}
