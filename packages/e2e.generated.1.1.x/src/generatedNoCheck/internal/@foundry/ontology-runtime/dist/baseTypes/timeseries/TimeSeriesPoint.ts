import { TimeSeriesPoint as OG_TimeSeriesPoint } from '@osdk/legacy-client';

/** @deprecated submodule imports aren't public api **/
export type TimeSeriesPoint<T extends number | string> = OG_TimeSeriesPoint<T>;
