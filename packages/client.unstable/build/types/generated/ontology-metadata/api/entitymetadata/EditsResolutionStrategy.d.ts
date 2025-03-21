import type { TimestampPropertyStrategy } from "./TimestampPropertyStrategy.js";
export interface EditsResolutionStrategy_timestampProperty {
	type: "timestampProperty";
	timestampProperty: TimestampPropertyStrategy;
}
/**
* The strategy used when resolving conflicts between user edits and datasource values.
*/
export type EditsResolutionStrategy = EditsResolutionStrategy_timestampProperty;
