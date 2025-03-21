/**
* Indicates that no branched indexes should be generated for any entities modified on the branch. All queries
* for data on the branch will return data from the master branch. This data may be inconsistent with schema
* changes on the ontology branch.
*/
export interface NonIndexedBranchConfig {}
