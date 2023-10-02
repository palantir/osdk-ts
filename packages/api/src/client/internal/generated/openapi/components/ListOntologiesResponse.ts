import { Ontology } from "./Ontology";

export interface ListOntologiesResponse {
    /** The list of Ontologies the user has access to. */
    data: Array<Ontology>;
}
