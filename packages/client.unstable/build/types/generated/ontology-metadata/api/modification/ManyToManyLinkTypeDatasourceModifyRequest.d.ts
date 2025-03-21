import type { ManyToManyLinkTypeDatasourceCreate } from "./ManyToManyLinkTypeDatasourceCreate.js";
import type { ManyToManyLinkTypeDatasourceDelete } from "./ManyToManyLinkTypeDatasourceDelete.js";
import type { ManyToManyLinkTypeDatasourceUpdate } from "./ManyToManyLinkTypeDatasourceUpdate.js";
export interface ManyToManyLinkTypeDatasourceModifyRequest_create {
	type: "create";
	create: ManyToManyLinkTypeDatasourceCreate;
}
export interface ManyToManyLinkTypeDatasourceModifyRequest_update {
	type: "update";
	update: ManyToManyLinkTypeDatasourceUpdate;
}
export interface ManyToManyLinkTypeDatasourceModifyRequest_delete {
	type: "delete";
	delete: ManyToManyLinkTypeDatasourceDelete;
}
export type ManyToManyLinkTypeDatasourceModifyRequest = ManyToManyLinkTypeDatasourceModifyRequest_create | ManyToManyLinkTypeDatasourceModifyRequest_update | ManyToManyLinkTypeDatasourceModifyRequest_delete;
