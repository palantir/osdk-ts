import type { GeotimeSeriesProperty, TimeSeriesPoint, TimeSeriesQuery } from "@osdk/api";
import type { MinimalClient } from "./MinimalClientContext.js";
export declare class GeotimeSeriesPropertyImpl<T extends GeoJSON.Point> implements GeotimeSeriesProperty<T> {
	#private;
	lastFetchedValue: TimeSeriesPoint<T> | undefined;
	constructor(client: MinimalClient, objectApiName: string, primaryKey: any, propertyName: string, initialValue?: TimeSeriesPoint<T>);
	getLatestValue(): Promise<TimeSeriesPoint<T> | undefined>;
	getAllValues(query?: TimeSeriesQuery): Promise<TimeSeriesPoint<T>[]>;
	asyncIterValues(query?: TimeSeriesQuery): AsyncGenerator<{
		time: any
		value: T
	}, void, unknown>;
}
