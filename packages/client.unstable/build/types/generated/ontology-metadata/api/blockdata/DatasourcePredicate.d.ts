import type { DatasourceRid } from "../DatasourceRid.js";
import type { IsOnlyDatasource } from "./IsOnlyDatasource.js";
export interface DatasourcePredicate_or {
	type: "or";
	or: Array<DatasourcePredicate>;
}
export interface DatasourcePredicate_hasRid {
	type: "hasRid";
	hasRid: DatasourceRid;
}
export interface DatasourcePredicate_isOnlyDatasource {
	type: "isOnlyDatasource";
	isOnlyDatasource: IsOnlyDatasource;
}
export type DatasourcePredicate = DatasourcePredicate_or | DatasourcePredicate_hasRid | DatasourcePredicate_isOnlyDatasource;
