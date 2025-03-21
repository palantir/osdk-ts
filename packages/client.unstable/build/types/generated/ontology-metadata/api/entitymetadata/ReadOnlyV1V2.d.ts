/**
* Entity can be stored in Phonograph and Highbury though the data is read-only. Edits are disabled.
* This is a legacy state which should not be used anymore. OMS guarantees that the latest version of each
* ontology does not return this state for any object type or link type.
*/
export interface ReadOnlyV1V2 {}
