import type { DatasourceRid } from "../DatasourceRid.js";
import type { ObjectTypeFieldApiName } from "../ObjectTypeFieldApiName.js";
/**
* Update the edits resolution strategy of an object type from edits always win to latest timestamp.
*/
export interface OntologyIrEditsWinToLatestTimestamp {
	datasourceRid: DatasourceRid;
	datasourceProperties: Array<ObjectTypeFieldApiName>;
	timestampPropertyRid: ObjectTypeFieldApiName;
	timestampValue: any;
}
