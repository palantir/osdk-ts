import type { Attachment, AttachmentUpload } from "../object/Attachment.js";
import type { Media } from "../object/Media.js";
import type { GeotimeSeriesProperty, TimeSeriesProperty } from "../timeseries/timeseries.js";
/**
* Map from the PropertyDefinition type to the typescript type that we return
*/
export interface PropertyValueWireToClient {
	attachment: Attachment;
	boolean: boolean;
	byte: number;
	datetime: string;
	decimal: string;
	double: number;
	float: number;
	geopoint: GeoJSON.Point;
	geoshape: GeoJSON.GeoJSON;
	integer: number;
	long: string;
	marking: string;
	mediaReference: Media;
	short: number;
	string: string;
	timestamp: string;
	numericTimeseries: TimeSeriesProperty<number>;
	stringTimeseries: TimeSeriesProperty<string>;
	sensorTimeseries: TimeSeriesProperty<string | number>;
	geotimeSeriesReference: GeotimeSeriesProperty<GeoJSON.Point>;
}
export type GetClientPropertyValueFromWire<T extends keyof PropertyValueWireToClient | Record<string, keyof PropertyValueWireToClient>> = T extends keyof PropertyValueWireToClient ? PropertyValueWireToClient[T] : T extends Record<string, keyof PropertyValueWireToClient> ? { [K in keyof T] : PropertyValueWireToClient[T[K]] } : never;
/**
* Map from the PropertyDefinition type to the typescript type that we accept
*/
export interface PropertyValueClientToWire {
	attachment: string | AttachmentUpload | Blob & {
		readonly name: string
	};
	boolean: boolean;
	byte: number;
	datetime: string;
	decimal: string | number;
	double: number;
	float: number;
	geopoint: GeoJSON.Point;
	geoshape: GeoJSON.GeoJSON;
	integer: number;
	long: string | number;
	marking: string;
	short: number;
	string: string;
	timestamp: string;
	mediaReference: Media;
	numericTimeseries: TimeSeriesProperty<number>;
	stringTimeseries: TimeSeriesProperty<string>;
	sensorTimeseries: TimeSeriesProperty<string | number>;
	geotimeSeriesReference: GeotimeSeriesProperty<GeoJSON.Point>;
}
export type GetWirePropertyValueFromClient<T extends keyof PropertyValueClientToWire | Record<string, keyof PropertyValueClientToWire>> = T extends keyof PropertyValueClientToWire ? PropertyValueClientToWire[T] : T extends Record<string, keyof PropertyValueClientToWire> ? { [K in keyof T] : PropertyValueClientToWire[T[K]] } : never;
