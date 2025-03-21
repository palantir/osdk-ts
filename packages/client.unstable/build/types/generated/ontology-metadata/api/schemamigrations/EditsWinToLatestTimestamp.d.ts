import type { DatasourceRid } from "../DatasourceRid.js";
import type { PropertyTypeRid } from "../PropertyTypeRid.js";
/**
* Update the edits resolution strategy of an object type from edits always win to latest timestamp.
*/
export interface EditsWinToLatestTimestamp {
	datasourceRid: DatasourceRid;
	datasourceProperties: Array<PropertyTypeRid>;
	timestampPropertyRid: PropertyTypeRid;
	timestampValue: any;
}
