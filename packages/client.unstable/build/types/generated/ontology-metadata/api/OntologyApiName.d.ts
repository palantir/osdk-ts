/**
* A string indicating the API Name to use for the given Ontology. This API name will be used to access the
* Ontology in programming languages. It is not guaranteed to be unique across Ontologies. It must adhere
* to the following rules:
* - Must only contain the following ASCII characters: a-z and 0-9.
* - Must not start with a number.
* - Must have a maximum length of 100.
* - Must be kebab-case.
* - Must not be one of the reserved keywords: "ontology", "object", "property", "link", "relation", "rid", "primarykey", "typeid", "ontologyobject".
*/
export type OntologyApiName = string;
