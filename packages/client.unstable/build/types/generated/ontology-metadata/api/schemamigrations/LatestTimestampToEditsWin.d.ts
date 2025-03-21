import type { DatasourceRid } from "../DatasourceRid.js";
import type { PropertyTypeRid } from "../PropertyTypeRid.js";
/**
* Update the edits resolution strategy of an object type from latest timestamp to edits always win.
*/
export interface LatestTimestampToEditsWin {
	datasourceRid: DatasourceRid;
	timestampPropertyRid: PropertyTypeRid;
}
