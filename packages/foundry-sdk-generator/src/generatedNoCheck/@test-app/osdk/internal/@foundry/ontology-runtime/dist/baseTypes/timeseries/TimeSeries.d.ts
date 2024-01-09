import type { TimeSeries as OG_TimeSeries } from '@osdk/legacy-client';
/** @deprecated submodule imports arent public api **/
export type TimeSeries<T extends number | string> = OG_TimeSeries<T>;
