import { type ConjureContext } from "conjure-lite";
import type { GetUsageRequestV2 } from "../GetUsageRequestV2.js";
import type { GetUsageResponseV2 } from "../GetUsageResponseV2.js";
/**
* Endpoint to get the usage of ontology entities over the last 30 days.
* Will fail if internal-tables is not installed on the stack, or return empty if the usage data has not yet
* been indexed.
*/
export declare function getUsageV2(ctx: ConjureContext, request: GetUsageRequestV2): Promise<GetUsageResponseV2>;
