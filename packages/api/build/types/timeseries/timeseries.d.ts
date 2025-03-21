export type TimeSeriesQuery = {
	$before: number
	$unit: keyof typeof TimeseriesDurationMapping
	$after?: never
	$startTime?: never
	$endTime?: never
} | {
	$after: number
	$unit: keyof typeof TimeseriesDurationMapping
	$before?: never
	$startTime?: never
	$endTime?: never
} | {
	$startTime: string
	$endTime?: string
	$before?: never
	$after?: never
	$unit?: never
} | {
	$startTime?: string
	$endTime: string
	$before?: never
	$after?: never
	$unit?: never
};
export type TimeseriesDurationUnits = "YEARS" | "MONTHS" | "WEEKS" | "DAYS" | "HOURS" | "MINUTES" | "SECONDS" | "MILLISECONDS";
export declare const TimeseriesDurationMapping: {
	sec: "SECONDS"
	seconds: "SECONDS"
	min: "MINUTES"
	minute: "MINUTES"
	minutes: "MINUTES"
	hr: "HOURS"
	hrs: "HOURS"
	hour: "HOURS"
	hours: "HOURS"
	day: "DAYS"
	days: "DAYS"
	wk: "WEEKS"
	week: "WEEKS"
	weeks: "WEEKS"
	mos: "MONTHS"
	month: "MONTHS"
	months: "MONTHS"
	yr: "YEARS"
	year: "YEARS"
	years: "YEARS"
	ms: "MILLISECONDS"
	milliseconds: "MILLISECONDS"
};
export interface TimeSeriesPoint<T extends string | number | GeoJSON.Point> {
	time: string;
	value: T;
}
export interface TimeSeriesProperty<T extends number | string> {
	/**
	* Queries the first point of the Timeseries
	*/
	readonly getFirstPoint: () => Promise<TimeSeriesPoint<T>>;
	/**
	* Queries the last point of the Timeseries
	*/
	readonly getLastPoint: () => Promise<TimeSeriesPoint<T>>;
	/**
	* Loads all points, within the given time range if that's provided
	* @param query - a query representing either an absolute or relative range of time
	* @example
	*  const points = await employee.employeeStatus?.getAllPoints({
	$after: 1,
	$unit: "month",
	});
	*/
	readonly getAllPoints: (query?: TimeSeriesQuery) => Promise<Array<TimeSeriesPoint<T>>>;
	/**
	* Returns an async iterator to load all points
	* within the given time range if that's provided
	* @param query - a query representing either an absolute or relative range of time
	* @example
	*  const iterator = employee.employeeStatus?.asyncIter({
	$after: 1,
	$unit: "month",
	});
	for await (const point of iterator) {
	// Handle time series point
	}
	*/
	readonly asyncIterPoints: (query?: TimeSeriesQuery) => AsyncGenerator<TimeSeriesPoint<T>>;
}
export interface GeotimeSeriesProperty<T extends GeoJSON.Point> {
	/**
	* Queries the last point of the Geotime series
	*/
	readonly getLatestValue: () => Promise<TimeSeriesPoint<T> | undefined>;
	/**
	* Loads all points, within the given time range if that's provided
	* @param query - a query representing either an absolute or relative range of time
	* @example
	*  const points = await employee.employeeStatus?.getAllPoints({
	$after: 1,
	$unit: "month",
	});
	*/
	readonly getAllValues: (query?: TimeSeriesQuery) => Promise<Array<TimeSeriesPoint<T>>>;
	/**
	* Returns an async iterator to load all points
	* within the given time range if that's provided
	* @param query - a query representing either an absolute or relative range of time
	* @example
	*  const iterator = employee.employeeStatus?.asyncIter({
	$after: 1,
	$unit: "month",
	});
	for await (const point of iterator) {
	// Handle time series point
	}
	*/
	readonly asyncIterValues: (query?: TimeSeriesQuery) => AsyncGenerator<TimeSeriesPoint<T>>;
	/**
	* The most recently fetched value for the latest point in the GTSR.
	* This will not be loaded automatically upon object load, but will be refreshed every time
	* getLatestValue() is called
	*/
	readonly lastFetchedValue: TimeSeriesPoint<T> | undefined;
}
