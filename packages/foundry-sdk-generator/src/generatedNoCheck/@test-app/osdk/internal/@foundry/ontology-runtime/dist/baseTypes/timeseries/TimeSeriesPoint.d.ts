import type { TimeSeriesPoint as OG_TimeSeriesPoint } from '@osdk/legacy-client';
/** @deprecated submodule imports arent public api **/
export type TimeSeriesPoint<T extends number | string> = OG_TimeSeriesPoint<T>;
