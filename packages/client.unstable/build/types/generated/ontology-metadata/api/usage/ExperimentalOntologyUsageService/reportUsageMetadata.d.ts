import { type ConjureContext } from "conjure-lite";
import type { ReportUsageMetadataRequest } from "../ReportUsageMetadataRequest.js";
import type { ReportUsageMetadataResponse } from "../ReportUsageMetadataResponse.js";
/**
* Endpoint to report usage of ontology entities. The reported usage will be stored and made available for
* analysis.
*
* Permissions required:
* - `ontology:report-usage-metadata` on the root ontology rid for the reporting backend service
*/
export declare function reportUsageMetadata(ctx: ConjureContext, serviceToken: string, request: ReportUsageMetadataRequest): Promise<ReportUsageMetadataResponse>;
