import type { DeletionMetadata } from "./DeletionMetadata.js";
import type { OntologyBranch } from "./OntologyBranch.js";
import type { OntologyRid } from "./OntologyRid.js";
/**
* Event indicating that a branch was deleted. This event is only sent for deleted non-default branches and
* can occur when an Ontology is hard-deleted or when a (closed/merged) branch is deleted because of retention.
* If a default branch is deleted (because of an Ontology hard-deletion), OMS will instead send deletion events
* for each individual entity in the Ontology.
*
* Any service consuming ontology events is expected to delete all data related to a non-default branch (i.e. all
* specific ontology entities tracked for this brach) when a `BranchDeletedEvent` is received. OMS
* will not send delete events for all entities on non-default branches during branch deletion.
*/
export interface BranchDeletedEvent {
	ontologyRid: OntologyRid;
	ontologyBranch: OntologyBranch;
	deletionMetadata: DeletionMetadata;
}
