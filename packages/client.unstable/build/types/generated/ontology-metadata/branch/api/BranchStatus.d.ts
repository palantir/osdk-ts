/**
* Represents the status of a branch.
* Inactive branches were branches that were open but were not modified for a specific timeout period (default
* 14 days). Any indexed data on the branch is now deindexed. The branch can become open again via reactivating.
* Open branches are the default state of a branch.
* Merged branches are branches that had their modifications merged into the default branch of the ontology;
* these branches cannot ever be modified or merged again.
* Closed branches are branches that were manually closed. Closed branches are not reopenable and cannot
* ever be modified or merged.
*/
export type BranchStatus = "INACTIVE" | "OPEN" | "MERGED" | "CLOSED";
