import { type ConjureContext } from "conjure-lite";
/**
* Returns true if SDK generation is enabled (i.e. if compute service is installed), and false otherwise.
*
* Requires third-party-application:view-sdk-discovery on the service root node.
*/
export declare function getIsSdkGenerationEnabled(ctx: ConjureContext): Promise<boolean>;
