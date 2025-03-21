import type { ClientTranslationEligibilityResult } from "./ClientTranslationEligibilityResult.js";
/**
* Returns the security translation eligibility of the requested Delegates.
*/
export interface CheckTranslationEligibilityResponse {
	clientTranslationEligibility: Array<ClientTranslationEligibilityResult>;
}
