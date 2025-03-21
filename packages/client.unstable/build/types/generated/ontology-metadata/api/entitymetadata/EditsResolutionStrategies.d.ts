import type { DatasourceRid } from "../DatasourceRid.js";
import type { EditsResolutionStrategy } from "./EditsResolutionStrategy.js";
/**
* Wrapper for multiple strategies as objects can have multiple datasources.
*/
export interface EditsResolutionStrategies {
	strategies: Record<DatasourceRid, EditsResolutionStrategy>;
}
