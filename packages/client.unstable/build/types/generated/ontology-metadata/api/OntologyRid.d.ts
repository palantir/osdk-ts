/**
* An rid identifying an Ontology. This rid is generated randomly and is safe for logging purposes. Access
* to the Ontology is also controlled by checking operations on this rid. The OntologyRid for an
* Ontology is immutable.
*/
export type OntologyRid = string;
