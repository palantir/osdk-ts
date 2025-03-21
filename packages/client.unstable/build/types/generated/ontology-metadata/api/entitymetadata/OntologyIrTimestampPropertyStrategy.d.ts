import type { ObjectTypeFieldApiName } from "../ObjectTypeFieldApiName.js";
/**
* For this strategy, the datasource value should be used when the time in the given timestamp property is
* more recent than the time the patch is applied.
*/
export interface OntologyIrTimestampPropertyStrategy {
	timestampPropertyRid: ObjectTypeFieldApiName;
}
