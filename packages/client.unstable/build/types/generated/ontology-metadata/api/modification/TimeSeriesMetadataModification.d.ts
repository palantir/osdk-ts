import type { PropertyTypeId } from "../PropertyTypeId.js";
/**
* Describes how to treat an object of this type as a time series.
*/
export interface TimeSeriesMetadataModification {
	measurePropertyTypeId: PropertyTypeId | undefined;
	timeSeriesIdPropertyTypeId: PropertyTypeId;
	valueUnitsPropertyTypeId: PropertyTypeId | undefined;
}
