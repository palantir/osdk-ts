import type { DatasourceRid } from "../DatasourceRid.js";
import type { EditsResolutionStrategy } from "../entitymetadata/EditsResolutionStrategy.js";
/**
* An updated strategy to use when resolving between user edits and datasource values for this ObjectType.
* If this modification is present, it will overwrite the existing strategies with everything present in
* editsResolutionStrategies.
*/
export interface EditsResolutionStrategyModification {
	editsResolutionStrategies: Record<DatasourceRid, EditsResolutionStrategy>;
}
