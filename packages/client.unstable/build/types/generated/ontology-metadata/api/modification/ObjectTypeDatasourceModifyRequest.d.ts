import type { ObjectTypeDatasourceCreate } from "./ObjectTypeDatasourceCreate.js";
import type { ObjectTypeDatasourceDelete } from "./ObjectTypeDatasourceDelete.js";
import type { ObjectTypeDatasourceUpdate } from "./ObjectTypeDatasourceUpdate.js";
export interface ObjectTypeDatasourceModifyRequest_create {
	type: "create";
	create: ObjectTypeDatasourceCreate;
}
export interface ObjectTypeDatasourceModifyRequest_update {
	type: "update";
	update: ObjectTypeDatasourceUpdate;
}
export interface ObjectTypeDatasourceModifyRequest_delete {
	type: "delete";
	delete: ObjectTypeDatasourceDelete;
}
export type ObjectTypeDatasourceModifyRequest = ObjectTypeDatasourceModifyRequest_create | ObjectTypeDatasourceModifyRequest_update | ObjectTypeDatasourceModifyRequest_delete;
