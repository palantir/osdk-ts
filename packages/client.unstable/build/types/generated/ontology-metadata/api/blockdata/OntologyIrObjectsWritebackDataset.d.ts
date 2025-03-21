import type { ColumnName } from "../ColumnName.js";
import type { ObjectTypeApiName } from "../ObjectTypeApiName.js";
import type { ObjectTypeFieldApiName } from "../ObjectTypeFieldApiName.js";
import type { OutputMode } from "./OutputMode.js";
import type { WritebackDatasetRid } from "./WritebackDatasetRid.js";
import type { WritebackDatasetSpec } from "./WritebackDatasetSpec.js";
export interface OntologyIrObjectsWritebackDataset {
	rid: WritebackDatasetRid;
	objectTypeRid: ObjectTypeApiName;
	spec: WritebackDatasetSpec;
	outputMode: OutputMode;
	columnMapping: Record<ObjectTypeFieldApiName, ColumnName>;
}
