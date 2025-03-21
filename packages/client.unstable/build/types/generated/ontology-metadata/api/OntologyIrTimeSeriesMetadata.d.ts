import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
/**
* Describes how to treat an object of this type as a time series.
*/
export interface OntologyIrTimeSeriesMetadata {
	measurePropertyTypeRid: ObjectTypeFieldApiName | undefined;
	timeSeriesIdPropertyTypeRid: ObjectTypeFieldApiName;
	valueUnitsPropertyTypeRid: ObjectTypeFieldApiName | undefined;
}
