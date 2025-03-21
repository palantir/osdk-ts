import type { GothamDatasourceDelegateId } from "./GothamDatasourceDelegateId.js";
import type { IntegrationClientType } from "./IntegrationClientType.js";
import type { TranslationEligibility } from "./TranslationEligibility.js";
/**
* Per client eligibility result.
*/
export interface ClientTranslationEligibilityResult {
	clientType: IntegrationClientType;
	translationEligibility: Record<GothamDatasourceDelegateId, TranslationEligibility>;
}
