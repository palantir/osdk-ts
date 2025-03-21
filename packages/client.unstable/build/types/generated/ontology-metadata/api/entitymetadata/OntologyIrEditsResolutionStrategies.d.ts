import type { DatasourceRid } from "../DatasourceRid.js";
import type { OntologyIrEditsResolutionStrategy } from "./OntologyIrEditsResolutionStrategy.js";
/**
* Wrapper for multiple strategies as objects can have multiple datasources.
*/
export interface OntologyIrEditsResolutionStrategies {
	strategies: Record<DatasourceRid, OntologyIrEditsResolutionStrategy>;
}
