import type { DatasourceIdentifier } from "../DatasourceIdentifier.js";
import type { GothamDatasourceDelegateId } from "./GothamDatasourceDelegateId.js";
/**
* Check if the following Datasource rids can be translated through the specified workflows.
*/
export interface CheckTranslationEligibilityRequest {
	delegates: Record<GothamDatasourceDelegateId, DatasourceIdentifier>;
}
