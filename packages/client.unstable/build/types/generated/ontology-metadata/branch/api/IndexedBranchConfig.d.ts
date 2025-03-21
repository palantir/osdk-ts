/**
* Indicates that all modified entities on the ontology branch should be indexed on the branch and that these
* indexes should remain for the full lifetime of the branch. Any entities that have not been modified on the
* branch will return data from the master branch.
*/
export interface IndexedBranchConfig {}
