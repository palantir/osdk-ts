import { type ConjureContext } from "conjure-lite";
import type { ApplicationRid } from "../ApplicationRid.js";
import type { LinkWebsiteCodeRepositoryRequest } from "../LinkWebsiteCodeRepositoryRequest.js";
/**
* Link a code repository to the application's website. This allows the code repository
* to have permissions to upload and deploy website versions during CI.
*
* Only one code repository may be linked to the application's website at a time. If a
* code repository is already linked it will be replaced by the code repository in the
* request. An existing linked code repository may be unlinked by passing an empty code
* repository rid in the request.
*
* Requires third-party-application:link-application-website-code-repository on the
* application rid and third-party-application:view-code-repository on the code repository
* rid if present in the request.
*/
export declare function linkWebsiteCodeRepository(ctx: ConjureContext, applicationRid: ApplicationRid, request: LinkWebsiteCodeRepositoryRequest): Promise<void>;
