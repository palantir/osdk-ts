import type { LoadAllWorkflowsPageToken } from "./LoadAllWorkflowsPageToken.js";
/**
* Request to load a page of all Workflows visible to the user in an Ontology.
*/
export interface LoadAllWorkflowsPageRequest {
	pageToken: LoadAllWorkflowsPageToken | undefined;
	loadRedacted: boolean | undefined;
}
