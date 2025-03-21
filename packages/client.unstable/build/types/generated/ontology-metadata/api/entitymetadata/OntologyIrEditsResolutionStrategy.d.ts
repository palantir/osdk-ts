import type { OntologyIrTimestampPropertyStrategy } from "./OntologyIrTimestampPropertyStrategy.js";
export interface OntologyIrEditsResolutionStrategy_timestampProperty {
	type: "timestampProperty";
	timestampProperty: OntologyIrTimestampPropertyStrategy;
}
/**
* The strategy used when resolving conflicts between user edits and datasource values.
*/
export type OntologyIrEditsResolutionStrategy = OntologyIrEditsResolutionStrategy_timestampProperty;
