import type { ColumnName } from "../ColumnName.js";
import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { PropertyTypeRid } from "../PropertyTypeRid.js";
import type { OutputMode } from "./OutputMode.js";
import type { WritebackDatasetRid } from "./WritebackDatasetRid.js";
import type { WritebackDatasetSpec } from "./WritebackDatasetSpec.js";
export interface ObjectsWritebackDataset {
	rid: WritebackDatasetRid;
	objectTypeRid: ObjectTypeRid;
	spec: WritebackDatasetSpec;
	outputMode: OutputMode;
	columnMapping: Record<PropertyTypeRid, ColumnName>;
}
