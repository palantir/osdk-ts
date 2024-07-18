import type { TimeSeriesQuery as OG_TimeSeriesQuery } from '@osdk/legacy-client';

/** @deprecated submodule imports arent public api **/
export type TimeSeriesQuery<T extends number | string> = OG_TimeSeriesQuery<T>;
