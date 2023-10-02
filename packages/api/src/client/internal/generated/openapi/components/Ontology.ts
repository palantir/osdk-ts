import { OntologyApiName } from "./OntologyApiName";
import { DisplayName } from "./DisplayName";
import { OntologyRid } from "./OntologyRid";

/** Metadata about an Ontology. */
export interface Ontology {
    apiName: OntologyApiName;
    displayName: DisplayName;
    description: string;
    rid: OntologyRid;
}
