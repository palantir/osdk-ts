import type { TimeSeriesPoint, TimeSeriesProperty, TimeSeriesQuery } from "@osdk/api";
import type { MinimalClient } from "./MinimalClientContext.js";
export declare class TimeSeriesPropertyImpl<T extends number | string> implements TimeSeriesProperty<T> {
	#private;
	constructor(client: MinimalClient, objectApiName: string, primaryKey: any, propertyName: string);
	getFirstPoint(): Promise<TimeSeriesPoint<T>>;
	getLastPoint(): Promise<TimeSeriesPoint<T>>;
	getAllPoints(query?: TimeSeriesQuery): Promise<TimeSeriesPoint<T>[]>;
	asyncIterPoints(query?: TimeSeriesQuery): AsyncGenerator<{
		time: any
		value: T
	}, void, unknown>;
}
