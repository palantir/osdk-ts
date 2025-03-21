import { type ConjureContext } from "conjure-lite";
import type { ApplicationWebsite } from "../ApplicationWebsite.js";
import type { StemmaRepositoryRid } from "../StemmaRepositoryRid.js";
/**
* Get the websites a code repository has been linked to. The results will be filtered
* to websites for applications that the caller has access to.
*
* Requires third-party-application:view-code-repository on the code repository rid.
*/
export declare function getWebsitesForCodeRepository(ctx: ConjureContext, codeRepositoryRid: StemmaRepositoryRid): Promise<Array<ApplicationWebsite>>;
