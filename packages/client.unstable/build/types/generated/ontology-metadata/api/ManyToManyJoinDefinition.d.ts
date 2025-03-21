import type { EditsConfiguration } from "./EditsConfiguration.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
export interface ManyToManyJoinDefinition {
	joinTableDatasetRid: string;
	joinTableWritebackDatasetRid: string | undefined;
	sourceIdColumnName: string;
	sourceObjectTypeId: ObjectTypeId;
	targetIdColumnName: string;
	targetObjectTypeId: ObjectTypeId;
	editsConfiguration: EditsConfiguration | undefined;
}
