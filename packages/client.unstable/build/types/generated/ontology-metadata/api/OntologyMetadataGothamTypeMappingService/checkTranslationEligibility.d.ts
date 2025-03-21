import { type ConjureContext } from "conjure-lite";
import type { CheckTranslationEligibilityRequest } from "../typemapping/CheckTranslationEligibilityRequest.js";
import type { CheckTranslationEligibilityResponse } from "../typemapping/CheckTranslationEligibilityResponse.js";
/**
* Evaluate if the requested Datasource Delegates can be translated into the Simple Policy Structure
* through the specified services.
*/
export declare function checkTranslationEligibility(ctx: ConjureContext, request: CheckTranslationEligibilityRequest): Promise<CheckTranslationEligibilityResponse>;
