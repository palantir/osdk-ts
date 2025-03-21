import type { PropertyTypeRid } from "./PropertyTypeRid.js";
/**
* Describes how to treat an object of this type as a time series.
*/
export interface TimeSeriesMetadata {
	measurePropertyTypeRid: PropertyTypeRid | undefined;
	timeSeriesIdPropertyTypeRid: PropertyTypeRid;
	valueUnitsPropertyTypeRid: PropertyTypeRid | undefined;
}
