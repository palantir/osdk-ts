/**
* A string identifier used to map struct property fields to their respective base types and constraints.
* This identifier is intentionally generically typed. Constraints used on ontology types should interpret the
* identifier as a struct field API name and pipeline builder should interpret the identifier as a dataset
* struct column field name.
*/
export type StructFieldIdentifier = string;
