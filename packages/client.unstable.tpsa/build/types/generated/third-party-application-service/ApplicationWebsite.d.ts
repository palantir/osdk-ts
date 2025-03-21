import type { ApplicationRid } from "./ApplicationRid.js";
import type { ArtifactsRepositoryRid } from "./ArtifactsRepositoryRid.js";
import type { StemmaRepositoryRid } from "./StemmaRepositoryRid.js";
/**
* An application's website hosted in a managed Artifacts repository. It may optionally
* be linked to a code repository containing the source code for the application's website.
*/
export interface ApplicationWebsite {
	applicationRid: ApplicationRid;
	repositoryRid: ArtifactsRepositoryRid;
	codeRepositoryRid: StemmaRepositoryRid | undefined;
}
