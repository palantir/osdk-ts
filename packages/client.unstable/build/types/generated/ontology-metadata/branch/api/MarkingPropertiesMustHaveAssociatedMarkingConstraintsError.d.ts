import type { DatasourceRid } from "../../api/DatasourceRid.js";
import type { MarkingType } from "../../api/MarkingType.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
/**
* Marking properties must have a corresponding marking constraint on the datasource.
*/
export interface MarkingPropertiesMustHaveAssociatedMarkingConstraintsError {
	objectTypeRid: ObjectTypeRid;
	datasourceRid: DatasourceRid;
	markingType: MarkingType;
}
