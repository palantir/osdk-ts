import type { TimeSeriesQuery } from "@osdk/api";
import type { TimeRange } from "@osdk/foundry.ontologies";
export declare function getTimeRange(body: TimeSeriesQuery): TimeRange;
export declare function asyncIterPointsHelper<T extends number | string | GeoJSON.Point>(iterator: Response): AsyncGenerator<{
	time: any
	value: T
}, void, unknown>;
