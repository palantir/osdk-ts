import type { DatasourceRid } from "../DatasourceRid.js";
import type { ObjectTypeFieldApiName } from "../ObjectTypeFieldApiName.js";
/**
* Update the edits resolution strategy of an object type from latest timestamp to edits always win.
*/
export interface OntologyIrLatestTimestampToEditsWin {
	datasourceRid: DatasourceRid;
	timestampPropertyRid: ObjectTypeFieldApiName;
}
